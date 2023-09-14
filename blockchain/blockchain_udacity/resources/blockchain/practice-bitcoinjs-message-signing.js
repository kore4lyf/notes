const bitcoin = require('bitcoinjs-lib')
const bitcoinMessage = require('bitcoinjs-message')
// Signing a transaction
console.log(bitcoin)
var keyPair = bitcoin.ECPair.fromWIF('L2JLikJnciPiSmf46Ysg9ctrxWpf7WWxTFRyXYXS3AJWUZf6hsNA')
var privateKey = keyPair.privateKey
// let num = 0xff2a30b5c87e
// let privateKey = num.toString(15)
// privateKey = Buffer.from(privateKey)

console.log(privateKey, typeof privateKey, typeof num)
var message = 'This is an example of a signed message.'

var signature = bitcoinMessage.sign(message, privateKey, num)

console.log(signature.toString('base64'))
// => 'H9L5yLFjti0QTHhPyFrZCT1V/MMnBtXKmoiKDZ78NDBjERki6ZTQZdSMCtkgoNmp17By9ItJr8o7ChX0XxY91nk='


