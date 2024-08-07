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

> Blocks also holds information called the Block Header.

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

Since there are so many transcation happening, not every thing can be picked up immediately. Transaction needs to wait inline (in the mempoo) before they get validated.

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

The number of leading zeros is known as block difficulty. In bitcoin, the block difficulty is adjusted every 10minutes to ensure that blocks are created every 10min. If blocks are created too fast the block difficulty will increase.


**Problems with Proof-of-Work**
1. Extremely High-Energy Consumption: To mine bitcoin miner setup mining rigs. A rig can be a dedicated computer built specifically for mining. People can setup mining rigs in their homes. A bitcoin minning farm is ran by larger companies.

2. Miner monopoly problem: Some companies own a larger percentage of minning rigs in the network, which helps them get more hash vote to put blocks in the blockchain




#### Proof of Stake
The key idea behind proof of stake is that it focuses on giving votes to members, depending on how much stake they have in the success of the chain.

**Proof-of-Stake** seeks to achieve concensus by giving votes to those with stake in the system

In Proof-of-Stake there are no minners instead there are validators. These investors do not need to invest in computing equipment to mine blocks that create coins.

**In order to be able to validate transaction and create blocks, validator put up their own coin as stake.** You can think of it as if they are placing a bet, if they validate a frudster's transaction, they lose their Holding as well as their right to participate as a validator in the future.

The greater the stake of an investor, the higher their chances of being picked to validate the next block. A node with 400 coins has 4 times the chance of being chosen to put a block in the blockchain compared to a block with 100 coins. 


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
**Public Key** - The public key is derived from the private key. It is a publicly shareable key that cannot be used to spend a coin. 
It can be shared with anyone, and it is usually used to recieve coin/bitcoin.

> You can share your public key without thinking about the security of your private key.

i.e. The private key can only be used to generate the public key, but the public key cannot be used to generate the private key.

> In bitcoin a public key is created by passing a private key into ECDSA (Eliptic Curve Digital Signature Algorithm). The ECDSA is a one way function. 


Wallet address is made from a public key using **HASH256()** i.e. **RIPEMD160(SHA256())**, which generates a 160-bit values, to make the values readable, we take the 160-bit values and pass them to a **BASE58CHECK()**, which is the actuall wallet address.


#### Wallet Overview
Blockchain identities are made up of a few important tools like wallets, addresses, and keys. Not only are there a few of these different tools creating our identity, it's also possible to implement them in different ways.


##### Wallet Types
There are two main categories of a wallet.
1. Deterministic Wallets
2. Non-deterministic Wallets


| Wallet Types | Non-Deterministic Wallet | Sequential Deterministic Wallet | Hierarchical Deterministic Wallet |
| :--- | :--- | :--- | :--- |
| Description | Randomly generated private keys | Derived sequentially from a single seed and can be used back to that seed. | Derived in a tree structure. Parent key derives children keys, children keys derive grandchildren keys etc. |
| How to get a new private key? | Private key = randomly **generated between 1 and 2^256** | Private key = SHA256(seed + n). where seed = 128 purely random bits. | Private key = SHA256(address(publicKey(seed) + n)) |


##### Key Terms
Non-deterministic Wallet: (random wallets) A wallet where private keys are generated from random numbers.

**Deterministic Wallet**: A wallet where addresses, private keys, and public keys can be traced back to their original seed words.

**Hierarchical Deterministic Wallet**: An advanced type of deterministic wallet that contains keys derived in a tree structure.


#### Wallet Types

In this section, we'll do a deep dive on these 2 main types of wallets. This will inform decisions you make later on about the wallets you'll use personally or when building your own applications.



##### Non-Deterministic Wallets
First, lets take a closer look at non-deterministic wallets.
In Non-deterministic wallets, private keys are generated manually. i.e A **Random number** generate a **private Key** which in turn generaes a **public Key** and then a **wallet address**, and there are no ways for us to know they were derived.

Non-deterministic wallets can be thought of as a collection of a randomly generated private keys or a random number is used to generate a private key, which is then used to generate a public key. 

For privacy it's best to generate new wallet addresses for each transaction, so no one can track links between addresses. 

Based on this logic every time a new key is generated, one need to backup the wallet, so as not to lose the newly generated private key.

But in a deterministic wallet, all addresses, private keys, and public keys can be traced back to the original seed. So, there's a purpose behind each of these IDs and nothing is random, because they can be determined.


##### Deterministic Wallets
There are two types of deterministic wallet. 
1. **Sequential Deterministic Wallet**: A random number is used to generate a seed. The seed is then put through a mathematical function which then derives a series of private keys.
The is **mnemonic phrases are combined** to generate a master private key which is then **appends a counter with an incrementing value(every time a new private key is generated) to generate new private keys that can be used to generate it's own public key**.
   

1. **Hierachical Deterministic Wallet**: The HD wallet contain keys derived in a tree structure. A **Master Key** is generated from a **Seed** and a **Child Key** is generated from a **Master Key**. A **Master Key** can generate many **Child Keys** and a **Child Key** can generate many **Grandchild Keys**.  
   
HD wallet came about in the bitcoin improvement proposal 32 also known as BIP32(view able online in BIP32 Github Repo).
The HD wallet was described in the proposals abstract like this **"This document describes hierarchical deterministic wallets (or "HD Wallets"): wallets which can be shared partially or entirely with different systems, each with or without the abilty to spend coins."**

> What this means is that with HD wallet it is possible to derive **sub public keys** from public keys and **sub private keys** from private keys.

HD wallets in application is useful for businesses that want to seperate out different departmental spendings. i.e Each private key generated from the master Key can represent a departments(e.g Accounting, Engineering) private key, and many public keys/wallets can be generated from that single private key(members of the department).

> The downside is that HD Wallets require the down side of that master key, because every other key is mathematically generated from that key.

**Each wallet has a situational use case**. Wallets continue to evolve depending on situational use cases that arise. So it is important to know the advantages and disadvantages for each type.

> No one type of wallet fit all situation.

Another **senerio**, Hierarchical Deterministic wallets can be used: Imagine  a webserver is doing content monetization, Each time a user clicks on an ad on a webpage, they get paid. Then in this case they need one key per page. In other word each page is a transaction. The webserver can share the public key, just by deriving billion and billions of public keys from one initial public key.
And it would be possible to see public information about these transactions if you know the public key. 
But the private which is used to unlock sensitive data may never be revealed.


#### Private Keys

**Private Key**: A 256-bit random number between 1 and 2^256.


**Entropy**: Lack of order or predictability. The degree of disorder or randomness in the system.

##### What's the purpose of a private key?
A private key is a 256-bit random number between 1 and 2^256. 
It can be represented in different formats e.g. Hex (256bits in Hex is 32 bytes (nuber 0-9 & A-F)), WIF(Base58Check) and WIF-Compressed(Base58Check added suffix 0x01 before encoding)

