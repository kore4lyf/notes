# Solidity 


## Intro

### What is solidity & Smart Contract 
Solidity is the official language (OOP) for ethereum and other EVM language. 
Solidity used in writting smart contracts on EVM. 

### EVM 
Just like JVM (Java virtual machine), EVM (Ethereum Virtual Machine) was created to compile solidity to byte code.

Because Ethereum is open source, it can be forked (e.g Binance Smart Chain, Polygon, Avalanche, Phanthom). Due to the forking, alot of these eth forked blockchain run EVM.  

You can deploy you etherum dapps on EVMs like polygon, arbitrum, avalanche e.t.c. 


## How Solidity is Written 

```sol
pragma solidity ^0.07;

contract HowSolidityIsWritten {

  function HelloWorld() public pure returns(string memory) {
    return "Hello World";
  }
}
```


## Basics

### Comments 

#### Single Line  
```sol
// here is an example of a single line comment
```

#### Multi Line  
```sol
/* 
Here is an example of a multiple line comment
*/  
```


## First Solidity Program 

Returns a string
```sol
// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.22;

contract HowSolidityIsWritten {

    function HelloWorld() public pure returns(string memory) {
        return "Hello world";
    }
}
```


Returns a Smart Contract
```sol
// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.22;
SContract HowSolidityIsWritten {

    function HelloWorld() public pure returns(string memory) {
        return "Hello world";
    }
}
```

## JavaScript VS Solidity

### Similarities Between JavaScript and Solidity 

1. Variables - They both support the usage of variables.
2. Function 
3. Scope (Gobal and Local or Block scoped)
4. Both are Object Oriented Languages
5. Both have If statements (same format)
6. Loop: for/while (same format)

### Similarities Between JavaScript and Solidity 
1. JavaScript does not need to be compiled, but Solidity need to be compiled to byte code for EVM to run it. 
2. JavaScript can declare decimal variable like `var a = 1.22`, while Solidity does not allow using decimal in variables. 
3. JavaScript doesn't throw error so it's easy to write bad buggy code without knowing especially for newbies, while Solidity throws error to help ensure when your code is buggy you can easily spot basic errors while coding. 
4. JavaScript allows re-declaration of a variable or the reassignment of a variable with another data type, but in Solidity doesn't allow it, one must stick to ones initial declared datatype. e.g string a = 20 can not later be changed to bool a = true
5. JavaScript numbers are from positive to negative, while Solidity Numbers can only be of two types
  - int
  - uint
6. JavaScript variable can be declared anywhere Globally in a JS file. but a Solidity Variable must be declared within a within a Contract code block or it will through errors.
7. JavaScripty is not a money handling language by default, while solidity handles and manipulates money by default which makes it to have special variables such as  `address`
8. JavaScript variable storage memory location is default to the JS browser memory and not divided, while Solidity storage memory location is subdivided in the blockchain to to Storage (Permanent Memory Just like ROM)
9. Solidity variables data type cannot access default storage memory location which are data type like string. 
10. In solidity data type must be define. 
11. Solidity array is denoted right in front of the variable type before variable name e.g

JS = var number = [1, 2, 3]
SOLIDITY = int[] number = [1, 2, 3] 


## Introduction to Variable and Variable Data Types 
A variable holds different data type values, which allows you access the 

- `int` (Positive or Negative numbers [1 or -1])
```sol
   int  price = -120
```

- `uint` (Positive integer or numbers)
```sol
   int  price = 50
```

Usually in a smart contract there shouldn't be a minus sign. 

- `string`
A string can be in a single or double quote
```sol
string website = "korede.com"
```

- `bool` (true/false)
```sol 
bool logConfirmation = true
```

- `address`
```sol 
address user = 0x58qw9ere9q9wqer9qw0er
```


## Difference between STATE and LOCAL Variables 
Two ways that  variable can be declared in solidity. 

State (global) Variables have a global scope. Global variable are usually declared outside a function. Which means it can be access in any other function in a smart contract

Local Variables have local scope. Usually declared in a smart contract function. 

In the local scope one needs to specify where it needs to be stored 
```sol
function HelloWorld() public pure returns(string memory) {
  // LOCAL VARIABLE
  string memory textMessage = "Earn and learn";
  return "Hello world";
}
```


Because we are interacting with a State variable in the HelloWorld function, then it must be a `view`

```sol
// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.22;

contract HowSolidityIsWritten {

    // STATE VARIABLE
    string name = "korede"

    function HelloWorld() public view returns(string memory) {
      // LOCAL VARIABLE
       string memory textMessage = "Earn and learn";
        return name;
    }

}
```

> Always use your file name as you contract name so you don't end up executing the wrong contract. 



## Operators 
Just like in javaScript
- *(Multiplication)
- +(Addition) 
- -(Subtraction) 
- /(Division)
- %(Modulus)

Logical Operator
- > (Greater than)
- < (Less than)
- = (Equal to)
- != (Not Equal to)
- == (Equivalent to)



## Data Storage Locations 
- storage 
- memory
- calldata
  

**STORAGE:**
The default permanent storage of a solidity smart contract is the **storage**. 

Storage is use for storing state variables.

Every state variable is stored in the contract storage and they retain their values between function calls and transactions. 

Here is an example to make a local variable a storage variable:

```sol
function HelloWorld() public pure returns(string memory) {

  // LOCAL VARIABLE
  string storage textMessage = "Earn and learn";
  return "Hello world";
}
```


```sol
pragma solidity ^0.5.0;

contract StorageExample {
  uint256 public storedData;

  function setStoredData(uint256 newValue) public {
    storedData = newValue
  }

  function getStoredData() public view returns(unint256) {
    return storedData;
  }
}
```





**MEMORY:**
Memory is a data storage location used to store local variables which is limited to the function it is declared in.

They are only present through out a function call.

Memory is the temporary storage of a smart contract

Numbers are do not need the declaration of data storage location, but strings do because they may contain an information that is not vital. 

Every string depending on the size will attract a cost.

Example 1:
```sol
function HelloWorld() public pure returns(string memory) {

  // LOCAL VARIABLE
  uint cost = 250;
  string memory textMessage = "Earn and learn";
  return "Hello world";
}
```

Example 2:
```sol
pragma solidity ^0.5.0;

contract MemoryExample {

  function mathOperation(uint256 value1, uint 256 value2) public pure returns(uint256) {
    uint256 answer;
    answer = a + b;

    return answer;
  }
}
```


 
** CALLDATA:**
calldata is a temporal storage of the smart contract. 

It can access/Read Only and can not write to it.

**Usually used for function arguments.**

It's an immutable data location.

It is used in smart contract to reduce gas fees.

**Accessing data from calldata is cheaper than storage.**

Example 2:
```sol
pragma solidity ^0.5.0;

contract callDataExample {

  function joinTwoStrings(string calldata string1, string calldata string2) public pure returns(string memory) {
    bytes memory result = bytes(string1);
    result = abi.encodePacked(result, bytes(string2)); // concantenate string in memory

    return string(result);
  }
}
```



