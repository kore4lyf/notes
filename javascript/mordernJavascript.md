# JavaScript

## Signal Intentions with Variable Assignment

Use `const` as a default way of declaring your variable. When it gets to the point const is no longer appropriate change to it to `let`.

## Convert Variable to Readable Strings with Template Literals

```js
const debt = 150

const message = `Debt: ${debt}`
```

## Manage Data Collections with Arrays

### Splice

Splice is used to modify an array, by:

- Removing elements
- Inserting elements
- or both at the same time

SYNTAX:

```js
array.splice(start, deleteCount, item1, item2, ...)
```

- `start` is the index at which to start changing the array.
  - If `start` is grater than the array's length, splice() will start at the end of the array.
  - Negative values are allowed:
    - -1 means the last element
    - -2 means the second-to-last element

- deleteCount (optional):
is the number of elements to remove from the array starting from start.
  - if deleteCount is omitted or greater thatn teh number of elements remaining from start, splice() will remove all elements from start to the end fo the array.

```js
let array = [ 'one', 'two', 'three', 'four' ]

array.splice(1,0, "cow")
// [ 'one', 'cow', 'two', 'three', 'four' ]
array.splice(20,0, "cup")
// [ 'one', 'cow', 'two', 'three', 'four', 'cup' ]
array.splice(-1,0, "cake")
//[ 'one',  'cow', 'two',  'three', 'four', 'cake', 'cup' ]

let arrayCopy = array

arrayCopy.splice(3)
// [ 'one', 'two', 'three' ]
```

### Get size of an array

```js
const fruits = ["apple", "mango", "pawpaw"]

console.log(fruits.length) // 3
```

### Check existence in an array with Includes

Using `includes`  method to know if an item is in an array. It returns true if the item provided to the method exists in the array.

Using includes() is better than using a work around like indexOf().

```js
const fruits = ["apple", "mango", "pawpaw"]

console.log(fruits.includes("mango")) // true
console.log(fruits.includes("pepper")) // false
```

### Mold arrays with Spread Operator

```js
const fruits = ["apple", "mango", "pawpaw"]

const newFruits = [...fruits]
console.log(newFruits)

// ["apple", "mango", "pawpaw"]
```

You can't use the spread operator on its own, you have to spread the information into something.

#### Merging Arrays

If your want to merge arrays, the traditional way is to use `concat()`.

With spread operator:

```js
const fishes = ["tuna", "titus"]
const snacks = ["cake", "pie", "biscuit"]

const food = [...fishes, ...snacks]

console.log(food)
// ["tuna", "titus", "cake", "pie", "biscuit"]
```

#### List of arguments

Spread operator can also be used as a list of arguments for a function.

For example the `Math.max()` function, takes a list of numbers, so if you are passing an array it won't work, the best way to use the array with the function is to spread the array.

For Example:

```js
const book = ["Reasons and Persons", "Derek Parfit", 19.99]

function formatBook(title, author, price) {
  return `${title} by ${author} $${price}`
}

formatBook(...book)
```

### Extract keys from Objects and use it to iterate through similar objects

```js
const x = { name: "Mike", position: "Engineer"}

Object.keys(x) // [ 'name', 'position' ]
```

With array methods such as `map()`, `filter()`, and `reduce()` you can alter or update information within an array with a single line.

### Iterator

using array.`entries()`

```js
let x = ["one", "two", "three", "four"]

for(let [index, value] of x.entries()) {
  console.log(index, " ", value)
}
```

x.entries() from the previous example would be:
`[ [ 0, 'one' ], [ 1, 'two' ], [ 2, 'three' ], [ 3, 'four' ] ]`

or [...array.entries()] will be:
`[ [ 0, 'one' ], [ 1, 'two' ], [ 2, 'three' ], [ 3, 'four' ] ]`

### forEach

```js
array.forEach((value, index, array) => console.log(index, " ", value, " ", array))

// 0   one   [ 'one', 'two', 'three', 'four' ]
// 1   two   [ 'one', 'two', 'three', 'four' ]
// 2   three   [ 'one', 'two', 'three', 'four' ]
// 3   four   [ 'one', 'two', 'three', 'four' ]
```

### Convert Object to an array

You can express nearly every collection concept in form of an array, i.e. you can convert any collection to and from an array.

```js
const dog = {
  name: "Don",
  color: "black"
}

console.log(dog.name)
// Don
```

When an object is converted to an array using Object.`entries(dog)` you'd get a data similar to the code below:

```js
const dog = [
  ["name": "Don"],
  ["color": "black"]
]

function getName(dog) {
  return dog.find((attributes) => {
    return attribute[0] === "name"
  })[1]
}
```

```js
const dogObj = {
  name: "Don",
  color: "black"
}

const dogArrayVersion = Object.entries(dog) // [ ["name": "Don"], ["color": "black"] ]
```

### Avoid push mutations using spread operator



