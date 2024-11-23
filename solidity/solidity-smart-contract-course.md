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

The default visiblity of any variable is internal (i.e. I can only be used by it's contract any contract that inherits it's contract)


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


Example: 

```sol
// SPDX-License-Identifier: MIT

pragma solidity ^0.7.4;

contract VariableExamples {
  bool public switchedOn = true;
  address public owner = msg.sender;
  uint public number = 8;
  bytes32 public awesome1 = "Solidity is awesome!";
  string public awesome2 = "Solidity is awesome!";
}
```
bytes32: 0x536f6c696469747920697320617765736f6d6521000000000000000000000000

Same as
string: "Solidity is awesome!"

Example:

As a smart contract developer or a software developer you need to handle overflow and underflow.

```sol
// SPDX-License-Identifier: MIT

pragma solidity ^0.7.4;

contract OverflowAndUnderflow {
  function overflow() public pure returns(uint256) {
    uint max = 2**256 - 1;
    return max + 1; // 0
  }

  function underflow() public pure returns(uint256) {
    uint min = 0;
    return min - 1; // 115792089237316195423570985008687907853269984665640564039457584007913129639935
  }
}
```

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

### Getters & Setters

A Getter is a function that gets the value of a property a setter is a function that sets the value of a property.

Getter:

```sol
contract SampleContract {
  uint256 public publicNumber;
  uint8 private secretNumber;

  function getSecret() view public returns(uint8) {
    return secreteNumber;
  }
}
```

public variables automatically get a getter function.

Setter:

```sol
// SPDX-License-Identifier: MIT

pragma solidity 0.7.4;

contract MessageContract {
  string private message = "Hello, world";

  function getMessage() public view returns(string memory) {
    return message;
  }

  function setMessage(string memory newMessage) public {
    message = newMessage;
  }
}
```

### Arrays

Arrays are series of objects of the same size and type.

```sol
pragma solidity ^0.7.4;

contract SampleContract {
  uint8[3] nums = [10, 20, 30];

  function getNums() public returns (uint8[3]) {
    nums[0] = 11;
    nums[1] = 22;
    nums[2] = 33;

    return nums;
  }

  function getLength() view public returns(uint) {
    return nums.length;
  }
}
```

Dynamic Arrays:

```sol
pragma solidity ^0.7.4;

contract Score {
  uint24[] score;

  function addScore(uint24 s) public returns(uint24[]) {
    score.push(s);
    return score
  }

  function getLength() public view returns(uint) {
    return score.length;
  }

  function clearArray() public returns(uint24[]) {
    delete score;
    return score;
  }
}
```

### Memory vs Storage

Storage variables define contract state and can only be changed by transaction calls.

Memory Variable are variable that only exists inside the calling function. They get wiped after the function exits and they are generally cheaper than storage.

Example:

```sol
pragma solidity 0.7.4;

contract arrayStorageMemory {
  uint[20] public arr; // Storage by default

  function startChange() public {
    firstChange(arr);
    secondChange(arr);
  }

  function firstChange(uint[20] storage x) internal { // Can be storage
    x[0] = 4;
  }

  function secondChange(uint[20] memory x) internal pure { // Memory by default
    x[0] = 3;
  }
}
```

What you will notice from call the both functinos (firstChange and secondChange) is that when you get the value of x[0], will be equal to 4. That is because storage data always persist.


### Mapping

Mappings are referred to hash tables with key type and value type.

```sol
pragma solidity ^0.7.4;

contract Bank {
  mapping(address => int) public accounts;

  function deposit(uint money) public {
    accounts[msg.sender] += money;
  }

  function withdraw(uint money) public {
    accounts[msg.sender] -= money
  }
}
```

Example:

