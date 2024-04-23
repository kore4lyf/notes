# Web3.js

## Summary
Web3.js is a robust and flexible collection of libraries for TypeScript and JavaScript developers. It allows you to interact with a local or remote Ethereum node (or any EVM-compatible blockchain) using HTTP, IPC or WebSocket. It serves as an essential tool for connecting and crafting applications within the Ethereum ecosystem.

### Packages

Web3.js is modular, consisting of several packages, each serving specific functionalities. If you have specific tasks in mind, you don't need to install the entire Web3 library. Instead, selectively install the package that suits your requirements for a more efficient development experience. Here is an overview of the available packages:

ABI: The web3-eth-abi package simplifies decoding logs and parameters, encoding function calls and signatures, and inferring types for efficient Ethereum contract interactions.

Accounts: The web3-eth-accounts package has tools for creating Ethereum accounts/wallets and making sure transactions and data are securely signed.

Contract: With the web3-eth-Contract, you can interact with Smart contracts. This functionality allows communication with contracts through JavaScript or TypeScript objects, simplifying your development and interaction processes.

ENS: The web3-eth-ens package helps you communicate with the Ethereum Name Service (ENS) on the blockchain.

Iban: The web3-eth-iban package allows you to switch between Ethereum addresses and special banking-like addresses (IBAN or BBAN). It makes the conversion back and forth easier.

Net: The web3-net class allows you to talk about and deal with an Ethereum node's network details.

Personal: Use web3-eth-personal for direct communication with the Ethereum node about your accounts, streamlining account management in your development workflow. NOTE: For enhanced security when interacting with public nodes, consider using web3-eth-accounts for local signing operations, keeping your private keys and sensitive information secure on your local machine

Utils: With the web3-utils package you can perform a range of essential tasks in Ethereum development, including converting data formats, checking addresses, encoding and decoding, hashing, handling numbers, and much more, providing versatile utility functions for your applications.

Web3Eth: The web3-eth is your main tool for interacting with the Ethereum blockchain. It's like the control center for managing your interactions with Ethereum.

Additional supporting packages
Web3 Types: This package has common typescript types.

Web3 Validator: This package offers functionality for validation using provided Schema.

Web3 Core: Web3 Core has configuration, Subscriptions and Requests management functionality used by other Web3 packages.

Web3 Errors: Web3 Errors has error codes and common error classes that are used by other Web3 packages.

Web3 RPC Methods: This is for advanced uses for building more lightweight applications. It has functions for making RPC requests to Ethereum using a given provider.

## Quickstart

### Installation

```js
npm i web3
```

### Importing Web3.js

Web3.js v4 supports both CJS ( CommonJS ) and native ESM module imports. For importing the main Web3 class in CJS you can use:

```js
const { Web3 } = require('web3');
```

and for ESM style imports, you can use:

```js
import { Web3 } from 'web3';
```

### Initialize Web3 with a provider

```js
import Web3 }from 'web3';

//private RPC endpoint 
const web3 = new Web3('https://mainnet.infura.io/v3/YOUR_INFURA_ID'); 

//or public RPC endpoint
//const web3 = new Web3('https://eth.llamarpc.com'); 

web3.eth.getBlockNumber().then(console.log);
// ↳ 18849658n
```

### Querying the blockchain
After instantiating the web3 instance with a new Web3 provider, we can access the web3.eth package to fetch data from the blockchain:

```js
// get the balance of an address
await web3.eth.getBalance('0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045');
// ↳ 114438180989009447638n

// get last block number
await web3.eth.getBlockNumber();
// ↳ 18849658n

// get the chain id of the current provider
await web3.eth.getChainId();
// ↳ 1n

// get the nonce of an address
await web3.eth.getTransactionCount('0x37826D8B5F4B175517A0f42c886f8Fca38C55Fe7');
// ↳ 7n

// get the current gas price
await web3.eth.getGasPrice();
// ↳ 23879160756n
```

### Setting up a wallet
If you want to write data/interact with contracts or send transactions on the blockchain, you must have an account with funds to cover the gas fees.

The object Wallet is an array of accounts, it will allow you to hold several accounts from which you can send transactions web3.eth.sendTransaction or interact with contract objects web3.eth.contract.methods.contractfunction().send(), when you perform these actions, the Wallet object uses the account/s it holds to send the transactions.

### Create random wallet

