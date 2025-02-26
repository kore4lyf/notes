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