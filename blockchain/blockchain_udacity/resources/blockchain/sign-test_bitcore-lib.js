const bitcore = require('bitcore-lib');

// Replace these with your actual values
const privateKeyWIF = 'L2JLikJnciPiSmf46Ysg9ctrxWpf7WWxTFRyXYXS3AJWUZf6hsNA';
const messageToSign = 'kore4lyf';

// Create a private key from the WIF (Wallet Import Format)
//const privateKey = new bitcore.PrivateKey(privateKeyWIF);
const privateKey = bitcore.PrivateKey.fromWIF(privateKeyWIF);

// Sign the message
const signature = bitcore.Message(messageToSign).sign(privateKey);

console.log('Signature:', signature);

// To verify the signed message
const publicKey = '08E8Xr4vq3vwxcv5WuRg2fNcRHPXvgbWsw'
//privateKey.toPublicKey();
const verified = bitcore.Message(messageToSign).verify(publicKey, signature);

console.log('Message Verified:', verified);