##### What makes a private key secure?
A private key can be any number between 1 and 2^25 6 (1.1579208923731619542357098500869e+77). That number is huge and it gives us an incredible amount of possibilities. There are about 7 Quintillion grains of sand on planet Earth which is not even close to 2^256 possible private keys.

##### How to generate a private key?
The exact method you use doesn't matter. You can use a number generated randomly. 
To go about it programmatically you'll need to find a source of entropy. 

**Entropy**: Lack of order or predictability. It's the degree of disorder or randomness in the system.

This means we will have to find a vary secured random number generator. 

Don't try to create a random number generator on your own.  

> Creating a cryptographically secure random number generator is by no means an easy task. Even cyrptographic experts have a hard time creating ones that are unhackable. Instead use an industry established peer reviewed and vetted cryptographically secure random number generator.

Most programming language have a source of entropy or a library with a cryptographically secure number generator. e.g. Python has the random library and Java has the SecureRandom class.

There also bitcoin bitcoin address generating websites, that use their own underlaying system random number generators to produce a 256 bit random number.



##### Generating Private Keys
- Private keys generate the public keys and wallet addresses.
- Private keys allow us to interact with the blockchain. 

- Private keys need to be cryptographycally secure.

[Bitaddress.org](bitaddress.org) is an open source javascript client-side bitcoin wallet generator. It is an online service that allow one to generate random Bitcoin address and associated private key. 
To be secured when generating a private key, it best that you do this offline(This way all the activities you do is local to your computer and cannot be traced online.)

**Step 1**: Firstly save the [Bitaddress.org](bitaddress.org) to your computer so that you can access the page locally.

**Step 2**: Disconnect from the internet.

**Step 3**: Once your wallet has achieved full random.


The methods in which you can  generat private key:
1. Paper, pencil, coin, dice.
2. OS with source of entropy or library with cryptographic secure number generator.
3. Bitcoin address generating websites. 
4. Software wallets.


#### Get Your Own Wallet

Download **ELECTRUM** it is available for different OS both mobile and desktop.


#### Restoring Blockchain Identity



##### Ways to Restore a Wallet
If you ever need to restore your wallet, there are 2 ways to do it. You can do it with the wallet words you saved, or with the private keys from when you first created your wallet.


###### Use a Seed
One way to restore a wallet is using a seed. The ‘seed’ is the 12 words you were given when creating your wallet. If you can remember these words, you can use them to restore your wallet!
The benefit of restoring your identity using the seed is that it can be much simpler than using the private key.

The hardest part to any of this is safely storing or remembering this information for when you need it. Anybody else who discovers the list of words can access the wallet and any funds tied to it.

So be VERY careful!



###### Use a Private Key
Another way to restore a wallet is with a private key.

When restoring a wallet using a private key, there are 2 ways to do it. You can either import or sweep this key, and it’s useful to understand the difference.

**Import a Private Key**: 
When importing a private key, you'll have a source wallet and a destination wallet. The destination wallet is likely filled with a group of private keys already. To import the key you move the private key from the source wallet to the destination wallet.

This results in you getting access to both the source wallet AND the destination wallet.

The downside to importing is that the private key from the source wallet is essentially compromised since it was shared. If someone gets access to the private key from the source wallet, they can access those bitcoins.



**Sweep a Private Key**
When you sweep a private key, you add a private key from a source wallet into the destination wallet. All the bitcoins that belong to that private key are swept from the source wallet over into the destination wallet.

This is a little different than importing because it completely removes the funds from the original wallet. You’ll now only be using this new wallet to make future transactions.


#### Sign a Transaction

After creating a transaction there's a few things to consider.


- How do we know it's valid?
- Who owns the transaction?

We validate transactions and assign ownership using what's known as a digital signature. These signatures are an important piece underlying the security of the blockchain. In this video, we'll explore this idea further to discuss how signing a transaction works.


**Signature**: A digital signature establishes a proof of ownership of each transaction on the blockchain.

Transactions are secured with the help of signatures. Signture proof the identity of the person sending the bitcoin by signing the transaction by the owners personal identity before it is sent over the network.

The is signature is the wallet owners private key. This signature is used to perform a transaction (Just like signing a cheque in real life). 

Once **transaction is sent** it goes from the sender to the reciever **as a transaction message**. In Bitcoin the transaction message is sent as an unspent transaction output known as UTXO.

> Only this transaction outpust can be used as inputs to an accepted transaction.

Each of these UTXO's contains conditions, regarding the proof of ownership to transact with those funds. This proofs of ownership are derived from your private key.



#### Verify Message Signature 

##### Why sign and verify messages?
This process allows non-repudiation which means the person who sent the message had to be in possession of the private key in order to send the message, and as a result, anyone on the network can use this information to verify the transaction.

##### How it works
The sender generates a private key and a public key, using a wallet address.
1. The sender then signs the message with the signature, and sends their public key, the signature and the message to the network.
2. The receiving node then checks using the verification algorithm that the message has been signed by the sender, which can only be done by the holder of the private key to the public key that is sent.
3. Signing a transaction helps to prove ownership of these transactions and to prove that transaction and blockchain identity were not tampered with.


##### Step 1: Generate a Private Key and a Public Key using a Wallet addresse 
- There are different ways to generate a private key and a wallet address.
For this course, we already demonstrated using Electrum which helps us generate private keys and wallet Addresses 


##### Step 2: Sign a Message
**To sign a message: **
The **private key and message are passed through a signing algorithm which produces a unique digital signature**.
If the private key or the wallet address or the signature or the message has been were altered, a different digital signature would be produced and hence the authentication will fail.


** A digital signature ensures: **
Authentication - A valid digital signature proves to the recipient, that the message was sent by a known sender.
Integrity - The recipient and sender can prove the message was not altered in transmission.
Non-repudiation - The Sender cannot deny sending the message.
The bitcoinjs-message library contains a function `sign()` that takes in a private key and message and returns a signature.




##### Step 3: Verify a Message
Once a Message has been signed, you can again use the `bitcoinjs-message` library to verify the user who claims to have signed it.

This library has an existing Verification Algorithm called `verify()``, that takes in a Wallet Address, the Signature, and a Message, and verifies whether or not the given Wallet Address was used to sign the given Transaction (or Message).


An example to demonstrate the verification process
```js 
// Setup libraries

const bitcoinMessage = require('bitcoinjs-message')

// Verify a Bitcoin message
const address = '1HZwkjkeaoZfTSaJxDw6aKkxp45agDiEzN'

const signature = 'HJLQlDWLyb1Ef8bQKEISzFbDAKctIlaqOpGbrk3YVtRsjmC61lpE5ErkPRUFtDKtx98vHFGUWlFhsh3DiW6N0rE'

const message = 'This is an example of a signed message.'

