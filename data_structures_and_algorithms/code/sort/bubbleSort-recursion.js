// Sorting Algorithm
// Bubble Sort has an efficiency of O(N2)

// The approach hear is better and faster than O(N2)
// If after every loop one item in the array is guaranteed to properly sorted
// 1st loop sorts the last item
// 2nd loop sorts the penultimate item
// which means the sort length should be reduced in every time one completes


const bubbleSort = (arr, sortLen = arr.length - 1) => {
  let upperBound = 0
  let lowerBound = 1
  let sorted = false

  while(upperBound < sortLen) {

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

  bubbleSort(arr, sortLen--)
}


let arr = [5, 7, 6, 2, 4, 3, 1]

const x = bubbleSort(arr)
console.log(x) 