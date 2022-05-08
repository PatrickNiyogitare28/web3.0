// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Transactions {
    uint256 transadctionCount;

    event Transfer(address from, address receiver, uint amount, string message, uint256 timestamp, string keyworld);

    struct TransferStruct{
        address sender;
        address receiver;
        uint256 amount;
        string message;
        uint256 timestamp;
        string keyword;
    }

    TransferStruct[] transactions;

    function addToBlockChain(address payable receiver, uint amount, string memory message, string memory keyword) public {
        transadctionCount += 1;
        transactions.push(TransferStruct(msg.sender, receiver, amount, message, block.timestamp, keyword));

        emit Transfer(msg.sender, receiver, amount, message, block.timestamp, keyword);
    }

    function getAllTransactions() public  view returns (TransferStruct[] memory) {

    }

     function getTransactionCounts() public view returns (uint256) {

    }

}