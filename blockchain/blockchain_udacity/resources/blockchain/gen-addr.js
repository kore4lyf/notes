const bitcoin = require('bitcoinjs-lib');

// Create a Bitcoin network (mainnet or testnet)
const network = bitcoin.networks.testnet; // for testnet
// const network = bitcoin.networks.bitcoin; // for mainnet

// Generate a random Bitcoin key pair (private and public keys)
const keyPair = bitcoin.ECPair.makeRandom({ network });

// Get the Bitcoin address from the public key
const { address } = bitcoin.payments.p2pkh({ pubkey: keyPair.publicKey, network });

console.log(`Bitcoin Address: ${address}`);

