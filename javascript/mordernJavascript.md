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

When you call a function, you should trust
that it won’t change any supplied values. Functions that have no side effects are called “pure” functions, and that’s what you should strive to achieve.

```js
function addGift(cart) {
  if (cart.length > 2) {
    return [...cart, reward];
  }
  return cart;
}
```

When you start using spread operator, you would realize, you would no longer be dependent on array functions.

**Copying**:

**Mutating**:

```js
let x = [1, 2, 3]
let y = x.slice()
```

**Not Mutating**:

```js
let x = [1, 2, 3]
let y = [...x]

console.log("x: ", x)
console.log("y: ", y) // y does not reference x
// x:  [ 1, 2, 3 ]
// y:  [ 1, 2, 3 ]
```

**Adding Data**:

**Mutating Data**:

```js
let x = [1, 2, 3]
x.push(4)

console.log("x: ", x)
// x:  [ 1, 2, 3, 4 ]
```

**Not Mutating Data**:

```js
let x = [1, 2, 3]

x = [...x, 4]
```

### Avoid Sort Confusion with the Spread Operator

sort() mutates data. To prevent mutating the data use spread operator.

```js
[...staff].sort()
```

Now you can sort however much they want because you aren’t changing the original array.

## Maximize Code Clarity with Special Collections

### Use Objects for Static Key-Value Lookups

Objects are the best collection for simple key value lookups.

You could put the hex values in an array, but that doesn’t really communicate much.

```js
const colors = ['#d10202', '#19d836', '#0e33d8'];
```

```js
const colors = {
  red: '#d10202',
  green: '#19d836',
  blue: '#0e33d8'
}
```

When a future developer wants to get the proper color red, they don’t need to know a position; they just call it directly: colors.red. Alternatively, they can use array syntax colors['red']. It’s simple. That’s why objects are so valuable for retrieving static information.

> The key here is static information. Objects are not good for information that’s continually updated, looped over, altered, or sorted. In those cases, use `Map`.

## Create Objects WIthout Mutations using Object.assign()

`Object.assign()` allows you merge the properties of an object.

The method takes a series of objects and updates the inner-most object with the keys and values from outer objects, then returns the updated first object.

```js
const defaults = {
  author: "",
  title: "",
  year: 2017,
  rating: null,
};

const book = {
  author: "Joe Morgan",
  title: "Simplifying JavaScript",
};

let newBook = Object.assign(defaults, book)

console.log("newBook: ",newBook)
console.log("defaults: ", defaults)
console.log("book: ", book)
```

Result:

newBook:  {
  author: 'Joe Morgan',
  title: 'Simplifying JavaScript',
  year: 2017,
  rating: null
}

defaults:  {
  author: 'Joe Morgan',
  title: 'Simplifying JavaScript',
  year: 2017,
  rating: null
}

book:  { author: 'Joe Morgan', title: 'Simplifying JavaScript' }

Unfortunately `defualt` is muted.

Fortunately, the solution is simple. Just make the first object an empty object. After you do that, the returned object will be the updated empty object. The other objects will have no mutations.

```js
const defaults = { 
  author: '',
  title: '',
  year: 2017,
  rating: null,
};

const book = {
  author: 'Joe Morgan',
  title: 'Simplifying JavaScript',
};

const updated = Object.assign({}, defaults, book);
```

Now, there’s one problem with copying objects using `Object.assign()`. Up to this point, you’ve been working with flat objects. When the value is another object, you start to have problems.

Copying objects that have nested objects is called “deep copying” (or “deep merging”) 


```js
const defaultEmployee = {
  name: {
    first: "",
    last: "",
  },
  years: 0,
};
const employee = Object.assign({}, defaultEmployee);
```

The property years will copy over just fine, but the
property name isn’t copied. All that’s copied is a reference to the independent object that’s assigned to the key name.
When you copy the reference, you aren’t making a deep copy of the nested object. You’re merely copying the location of the reference.

**Deep Copying Objects**:

```js
const employee2 = Object.assign({}, defaultEmployee, {
  name: Object.assign({}, defaultEmployee.name),
});
```

## Updating Information with Object Spread

The object spread operator gives you all the advantages of `Object.assign()` with reduced syntax.

```js
const book = {
  title: "Reasons and Persons",
  author: "Derek Parfit",
};
const update = { ...book, year: 1984, title: "R & P" };
// { title: 'R & P', author: 'Derek Parfit', year: 1984 }
```

```js
const defaults = { author: "", title: "", year: 2017, rating: null };
const book = {
  author: "Joe Morgan",
  title: "Simplifying JavaScript",
};
const updated = { ...defaults, ...book };

// {
// author: 'Joe Morgan',
// title: 'ES6 Tips',
// year: 2017,
// rating: null,
// }
```

The same deep merge problems occur when using spread operator, the reference of the nested object is copied.