console.log(bitcoinMessage.verify(message,address,signature));
```




## 3. Blockchain Data


### Lesson 1: Blockchain Data Overview

#### Blockchain Vs Traditional 
A database is a collection of information organised to allow easier access and management.  
A blockchain is a type of database. How do you know when to use the blockchain or a traditional database. 

##### Traditional Database Characteristics 

|         |    Traditional Database   |
| :---    |    :---                   |
| Network | Centralised |
| Function | Create, Read, Update Delete (CRUD) |
| Mutability| Mutable | 
| Authorization| Centralised | 
| Transparency | Low | 


- Centralised Network: 
  - Remains with authority 
  - Requires Authentication 

- Functions
  - Create 
  - Read 
  - Delete 
  - Update 
  - 
- Mutability: Data in a traditional database is immutable
- 
- Authorization: The Central Authority manages th data.

- Transparency: The central authority determines what functions can be done on the network. 


##### Blockchain Characteristics 
Blockchains are a Data Storage System.

|         | Traditional Database  | Blockchain|

| :---    | :---  | :--- |

| Network | Centralised | Distributed |
| Function | CRUD | Read, Append & Validate|
| Mutability| Mutable | Immutable |
| Authorization| Centralised | Distributed |
| Transparency | Low | High |

Blockchains are supported by a distributed network. 

Blockchain is decentralised: 
- pro: No single entity can regulate the data on the database.
- con: No central authority to help determine whoch information is accurate. 


Functions: 
- Read 
- Append 
- Validate data 
Blockchain do not allow people to delete data, rather that deleting or overiding data blockchains create a new record. 

Immutability: Thr blockchain is immutable. 
- Pro: Permanent historical storage. 
- con: Storage space 


Authorization: 
- Pro: Extremely secured and not controlled by any single entity. 
- con: Difficult to resolve disputes. 


Transparency: 
- pro: Everyone can access.
- con: No permission control 



#### Do you need a blockchain

Question to ask your self 


|  | Yes | No | 
| :--- |  :--- |  :--- | 
| Do you need a database? | | | 
| Does it require shared write access? | | | 
| Will you need to create the trust between users| | | 
| Can you operate without trust 3rd parties| | |
| Can you operate without control permission| | | 

If your response is yes  to most of the questions, then a blockchain might me a good fit. 


once you decide that a blockchain is the right solution, it's time to decide which type of blockchain the most effective. 
There are 3 types of blockchain **public**, **private** and **hybrid**.


#### Blockchain Types 
1. Public Blockchain 
2. Private Blockchain 
3. Hybrid Blockchain 


**Public Blockchain**: On a public watch everything is open for the entire network anyone can join and get access to add verify transactions. 
**Bitcoin** is in example of a public watching a private match in his busy really opposite of a public blockchain.

**Private Blockcchain**: it's the opposite of a public blockchain. Access is restricted to some people, rather than allowing anyone to join, permission is assigned to specific users. 

Just like the internet vs intranet.

**Hybrid Blockchain**: Is a mix of both private and public blockchain. 
Like company, that wants to keep some information private and some othe information public.


They all functions the same way, but they differ by access/restrictions.


To be certain about Which one to use:
- Will transactions e public?  Public Blockchain 
- Will other companies need access to your data? Private Blockchain 
- Should some information be public while other information is restricted? Hybrid Blockchain 



#### P2P Network vs Client-Server Model 
A client server model is an application structure yhat breaks up, tasks between service providers (Servers) and service requester (client). 
 
The server is a centralised resource that contains all the information the computer wants to access. 

Client Server Model 
- Client makes requests 
- Server responds to client (web servers serve web files and a file server serve computer files)



Peer-to-peer Network: 
Is a network of computers that share access to gile with eachother.  
In a Peer-to-peer network every node is both a server and a client. 
The peer-to-peer model allows us to a decentralised system. 



#### Practice Block Data 
There are a few libraries you can use to explore the block data in Bitcoin. For this exercise, we are going to use the library provided by BlockExplorer **blockexplorer**.js.

This library allows to do some important operations through the network like:
- blockexplorer.block(hash) - Get block info by hash
- blockexplorer.rawBlock(hash) - Get raw block info by hash
- blockexplorer.blockIndex(height) - Get block hash by height


"Install 
```sh
npm i blockexplorer --save
```

example 
```js
// require the module
const be = require('blockexplorer')
 
// get the genesis block hash
be.blockIndex(0)
  .then((result) => {
    console.log(result)
  })
  .catch((err) => {
    throw err
  })
