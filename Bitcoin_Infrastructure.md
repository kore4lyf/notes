# Bitcoin Infrasructure
# Bitcoin Infrasructure
Introduction to Bitcoin Infrastructure is focused on providing students with a solid understanding of the role that nodes and node operators play in the construction of the network. In particular, it focuses on the incentives that drive enterprise operators to invest in scaling and infrastructure. Upon completion of this course, students will be awarded a certificate of completion.

## Steps to run the network

Section 5 of the Bitcoin white paper, tilted ‘Network’, outlines a list of instructions that nodes must follow to correctly operate the Bitcoin network.

The steps to run the network are as follows:

1. New transactions are broadcast to all nodes.
2. Each node collects new transactions into a block.
3. Each node works on finding a difficult proof-of-work for its block.
4. When a node finds a proof-of-work, it broadcasts the block to all nodes.
5. Nodes accept the block only if all transactions in it are valid and not already spent.
6. Nodes express their acceptance of the block by working on creating the next block in the chain, using the hash of the accepted block as the previous hash.