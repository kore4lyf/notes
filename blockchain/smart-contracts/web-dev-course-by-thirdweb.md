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

## Overview

Install the CLI package globally to use the commands anywhere on your system.

Note: If you do not wish to install it globally, you can prefix each command with npx. i.e. ```npx thirdweb <command>```.

```sh
npm i -g thirdweb@latest

# OR

npm i -g thirdweb@latest
```

Once installed, you can view the full list of available commands by running:

```sh
thirdweb
```

To create an app or a contract

```sh
npx thirdweb@latest create
```

From there you can select a contract, you have an option select an empty or a prebuilt contract of ERC20, ERC721 and ERC1155.

To deploy your  :

```sh
npx thirdweb@latest deploy -k <Secrete API Key>
```

## Contracts
1. **HelloWorld** - This contract has a get message function, that returns "Hello, world!" when it is called.
2. **CoinFlip** - This contract mimics coin filp a guess game, where a user make a head (0) or tail (1) guess.
3. **TipJar** - It mimics a crowd funding contract where a user can make donation or make a tip, and the contract owner can withdraw all the donations or tips from the contract.
4. **MessageBoard** - A simple contract that allows people to create a message and store it on blockchain. They will also be able to retrieve the massage with the contract.
5. **ProfileStatus** - A contract that stores a user's web3 addresses in form of a profile and all users to check the status of their profile (whether they have created their profile or not).

## Contract Extensions

Thirdweb allows you to add chunks of prebuilt contracts in your code.

```sol
pragma solidity >=0.7.0 <0.9.0;

import "@thirdweb-dev/contracts/extension/ContractMetadata.sol";

contract TipJar is ContractMetadata {
  address public owner;

  constructor() {
    owner = msg.sender;
  }
  
  ...

  function _canSetContractURI() internal view virtual override returns (bool){
    return msg.sender == owner;
  }
}

```

The contract extension above allows you to add meta data to yougr code.

## Adding your own prebuilt contract to thirdweb

```sh
npx thirdweb publish -k <Secret Key>
```


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

```sol
constructor() {
  message = "Hello, World!";
}
```

A contructor is a function that only runs ones, on deployment.

```sol
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

#### modifier

modifiers are used to change the behaviour of a function.

### TipJar

```sol
// SPDX-License-Identifier: MIT

pragma solidity >=0.7.0 <0.9.0;

contract TipJar {
  address public owner;

  event TipReceived(address indexed tipper, uint256 amount);
  event TipWithdrawn(address owner, uint256 amount);

  constructor() {
    // Sets contract deployer as the owner 
    owner = msg.sender;
  }

  modifier onlyOwner() {
    require(msg.sender == owner, "Only the owner can call this function.");
    _;
  }

  function tip() public payable {
    require(msg.value > 0, "You must send a tip to use this function.");
    emit TipReceived(msg.sender, msg.value);
  }

  function withdrawTips() public onlyOwner {
    uint256 contractBalance = address(this).balance;
    require(contractBalance > 0, "There are no tips to withdraw.");

    payable(owner).transfer(contractBalance);
    emit TipWithdrawn(owner, contractBalance);
  }

  function getBalance() public view returns(uint256) {
    return address(this).balance;
  }
}
```


### Tip Jar with Thirdweb's contract metadata extension

```sol
// SPDX-License-Identifier: MIT

pragma solidity >=0.7.0 <0.9.0;

import "@thirdweb-dev/contracts/extension/ContractMetadata.sol";

contract TipJar is ContractMetadata {
  address public owner;

  event TipReceived(address indexed tipper, uint256 amount);
  event TipWithdrawn(address owner, uint256 amount);

  constructor() {
    // Sets contract deployer as the owner 
    owner = msg.sender;
  }

  modifier onlyOwner() {
    require(msg.sender == owner, "Only the owner can call this function.");
    _;
  }

  function tip() public payable {
    require(msg.value > 0, "You must send a tip to use this function.");
    emit TipReceived(msg.sender, msg.value);
  }

  function withdrawTips() public onlyOwner {
    uint256 contractBalance = address(this).balance;
    require(contractBalance > 0, "There are no tips to withdraw.");

    payable(owner).transfer(contractBalance);
    emit TipWithdrawn(owner, contractBalance);
  }

  function getBalance() public view returns(uint256) {
    return address(this).balance;
  }

  function _canSetContractURI() internal view virtual override returns (bool){
    return msg.sender == owner;
  }

}
```

### Profile Status

```sol
// SPDX-License-Identifier: MIT

