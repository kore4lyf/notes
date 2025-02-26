// Palindrome

const WORD = "racecar"
let reversedWord = ""

for (i = WORD.length - 1; i >= 0; i--) {
  reversedWord += WORD[i]
}

result = `${reversedWord} is ${WORD === reversedWord ? "a palindrome" : "not a palindrome"}`
console.log(result)