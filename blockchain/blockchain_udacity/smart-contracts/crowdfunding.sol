// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

// Facts about the contract
  // Contributors send ether to smartcontract while smart contract sends total ether to the organzation or course in need of the fund. 
  // Entities: 1. Manager, 2. recipient, 3. contributors
  
  // Flow:
  // The manager opens up the crowdfunding platform for a recipient (for e.g. child education)
  // Once contract has been created, the contributors will begin to send ether to suppor the recipient
  // If there is 50+ contributors then funds from the contract can be sent to the recipient
contract crowdFunding {
  struct Request {
    string decription;
    address payable recipient;
    uint value;
    bool completed;
    uint noOfVoters;
    mapping(address => bool) votter;
  }

  mapping(address => uint) public contributors;
  mapping(uint => Request) public requests;
  address public manager;  
  address public minimumContribution;
  uint public deadline;
  uint public target;
  uint public noOfContributors;

  constructor(uint _target, uint _deadline){
    target = _target;
    deadline = block.timestamp + _deadline; // e.g. 500sec + 60sec = 560sec
    minimumContribution = 100wei;
    manager = msg.sender;
  }

  modifier onlyManager {
    require(msg.sender == manager, "You are not the manager");
    _;
  }
  function createRequests(string calldata _description, address payable _recipient, uint _value) public onlyManager{
    Request storage newRequest = requests[numRequests];
    numRequests++;
    newRequest.description = _description;
    newRequest.recipient = _recipient;
    newRequest.value = _value;
    newRequest.completed = false;
    newRequest.noOfVoters = 0
  }

  function contribution() public payable {
    require(block.timestamp(deadline,), "Deadline has passed");
    require(msg.value > minmuContribution, "Minimum Contritibon reqired is 100 wei");

    if(contributors[msg.sender] == 0) {
        noOfContributors++;
    }

    contributors[msg.sender] += msg.value;
    raisedAmount += msg.value
  }

  function getBalance() public view returns(uint) {
    return address(this).balance;
  }

  function refund() public {
    require(block.timestamp > deadline && raisedAmount < target, "You are not eligible for refund");
    require(contributors[msg.sender] > 0, "You are not a contributor");
    payable(msg.sender).transfer(contributors[msg.sender]);
    contributors[msg.sender] = 0;
  }

  function voteRequest(uint _requestNo) public {
    require(contributors[msg.sender] > 0, "You are not a contributor");
    Request storage thisRequest = request[_requestNo];
    require(thisRequest.voters[msg.sender] == false, "You have already voted");
    thisRequest.voters[msg.sender] = true;
    thisRequest.noOfVoters++;
  }

  function makePayment(uint _requestNo) public onlyManager{
    require(raisedAmount >= target, "Target is not reached");
    Request storage thisRequest = requests[_requestNo];
    require(thisRequest.completed == false, "The request has been completed");
    require(thisRequest.noOfVoters > noOfContributors/2, "Majority does not support the request");
    thisRequest.recipient.transfer(thisRequest.value);
    thisRequest.completed = true;
  }
}