```sol
pragma solidity ^0.7.4;

contract SimpleToken {
  address owner;
  mapping(address => uint256) public accounts;

  constructor(uint256 initialSupply) {
    owner = msg.sender;
    accounts[owner] = initialSupply;
  }

  function transfer(address to, uint256 value) public {
    require(accounts[msg.sender] >= value, "You do not have enough Eth in your wallet"); //  Check balance
    require(accounts[to] + value >= accounts[to]); // Overflow Check

    accounts[msg.sender] -= value;
    accounts[to] += value; // Subtract and add
  }

  function getAddressBalance(address addr) public view returns(uint256) {
    return accounts[addr];
  }

  function getBalance() public view returns(uint256) {
    return accounts[msg.sender];
  }

  function availableSupply () public view returns(uint256) {
    return address(this).balance;
  }

  function transferEtherToContract(uint256 value) public payable{
    require(value > 0);
    
  } 
}
```

### Struct

Solidity gives us a way to define new types in the form of struct.

**Structs are like objects** with different type of types inside.

Structs can be used inside mappings, arrays and it can contain arrays and mappings.
It is not possible for a struct to contain a member of its own type, although the struct itself can be the value type of a mapping member.

```sol
// SPDX-License-Identifier: MIT

pragma solidity ^0.7.4;

contract Bank {
  struct Account {
    address addr;
    uint balance;
  }

  Account public acc = Account({
    addr: 0x9278430A2e5088b7659f59D15Bc4961963527b00,
    balance: 50
  });

  Account public daniel = Account({
    addr: 0x5E3232CB6Ae602Ed1DC2d62Ca1f9Ae2754A3Cb6A,
    balance: 1000
  });

  function addAmount(uint _amount) public {
    acc.balance += _amount;
  }

  function withdraw(uint _amount) public {
    require(acc.balance >= _amount, "Insufficient Balance");
    acc.balance -= _amount;
  }

  function transferToDaniel(uint256 _amount) public {
    require(acc.balance >= _amount, "Insufficient Balance");
    require(daniel.balance + _amount > daniel.balance);
    acc.balance -= _amount;
    daniel.balance += _amount;
  }
}
```

### Error Handling and Restriction

Solidity uses state reverting exceptions to handle errors.

- assert()
- require()
- revert()

#### Require

```sol
pragma solidity ^0.7.4;

contract Bank {
  mapping(address => uint) public accounts;

  function deposit() public payable {
    require(accounts[msg.sender] + msg.value >= accounts[msg.sender], "Overflow error");
    accounts[msg.sender] += msg.value;
  }

  function withdraw(uint money) public {
    require(money <= accounts[msg.sender]); // Prevents user from withdrawing more than what is owned.
    accounts[msg.sender] -= money;
  }
}
```

- Valide user inputs
- Validate the response from an external contract i.e use require(external.send(amount))
- Validate state conditions prior to executing state changing operations, for example in an owned contract situation.
- Generally, you should use require more often.
- Generally, it will be used towards the beginning of a function.

#### Revert

The ```revert``` works basically as the ```require``` function, however it can be used as a flag when a more complex if conditions are met.

```revert``` makes a transaction go back to a previous state.
```revert``` and ```require``` returns all the remaining gas

```sol
prama solidity ^0.7.4;

contract Bank {
  mapping(address => uint) public accounts;

  function deposit() public payable {
    if(accounts[msg.sender] + msg.value >= accounts[msg.sender]) {
      revert("Overflow error");
    }
      accounts[msg.sender] += msg.value;
  }

  function withdraw(uint money) public {
    if(money <= accounts[msg.sender]) {
      revert();
    }
    require(money <= accounts[msg.sender]); // Prevents user from withdrawing more than what is owned.
    accounts[msg.sender] -= money;
  }
}
```

- Same as require()
- Will undo all the changes you had made in the blockchain
- if/else logic flow. For complex checks
- Refund remaining gas

#### Assert

```assert(bool condition)```

Invalidates the transaction if the condition is not met - to used for **internal** errors.

```sol
pragma solidity ^0.7.4;

contract Math {
  function add(uint256 a, uint256 b) internal pure returns(uint) {
    c = a + b;
    assert(c >= a) // Will check for overflow internal variants
    return c;
  }

  function multiply(uint256 a, uint256 b) internal pure returns (uint) {
    if(a == 0) {
      return 0;
    }

    c = a * b;

    assert(c/a == b) // Will check for overflow internal variants

    return c
  }
}
```

