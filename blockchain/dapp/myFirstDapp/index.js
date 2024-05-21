import Web3 from 'web3';

async function connectToMetaMask() {
    // Check if MetaMask is installed and active
    if (typeof window.ethereum !== 'undefined') {
        // MetaMask is installed
        const web3 = new Web3(window.ethereum);

        try {
            // Request account access
            await window.ethereum.enable();

            // Accounts now exposed
            console.log('Connected to MetaMask');
            return web3;
        } catch (error) {
            // User denied account access
            console.error('Error connecting to MetaMask:', error);
            return null;
        }
    } else {
        // MetaMask is not installed or not available
        console.error('MetaMask is not installed or not available');
        return null;
    }
}

async function init() {
    const web3 = await connectToMetaMask();
    if (!web3) {
        // MetaMask connection failed
        return;
    }

    // Get the contract address
    const contractAddr = '0x88AdA0A743A2b9e358EE6cb4ce71126fE0A1616f';

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
    
    

    const contract = new web3.eth.Contract(contractABI, contractAddr);
    console.log(contract);

    // Set a default account
    async function getAccounts() {
        try {
            const accounts = await web3.eth.getAccounts();
            console.log('Accounts:', accounts);
            return accounts;
        } catch (error) {
            console.error('Error fetching accounts:', error);
        }
    }

    await getAccounts();

    const sendBtn = document.querySelector('.send');

    web3.eth.defaultAccount = await web3.eth.getAccounts()[0];
    console.log(web3.eth.defaultAccount);
    sendBtn.addEventListener('click', async () => {
        let message = document.querySelector('.message').value;
        try {
            await contract.methods.setMessage(message).send({ from: web3.eth.defaultAccount });
            console.log('Message set successfully:', message);
        } catch (error) {
            console.error('Error setting message:', error);
        }
    });
}

init();


