# Hard Hat

**To install**

```sh
npm i hardhat -g
```

**Create a sample project**:

```sh
npx hardhat init
```

**Running tasks**
To first get a quick sense of what's available and what's going on, run npx hardhat in your project folder:

```sh
npx hardhat
```

**Testing your contracts**:
Your project comes with tests that use Mocha, Chai, Ethers.js and Hardhat Ignition.

If you take a look in the test/ folder, you'll see a test file.

**To compile it, simply run**:

```sh
npx hardhat compile
```

You can run your tests with

```sh
npx hardhat test
```

**Deploying your contracts**:

```sh
npx hardhat ignition deploy <modulepath e.g. ./deploy.ts or ./ignition/modules/lock.ts
```

**Connecting a wallet or Dapp to Hardhat Network**:

```sh
npx hardhat node
```

This will expose a JSON-RPC interface to Hardhat Network. To use it connect your wallet or application to [http://127.0.0.1:8545](http://127.0.0.1:8545).

If you want to connect Hardhat to this node, for example to run a deployment against it, you simply need to run it using --network localhost.

To try this, start a node with npx hardhat node and re-run the deployment using the network option:

```sh
npx hardhat ignition deploy ./ignition/modules/Lock.ts --network localhost
```

To run Hardhat Network on specific port and allow incoming requests from a specific network interface or hostname, run npx hardhat node --hostname 127.0.0.1 --port 8545.

If you want to allow incoming requests from anywhere, including external ips, use --hostname 0.0.0.0.

## Compile

```npx hardhat compile```

## Run unit tests

```npx hardhat test```

## Start local node

```npx hardhat node```

## Deploy to Rinkeby

```npx hardhat run --network rinkeby scripts/deploy.js```

## Verify smart contract on Etherscan

```npx hardhat verify --network rinkeby "address-of-contract" "Constructor argument 1"```

## Start hardhat console on localhost

```npx hardhat console --network localhost```
