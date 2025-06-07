// Sorting Algorithm
// Bubble Sort has an efficiency of O(N2)

// The approach hear is better and faster than O(N2)
// If after every loop one item in the array is guaranteed to properly sorted
// 1st loop sorts the last item
// 2nd loop sorts the penultimate item
// which means the sort length should be reduced in every time one completes
// so that it doesn't have to check to sort values that have already being sorted.

// The reason this algorithm is more efficient than is the sorted check
// The moment nothing is sorted, that's a sign that the array is sorted and it's a good time to exit the program.


const bubbleSort = (arr, steps, sortLen = arr.length - 1) => {
  let upperBound = 0
  let lowerBound = 1
  let sorted = false

  while(upperBound < sortLen) {
    steps++

    if (arr[upperBound] > arr[lowerBound]) {
      [arr[upperBound], arr[lowerBound]] = [arr[lowerBound], arr[upperBound]]
      sorted = true
    }
    upperBound++
    lowerBound++
  }

  // If at some point nothing was sorted return the array
  // OR sortLen is equal to 1
  if(!sorted || sortLen === 1) return arr
  console.log("steps: ", steps)

  bubbleSort(arr, sortLen--)
}


let arr = [5, 7, 6, 2, 4, 3, 1]

bubbleSort(arr,0)
const x = bubbleSort(arr,0)
console.log(x) 