// Find the smallest
// Then swap
// O(N^2)

// while(pointerStartIndex < arr.length - 1) It  doesn’t  need  to  run  
// for  the  last  value  itself,  since  the  array  will  be  fully sorted by that point

const selectionSort = (arr) => {
  arr = [...arr]
  pointerStartIndex = 0
  let steps = 0
  
  while(pointerStartIndex < arr.length - 1) {
    let indexOfSmallestValue = pointerStartIndex

    for (let index = pointerStartIndex + 1; index < arr.length; index++) {
      steps++
      if(arr[indexOfSmallestValue] > arr[index]) indexOfSmallestValue = index
    }

    if(pointerStartIndex !== indexOfSmallestValue) [arr[pointerStartIndex], arr[indexOfSmallestValue]] =  [arr[indexOfSmallestValue], arr[pointerStartIndex]]
    pointerStartIndex++
  }

  console.log("steps: ", steps)

  return arr
}

const arr = [5, 7, 6, 2, 4, 3, 1]


console.log(selectionSort(arr))