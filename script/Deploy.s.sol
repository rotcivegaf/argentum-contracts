// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.19;

import {BaseScript, console} from "./BaseScript.s.sol";
import {ArgentumSender} from "../src/ArgentumSender.sol";
//import {MessageBroker} from "../src/MessageBroker.sol";
//import {MessageReceiver} from "../src/MessageReceiver.sol";

contract DeploySender is BaseScript {
    function run() external {
        vm.startBroadcast(PRIVATE_KEY);

        // deploys: ArgentumSender
        ArgentumSender argentumSender = new ArgentumSender();
        MESSAGE_SENDER_ADDRESS = payable(address(argentumSender));

        console.log(
            "MessageSender[%s]: %s",
            block.chainid,
            MESSAGE_SENDER_ADDRESS
        );

        vm.stopBroadcast();
    }
}

/*
// https://testnet.snowtrace.io/address/0x17a5bEc543A4576fa41Bf4A3e05ABB7451d5b877/contract/779672/code
contract DeployBroker is BaseScript {

    function run() external {
        vm.startBroadcast(PRIVATE_KEY);
        console.log(vm.addr(PRIVATE_KEY));
        console.logBytes32(bytes32(PRIVATE_KEY));

        // deploys: MessageBroker
        MessageBroker messageBroker = new MessageBroker(FUJI_ROUTER_ADDRESS);
        MESSAGE_BROKER_ADDRESS = payable(address(messageBroker));

        console.log(
            "MessageBroker[%s]: %s",
            block.chainid,
            MESSAGE_BROKER_ADDRESS
        );

        vm.stopBroadcast();
    }
}
// https://779672.testnet.snowtrace.io/address/0x0cd2E31eb378110DDD62778E136ba664A624b1CA/contract/779672/code
contract DeployReceiver is BaseScript {

    function run() external {
        vm.startBroadcast(PRIVATE_KEY);
        console.log(vm.addr(PRIVATE_KEY));
        console.logBytes32(bytes32(PRIVATE_KEY));

        // deploys: MessageReceiver
        MessageReceiver messageReceiver = new MessageReceiver(TELEPORTER_MESSENGER_ADDRESS);
        MESSAGE_RECEIVER_ADDRESS = payable(address(messageReceiver));

        console.log(
            "MessageReceiver[%s]: %s",
            block.chainid,
            MESSAGE_RECEIVER_ADDRESS
        );

        vm.stopBroadcast();
    }
}
*/