```js
//create random wallet with 1 account
web3.eth.accounts.wallet.create(1)
/* ↳ 
Wallet(1) 
[
  {
    address: '0xcE6A5235d6033341972782a15289277E85E5b305',
    privateKey: '0x50d349f5cf627d44858d6fcb6fbf15d27457d35c58ba2d5cfeaf455f25db5bec',
    signTransaction: [Function: signTransaction],
    sign: [Function: sign],
    encrypt: [Function: encrypt]
  },
  _accountProvider: {
    create: [Function: createWithContext],
    privateKeyToAccount: [Function: privateKeyToAccountWithContext],
    decrypt: [Function: decryptWithContext]
  },
  _addressMap: Map(1) { '0xce6a5235d6033341972782a15289277e85e5b305' => 0 },
  _defaultKeyName: 'web3js_wallet'
]
*/
```


Add a private key to create a wallet

```js
//the private key must start with the '0x' prefix
const account = web3.eth.accounts.wallet.add('0x50d349f5cf627d44858d6fcb6fbf15d27457d35c58ba2d5cfeaf455f25db5bec');

console.log(account[0].address);
//↳ 0xcE6A5235d6033341972782a15289277E85E5b305

console.log(account[0].privateKey);
//↳ 0x50d349f5cf627d44858d6fcb6fbf15d27457d35c58ba2d5cfeaf455f25db5bec
```


### Send transactions

```js
Sending value
//add an account to a wallet
const account = web3.eth.accounts.wallet.add('0x50d349f5cf627d44858d6fcb6fbf15d27457d35c58ba2d5cfeaf455f25db5bec');

//create transaction object to send 1 eth to '0xa32...c94' address from the account[0]
const tx = 
{ 
    from: account[0].address,
    to: '0xa3286628134bad128faeef82f44e99aa64085c94', 
    value: web3.utils.toWei('1', 'ether')
};
//the `from` address must match the one previously added with wallet.add

//send the transaction
const txReceipt = await web3.eth.sendTransaction(tx);

console.log('Tx hash:', txReceipt.transactionHash)
// ↳ Tx hash: 0x03c844b069646e08af1b6f31519a36e3e08452b198ef9f6ce0f0ccafd5e3ae0e
```


Interact with smart contracts
Instantiate a contract
The first step to interact with a contract is to instantiate the contract, for which we will need the ABI and the address of the contract

```js
//Uniswap token address in mainnet
const address = '0x1f9840a85d5af5bf1d1762f925bdaddc4201f984'

//you can find the complete ABI in etherscan.io
const ABI = 
[
    {
      name: 'symbol',
      outputs: [{ type: 'string' }],
      type: 'function',
    },
    {
      name: 'totalSupply',
      outputs: [{ type: 'uint256' }],
      type: 'function',
    },
];

//instantiate the contract
const uniswapToken = new web3.eth.Contract(abi, address);
```

### Read-methods

```js
//make the call to the contract
const symbol = await uniswapToken.methods.symbol().call();

console.log('Uniswap symbol:',symbol);
// ↳ Uniswap symbol: UNI

//make the call to the contract
const totalSupply = await uniswapToken.methods.totalSupply().call();

console.log('Uniswap Total supply:', totalSupply);
// ↳ Uniswap Total Supply: 1000000000000000000000000000n

//use web3 utils to format the units
console.log(web3.utils.fromWei(totalSupply, 'ether'))
// ↳ 1000000000
```

### Writing-methods

```
//address to send the token
const to = '0xcf185f2F3Fe19D82bFdcee59E3330FD7ba5f27ce';

//value to transfer (1 with 18 decimals)
const value = web3.utils.toWei('1','ether');

//send the transaction => return the Tx receipt
const txReceipt = await uniswapToken.methods.transfer(to,value).send({from: account[0].address});

console.log('Tx hash:',txReceipt.transactionHash);
// ↳ Tx hash: 0x14273c2b5781cc8f1687906c68bfc93482c603026d01b4fd37a04adb6217ad43


Query past events
//get past `Transfer` events from block 18850576
const eventTransfer = await uniswapToken.getPastEvents('Transfer', { fromBlock: 18850576 });

console.log(eventTransfer);
// ↳ [{...},{...}, ...] array with all the events emitted
//you can only query logs from the previous 100_000 blocks 
```

### Listening to live events

WARNING
You MUST initialize the Web3 provider with a WebSocket endpoint to subscribe to live events

```js
import { Web3 } from 'web3';

//WebSocket provider
const web3 = new Web3('wss://ethereum.publicnode.com');

//instantiate contract
const uniswapToken = new web3.eth.Contract(abi, address)

//create the subcription to all the 'Transfer' events
const subscription = uniswapToken.events.Transfer();

//listen to the events
subscription.on('data',console.log);
// ↳ [{...},{...}, ...] live events will be printed in the console
```

### Live Code Editor 

