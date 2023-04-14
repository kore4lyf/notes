
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