```js
const employee2 = Object.assign({}, defaultEmployee, {
  name: Object.assign({}, defaultEmployee.name),
});

export { defaults };
```

```js
const employee = {
  ...defaultEmployee,
  name: {
    ...defaultEmployee.name,
  },
};
```

## Update Key-Value Data Clearly with Maps

Map is a special kind of collection that can do certain things very easily.
This tip examines two specific situations:

• Key-value pairs are frequently added or removed.
• A key isn’t a string.

maps are designed specifically to update key-value pairs frequently. The interface is clear, methods have predictable names, and actions such as loops (as you’ll see in the next tip) are built in. This will make you a more productive developer.

Because maps are a more specialized collection, the developers of JavaScript engines can optimize the code to make actions faster. Key lookups for objects will be linear, but when maps are implemented natively, their lookup time can be logarithmic. In other words, big objects are more expensive than big maps.

```js
let filters = new Map()
filters.set("breed", "labrador")
```

You can easily add several values with chaining:

```js
let filters = new Map()
  .set("breed", "labrador")
  .set("size", "large")
  .set("color", "chocolate");

filters.get("size");
```

Another way to create Maps:
key-value objects can be represented as an array of pairs (`Object.entries()`).

```js
let filters = new Map([
  ['breed', 'labrador'],
  ['size', 'large'],
  ['color', 'chocolate'],
])

filters.get("color")
// chocolate
```

To remove values, use `delete()`.

```js
filters.delete("color")

filters.get("color")
// undefined
```

You have the foundation to change your functions to use a map instead of an object.

```js
const petFilters = new Map();
function addFilters(filters, key, value) {
  filters.set(key, value);
}
function deleteFilters(filters, key) {
  filters.delete(key);
}
function clearFilters(filters) {
  filters.clear();
}
```

Another advantage of using Maps over Objects is that, a number cannot be used as key without it being converted to a string.

```js
let errors = new Map([
  [100, "Invalid name"],
  [110, "Name should only contain letters"],
  [200, "Invalid color"],
])

errors.get(100);
// 'Invalid name'

errors.keys();
// MapIterator { 100, 110, 200 }
```

When you asked for the keys, you didn’t get an
array, as you do with Object.keys(). You didn’t get an object, or even another Map; the return value is something called MapIterator.

## Iterate Over Key-Value Data with Map and the Spread Operator

Objects are very frustrating to iterate over. In fact, there used to be no way to directly iterate over them.

Things are a little better now, You can now use a for...in loop to iterate over objects, but you’ll have access only to the object key.

```js
const numbers = {
  one : 1,
  two: 2,
  three: 3
}

for(key in numbers) {
  console.log(numbers[key])
}

// 1
// 2
// 3
```

A Map, by contrast, has everything you need to sort and iterate built in as part of the MapIterator.

```js
const filters = new Map()
  .set("color", "black")
  .set("breed", "labrador");

function checkFilters(filters) {
  for (const entry of filters) {
    console.log(entry);
  }
}

checkFilters(filters)

// [ 'color', 'black' ]
// [ 'breed', 'labrador' ]

console.log([...filters])
// [['color', 'black'], ['breed', 'labrador']]
```

When you loop over the entries in a map, you get a pair of the key-values, which you can immediately assign to variables using destructuring.

```js
const filters = new Map()
  .set("color", "black")
  .set("breed", "labrador")

function getAppliedFilters(filters) {
  for (const [key, value] of filters) {
    console.log("Key: ", key);
    console.log("Value: ", value);
  }
}

getAppliedFilters(filters)
// Key:  color
// Value:  black
// Key:  breed
// Value:  labrador
```

### Sorting Map Data

Sort does not have it's own built-in sort method.

```js
function sortByKey(a, a) {
  return a[0] > b[0] ? 1: -1
}

function getSortedAppliedFilters(filters) {
  const applied = [];
  for (const [key, value] of [...filters].sort(sortByKey)) {
    applied.push(`${key}:${value}`);
  }
  return `Your filters are: ${applied.join(", ")}.`;
}

console.log(getSortedAppliedFilters(filters));

// // 'Your filters are: breed:labrador, color:black.'
```

Yyou don’t need to create a new array to collect the results as you did with let applied = []. You can simply use the map() method.

```js
function getAppliedFilters(filters) {
  const applied = [...filters].map(([key, value]) => {
    return `${key}:${value}`;
  });
  return `Your filters are: ${applied.join(", ")}.`;
}
// 'Your filters are: color:black, breed:labrador.'
```

## Create Maps without Side Effects

Creating new maps from an array of pairs.

Making a copy of a Map()

```js
const filters = new Map().set("color", "black").set("breed", "labrador");

const copyFilters = new Map([...filters])

console.log(copyFilters)
```

Maps, like objects, can only have a key once. So if you tried to create a map with a new key, it will use whatever value for that key is declared last. It’s as if you were updating the value instead of setting it.

```js
const filters = new Map()
.set('color', 'black')
.set('color', 'brown');

filters.get('color');
// brown
```

