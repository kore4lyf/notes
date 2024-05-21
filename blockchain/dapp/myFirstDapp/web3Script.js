const { Web3 } = require('web3')

const web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:7545'))



async function getAccounts() {
    try {
        const accounts = await web3.eth.getAccounts();
        console.log('Accounts:', accounts);
        return accounts;
    } catch (error) {
        console.error('Error fetching accounts:', error);
    }
}

// Call the function to get accounts
getAccounts();

console.log(web3.eth.defaultAccount)

// Get the contract address
const contractAddr = '0x88AdA0A743A2b9e358EE6cb4ce71126fE0A1616f'

const contractABI = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_message",
				"type": "string"
			}
		],
		"name": "setMessage",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getMessage",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]

const contract = new web3.eth.Contract(contractABI, contractAddr)



