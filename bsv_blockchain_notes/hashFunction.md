# Hash Functions

## Table Of Content
1. What are Hash Functions?
2. Base58 and Base58Check
3. SHA-256
4. Walkthrough Implementation of SHA-256 in GoLang
5. RIPEMD-160
6. Walkthrough Implementation of RIPEMD-160 in GoLang
7. Double Hashing and Bitcoin's Security


## Introduction
### Hash Functions
There are three primitive elements found in Bitcoin: 
- Hash Functions
- Merkle Trees
- Digital Signatures

If you take the time to learn these three Bitcoin primitives well, you will likely find the learning curve to understanding Bitcoin significantly reduced. The focus of this course is Hash functions.

We examine: 
- what hash functions are
- The hash functions used in Bitcoin
- How hash functions are used in Bitcoin
- Why double hashing is used in Bitcoin
- The role hash functions play in Bitcoin's security model. Bitcoin makes use of two hash functions: SHA-256 and RIPEMD-160.

There is example code in various  parts of the course, and two example hash function implementations all written using the Go programming language. These examples are simply meant to aid in understanding the course material; knowing how to read and write code is not required to complete this course.

However, although it is not necessary to understand and complete the course, some familiarity with command line or terminal environments and programming is assumed with respect to the example code presented in the course.

Installation of Supporting Libraries Quick-Start: GoLang

