// Import level and crypto-js
const { Level } = require('level')
const SHA256 = require('crypto-js/sha256')
const Block = require('./Block')

// Create or open a database
const db = new Level('chaindata', {
  valueEncoding: 'json' // Use JSON encoding for values
})


/* ===== Blockchain Class ==========================
|  Class with a constructor for new blockchain 		|
|  ================================================*/
class Blockchain {
  constructor () {
    // Initialize the blockchain with the genesis block if it is empty
    this.getBlockHeight().then((height) => {
      if (height === -1) {
        console.log('Creating the genesis block')
        this.addBlock(new Block('First block in the chain - Genesis block'))
      }
    })
  }

  // Add new block
  async addBlock (newBlock) {
    // Get the current block height
    const height = await this.getBlockHeight()
    // Set the new block height
    newBlock.height = height + 1
    // Set the UTC timestamp
    newBlock.time = new Date().getTime().toString().slice(0, -3)
    // Set the previous block hash
    if (newBlock.height > 0) {
      const previousBlock = await this.getBlock(height)
      newBlock.previousBlockHash = previousBlock.hash
    }
    // Set the new block hash
    newBlock.hash = SHA256(JSON.stringify(newBlock)).toString()
    // Save the new block to the database
    await this.saveBlock(newBlock.height, newBlock)
  }

  // Get block height
  async getBlockHeight () {
    // Get the number of blocks in the database
    const count = await this.getBlockCount()
    // Return the height as the count minus one
    console.log(`getBlockHeight = ${count - 1}`)
    return count - 1
  }

  // Get block by height
  async getBlock (blockHeight) {
    // Get the block from the database
    const block = await this.getBlockByHeight(blockHeight)
    // Return the block as an Object
    return block
  }

  // Validate block
  async validateBlock (blockHeight) {
    // Get the block object
    const block = await this.getBlock(blockHeight)
    // Get the block hash
    const blockHash = block.hash
    // Remove the block hash to test block integrity
    block.hash = ''
    // Generate the block hash
    const validBlockHash = SHA256(JSON.stringify(block)).toString()
    // Compare the hashes
    if (blockHash === validBlockHash) {
      return true
    } else {
      console.log('Block #' + blockHeight + ' invalid hash:\n' + blockHash + '<>' + validBlockHash)
      return false
    }
  }

  // Validate blockchain
  async validateChain () {
    // Initialize an array to store the error logs
    const errorLog = []
    // Get the block height
    const height = await this.getBlockHeight()
    // Loop through the blocks
    for (let i = 0; i <= height; i++) {
      // Validate the current block
      const isValid = await this.validateBlock(i)
      // If the block is invalid, push its height to the error log
      if (!isValid) {
        errorLog.push(i)
      }
      // If the block is not the genesis block, compare its previous hash with the hash of the previous block
      if (i > 0) {
        // Get the current and previous blocks
        const [currentBlock, previousBlock] = await Promise.all([
          this.getBlock(i),
          this.getBlock(i - 1)
        ])
        // Get the previous hash of the current block and the hash of the previous block
        const previousHash = currentBlock.previousBlockHash
        const previousBlockHash = previousBlock.hash
        // Compare the hashes
        if (previousHash !== previousBlockHash) {
          // If the hashes don't match, push the current block height to the error log
          errorLog.push(i)
        }
      }
    }
    // If the error log is not empty, log the errors
    if (errorLog.length > 0) {
      console.log('Number of block errors = ' + errorLog.length)
      console.log('Blocks with errors: ' + errorLog)
    } else {
      // Otherwise, log that the blockchain is valid
      console.log('Blockchain valid')
    }
  }

  // Save block to the database
  async saveBlock (key, value) {
    // Use a try-catch block to handle errors
    try {
      // Put the key-value pair to the database
      await db.put(key, value)
      // Log the success message
      console.log('Block ' + key + ' saved to the database')
    } catch (err) {
      // Log the error message
      console.log('Block ' + key + ' failed to save to the database', err)
    }
  }

  // Get block from the database by height
  async getBlockByHeight (key) {
    // Use a try-catch block to handle errors
    try {
      // Get the value by the key from the database
      const value = await db.get(key)
      // Return the value
      console.log(`getBlockByheight = ${value}`)
      return value
    } catch (err) {
      // Log the error message
      console.log('Unable to retrieve block ' + key + ' from the database', err)
      // Throw the error
      throw err
    }
  }

  // Get the number of blocks in the database
  async getBlockCount () {
    // Use the iterator method on the db object
    const iterator = db.iterator()

    // Initialize a counter
    let i = 0
    // Use a for await loop to iterate over the entries
    for await (const [key, value] of iterator) {
      // For each data event, increment the counter
      i++
    }
    console.log(`getBlockCount = ${i}`)
    return i
  }
} // Blockchain


module.exports = Blockchain