```

API
- blockexplorer.block(hash)
Get block info by hash
Returns Promise 

- blockexplorer.rawBlock(hash)
Get raw block info by hash
Returns Promise 

- blockexplorer.blockIndex(height)
Get block hash by height
Returns Promise 

- blockexplorer.tx(txid)
Get transaction by txid
Returns Promise

- blockexplorer.rawTx(txid)
Get raw transaction by txid
Returns Promise

- blockexplorer.addrValidate(address)
Validate address
Returns Promise 

- blockexplorer.addr(address, [options])
Get address info
```js 
// Default options
{
  noTxList: false,
  noCache: false
}
``` 

Pass an Array as first parameter to get info on multiple addresses
Returns Promise 

- blockexplorer.balance(address)
Get address balance
Returns a Promise 

- blockexplorer.totalReceived(address)
Get address received funds
Returns a Promise 

- blockexplorer.totalSent(address)
Get address sent funds
Returns a Promise

- blockexplorer.unconfirmedBalance(address)
Get address unconfirmed balance
Returns a Promise

- blockexplorer.utxo(address, [options])
Get address unspent outputs
```js 
// Default options
{
  noCache: false
}
```
Pass an Array as first parameter to get info on multiple addresses
Returns a Promise

- blockexplorer.txsBlock(hash)
Get transactions by hash
Returns a Promise

- blockexplorer.txsAddress(address, [options])
Get transactions by address
```js
// Default options
{
  from: '',
  to: ''
} 
``` 

Pass an Array as first parameter to get info on multiple addresses
Returns a Promise 

- blockexplorer.txSend(rawtx)
Broadcast signed trasaction in hex format rawtx
Returns a Promise 

- blockexplorer.getInfo()
Get blockchain info
Returns a Promise 

- blockexplorer.getBlockCount()
Get block count
Returns a Promise 

- blockexplorer.getDifficulty()
Get difficulty
Returns a Promise 

- blockexplorer.getBestBlockHash()
Get best block hash
Returns a Promise 

- blockexplorer.getLastBlockHash()
Get last block hash
Returns a Promise 

- blockexplorer.sync()
Get historic blockchain data sync status
Returns a Promise

- blockexplorer.peer()
Get live network p2p data sync status
Returns a Promise  

- blockexplorer.estimateFee([nbBlocks = 2])
Get fee estimate
Returns a Promise




#### Explore Bitcoin's Codebase

Bitcoin's Codebase
Now that we've seen the data that exists in a blockchain, it's helpful to understand how these ideas are built and managed. Luckily, many blockchains are open source, and in particular Bitcoin has an enormous open source codebase that we can use to study and understand these blockchain concepts. 

[Bitcoin](https://github.com/bitcoin/bitcoin) 



#### BIPs and Forks 
##### Bitcoin Improvement Proposals
we'll look at what a Bitcoin Improvement Proposal is and how it help make decisions about the codebase. 

BIPs are documents used to issue changes to the Bitcoin core client.

BIP39 - is where deterministic wallet were introduced. 

BIPs are written by community members who believe they can improve the bitcoin protocol. The proposal is sent out to tr network and published publicly. 
The proposal then goes through a voting process done by the miners in the network. If the proposal gets a majority vote from the miners, it will be Implemented and if other it won't. 

Depending on how significant a change is on a network, it can be really difficult to get everyone on the same side. In a case where there is a 50/50 vote, the network will have to split and this split is called a **fork**.


##### Hardforks
There are different types of forks that can happen based on how a Bitcoin Improvement Proposal is implemented. The different types of forks are hardforks, softforks, and source code forks.

These are all implemented in a similar way, but the outcome can be drastically different depending on which type of fork it is. In the next video, we'll look specifically at a hardfork.

|  | Hardfork | Softfork | Source Code Fork | 
| :--- | :--- | :--- | :--- | 
| Change | Large | small | Small or Large |
| Copies Original codebase | Yes | Yes | Yes |
| Backward Compatibility | No | Yes | No |
| Split | Permanent | Temporary | Permanent | 
| Example | Bitcash | Segwit | LiteCoin |



Hardfork: A hardfork is a large change to the that conflict with existing protocol, leading to a completely new software. Once a hardfork is made, it creates an entirely new network existing users will need to choose whether they'd like to stay or switch.

In hardfork software developers create an exact copy of the protocol this is possible only if the codebase of the blockchain is open source. 
Once the protocol is copied, they write their new code into the software. 
Next they next to specify when they will do this. This is done by specifying a block number e.g. at block 215, at this point some nodes will continue with the original version while others will switch to the hardfork and only add blocks to that chain. 

Even though the Hardfork and the original version are not compatible, they will have the same shared history i.e. All the transactions that has happened before the fork are valid on both chains.
If you switched to the new chain you will still retain your coins in the same value as of the original chain.




##### Softforks 
Softforks are a small change to the blockchain protocol. In softforks the changes made to the software are compatible with the original version. In a soft fork there is no permanent split in the chain. There may be a temporary split which is to allow time for the changes to propagate through the network. Once every one has upgraded to the updated protocol, the updated version of the network will be the only one that exists.  

An Example is **Segwit**, known as **Segregated Witness** . Segwit is a softfork of bitcoin that is meant to increase block size limit in a block. 
It allows a block to hold more transactions by removing signature data from a transaction. 
If your wallet doesn't implement segwit, you will still receive transactions from wallets that do, but you won't be able to validate the transaction.  



##### Source Code Forks 
is the term used to when one copies an existing codebase to a new project with no connection to the original blockchain.  





### Bitcoin Core Testnet 
#### Bitcoin Core Overview 
Bitcoin: Network of bitcoin users creating and validating transactions

Bitcoin Core: Implementation of bitcoin that encompasses all of the software behind bitcoin. aka Bitcoin-QT / Satoshi Client.

Debug Console: Tool that allows you to interact with data on the bitcoin blockchain


FEATURES OF BITCOIN CORE:
- Connect to network (Transactions verification engine allows you to verify transactions.)
- Validate Blockchain 
- Wallet (Send and Receive Bitcoin)


#### Bitcoin Core - Networks 
- Bitcoin Mainnet: Primary Network where live transactions take place
- Bitcoin Testnet: Alternative Bitcoin blockchain that provides a test environment for applications. Testnet allows you to develop application in a sandbox environment without spending real bitcoin. It allows you to interact with peers on the network that totally separate from the mainnet.
Testnet still operates as a network, things like creating new blocks and validating transactions still have to be done in the network. This can really slow down testing time, if one must wait for a block or transaction to complete it's life cycle.
To help address some ofbhis concerns and speed up test, Regnet was created.

- Bitcoin Regnet (Regression Test Mode): Alternative test network for testing bitcoin applications. 
Like testnet you don't spend real Bitcoins. On a regnet, you no longer have a network of peers to work with, you can instantaneously create new blocks and have control over the environment you are testing it.


| - | Mainet | Testnet | Regnet | 
| :--- | :--- | :--- | :--- | 
| Purpose | Live | Testing | Testing |
| Coins | Value | No value | No value |
| Peers | Yes | Yes | No |



#### Mainnet vs Testnet 
| - | Mainet | Testnet |
| :--- | :--- | :--- |
| Purpose | Production | Testing |
| Environment | Public | Public |
| Peers | Entire Network | Testers |
| Size | -200GB | -40GB |
| Block Creation | 10Mins | 10Mins |
| Value | Full Value | No Value |
| Public Key Prefix | 1 | m or n |
| Block Difficulty | Full | Half of Mainnet |





#### Testnet vs Mainnet 
| - | Testnet | Regnet |
| :--- | :--- | :--- |
| Purpose | Testing | Testing |
| Environment | Public | Private |
| Peers | Testers | None |
| Size | -40GB | -0GB |
| Block Creation | 10Mins | Instantly |
| Value | No Value | No Value |
| Public Key Prefix | m or n | m or n |
| Block Difficulty | Half of Mainnet | None |




#### Data Warnings and Bitcoin.config Setup 
Access Networks
- Access testnet: testnet = 1 in bitcoin.conf file
- Access regnet: regtest = 1 in bitcoin.conf file


> Visit [live.blockcypher.com](https://live.blockcypher.com ), a block explorer that allows one to view transactions on Bitcoin testnet. 





### Bitcoin Debug Console 
#### Debugging Console 
Bitcoin debug console  command categories:

== Blockchain ==
== Control ==
== Generating ==
== Mining ==
== Network ==
== Rawtransactions ==
== Util ==
== Wallet ==
== Zmq ==


You can always use the `help` command to get more information on a particular command.
```sh 
help getblockchaininfo
``` 

#### Blockchain Commands  

- getblockchaininfo 
- getblockcount 
- verifychain 

**getblockchaininfo** - returns various state information about the blockchain processing. It can also show hardforks and softforks and their bip numbers, version rejection status.

**getblockcount** - Returns the number of blocks in the blockchain. 

**verifychain** - Verifies tr blockchain's database. 
i.e the chain is valid. 


#### Hash Command 
- getblockhash 
- getnetworkhashps 
- getbestblockhas 


**getblockhash** - 
Returns hash of a block at the block number(block height) provided. 
```
getblockhash 279
```
returns the 279th block in the blockchain.


**getnetworkhashps** - Returns an estimated network hashes per second based on specified number of recent blocks. 
```
getnetworkhashps <number of last X(e.g. 120) blocks>
```

**getbestblockhash** - Returns the hash of the best block (i.e. Most recent block that you have synced )
```
getbestblockhash 
```


#### Block Commands 
- getblock 
- getblockheader 
- generatetoaddress


**getblock** - Returns details of a blocks information (If a block hash is provided).
``` 
#getblock a384bc9a0f....  (verbosity)
#getblock a384bc9a0f....  2
```
If verbosity is 0, returns a string that is serialised, hex-encoded data for block 'hash'.

If verbosity is 1, returns an Object with information about block 'hash' 

If verbosity is 2, returns object with information about block 'hash' and **Information about each transaction**.


**getblockheader** - 
Returns information about the block header (If a block hash is provided).
``` 
getblockheader a384bc9a0f.... 
```

**generatetoaddress** - Immediately mines the number of blocks to an address in the wallet. 
This command is useful on the regnet. It's a way to create blocks that you can interact with on the blockchain.

```
# generatetoaddress (number) (wallet Address)
generatetoaddress 101 (generates 101 blocks) a27b0f.....
```



#### Wallet Command 
- getwalletinfo 
- listwallet 
- walletpassphrasechange 

**getwalletinfo** - returns an object containing various information about a wallet'e state. 


**listwallet** - Returns a list of currently loaded wallets.

**walletpassphrasechange** - changes the wallet passphrase from an old passphrase to a new passphrase.
``` 
walletpassphrasechange "oldpassphrase" "newpassphrase"
```


#### Mempool Command 
- getmempoolinfo 
- getrawmempool 
- getmempoolentry 


**getmempoolinfo** - Returns details on the state of the transaction memory pool.

**getrawmempool** - Returns all transaction ids in the memory pool.

**getmempoolentry** - Returns mempool data for a given transaction in the mempool.
``` 
getmempoolentry 'hash'
```


#### Transaction Commands 
- getchaintxstats
- getrawtransaction 
- listtransactions


**getchaintxstats** - Compute statistics about the total number and rate of transactions in the chain

**getrawtransaction**: Returns raw transaction data (@ mempool) 
```
getrawtransaction 'hash @ mempool'
``` 

**listtransactions**: Returns a list of transactions for a given account (default is your account)




#### Signature Commands
- signrawtransaction 
- signmessage



**signrawtransaction** - Sign inputs for a raw transaction.

**signmessage** - Sign message with the private key of an address



#### Network Commands 
- getnetworkinfo 
- getpeerinfo 
- getconnectioncount

**getnetworkinfo** - Returns information about the state of the peer-to-peer network.

**getpeerinfo** - Returns data about each connection network node.

**getconnectioncount** - Returns the number of connections to other nodes.


#### Mining Commands 
- getmininginfo
- getblocktemplate 
- prioritisetransaction

**getmininginfo** - Returns an object that contains mining-related information.

**getblocktemplate** - Returns data needed to construct a block.

**prioritisetransaction** - Accepts the transaction into mined blocks at a higher or lower priority.



#### Other Command 
**getnewaddress** - Creates a new address in your wallet.
```
getnewaddress <addressLabel: optional>
``` 

**listunspent** shows all the unspent confirmed inputs in your wallet.
```
listunspent
``` 


**gettxout** - View details about Specific UTXO
```
gettxout <txid> <n>
``` 
Arguments:
- "txid" (string, required) The transaction id
- "n" (numeric, required) vout number 

n reps the vout number of the transaction. A transaction can have multiple txoutput, n is the index of that output whih begins/starts from 1.


**createrawtransaction** - 
```
createrawtransaction '[{"txid":"TXID","vout": VOUT}]’’{“to_address”:amount1, “from_address”:amount2}’
``` 


Build Out Command 

txid: e787a27bda32c8b54ee501be46d2cfcd47c1566c8ef6ee339bdb7cd5c82b701c

vout: 0

to_address: 2NFK8YHKT6hPPTDKTPP3c5bx7oPGrYhzj2y

from_address: 2Mzxx8wGAmQQyCCrb2vXP4yxaYY9s9nepfy

amount1: .030 BTC being sent to "to_address"

amount2: 0.0195 BTC being sent back to the "from_address"

Execute Commands 
```
createrawtransaction '[{"txid": "e787a27bda32c8b54ee501be46d2cfcd47c1566c8ef6ee339bdb7cd5c82b701c", "vout":0}]' '{"2NFK8YHKT6hPPTDKTPP3c5bx7oPGrYhzj2y":0.030, "2Mzxx8wGAmQQyCCrb2vXP4yxaYY9s9nepfy":0.0195}'
```


Result (hex string)
```
02000000011c702bc8d57cdb9b33eef68e6c56c147cdcfd246be01e54eb5c832da7ba287e70000000000ffffffff02c0c62d000000000017a914f20fe211102535e3c37bb0e659099387ddc035b58730c11d000000000017a91454ad1e8953876c90d3fc15798c687835ab3d3aee8700000000
``` 


To confirm that everything processed correctly, we can use the by `decoderawtransaction` command.

> NB: The transaction is not signed 


**decoderawtransaction** - decode a raw transaction into JSON.

Command Parameters:
decoderawtransaction "hexstring"

Arguments:
1. "hexstring"      (string, required) The transaction hex string
Execute command


**signrawtransactionwithwallet** - is used for  Signing a Raw Transaction

Explanation
You may have noticed that in the output of decodetransaction, the scriptSig field is empty:

``` 
signrawtransactionwithwallet "hexstring" 
```


Arguments:

- "hexstring" (string, required) The transaction hex string from the "createrawtransaction" step

Execute Command
Note: If your wallet is encrypted, you will be asked to unlock it before you can sign a transaction.

```
signrawtransactionwithwallet 02000000011c702bc8d57cdb9b33eef68e6c56c147cdcfd246be01e54eb5c832da7ba287e70000000000ffffffff02c0c62d000000000017a914f20fe211102535e3c37bb0e659099387ddc035b58760e316000000000017a91454ad1e8953876c90d3fc15798c687835ab3d3aee8700000000 
``` 

Note: If you have a version of Bitcoin core that is older than 0.17, you might have to use command.

Result
{
"hex": "020000000001011c702bc8d57cdb9b33eef68e6c56c147cdcfd246be01e54eb5c832da7ba287e70000000017160014c794ee65db89222f408dfe1728d214f2496d7a72ffffffff02c0c62d000000000017a914f20fe211102535e3c37bb0e659099387ddc035b58730c11d000000000017a91454ad1e8953876c90d3fc15798c687835ab3d3aee8702483045022100dbf89096427b02c27a799a1d42fca9066bb1706d6874e7255a89084d7c39054c02203c792d0590e068d932966a3d5a84a099492d6975d8fe76b0ca191e20d2a76e800121039c508c50597896b7d67efadf03864d3cee14941253fea08a7abc596479036f8000000000",
  "complete": true
}




**sendrawtransaction** - 
```
sendrawtransaction "hexstring" ( allowhighfees )
``` 

Arguments:
1. "hexstring" (string, required) The hex string of the raw transaction)
2. allowhighfees (boolean, optional, default=false) Allow high fees
Result:

"hex"             (string) The transaction hash in hex
Execute Command
sendrawtransaction 020000000001011c702bc8d57cdb9b33eef68e6c56c147cdcfd246be01e54eb5c832da7ba287e70000000017160014c794ee65db89222f408dfe1728d214f2496d7a72ffffffff02c0c62d000000000017a914f20fe211102535e3c37bb0e659099387ddc035b58730c11d000000000017a91454ad1e8953876c90d3fc15798c687835ab3d3aee8702483045022100dbf89096427b02c27a799a1d42fca9066bb1706d6874e7255a89084d7c39054c02203c792d0590e068d932966a3d5a84a099492d6975d8fe76b0ca191e20d2a76e800121039c508c50597896b7d67efadf03864d3cee14941253fea08a7abc596479036f8000000000

It returns the transaction id. 

To inspect the transaction
``` 
gettransaction <Txid>
```







### Blockchain Data 
By the End of This Lesson…
You will be able to…

- Recognize the data structure of blocks and transactions.
- Recognize the purpose of Bitcoin Script opcodes that are commonly used in the input and output parts of a transaction process.
- Explore the limitations and best practices of embedding data in blockchain transactions.


#### Block Data Model Recap
- **Block Header** -
Previous Block’s Hash - The hash value for the block that comes directly before a given block in the chain. This is what links blocks in the blockchain together
Time - The time the block was created is also held in the header 

- **Merkle Root** - The merkle root is a hash that represents every transaction included inside the block. To get the merkle root, pairs of transactions within a block are repeatedly hashed together. Each pair results in a single hash. Then the hash of 2 pairs of transactions are again hashed together, over and over again until you are left with a single hash value. Given that final hash value, known as the merkle root, you can now use the hash to search the original transactions or hash values that created them. This searching allows you to find the original transactions that made up the block when starting from this single hash value.

- ** Nonce** - A nonce (stands for “number only used once") is a number used in bitcoin mining. The blockchain miners are solving for the nonce what when added to a hashed block, and those 2 values are rehashed, will solve the mining puzzle.

- The body of a block contains transactions.


#### Transactions - Inputs and Outputs 
**Transaction** is a data structure that encodes a transfer of value from a source of funds called an “input” to a destination called an “output”.


**Inputs** are unspent outputs from another transaction. All input refer to an output. 

When a user receives bitcoin that amount is recorded in the blockchain as Unspent Transaction Output (UTxO) if a user receives many Bitcoin from people, each of these transactions have their UTxO. 

In Bitcoin UTxOs are attached to users, there js no such thing as q stored balance for an account or Bitcoin address. 


#### Transaction Data Models 
On the blockchain transactions are stored in a double hash form. i.e Transaction data is put through SHA256 Twice. 

This is a Raw Transaction: 
0100000001f3f6a909f8521adb57d898d2985834e632374e770fd9e2b98656f1bf1fdfd427010000006b48304502203a776322ebf8eb8b58cc6ced4f2574f4c73aa664edce0b0022690f2f6f47c521022100b82353305988cb0ebd443089a173ceec93fe4dbfe98d74419ecc84a6a698e31d012103c5c1bc61f60ce3d6223a63cedbece03b12ef9f0068f2f3c4a7e7f06c523c3664ffffffff0260e31600000000001976a914977ae6e32349b99b72196cb62b5ef37329ed81b488ac063d1000000000001976a914f76bc4190f3d8e2315e5c11c59cfc8be9df747e388ac00000000


Transaction in the bitcoin blockchain are stored in a double-hashed form:

SHA256(SHA256(01000…)) = b138360800cdc72248c3ca8dfd06de85913d1aac7f41b4fa54eb1f5a4a379081


1. **Bitcoin Version Number**: 01000000

2. **Input Count**: 01

3. **Input Info**: ( 
  - Where input is coming from? 
  - Checks if input can be used )
f3f6a909f8521adb57d898d2985834e632374e770fd9e2b98656f1bf1fdfd427010000006b48304502203a776322ebf8eb8b58cc6ced4f2574f4c73aa664edce0b0022690f2f6f47c521022100b82353305988cb0ebd443089a173ceec93fe4dbfe98d74419ecc84a6a698e31d012103c5c1bc61f60ce3d6223a63cedbece03b12ef9f0068f2f3c4a7e7f06c523c3664ffffffff

4. **Output Count**: 02

5. **Output Info**: (
  - How much BTC is outputted? 
  - Conditions for future spending )
60e31600000000001976a914977ae6e32349b99b72196cb62b5ef37329ed81b488ac063d1000000000001976a914f76bc4190f3d8e2315e5c11c59cfc8be9df747e388ac

6. Locktime: 00000000
  - Earliest time a Tx can be added to the blockchain. 
  - If <500 million, it is read as blockheight 
  - If >500 million, it is read as a Unix Timestamp)

Lock time is usually 0 i.e confirm as soon as possible.



A Transaction input contains an Unlocking script, while a Tx output contains a Locking Script.
The script is a computer program that is executed if the transaction is Valid. 

If thr transaction is valid it means the unlocking script has the requirements that unlocks the locking Script.

Scripts allow us to express complex conditions.
Just like in smart contract.
Smart contract is a series of conditions that most be met for an action to occur and the parameters that meets those conditions. 


| Block Header | 
| :---  | 
| Previous Block Hash | 
| Time (Time of creation) | 
| Merkel Root |
| Nonce | 



| Transaction | 
| :---  | 
| Version | 
| Input Count | 
| Input Info - Unlocking Script |
| Output Count | 
| Output Info - Locking Scripts |
| Locktime | 



#### Bitcoin Scripts 
**Script**- a script is a list of instructions recorded in each transaction that when executed determines if the transaction is valid and the Bitcoin can be spent. 
Bitcoin Scripts are written in a scripting language called **Scripts**.

**Scripting Language**: is a simple lightweight Language designed to be limited in scope and executable ona range of hardware. 

##### Script 
Bitcoin Script 
- Is a stack-based language. 
- (The stack) Store Numbers (Data Constants)
- Use Opcodes (to interact with information in the stack)
  - push (Add
  - Pop (Remove) 
  - Etc.

- Executes from left to right 


##### Lock Scripts and Unlocking Scripts 
The locking and unlocking script work together Like a puzzle. 
> For a transaction to be Valid the Unlocking script will solve the locking script. 

The Locking script is like a puzzle that specifies the conditions that must be met before a Bitcoin can be spent. 

The Unlocking script contains the correct solution that solves the puzzle and evaluates the locking script to true. 

``` Script
<sig> <pubkey> OP_DUP OP_HASH160 <pubKeyHash> OP_EQUALVERIFY OP_CHECKSIG
```

`<sig> <pubkey>` - Unlocking Script 

`OP_DUP OP_HASH160 <pubKeyHash> OP_EQUALVERIFY OP_CHECKSIG` - locking Script


The Locking script of a transaction will interact with the unlocking script of a future transaction.

**Locking Script** - Places a lock on an output by specifing the conditions that must me met inorder to spend the output in the future.
e.g. Assuming an we have an output that is only payable to whomever can present a signature from the  key corresponding to sb's public address.

> The hash locking script is stored in a variable `scriptPubKey`

The Unlocking script is the solution that will solve the puzzle, it satisfies the condition of the locking script and allows the output to be spent. 
A common way it is implemented is that it contains a digital signature product by the users wallet from their private key that will unlock the locking script.

> The hash unlocking script is stored in a variable `scriptSig` because it's usually contains a signature.  The term unlocking script is used because not all unlocking script must be a signature. 


- Version - All transactions include information about the Bitcoin Version number so we know which rules this transaction follows.

- Input Count - Which is how many inputs were used for this transaction

##### Data stored in Input information:
- Previous output hash - All inputs reference back to an output (UTXO). This points back to the transaction containing the UTXO that will be spend in this input. The hash value of this UTXO is saved in a reverse ordered here.
- Previous output index - The transaction may have more than one UTXO which are referenced by their index number. The first index is 0.
- Unlocking Script Size - This is the size of the Unlocking Script in bytes.
- Unlocking Script - This is the hash of the Unlocking Script that fulfills the conditions of the UTXO Locking Script.
- Sequence Number - This s a deprecated feature of bitcoin Currently set to ffffffff by default.
- Output Count - which tells us how many outputs were produced from this transaction.


##### Data stored in Output Information:
- Amount - The amount of Bitcoin outputted in Satoshis (the smallest bitcoin unit). 10^8 Satoshis = 1 Bitcoin.
- Locking Script Size - This is the size of the Locking Script in bytes.
- Locking Script - This is the hash of the Locking Script that specifies the conditions that must be met to spend this output.
Locktime - The locktime field indicates the earliest time or the earliest block a transaction can be added to the blockchain.
If the locktime is non-zero and less than 500 million, it is interpreted as a block height and miners have to wait until that block height is reached before attempting to add it to a block. If the locktime is above 500 million, it is read as a unix timestamp which means the number of seconds since the date January 1st 1970. It is usually 0 which means confirm as soon as possible.



### Script Opcodes 
Script is a stack based language. 

**OP_ADD** - Pops two Items on top of the stack add them and push the result back unto the stack.

**OP_EQUAL** - Is a conditional operator, that pops two items off the stack and compares whether they are equal and returns true or false unto the stack. 

EXAMPLE: 
```Script 
2 6 OP_ADD 8 OP_EQUAL
``` 

Remember in script code is read from left to right, 
1. 2 is pushed into the stack 
2. 6 is pushed into the stack 
3. OP_ADD: 6 & 2 popped of the stack and added together. The result (8) is pushed back to the stack. 
4. 8 is pushed into the stack 
5. OP_EQUAL: 8 and 8 are pushed off the stack and compared with eachother and the result (True) is pushed back into the stack 


Using the example above: 
When compared to locking and unlocking Script, here is a simplified case. 
2 - is the Unlocking script 
`6 OP_ADD 8 OP_EQUAL` - is the locking script. 

Later on, you will see scripts that uses **signatures and public keys** to unlock a locking script.

``` Script
<sig> <pubkey> OP_DUP OP_HASH160 <pubKeyHash> OP_EQUALVERIFY OP_CHECKSIG
```

**OP_DUP** - Duplicates the top stack item. 
**OP_CHECKSIG** - Checks the signature for the top two stack items.

For more Script opcodes visit [List of Bitcoin opcodes](https://en.bitcoin.it/wiki/Script). 



#### Standard Script Notation
Let’s discuss standard script notation using this example,
`<sig><pubKey> OP_CHECKMULTISIG`

- Bracketed values are data to be pushed to the stack.
For example, <sig>.

- Non-bracketed words are opcodes.
For example, OP_CHECKMULTISIG

- Sometimes you may see the OP prefix omitted.
For example,
`<sig><pubKey> OP_CHECKMULTISIG` may be abbreviated to `<sig><pubKey> CHECKMULTISIG`


An example 
```Script
OP_DUP OP_HASH160 <pubKeyHash> OP_EQUALVERIFY OP_CHECKMULTISIG
```  

OR 

```Script
DUP HASH160 <pubKeyHash> EQUALVERIFY CHECKMULTISIG
```  



### Attributes of Script 
#### Turing Completeness 
One major attribute of script is that it is not turning complete.
i.e. 
- No loops or flow control 
- Completely deterministic
- Provides simplicity and security


#### Stateless Verification  
All information needed to execute the script is within the script. i.e. 
- No state is saved prior to or after the script executes 
- Script is self-contained
- Provides predictability no matter where script is executed




### Private Blockchains 
#### Public vs Private Blockchain 
| - | Mainet | Testnet |
| :--- | :--- | :--- |
| Permissions | Permissionless | Permissioned |
| Scalability of transactions| More Difficult | Simpler |
| Vulnerability | Less Vulnerable | More Vulnerable |
| Compliance (governance) | More Difficult | Simpler |



#### Public and Private Blockchain Interaction
At first it seems impossible to communicate with a permissioned (Private Blockchain) and a permissionless system (Public Blockchain). 

If our private blockchain need to log bitcoin or a public blockchain transaction activities, our logger services will monitor new blocks added to the blockchain. The transactions within the block will be logged in our blockchain, utilizing transaction hash as a link between public and private Blockchains. 
To store a private blockchain data into our public blockchain we wil need to reference the options available to us by referencing the documentation. In this case we will use Bitcoin Core. 

`OP_RETURN` - Allows us to store hash value less than 40bytes. 
Stores up to 40 bytes 

A hash e.g. SHA 256 is 256 bits long 
- SHA256 Hash = 256 bits 

To reduce the size under 40 bytes we can encode the data to binary to 8 bits per byte.
- Binary encoding = 8 bits per byte 

- 256 bits / 8 bits = 32 bytes 

`OP_RETURN` allow us to store a hash value that references our private blockchain datasets. 

Therefore Hashes allow us to link or connect data between blockchains.  


Connecting data between blockchain is also known as **cross chain functionality**

**Cross Chain Functionality** - Allows a series of protocols that work in harmony to deliver decentralised applications.  

We are entering an age where new projects are focusing on ways to do the cross chain protocol that tackles the task of Interacting between chains.
A project example is polkadot, polkadot is positioning itself as an intermediary between blockchains. Polkadot uses a multi chain approach with a Blockchain called **Relay** which coordinates transactions and concensus delivery between blockchains. Polkadot also uses another blockchain called parachains which gathers and processes transactions. Binding both solutions together creating a bridge between blockchains with their own concensus.





### Building Your Own Private Blockchains 










## 4. Blockchain Web Services 


### Lesson 1: Blockchain Basics


#### Concept 01: Lesson Introduction







## 5. Identity and Smart Contracts


### Lesson 1: Blockchain Basics


#### Concept 01: Lesson Introduction



## Note

### Ganache 

#### How to install Ganache Cli

```
npm install -g ganache-cli
```

Once installed, run the following command in your terminal to start ganache.

```
ganache-cli
```


### Transactions

#### Type of Transactions

1. Message calls 
2. Contract Creation


Both Message Calls and Contract Creation can be initiated by an (EOA) Externally Owned Account.

#### Transaction Fields

```js
txnCount = web3.eth.getTransactionCount(web3.eth.acccounts[0])