You can install Go for your operating system from the official Go website: [https://go.dev/doc/install](https://go.dev/doc/install)

Once you have Go installed, create a new directory and initialize a new Go module using the following command:

```go
go mod init github.com/[your username]/bsv-examples
```

go mod init github.com/kore4lyf/bsv-examples

The examples in this course also utilize the official BSV libsv Go libraries which you can add to your module using the following commands:

```go
go get github.com/libsv/go-bk
go get github.com/libsv/go-bt
go get github.com/libsv/go-bc
```

The GoLang code used in this course can be found here: [https://github.com/jakeBitcoinAssociation/hash-functions](https://github.com/jakeBitcoinAssociation/hash-functions)




## Hash Functions

### What are Hash Functions?
#### What are Hash Functions?
A hash function is a mathematical process that maps a bitstring of any length to a bitstring of a defined length.
The term hash function, it means **secure cryptographic hash function**.
The output values of hash functions are often referred to as message 
- digests
- hash values
- checksums
- hashes

A **one-way hash function** must be: **preimage resistant** and **second preimage resistant**, While a **secure cryptographic** or ideal hash function must be **preimage resistant**, **second preimage resistant**, and **collision resistant**.

A **preimage** is the data that is input into a hash function to calculate a hash. 

**Preimage Resistant** - This property means that it should be computationally infeasible to reverse a hash function. **In other words if h(x) = z , then it should be infeasible to find x given z.**


**Second Preimage Resistant** -  It is computationally infeasible to find any second input which has the same output as any specified input. 

> A hash function muat be preimage resistance before you can get second preimage resistance.

**This property means given an input and its hash, it should be hard to find a different input with the same hash.**  In other words, if a hash function h for an input x produces hash value h(x), then it should be difficult to find any other input value y such that h(y) = h(x).


**Collision Resistance** - This property means it should be hard to find two different inputs of any length that result in the same hash. This property is also referred to as collision free hash function.
- Collision resistance also has similarities with the second preimage resistance, and because of this, collision resistance can also be called “weak collision resistance.”

 > However, before a hash function can be referred to as collision resistance, it must have a minimum of 160 bits length.


##### Popular Hash Function
**Markle Damgard (MD)** -  2, 4, 5, 6
- MD5 was most popular and widely used hash function for quite some years.

- The MD family comprises of hash functions MD2, MD4, MD5 and MD6. It was adopted as Internet Standard RFC 1321. It is a 128-bit hash function.

- MD5 digests have been widely used in the software world to provide assurance about integrity of transferred file. For example, file servers often provide a pre-computed MD5 checksum for the files, so that a user can compare the checksum of the downloaded file to it.

- In 2004, collisions were found in MD5. An analytical attack was reported to be successful only in an hour by using computer cluster. This collision attack resulted in compromised MD5 and hence it is no longer recommended for use.


**Secure Hashing Algorithms (SHA)**
- Family of SHA comprise of four SHA algorithms; SHA-0, SHA-1, SHA-2, and SHA-3. Though from same family, there are structurally different.

- The original version is SHA-0, a 160-bit hash function, was published by the National Institute of Standards and Technology (NIST) in 1993. It had few weaknesses and did not become very popular. Later in 1995, SHA-1 was designed to correct alleged weaknesses of SHA-0.

- SHA-1 is the most widely used of the existing SHA hash functions. It is employed in several widely used applications and protocols including Secure Socket Layer (SSL) security.

- In 2005, a method was found for uncovering collisions for SHA-1 within practical time frame making long-term employability of SHA-1 doubtful.

- **SHA-2 family has four further SHA variants, SHA-224, SHA-256, SHA-384, and SHA-512 depending up on number of bits in their hash value.** No successful attacks have yet been reported on SHA-2 hash function.

- Though SHA-2 is a strong hash function. Though significantly different, its basic design is still follows design of SHA-1. Hence, NIST called for new competitive hash function designs.

- In October 2012, the NIST chose the Keccak algorithm as the new SHA-3 standard. Keccak offers many benefits, such as efficient performance and good resistance for attacks.


**RIPEMD**
- The RIPEMD is an acronym for RACE Integrity Primitives Evaluation Message Digest. This set of hash functions was designed by open research community and generally known as a family of European hash functions.

- The set includes RIPEMD, RIPEMD-128, and RIPEMD-160. There also exist 256, and 320-bit versions of this algorithm.

- Original RIPEMD (128 bit) is based upon the design principles used in MD4 and found to provide questionable security. RIPEMD 128-bit version came as a quick fix replacement to overcome vulnerabilities on the original RIPEMD.

- RIPEMD-160 is an improved version and the most widely used version in the family. The 256 and 320-bit versions reduce the chance of accidental collision, but do not have higher levels of security as compared to RIPEMD-128 and RIPEMD-160 respectively.


**Whirlpool**
This is a 512-bit hash function.

- It is derived from the modified version of Advanced Encryption Standard (AES). One of the designer was Vincent Rijmen, a co-creator of the AES.

- Three versions of Whirlpool have been released; namely WHIRLPOOL-0, WHIRLPOOL-T, and WHIRLPOOL.



You can think of a message digest as analogous to a fingerprint for digital information. In the physical world, a fingerprint is an identifier unique to each individual person such that no two people ever share the same fingerprint. A hash function takes some input message (which can be almost anything as all digital information is essentially a binary string of ones and zeros), and produces a unique, compressed, fixed-length, digital fingerprint for that input message.

As a result of their unique properties, hash functions are a very important tool in many areas of information technology:

- Hash Tables
- Digital signatures
- Keyed hashes
- One-way transformations
- Key derivation

These operations and techniques form the foundation of most digital storage and communication technologies. However, the two fundamental uses of hash functions are: maintaining data integrity, and data storage & access efficiency. Since message digests are digital fingerprints, they are very useful for making sure data hasn’t been tampered with.


##### Data Integrity
For example, Bob wants to download the most recent version of Debian Linux so he goes to debian.org and downloads an .iso file for the version of Debian Linux he would like to use. However, he wants to be sure he’s downloaded the correct file before running it to minimize the risk the file has malware embedded in it. Before running the .iso file, Bob checks the website for a checksum or message digest corresponding to the version of the file he downloaded, and he finds the following listed:
```
c685b85cf9f248633ba3cd2b9f9e781fa03225587e0c332aef2063f6877a1f0622f56d44cf0690087b0ca36883147ecb5593e3da6f965968402cdbdf12f6dd74 debian-11.2.0-amd64-netinst.iso 
f2da0996196f19585b464e48bfb6b8e4938eb596667d92a5ebd428e1a88a1a115c00f1d052f350eca44fa08f42f0500c63351763dfb47f1e1783f917590c175d debian-edu-11.2.0-amd64-netinst.iso 
9b5b0475fbb3235ebb7da71415f10921b02131b7debc9325403f85f9f6798a3e902d6257831a7ec9c7aef3256817fb76c4f01bb5d035bfcdb3dc24da24fa1bda debian-mac-11.2.0-amd64-netinst.iso
```


Seeing the listed checksums were generated using the SHA-512 hash function, Bob then runs his newly downloaded .iso file through the SHA-512 hash function on his computer to make sure the output matches one of the provided hashes:
```
openssl sha512 ~/Downloads/debian-11.2.0-amd64-netinst 
//Output: SHA512(debian-11.2.0-amd64-netinst.iso)= c685b85cf9f248633ba3cd2b9f9e781fa03225587e0c332aef2063f6877a1f0622f56d44cf0690087b0ca36883147ecb5593e3da6f965968402cdbdf12f6dd74
```

And, sure enough, the output checksum matches one of the given checksums on the Debian website, so Bob can be reasonably sure the file he has downloaded is safe to open.


##### Efficient Data Storage and Retrieval
In addition to data integrity, using hash functions as a tagging or identification mechanism in data storage or in a data structure can provide efficiency gains. Message digests of hash functions are a fixed length but still unique, and hash functions can take almost anything as an input value. Many data structures found in information systems utilize hash functions to identify or index data.
Fundamentally, all computer systems use hash tables (also called associative arrays, maps, or dictionaries) within their memory storage architectures to make memory access as efficient as possible. Hash tables are such an important data structure that all other data structures can be constructed using them; there are even some programming languages like AWK that use them exclusively. Hash tables work a lot like arrays; the difference being hash tables allow for anything that can be hashed to be used as an index value creating a key-value mapping.

For example, given an array of size 10, the contents of the array are stored by accessing the array at indexes from 0..9:

```go
package main 
import ( 
 "fmt" 
) 
func main() { 
 var array [10]string = [10]string{"one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"} 
 for i := 0; i < 9; i++ { 
 fmt.Printf("%s, ", array[i]) 
 } 
 fmt.Printf("%s\n", array[9]) 
} 
//Output: one, two, three, four, five, six, seven, eight, nine, ten 
```


Whereas hash tables use a hash of data modulus the length of the array (i.e. the remainder of the message digest divided by the length of the array) to derive the index the data will be stored in the array.


```go
package main 
import ( 
 "bytes" 
 "encoding/binary" 
 "fmt" 
 bk "github.com/libsv/go-bk/crypto" 
 "math/big" 
) 
 
type Cell struct { 
 key string 
 value string 
 next *Cell 
} 
type HashTable struct { 
 Cells []*Cell 
} 
 
func main() { 
 hashTable := NewHashTable() 
 hashTable.Insert("0", "zero") 
 hashTable.Insert("1", "one") 
 hashTable.Insert("2", "two") 
 hashTable.Insert("3", "three") 
 hashTable.Insert("4", "four") 
 hashTable.Insert("5", "five") 
 hashTable.Insert("6", "six") 
 hashTable.Insert("7", "seven") 
 hashTable.Insert("8", "eight") 
 hashTable.Insert("9", "nine") 
 
 fmt.Printf("%s\n", hashTable) 
 
} 

func (hashTable *HashTable) String() string { 
 var out bytes.Buffer 
 for _, cell := range hashTable.Cells { 
    if cell != nil { 
    fmt.Fprintf(&out, "%s ", cell.value) 
    if cell.next != nil { 
    for nextCell := cell.next; nextCell != nil; nextCell = nextCell.next { 
    fmt.Fprintf(&out, "%s ", nextCell) 
    } 
    } 
    } 
 } 
 return out.String() 
} 
 
func (cell *Cell) String() string { 
 var out bytes.Buffer 
 for ; cell != nil; cell = cell.next { 
 
 fmt.Fprintf(&out, "%s", cell.value) 
 
 } 
 return out.String() 
} 

func NewHashTable() *HashTable { 
 return &HashTable{Cells: make([]*Cell, 50)} 
} 

func GetIndex(key string) (index int) { 
 bInt := new(big.Int) 
 bInt.SetBytes(bk.Sha256d([]byte(key))) 
 return int(binary.BigEndian.Uint64(bInt.Bytes()) % 50) 
} 

func (hashTable *HashTable) Insert(key string, value string) { 
 index := GetIndex(key) 
 if hashTable.Cells[index] == nil { 
 hashTable.Cells[index] = &Cell{key: key, value: value} 
 } else { 
 head := hashTable.Cells[index] 
 for ; head != nil; head = head.next { 
 if head.key == key { 
 head.value = value 
 } 
 return 
 } 
 
 head.next = &Cell{key: key, value: value} 
 } 
} 

func (hashTable *HashTable) Get(key string) (string, bool) { 
 index := GetIndex(key) 
 if hashTable.Cells[index] != nil { 
 head := hashTable.Cells[index] 
 for ; ; head = head.next { 
 
 if head.key == key { 
 return head.value, true 
 } 
 if head.next == nil { 
 break 
 } 
 } 
 } 
 return "", false 
} 
//Output: three four five nine eight zero six seven one two 
```


Notice the output of the hash table is not in order like the array was, and that's because the index of the value is determined by the hash of its key. This is what makes hash tables so efficient. Because the index of the value is provided when fetching the data, retrieval is fast, yet almost any kind of input can be used to derive the index.

##### Merkle Trees
Bitcoin makes extensive use of Merkle Trees. A Merkle Tree is a binary tree structure (meaning its branches terminate in two nodes) that's made entirely of hashes. For example, the leaf nodes at the bottom layer of the Merkle trees used in Bitcoin are the hash values of the raw data from bitcoin transactions. And the successive layers of the tree leading back to the root node are constructed by concatenating the two hashes from the previous layer, and hashing them together to form a new hash. This has the effect of connecting the tree together to be represented securely by one single root node value. This structure makes it very easy to find data at the bottom of the tree, as well as to prove specific data exists in the tree - which is particularly important for scaling the Bitcoin system efficiently.

##### Digital Signatures
Although hash tables and data structures like Merkle Trees are where hash functions find their greatest use, the most widely recognized use of hash functions is in cryptography. In addition to encryption and key-exchanges, digital signatures make extensive use of hash functions. Like a physical signature, a digital signature associates an identity to a document or message. To ensure the security of digital signatures, well tested algorithms are used to both construct and verify them.

**In Bitcoin, digital signatures are most commonly used for Pay-to-Public-Key-Hash (P2PKH) transactions** – the most common type of Bitcoin transaction template -- where the ownership of funds are transferred from the sending party to the receiving party. 
The two other common uses of digital signatures in Bitcoin are for **signing arbitrary messages and using a Bitcoin address as part of the verification process**, and MinerID which is a message included in the first transaction of a block that acts as an authentication mechanism in case another miner (Bitcoin node) tries to act dishonestly while using the ID of a competing miner.

With that said, it's helpful to recognize that even though hash functions and cryptographic digital signatures are used in Bitcoin, it is not a cryptographic system, and it's actually incorrect to use the term “cryptocurrency” when referring to Bitcoin or a system that follows the Bitcoin architectural design like BSV. This is a really important distinction to be aware of because as we'll see in chapter 7, it's fundamental to how the Bitcoin system operates and how it's secured.


#### The Differences Between Hashing and Encryption
Since hash functions are a type of cryptographic primitive -- i.e., some of the building blocks used to encrypt messages and data -- the concepts of hashing and encryption are often conflated. However, they are not the same. The three main differences between hashing and encryption are as follows:

1. **Hash functions don't care about data loss:** 
   A hash function produces a fixed-length output in clear text because it’s nothing more than a unique digital fingerprint and data loss is not a concern. In contrast, encryption encodes and preserves input messages. 
   
2. **Hash functions are not reversible:** 
   A hash function is a one-way function that does not need to be reversed. In fact, it's important it's not reversible. In contrast, it's crucial the intended recipient of an encrypted message is able to reverse the encryption process in order to decrypt the message so they can read it.
   
3. **Hash functions have a collision risk:**  
   A hash function has a collision risk. Due to the fixed length of message digests, it's possible for two different input values to produce the same digest. Bitcoin uses hash functions like SHA-256 and RIPEMD-160 because they greatly reduce the risk of collisions, yet, although they're probabilistically insignificant, they can still theoretically happen. In contrast, since encryption preserves 100% of the input message, each encrypted message produces a unique output so there's no collision risk.



#### The Three Important Properties of Hash Functions
1. **Preimage Resistance: One-way**
   Hash functions are computationally infeasible to reverse, in the same sense as trying to unscramble an egg or put toothpaste back into its tube. Said in another way, hash functions are one-way 'trap-door' functions; they make it easy to find a message digest from an input, but so difficult to find an input from a message digest, that it would either take longer than human beings are capable of waiting (sometimes longer than the age of the universe) or the cost of marshalling the necessary computing power to reverse them is so high, it's not worth doing it.
   
> To be considered preimage resistant, it should take 2^m hash attempts (where m is the length of the output in bits) to find the corresponding input message for a particular message digest. If a preimage can be found using fewer than 2^m hash attempts, the hash function is no longer considered preimage resistant and is no longer secure.
   
2. **Second Preimage Resistance: Deterministic** -
   It’s computationally infeasible to find two different input values that produce the same output value for a hash function. Although the fixed length of their output means a hash function has a collision risk, an ideal hash function produces message digests with a length large enough that the risk of finding a collision is so small, it’s safe to ignore in most situations.
   
> Ideally, a hash function with an output value of bitlength m should require at least 2^m/2 operations to find a collision. In a birthday attack, given a set of m equally probable values, roughly 
2^m/2 random samples are needed to find a single collision. This means if a collision is found in fewer than 2^m/2 random samples, the collision resistance property of the hash function is “broken”, and it’s no longer considered secure. 
This is particularly important with respect to Bitcoin's proof-of-work process.



#### The Hash Functions Found in Bitcoin

##### Merkle-Damgård Hash Functions
The fundamental issue with constructing a hash function is the fact that it must be able to take an input of arbitrary length and compress it into an output of a fixed length. If input is an arbitrary length, it's difficult to achieve second preimage resistance. Also, for a compression function to be collision resistant, it must take fixed length inputs that are longer than its output. **One way to remedy this issue is to use a preprocessing step to pad the input to a fixed length rather than compress it directly.** Once the input has been preprocessed, it can be compressed consistently.

In 1979, both Ralph Merkle and Ivan Damgård independently proved that **so long as an appropriate padding scheme is used in the preprocessing step, and the compression function used is collision resistant** (implying preiamge and second preimage resistance), it follows that the hash function itself is also collision resistant. The most popular hash functions in use today are based on this Merkle-Damgård method of construction.

Merkle-Damgård hash functions have three parts: 
- input
- preprocessing
- compression, and final value construction and output. 

**The preprocessing step pads the input message so its congruent to a fixed bitlength, e.g. 512 or 1024, and then appends the length of the input itself (this is called Merkle-Damgård strengthening)**. The compression step uses bitwise logical functions to compute and mutate the processed input in rounds using chaining variables to link each round. Finally, the chaining variables are concatenated and outputted most commonly in hexadecimal format.


##### MD4 and MD5
The first two Merkle-Damgård hash functions to gain widespread adoption were Ron Rivest's MD4 and MD5. First specified in 1992 in the Internet Engineering Task Force (IETF) Request For Comments (RFCs) 1320 and 1321, respectively, MD4 and MD5 were the first hash functions to use a 448 congruent to 512 message block padding scheme with the remaining 64 bits left for Merkle-Damgård strengthening.

MD4 enjoyed short-lived success, but Rivest realized shortly after its release that it was likely to be insecure, so he designed MD5 shortly thereafter. Despite Hans Dobbertin's announcement of a collision found for MD5's compression function in 1996, MD5 enjoyed long-lived success. While cryptographers were recommending SHA-1 as a replacement to MD5 as early as 1996, MD5 continued to be used well into the early 2000s.

However, in 2004, Xiaoyun Wang, Dengguo Feng, Xuejia Lai, and Hongbo Yu developed an analytical collision attack that could reportedly be performed within an hour on an IBM p690 cluster. This marked the end for MD5 for use in key derviation and digital signatures. In 2008, CMU Software Engineering Institute announced MD5 was "cryptographically broken and unsuitable for further use".

Even so, the groundwork laid by MD4 and MD5 provided a practical framework for newer generations of hash functions to follow; including Bitcoin's SHA-256 and RIPEMD-160 which both use 512 bit message blocks and 32 bit words.

##### Bitcoin's Hash Functions
As already mentioned, the two hash functions found in the Bitcoin system are SHA-256 and RIPEMD-160. For reasons explored further in Chapter 7, Bitcoin uses SHA-256 and RIPEMD-160 in double hash forms: SHA-256(SHA-256) and RIPEMD-160(SHA-256) – often abstracted and referred to as HASH-256 and HASH-160, respectively, following the convention set out in the original bitcoin code.

However, the following table displays the full range of hash functions commonly found in the greater Bitcoin ecosystem; including SHA-512 and the HMACs of SHA-256 and SHA-512 which are often utilized by Bitcoin wallet implementations: 

| Hash Function | Output Length | Description |Example Application in BSV | 
| :--- | :--- | :--- | :---|
| SHA-256 | 32 Bytes | Generates unique 256-bit value from input string | 1. Proof-of-work algorithm 2. Address Creation | 
| RIPEMD-160 | 20 Bytes | Generates unique 160-bit value from an input string | Address creation | 
| HASH-256 | 32 Bytes | SHA256 hash of a SHA256 hash | 1. Blocks 2. Transactions | 
| HASH-160 | 20 Bytes | RIPEMD160 hash of a SHA256 hash | Address creation | 
| SHA512 | 64 Bytes | Generates unique 512-bit value from input string | Wallet encryption (AES) | 
| SHA256HMAC/SHA512HMAC | 32 Bytes | HMAC Prevents length extension attacks and can be used with any hash function | Address Creation |






### Base58 and Base58Check
#### What is Base58 and Why Does Bitcoin Use It?
While Base58 & Base58Check are not hash functions, they are important topics to cover.

> Base58 is a binary-to-text encoding of data to plain text; i.e., printable characters.

> Like Base64, Base58 is used to represent 8-bit bytes of binary data in an ASCII string format. Bitcoin uses a binary-to-text encoding to enable data stored in binary formats to be transmitted across communication channels that only reliably support text values like email and the internet.

The original Bitcoin source code provides an explanation for why Base58 is used in Bitcoin instead of the more common Base64:

```
// Why base58 instead of standard base-64 encoding?
// - Don't want 0OIl characters that look the same in some fonts and
// could be used to create visually identical looking account numbers.
// - A string with non-alphanumeric characters is not as easily accepted as an account number.
// - E-mail usually won't line-break if there's no punctuation to break at.
// - Doubleclicking selects the whole number as one word if it's all alphanumeric.-
```

In other words, since Base58 avoids using non-alphanumeric characters (+ and /) and ambiguous letters (0 - zero, I - capital i, O - capital o, and l - lower case L), it helps ensure Bitcoin addresses are readable, transmittable, and more secure.

One important point to note is the Base58 encoding used in Bitcoin is unique to Bitcoin and is not intended to match any other Base58 encoding implementations.



The table below shows the Base58 value mappings.
 | Value | Base58 Character Encoding | Value | Base58 Character Encoding | 
 | :--- | :--- | :--- | :--- |
 | 0 | 1 | 29 | W | 
 | 1 | 2 | 30 | X |
 | 2 | 3 | 31 | Y |
 | 3 | 4 | 32 | Z |
 | 4 | 5 | 33 | a |
 | 5 | 6 | 34 | b |
 | 6 | 7 | 35 | c |
 | 7 | 8 | 36 | d |
 | 8 | 9 | 37 | e |
 | 9 | A | 38 | f |
 | 10 | B | 39 | g |
 | 11 | C | 40 | h |
 | 12 | D | 41 | i |
 | 13 | E | 42 | j |
 | 14 | F | 43 | k |
 | 15 | G | 44 | m |
 | 16 | H | 45 | n |
 | 17 | J | 46 | o |
 | 18 | K | 47 | p |
 | 19 | L | 48 | q |
 | 20 | M | 49 | r |
 | 21 | N | 50 | s |
 | 22 | P | 51 | t |
 | 23 | Q | 52 | u |
 | 24 | R | 53 | v |
 | 25 | S | 54 | w |
 | 26 | T | 55 | x |
 | 27 | U | 56 | y |
 | 28 | V | 57 | z |


##### Activity - Encode a Bitcoin public key hash in Base58
Using the hash calculator, encode the following hash (displayed in HEX) in Base58:
```
094d77441cfead50daa8e9ce893698962dbcbbce
```

#### What is Base58Check and How Does Bitcoin Use it?
> The "check" of Base58Check refers to a shortened hash, or 'checksum', which is appended to the end of the Base58 encoded data.

** The checksum provides another step to ensure the integrity of the Base58 encoded data** by providing a comparison value that can be used to automatically detect typographical errors. That way, **if any data changes, the checksum value will reflect the change and a data integrity check will fail before any data is transmitted.**

For example, Alice wants to send some BSV to Bob. She uses a Bitcoin wallet on her mobile phone to scan a QR code corresponding to Bob's Bitcoin address. As soon as Alice scan's Bob's address, her Bitcoin wallet saves the checksum bytes of Bob's address. Unbeknownst to Alice, a link her grandmother sent her on social media had malware in it that targets Bitcoin wallet addresses. Right before Alice is about to send Bitcoin to Bob, the malware changes the address to an address the attacker controls. But, before posting the transaction to the chain, the Bitcoin wallet performs an integrity check using the saved checksum from when Alice first scanned Bob's address. The send fails, and Alice is able to clean the malware off her phone and send the Bitcoin to Bob in a subsequent transaction.


Base58Check has the following features:
- An arbitrarily sized payload or input data.
- A set of 58 alphanumeric symbols that are easily distinguishable
- One byte of version/application information. Bitcoin addresses use 0x00 for this byte but may use 0x05 in future.
- Four bytes (32 bits) of a SHA256-based error checking to auto-detect and possibly correct typographical errors.
- An extra step to preserve leading zeros in the data.

> Bitcoin uses Base58Check to encode Bitcoin addresses, and when exporting and importing private keys to and from different Bitcoin wallets. 

- What are the two places Base58Check is used in the Bitcoin system?
Public ECDSA keys during the Bitcoin address creation process and private ECDSA keys in a Wallet Import Format (WIF).

- **Wallet Import Format (WIF)** is a standardized method for displaying Bitcoin private keys using the Base58Check encoding scheme. WIF format was standardized in order to allow all Bitcoin wallets to import and export private keys.

> Basically Base58 is used into format Bitcoin addresses in both public and private.


### SHA-256
#### SHA-256
##### A Brief History of the Secure Hashing Algorithms
SHA stands for "secure hashing algorithm". The SHA-1 set of hash functions was developed by the NSA and published in 1993 – with its more well-known improved version being published in 1995 – as an extension to the MD5 hash function. From 1995 to 2005, SHA-1 was considered an ideal hash function; complete with all 3 properties of ideal hash functions: preimage resistance, second preimage resistance, and collision resistance.

However, as computer processors became more powerful, SHA-1 became collision prone. In 2005, it was shown it’s possible to muster the necessary computing power to find a collision for a SHA-1 hash value and swap the input values for its 160bit long output value. As a result, SHA-1 is now considered insecure. It was formally depreciated by the United States' National Institute of Standards and Technology (NIST) in 2011 disallowing its use for digital signatures. In 2020, a collision attack on a SHA-1 hash to produce the same SHA-1 hash value for any two arbitrary inputs was carried out for less than $100,000 USD.

##### Secure Hashing Algorithm 2: SHA-2
Before SHA-1 became officially insecure, the NSA produced a second set of more complex hash functions, first published by NIST in 2001, called the SHA-2, or Secure Hashing Algorithm 2, set of hash functions (SHA224, SHA256, SHA384, SHA512, SHA512/224, and SHA512/256). Like SHA-1, the SHA-2 family of hash functions are Merkle-Damgård hash functions; however, their compression functions are more complex, and the message digests are significantly larger than SHA-1.

##### Secure Hashing Algorithm 256: SHA-256
Named after its message digest bit-length, SHA-256 produces a 256-bit message digest. This means SHA-256 has 2^256 possible unique output values. Human beings aren't good at intuitively understanding astronomically large numbers, so to put it into perspective, 1 million seconds equates to about 11 days, 1 billion seconds equates to about 31.6 years, 1 trillion seconds or a 1 with 12 zeros, equates to about 31,710 years, and 2^256 is approximately equal to 
1.1579 ∗ 10^77 or 1 with 77 zeros following it; meaning it's safe to say SHA-256 has such a low probability of two different input values sharing the same message digest, or very good collision resistance, that it will likely be quite a long time before we have the ability to find a feasible SHA-256 collision attack. Additionally, since Bitcoin publishes all transactions in clear text, i.e., it’s not a cryptographic system, and each transaction uses unique values, even if an attacker were able to discover a private key for a particular transaction, they would have only gained access to a single UTXO within a single transaction.


##### Double SHA-256: HASH-256
In Bitcoin, the double hash of SHA-256 is commonly written as SHA-256d or abstracted to a new function called HASH-256. 

- HASH-256 is used to:
- Generate transaction IDs – including Merkle Roots 
- Generate block header IDs
- Block header IDs are used to find a proof-of-work solution.



#### Bitcoin Transactions and SHA-256
##### What is a Transaction?
Bitcoin is an electronic cash system made up of 2,100,000,000,000,000 tokens (called ‘satoshis’) and a ledger. A ‘bitcoin’ is 1∗10^8 satoshis. These satoshi tokens are the smallest unit of account in Bitcoin. 
> To transfer ownership of an arbitrary amount of satoshis, a record is added to the ledger in the form of a transaction.

- The transaction acts as a contract complete with how many satoshis are being transferred; from where the satoshis are coming from; and to whom their ownership is being transferred to. 

- Two scripts
1. **Each transaction holds an arbitrary number of input Unspent Transaction Outputs (UTXOs)** which include a puzzle or ‘lock’ written in a minimal scripting language called Bitcoin Script (based on Forth) that need to be unlocked in order for the sender to transfer the ownership of the satoshis they hold (I.e., spend), and 
2. **an arbitrary number of output UTXOs** which **include new locking scripts** that only the receiver can unlock.

> Bitcoin transactions use locking and unlocking scripts, which are executed together to verify a transaction. As mentioned earlier, a locking script is a spending condition specified in the transaction output, and an unlocking script satisfies this condition when the two scripts are executed together.

- Each locking script resolves to either true or false. This means Bitcoin is a predicate system and as such **the locking script of a UTXO can be anything that ultimately resolves to true or false**.

> In P2PKH UTXOs, the public key hash is a Bitcoin address, which is a HASH-160 of the public key portion of an Elliptic Curve public-private key-pair. In P2PKH UTXOs, satoshis are “locked” to the receiver’s Bitcoin address allowing them to unlock the UTXO and spend the satoshis within it using the corresponding private key for the public key used to create the address. 

As discussed briefly in chapter 1, the most common type of **UTXO locking script template** used in Bitcoin is the **Pay-to-Public-Key-Hash (P2PKH) template**. **The sender uses a hash of the receiver's public key to lock the satoshis being spent in a new output UTXO**. The receiver is then able to unlock and use that UTXO as an input in a new transaction by providing the **digital signature generated from the corresponding private key. As briefly mentioned above, it’s important to note that **there are innumerable ways to lock, and subsequently unlock, UTXOs -- they just need to resolve to either true or false**. So long as the result resolves to true, the sending and receiving parties are essentially transferring ownership of the contained satoshis with a digital signature (even if it's not a literal digital signature like in a P2PKH transaction).

- The five standard types of transaction scripts are       1. pay-to-public-key-hash (P2PKH)
    2. public-key
    3. multi-signature (limited to 15 keys)
    4. pay-to-script-hash (P2SH)
    5. data output (OP_RETURN)

In this way, we can say each satoshi itself is a chain of digital signatures that can be traced back to the initial instantiation of the Bitcoin network in 2009. And, transactions are the fundamental record type that track the addition of each new digital signature to each satoshi since the Bitcoin network was instantiated in 2009.

> Once a transaction has been constructed and serialised in its raw HEX form, it's hashed using **HASH-256** to get its corresponding transaction ID (TXID). 

Bitcoin nodes use TXIDs in their Merkle trees and in their memory pools to keep received transactions organised.

##### Example P2PKH Transaction
```
010000000167e7105b52e8534596af29dba949921cffe3dbaa555b8ed96121346c6755adae000000006a47304402206e4db9dee8449b861e5fdc00ba3bdb80fba8cd52c75489376c54bd65d26262650220453569438e6bc6f957b1f7ff6fff4af2e42edaae1ac885382373d42fa569b17c41210267d2d1f8b3affffa10b68b2756ba7f6f4efafcadbecd145181016178d00b379bffffffff019c276bee000000001976a914accd105073775756cc04962bc1e4893694f50c5588ac00000000
```


Below, is the same transaction decoded and presented in a JSON format:

```
{ 
 "version": 1, 
 "size": 191, 
 "locktime": 0, 
 "vin": [ 
 { 
 "txid": "aead55676c342161d98e5b55aadbe3ff1c9249a9db29af964553e8525b10e767", 
 "vout": 0, 
 "scriptSig": { 
 "asm": "304402206e4db9dee8449b861e5fdc00ba3bdb80fba8cd52c75489376c54bd65d26262650220453569438e6bc6f957b1f7ff6fff4af2e42edaae1ac885382373d42fa569b17c[ALL|FORKID] 0267d2d1f8b3affffa10b68b2756ba7f6f4efafcadbecd145181016178d00b379b", 
 "hex": "47304402206e4db9dee8449b861e5fdc00ba3bdb80fba8cd52c75489376c54bd65d26262650220453569438e6bc6f957b1f7ff6fff4af2e42edaae1ac885382373d42fa569b17c41210267d2d1f8b3affffa10b68b2756ba7f6f4efafcadbecd145181016178d00b379b" 
 }, 
 "sequence": 4294967295 
 } 
 ], 
 "vout": [ 
 { 
 "value": 39.999999, 
 "n": 0, 
 "scriptPubKey": { 
 "asm": "OP_DUP OP_HASH160 accd105073775756cc04962bc1e4893694f50c55 OP_EQUALVERIFY OP_CHECKSIG", 
 "hex": "76a914accd105073775756cc04962bc1e4893694f50c5588ac", 
 "reqSigs": 1, 
 "type": "pubkeyhash", 
 "addresses": [ 
 "mwGeB8HZwx22snzWoXRRfL2dhmJ4QXZr9V" 
 ] 
 } 
 } 
 ], 
 "time": 1645757424, 
} 
```   


Transactions consist of 6 serialised elements:

| Element | Description | RAW Hexadecimal | JSON | 
| :-- | :-- | :--- | :--- |
| Version (4 bytes little endian): | The version number of a transaction is meant for transaction routing and handling. Currently, only version numbers 01000000 (1) and 02000000 (2) are accepted by. In future, the transaction version number will allow nodes to specialize their services by geographic location and service type. | 01000000 | "version": 1 | 
 | Input count (1-9 bytes little endian): | Specifies how many input UTXOs are in the transaction | 01 | "vin" | 
 | Input list (variable length little endian): | The input UTXOs themselves | 67e7105b52e8534596af29dba949921cffe3dbaa555b8ed96121346c6755adae000000006a47304402206e4db9dee8449b861e5fdc00ba3bdb80fba8cd52c75489376c54bd65d26262650220453569438e6bc6f957b1f7ff6fff4af2e42edaae1ac885382373d42fa569b17c41210267d2d1f8b3affffa10b68b2756ba7f6f4efafcadbecd145181016178d00b379bffffffff | "txid": "aead55676c342161d98e5b55aadbe3ff1c9249a9db29af964553e8525b10e767", "vout": 0, "scriptSig": { "asm": "304402206e4db9dee8449b861e5fdc00ba3bdb80fba8cd52c75489376c54bd65d26262650220453569438e6bc6f957b1f7ff6fff4af2e42edaae1ac885382373d42fa569b17c[ALL|FORKID] 0267d2d1f8b3affffa10b68b2756ba7f6f4efafcadbecd145181016178d00b379b", "hex": "47304402206e4db9dee8449b861e5fdc00ba3bdb80fba8cd52c75489376c54bd65d26262650220453569438e6bc6f957b1f7ff6fff4af2e42edaae1ac885382373d42fa569b17c41210267d2d1f8b3affffa10b68b2756ba7f6f4efafcadbecd145181016178d00b379b" }, "sequence": 4294967295 | 
 |  count (1-9 bytes little endian): | Specifies how many new output UTXOs are being created in the transaction | 01 | "vout": | 
 | Output list (variable length): | The output UTXOs themselves | 9c276bee0000000976a914accd105073775756cc04962bc1e4893694f50c5588ac | "value": 39.999999, "n": 0, "scriptPubKey": { "asm": "OP_DUP OP_HASH160 accd105073775756cc04962bc1e4893694f50c55 OP_EQUALVERIFY OP_CHECKSIG", "hex": "76a914accd105073775756cc04962bc1e4893694f50c5588ac", "reqSigs": 1, "type": "pubkeyhash", "addresses": [ "mwGeB8HZwx22snzWoXRRfL2dhmJ4QXZr9V" ] } | 
 | nLocktime (4 bytes little endian) | Represents either: 1. A block height if the value is < 500,000,000 2. A UNIX Epoch timestamp – the number of seconds elapsed since 01 January, 1970. Note that the nLockTime of a transaction is ignored if all the transaction inputs have the maximum nSequence value (UINT_MAX). | 00000000 |



Input UTXOs consist of 5 serialised elements:
The below table breaks-down the input UTXO from the above example transaction.

 | Element | Description | RAW Hexadecimal | JSON | 
 | :--- | :--- | :--- | :--- |
 | Previous TX hash (32 bytes little endian) | The TXID of the transaction that holds the output UTXO corresponding to this input UTXO | 67e7105b52e8534596af29dba949921cffe3dbaa555b8ed96121346c6755adae | "txid": "aead55676c342161d98e5b55aadbe3ff1c9249a9db29af964553e8525b10e767" | 
 | Previous output index (4 bytes little endian) | The Vout of the output UTXO in the referenced TX corresponding to this input UTXO | 00000000 | "vout": 0, | 
 | Input script length (1-9 bytes little endian) | The number of bytes long the unlocking script is | 6a | 106 (decimal) | 
 | Input script (variable length little endian) | The unlocking script | 47304402206e4db9dee8449b861e5fdc00ba3bdb80fba8cd52c75489376c54bd65d26262650220453569438e6bc6f957b1f7ff6fff4af2e42edaae1ac885382373d42fa569b17c41210267d2d1f8b3affffa10b68b2756ba7f6f4efafcadbecd145181016178d00b379b | "asm": "304402206e4db9dee8449b861e5fdc00ba3bdb80fba8cd52c75489376c54bd65d26262650220453569438e6bc6f957b1f7ff6fff4af2e42edaae1ac885382373d42fa569b17c[ALL|FORKID] 0267d2d1f8b3affffa10b68b2756ba7f6f4efafcadbecd145181016178d00b379b", | "hex": "47304402206e4db9dee8449b861e5fdc00ba3bdb80fba8cd52c75489376c54bd65d26262650220453569438e6bc6f957b1f7ff6fff4af2e42edaae1ac885382373d42fa569b17c41210267d2d1f8b3affffa10b68b2756ba7f6f4efafcadbecd145181016178d00b379b"  | 
 | Sequence number: ‘nSequence' (4 bytes little endian)  | Indicates whether an input is considered ‘finalised’. nSequence is considered final when its value is 0xFFFFFFFF i.e. the maximum value of a 4-byte field | ffffffff | "sequence":4294967295 |


Output UTXOs consist of 3 serialised elements:
The below table breaks-down the new output UTXO(s) from the above example transaction.

 | Element | Description | RAW Hexadecimal (Little Endian) | JSON (Big Endian) | 
 | :--- | :--- | :--- | :--- | 
 | Value (8 bytes little endian) | The value of | 9c276bee0 | "value": 39.999999 | 
 | Output script length (1-9 bytes little endian) | How long the output UTXO locking script is | 19 | 25 (decimal) | 
 | Output script (varInt little endian) | The actual output UTXO locking script | 76a914accd105073775756cc04962bc1e4893694f50c5588ac |

- In computing, **endianness** is the order or sequence of bytes of a word of digital data in computer memory. Endianness is primarily expressed as big-endian or little-endian. A big-endian system stores the most significant byte of a word at the smallest memory address and the least significant byte at the largest.


#### Bitcoin Blocks and SHA-256
What is a Bitcoin Block?
A Bitcoin block is the time stamped package consisting of all transactional activity accumulated between each proof of work solution discovery. Like 
- TXIDs
- **Block IDs are the HASH-256 of the serialised block header.**

The time between blocks is algorithmically regulated to keep the block discovery rate approximating one every ten minutes. 

Each block consists of all the transactions received by whichever node won the right to add the block to the chain, their data payloads if there are any, and a block header containing the following serialised elements:

- **version field:** 4 bytes; little endian
- **previous block hash:** 32 bytes; little endian
- **Merkle Root Hash:** 32 bytes; little endian
- **time field:** 4 bytes; big endian (Unix epoch timestamp)
- **nbits:** 4 bytes; little endian (denotes the current difficulty target nodes must find a proof-of-work solution below)
- **nonce:** 4 bytes; little endian (a field hashers use to cycle through in search of a proof-of-work solution

##### Example Block
The below is an example block deserialised in JSON format
```json
{ 
 "tx": [ 
 "63fde109a6f22a611fe80847eb43f34b1cef0ec095273c3cbf12b0164295796b", 
 "d94f1db2079b1a3f4c4936e0f47434e09ab7eef7a1d35d2fc6af5dd9e87b4f84" 
 ], 
 "hash": "0be14bde7beb17c481b5bc78496ef129c25e16401d78419e789f9629db6057e4", 
 "confirmations": 155, 
 "size": 406, 
 "height": 284, 
 "version": 536870912, 
 "versionHex": "20000000", 
 "merkleroot": "f15b44eebcf7a3c3009cc6acd3bd1dd74f256448936c88ad72f39b55981ddffd", 
 "num_tx": 2, 
 "time": 1647415283, 
 "mediantime": 1647412906, 
 "nonce": 0, 
 "bits": "207fffff", 
 "difficulty": "4.656542373906925e-10", 
 "chainwork": "000000000000000000000000000000000000000000000000000000000000023a", 
 "previousblockhash": "74f52bbca1a9a4f7f13f85cdcd24c7f49650cd1d463421373eb3bcb683868712", 
 "nextblockhash": "7e976012ba0a1cd9eeba8fb57ba41c982b914cffcd17fe46b84c0a0333db79eb", 
 "coinbaseTx": { 
 "txid": "63fde109a6f22a611fe80847eb43f34b1cef0ec095273c3cbf12b0164295796b", 
 "hash": "63fde109a6f22a611fe80847eb43f34b1cef0ec095273c3cbf12b0164295796b", 
 "version": 2, 
 "size": 100, 
 "locktime": 0, 
 "vin": [ 
 { 
 "coinbase": "021c010101", 
 "sequence": 4294967295 
 } 
 ], 
 "vout": [ 
 { 
 "value": 25.00000113, 
 "n": 0, 
 "scriptPubKey": { 
 "asm": "03642fd43b260aab1f0241535c9fabec5445bdc42591a5be9d555a6e33c96a09d8 OP_CHECKSIG", 
 "hex": "2103642fd43b260aab1f0241535c9fabec5445bdc42591a5be9d555a6e33c96a09d8ac", 
 "reqSigs": 1, 
 "type": "pubkey", 
 "addresses": [ 
 "mjvmz3xW4nTbjtKsmbfhsXB9gtm9GBddJg" 
 ] 
 } 
 } 
 ], 
 "blockhash": "0be14bde7beb17c481b5bc78496ef129c25e16401d78419e789f9629db6057e4", 
 "confirmations": 155, 
 "time": 1647415283, 
 "blocktime": 1647415283, 
 "blockheight": 284, 
 "hex": "02000000010000000000000000000000000000000000000000000000000000000000000000ffffffff05021c010101ffffffff0171f9029500000000232103642fd43b260aab1f0241535c9fabec5445bdc42591a5be9d555a6e33c96a09d8ac00000000" 
 }, 
 "totalFees": "-24.99999887", 
 "miner": "\u0002\u001c\u0001\u0001\u0001", 
 "txCount": 2 
 }
```

The below table breaks down the block header for the above block
| Element| Description| RAW Hexadecimal (Little Endian)| JSON (Big Endian)| 
| :--- | :--- | :--- | :--- | 
| Version Field (4 bytes little endian)| The version or network functionality the block was published under| 00000020| "versionHex": "20000000",| 
| Previous Block Hash (32 bytes little endian)| The block ID of the most recent block this block is building upon| 12878683b6bcb33e372134461dcd5096f4c724cdcd853ff1f7a4a9a1bc2bf574| "previousblockhash": "74f52bbca1a9a4f7f13f85cdcd24c7f49650cd1d463421373eb3bcb683868712",| 
| Merkle Root Hash (32 bytes little endian) | The Merkle root of the Merkle tree of transaction IDs for this block| fddf1d98559bf372ad886c934864254fd71dbdd3acc69c00c3a3f7bcee445bf1| "merkleroot": "f15b44eebcf7a3c3009cc6acd3bd1dd74f256448936c88ad72f39b55981ddffd"| 
| Time Field (4 bytes big endian – UNIX Epoch timestamp)| The date and time all the block and transactions within the block are being time-stamped with| 00000000| "time": 1647415283,| 
| nBits| The difficulty target in compact form| ffff7f20| "bits": "207fffff", "difficulty": "4.656542373906925e-10",| 
| Nonce| The "Number Used Once" which allows hashers to iterate through a block header value in search of a proof-of-work solution| 00000000 | "nonce": 0, |

All spendable outputs from previous transactions are held by all nodes in their continuously updated Unspent Transaction Output (UTXO) sets. All new transactions submitted to the node network have their input UTXOs cross-checked against nodes' UTXO sets. 

> Transactions that have been generated on the network and are yet to be timestamped into a block are stored in node memory pools or mempools. 

> Nodes construct a Merkle tree from the transactions in their mempool to calculate the Merkle root to populate the Merkle Root field in the block header.

 > Once a UTXO has been consumed as an input, it's no longer necessary for nodes to keep it in their UTXO sets, and its often pruned -- including its data payload.


##### How is a Bitcoin Block Created?
1. As transactions are broadcast to the BSV network to be added to the blockchain
2. Each node validates them against the block consensus rules, then against their local policies. 
3. If received transactions pass validation, their TXIDs are added to the node's working Merkle Tree.
4. Nodes then send block header templates to their hashing pools with a range of nonce values to be iterated through with the aim of finding a proof-of-work solution. 
5. Once a proof-of-work solution is found, the block ID is finalized, and the resulting ‘proposed’ block is distributed to the rest of the nodes on the network.
6. Once the majority of other network nodes have signalled acceptance of the newly found block by starting to build a block template using its block ID as the previous block hash, the block is considered won, and after 99 more blocks are added on top of it, its block reward UTXO becomes spendable.


#### Proof-of-Work and HASH-256
##### What is Proof-of-Work?
As referenced in the Bitcoin white paper, a proof-of-work system is a signalling mechanism that requires participants to demonstrate they have performed a necessary amount of work before they're allowed to perform a desired action. 

 > In Bitcoin, Pow is achieved by requiring participants (I.e., Bitcoin nodes) use HASH-256 on a serialised block header until they find a resulting message digest that’s less than a provided difficulty target value. 

The preimage, second preimage, and collision resistance properties of SHA-256 – and in turn HASH-256 – ensure the only way nodes are able to find a proof-of-work solution is by brute-force; i.e., by hashing as many versions of the block header as they can as quickly as possible (iterating the nonce value in the block header), until they find a desired message digest.

##### How is Proof-of-Work Used in Bitcoin?
As nodes receive transactions, they continuously update the Merkle root and timestamp in their block header template and send these headers and their range of nonces as mining candidates to hashing pools to be hashed in search of a proof-of-work solution: 

> Mining Candidates - Block Header(Merkle root, timestamp) 

1. A node collects transactions and builds a Merkle Tree
2. The node then builds a block header template 
3. The node then constructs a mining candidate 
4. hash-pools poll nodes using a GMC (Get Mining Candidate) function call

> Nodes currently update their mining candidates about 10 times a second, and most hash-pools poll nodes for a mining candidate every 30 seconds.

To keep block production to an interval of around 10 minutes – which is slow enough to keep orphan races to a minimum and fast enough to force miners to stay competitive – the difficulty target is adjusted by adding or removing leading zeroes, and updating its first non-zero bytes; making the search for a proof-of-work either more or less difficult, respectively. This is called the block discovery rate.

In the early days of Bitcoin, the difficulty was low enough that it was possible to find a proof-of-work solution using a desktop CPU. As Bitcoin matured, it became more and more difficult to find a proof-of-work solution fast enough, so node operators started using graphics processing units (GPUs) to improve their efficiency. More recently, application-specific integrated circuits (ASICs) designed for the sole purpose of calculating SHA-256 message digests have superseded GPUs.

Originally, the block difficulty was adjusted every 2,016 block or about every 2 weeks. However, in 2017, it was changed to recalculate after every block. There is a commitment from BSV node operators to revert the network back to a 2,016-block difficulty calculation rate.

One important point to note is that a block is only considered ‘won’ if the majority of nodes on the network have started using its hash as the previous block hash to search for the next proof-of-work solution. This action of accepting a block by starting to build on the next block is the only consensus mechanism in Bitcoin, and serves as the basis of what must be done in order for a network participant to be considered a node: namely, they must be accepting blocks and successfully finding proof-of-work solutions for subsequent blocks. This creates important economic incentives for nodes to be as efficient and interconnected as possible; allowing the network to scale block sizes and transaction throughput to the levels needed to accommodate any kind of network growth – even if that growth is exponential.



### Walkthrough Implementation of SHA-256 in GoLang
#### Overview of SHA-256

##### Our implementation of SHA-256 follows this design:

1. Input and Preprocessing
- Input
- Message block construction
- Message schedule construction

2. Compression
- Initialization of working variables
- Computation of temporary words and mutation of working variables
- Integrate computed and mutated working variables with initial values

3. Final value construction and output

#### SHA-256 Input and Processing
##### Input
Hash functions aren't very useful unless there's a way to give them an input value. In our GoLang implementation which is a command-line-interface (CLI) program, we can simply take in some input as a string and then represent that input as an array of bytes:

For example, if our input is the string "abc":
```go
massage := []byte("abc");
 
fmt.Printf("Output: %b", message) // the %b prints the output in binary form 4 
//Output: [1100001 1100010 1100011] 
``` 


##### Message Block Creation
Once we have our input, the next step is to turn it into a message block or a series of message blocks that consists of an array of bits that's 448 congruent to 512bits in length.

All this means is we need to pad the bits from our message with enough bits to get it to a length that's 64 bits short of a multiple of 512.

To do this, we first add a 1 bit to denote where the padding bits start within the block, then we add zeros until we reach a bit length that's 64 bits short of a multiple of 512 bits.

The logic is as follows:
```go
package preprocessing 
import "encoding/binary" 
func HowMuchPadding(message []byte) int { 
 messageLength := len(message) 
 result := 0 
 if messageLength%64 < 56 { 
 result = 56 - messageLength%64 
 } else { 
 result = 64 + 56 - messageLength%64 
 } 
 return result 
} 
func AddZeroPaddingBits(messageBlock []byte, message []byte) []byte { 
 zeros := make([]byte, HowMuchPadding(message)) 
 //add separator bit 
 zeros[0] += 0x80 
 return append(messageBlock, zeros...) 
} 
func AddMessageLength(messageBlock []byte, message []byte) []byte { 
 messageLength := len(message) << 3 
 messageLengthInBits := make([]byte, 8) 
 binary.BigEndian.PutUint64(messageLengthInBits[:], uint64(messageLength)) 
 return append(messageBlock, messageLengthInBits...) 
} 
func BuildMessageBlocks(message []byte) []byte { 
 var messageBlock []byte 
 messageBlock = append(messageBlock, message...) 
 messageBlock = AddZeroPaddingBits(messageBlock, message) 
 messageBlock = AddMessageLength(messageBlock, message) 
 return messageBlock 
} 
```
**Check the github repo or BSV Academy for the full code**


### SHA-256 Compression
#### SHA-256 Final Value Construction and Output
**Check the github repo or BSV Academy for the full code**


### RIPEMD-160
#####A brief history of Race Integrity Primitives Evaluation: RIPEMD
In the 1990s, the European Union established the RIPE (Race Integrity Primitives Evaluation) consortium. The consortium was tasked developing better integrity primitives – ways to ensure data integrity – namely hash functions. The most popular hash functions of the time were Ron Rivest’s MD4 and MD5. After evaluating MD4 and MD5, the consortium proposed a stronger version of MD4 called RIPEMD.

RIPEMD is essentially two parallel versions of MD4 run in tandem along with improvements to how bits are shifted and how words are ordered within the message schedules.

Not long after RIPEMD was proposed, the NSA’s SHA-1 was published by NIST as an improvement to MD5.


#### RIPEMD-160
In early 1995, H. Dobbertin found collisions for the last two out of three rounds of RIPEMD, so in 1996, Dobbertin et al. proposed a better version RIPEMD replete with a longer message digest called RIPEMD-160 and RIPEMD-128 (corresponding to the bit length of their outputs). RIPEMD-160 and RIPEMD-128 are still considered secure hash functions today.

Dobbertin chose to base RIPEMD-160 on MD5, like SHA-1, as opposed to MD4. Using MD5, and the longer bit length of the message digest, provides a trade-off between better security for a slight performance hit. Today, with modern processors, this performance hit is negligible.

The basic design philosophy of RIPEMD-160 is to build on the parallel iterations from RIPEMD with more rounds of compression, and in an optimized order. The design secured RIPEMD by making as few changes as possible to RIPEMD so the confidence gained by RIPEMD, MD5, and MD4 was maintained (e.g. keeping message block size consistent). It takes the following approach:

Increase the bit size of the message digest to 160 bits
Increase the number of rounds from three to five
Bit shifts chosen between 5 and 15
Every message block is rotated over different amounts
The shifts applied to each register can’t have a special pattern (e.g. not divisible by 32)
Not too many shift constants divisible by four.
Dobbertin et al. found RIPEMD-160 to be 15% slower than SHA-1, half as fast as RIPEMD, and four times slower than MD4.

Apart from Bitcoin, the most notable use of RIPEMD-160 is within the PGP (Pretty Good Privacy) email encryption standard.


#### Bitcoin Addresses & WIFs
##### Satoshis Are Property
When a transaction is added to the ledger, it acts as a timestamped record of a change of ownership with satoshis (and whatever else is included in the transaction) being the property exchanged. Unlike account-based systems like a bank account where money is added and subtracted to and from the account with each transaction, satoshis aren’t actually ‘sent’ and ‘received' in UTXOs. In much the same way the ownership of gold is transferred without physically moving the gold, the ownership change of satoshis is tagged in UTXOs, and the event itself recorded in transactions. However, it’s important to note that Bitcoin is not digital gold.

Since the BSV ledger is public, the ownership history of all 2,100,000,000,000,000 satoshis can be traced back to their issuance in 2009 by following the chain of digital signatures that link each UTXO and transaction in their history. This means Bitcoin doesn’t have accounts, so identity can be pseudonymously tied to each UTXO allowing macro-level activity to be visible while simultaneously providing individual privacy. It also means there’s a lot more flexibility in how transactions are conducted than account-based systems because a transaction doesn’t need to be submitted by an account holder; it can be submitted by anyone. However, identity is still a fundamental part of communication and UTXOs are still traceable and identity is still attributable when required.

All electronic communications are based on two concepts: using some kind of shared secret or signal so parties know they're talking to the correct people, and attributing identity to documents or messages so parties can attest to their ownership. The two most common methods used to make these two concepts a reality are the Diffie-Hellman key exchange algorithm and digital signatures.

##### Diffie-Hellman Key Exchange and the Discrete Logarithm Problem (DLP)
Much of the modern world is based on the concept of using a secure secret as a 'seed' value to encrypt communications: symmetric end-to-end (E2E) encryption. There are two problems with this approach:

If everything is encrypted, how can attackers be stopped if they gain access to a system -- since system administrators can't tell good network traffic from bad because everything is encrypted.
How do the communicating parties share the secret seed securely.
We explore how Bitcoin addresses the first problem without using encryption in Chapter 7, but the answer to the second problem was found before the internet began, called the Diffie-Hellman key exchange, and it's based on the idea of using asymmetric, public-private, key-pairs to generate a symmetric shared secret, securely.

Published in 1976 by Ralph Merkle, and named after Whitfield Diffie and Martin Hellman, the Diffie-Hellman key exchange method is the earliest publicly known protocol for exchanging asymmetric keypairs. To this day, Diffie-Hellman is used extensively in everything involving end-to-end encryption, and even in the exchange of physical keys via written notes in some instances.

Essentially, the Diffie-Hellman key exchange algorithm works by taking advantage of the unique mathematical properties of the modulo operation, or in other words, the logarithm space of a given power ‘n'. The modulo operation '%' yields the remainder after division: e.g. 4 mod 3 = 1. However, another way of looking at modulo is that it limits results to a certain space. For example, mod 232 or mod 264 are commonly used in computer science to constrain results to 32- or 64-bit integers because those are the largest integers computers can currently handle natively: uint32 and uint64. This means any number, or key, mod n will remain within the space of 0 to n.

First, two communicating parties agree on two numbers: a generator point ‘g', and a certain ‘order’ or modulo space 'n’ which must be a large prime number. Next, each party picks a random number (the larger, the better) which act as their private keys: a and b. They then use their private keys and the generator point g to calculate their public keys: A = ga mod n and B = gb mod n. Following that, they exchange their public keys in clear text over a public medium, and they can do so securely because so long as n is sufficiently large, it's computationaly infeasible to find a or b from A or B even when g is known -- this is called the Discrete Logarithm Problem (DLP). Once the two parties have exchanged their public keys, all they need to do is exponentiate the other party's public key by their private key, and both parties end up with the same shared secret value 'sv': sv = Ab mod n = Ba mod n.

For example, say Alice generates a private key ‘a' (currently these kinds of keys are 2,000 to 4,000 bits long for security), and Bob generates a private key 'b’. Knowing g and n, Alice can calculate her public key as ga mod n, and Bob his public key as gb mod n, and, given a sufficiently large n (again 2,000 to 4,000 bits) it's impossible for anyone to figure out what a or b are without brute-force checking all the possibilities g1 mod n, g2 mod n, … etc.

From there, Alice and Bob can exchange their public keys knowing it won’t expose their private keys, and then they can use the properties of exponentiation to derive the same secret value:

sv = (g^a)^b mod n = (g^b)^a mod n


### Walkthrough Implementation of RIPEMD-160 in GoLang
#### Overview of RIPEMD-160
#### RIPEMD-160 Input and Processing
#### RIPEMD-160 Compression
#### RIPEMD-160 Final Value Construction and Output


### Double Hashing and Bitcoin's Security
#### Why is Double Hashing Used in Bitcoin
#### Hash Functions and Bitcoin's Security Model




## 

