const elliptic = require('elliptic');
const bitcore = require('bitcore-lib');

// Create a new ECDSA (Elliptic Curve Digital Signature Algorithm) key pair
const ec = new elliptic.ec('secp256k1');

// Generate a new random private key
const privateKey = ec.genKeyPair().getPrivate('hex');

// Get the WIF (Wallet Import Format) representation of the private key
const privateKeyWIF = privateKey.toString('hex'); // Replace with a valid WIF private key
const WIF = privateKey.toWIF(); // Replace with a valid WIF private key

// Derive the corresponding public key from the private key
const publicKey = ec.keyFromPrivate(privateKey, 'hex').getPublic('hex');

// Convert a WIF private key back into a private key object using bitcore-lib
const privateKeyFromWIF = bitcore.PrivateKey.fromWIF(privateKeyWIF).toString();

console.log(`Private Key: ${privateKey}`);
console.log(`Private Key (WIF): ${privateKeyWIF}`);
console.log(`Public Key: ${publicKey}`);
console.log(`PRIVATEKEY WIF: ${WIF}`);
console.log(`Decoded Private Key: ${privateKeyFromWIF}`);
