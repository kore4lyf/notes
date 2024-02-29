/**
 * BlockController
 *
 */
 const Block = require("./Block");
 const Blockchain = require("./Blockchain");
 const blockchain = new Blockchain();

// BlockController.create()
const create =  async (data) => {
  try {
    // Create block
    const block = new Block(data)

    // add block to blockchain
    await blockchain.addBlock(block)

    // Get the top Most block
    // const blockCount = await blockchain.getBlockCount()
    // const block = await blockchain.getBlock(blockCount)
    
    return block

  } catch (err) {
    console.log(`error: ${err}`);
  }
}


const findBlock = async function (blockId) {
  try {
    //get requested height
    const block = await blockchain.getBlock(blockId)
    return block

  } catch (err) {
    console.log(`error: ${err}`);
  }
}



module.exports = {
  create,
  findBlock
};
