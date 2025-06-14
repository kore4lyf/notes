// Sorting Algorithm
// Bubble Sort has an efficiency of O(N2)

// Two pointer
// Swap (in First loop, the last item in the array is guaranteed to be in order)
// swapped ( Without Swapped check there would be no best case scenario)
// Two loop out
  // Inner - Swaps
  // Outer - Repeat Swap
const bubbleSort = (arr, order="asc") => {
  arr = [...arr] // doesn't mutate the original data
  const arrLen = arr.length - 1
  let sorted = true
  let steps = 0

  while(sorted) {
      // Point to the first two value
    let upperBound = 0
    let lowerBound = 1
    sorted = false

    while(upperBound < arrLen) {
      steps++
      if(order === "desc") {
        if (arr[upperBound] < arr[lowerBound]) { // Swap if true
          [arr[upperBound], arr[lowerBound]] = [arr[lowerBound], arr[upperBound]]
          sorted = true
        }
      } else {
        if (arr[upperBound] > arr[lowerBound]) { // Swap if true
          [arr[upperBound], arr[lowerBound]] = [arr[lowerBound], arr[upperBound]]
          sorted = true
        }
      }

      upperBound++
      lowerBound++
    }
  }
  console.log("steps: ", steps)
  return arr
}

let arr = [5, 7, 6, 2, 4, 3, 1]

console.log(bubbleSort(arr))