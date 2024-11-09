# Smart Contracts

Smart contracts are programs that can be created and deployed on a blockchain, which makes it possible to access utilities on the blockchain.

Smart contracts unlock the utility aspect of the blockchain.

Smart contracts are contract, contracts are legal binding documents between two parties agreeing to do something.
In real world contracts, there is usually a third party that is involved or a notory, which will ensure the legitimacy of the contract and also enforce any issue that may arise from the contract.

The benefit of using smart contracts is that it eleminates the need for that third party. Everything written in the smart contract can be self executing through the blockchain. (As long as the requirement of the contract are met, the contract executes itself).

Contracts on the Ethereum blockchian are immutable when deployed.

**Contract Signers**: The signers of the contract, these signers are represented by digital signatures. Which is usually signed and authorised by a wallet.

Smart contracts are fully transparent, any can view the contracts, to see if there is any for malicious code, before interacting with it.

**Smart Contract Auditors**: Smart contract auditor goes through a smart contract to see that every thing is written correctly and there is no malicious activity that can be done correctly. They also approve valid smart contracts.

## Thirdweb

Thirdweb is a development framework, which allows you to build, launch and manage your web3 applications and games, all across any EVM compatible blockchain.

## Content

1. Smart contract standards - ERC20, ERC721, ERC1155
2. thirdweb Explore
3. Deploy smart contracts - ERC20, ERC721, ERC1155
4. Deep Dive: thirdweb Dashboard
5. Create custom smart contracts.
6. Deploy & Publish custom smart contracts

## Contracts

Which NFT contract should you choose.

ERC20 - A standard that defines how to create fungible tokens, which are interchangeable with other tokens in their category.

ERC721 - Is a standard for NFT contracts. You can create NFTs with this smart contract, each token generaten from the smart contract, is it's own unique token.

A standard that defines how to create non-fungible tokens (NFTs), which have unique properties that make them different from other tokens in their collection.

ERC1155 - It combine the standard of ERC20 and ERC721 aka semi-fungible token. Just like ERC721 you can create unique tokens, and (ERC20) you can create multiple quantities of that unique token.

A standard that allows a single contract to track multiple EIP-20 and/or EIP-721 tokens.

ERC20:
An ERC20 token cannot be claimable by other, which means that all of the token will be owned by the creator of the contract.
An ERC20 token drop will allow you to release your token to be claimed/minted by others.

ERC721:
There are a couple of ERC721 contracts

- Signature Drop (ERC721A) - Gas-optimized NFT Drop with a claim phase and optional signature-based minting.
- NFT DROP - Standard NFT drop with lazy minting and claim phase.
- NFT Collecttion - A standard ERC712NFT Collection that is not Claimed/minted by others.
- Multiwrap - Bundle tokens together into a new NFT that is transparent. i.e Bundle NFTs together into a new NFT.

## Solidity

### Hello World Contract

```sol
// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.7.0 <0.9.0;

contract HelloWorld {
  string public message;

  constructor() {
    message = "Hello, World";
  }

  function getMessage() public view returns (string memory) {
    return message;
  }
}
```

```sol
// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

contract Sample {
  
  constructor() {

  }
}

```

```sol
string public message;
```

The code above is a declaration of a string variable in solidity. By making the variable public, it can be accessed/read/executed/called by anyone. message is the name of the variable.

```
constructor() {
  message = "Hello, World!";
}
```

A contructor is a function that only runs ones, on deployment.

```
function getMessage() public view returns (string memory) {

}
```

The function above is public because we want it to be accessible for execution, to the public.

We included `view` to the function because it won't change any state of the smart contract.

```returns (string memory)``` - It returns a string and the `memory` means that the return string is temporary and it only exists in the instance of running the function.

### CoinFlip Contract

```sol
// SPDX-License-Identifier: MIT

pragma solidity >=0.7.0 <0.9.0;

contract CoinFlip {
  enum CoinSide { HEADS, TAILS }
  enum FlipResult { WIN, LOSE }

  event Result(address indexed player, CoinSide chosenSide, FlipResult result);
  
  function flipCoin(CoinSide chosenSide) public {
    // Generate a random number
    uint256 randomNumber = uint256(keccak256(abi.encodePacked(block.timestamp, msg.sender))) % 2;
    
    CoinSide result = CoinSide(randomNumber);

    FlipResult flipResult = (chosenSide == result) ? FlipResult.WIN : FlipResult.LOSE;

    emit Result(msg.sender, chosenSide, flipResult);
  }
}
```

#### event

Event is a way of loging information onto the blockchain.

```sol
event Result(address indexed player, CoinSide chosenSide, FlipResult result);
```

The `event` is like a blueprint, in order to use the event it must be called with `emit`.

```sol
emit Result(msg.sender, chosenSide, flipResult);
```

Result of event:
{"player":"0x9278430A2e5088b7659f59D15Bc4961963527b00","chosenSide":1,"result":0}

### TipJar


