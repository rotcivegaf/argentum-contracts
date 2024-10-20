// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import {ERC20} from "solmate/tokens/ERC20.sol";

contract MockAUSDC is ERC20("Mock AUSDC","MAUSDC", 18) {
    constructor() {
        _mint(msg.sender, 10000e18);
    }

    function mint(address sender, uint256 amount) external {
        _mint(sender, amount);
    }

    function burn(uint256 amount) external {
        _burn(msg.sender, amount);
    }
}