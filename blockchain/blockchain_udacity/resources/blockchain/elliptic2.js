const elliptic = require('elliptic');

// Create a new ECDSA (Elliptic Curve Digital Signature Algorithm) key pair
const ec = new elliptic.ec('secp256k1');

// Generate a new random private key
const privateKey = ec.genKeyPair().getPrivate('hex');

// Derive the corresponding public key from the private key
const publicKey = ec.keyFromPrivate(privateKey).getPublic('hex');

// Message to sign
const message = 'Hello, world!';

// Sign the message with the private key
const signature = ec.sign(message, privateKey, 'hex', { canonical: true });

// Verify the signature with the public key
const isVerified = ec.verify(message, signature, publicKey, 'hex', { canonical: true });

console.log(`Private Key: ${privateKey}`);
console.log(`Public Key: ${publicKey}`);
console.log(`Message: ${message}`);
console.log(`Signature: ${signature}`);
console.log(`Signature: ${signature.toDER('hex')}`);
console.log(`Signature verified: ${isVerified}`);