pragma solidity ^0.8.17;

import "@thirdweb-dev/contracts/extension/ContractMetadata.sol";

contract ProfileStatus is ContractMetadata {
  address public owner;

  constructor() {
    owner = msg.sender;
  }
  
  struct Status {
    string statusMessage;
    bool exists;
  }

  mapping(address => Status) public userStatus;

  event StatusCreated(address indexed wallet, string status);
  event StatusUpdated(address indexed wallet, string newStatus);
  
  function createStatus(string calldata initialStatus) public {
    require(!userStatus[msg.sender].exists, "Status already exists.");

    userStatus[msg.sender] = Status({
      statusMessage: initialStatus,
      exists: true
    });

    emit StatusCreated(msg.sender, initialStatus);
  }

  function updatedStatus(string memory newStatus) public {
    require(userStatus[msg.sender].exists, "Status must be created.");

    userStatus[msg.sender].statusMessage = newStatus;

    emit StatusUpdated(msg.sender, newStatus);
  }

  function getStatus(address wallet) public view returns (string memory) {
    require(userStatus[wallet].exists, "Status does not exist.");

    return userStatus[wallet].statusMessage;
  }

  function _canSetContractURI() internal view virtual override returns (bool){
    return msg.sender == owner;
  }
}
```

### Message Board

```sol
// SPDX-License-Identifier: MIT

pragma solidity ^0.8.17;

contract MessageBoard {
  address public owner;
  string[] public messages;

  event NewMessage(address indexed sender, string message);

  constructor() {
     owner = msg.sender;
  }

  function postMessage(string memory message) public {
    messages.push(message);
    emit NewMessage(msg.sender, message);
  }

  function getMessagesCount() public view returns (uint256) {
    return messages.length;
  }

  function getMessage(uint256 index) public view returns (string memory) {
    require(index < messages.length, "Index out of bounds.");
    return messages[index];
  }
}
```

## ThirdWeb SDK (Create & Setup Web3 Apps)

If you want to create a new project:

General, Allow you select the type library or frame work you want to install

```sh
npx thirdweb create app
```

or clone the the Next.js or Vite starter repo:

Next.js Starter Repo

```sh
git clone https://github.com/thirdweb-example/next-starter
```

Vite Starter Repo

```sh
git clone https://github.com/thirdweb-example/vite-starter
```

### Existing Projects: 

Install the thirdweb packages in your project

```sh
npm i thirdweb
```

#### Build your app

- **Setup the ThirdwebProvider**:

At the root of your application, wrap your app with a ThirdwebProvider component. This keeps state around like the active wallet and chain.

```tsx
// src/main.tsx
import { ThirdwebProvider } from "thirdweb/react";
 
function Main() {
  return (
    <ThirdwebProvider>
      <App />
    </ThirdwebProvider>
  );
}
```

- **Create the thirdweb client**:

Head to the thirdweb dashboard, create your account (or sign in), and click Projects to see all your projects.

Create a Project with localhost included in the allowed domains. Securely store your secret key and copy your client id for use in the next step.

Create a .env file and add your client ID there. Then create a client.ts file with the following content:

```ts
// src/client.ts
import { createThirdwebClient } from "thirdweb";
 
export const client = createThirdwebClient({
  clientId: process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID,
});
```

You only need to define the client once. Exporting the client vartiable will allow you to use anywhere in your app.

- **Connect a wallet**:
There are two ways to connect users to your app:

The prebuilt ConnectButton or ConnectEmbed components.
Your own custom button.
In this guide, we'll use the prebuilt ConnectButton component.

```tsx
// src/app.tsx
import { client } from "./client";
import { ConnectButton } from "thirdweb/react";
 
