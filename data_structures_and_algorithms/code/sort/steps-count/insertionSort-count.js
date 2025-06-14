// Insertion Sort

// Start pointer from index 1
// compare left indexes only
// i.e swap only if the pointer value is smaller the each compared value

const selectionSort = (arr) => {
  let steps = 0
  arr = [...arr]
  let pointer = 1 // Reps the index of the temp value
  let swapPointer = pointer // Keep track of a pointers value as it is being swapped
  
  while(pointer < arr.length) {
    
    for(let index = pointer - 1; index >= 0; index--) {
      
      // Swap
      if(arr[swapPointer] < arr[index]) {
        [arr[swapPointer], arr[index]] = [arr[index], arr[swapPointer]]
        swapPointer = index
      }
      steps++
    }

    pointer++
    swapPointer = pointer
  }
  
  console.log("Steps: ", steps)
  return arr
}

const arr = [4, 2, 7, 1, 3]

console.log(selectionSort(arr))