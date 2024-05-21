// SPDX-License-Identifier: MIT

pragma solidity ^0.7.4;

contract Message{
    string message = '';

    function setMessage(string memory _message) public {
        message = _message;
    }

    function getMessage() public view returns(string memory) {
        return message;
    }
}