# Data Structure - Java Script

## Stack

LIFO - Last In First Out.

functions: push, pop, peek, length

In JavaScript, an array already has all the function needed for a  stack

Example:
**Palindrome** - a word that remain the same when it re-arranged in reverse order.

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
const WORD = "raceCar"

function isPalindrome(word) {
  let left = 0
  let right = word.length - 1

  while (left <= right) {
    if (word[left] !== word[right]) {
      return false
    }

    console.log("Left: ", left);
    console.log("Right: ", right);
  }
}

console.log(`${reversedWord} is ${isPalindrom(WORD) ? "a palindrome" : "not a palindrome"}`)
// "racecar is a palindrome"
```

Time Complexity: O(n/2)
We check only half of the string.

Space Complexity: O(1)
no new strings beyond the input