With this knowledge, you can combine what you know about the object spread operator to create a combination of two maps in one line.

```js
let filters = new Map().set('color', 'black');
let filters2 = new Map().set('color', 'brown');
let update = new Map([...filters, ...filters2]);

update.get('color');
// brown
```

Now when you update the function again, you realize you don’t even need the function at all. Combining and creating maps becomes a one liner.

```js
function applyDefaults(defaults, map) {
  return new Map([...defaults, ...map]);
}
```

## Keep Unique Values with Set

Set is like a specialized array that can only contain only one instance of each unique item.

```js
const colors = ['black', 'black', 'chocolate'];
const unique = new Set(colors);
// Set {'black', 'chocolate'}
```

To return get array, spread unique within an array.

```js
function getUnique(attributes) {
  return [...new Set(attributes)]
}
```

Set, again, is similar to Map in that you have methods to add and check for values. For a set, you can add a value with `add()` and check a value with `has()`. You also have `delete()` and `clear()`, which work exactly as they do in Map.

```js
let names = new Set();
names.add('joe');
// Set { 'joe'}
names.add('bea');
// Set { 'joe', 'bea'}
names.add('joe');
// Set { 'joe', 'bea'}
```

```js
const dogs = [
  {
    name: "max",
    size: "small",
    breed: "boston terrier",
    color: "black",
  },
  {
    name: "don",
    size: "large",
    breed: "labrador",
    color: "black",
  },
  {
    name: "shadow",
    size: "medium",
    breed: "labrador",
    color: "chocolate",
  },
]

function getUniqueColors(dogs) {
  const unique = new Set()

  for (const dog of dogs) {
    unique.add(dog.color)
  }

  return [...unique];
}
```

using reduce instead of for loops:

```js
[...dogs.reduce((colors, { color }) => colors.add(color), new Set())];
```

## Write Shorter Loops with Array Methods

• **map()**:
– Action: Changes the shape, but not the size.
– Example: Get the name of everyone on the team.
– Result: ['melinda', 'katie', 'madhavi', 'justin', 'chris']

• **sort()**:
– Action: Changes neither the size nor the shape, but changes the order.
– Example: Get the team members in alphabetical order.
– Result: [{name: 'chris', position: 'developer'}, {name: 'justin' ...}]

• **filter()**:
– Action: Changes the size, but not the shape.
– Example: Get the developers.
– Result: [{name: 'madhavi', position: 'developer'}, {name: 'chris', position:'developer'}]

• **find()**:
– Action: Changes the size to exactly one, but not the shape. Does not return an array.
– Example: Get the manager.
– Result: {name: 'justin', position: 'manager'}

• **forEach()**:
– Action: Uses the shape, but returns nothing.
– Example: Give all members a bonus!
– Result: Melinda gets a bonus! Katie get a bonus!… (but no return value).

• **reduce()**:
– Action: Changes the size and the shape to pretty much anything you want.
– Example: Get the total developers and non-developers.
– Result: {developers: 2, non-developers: 3}

## Combine Methods with Chaining

```js
const sailors = [
  {
    name: "yi hong",
    active: true,
    email: "yh@yhproductions.io",
  },
  {
    name: "alex",
    active: true,
    email: "",
  },
  {
    name: "nathan",
    active: false,
    email: "",
  },
]

sailors
  .filter(sailor => sailor.active)
  .map(sailor => sailor.email || `${sailor.name}@wiscsail.io`)
  .forEach(sailor => sendEmail(sailor))
```

## Transform Array Data with reduce()

The reduce() method is different from other array methods in several ways, but the most important is that it can change both the size and the shape of data (or just one or just the other). And it doesn’t necessarily return an array.

```js
const callback = function (collectedValues, item) {
  return [...collectedValues, item];
};

const saying = ["veni", "vedi", "veci"];
const initialValue = [];
const copy = saying.reduce(callback, initialValue);
```

```js
const saying = ["veni", "vedi", "veci"]

const copy = saying.reduce((collectedValues, item) => [...collectedValues, item], [])
```

The initial value is optional, it’s usually included because you need something to hold the return values.

```js
const developers = [
  {
    name: "Jeff",
    language: "php",
  },
  {
    name: "Ashley",
    language: "python",
  },
  {
    name: "Sara",
    language: "python",
  },
  {
    name: "Joe",
    language: "javascript",
  },
];

const aggregated = developers.reduce((specialities, developer) => {
  const count = specialities[developer.language] || 0;
  return {
    ...specialities,
    [developer.language]: count + 1,
  };
}, {});

// console.log(aggregated)
// { php: 1, python: 2, javascript: 1 }
```

## Create Default Parameters

```js
function convertWeight(weight, ounces = 0, roundTo = 2) {
  const total = weight + (ounces / 16);
  const conversion = total / 2.2;
  return roundToDecimalPlace(conversion, roundTo);
}
```