var rawTxn = {
  nonce: web3.toHex(txnCount),
  gasPrice: web3.toHex(100000000000),
  gasLimit: web3.toHex(140000),
  to: '0x633...18b',
  value: web3.toHex(0),
  data: '0xcc...000'
}
```

#### Creating a Transaction

Using similar fields to the transaction shown above, we can construct transactions for ourselves. Using the pre-loaded test accounts and free Ether in our local blockchain, we'll be able to create transactions however we like.

Before making the transaction, ensure you have installed both dependencies to your npm initialization.

```js
npm install ethereumjs-tx --save
npm install web3 --save
```


```js
/*##########################
##     CONFIGURATION      ##
##########################*/

//  -- Step 1: Set up the appropriate configuration
var {Web3} = require("web3")
var EthereumTransaction = require("ethereumjs-tx")
var web3 = new Web3('HTTP://127.0.0.1:7545')

// -- Step 2: Set the sending and receiving addresses for the transaction.
var sendingAddress = 'ADDRESS FROM GANACHE GOES HERE'
var receivingAddress = 'ANOTHER ADDRESS FROM GANACHE GOES HERE'

// -- Step 3: Check the balances of each address
web3.eth.getBalance(sendingAddress).then(console.log)
web3.eth.getBalance(receivingAddress).then(console.log)

