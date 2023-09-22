const {  Signer, SignerAsync, ECPairInterface, ECPair } = require('ecpair');
const bitcoin = require('bitcoinjs-lib');

// Create a Bitcoin network (mainnet or testnet)

const TESTNET = bitcoin.networks.testnet; // for testnet
// const network = bitcoin.networks.bitcoin; // for mainnet

// Generate a random Bitcoin key pair (private and public keys)
const keyPair = ECPair.makeRandom({ TESTNET });

// Get the Bitcoin address from the public key
const { address } = bitcoin.payments.p2pkh({ 
  pubkey: keyPair.publicKey,
  network: TESTNET 
});


const privateKey = keyPair.toWIF();
console.log("keypair: ", keypair)
console.log(address+" "+privateKey);
console.log(`Bitcoin Address: ${address}`);