function App() {
  return (
    <div>
      <ConnectButton client={client} />
    </div>
  );
}
```

The ConnectButton and ConnectEmbed components come with built-in support for 350+ of wallets, 2000+ chains, fiat on-ramping, crypto swapping, transaction tracking, and more.

You can also build your own custom button using the ```useConnect``` hook.

- Get the connected wallet information
Once the user has connected their wallet, you can get the wallet address, balance, and other details.

```tsx
import { useActiveAccount, useWalletBalance } from "thirdweb/react";
 
export default function App() {
  const account = useActiveAccount();
  const { data: balance, isLoading } = useWalletBalance({
    client,
    chain,
    address: account.address,
  });
 
  return (
    <div>
      <p>Wallet address: {account.address}</p>
      <p>
        Wallet balance: {balance?.displayValue} {balance?.symbol}
      </p>
    </div>
  );
}
```

- **Read blockchain data**:
You can read contract state with the useReadContract hook. This works with any contract call. Simply specify the solidity function signature to get a type safe API for your contract.

```sol
import { client } from "./client";
import { getContract } from "thirdweb";
import { sepolia } from "thirdweb/chains";
import { useReadContract } from "thirdweb/react";
 
const contract = getContract({
  client,
  address: "0x...",
  chain: sepolia,
});
 
export default function App() {
  const { data, isLoading } = useReadContract({
    contract,
    method: "function tokenURI(uint256 tokenId) returns (string)",
    params: [1n], // type safe params
  });
 
  return (
    <div>
      <p>Token URI: {data}</p>
    </div>
  );
}
```

Using Extensions you can do powerful queries like getting all the owned NFTs of a specific address, and generate performant typesafe functions for your contract.

```sol
import { client } from "./client";
import { getContract } from "thirdweb";
import { sepolia } from "thirdweb/chains";
import { useReadContract } from "thirdweb/react";
import { getOwnedNFTs } from "thirdweb/extensions/erc721";
 
const contract = getContract({
  client,
  address: "0x...",
  chain: sepolia,
});
 
export default function App() {
  const { data: ownedNFTs } = useReadContract(getOwnedNFTs, {
    contract,
    address: "0x...",
  });
 
  return (
    <div>
      <p>Owned NFTs: {ownedNFTs}</p>
    </div>
  );
}
```

- **Execute transactions**:
You can execute transactions with the useSendTransaction hook. Prepare a transaction with the prepareContractCall function and pass it to the sendTransaction function.

```sol
import { client } from "./client";
import { getContract } from "thirdweb";
import { sepolia } from "thirdweb/chains";
import { useSendTransaction } from "thirdweb/react";
 
const contract = getContract({
  client,
  address: "0x...",
  chain: sepolia,
});
 
export default function App() {
  const { mutate: sendTransaction } = useSendTransaction();
 
  const onClick = async () => {
    const transaction = prepareContractCall({
      contract,
      method: "function mint(address to)",
      params: ["0x..."], // type safe params
    });
    sendTransaction(transaction);
  };
 
  return (
    <div>
      <button onClick={onClick}>Mint</button>
    </div>
  );
}
```

Using Extensions you can do more complex transactions like a claim, batch mint, and more. These will handle all the preprocessing needed before calling the contract.

```sol
import { client } from "./client";
import { getContract } from "thirdweb";
import { sepolia } from "thirdweb/chains";
import { useSendTransaction } from "thirdweb/react";
import { mintTo } from "thirdweb/extensions/erc721";
 
const contract = getContract({
  client,
  address: "0x...",
  chain: sepolia,
});
 
export default function App() {
  const { mutate: sendTransaction } = useSendTransaction();
 
  const onClick = async () => {
    // this mint extension handles uploading metadata to IPFS and pining it
    const transaction = mintTo({
      contract,
      to: "0x...",
      nft: {
        name: "NFT Name",
        description: "NFT Description",
        image: "https://example.com/image.png",
      },
    });
    sendTransaction(transaction);
  };
 
  return (
    <div>
      <button onClick={onClick}>Mint</button>
    </div>
  );
}
```