/*##########################
##  CREATE A TRANSACTION  ##
##########################*/

// -- Step 4: Set up the transaction using the transaction variables as shown
var rawTransaction = {
    nonce: 0,
    to: receivingAddress,
    gasPrice: 20000000,
    gasLimit: 30000,
    value: 1,
    data: ""
}

// -- Step 5: View the raw transaction
rawTransaction

// -- Step 6: Check the new account balances (they should be the same)
web3.eth.getBalance(sendingAddress).then(console.log)
web3.eth.getBalance(receivingAddress).then(console.log)

// Note: They haven't changed because they need to be signed...

/*##########################
##  Sign the Transaction  ##
##########################*/

// -- Step 7: Sign the transaction with the Hex value of the private key of the sender
var privateKeySender = 'PRIVATE KEY OF SENDER GOES HERE'
var privateKeySenderHex = Buffer.from(privateKeySender, 'hex')
var transaction = new EthereumTransaction(rawTransaction)
transaction.sign(privateKeySenderHex)

/*#########################################
##  Send the transaction to the network  ##
#########################################*/

// -- Step 8: Send the serialized signed transaction to the Ethereum network.
var serializedTransaction = transaction.serialize();
web3.eth.sendSignedTransaction(serializedTransaction);

```

If you are not sure of the sender's nonce you can use 
```js
const TX = require("ethereumjs-tx")

