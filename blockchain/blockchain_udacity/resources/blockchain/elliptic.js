const elliptic = require('elliptic');

const ec = new elliptic.ec('secp256k1'); // Use the Bitcoin elliptic curve

const privateKey = 'L2JLikJnciPiSmf46Ysg9ctrxWpf7WWxTFRyXYXS3AJWUZf6hsNA'; // Replace with your private key in hexadecimal format
const message = 'Hello, Bitcoin!';

const key = ec.keyFromPrivate(privateKey, 'hex');
const signature = key.sign(message);

console.log('Signature:', signature.toDER('hex')); 








const publicKey = '03x18E8Xr4vq3vwxcv5WuRg2fNcRHPXvgbWsw'; // Replace with your public key in hexadecimal format

const pubKey = ec.keyFromPublic(publicKey, 'hex');
const isVerified = pubKey.verify(message, signature);

console.log('Is Verified:', isVerified);
