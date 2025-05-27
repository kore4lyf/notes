// Sorting Algorithm
// Bubble Sort has an efficiency of O(N2)

// Two pointer
// Swap (in First loop, the last item in the array is guaranteed to be in order)
// swapped ( Without Swapped check there would be no best case scenario)
// Two loop out
  // Inner - Swaps
  // Outer - Repeat Swap
const bubbleSort = (arr, order="asc") => {
  const arrLen = arr.length - 1
  let sorted = false

  while(!sorted) {
      // Point to the first two value
    let upperBound = 0
    let lowerBound = 1
    sorted = true

    while(upperBound < arrLen) {
      if(order === "desc") {
        if (arr[upperBound] < arr[lowerBound]) {
          [arr[upperBound], arr[lowerBound]] = [arr[lowerBound], arr[upperBound]]
          sorted = false
        }
      } else {
        if (arr[upperBound] > arr[lowerBound]) {
          [arr[upperBound], arr[lowerBound]] = [arr[lowerBound], arr[upperBound]]
          sorted = false
          console.log("asc")
        }
      }

      upperBound++
      lowerBound++
    }
  }

  return arr
}

let arr = [5, 7, 6, 2, 4, 3, 1]

console.log(bubbleSort(arr))
console.log(bubbleSort(arr, "desc"))

// JS Sort
console.log(arr.sort((a, z) => a - z)) // ascending
console.log(arr.sort((a, z) => z - a)) // descending