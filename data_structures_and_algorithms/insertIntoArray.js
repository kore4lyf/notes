const groceries = ["cucumber", "carrot", "grapes", "oranges", "banana"]
console.log(groceries)

const insertGrocery = (grocery, location) => {
  groceriesCount = groceries.length
  
  for (let i=groceriesCount; i >= location; i--) {
    console.log(i)
    if(i == 0) break
    
    if(i == location) { 
      groceries[i] = grocery
      break
    }

    groceries[i] = groceries[i-1] 
    console.log(i)
  }
console.log(groceries)
}

console.log(groceries)
insertGrocery("Cabage", 2)
