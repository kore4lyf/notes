# Data Structure - Java Script

## Stack

LIFO - Last In First Out.

functions: push, pop, peek, length

In JavaScript, an array already has all the function needed for a  stack

Example:
**Palindrome** - a word that remain the same when it re-arranged in reverse order.

The optimal Palindrome definition - a word where it's opposite indexes are equal.

```js
let letters = [] // stack

let word = "racecar"

let reversedWord = ""

// Put letters of word into stack
for (var i = 0; i < word.length; i++) {
  letters.push(word[i])
}

// Pop off the stack in reverse order
for (var i = 0; i < word.length; i++) {
  rword += letters.pop()
}

if (rword === word) console.log(word + " is a palindrome.")
else console.log(word + "is not a palindrome")

```

My Refactored Code:

```js
// Palindrome

const WORD = "racecar"
let reversedWord = ""

for (i = WORD.length - 1; i >= 0; i--) {
  reversedWord += WORD[i]
}

result = `${reversedWord} is ${WORD === reversedWord ? "a palindrome" : "not a palindrome"}`
console.log(result)
```

Time Complexity: O(n)
where n is the length of the string.

Space Complexity: O(n)
reversedWord is the same length as input. Therefore result takes O(n) space

**Optimized Solution**: Two-Pointer Technique

```js
// Palindrome

const isPalindrome =(word) => {
  let upperBound = word.length - 1
  let lowerBound = 0

  while(lowerBound !== upperBound ) {
    const leftCharacter = word[lowerBound]
    const rightCharacter = word[upperBound]
        
    if(leftCharacter !== rightCharacter) return false

    upperBound--
    lowerBound++
  }
  return true
}

console.log(isPalindrome("racecar")) // True
console.log(isPalindrome("bike")) // False
```

Time Complexity: O(n/2)
We check only half of the string.

Space Complexity: O(1)
no new strings beyond the input

## Binary Search

```js
// Binary Search

const binarySearch = (array, searchValue) => {
  let lowerBound = 0
  let upperBound = array.length - 1

  while(lowerBound <= upperBound) { // using = here ensure that it will be able to search for the last element in the array.
    
    const midPoint = Math.floor((lowerBound + upperBound) / 2)

    const valueFound = array[midPoint]

    if(valueFound === searchValue) return midPoint

    if(searchValue > valueFound) lowerBound = midPoint + 1 // +1 shifts the lowBound away from the range that has been checked
    else if (searchValue < valueFound) upperBound = midPoint - 1

  }

  return null
}
```