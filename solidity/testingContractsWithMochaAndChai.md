# Testing Contracts With Mocha and Chai

Testing a  smart contract is about thinking like an attacker, a user, and a debugger.

**Why Testing is Critical**:
Smart contracts are immutabel once deployed, meaning any bugs or vulnerablilities are permanent and can lead to catastrophic losses.

Testing ensures code behaves as expected, it ensure:

- Correctness - contract behaves as intended
- Security - Vulnerabilities like reentrancy or interger flow are caught.
- Gas Efficiency - Optimized Code saves users money.
- Edge Case Handling - Unusual or unexpected inputs are handled.

**Types of Tests**:

1. Unit Tests: Test individual function in isolation.
2. Integration Tests: Test how multiple function or contracts interacts.
3. Edge Case Tests: Test unusual or extreme inputs.
4. Security Tests: Simulate attacks (e.g. Reentrancy, front-running)

**Role of Mocha and Chai**:

- Mocha - A javascript test framework for structuring and running tests.
- Chai - An assertion library for validating outcomes.

## Mocha Basics

- **describe**: Groups related test (Like a folder)
- **it**: Defines a single test case (Like a file)

**HOOKS**:

- **before**: Runs once before all tests in a describe
- **after**: Runs once after all tests
- **beforeEach**: Runs before each **it**.
- **afterEach**: Runs after each **it**.

```js
describe("My Contract", () => {
  before(() => {
    console.log("Setting up...")
  })
  
  beforeEach(() => {
    console.log("Before each test")
  })

  it("Should do something", () => {
    // Test Logic here
  })

  it("Should do another thing", () => {
    // Another test
  })
})
```

## Chai Basics

Chai checks if your expectations match reality. It has three styles:

- assert: Classic, straight forward (e.g. assert.equal(3, 3), assert.equal(a,b))
- expect: Fluent and readable (e.g. expect(3).to.equal(3))
- should: Mutates objects (e.g. (3).should.equal(3))

```js
const { expect } = require("chai")

expect(5).to.equal(5)
expect(true).to.be.true
expect([1, 2]).to.have.lengthOf(2)
```

Common Assertions:

- Equality: `.to.be.equal()`
- Boolean: `.to.be.true`, `.to.be.false`
- Existence: `.to.exist`, `.to.be.null`
- Reverts: `to.be.revertedWith("Error message")`

## Writing your first test

Counter.sol

```sol
// SPDX-License-Identifier: MIT

pragma solidity ^0.8.19;

contract Counter {
  uint256 public count;

  function increment() public {
    count += 1;
  }
}
```

test/Counter.test.js

```js
const { expect } = require("chai")
const { ethers } = require("hardhat")

describe("Counter", () => {
  let Counter, counter

  beforeEach(async () => {
    Counter = await ethers.getContractFactory("Counter")
    counter = await Counter.deploy()
    await counter.deployed()
  })

  it("Should initialize count to 0", async () => {
    expect(await counter.count()).to.equal(0);
  })

  it("Should increament count by 1", async () => {
    await counter.increment()
    expect(await counter.count()).to.equal(1)
  })
})
```

```sh
npx hardhat test
```

### Advanced Testing Scenerios

1. Edge Cases

For Example: From test/Counter.test.js

```js
it ("Should handle multiple increments", async () => {
  await counter.increament()
  await counter.increament()
  expect(await counter.count()).to.equal(2)
})
```

2. Reentrancy Attacks

Simulate a malicious contract calling back:

```sol
contract Reentrant {
  Counter public counter;

  constructor(Counter _counter) {
    counter = _counter;
  }

  function attack() public {
    counter.increment();
  }
}
```

3. Gas Optimization

```js
it("Should use reasonable gas", async () => {
  const tx = await counter.increment()
  const receipt = await tx.await()
  expect(receipt.gasUsed).to.be.below(50000);
})
```
