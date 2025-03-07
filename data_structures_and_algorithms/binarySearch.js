const binarySearch = async (array, searchValue) => {
  let lowerBound = 0
  let upperBound = array.length - 1 

  while(true) {
    console.log("Lower Bound: ", lowerBound, " Upper Bound: ", upperBound)

    const midPoint = Math.round((lowerBound + upperBound) / 2)
    console.log("MidPoint: ", midPoint)

    const valueFound = array[midPoint]
    
    if(valueFound === searchValue) {
      console.log(`Congratulations ${searchValue} was found at index: ${midpoint}`)
      break
    }

    if(midPoint === lowerBound || midPoint === upperBound) {
      console.log(`${searchValue} could not be found in the array.`)
      break
    }

    if(searchValue > valueFound) {
      lowerBound = midPoint
    } else if(searchValue < valueFound) {
      upperBound = midPoint
    }
    await new Promise((resolve) => setTimeout(resolve, 2000))
    console.log("Value Found: ", valueFound)
    console.log("Search Value: ", searchValue)
    console.log("MidPoint: ", midPoint)
  }
}

const orderedNumbers = [2, 3, 6, 8, 13, 15, 23, 25, 29]
console.log(orderedNumbers)
binarySearch(orderedNumbers, 18)