Assert will use all of the remaining gas.

Use assert to avoid condition that should never ever be possible.

> Assert validates states after making changes.


- Checks for overflow/underflow
- Checks for invaraints
- validate contract state after making changes
- Avoid conditions which should never, ever be possible.
- Generally, you should use assert less often
- Generally, it will be use towards the end of you function

### Modifier

Modifiers cna be used to easily change the behaviour of functions. For example, they can automatically check a condition prior to executing the function.

**Modifiers are inheritable propertise of contracts and may be overriden by derived contracts.**

```sol
pragma solidity ^0.7.4;

contract Purchase {
  address public seller;

  modifier onlySeller { // modifier
    require(msg.sender == seller); // Usually for restrictions
    _; // A placeholder for the rest of the code
  }

  function abort() public onlySeller{ // modifer usage
    // ...
  }
}
```

Example:

```sol
pragma solidity ^0.7.4;

contract owned {
  address owner;

  constructor() {
    owner = msg.sender;
  }

  modifier onlyOwner {
    require(msg.sender == owner);
    _;
  }
}

contract mortal is owned {
  function close() public onlyOwner { // onlyOwner is inherted from owne but overridden here
    selfDestruct(owner); // Destroys the contract
  }
}
```

### Library

A library is a different type of contract that doesn't have any storage and cannot hold Ether.

- No state variables
- Cannot inherit nor be inherted
- Cannot receive Ether

```sol
pragma solidity ^0.7.4;

library SafeMath {
  function mul(uint256 a, uint256 b) internal pure returns(uint256) {
    uint256 c = a * b;
    assert(a == 0 || c/a == b);
    return c;
  }

  function div(uint256 a, uint256 b) internal pure returns(uint256) {
    // assert(b > a); // Solidity automatically throws when dividing by 0;
    uint256 c = a/b;
    return c;
  }

  function sub(uint256 a, uint256 b) internal pure returns(uint256) {
    assert(b <= a);
    return a - b;
  }

  function add(uint256 a, uint256 b) internal pure returns(uint256) {
    uint256 c = a + b;
    assert(c >= a);
    return c;
  }
}
```

#### USING OR IMPORTING THE LIBRARY

Codes can be imported from github or locally

```sol
pragma solidity ^0.7.4;

// import the library from github
import "github.com/OpenZeppelin/zeppelin-solidity/contracts/math/SafeMath.sol";

contract Bank {
  mapping(address => uint) public accounts;
  using SafeMath for uint256; // Define for what you use SafeMath

  function deposit() public payable {
    require(accounts[msg.sender] + msg.value => accounts[msg.sender], "Overflow error");
    accounts[msg.sender] = accounts[msg.sender].add(msg.value);
  }

  function withdraw(uint money) public {
    require(money <= account[msg.sender]);
    accounts[msg.sender] = accounts[msg.sender].sub(money);
  }
}
```

Although the we are expected to provide to parameters to the library functions, but we are allowed to do 
e.g parameter1.func(parameter2)
i.e accounts[msg.sender].sub(money);

#### Global Variables

**BLOCK AND TRANSACTION PROPERTIES:**

- **block.blockhash(uint blockNumber) returns (bytes32)**: hash of the given block - only works for 256 most recent, excluding current, blocks - deprecated in version 0.4.22 and replaced by blockhash(uint blockNumber).

- **block.coinbase (address)**: current block miner’s address

- **block.difficulty (uint)**: current block difficulty

- **block.gaslimit (uint)**: current block gaslimit

- **block.number (uint)**: current block number

- **block.timestamp (uint)**: current block timestamp as seconds since unix epoch

- **gasleft() returns (uint256)**: remaining gas

- **msg.data (bytes)**: complete calldata

- **msg.gas (uint)**: remaining gas - deprecated in version 0.4.21 and to be replaced by gasleft()

- **msg.sender (address)**: sender of the message (current call)

- **msg.sig (bytes4)**: first four bytes of the calldata (i.e. function identifier)

- **msg.value (uint)**: number of wei sent with the message

- **now (uint)**: current block timestamp (alias for block.timestamp)