```js
import './style.css';
import { Web3 } from 'web3';

const web3 = new Web3('https://eth.llamarpc.com');

const blockNumber = await web3.eth.getBlockNumber();
const chainId = await web3.eth.getChainId();

// For more methods: https://docs.web3js.org/libdocs/Web3Eth

document.querySelector(
  '#app'
).innerHTML = `Block Number is ${blockNumber} <br> Chain Id: ${chainId}`;

// ↳ Block Number is 19387713 Chain Id: 1
```

## Connecting to Metamask

### React app

After creating your react app npx create-react-app app-name, and installing web3 npm i web3 you can go to src/app.js, you can clean up the code and import {Web3}. It should look like this:

```js
import { useState } from 'react';
import { Web3 } from 'web3';

function App() {
  return <> </>;
}

export default App;
```

Let's divide this into 2 small steps:

#### 1. Create Button to Connect and Display Connected Address

In this step, we'll add a button to the front end for users to connect to Metamask. We'll also include an <h2></h2> element to display the connected address once the connection is established.

```js
import { useState } from 'react';
import { Web3 } from 'web3';

function App() {
  //react state to store and show the connected account
  const [connectedAccount, setConnectedAccount] = useState('null');

  return (
      <>
      {/* Button to trigger Metamask connection */}
      <button onClick={() => connectMetamask()}>Connect to Metamask</button>

      {/* Display the connected account */}
      <h2>{connectedAccount}</h2>
    </>
  );
}

export default App;
```

#### 2. Implement the Function to Connect Metamask

In this step, we'll implement the function that triggers Metamask to prompt the user to connect their wallet.

```js
import { useState } from 'react';
import { Web3 } from 'web3';

function App() {
  //state to store and show the connected account
  const [connectedAccount, setConnectedAccount] = useState('null');
    
  async function connectMetamask() {
    //check metamask is installed
    if (window.ethereum) {
      // instantiate Web3 with the injected provider
      const web3 = new Web3(window.ethereum);

      //request user to connect accounts (Metamask will prompt)
      await window.ethereum.request({ method: 'eth_requestAccounts' });

      //get the connected accounts
      const accounts = await web3.eth.getAccounts();

      //show the first connected account in the react page
      setConnectedAccount(accounts[0]);
    } else {
      alert('Please download metamask');
    }
  }

  return (
    <>
      {/* Button to trigger Metamask connection */}
      <button onClick={() => connectMetamask()}>Connect to Metamask</button>

      {/* Display the connected account */}
      <h2>{connectedAccount}</h2>
    </>
  );
}

export default App;
```

### HTML Single page

#### 1. Create an html file and import Web3 from CDN

```js<!DOCTYPE html>
<html>
  <head>
    <title>Metamask Connection</title>
    <!-- Import Web3 library from CDN -->
    <script src='https://cdn.jsdelivr.net/npm/web3@latest/dist/web3.min.js'></script>
  </head>
  <body>
  </body>
</html>
```

#### 2. Create Button to Connect and Display Connected Address

```js
<!DOCTYPE html>
<html>
  <head>
    <title>Metamask Connection</title>
    <!-- Import Web3 library from CDN -->
    <script src='https://cdn.jsdelivr.net/npm/web3@latest/dist/web3.min.js'></script>
  </head>
  <body>
    <h1>Metamask Connection</h1>

    <!-- button to connect Metamask -->
    <button id='connectButton'>Connect to Metamask</button>

    <!-- display the connected account -->
    <h2 id='connectedAccount'>null</h2>
  </body>
</html>
```

#### 3. Implement Script to Connect Metamask

```js
<!DOCTYPE html>
<html>
  <head>
    <title>Metamask Connection</title>
    <!-- Import Web3 library from CDN -->
    <script src='https://cdn.jsdelivr.net/npm/web3@latest/dist/web3.min.js'></script>
  </head>
  <body>
    <h1>Metamask Connection</h1>

    <!-- button to connect Metamask -->
    <button id='connectButton'>Connect to Metamask</button>

    <!-- display the connected account -->
    <h2 id='connectedAccount'>null</h2>

    <script type='module'>
      //listen for a `click` to connect when clicking the button
      document.getElementById('connectButton').addEventListener('click', async () => {
        //check if Metamask is installed
        if (window.ethereum) {
          const web3 = new Web3(window.ethereum);
          // Request the user to connect accounts (Metamask will prompt)
          await window.ethereum.request({ method: 'eth_requestAccounts' });

          // Get the connected accounts
          const accounts = await web3.eth.getAccounts();

          // Display the connected account
          document.getElementById('connectedAccount').innerText = accounts[0];
        } else {
          // Alert the user to download Metamask
          alert('Please download Metamask');
        }
      });
    </script>

  </body>
</html>
```

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

## Creating a Dapp

- Create a new folder e.g. truffleweb3
- cd into truffleweb3, then enter the command below, to generate a web3 react template

```js
truffle unbox react
```

