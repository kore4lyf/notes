# FlashLoan using Aave lendng pool

In this course we'd be writing a smart contract that will be executing a flash loan using the AAVE Defi protocol.

Flash loans allow you borrow as many tokens as you want without collateral, as long as you pay back with a small fees, all within the same transaction.

**Common use case**:

1. **Refinancing** existing loans
2. Arbitrange

Arbitrage: find a token on one exchange, trade it at a discount relative to another exchange (Buy low and sell high).

With flash loan arbitrage, you can borrow funds with no collateral, in order to buy and sell tokens on different exchanges, pay the loan back and walk away with the profit. If you don't have enough funds to pay back the loan, the entire transaction get reverted.

## Architecture Overview

Client Smart Contract

- flashLoanSimple(...args) (REQUEST FUND)
- 1,000 USDC (Fund loan) (RECEIVE FUND)

  executeOperation()
  - Perform arbitrage
  - Approve tranfer of borrowed amount + loan fee
  - 1000.5 USDC

## The code

1. Create a new folder "flash-loans"
run

```sh
npm install hardhat
npx hardhat init
npm i @aave/core-v3 dotenv
```


1. FlashLoan.sol
2. FlashLoanReceiverBase.sol
3. ILendingPoolAddressesProvider.sol
4. IFlashLoanReceiver.sol
5. ILendingPool.sol
6. Withdrawable.sol

---------------------------------------------------------------------------

>ALL THE CODES WILL BE GIVEN IN THE CONTRACTS FILES.

To summarize, we start by importing the dependencies required to execute our Flash Loan. 
Some of these dependencies are called abstract contracts. 
An abstract contract has at least one function that isn’t implemented. 
You can think of it as a blueprint of a house. A builder uses this blueprint to make a house. However, in our analogy the blueprint is an abstract contract, you are the builder, and the house is the derived contract.

In our case the Flash Loan contract is using an abstract contract called FlashLoanReceiverBaseV1. 
It provides necessary implementation details such as repayment of the Flash Loan.

---------------------------------------------------------------------------

> Now to break down the code line by line.

---------------------------------------------------------------------------

1. First, we have to define the solidity compiler version. In this case, it's ^0.6.0.
     2-4. Importing dependencies for the smart contract
      6. The FlashLoanV1 contract is inheriting from the FlashLoanReceiverBaseV1 contract.
      8. We passed the address of one of the Lending Pool Providers of Aave. In this case, we are providing the address of DAI Lending Pool.
     13. We have defined a function called flashLoan. It takes the address of the asset we want to flash loan. In this case the asset is DAI.
14. We don't have any need of data for the flash loan, so we are passing an empty string.
15. We are defining the number of DAI(in terms of wei which is 10^18) we want to loan.
16. We initialize the LendingPool interface which is ILendingPoolV1 provided by Aave so that we can call the flashLoan function.
17. Finally, we call our flashLoan function. The function takes 4 main parameters. First we pass the address which will receive the loan. In our case, it's our own contract. Second, we pass the address of the asset. In our case, it's the address of DAI in the Ethereum Sepolia network. Third, we pass the amount of assets, and in our case it's 1 “ether” amount of units(or 10^18 in “wei” units). Last but not least, we pass the data value which in our case is an empty string.
24-31 Next, we define the second function which is executeOperation. It’s where we utilize the flash loan. It’s called internally after the flashLoan function is successfully executed. It takes 4 main parameter which are -
        1. The address of reserve to which we will have to pay back the loan.
        2. The amount of asset
        3. The fee that is charged by the protocol
        4. Additional parameter which is used internally by the function.
1.  It checks if we received the appropriate amount of loan or else it will throw an error message.
2.  At this point, this is where you would implement logic for any arbitrary use case.
3.  We add the fee along with the loan amount by using add function provided by SafeMaths library.
41.At last we pay back the total debt or loan amount back to the lending pool.

---------------------------------------------------------------------------

> Deploying The Contract

