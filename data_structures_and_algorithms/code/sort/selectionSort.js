// Find the smallest
// Then swap

const selectionSort = (arr) => {
  arr = [...arr]
  pointerStartIndex = 0
  
  while(pointerStartIndex < arr.length - 1) {
    let indexOfSmallestValue = pointerStartIndex

    for (let index = pointerStartIndex + 1; index < arr.length; index++) {
      if(arr[indexOfSmallestValue] > arr[index]) indexOfSmallestValue = index
    }

    if(pointerStartIndex !== indexOfSmallestValue) [arr[pointerStartIndex], arr[indexOfSmallestValue]] =  [arr[indexOfSmallestValue], arr[pointerStartIndex]]
    pointerStartIndex++
  }

  return arr
}

const arr = [4, 2, 7, 1, 3]

console.log(selectionSort(arr))