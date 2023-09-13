const CryptoJS = require('crypto-js')

const data = 'korede'
// Using SHA256 
const sha256Data = CryptoJS.SHA256(data).toString()
const ripemdData = CryptoJS.RIPEMD160(data).toString()


console.log('RIPEMD160 of korede is: ', ripemdData)
console.log('SHA256 of korede is: ', sha256Data)


const HASH256 = value => {
  const shaValue = CryptoJS.SHA256(value).toString()
  return CryptoJS.RIPEMD160(shaValue).toString()
}

console.log('SHA256 of korede is: ', HASH256(data))


// privateKey = SHA256(seed + n). where seed = 128 purely random bits (Deterministic wallet address )

// The is **mnemonic phrases are combined** to generate a master private key which is then **appends a counter with an incrementing value(every time a new private key is generated) to generate new private keys that can be used to generate it's own public key**.


// Public key = ECDSA(privateKey)
// To generate a wallet address
//  HASH256(PubAddr) + last 4byte(8 chars) of SHA256(pubAddr)
// Check => SHA256(pubAddr).slice(-8)
// 
