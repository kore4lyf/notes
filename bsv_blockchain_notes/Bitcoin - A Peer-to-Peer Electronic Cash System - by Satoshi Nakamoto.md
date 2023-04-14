# BLOCKCHAIN THEORY

## Bitcoin: A Peer-to-Peer Electronic Cash System - by Satoshi Nakamoto

**Abstract**. 
- A purely peer-to-peer version of electronic cash would allow online payments to be sent directly from one party to another without going through a financial institution. 
- **Digital signatures** provide part of the solution, but the main benefits are lost if a trusted third party is still required to prevent **double-spending**. 
- We propose a solution to the double-spending problem using a peer-to-peer network. 
- The network timestamps transactions by hashing them into an ongoing chain of hash-based proof-of-work, forming a record that cannot be changed without redoing the **proof-of-work**. 
- The longest chain not only serves as proof of the sequence of events witnessed, but proof that it came from the largest pool of CPU power. 
- As long as a majority of CPU power is controlled by nodes that are not cooperating to attack the network, they'll generate the longest chain and outpace attackers. 
- The network itself requires minimal structure. Messages are broadcast on a best effort basis, and nodes can leave and rejoin the network at will, accepting the longest proof-of-work chain as proof of what happened while they were gone.


##### Introduction
- Commerce on the Internet has come to rely almost exclusively on financial institutions serving as trusted third parties to process electronic payments. This method works but suffers from the inherent weaknesses of the trust based model. 
- Non reversable transction is impossible, because financial institution cannot avoid mediating disputes.
- Mediation leads to 
    - increase in transaction cost
    - Limits the minimum practical transaction size
    - It cuts off the possibility for small casual transactions
    - There is a broader cost in the loss of ability to make non-reversible payments for non-reversible services.
    - 

No mechanism exists to make payments over a communications channel without a trusted party. What is needed is an electronic payment system based on cryptographic proof instead of trust, allowing any two willing parties to transact directly with each other without the need for a trusted third party. 
