# Solidity

## What is Solidity?

- Solidity is an object-oriented programming language for implementing smart contract for the ethereum blockchain.
- It is a high-level statically typed programming language
- It is Case sensitive.
- With solidity you can create contract for use such as voting, crowdfunding, blind auctions and multi-signature wallets.

```sol
// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

contract demo {

}
```

- // SPDX-License-Identifier: GPL-3.0
This comment allows you to make your smart contract private, but it's a good practice make your smart contract public.

- pragma solidity >=0.7.0 <0.9.0;
Writing your contract like this allows you to select a range of compilers that can execute your smart contract.

## Public

Public is a visibility specifier.
Declaring a variable as public generates an automatic getter function that allows external contracts to read the value of the variable.

## Type of variables

1. State variables (global)
Any variable that is declared directly withing a contract is a state variable.

```sol
// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

contract demo {
    unint num = 5;

    // If you want to be able to access the value of num after you have deployed it, make it public
    unint pulic num = 5;
}
```

- They are permanently stored on the blockchain.
- State variable cost gas (expensive).
- Reading of state variable is free but writing to it is costly.

2. Local variables

These are variable declared within a function.

```sol
// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

contract demo {
    
    function sum() public pure return (uint) {
        uint a;
        uint b;
        return a+b;
    }
}
```

- Local variable do not cost any amount of gas (writting or reading).
- They do not get permanently stored on the blockchain.
- They are kept on the stack, not on storage.

## Functions

```sol
// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

contract demo {
    uint public num;

    function setter(uint _num) public {
        num = _num;
    }

    function getter() public view returns(uint) {
        return num;
    }
}
```

- When you call a setter function it creates a transaction that needs to be mined and costs gas because it changes the blockchain.

```sol
function local() public returns (address, uint256, uint256) {
  uint256 i = 345;
  myNumber = 1;

  i += 45;
  address myAddress = address(1);

  return( myAddress, myNumber, i);
}
```

// result: {
  "0": "address: 0x00000000.......001;
  "1"" "uint256": 345",
  "2": "uint256: 390
}

### Function Types

- Declarative Function
  - Modifying State Variable
  - Emitting Events
  - Creating other Contracts
  - Using self-destruct
  - Sending Ether via calls
  - Marked Pure or View
  - Assembly Certain Opcodes
  - Using low-level calls

- Non Declarative Function 

## view vs pure vs when neither is used

- If you are reading the value of a state variable use view.
- If your function only uses local variables use pure.
- If you are changing the value of a state variable, you wouldn't write any of the two (view or pure).

```sol
function setter(uint _num) public {
  num = _num;
}
```

- The only reason why we are using view below is that we are accessing a state variable.

```sol
uint num = 2 3;
function getter() public view returns(uint) {
        return num;
    }
```

- If you are accessing a local variable, use pure.
```sol
function random() public pure {
    uint abc;
}
```

## Constructor

This is a function that is called by default.

```sol
// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

contract demo {
    uint public num = 3;

    constructor (){
        num = 10;
    }
}
```

When the contract above gets deployed it will num will return 10.

```sol
// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

contract demo {
    uint public num = 3;

    constructor (uint _num){
        num = __num;
    }
}
```

Assuming we add a parameter to the constructor, we will be required to provide a value for _num immediately before the contract is deployed.

## Data Types

- Boolean
- Integer
- Fixed Point Numbers
- Address
- Bytes and Strings
- Enums

## Reference Data Types

- Arrays
- Struct
- Mapping

## Integer Data Type

1. int - can hold positive and negative numbers (int8 - int256)
2. uint - can hold only positive numbers (int8 - uint256)

- By default, int and uint are initialized to zero.
- Overflow get detected at compile time.

### Integer Range

NB: 
uint is the same uint256
int is the same as int256

#### int
int8 store any integer value within -128 to 127
int16 can store any integer value within -32768 to +32767
int128
int256

The formula - -2^(n-1) to 2^(n-1) - 1

Example (int8) - -2^(8-1) - 1 to -2^(8-1) - 1

##### uint
uint8 can store any integer value within 0 to 255
uint16 can store any integer within 0 to 65535
uint128
uint256

The formula - 0 to 2^(n) - 1

Example (uint8) - 0 to -2^(8) - 1 = 0 to 255

