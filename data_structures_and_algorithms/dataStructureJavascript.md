# Data Structure - Java Script

## Stack

LIFO - Last In First Out.

functions: push, pop, peek, length

In JavaScript, an array already has all the function needed for a  stack

Example:
**Palindrome** - a word that remain the same when it re-arranged in reverse order.

While the algorithm is a good example of a stack, it's not an optimal solution for finding a whether a word is a palindrome or not.

The optimal Palindrome definition - a word where it's opposite indexes are equal.

```js
const letters: string[] = [] // stack
const word: string = "racecar"
let rword: string = ""

// Put letters of word into stack
for(let i:number =0; i<word.length; i++) {
  letters.push(word[i])
}

// Pop off the stack in reverse order
for(let i:number =0; i<word.length; i++) {
  rword += letters.pop()
}

if(rword === word) {
  console.log(word + " is a palindrome.")
} else {
  console.log(word + " is not a palindrome.")
}

```

My Refactored Code:

```js
// Palindrome

const WORD = "racecar"
let reversedWord: string = ""

for (let i: number = WORD.length - 1; i >= 0; i--) {
  reversedWord += WORD[i]
}

const result: string = `${reversedWord} is ${WORD === reversedWord ? "a palindrome" : "not a palindrome"}`
console.log(result)
```

Time Complexity: O(n)
where n is the length of the string.

Space Complexity: O(n)
reversedWord is the same length as input. Therefore result takes O(n) space

**Optimized Solution**: Two-Pointer Technique

```js
// Palindrome

const isPalindrome =(word: string | number): boolean => {
  word = word.toString()
  let upperBound: number = word.length - 1
  let lowerBound: number = 0

  while(lowerBound !== upperBound ) {
    const leftCharacter: string = word[lowerBound]
    const rightCharacter: string = word[upperBound]
        
    if(leftCharacter !== rightCharacter) return false

    upperBound--
    lowerBound++
  }
  return true
}

console.log(isPalindrome("racecar")) // true
console.log(isPalindrome("bike")) // false
console.log(isPalindrome(1234321)) // true
```

Time Complexity: O(n/2)
We check only half of the string.

Space Complexity: O(1)
no new strings beyond the input

### Implementing your own Stack

```js
class Stack {
  length: number
  storage: { [index: number]: number | string }
  
  constructor() {
    this.length = 0
    this.storage = {}
  }

  push = (value: number | string): number => {
    this.storage[this.length] = value
    return ++this.length
  }

  pop = () => {
    if(this.length === 0) return undefined

    this.length--;
    const deletedItem = this.storage[this.length]
    delete this.storage[this.length]
    return deletedItem
  }

  size = () => this.length

  peak = () => this.storage[this.length - 1]
}

let stack = new Stack()
console.log(stack.push("one")) // 1
console.log("stack: ", stack.storage) // stack:  { '0': 'one' }
console.log(stack.push("two")) // 2
console.log("stack: ", stack.storage) // stack:  { '0': 'one', '1': 'two' }
console.log(stack.push("three")) // 3
console.log("stack: ", stack.storage) // stack:  { '0': 'one', '1': 'two', '2': 'three' }
console.log(stack.pop()) // three
console.log("stack: ", stack.storage) // stack:  { '0': 'one', '1': 'two' }
console.log(stack.length) // 2
console.log(stack.peak()) // two
```

## Sets



## Binary Search

```js
// Binary Search

const binarySearch = (array: number[], searchValue: number): number | null => {
  const isSearchValueWithinArray = searchValue >= array[0] && searchValue <= array[array.length - 1]
  
  if(!isSearchValueWithinArray) return null


  let lowerBound: number = 0
  let upperBound: number = array.length - 1

  while(lowerBound <= upperBound) { // using = here ensure that it will be able to search for the last element in the array.
    
    const midPoint = Math.floor((lowerBound + upperBound) / 2)

    const valueFound = array[midPoint]

    if(valueFound === searchValue) return midPoint

    if(searchValue > valueFound) lowerBound = midPoint + 1 // +1 shifts the lowBound away from the range that has been checked
    else if (searchValue < valueFound) upperBound = midPoint - 1

  }

  return null
}

const numbers = [1,3,5,8,13,19,25,29]

console.log(binarySearch(numbers, 9))
console.log(binarySearch(numbers, 13))
console.log(binarySearch(numbers, 1))
console.log(binarySearch(numbers, 29)) // Ensures algorithm can find last item in the array

```
