# Argentum Bridge

![Argentum](./img/Argentum.png)

Our bridge contract uses Chainlink Cross-Chain Interoperability Protocol (CCIP) technology to transfer Aave USDC(AUSDC) from ethereum to the C-chain.

The user deposits AUSDC into our ArgentumSender contract, it locks these funds and sends the `mint(address,uint256)` message to the ArgentumBroker contract on the C-Chain using CCIP.

The `mint` function of the ArgentumBroker contract adds collateral and sends tokens to the Argentum L1 that are to be used as Native using the Avalanche Interchain Token Transfer(ICTT).

The user at any time can return his assets to ethereum using our reverse wing bridge, and the ethereum contract returns his AUSDCs to him.

The interesting thing about this is that the AUSDCs have an earned interest within AAVE so the user will generate a return for staking his tokens in our network and this generates an incentive to generate liquidity in our network.

## Contracts

- ArgentumSender: [0x22f6a98a7cc0e4e234d4690cfac467f009a6de04](https://sepolia.etherscan.io/address/0x22f6a98a7cc0e4e234d4690cfac467f009a6de04#code)
- ArgentumBroker: [0x65D3b31E5dB9705B5A99E2c87dc087B139e84f37](https://subnets-test.avax.network/c-chain/address/0x65D3b31E5dB9705B5A99E2c87dc087B139e84f37)
- [MockAUSDC](https://sepolia.etherscan.io/address/0x26f12a1c97809456140b8699b28c7c649aa8e604#writeContract)

## Transactions

Bridge AUSDC from sepolia to C-Chain using CCIP:
  - Send message: [stakeCollateral](https://sepolia.etherscan.io/tx/0xc121a5300d8317b42248c9712ec7a4674145e4cce2002286dec4d9cefc435add)
  - CCIP: [message](https://ccip.chain.link/#/side-drawer/msg/0xD34AEA78C405E50D5B72BA9DFEBC52E5423D5218512E9485D59171CF0F9AEE84)