### Finding min and max value of an integer data type

```sol
int public minInt = type(int).min;
int public maxInt = type(int).max;
```

### bytes

Storing strings as bytes is one way of reduce gas fee (More Memory efficient).

```sol
bytes1 public a; //0x00
bytes1 public b; //0x00

a = 0xb5; // Easily under stood by the evm [010101010......]
a = 0xb5; // [010101010......]

bytes public myName = "Hey Korede" // 0x6864b........
```

### Address

```sol
address public hey; //0x00000000........
address public addr = 0x5B38Da6a.....
```

### Default Values of each data type

```sol
bool public defaultBool; // false
uint public number; // 0
int public defaultInt; // 0
address public hew; // 0x00000000000
```

## Constants

By saying that a variable is a constant, it's that the variable's value will never change after a value has been assigned to it.

Using constants reduces gas.

```sol
// gas: 130242 without declaring a constant
address public myAdd = 0x5b38.....;


// gas: 104187 after declaring a constant
address public contstant MY_ADDR = 0x5838....;
```

## Loops

1. while loop
2. for loop
3. do while loop

NB: Loop cannot be used directly within a contract, it must be declared in a function.

### Using while loop

```sol
// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

    function whileLoop() public pure returns(uint){
        uint sum;
        uint count;
        while (count<5) {
            sum=sum+count;
            count=count+1;
        }
        return sum;        
    }
}
```

### Using for loop

```sol
// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

    function forLoop() public pure returns(uint){
        uint sum;
        
        for (uint count=0; count<5; count++) {
            sum=sum+count;
        }
        return sum;
    }
}
```

### Using for Do While

```sol
// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

    function doWhileLoop() public pure returns(uint){
        uint sum;
        uint count;
        
        do {
            sum=sum+count;
            count=count+1;
        } while (count<5)
        return sum;
    }
}
```

## Conditionals

We can not use if else statement at contract level only within a function.

```sol
// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

contract checking(uint a, uint b) public pure returns(uint){
    if(a>b){
        reuturn 1;
    } else if (a == b){
        return 2;
    } else {
        return 0;
    }
}
```

### Using ternary operator

```sol
// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

contract checking(uint a, uint b) public pure returns(uint){
    
    return a>b ? 1 : a == b ? 2 : 0;
}

## Bool Data Type

- true
- false

e.g. bool public value = true.

- By default value is false if not initialized.

```sol
// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

contract demo {
    bool public value = true;

    function checkEven(uint a) public pure returns(bool) {
        if (a%2==0){
            return true;
        }
        return false;
    }
}
```

## Handling Error

### Require Statement

When require statement is used, it prevents the next line from run (or transaction from executing) if its condition is false, by throwing an error.

```sol
// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

contract demo{
    function isZero(uint a) public pure returns(bool){
        require(a == 0, "a is not equal to zero")
        return true
    }
}
```

### Revert Statement

Using if statement as require statement

```sol
// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

contract demo {
  function isZeroIf(uint a) public pure returns(bool) {
    if(a==0) {
      return true;
    }
        
    revert("a is not equal to zero")
    
  }
}
```

### Assert

```sol
contract AssertStatement {
  bool public result;
  
  funtion checkOverFlow(uint256 _num1, uint256 _num2) {
    uint256 sum = _num1 + _num2;
    assert(sum <= 255);
    result = true;
  }
}
```

## Modifier

### Using modifiers to avoid repetition

Assuming we have a smart contract like this.

```sol
// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

contract demo {

  function f1() public pure returns(uint) {
    require(true == true, "True is not true");
    return 1;
  }
  
  function f2() public pure returns(uint) {
    require(true == true, "True is not true");
    return 2;
  }

  function f3() public pure returns(uint) {
    require(true == true, "True is not true");
    return 3;
  }

  function f4() public pure returns(uint) {
    require(true == true, "True is not true");
    return 4;
  }

}
```

Solution

```sol
// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

contract demo {

  modifier isTrue {
    require(true == true, "True is not true");
    _;
  }
  function f1() public pure isTrue returns(uint) {
    return 1;
  }
  
  function f2() public pure isTrue returns(uint) {
    return 2;
  }

  function f3() public pure isTrue returns(uint) {
    return 3;
  }

  function f4() public pure isTrue returns(uint) {
    return 4;
  }
}
```

The `_;` copies the code within the function that the modifier is applied in, so that the content of the function can begin execution immediately after the statements within the modifier is executed.

### Using modifiers with parameters

```sol
// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

