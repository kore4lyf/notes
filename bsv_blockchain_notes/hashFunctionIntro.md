
# Hash Function - by Calistus Igwilo

## Hash Functions
A hash function is a mathematical process that maps a bitstring of any length to a bitstring of a defined length.

- The values returned by a hash function are called hash values, hash codes, digests, or simply hashes.

- Since a hash is a smaller representation of a larger data, it is also referred to as a digest.

- A hash function can take a text or a file such a program and return a hash value of a specific length. e.g If the hash function is SHA-256, it will return a hash value of length 256.

## Characteristics of a Hash Function
1. A one way hash function must be:
   - Preimage resistant
   - Second preimage resistant

You cannot get the original value from the hash value, it one way. A particular value will always return a specific value.

2. A secure cryptographic or ideal hash function must be: 
   - Preimage resistant
   - Second preimage resistant
   - Collision resistant

3. Bitcoin system uses:
   - SHA-256
   - RIPEMD-160


## Applications of Hash Function
- Hash Tables (Data structure)
- Digital Signatures (Private Key)
- Keyed Hashes
- One-way transformations
- Key derivation
- Instead of storing password in clear, mostly all logon processes store the hash values of passwords in the file.
- The Password file consists of a table of pairs which are in the form (user id, h(P)).


## Two fundatmental uses of Hash Functions
- Data Integrity: 
  - Hash function is used to make sure that a data has not been tampared with.
  - Used by Debian to hash a software which returns a fingerprint. If the software has been tampered with, it will be return a finger print that is different from the offical's software.
  
  ```
    openssl sha512 ~/Downloads/debian-11.6.0-xxxxx.iso
  ```
- Data Storage & access efficiency


## Efficient data storage & retrieval
  - Message digests of hash functions are a  fixed length but still unique.
  - Hash functions can take almost anything as an input value.
  - Allows for anything that can be hashed to be used as an index value creating a key-value mapping.


### Hash Functions found in Bitcoin

## Merkel Damguard Hash Function
- Breaks up the input message into fixed-length blocks and then process each block sequentially through a compression function.
- The output of each compression function is then combined with the next block of data, and the process is repeated until all blocks have been processed.
- The final output is a fixed-length digest or have value, unique to the input message. 
- Widely used for building hash function that process input messages of arbitrary length and produce fixed length output.

### SHA-256 

### RIPEMD-160

## What is base58 and why Bitcoin uses it. 
- Base58 is a binary-to-text encoding of data to plain text. 
- It not not a a cryptographic hash, it encodes binary-to-text.
- base58 was used in Bitcoin instead of based-64 to avoid characters such as I, O, 0, l, 1 that visually looks alike.
- base58 has 58 characters and these characters are missing ( I, O, 0, l, 1).


### Base58Check
- Base58Check is a modification of the original Base58 encoding scheme.

> It adds a checksum to the encoded data to detect errores and ensure data integrity.

- The checksum is calculated by taking a hash of the data to be encoded, typically using the SHA-256 algorithm, and then taking the 4 byte of the resulting hash. 
These 4 bytes are appended to the end of the data to be encoded, and the resulting data is then encoded using the Base58 encoding scheme.


## SHA-256 
### History
SHA-256 (Secure Hashing Algorithm)

- Named after it's message digest bit-length, SHA-256 produces a 256-bit message digest. This means SHA-256 has 2^256 possible unique output values.
- 2^256 is approximately equal to 1.1579 * 10^77
- This implies that SHA-256 has such a low probability, of two different input values sharing the same message digest.
- And it has a very good collision resistance that will likely be quite a long time before we have the ability to find a feasible SHA-256 attack.



### HASH 256 (Double SHA-256)
- In Bitcoin, the double hash of SHA-256 is commonly wrotten as SHA-256d or abstracted to a new function called HASH-256.
- Hash-256 is used to:
    - Generate transaction IDs - Include Merkle Roots
    - Generate block header IDs
    - Block header IDs
    - Block header IDs are used to proof-of-work solution.
   



> You can pay to scripts.

