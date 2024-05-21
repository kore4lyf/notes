# Fuel

## Build a Petition Filing dApp on the Fuel Network

We will build a petitions dApp using the Sway programming language on the Fuel blockchain.

Fuel is an L2 blockchain that aims to provide low cost for transactions at a high speed. Fuel believes that modular blockchains are the future. It offers separate execution from consensus and availability of data–which increases the bandwidth capacity significantly. Fuel is supported by Blockchain Capital, Stratos, CoinFund, Spartan, and many more.



### Introduction to Fuel and Sway

Blockchains are evolving from a consolidated design, where consensus, data availability, and execution are closely linked. The trend is shifting towards a modular approach, where execution is distinct from data availability and consensus, as seen in upcoming systems like Celestia.

Fuel is like a powerful layer that makes blockchain technology work faster and handle more data. This layer helps blockchain quickly process data while keeping things secure. It's not just for basic tasks; it can also handle complex actions like those Ethereum-style smart contracts.

#### 3 pillars of Fuel blockchain

1. Parallel Transaction Execution
2. Fuel Virtual Machine (FuelVM)
3. Superior Developer Experience (Sway and Forc)


#### Sway programming languageSway is a domain-specific 

Sway is a domain-specific language for the Fuel Virtual Machine, which is optimized for the Fuel blockchain. It draws inspiration from Rust and aims to bring modern language development and superior performance to the blockchain ecosystem.

### Set Up the Fuel Toolchain

**MacOS**

Let's ensure your MacOS is ready. Open the terminal and run these commands.

1. Install brew using the following command:

```sh
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

2. Install curl using the following command:

```sh
brew install curl
```

3. Install git using the following command:

```sh
brew install git
```

You are done with prerequisites installations for Mac, you can go to Setup the development environment now.

**Linux**

If you have a Linux OS system, run the following commands to set up your system.

1. Update apt-get using the following command:

```sh
sudo apt-get update
```

2. Install cURL using the following command:

```sh
sudo apt install curl
```

3. Install git CLI:

```sh
sudo apt-get install git-all
```

4. Install libssl-dev:

```sh
sudo apt-get install libssl-dev
```

5. Install libclang-dev:

```sh
sudo apt-get install libclang-dev
```

6. Install libpq-dev:

```sh
sudo apt-get install libpq-dev
```

7. Install build-essential:

```sh
sudo apt-get install build-essential
```


#### Setup the development environment

1. First of all, we need to install the Rust in your system. The Fuel blockchain is built on top of the Rust programming language. To install Rust, run the following command in your system.

```sh
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

You might get the following error message after executing the command:

```
curl: (35) schannel: next InitializeSecurityContext failed: Unknown error (0x80092012)
- The revocation function was unable to check revocation for the certificate.
```

It indicates that cURL was unable to check revocation for the certificate (which is the default behavior when it comes to communication with secure websites). The error usually occurs when you are using an anti-virus or equivalent software that offers its own certificate. The quickest solution would be to disable your anti-virus temporarily, run the cURL command once more, and then enable it again.

2. Run the following command to check the version of Rust installed in your system.

```sh
rustup --version
```

3. To install the Fuel toolchain, you need to install the fuelup-init script. If the command asks you to modify the path, press y and “Enter” to modify the path.

```sh
curl --proto '=https' --tlsv1.2 -sSf https://install.fuel.network/fuelup-init.sh | sh
```

or 

```sh
curl -fsSL https://install.fuel.network/ | sh
```

4. Run the following command to check if the installation process was a success.

```sh
fuelup --version
```

5. Make sure your toolchain is up-to-date.

```sh
fuelup self update
```

6. Run the following command to install the beta-5 toolchain.

```sh
fuelup toolchain install beta-5
```

7. Set beta-5 as your default toolchain with the following command:

```sh
fuelup default beta-5
```

8. Run the following command to view the list of toolchains and versions of the tools you are using.

```sh
fuelup show
```