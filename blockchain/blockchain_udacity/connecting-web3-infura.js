const { Web3 } = require('web3')
const ethSepoliaTestNetUrl = 'https://sepolia.infura.io/v3/63dc268f8f96492a8f47bf9f2562ea6e'
const ethMainNetUrl = 'https://mainnet.infura.io/v3/63dc268f8f96492a8f47bf9f2562ea6e'

// Connecting to the ethereum network
// const web3 = new Web3(new Web3.providers.HttpProvider(ethMainNetUrl))
const web3 = new Web3(ethMainNetUrl)

// Getting the latest block number 
web3.eth.getBlockNumber()
  .then(console.log);

// A user's wallet address
const address = '0x464c3F72f6729Ce642e163b1773599197D4a6FD9'

// Getting address balance
web3.eth.getBalance(address)
.then(balance => {
    console.log(`Balance of ${address}: ${web3.utils.fromWei(balance, 'ether')} ETH`);
})
.catch(error => {
    console.error('Error getting balance:', error);
});

// or
async function getBalance(address) {
try {
    const balance = await web3.eth.getBalance(address);
    console.log(`Balance of ${address}: ${web3.utils.fromWei(balance, 'ether')} ETH`);
} catch (error) {
    console.error('Error getting balance:', error);
}
}

getBalance(address);