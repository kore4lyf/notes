'use strict'; 
module.exports = function create_btc_address(){ 
const  bitcoin =require('bitcoinjs-lib');
const {  Signer, SignerAsync, ECPairInterface, ECPair } = require('ecpair'); 
  const TESTNET = bitcoin.networks.testnet;
  const keyPair = ECPair.makeRandom({ network: TESTNET });
const { address } = bitcoin.payments.p2pkh({
 pubkey: keyPair.publicKey,
 network: TESTNET,
 });
 const privateKey = keyPair.toWIF();
console.log("kp: ", keypair)
console.log(address+" "+privateKey);
}
