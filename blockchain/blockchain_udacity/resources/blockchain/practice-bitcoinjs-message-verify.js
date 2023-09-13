const bitcoinMessage = require('bitcoinjs-message')

// Verify a Bitcoin message
const address = '1HZwkjkeaoZfTSaJxDw6aKkxp45agDiEzN'

const signature = 'HJLQlDWLyb1Ef8bQKEISzFbDAKctIlaqOpGbrk3YVtRsjmC61lpE5ErkPRUFtDKtx98vHFGUWlFhsh3DiW6N0rE'

const message = 'This is an example of a signed message.'

console.log(bitcoinMessage.verify(message,address,signature));

console.log(__filename)
