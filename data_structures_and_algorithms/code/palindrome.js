// Palindrome

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
isPalindrome("abba") // false     