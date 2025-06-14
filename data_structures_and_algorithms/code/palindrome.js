// Palindrome
// Two pointer technique is the approach
// set upperBound and lowerBound
// Create a while(lb <= ub) loop that decrements the ub and increments db

const isPalindrome =(word) => {
  let upperBound = word.length - 1
  let lowerBound = 0
  
  while(lowerBound <= upperBound ) {
        
    if(word[lowerBound] !== word[upperBound]) return false

    lowerBound++
    upperBound--
  }
  return true
}

isPalindrome("racecar") // true
isPalindrome("bike") // false
console.log(isPalindrome("abba")) // true