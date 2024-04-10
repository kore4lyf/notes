// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

// Facts about the lottery contract
  // There is a Manager and a player who will interact with the smart contract
  // In order to participate in the lottery the play must pay 1 ether (participate())
  // In order to run this lottery and draw a winner (pickWinner()), there must be 3 at least participants, who are participating in the lottery
  // On the Manager Picks a winner (pickWinner()) the winner is randomly selected
  // Once a winner gets selected all the ethers gets transfered to the winner
contract lottery{
  address public manager;
  address payable[] public players;
  address payable public winner;

  constructor() {
    manager = msg.sender; // The address that deploys the contract
  }

  function participate() public payable {
    require(msg.value == 1 ether, "Please pay 1 ether only");
    players.push(payable(msg.sender));
  }

  function getBalance() public view returns(uint) {
    require(manager == msg.sender, "You are not the manager");
    return address(this).balance;
  }

  function random() internal view returns(uint){
    // This is not a good solution to get a random number, use an oracle instead.
    return uint(keccak256(abi.encodePacked(block.difficulty, block.timestamp, players.length)));
  }

  function pickWinner() public {
    require(manager == msg.sender, "You are not the manager");
    require(players.length >= 3, "Players are less than 3");

    uint r = random();
    uint index = r % players.length;

    winner = players[index];

    winner.transfer(getBalance());

    // After winner has been selected, we'd restart the player array by initiallizing it back to zero.
    players = new address payable[](0);
  }
}