# TRUFFLE

Check Truffle. With it your compilation will be 100x easier.

First install truffle via npm -

```sh
npm install -g truffle
```

Then choose directory where your project will be and create new truffle project via

```sh
truffle init 
```

comand

Then create new contract with command

```sh
truffle create contract MyContractName 
```

It will create .sol file in the /contracts directory

And when you are done implementing the contract you have to run

```sh
truffle compile 
```

to compile the contract

If you want different version of solc enter the truffle.config file created by the init command, find the solc: key in the JSON and set it to the desired version.

## Calling Contracts

Step 1: Prerequisites
Before diving into Truffle, make sure you have the following installed:

```sh
npm install -g truffle 
```

Verify it’s installed by running truffle version. You should see the Truffle and Solidity compiler versions.

Step 2: Set Up a Truffle Project

Create a new project:
Make a new directory for your project and navigate into it:

```sh
mkdir my-truffle-project
cd my-truffle-project
```

Initialize a Truffle project:

```sh
truffle init 
```

This sets up a basic structure with folders like contracts/, migrations/, and test/, plus a truffle-config.js file.

Add your contract:
Place your Solidity smart contract (e.g., MyContract.sol) in the contracts/ folder. If you don’t have one yet, here’s a simple example to test with:
solidity

```sol
// contracts/MyContract.sol
pragma solidity ^0.8.0;

contract MyContract {
    uint256 public myNumber;

    function setNumber(uint256 _number) public {
        myNumber = _number;
    }
}
```

Step 3: Configure Truffle
Open truffle-config.js and tweak it as needed. At a minimum, specify the Solidity compiler version:
javascript

```json
module.exports = {
  contracts_build_directory: "./build/contracts",
  compilers: {
    solc: {
      version: "0.8.20", // Match your contract's pragma version
    }
  }
};
```

You can also set up a network (like a local blockchain) later, but for now, we’ll focus on compilation.

Step 4: Compile Your Contracts
Run this command in your project directory:

```sh
truffle compile 
```

This compiles all .sol files in the contracts/ folder.
Compiled artifacts (like ABI and bytecode) are saved in build/contracts/.
If successful, you’ll see something like: Compiled successfully using: - solc: 0.8.20+commit...
To recompile only changed contracts (faster), use:

```sh
truffle compile --all
```

Step 5: Useful Commands
Here are some Truffle commands to get you rolling:
Test your contracts:
Write tests in the test/ folder (in JavaScript or Solidity), then run:

```sh
truffle test 
```

Example test file: test/myContract.js
javascript

```sol
const MyContract = artifacts.require("MyContract");

contract("MyContract", (accounts) => {
  it("should set the number correctly", async () => {
    const instance = await MyContract.deployed();
    await instance.setNumber(42);
    const number = await instance.myNumber();
    assert.equal(number.toNumber(), 42, "Number was not set correctly");
  });
}); 
```

Deploy to a network:
First, set up a network in truffle-config.js (e.g., a local Ganache blockchain or testnet).
Create a migration file in migrations/ (e.g., 2_deploy_contracts.js):
javascript

```js
const MyContract = artifacts.require("MyContract");

module.exports = function (deployer) {
  deployer.deploy(MyContract);
}; 
```

Then deploy with:

```sh
truffle migrate 
```  

Interact with contracts:
Open the Truffle console:

```sh
truffle console
```

Example: Call a function after deploying:

```sh
let instance = await MyContract.deployed()
await instance.setNumber(100)
await instance.myNumber()
```

Step 6: Handy Hacks and Tips
Speed up compilation:
Use truffle compile --optimize to enable Solidity optimizations for smaller bytecode.
Install a specific Solidity version if needed: npm install solc@0.8.20.
Local Blockchain:
Use Ganache (npm install -g ganache) for a local test blockchain:
ganache
Update truffle-config.js to connect:
JavaScript

```json
networks: {
  development: {
    host: "127.0.0.1",
    port: 8545,
    network_id: "*"
  }
}
```

## Migrations

Your migration file names should start with a number (_) and an underscore followed by any name. The next migration file should start with (2_[filename]). (e.g. 1_Contract.js, 2_nft.js).

> This way of number files is called snake casing.

### Automatically creating Migration files

```sh
truffle create migration ContractName
```

This will create an empty Migration file, it's name wiil start with a timestamp instead of the usually way of numbering migrations.

### Migration Files

```js
let contractInstance = artifacts.require("ContractName")

module.exports = function(deployer) {
  deployer.deploy(contractInstance)
}
```

## Test

Truffle can creates a unit test file, to test a given contract.

```sh
truffle create test ContractName
```

Before the contract can be tested, the contract instance must be included at the top of the test.

```js
let contractInstance = artifacts.require("ContractName")
```

To test use:

```sh
truffle test
```

### Test Sample

Adoption.js

```js
let Adoption = artifacts.require("Adoption")

contract("Adoption", (accounts) => {
  describe("First group of tests", () => {
    let instance

    before(async () => {
      instance = await Adoption.deployed();
    })

    it("", async () => {
      await instance.adopt.sendTransaction(8, {from: account[0]})
      let adopter = await instance.adopter.call(8)
      assert.equal(adopter, accounts[0], "Incorrect owner address")
    })

    it("Should get adopter address by id in array", async () => {
      let adopter = await instance.getAdopters.call()
      assert.equal(adopters[8], accounts[0], "Owner of pet Id should be recorded in the array")
    })

    it("Should throw if invalid pet id is given", async () => {
      try {
        await instance.adopt.sendtransaction(17, {from: account[0]})
        asset.fail(true, false, "This function did not throw")
      } catch(error) {
        // Checks if the error contains the keyword "revert"
        assert.include(string(error), "revert", "Expected 'revert' but instead got ${error}")
      }
    })

  })
})
```

NB: **call()** is usually used for getter functions. When you are run functions that modify the state of the contract, use the **sendTransaction()** function.

## Truffle Console & Truffle Develop

The truffle console and truffle develop allow us to access the truffle console.

```sh
truffle console
```

The only advantage that truffle develop has is that it runs a virtual blockchain just like Ganache.

```sh
truffle develop
```

## Truffle Install & Truffle Unbox

Truffle install is used the same way like how npm to install packages, ethereum also have its packages at ethereum package registery. ([ethpm.com/registry](https://ethpm.com/registry)). 

The Ethpm website has a lot of packages you can install with truffle install.

```sh
truffle install 
```

For example the ethpm package below install EIP20 token

```sh
truffle install token
```

Truffle unbox can install a dapp skeleton. e.g. for react React

```sh
truffle unbox react
```


