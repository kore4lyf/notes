// Insertion Sort

// Start pointer from index 1
// compare left indexes only
// i.e swap only if the pointer value is smaller the each compared value

const selectionSort = (arr) => {
  arr = [...arr]
  let pointer = 1 // Reps the index of the temp value
  let pointerSwapTrackerIndex = pointer // Keep track of a pointers value as it is being swapped
  
  while(pointer < arr.length) {
    
    for(let index = pointer - 1; index >= 0; index--) {
      
      // For every Swap, assign index to pointerSwapTrackerIndex
      if(arr[pointerSwapTrackerIndex] < arr[index]) {
        [arr[pointerSwapTrackerIndex], arr[index]] = [arr[index], arr[pointerSwapTrackerIndex]]
        pointerSwapTrackerIndex = index
      }
    }

    pointer++
    pointerSwapTrackerIndex = pointer
  }

  return arr
}

const arr = [4, 2, 7, 1, 3]

console.log(selectionSort(arr))