contract demo {
  modifer isEven(uint a) {
    require(a%2 == 0, "a is not even");
    _;
  }

  function f1(uint a) public pure isEven(a) returns(bool) {
    return true;
  }
}
```

## Address Data Type

The address data type is usually used to store an address.

```sol
address public addr = "0xBE4024a7461933F930DD3CEf5D1a01363E8f284"
```

- The address type is a 160-bit value that does not allow any arithmethic operations.


## Basic Data Types

### Reference Data Type

- strings
- arrays
- mappings
- struct

- Data types such as Arrays, Structs, Mapping are known as reference data type.
- If we use a referenct type, we always have to explicitly provide the data area where the type is stored.

- Every reference type has an additional annotation the "data location", about where it is stored. 
- There are three data locations: **memory, storage and calldata**.

#### Data locations

1. Memory - Lifetime is limited to an external function call.
2. Storage - The location where state variables are stored, where the lifetime is limited to the lifetime of a contract.
3. calldata - Special data location that contains the function arguments. (Similar to memory in life time)

#### Types of Array

- Fixed Array
- Dynamic Array

##### Fixed Array

This is an array that has a fixed size at compile time
- uint[number_of_elements] public arr;

e.g. uint[5] public arr;
by default [0, 0, 0, 0]

example 2:
uint[5] public arr = [10, 20, 30, 40, 50]

```sol
// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

contract demo {
  uint[5] public arr = [10, 20, 30, 40, 50];

  function insert(uint index, uint _item) public {
    arr[index] = _item;
  }

  function returnArr(uint index) public view returns(uint) {
    return arr[index]
  }

  function returnAllElements() public view returns(uint[5] memory) {
    return arr;
  }  
}
```

Any time you want to use an array(reference data type) as a parameter in a function alway specify the memory, because functions are temporal storage.

Memory keyword cannot be used at contract level.


```sol
// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

contract demo {
  uint[3] public arr = [10, 20, 30]; // arr is created at storage area

  function fmemory() public view{
    // view is used in this function because we are assigning a state variable to a local variable
    // local variable array
    uint[3] memory arr1 = arr; //
    arr1[0] = 90;
  }

  function fstorage() public {
    // view is not used here because arr is assign to another variable on a storage level which is a pointer to arr
    uint[3] storage arr2 = arr; //arr2 is a pointer to arr
    arr2[0] = 90;
  }

}
```

##### Dynamic Array

Is an array whose size is not fixed at compile time.

- uint[] public arr;
- To insert an element we use arr.push(element)
- To remove an element we use arr.pop(). It removes the last element every time it is executed.
- To find the length of an array we use arr.length(). It returns the length of the array in uint data type.

```sol
// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

contract demo {
  uint[] public arr;

  function insert(uint item) public {
    arr.push(item);
  }

  function removeLast() public {
    arr.pop();
  }

  function lengthArr() public view returns(uint) {
    return arr.length;
  }

  function returnAll() public view returns(uint[] memory){
    return arr;
  }
}
```



## Memory keyword vs Calldata keyword

By using memory keyword the argument passed will be mutable.
- Only applicable to reference data type.

```sol
// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

contract demo {
  uint[] public arr;
  
  function insertArr(uint[5] memory _arr) public{
    arr = _arr
  }

  function returnArr() public view returns(uint[5] memory){
    return arr;
  }
}
```

Calldata is readonly and immutable
- call data can only be used within function argument 
- Cannot be used in returns modifier
```sol
// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

contract demo {
  uint[] public arr;
  
  function insertArr(uint[5] calldata _arr) public{
    arr = _arr
    // _arr[0] = 12; this will prompt an error
  }
}
```

## Struct

Struct is a complex data type. A complex data type usually a composite of other existing data types.

For example:

```sol
struct Student {
    string name;
    uint roll;
    bool pass;
}
```

- Declaring a struct data type.
`struct_type public var_name'`

e.g. Student public s1;