- **tx.gasprice (uint)**: gas price of the transaction

- **tx.origin (address)**: sender of the transaction (full call chain)

**CRYPTOGRAPHIC AND MATH FUNCTIONS:**

- **addmod(uint x, uint y, uint k) returns (uint)**: compute (x + y) % k where the addition is performed with arbitrary precision and does not wrap around at 2**256. Assert that k != 0 starting from version 0.5.0.

- **mulmod(uint x, uint y, uint k) returns (uint)**: compute (x * y) % k where the multiplication is performed with arbitrary precision and does not wrap around at 2**256. Assert that k != 0 starting from version 0.5.0.

- **keccak256(...) returns (bytes32)**: compute the Ethereum-SHA-3 (Keccak-256) hash of the (tightly packed) arguments

- **sha256(...) returns (bytes32)**: compute the SHA-256 hash of the (tightly packed) arguments

- **sha3(...) returns (bytes32)**: alias to keccak256

- **ripemd160(...) returns (bytes20)**: compute RIPEMD-160 hash of the (tightly packed) arguments

- **ecrecover(bytes32 hash, uint8 v, bytes32 r, bytes32 s) returns (address)**: recover the address associated with the public key from elliptic curve signature or return zero on error (example usage)

**CONTRACT RELATED:**

- **this (current contract’s type)**: the current contract, explicitly convertible to Address

- **selfdestruct(address recipient)**: destroy the current contract, sending its funds to the given Address

- **suicide(address recipient)**: deprecated alias to selfdestruct

### Abstract Contracts, Inheritance and Interfaces

#### Abstract Contracts and Inheritance

Contracts are marked as Abstract when at least one of their functions lacks an implementation.

The function without implementation must be implemented in all child contracts.

```sol
pragma solidity ^0.7.4;

contract Animal {
  string public breed;
  uint public age;
  uint public weight;

  contructor() public {
    age = 1;
    weight = 1;
  }

  function sleep() pure public returns(string) { return "Zzz..."}

  function eat() pure public returns(string) { return "Nom nom..."; }
  
  function talk() pure public returns(string)// One function that lacks implementation makes the contract abstract
}

contract Cat is Animal {
  constructor() public {
    breed = "Persian";
    age = 3;
    weight = 5;
  }

  function talk() pure public returns(string) {return "miaow";}
}

contract Dog is Animal {
  constructor() public {
    breed = "Labrador";
    age = 5;
    weight = 3;
  }
  
  function talk() pure public returns(string) {return "Bark Bark";}
}
```

#### Interfaces

Interfaces are declared with the interface keyword.

An interface contains function declaration without implementation.

An interface:

- Cannot inherit other contracts or interfaces.
- Cannot have function with implementation
- Cannot define constructor
- Cannot define variables
- Cannot define structs
- Cannot define enums


```sol
pragma solidity ^0.7.4;

interface Token {
  function transfer(address recipient, uint amount) public;

  function balanceOf(address _owner) returens(uint256 balance);
}
```

When a contract inherits an interface, it must implement all of its functions.

Example:

```sol
contract PriceFeed is owned, mortal, name("GoldFeed") {
  function updateInfo(uint newInfo) public {
    if (msg.sender == owner) info = newInfo
  }

  function get() public view returns(uint r){
    return info;
  }
}
```

A contract may inherit from an interface or another contract. Solidity also support multiple inheritance.

In the example above the PriceFeed contract inherit from contract "named" which requires an argument.

### Events

Event is a way to provide notificaton, that something has happened within the contract.

Up to three parameters. It can receive attribute indedxed which will cause the respective argument to be searched for.
It is possible to filter for the specific values of indexed arguments in the user interface.

```sol
pragma solidity ^0.7.4;

contract SmartExchange {
  event Deposit(address from, byte32 to, uint indexed value);
  event Transfert(bytes32 from, address to, uint indexed value);

  function deposit(bytes32 to) payable public {
    emit Deposit(msg.sender, to, msg.value);
  }

  function transfer(bytes32 l, address to, uint value) payable public {
    to.transfer(value);
    emit Transfer(from, to, value)
  }
}
```