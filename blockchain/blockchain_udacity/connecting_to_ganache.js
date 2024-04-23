const {Web3} = require('web3')

const web3 = new Web3('HTTP://127.0.0.1:7545')

const walletAddr1 = '0x452B9E34D07062A988BE36ccCf33453AA6b055cb'



// --------------------------------------------------------

// Getting wallet address' balance
async function getBalance(walletAddr){
    try {   const balance = await web3.eth.getBalance(walletAddr)
        console.log(balance)
        return balance
    } catch (error) {
        console.error("Error getting balance:", 'error');
    }   
}

// --------------------------------------------------------

// Convert wallet address balance to ETHER
function convertBalToEth(weiValue) {
    const ethValue = web3.utils.fromWei(weiValue, 'ether')
    return ethValue
}

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
 



// --------------------------------------------------------

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
        // get here is a function within the smart contract we have written.
        // call({from: address}), address here refers to the user interacting with smart contract.
    contract.methods.get()
        .call({from: '0x8A3C0D1e328F2F0a13f0cE6E496B5044A38E0164'})
        .then(console.log)
}

instanceContract()



// --------------------------------------------------------

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

ABI = output.contracts['demo.sol']['demo'].abi

bytecode = output.contracts['demo.sol']['demo'].evm.bytecode.object






// --------------------------------------------------------

// How to deploy a smart contract with 
contract = new web3.eth.Contract(ABI)

let defaultAccount

// All Ganache addresses.
web3.eth.getAccounts().then(accounts => {
    console.log('Accounts: ', accounts)
    // Use the first Ganache account as the default account    
    defaultAccount = accounts[0]
    
    contract.deploy({data: bytecode})
    .send({from: defaultAccount, gas: 6721975})
    .on('receipt', (receipt)=> {
        console.log('Contract Address: ', receipt.contractAddress)
    })
})
    
    
    

// --------------------------------------------------------

// testing
const receiverAddr = '0x1f463a23a4F3c958255d3987720074904f79C654'

async function app() {
    try {
        
    } catch (error) {
        console.error("Error:", 'error');
    }
}

app()