First, open your MetaMask and set your network to "Ethereum Sepolia Test Network".
Make sure you have Ethereum Sepolia test ether to run the following transcation, please note this is Ethereum Sepolia test ether is to pay the gas fees for the flashloan.
Get Ethereum Sepolia test here if you do not have any test ether
```[NOTE: DO NOT OVERLOAD YOUR WALLET WITH TEST ETHER PLEASE]```
```Ethereum Sepolia TEST ETHER LINK: https://faucets.chain.link/Ethereum Sepolia```
     ```1. Enter your account addrss.
      2. Select 0.1 test ETH and then check the confirmations.
      3. Wait for a few seconds and test ETH will be sent to the address what you had put.```

---------------------------------------------------------------------------

Switch to the "Solidity Compiler" tab. Set the compiler to 0.6.6 and click on "Compile FlashLoan.sol".
If you have followed all the steps you should see some warnings but no error message.
Now, we are all set to deploy the contract to the Ethereum Sepolia network. Switch to "Deploy & Run Transactions" tab. Under the environment field, change it from JavaScript VM to Injected Web3. This should open MetaMask asking for your permission.
Make sure the “CONTRACT” field is set to FlashLoan.sol. Provide the address of LendingPool in the text field that is next to the deploy button. In our case, it will be ```0x506B0B2CF20FAA8f38a4E2B524EE43e1f4458Cc5.``` Then click “Deploy”. It should open up MetaMask.
```Address of lending pool = 0x506B0B2CF20FAA8f38a4E2B524EE43e1f4458Cc5```

---------------------------------------------------------------------------

> Funding The Flash Loan

Under the new “Deployed Contracts” tab, you will be able to copy the deployed contract's address. We will come back to this step later; in the meantime we need to add some DAI to our Flash Loan contract. This is because Flash Loans need funds in the contract to successfully execute.
```⚠️For that, you can jump to this link to get some DAI tokens: https://testnet.aave.com/faucet/DAI ⚠️.```
Be sure to connect to the “Aave v2 Market” with a little “K” in the top right corner. Click on the faucet, paste in your MetaMask wallet address, and wait for confirmation.
After obtaining confirmation, we are going to add the DAI token to MetaMask. For that, open your MetaMask. Click on “Add Token” at the bottom. In the “Token Contract Address” field enter ```0xFf795577d9AC8bD7D90Ee22b6C1703490b6512FD```. This is the contract address for DAI in Ethereum Sepolia. After clicking “Next”, It should display the DAI you got from the faucet earlier.
```DAI Token Contract Address = 0xFf795577d9AC8bD7D90Ee22b6C1703490b6512FD```

Next up, click on the DAI token. Click on “Send” and it should open a window
Enter our Flash Loan’s contract address, which we found out where to obtain earlier. Enter the amount which we want to send. In our case, we will send 10 DAI. Then click on "Next". Click on "Confirm"! You have now successfully given your Flash Loan contract 10 DAI.

> Executing The Flash Loan

Head back to Remix. Under the deployed Flash Loan contract, there’s another “flashloan” text field. This field takes a contract address of the asset we want to use. In our case it’s the Ethereum Sepolia Testnet’s DAI contract, which is ```0xFf795577d9AC8bD7D90Ee22b6C1703490b6512FD```. With that field correctly filled in, you can now hit the “transact” button below.
Upon clicking the button, MetaMask should pop up asking for approval of the transaction. Confirm the transaction and you should be greeted by a success message. In Remix’s terminal you should see all the transcation details, and there you will be able to find this transcation(txn)hash then copy the it again go to: <https://Ethereum Sepolia.etherscan.io/> and then paste the txn hash in the search bar.
```⚠️Under “Tokens Transferred”, you should see three different transactions.⚠️```

1. The first transaction highlights the transfer of 1 DAI from LendingPool to our contract.
2. The second transaction indicates the payback of 1 DAI along with the fees back to the lending pool.
3. The third transaction shows interest generated DAI which has its separate utility.

---------------------------------------------------------------------------
> CONCLUSION
We were successfully able to write the smart contract for a Flash Loan! We were able to borrow DAI from the pool, pay the Flash Loan fee, and then repay the borrowed amount all in a single transaction. You just borrowed money with no collateral!
---------------------------------------------------------------------------

```If you enjoyed this full tutorial do consider following me on github as well as on my instagram!!```

---------------------------------------------------------------------------

> 0x592eF244F8924be9F3F8803f8d639392f465Ac51
