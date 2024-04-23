# WEB3

## Introduction 
- Web3.js is a collection of libraries.
- It allows us to interact with a local or remote Etherum node.
- In order to interact with Ethereum nodes it uses HTTP, IPC and WebSocket.

## Using Ganache 
- Ganache is a local blockchain simulator which allows you to run a local blockchain on your system.
You can allows you to test your smart contract

## Learning Web3.js 

### Connecting to Ganache

```js
const {Web3} = require('web3')

const web3 = new Web3('HTTP://127.0.0.1:7545')
console.log(web3)
```

### Web3.js Modules

- web3.eth is for ethereum blockchain and smart contracts.
- web3.utils contains useful helper functions for dapp developers
- web3.sh is for whisper protocol, to communicate p2p and broadcast.
- web3.bzz is for the swarm protocol, the decentralized file storage.

### Sending Ether

```js
// Convert wallet address balance to WEI
function convertEtherToWei(etherValue) {
    const weiValue = web3.utils.toWei(etherValue, 'ether')
    return weiValue
}


// Sending Ether
async function sendEther(senderAddr, receiverAddr, valueInEther) {
    const valueInWei = convertEtherToWei(valueInEther)
    console.log(valueInWei)

    const txn = await web3.eth.sendTransaction({
        from: senderAddr,
        to: receiverAddr,
        value: valueInWei
    })
    console.log("Transaction Complete.")
}
```

### Interacting With Smart Contracts

```js
// Interacting With contract

async function instanceContract() {
    const contractABI = [
        {
            "inputs": [],
            "name": "get",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_x",
                    "type": "uint256"
                }
            ],
            "name": "set",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        }
    ]
    
    const contractAddress = '0x56e70cc38f5f67cbdd6cfc3170a0abc13c664009'
    const contract = new web3.eth.Contract(contractABI, contractAddress)


    // Interacting with the contract
    contract.methods.set(50)
        .send({from: '0x8A3C0D1e328F2F0a13f0cE6E496B5044A38E0164'})
        
        // get here is a function within the smart contract we have written.
        // call({from: address}), address here refers to the user interacting with smart contract.
    contract.methods.get()
        .call({from: '0x8A3C0D1e328F2F0a13f0cE6E496B5044A38E0164'})
        .then(console.log)
}

instanceContract()
```

Whenever you are not changing the state of your smart contract you use `call()`. If you will be changing the state of your smart contract use `send()`.

```js
contract.methods.name().call((err, result) => {console.log(result)})
```

### How to Compile Smart Contract to byte code Using Web3.js

```js
// Compiling Smart Contract with Web3.js
    // Install solc as a dev dependency
solc = require("solc")
fs = require('fs')

fileContent = fs.readFileSync('demo.sol').toString();
console.log(fileContent)

    // Input structure for our SOLC compiler
var input = {
    language: 'Solidity',
    sources: {
        'demo.sol': {
            content: fileContent
        }
    },
    settings: {
        outputSelection: {
            '*': {
                '*': ['*']
            }
        }
    }
}

output = JSON.parse(solc.compile(JSON.stringify(input)))
console.log(output)

ABI = output.contracts['demo.sol']['demo'].abi

bytecode = output.contracts['demo.sol']['demo'].evm.bytecode.object

console.log('Bytecode: ', bytecode)
```

### How to deploy Smart Contract using web3.js



### JSON RPC in Web3.js

Web3.js is collection of libraries that allow you to interact with a local or remote Ethereum node using HTTP, IPC or WebSocket.

Web3.js provides us with JavaScript APIs to communicate with the blockchain.

Internally it uses JSON RPC to communicate with the blockchain.

#### JSON-RPC

JSON-RPC is a stateless, light-weight remote procedure call (RPC) protocol.

It uses JSON as data format.

## Transaction

```js
txnCount = web3.eth.getTransactionCount(web3.eth.acccounts[0])

var rawTxn = {
  nonce: web3.toHex(txnCount),
  gasPrice: web3.toHex(100000000000),
  gasLimit: web3.toHex(140000),
  to: '0x633...18b',
  value: web3.toHex(0),
  data: '0xcc...000'
}
```

### Creating a Transaction

Using similar fields to the transaction shown above, we can construct transactions for ourselves. Using the pre-loaded test accounts and free Ether in our local blockchain, we'll be able to create transactions however we like.

Before making the transaction, ensure you have installed both dependencies to your npm initialization.

```js
npm install ethereumjs-tx --save
npm install web3 --save
```


```js
/*##########################
##     CONFIGURATION      ##
##########################*/

//  -- Step 1: Set up the appropriate configuration
var {Web3} = require("web3")
var EthereumTransaction = require("ethereumjs-tx")
var web3 = new Web3('HTTP://127.0.0.1:7545')

// -- Step 2: Set the sending and receiving addresses for the transaction.
var sendingAddress = 'ADDRESS FROM GANACHE GOES HERE'
var receivingAddress = 'ANOTHER ADDRESS FROM GANACHE GOES HERE'

// -- Step 3: Check the balances of each address
web3.eth.getBalance(sendingAddress).then(console.log)
web3.eth.getBalance(receivingAddress).then(console.log)

/*##########################
##  CREATE A TRANSACTION  ##
##########################*/

// -- Step 4: Set up the transaction using the transaction variables as shown
var rawTransaction = {
    nonce: 0,
    to: receivingAddress,
    gasPrice: 20000000,
    gasLimit: 30000,
    value: 1,
    data: ""
}

// -- Step 5: View the raw transaction
rawTransaction

// -- Step 6: Check the new account balances (they should be the same)
web3.eth.getBalance(sendingAddress).then(console.log)
web3.eth.getBalance(receivingAddress).then(console.log)

// Note: They haven't changed because they need to be signed...

/*##########################
##  Sign the Transaction  ##
##########################*/

// -- Step 7: Sign the transaction with the Hex value of the private key of the sender
var privateKeySender = 'PRIVATE KEY OF SENDER GOES HERE'
var privateKeySenderHex = new Buffer(privateKeySender, 'hex')
var transaction = new EthereumTransaction(rawTransaction)
transaction.sign(privateKeySenderHex)

/*#########################################
##  Send the transaction to the network  ##
#########################################*/

// -- Step 8: Send the serialized signed transaction to the Ethereum network.
var serializedTransaction = transaction.serialize();
web3.eth.sendSignedTransaction(serializedTransaction);

```

## Creating a Dapp

- Create a new folder e.g. truffleweb3
- cd into truffleweb3, then enter the command below.
```js
truffle unbox react
```