```sol
// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

contract demo {
  struct Student {
    string name;
    uint roll;
    bool pass;
  }

  Student public s1;

  function insert(string memory _name, uint _roll, bool _pass) public {
    // s1.name = _name;
    // s1.roll = _roll;
    // s1.pass = _pass;
    // OR
    s1 = Student(_name, _roll, _pass)
  }

  function getter() public view returns(Student memory) {
    return s1;
  }

  function getName() public view returns(string name) {
    return s1.name
  }
}
```

### Array of Struct

```sol
// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

contract demo {
  struct Student {
      string name;
      uint roll;
      bool pass;
    }

  Student[4] public s;

  function insertStudent(uint index, string memory _name, uint _roll, bool _pass) public {
    s[index] = Student(_name, _roll, _pass);
  }

  function returnStudent(uint index) public view returns(Student memory) {
    return s[index];
  }
}
```

## Mapping

- is a concept of keys and values
- mapping(keys => value)

For Example:
mapping(uint => string) public data;

Roll - Name
1 - Ravi
5 - John
40 - Alice

```sol
```sol
// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

contract demo { 
  mapping(uint => string) public data;

  function insert(uint _roll, string memory _name) public {
    data[_roll] = _name;
  }

  function getter(uint _roll) public view returns(string memory) {
    return data[_roll]
  }
  
}
```

### Using mapping with struct

```sol
// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

contract demo {
  struct Student {
      string name;
      uint roll;
      bool pass;
    }

    mapping(uint => Student) public data;

    function insert(uint index, string memory _name, uint _roll, bool _pass) public {
      data[index] = Student(_name, _roll, _pass);
    }

    function returnValue(uint index) public view returns(Student memory) {
      return data[index];
    }
}

### Nested Mapping

Think of nested mapping as a 2 dimensional array.

Example:
mapping(address => mapping(address => bool)) private check;

check[address1][address2] = true
check[address2][address3] = true
check[address3][address1] = true

```sol
// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

contract demo {
  mapping(uint => mapping(uint => bool)) public data;

  function insert(uint row, uint column, bool value) public {
    data[row][column] = value;
  }

  function returnValue(uint row, uint column) public view returns(bool) {
    return data[row][column]
  }
}

```

### Mapping with Array

For Example:
mapping(address => uint[]) private marks;

Address - uint[]
0xabc - [10, 20 , 30, 40, 50]
0xdef - [1, 2, 3]

```sol
// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

contract demo {
  mapping(address => uint[]) public marks;

  function insertMarks(address _address, uint[] _marks) {
    marks[_address] = _marks;
  }

  function returnMarks(address _address) public view returns(uint[]) {
    return marks[_address];
  }
}
```

## Global Variables

- blockhash(uint blockNumber) returns (byte32)

- block.basefee(uint); // current vb

- block.chainid(uint); // current chain id

- block.coinbase(address payable); // current block miner's address

- block_difficulty(uint); // Current block difficulty
  
- block.gaslimit(uint); // Current block gaslimit

- block.number(uint); // Current block number

- block.timestamp(uint); // Current block timestamp as seconds since unix epoch

- gasleft() returns (uint256); // remaining gas

- msg.data(bytes calldata); // Complete calldata

- msg.sender(address); // sender of the message (current call)

- msg.sig(bytes4); // First four bytes of the calldata (i.e. function identifier)

- msg.value(uint); // number of wei sent with the message

- tx.gasprice(uint); // gas price of the transaction

- tx.origin(address); // sender of the transaction (full call chain)

Example:

```sol
// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

contract demo {
  // msg.sender

  function CallerAddress() public view returns(address) {
    return msg.sender;
  }
  
  function returnBlockTimestamp() public view returns(uint) {
    return msg.sender;
  }

}
```

## Payable

### Receiving Ether/wei using payable modifer & Checking contract balance



```sol
// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

contract demo {
  // transfaer ether to my contract

  function sendEtherToContract() public payable {
    // you may have some statments here if you want to 
    // but having the payable modifier is suffient enought to 
    // make the contract recieve ether.
    // Set the value of the ether you want to transfer you wnat to transfer then CALL THE FUNCTION
  }

  // see the balance of your contract
  function balanceOfContract() public view returns(uint) {
    return address(this).balance;
  }
}
```

### Using smart contract to send ether from your account/address to another address

```sol
// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

contract demo {
  function sendETH(address payable receiver) public payable{
    receiver.transfer(msg.value);
  }
}
```