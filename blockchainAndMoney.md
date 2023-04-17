# Blockchain & Money 

## Section 1:  Introduction 
**Cryptography** - Communication in the presences of adversaries.

**Blockchain** - Timestamped append only log. 
- Refuces the cost of trust.
- It is secured via Cryptography.
- It uses Hash function for Tamper Resistance and Integrity.
- Uses digital signature for consent.
- Uses concensus for agreement (a.k.a concensus protocol) (How do you decide who appends the next block).
Concensus protocol addresss "cost of trust" (a.k.a Byzantine Generals Problem)
    - Permissioned
    - Permissionless
- 

Satoshi did not invent the Blockchain, it has been existing since 1990. 

**Assignment : **
- Find the longest running Blockchain (it's not Bitcoin).


**Solution : **
- Contrary to the belief of many, Bitcoin is not the oldest blockchain. Its place in the history of money and money is that it is the first blockchain to transfer value peer-to-peer without the aid or participation of any intermediary.
- Blockchain technology was invented by the cryptographers **Stuart Haber and Scott Stornetta in 1991** not for the purpose of transferring value but as a way to timestamp digital documents to verify their authenticity.


### Study Questions:
- What is Blockchain and why might it be a catalyst for change in the financial sector. 

 

### The Internet Cryptography protocols
- Can Bitcoin Be called a new internet protocol.
- SSL/TLS - 1996 - Paypal
- HTTP - 1990 - Amazon 
- TCP/IP - 1974 - Cisco
- Ethernet - 1974 - 


### Failed Cryptographic Digital Currency
- Digi Cash (David Chaim) 1989
- Mondex (National Westminster Bank) 1993
-  Cybercash (Lynch, Melton, Crocker & Wilson) 1994
- E-gold (Gold and Silver Reserve) 1996
- Hashcash (Adam Back) 1997
- Bitgold (Nick Sabo) 1998
- B-Money (Wei Devi) 1998
- Lucre (Ben Laurie)


### Blockchain Technology
- Verifiably moves data on a decentralised network.
- The data can represent data or computer code (Smart Contract)
- Broad adoption relies on addressing technical, commercial and public policy hurdles.
- It can be a catalyst for change in the world of finance and money.


### What is the role of money? 
- Medium of exchange
- Store of value
- Unit of account


### What is the role of finance?
- Moving, allocating and pricing of Money and risk through out the economy.


### Financial sector challenges (Blockchain Potential Opportunities)
- Repeated crises and instability.
- Fiat currency instability associated with unsound polices.
- Centralised intermediaries concentrates risks & ecconomic rents.
- Central bank legacy payment system.
- Clearing and settlement cost &, counterparty risks
- Financial inclusion

- Payment system costs: 1/2 - 1% of Global GDP
- Financial sector costs: 7(1/2)% of U.S GDP


### Financial Sector Issues with Blockchain Technology 
- Performance, Scalability & Efficiency
- Privacy & Security
- Interoperability
- Governance
- Commercial use cases
- Public policy Issues

### Financial Sector Favours
1. Permissioned Blockchains
- Known set of participants
- No proof-of-work or mining
- No need for a native currency
- Distributed database technology

2. Permissionless Blockchains
- Unknown participants
- Security based on incentives
- Native Currency
- Crypto-economics


### Financial Sector Potential Uses Cases 
- Payment Systems - Cross norder, Lage Interbank & Retail
- Central Bank Digital Currency & Private Stable Sector Value tokens.
- Secondary Market Trading - Crypto exchanges and Custody.
- Venture Capital - Crowdfunding through initial coin offering.
- Clearign, Settlement and Processing - Securities & Derivatives.
- Trade Finance & Supply Chain - Digitizing paper-based processes.
- Digit ID and data processing. 


## Lecture 2: Money, ledgers & Bitcoin

### Overview 
- History of Money
- Ledgers
- Fiat Currency, Central Banking & Credit Cards
- Role of Money
- Early Cryptographic Digital Money 
- Digital & Mobile Payments


### History of Money
**Money** is a social construct (A social concensus mechanism).

**Fiat Currency** - An established currency by the Government or Central Bank/Authority.

**Legal Tender** - A currency accepted by People living in a place/region.


### Ledgers
A ledger is a way of recording economic activities or social or financial activities.

Ledgers are principal recordings kf accounts.
The Record:
- Economic activity: e.g. Transactions 

- Financial relationships: e.g. Debt

> The Bitcoin ledger stores transactions while the Ethereum ledger stores balances.

#### Types of ledgers 
1. Transaction
2. Balance
3. General: Records any type of ledger e.g Capital, Cost, e.t.c
4. Supporting or Sub: A specialied ledger e.g. Salary 
More detailed than a general ledger.
5. Single entry:
6. Double entry: Anything that goes in the ledger be documented in debit and credit ledger. e.g. When sb buys something he records it and and the seller also record his. or a Lender vs Reciever

#### Characteristics of a good ledger
- Immutable, Consistensy
- Timestamped
- Ownership
- Accuracy
- Description of the transaction
- Comprehensive


#### Payment Systems
A method to amend & record Changes in the ledger for money.

> Bitcoin transaction is similar to a Pay Cheque(it has a date, signature, amount, .

### Fiat Currency, Central Banking & Credit Cards
> Anything or currency has value depending on what the society associate to it.

#### Fiat Currency
- Social and Economic concensus.
- Represented by Central Bank Liabilities & Commercial Bank Deposits.
- Relies upon System of Kedgers integrated inFractional Banking System.
- Accepted for taxes.
- Notes and coins are Legal Tender for All Debts public & private
- Unique Tax Treatment.


#### Central Banks and Money 💰
Bob has an Access Bank  & GTBank 🏦 account
while Alice has only an access bank. 
- Bob can easily use his access account to send money to Alice.
But if he uses GTBank account CBN needs to do some balancing.

> To be able to transact between two banks ledger there must be a balancing act from the Central bank.

> There are certain sets of the economy that doesn't want to be involved in electronic cash because of money laundering.

### Role of Money
- Medium of Exchange
- Store of Value
- Unit of Account

#### Characteristics of money 
- Durable
- Portable
- Divisible
- Uniform/Fungible
- Acceptable
- Stable - Limited Supply - Hard to Counterfeit 


### Early Cryptographic Digital Money


### Digital & Mobile Payments

#### Why did Early Dogital Currencies Fail?
- Merchant adoption
- Centralisation
- Double Spending
- Concensus


## Chapter 3: Blockchain Basics and Cryptography

### Overview 
- Bitcoin Design Features
- Cryptographic Hash Function
- Timestamped Append-only logs
- Block Headers & Merkle Trees 
- Asymmetric Cryptography & Digital Signatures
- Bitcoin Addresses 

> Fiat currency has challenges & instability issues

### Bitcoin Design Features
- **Merkel Trees** is a way to compress a lot of data and sort through the data.
- **Nonce** mean Number used once, i.e. a random number that is used once.
- Cryptographic Hash Functions
- Timestamped Append-only Logs (Blocks)
- Block Headers Merkle Tree
- Asymmetric Cryptography & Digital Signatures
- Addresses

- Consensus through Proof of Work
- Network of Nodes 
- Native Currency: When you mine and recieve bitcoin, you have created a native currency.

- Transaction Inputs & Outputs
- Unspent Transaction Outputs (UTXO)
- Scripting Language 

### Cryptographic Hash Function
A hash can be thought of as a didgital fingerprint for data.
- It Maps input x of any size to an Output of fixed size called a Hash.

- Deterministic: Always the same hash fir the the same x.
- Efficiently computed (Doesn't take time to compute).

#### Cryptography Properties
- Preimage resistant (One Way): infeasible to determine x from Hash(x).
- Collision Resistant: Infeasible to find x and y where Hash(x) = Hash(y).
- Avalanche Effect: Change x slightly and Hash(x) changes slightly.
- Puzzle Friendliness: Knowing Hash(x) and part of x, it is still very hard to find rest of x.


#### Uses of Hash Function
- Names 
- References 
- Pointers
- Commitments

##### Bitcoin Hash Functions
- Headers & Merkel Trees - SHA 256
- Bitcoin Addresses - SHA 256 and RIPEMD160


### Timestamped Append-only logs


### Block Headers & Merkle Trees 

#### Block Header 
There are 5 pieces of key information
1. Version
2. Previous Block Hash
3. Merkle Root Hash (A way to grab all the transactions )
4. Timestamp
5. Difficult Target
6. Nonce


#### Merkle Tree 
Is a Binary Data Tree with Hashes.


### Asymmetric Cryptography & Digital Signatures
Involves two key, the public and private keys.
i.e If you want to send a message to Bob, you'd encrypt it with his public key while he decrypts it with his own private key.

##### Digital Signatures Algorithm 
- Generate a key pair - Public Key & Private Key - from a random number
- Signature - Creates Digital Signature from a message and private key 
- Verification - Verified if a signature is valid for a message and a public key.

##### Generating Private and Public keys
1. You take a random number 0 - 256 that will be your private key.
2. The public key is a one way function of the private key. Your public key will be derived directly from your private key e.g. by exponentiating(in Bitcoin a function called ECDSA is used) another number by you private key.

> Given a public key you cannot find a private key

##### Properties
- It's infeasible to find a private key from a public key.
- All Valid signatures verify 
- Signatures are infeasible to forge 

### Bitcoin Digital Signature
ECDSA (Elliptic Curve Digital Signature Algorithm)


### Bitcoin Addresses 
Public keys and bitcoin addresses are not the same.
- In Bitcoin, the public key is hashed twice, 
1. firstly with **SHA256**
2. then with **RIPEMD-160**
3. Then appends a checksum (first 8 characters [from the SHA256 of no. 2]) to the result at no. 2.
4. Then computes the **Base58** of the result at no 3. 


### Transaction Format 
All transactions have an input and an output.
- input: (Previous Transaction ID, Index) => Money, Signature
- Output: Value, Public Key(Bitcoin Address)
Money is sent in satoshis (10^8 is 1 Bitcoin)
- lock_time: 


When you want to verify, you need an **index number** to find t on the markle tree.




## Chapter 5: Blockchain Basics, Transaction, UTXO & Script Code.

### Overview 
- Transaction Inputs & Outputs
- Unspent Transaction Outputs (UTXO)
- Scripting Language
- Bitcoin Design - Putting it all together
- Bitcoin's Academic Pedigree
- Who is Satoshi Nakamoto?
- Conclusion 


### Transaction Inputs & Outputs
All transactions have an input and an output.
- input: (Previous Transaction ID, Index) => Money, Signature
- Output: Value, Public Key(Bitcoin Address)
Money is sent in satoshis (10^8 is 1 Bitcoin)
- lock_time: It's when the transaction happened (You might want to condition a transaction).

> All new Bitcoins comes from a CoinBase transaction


#### Multiple inputs & outputs 
- In order to send a money, previous transactions are added up to an amount that sums up to the amount needed and it may be more than amount needed (which is returned back to the sender).
The sender can also add an extra for miner to process the transaction faster, this is known as gas fee.

> Input Must be >= Output 

> fees = input - output 
Once this transaction becomes valid, the transaction inputs of that transaction becomes spent.


**Coinbase Transaction** is a reward for solving the puzzle (PoW).
|_ Reward halves (1/2s) every 210,000 blocks 
|_ Originally 50 Bitcon per block
|_ Output may not be used as a Transaction Input until another 100 Blocks.
|_ Always recorded as the first transaction in Markle Tree.
|_ May include 100 bytes of arbitrary data.

### Unspent Transaction Outputs (UTXO)
- UTXO are bitcoin transactions that haven't been spent at a give time.
- It contains all currently unapent Transaction Outputs.
- Speeds up transaction validation process.
- It is not stored in the database, it a regular  database. it uses a **LevelDB database** in Bitcoin Core called "chainstate".
To make it easy or software, the Bitcoin that haven't been spent are stored in a software.


### Scripting Language
- It's a programming code for transactions.
- It is Stack-based code, with no Loops (not Turning-complete)
- Provides a flexible set of instructions for transaction validation and Signature Authentication.

Scripting code allows for some conditionality, which give us the ability to condition a transaction 

### Bitcoin Design - Putting it all together


### Bitcoin's Academic Pedigree


### Who is Satoshi Nakamoto?


### Conclusion

### Bitcoin Network 
- Full Nodes: Stores full Blockchain & able to validate all transactions
- Pruning Nodes: Prune transactions after validation and aging.
- Lightweight Nodes: Simplified Payment Verification (SPV) nodes - Store Blockchain headers only.
- Miners: Performs proof of work & Create new Blocks - Don't need to be a full Node Mining.
- Mining Pool Operators
- Wallets: Store, View, Send and Receive Transactions & Create Key Pairs.
- Mempool: Pool of unconfirmed (yet to be validated) transactions.