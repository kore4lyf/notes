// Binary Search

const binarySearch = (array, searchValue) => {
  let lowerBound = 0
  let upperBound = array.length - 1
  let steps = 0

  while(lowerBound <= upperBound) { // using = here ensure that it will be able to search for the last element in the array.
    console.log("Steps: ", steps)
    const midPoint = Math.floor((lowerBound + upperBound) / 2)

    const valueFound = array[midPoint]

    if(valueFound === searchValue) return midPoint

    if(searchValue > valueFound) lowerBound = midPoint + 1 // +1 shifts the lowBound away from the range that has been checked
    else if (searchValue < valueFound) upperBound = midPoint - 1
  }

  return null
}

const orderedNumbers = [2, 4, 6, 8, 10, 12, 13]

console.log(binarySearch(orderedNumbers, 17)) // 5
console.log(binarySearch(orderedNumbers, 1))
console.log(binarySearch(orderedNumbers, 32)) // 7
console.log(binarySearch(orderedNumbers, 2))