// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.26;

import {Withdraw} from "./utils/Withdraw.sol";
import {IRouterClient} from "@chainlink/contracts-ccip/src/v0.8/ccip/interfaces/IRouterClient.sol";
import {Client} from "@chainlink/contracts-ccip/src/v0.8/ccip/libraries/Client.sol";

import {ERC20} from "solmate/tokens/ERC20.sol";

// Sepolia
contract ArgentumSender is Withdraw {
    event StakeCollateral(bytes32 messageId, address sender, uint256 amount);
    event ReceiveCollateral(address who, uint256 amount);

    uint64 public FUJI_CHAIN_SELECTOR = 14767482510784806043;
    address broker;
    address collateralToken;
    address routerAddress = 0x0BF3dE8c5D3e8A2B34D2BEeB17ABfCeBaf363A59;

    function setBroker(address _broker) external {// TODO: onlyOwner
        broker = _broker;
    }

    function setCollateralToken(address _collateralToken) external {// TODO: onlyOwner
        collateralToken = _collateralToken;
    }

    receive() external payable {}

    function stakeCollateral(uint256 _amount) external {
        ERC20(collateralToken).transferFrom(msg.sender, address(this), _amount);
        bytes memory mintMsg = abi.encodeWithSignature("mint(address,uint256)", msg.sender, _amount);

        Client.EVM2AnyMessage memory message = Client.EVM2AnyMessage({
            receiver: abi.encode(broker),
            data: abi.encode(mintMsg),
            tokenAmounts: new Client.EVMTokenAmount[](0),
            extraArgs: Client._argsToBytes(
                Client.EVMExtraArgsV1({gasLimit: 200_000})
            ),
            feeToken: address(0)
        });

        uint fee = IRouterClient(routerAddress).getFee(FUJI_CHAIN_SELECTOR, message);
        bytes32 latestMessageId = IRouterClient(routerAddress).ccipSend{value: fee}(FUJI_CHAIN_SELECTOR, message);

        emit StakeCollateral(latestMessageId, msg.sender, _amount);
    }

    function receiveCollateral(address _who, uint256 _amount) external {
        require(broker == msg.sender, 'Not broker');

        ERC20(collateralToken).transfer(_who, _amount);

        emit ReceiveCollateral(_who, _amount);
    }
}