web3.eth.getTransactionCount(sendingAddress, 
  (err, txCount) => { 
    console.log(txCount)

  var rawTransaction = {
    nonce: txCount,
    to: web3.utils.toHex(receivingAddress),
    gasPrice: web3.utils.toHex(20000000),
    gasLimit: web3.utils.toHex(30000),
    value: web3.utils.toHex(web3.utils.toWei('1', 'ether')),
    data: ""
  }

  var privateKeySenderHex = Buffer.from(privateKeySender, 'hex')
  var tx = new Tx(rawTransaction)
  transaction.sign(privateKeySenderHex)

  var serializedTransaction = tx.serialize();

  const raw = '0x' + serializedTransaction.toString('hex')

  web3.eth.sendSignedTransaction(raw, (err, txHash) => {
    console.log('txHash: ', txHash)
  } )
})
```

### Ethereum Metrics

**LastBlock** - 

**Uncles** - Orphan blocks and unlike other blockchains, in ethereum they are included and rewarded. The dashboard displays current block uncle count and that from last 50 blocks.


**AverageBlock** - Average time between two block (exclding uncles) - should be 15sec unless the network is really slow.

**Best Block** - The highest block number of the longest chain, said differently it is heavy with cumulative difficulty.

**Difficulty** - Also known as the mining difficulty to find a new block.

**GasLimitChart** - 

**GasPrice** - The price miners 

GasSpendingChart




Example 1: getGasPrice found here

```js
web3.eth.getGasPrice([callback])
```

Example 2: Get Uncle found here

```js
eb3.eth.getUncle(blockHashOrBlockNumber, uncleIndex [, returnTransactionObjects] [, callback])
```

Example 3: Get Block Transaction Count found here

```js
web3.eth.getBlockTransactionCount(blockHashOrBlockNumber [, callback])
```

### First Dapp 

- Solidity

```js
pragma solidity ^0.4.24;

