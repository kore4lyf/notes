# Unit Testing With Jest in TypeScript

## Software Testing

Software testing is the process of evaluating and confirming that our application does what it is supposed to do.

### Why do we need tests

- To prevent bugs
- Improve performance
- Reduce development cost
- Reliability and customer satisfaction

### Types of Tests

- Unit test: Testing individual units of source code. i.e. function, method, object, module.
- Integration test: Combines different units.
- End to end test: Involves replicating end user behavior.

## Jest

Jest is a javascript framework, a test runner and also an assertion library that gives us powerful set of matchers.

### Installation

```sh
npm i -D jest typescript ts-jest @types/jest ts-node
```

ts-jest - helps jest understand typescript code.

To automatically Create `jest.config.js` file, using the command below.

```sh
npx ts-jest config:init
```

/jest.config.js

```js
const { createDefaultPreset } = require("ts-jest");

const tsJestTransformCfg = createDefaultPreset().transform;

/** @type {import("jest").Config} **/
module.exports = {
  testEnvironment: "node",
  transform: {
    ...tsJestTransformCfg,
  },
  verbose: true
};
```

## Running you Jest Test

/package.json

```json
"scripts": {
  "test": "jest"
}
```

then run

```sh
npm test
```

### Testing Jest

app/BasicUtils.ts

```ts
export const product= (num1: number, num2: number): number => {
  return (num1 * num2)
}
```

test/BasicUtils.spec.ts

```ts
import { product } from "../app/BasicUtils"

describe("BasicUtils test suite", () => {
  it("return the product of 3 and 2", () => {

    const actual = product(3, 2)
    expect(actual).toEqual(6)
  })
})
```

Other Matchers

```ts
expect(actual).toBe(6)
expect(actual).toEqual(6)
expect(actual).toBeLessThan(9)
expect(actual).toBeGreaterThan(4)
```

### Properly written unit test

A well written unit test should undergo the AAA phases.

- A- Arrange: Initializes a small piece of an application it wants to test (SUT)
- A- Act: applies some stimulus
- A- Assert: Observe the resulting behavior

```ts
import { product } from "../app/BasicUtils"

describe("BasicUtils test suite", () => {
  it("return the product of 3 and 2", () => {
    
    // arrange
    const suite = product

    // acting
    const actual = suite(3, 2)

    // asserting
    expect(actual).toBe(6)
    expect(actual).toEqual(6)
    expect(actual).toBeLessThan(9)
    expect(actual).toBeGreaterThan(4)
  })
})
```

### FIRST-U Principle

To write a good unit test, we should apply the FIRST-U

F - Fast: Unit test should be fast
I - Independent: should not depend on other test cases
R - Repeatable: should return the same result each time you run it
S - Self-Validating: determine if the actual output is according to the expected. No manual interpretation.
T - Timely: It can be written anytime but TDD is a good practice
U - Understandable: Clear and easy to understand

### Using only method

Only is used when one wants to test only a particular suite within your code excluding other test cases or suites

- describe.only("Message", () => {}) // Runs only this Test Suite excluding other test case
- it.only("Message", () => {}) // runs only this Test Case excluding other test case

## Example 1

```js
import { authenticateUser, product } from "../app/BasicUtils"

describe("BasicUtils test suite", () => {

  describe("Product of two numbers Test Suite", () => {
    it("return the product of 3 and 2", () => {
      const actual = product(3, 2)
      expect(actual).toEqual(6)
    })
  })

  describe("User authentication", () => {

    it("Return the lower case of username", () => {
      const username = "DEVELOPER"
      const password = "dev"
      const suite = authenticateUser
      const actual = suite(username, password)
      expect(actual.usernameLowercase).toBe("developer")
    })
    
    it("Return the username characters of a valid user", () => {
      const username = "DEVELOPER"
      const password = "dev"
      const suite = authenticateUser
      const actual = suite(username, password)
      expect(actual.usernameCharacters).toEqual(["D", "E", "V", "E", "L", "O", "P", "E", "R"])
    })
    
    // To ensure that the Order of the array value is put into consideration
    it("Return the username characters of a valid user", () => {
      const username = "DEVELOPER"
      const password = "dev"
      const suite = authenticateUser
      const actual = suite(username, password)
      expect(actual.usernameCharacters).toEqual(expect.arrayContaining(["D", "E", "V", "E", "L", "O", "P", "E", "R"])) // Pass
    })

    it("Checks whether a character exists within username character", () => {
      const username = "DEVELOPER"
      const password = "dev"
      const suite = authenticateUser
      const actual = suite(username, password)
      expect(actual.userDetails).toEqual({})

      // expect(actual.userDetails).toBeDefined()
      // expect(actual.userDetails).not.toBeUndefined()

      // expect(actual.userDetails).not.toBeDefined()
      // expect(actual.userDetails).toBeUndefined()
    })

    it("Returns user authentication status", () => {
      const username = "DEVELOPER"
      const password = "dev"
      const suite = authenticateUser
      const actual = authenticateUser(username, password)
      expect(actual.isAuthenticated).toBe(true)
       // expect(actual.isAuthenticated).toBeTruthy()
      // expect(actual.isAuthenticated).not.toBeTruthy()
    })
  })
})
```

You would notice that some variable were declared several times, and you might think that it's best to put them at the top, immediately after describe, but that violates the rule of **Independence** (Unit Test must be independent).

Jest provides us with some hooks in order not keep repeating ourselves.