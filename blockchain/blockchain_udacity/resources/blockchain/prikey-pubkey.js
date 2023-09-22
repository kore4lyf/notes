const elliptic = require('elliptic');

// Create a new ECDSA (Elliptic Curve Digital Signature Algorithm) key pair
const ec = new elliptic.ec('secp256k1');

// Replace 'privateKeyHex' with your actual private key in hexadecimal format
const privateKeyHex = 'your_private_key_here';

// Derive the corresponding public key from the private key
const publicKey = ec.keyFromPrivate(privateKeyHex, 'hex').getPublic('hex');

console.log(`Private Key: ${privateKeyHex}`);
console.log(`Public Key: ${publicKey}`);