contract Message {
  string myMessage;

  function setMessage(string x) public {
    myMessage = x;
  }

  function getMessage() public view returns(string) {
    return myMessage;
  }
}
```

- HTML

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <title> Deploy a Remix Contract </title>

  <script src="https://cdn.jsdelivr.net/gh/ethereum/web3.js/dist/web3.min.js"></script>
</head>

<body>
  <h1>Deploy a Remix Contract</h1>

  <script>

    // Connect a web3 provider
    if (typeof web3 != 'undefined') {
      web3 = new Web3(Web3.currentProvider)
    }
    else {
      web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:7545'))
    }

    // Set a default account
    web3.eth.defaultAccount = web3.eth.accounts[0]

    // Get the contract address
    var RemixContract = web3.eth.contract(ABI-GOES-HERE)

    // Get the contract abi
    var myMessage = RemixContract.at('CONTRACT ADDRESS GOES HERE')

    console.log(myMessage)

    const sendBtn = document.getElementById('setMessageBtn')

    const msg = document.getElementById('#userInput').val()

    sendBtn.click(function () {
      myMessage = setMessage(message, (error, result) => { message = result })
      
      console.log(msg)
    })

  </script>
</body>
```



### Improved Deployment Process

How you can improve the deployment process using a tool known as Truffle.

Installing truffle
```sh
npm install truffle -g
```

initializing truffle
```sh
truffle init
```

To deploy your contracts, you'll be using the truffle console.

Type truffle from your terminal to see the commands available to you. 


For now, we'll focus on using the truffle console to compile and migrate our smart contract.

**Step 1: Enter the truffle console**

```sh
truffle console
```

**Step 2: Compile your contract**

A test contract has been created when you initialized truffle. You can compile this contract using the following command.

```sh
compile
```

**Step 3: Migrate Your Contract**

Once compiled, the contract will need to be migrated. You can do this by running the following command.

```sh
migrate
```
This is similar to the process you did earlier where you were pasting the ABI from remix into your editor. Once your migration is complete, you can view the contract ABI in a newly created build folder.