# Blockchain

In this program, you'll work with the Bitcoin and Ethereum protocols, build projects for real-world application, and gain the essential skills for a career in this dynamic space.

## 1. Blockchain Developer: Fundamentals

### Lesson 1: Welcome to Blockchain Revolution

#### Influence of Blockchain
Blockchain is changing industries in the world. e.g.
- Personal Identification
- Medicine 
- Finance
- Supply Chain Management
- Government 


#### Program Overview
 You will build 8 projects 
 1. **Blockchain Identity**: You will create and manage your own blockchain identity.
 2. **Blockchain Data**: You will build your own blockchain to store and manage data.
 3. **Web Services**: Connecting the blockchain you created to a webserver, so that users can interact with.(using NodeJs).
 4. **Identity and Notary Service**: You will learn to manage user profiles, service and store digital document. We will also explore different blockchain service layers.
 5. **Identity and Smart Contract**: Build decentralised application using the Ethereum Platform. You will also learn Solidity(Ethereum's programming language).
 6. **Architecture**: Dive deeper into the low level component of your webservice.
 7. **Supply Chain:**  Add more functionality to your service, to solve the issue supply chain management. This will allow your apps users to track product owners from the time a product is made, until it reaches the shelve for potential custommers.


#### Blockchain Overview
Blockchain is a shared database that contains a list of transactions. 



## 2. Blockchain Identity

### Lesson 1: Blockchain Basics
In this lesson, you learn the basics of Blockchain are introduced to topics like Bitcoin to begin creating your very own **bitcoin identity**.

#### Concept 01: Lesson Introduction
The Blockchain Framework
- Transaction
- Wallet 
- Signature
- Mempool
- Network
- Concensus
- Hashing
- Block
- Blockchain

#### Interview
Blockchain identity is all about setting up your identity on blockchain, so you can start manipulating and working with services as you create your application. 


#### Financial Transactions
The blockchain started as a way to try and solve problems seen with financial transactions.
- Banks are known as **Trusted 3rd Parties**.
- A Trusted 3rd Party is an entity that facilitates interactions between 2 parties.
- Banks uses a **Ledger** (A list of transaction records). It includes information about who sends money, who recieved it, when it happened e.t.c.
- Banks prevent double spending because they have a ledger.


**Problem**: Joe passes money to his Bank; Joe's Bank passes money to Brandy's Bank; Brandy's Bank passes money to Brandy

**Potential Answer 1**: No easy way to see if transactions have been tampered with

**Potential Answer 2**: Transaction time is dependent on the banks to validate the transactions



#### Introduction to Bitcoin
Bitcoin is not THE blockchain, it is A blockchain.
A block is a group of transaction bounded together.

- Read the Bitcoin White Paper.

A **white paper** is a guide that informs readers concisely about a complex issue and presents a thought on the matter. A white paper is meant to help readers understand an issue, solve a problem, or make a decision.


#### Hashing
It's a way to create a digital fingerprint for a piece of data.
A **hash** is a digital fingerprint for information.
A **hashing Function**, maps a group of data to a unique hash value. The hash value can then be used to identify the specific data.

SHA256 is a Hash Function. SHA stands for Secured Hashing Algorithm, and 256 the number of bits produced.


#### Practice Hashing
- npm install crypto-js
crypto-js has alot of hashfunction.


#### Blocks
A block is a container that holds a list of transactions to be added to the blockchain. It is a shared digital ledger that records a list of transactions.
As transactions are made they are bundled together into a block.

> Blocks also holds information call the Block Header.

**The Block header** contains information such as Previous Block hash, Time, Merkle Root and Nonce.

**Previous Block hash** - Is the hash value for the block that comes directly before the given block in the chain. Having this connection links the blocks together.

**Time** - The time the block was created. (Timestamp)

**Merkle Root** - Is the hash that represents every transaction in a block.

**Nonce** - A nonce is an arbitrary number that can only be used once. 
When creating a hash for a block, the system requests a very specific hash with a certain leading number of zeros(Which represents a difficulty Level).
To find that value you have to do **Block Data + Nonce = Hash value.**
Computers guess this value over and over value until they finally come up with a hash that gives us the hash that meets the constraint.

**Block Difficulty**- The number of zeros required to solve this problem is called block difficulty. More zeros means more difficulty and vise versa.

**Block Size** - is the amount of space a block has for holding data. Once a is full then will no longer be able to take new transactions.  

**Block Hash** - Represents the block's hash, this hash value is generated by running all the blocks data through a hash value. 
This important because it allows us know when a block has been tampered with.

**Block Demonstration**- visit [anderswbrownworth.com](anderswbrownworth.com/blockchain/block)


#### Practice Block


#### Blockchain
The blockchain is specifically the place where data is stored.
**The Blockchain** is a digital ledger that contains the entire history of transactions made on the network. 
The data in blockchain is immutable.
Every block contains it's hash value and the hash of the previous block before it. By holding the hash of previous block each block forms a chain.

A block on the chain can be identified on a chain by its block number e.g. block 1, 2, 3, 4, 5 i.e. The third block will have a block number 3 and the first block will have a block number 1.

The first block is called the Genesis Block.




#### Distributed Peer-to-Peer Network
The idea of a network is what allows the blockchain to bypass the need for 3rd parties like we discussed earlier. 
The blockchain is supported by a network which is commonly known as a peer-to-peer distributed network

**Peer-to-pair Network**: Is a network of computers that allows information to be shared across user. 
It allows users such as nodes to send information between one another without the need for a centeral authority.
An Example of a common peer to peer network are chat services such as Skype, Hangout or Wechat. Phones give a peer-to-peer access to interact with people that have phones.

The blockchain also distributed. A **Distributed Network** is a network that allows information to be spread out across many users.




#### Memory Pool
The **memory pool** (also known as the mempool) is the waiting place for transactions before they enter the blockchain.
When you start making transactions on the blockchain you will notice that it doesn't happen instantly, for the transaction to be complete, it needs to be confirmed or by the network (This is done by miners on the blockchain).

Since ther are so many transcation happening, not every thing can be picked up immediately. Transaction needs to wait inline (in the mempoo) before they get valide.

**Which of these are valid reasons a Transaction would leave the Mempool?**

- The transaction expired by timeout (by default 14 days after entering).

- The transaction was at the bottom of the mempool (when sorted by fee per size), the mempool had reached its size limit, and a new higher-fee transaction was accepted, evicting the transaction at the bottom.

- The transaction was included in a block.

- The transaction or one of its unconfirmed ancestors conflicts with a transaction that was included in a block.

NB: Eviction does not mean a transaction is canceled. It can still be readded add to the mempool.

> The reason transactions wait in the memory pool is in hopes of being validated.

The purpose of the mempool is to provide security.



#### Consensus
Things like proof of work, proof of stake, and DBFT(delegated Bazantine Fault Tolerance) are all consensus algorithms we'll discuss soon.

**Concensus** is how the network reaches agreement about which transaction are most trustworthy.

The problem that lies at the core of concensus is the **Byzantine General's Problem**. Bitcoin solved the problem a using **Proof-of-Work** algorithm (It also allowed bitcoin to solve the **double spending **problem).

The Byzantine General's problem solves many core issues around how members of a network can trust one another.

What it doesn't do is provide the specific system you would use to go about implementing this solution.

These implementations are done using consensus algorithms. 



#### Proof of Work
The idea behind proof of work is that whoever puts in the most work to contribute to the system is the most trustworthy.
Proof-of-Work is a concensus algorithm, originally proposed by bitcoin. 

> The basic idea behind Proof-of-Work is that a piece of data can be costly/time consuming to produce, but easy/simply to verify.

In Proof-of-Work each node is involved in solving a problem as a proof that they have done some required work. Those who attempt to solve the problem are miners, in return for their time and resources they are paid transaction fees that come directly from the users and they are rewarded with new coins as a reward for mining the coin. 

Finding a solution to this problem (Proof-of-Work) can take a lot of computer power.

> The system requests a specific hash value that starts with a certain number of zeros. To find this value you combine all the blocks data with a nonce to try and generate the correct hash value. The computer guess the nonce value over and over again until the value is found.


Miner are constantly trying to find the nonce for every new block. 
PoW = SHA256(Block Data & Nonce)

The number of leading zeros is known as block difficulty. In bitcoin, the block difficulty is adjusted every 10minutes to ensure that blocks are created every 10min. If blocks are created to fast the block difficulty will increase.


**Problems with Proof-of-Work**
1. Extremely High-Energy Consumption: To mine bitcoin miner setup mining rigs. A rig can be a dedicated computer built specifically for mining. People can setup mining rigs in their homes. A bitcoin minning farm is ran by larger companies.

2. Miner monopoly problem: Some companies own a larger percentage of minning rigs in the network, which helps them get more hash vote to put blocks in the blockchain




#### Proof of Stake
The key idea behind proof of stake is that it focuses on giving votes to members, depending on how much stake they have in the success of the chain.

**Proof-of-Stake** seeks to achieve concensus by giving votes to those with stake in the system

In Proof-of-Stake there are no minners instead there are validators. These investors do not need to invest in computing equipment to mine blocks that create coins.

**In order to be able to validate transaction and create blocks, validator put up their own coin as stake.** You can think of it as if they are placing a bet, if they validate a frudster's transaction, they lose their Holding as well as their right to participate as a validator in the future.

The greater the stake of an investor, the higher their chances of being picked to validate the next block. A node with 400 coins has 4 times the chance of being chosen to put a block in the blockchain compared to a block with 400 coins. 


**Nothing at Stake problem** prevents investor from betting on multiple blocks at a time.

Proof-of-Stake is used by Dash, Etherium and Lisk.


#### Delegated Byzantine Fault Tolerance
dBFT tries to achieve consensus by assigning roles to nodes to help coordinate consensus.
dBFT does not have miners, but instead it has nodes, that are split into **Ordinary nodes** and **Concensus nodes**.
The majority of nodes in the network are ordinary citizen nodes that can transfer or exchange assets. But they don't participate in validating blocks. 

A concensus node has the power to verify each block written in the blockchain. A concensus node act as a representative of other node in it's network.
For an ordinary node to be a concensus node, it needs to meet certain criteria, which varies from platform to platform (this may involve owning some equipment, having dedicated internet connection or having stake in the network).
The concensus nodes keep track of proposed blocks that can be added to the blockchain. When its time to decide the which block to be added next, the concensus node is randomly selected from the pool of all concensus nodes. The selected node is called the **Speaker** while the rest are call **Delegates**.
The speaker creates a new block and propose it to the delegates, 2/3 (66.66% rating) of the delegate need to proof this block (vote) before it is passed. If the speaker dosen't pass, it returns to being a delegate and another speaker is chosen (and all previous steps are repeated).

dBFT is said to be much **faster than proof of work** and it requires less resources because it there are no complicated cryptography to solve.

dBFT is **resistant to forking**, because a any given moment there is only be one version of truth.

dBFT is not immune to problems. If the number of dishonest delegates are more than the number of honest nodes, they can vote down a valid  speakers node. To help with this, some blockchain platforms release data about the honesty and functioning of each delegate for voters review.

Neo uses dBFT.








### Lesson 02: Blockchain Transactions
Identify various wallet types, private/public key generation between non-deterministic, sequential deterministic, and hierarchical deterministic wallets.



By the end of this lesson you will:

- Understand the mechanics of a simple transaction between 2 entities (e.g. Joe and Jessica) using private keys, public keys, wallets, and public blockchain.
- Determine and generate the appropriate wallet type for the needs of a given situation. (Non-deterministic, Sequential Deterministic, and Hierarchical Deterministic)
- Create and restore a bitcoin wallet using private keys.
- Recognize signing transactions as a part of the transaction lifecycle and can describe its purpose and process.

#### Blockchain Identity

Only a person with money should have access to spend it and our transaction should be done in a way that makes it untraceable.

It should also be possible to share this identity with people so they transact with you. - All these are solved in bitcoin using wallets.

A bitcoin wallet, establishes our identity on the blockchain. Our wallet is obtained via **(Private Key -> Public -> Wallet Address)**.

The **wallet address** is a unique identifier for your wallet. 
To generate a wallet address, you need to have a private key.
**Private Key** (Secret Key) - A secret number that allows you to spend bitcoin from your wallet.

> A private key should not be shared with anyone.

The next step is to generate a public key.
**Public Key** - The public key is derived from the private key. It is a publicly shareable key that cannot be used to spent a coin. 
It can be shared with anyone, and it is usually used to recieve coin/bitcoin.

> You can share your public key without thinking about the security of your private key.

i.e. The private key can only be used to generate the public key, but the public key cannot be used to generate the private key.

> In bitcoin a public key is created by passing a private key into ECDSA (Eliptic Curve Digital Signature Algorithm). The ECDSA is a one way function. 


Wallet address is made from a public key using **HASH256()** i.e. **RIPEMD160(SHA256())**, which generates a 160-bit values, to make the values readable, we take the 160-bit values and pass them to a **BASE58CHECK()**, which is the actuall wallet address.




