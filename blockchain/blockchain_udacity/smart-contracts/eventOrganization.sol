// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

// Facts about the contract
  // Entities: 1. Organizer, 2. Event, 3. Attendee
  // In order to attend this event, an attendee needs to buy a ticket
  // An attendee also has the ability to the ticket bought to any other address.
contract EventContract{
    struct Event {
        address organizer;
        string name;
        uint date;
        uint price;
        uint ticketCount;
        uint ticketRemaining;
    }

    mapping(uint => Event) public events; //details of the event
    mapping(address => mapping(uint => uint )) public tickets; // Know how many ticks that an address bought by an attendee/address

    uint public nextId;

    function createEvent(string calldata name, uint date, uint price, uint ticketCount) public {
        require(block.timestamp < date, "You cannot create an event for past date");
        require(ticketCount > 0, "Ticket count must be greater than 0");
        events[nextId] = Event(msg.sender, name, date, price, ticketCount, )
    }
    

    function buyTicket(uint id, uint quantity) public payable {
        require(events[id].date != 0, "Event does not exist") //Ensuring that date exists
        require(events[id].date > block.timestamp, "Event has ended");
        Event storage _event = events[id];
        require(msg.value == (_events.price * quantity), "Ether not enough");
        require(_event.ticketRemaining >= quantity, "Not Enough Tickets Left");
        _event.ticketRemaining -= quantity;
        tickets[msg.sender][id] += quantity;
    }
  
    function transferTicket(uint id, uint quantity, address to) public {
        require(events[id].date != 0, "Event Does Not Exit");
        require(events[id].date > block.timestamp, "Event Has Ended");
        require(tickets[msg.sender], "You do not have enough tickets to transfer");
        tickets[msg.sender][id] -= quantity;
        tickets[to][id] += quantity;
    }

    


}