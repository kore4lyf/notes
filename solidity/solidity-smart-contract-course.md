# Smart Contracts

## What is Ethereum

The idea behind ethereum is that, the blockchain can handle more than balancing transactions.

Ethereum offers two types of accounts.

1. EOA - Externally owned accounts
2. Contract Accounts

## Solidity

### Variables

- Bool - True or False
- Integers - int8 - 256 / uint8 - uint256
- Fixed numbers (i.e. Decimal/Float, to be added)
- Address
- Bytes
- String, Hex and Enum


#### Integers

int8: -126 to -127
uint: 0 to 128

int16: -32,768 to 32,767
uint16: 0 to 32,767

uint32: -2,147,483,648 to 2,147,483,647

...
...

int256: -1157920.................................. to 1157920.............................

uint256:
int256: 0 to 1157920.............................

##### Overflow

As in any other programming language we can have overflow and underflow of a number.

e.g.
uint8 num= 0
// num - 1 will give us 127

#### Members of Addresses

1. `<address>.balance` - Balance of the Address in Wei
2. `<address>.transfer(uint256 amount)` - Sends a given amout of Wei to address, throws on failure.
   Fowards 2300 gas stipend, not adjustable.
3. `<address>.send(uint256 amount) returns (bool)` - Send given amount of Wei to address, returns false on failure.
   Fowards 2300 gas stipend, not adjustable.
4. `<address>.call(...) returns (bool)` - Issue-low-level CALL, returns false on failure.
   Fowards 2300 gas stipend, not adjustable.
5. `<address>.callcode(...) returns (bool)` - Issue low-level CALL CODE, returns false on failure.
   Forwards all available gas, adjustable. 
6. `<address>.delegatecall(...) returns (bool)` - Issue low-level DELEGATE CALL, returns false on failure.
   Forwards all available gas, adjustable.

#### Bytes

[bytes1, bytes2, byte3, ..., bytes32]
byte is an alias for bytes1.

Bytes are the binary representation of data. Cheaper than saving data as strings.

Bytes can be use in one Smart contract to another smart contract relation.

#### String, Hex and Enum

Strings are written with either double or single-quotes 
e.g.
```"foo" ```
or 
```'bar'```

Hexadecimal Literals are prefixed with the keyword `hex` and are enclosed in double or single-quotes
e.g.
```hex"001122FF"```
or
```hex'001122FF'```

Enums are one way to create a user-defined type in solidity.
e.g.
```enum ActionChoice { GoLeft, GoRight, GoStraight, StayStill }```


### Contract, Constructors & Functions

#### Contracts

Structure of a solidity contract

```sol
pragma solidity ^0.4.24;

constract ContractName {
  // <variable declaration>
  // <mappings>
  // <constructor>
  // <functions>
  // <modifiers>
}
```

#### Constructors

Example:

```sol
contract OwnedToken {
  TokenCreator creator;
  address owner;
  bytes32 name;

  constructor(bytes32 _name) public {
    owner = msg.sender;
    creator = TokenCreator(msg.sender);
    name = _name;
  }
}

constract TokenCreator {....}
```

Constructor is a function that runs only once when a contract is deployed to a network.

#### 

#### Functions

Structure of a solidity function

```sol
functioni functionName (<parameter types>) {public|private|etc.} {pure|view|payable} [returns(<return types>)] {
  ...
}
```

- visiblity Declaration - ```pure|view|payable```
- State Mutability - ```pure|view|payable```
- Function return type - ```returns(<return types>)```

##### Variable Visibility

Solidity is a statically typed language, which means the type of a variable must be specified earlier before usage.

- **public** - Default for functions. Can be called internally and externally.
- private - Can be called only inside the contract they are defined in.
- **internal** - Can only be accessed internally (from within the current contract or contracts deriving from it)
- **external** - (Only for functions) State variables can't be exteral. Can be called from other contracts and via transactions. Internal calls needs ```this.```. (can cost less gas sometimes)

External functions are more efficient when they receive large amount of data, making it cost less gas.

Example:

```sol
pragma solidity ^0.4.24;

constract SampleContract {
  uint256 external age; // ERROR: Can't use external for variables

  function test(uint[20] a) public pure returns (uint) {
    return a[10] * 2;
  }

  function test2(uint[20] a) external pure returns (uint) {
    return a[10] * 2; // use less gas
  }

  function test3(uint[20] a) public view {
    this.test2(a); // Will throw an error if this was not used to refer to the function.
  }

}
```

> To call external functions internally you ned to add ```this.``` to reference the function.

Example:

```sol
pragma solidity ^0.4.0;

contract C {
  uint private data;

  function f(uint a) private returns(uint b) { return a+1; }
  function setData(uint a) public { data = a; }
  function getData() public returns(uint) { returns data; }
  function compute(uint a, uint b) internal returns(uint) { return a+b }
}

contract D {
  function readData() public {
    C c = new C();
    uint local = c.f(7); // error: member 'f', is not visible
    c.setData(3);
    local = c.getData();
    local = c.compute(3, 5); // error: member 'compute', is not visible
  }
}

// E inherits from C
contract E is C {
  function g() public {
    C c = new C();
    uint val = compute(3, 5); // Access to internal memeber (Due to inheritance)
  }
}
```

##### State Mutability (Only for functions)

- **view** - Promises not to modify the state.
- **pure** - Promises not to read from or modify the state.
- **payable** - These functions can receive ether.

Example:

**view**:

```sol
pragma solidity ^0.4.24;

contract C {
  function f(uint a, uint b) public view returns (uint) {
    return a * (b + 42) + now;
  }
}

```

In a view function, you can't do the following:

1. Writing to state variables
2. Emitting events
3. Creating other contracts
4. Using selfdestruct
5. Sending Ether via calls
6. calling any function not marked view or pure
7. Using low-level calls
8. Using inline assembly that contains certain opcodes

Example:

**pure**:

```sol
pragma solidity ^0.4.24;

contract SampleContract {
  function func1(uint x, uint y) private pure returns (uint) {
    return x * (y + 42);
  }

  function func2(uint a) private pure returns (uint b) {
    return a + 1;
  }

  function func2() public pure returns (string) {
    return "You are Awesome!";
  }

}
```

In a view function, you can't do the following:

1. Reading from state variables
2. Accessing this.balance or `<address>`.balanace
3. Accessing any of the memebers of block, tx, msg (with the exception fo msg.sig and msg.data)
4. Calling any function not marked pure.
5. Using inline assembly that contains certain opcodes.

Examples:

**Payable**:
You need to provide the 'payable' keyword, otherwise the function will reject all Ether sent to it.

```sol
pragma solidity ^0.4.24;

contract Sample {
  uint public amount = 0;

  function payme() public payable {
    amount += msg.value;
  }
}
```

