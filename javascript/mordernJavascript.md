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

## Writing functions for testability (Mocha)

Instead of struggling to make tests for your code, you should focus on writing code that is testable. Your code will improve, your tests will be easier to write, and the user experience will be identical. There’s nothing to lose.

Here’s a function that looks simple but has some subtle complexity

```js
import { getTaxInformation } from './taxService'

function formatPrice(user, { price, location }) {
  const rate = getTaxInformation(location);
  const taxes = rate ? `plus $${price * rate} in taxes.` : 'plus tax.'
  return `${user} your total is: ${price} ${taxes}`;7
}

export { formatPrice }
```

The problem with using imported code directly is that the function is now tightly coupled with the imported function.

This means that if you run a test, the test will
also have to access the API.

Now your test is dependent on network access, response time, and so on. Again, this is a big problem. You’re just trying to build a string.

To avoid the problem, you can create mocks that intercept imports and explicitly set a return value. Here’s what a test would look like for the current function.

```js
import expect from 'expect';
import sinon from 'sinon';
import * as taxService from './taxService';
import { formatPrice } from './problem';

describe('format price', () => {
let taxStub;

beforeEach(() => {
  taxStub = sinon.stub(taxService, 'getTaxInformation');
});

afterEach(() => {
  taxStub.restore();
});

it('should return plus tax if no tax info', () => {
  taxStub.returns(null);

  const item = { price: 30, location: 'Oklahoma' };
  const user = 'Aaron Cometbus';
  const message = formatPrice(user, item);
  const expectedMessage = 'Aaron Cometbus your total is: plus tax.';

  expect(message).toEqual(expectedMessage);
});

it('should return plus tax information', () => {
  taxStub.returns(0.1);

  const item = { price: 30, location: 'Oklahoma' };
  const user = 'Aaron Cometbus';
  const message = formatPrice(user, item);
  const expectedMessage = 'Aaron Cometbus your total is: 30 plus $3 in taxes.';
  expect(message).toEqual(expectedMessage);
});
});
```

When you create a stub, you’re bypassing the imported code and declaring
what the output would be without running the actual code. The upside is that now you don’t have to worry about any external dependencies. The downside is that you constantly have to set and reset the return value in every assertion. See line 19 for an example `taxStub.returns(null)`.

Don’t be fooled by the shortness of the test suite. Tests that require a lot of external helpers, such as spies, mocks, and stubs, are a clue that your code is complex and may be tightly coupled. You should simplify your code.

> Fortunately, the fix for tightly coupled code is fairly simple. You simply pass in your external functions as arguments. **Passing in dependencies as arguments is called dependency injection.**

- **Stubs, Mocks, Spies**
Even with your best efforts, you’ll eventually need some helpers to test your code.
Fortunately there are quite a few techniques to help you. The three big ones are stubs,mocks, and spies.
In this example, you’re working with stubs. You’re overriding outside code and
returning an explicit result. It’s called a stub because you’re removing all the underlying logic of the function and just declaring a result.
Mocks are a little more complex. They stand in for the objects they’re replacing, and
you make assertions based on the messages they’ll receive and the methods you’ll
call on them. For example, you may mock an object and assert that you’ll call a format()
method on your object with the argument jabberwocky.
A crucial difference between mocks and stubs is that you set up the expectations
before you call the code with mocks. Martin Fowler has a good article on the difference
between mocks and stubs.a
Spies are like mocks, but you check how they were called after you execute the code.
If you called formatPrice() and wanted to make sure that getTaxInformation() was called
once with an argument of Iowa, you’d set up the stub with a spy and then, after calling
formatPrice(), you’d make assertions on the spy. If you look at the code for this book,
you’ll see an occasional spy.
For more on mocks, spies, and stubs, Simon Coffey goes into detail on each, using

Ruby as an example.b
> a. https://martinfowler.com/articles/mocksArentStubs.html
> b. https://about.futurelearn.com/blog/stubs-mocks-spies-rspec

To decouple your code, pass `getTaxInformation()` as an argument. You don’t need to change anything else in your code.

functions/test/test.js
```js
function formatPrice(user, { price, location }, getTaxInformation) {
const rate = getTaxInformation(location);
const taxes = rate ? `plus $${price * rate} in taxes.` : 'plus tax.';
return `${user} your total is: ${price} ${taxes}`;
}
export { formatPrice }
```

Now that you’re using dependency injection, you don’t need stubs. When you
write your tests, you don’t need to bypass an import. Instead, you pass a
simple function that returns the value you want. It’s a lot like stubbing but
without any external dependencies.

Here’s your test:
functions/test/test.spec.js
```js
import expect from 'expect';
import { formatPrice } from './test';

describe('format price', () => {

  it('should return plus tax if no tax info', () => {
    const item = { price: 30, location: 'Oklahoma' };
    const user = 'Aaron Cometbus';
    const message = formatPrice(user, item, () => null);
    expect(message).toEqual('Aaron Cometbus your total is: 30 plus tax.');
  });

  it('should return plus tax information', () => {
    const item = { price: 30, location: 'Oklahoma' };
    const user = 'Aaron Cometbus';
    const message = formatPrice(user, item, () => 0.1);
    expect(message).toEqual('Aaron Cometbus your total is: 30 plus $3 in taxes.');

  });
});
```

The important thing to know is that there’s a perception that writing tests is
hard. That’s just not true. If a test is hard to write, spend time rethinking
your code. If your code isn’t easy to test, you should change your code, not
your tests.

### Reduce Complexity with Arrow Functions

You’ll learn how to use arrow functions to destructure arguments,
return objects, and construct higher-order functions.

```js
const name = {
  first: 'Lemmy',
  last: 'Kilmister',
};
function getName({ first, last }) {
  return `${first} ${last}`;
}
```

```js
const getName = { first, last } => `${first} ${last}`;
```

```js
const comic = {
  first: 'Peter',
  last: 'Bagge',
  city: 'Seattle',
  state: 'Washington',
};
const getName = ({ first, last }) => `${first} ${last}`;
getName(comic);
// Peter Bagge
```

If you’re returning an object, you have to be careful when omitting the return statement. Because an arrow function can’t tell whether the curly braces are for an object or to wrap a function body, you’ll need to indicate the return object by wrapping the whole thing in parentheses.

```js
const getFullName = ({ first, last }) => ({ fullName: `${first} ${last}` });
getFullName(comic);
// { fullName: 'Peter Bagge' }
```

Finally, arrow functions are great ways to make higher-order functions—func-
tions  that  return  other  functions.

```js
const discounter = discount => {
  return price => {
    return price * (1 - discount);
  };
};
const tenPercentOff = discounter(0.1);
tenPercentOff(100);
// 90
```

Because the return value is another function, you can leverage the implicit return to return the function without even needing extra curly braces.

```js
const discounter = discount => price => price * (1 - discount);

const tenPercentOff = discounter(0.1);
tenPercentOff(100);
// 90
```

If you’re anything like me, you’re probably already forgetting all about higher-order functions. When are you going to use them? Turns out, they can be very helpful. Not only are they great ways to lock in parameters, but they’ll also  help  you  take  some  of  the  ideas  you’ve  already  seen—array  methods,rest parameters—even further.

In all the examples, you invoked the higher-order functions by first assigning the returned function to a variable before calling that with another parameter. That’s not necessary.

```js
discounter(0.1)(100);
// 90
```

### Create a zip function

```js
const zip = (...left) => (...right) => {
  return left.map((item, i) => [item, right[i]])
}
```

### Combine Currying and Array Methods for Partial Application

With  higher-order  functions,  you  can  avoid  repetition  by  creating  a  new function  with  values  you  lock  in  once  and  use  later. When  you  return  a higher-order function, you don’t have to invoke it right away. After you invoke it once, you have another pre-made function that you can use over and over. It’s like you wrote it with the argument hard-coded.

Building functions that take only one argument at a time is called
“currying,” and it’s an invaluable technique when you’re working with methods
that pass only one argument

Currying and Partial Application
Partially applied functions can take multiple rounds of parameters. This is often confused with currying. And it’s true that currying and partial application are very similar, but they’re different.

data.js

```js
const dogs = [
  {
    name: 'max',
    weight: 10,
    breed: 'boston terrier',
    state: 'wisconsin',
    color: 'black',
  },
  {
    name: 'don',
    weight: 90,
    breed: 'labrador',
    state: 'kansas',
    color: 'black',
  },
  {
    name: 'shadow',
    weight: 40,
    breed: 'labrador',
    state: 'wisconsin',
    color: 'chocolate',
  },
];
```

```js
function getDogNames(dogs, filter) {
  const [key, value] = filter;
  return dogs
  .filter(dog => dog[key] === value)
  .map(dog => dog.name);
}
getDogNames(dogs, ['color', 'black']);
// ['max', 'don']
```

This function looks pretty good, but it’s actually severely limited.
There are two issues. First, your filter function is constrained.
Second, the map, like all array methods, can take only one argument—the
item  being  checked—so  you  have  to  somehow  get  your  other  variables in scope.

curry.js
```js
function getDogNames(dogs, filterFunc) {
  return dogs
  .filter(filterFunc)
  .map(dog => dog.name)
}

getDogNames(dogs, dog => dog.weight < 20);
// ['max']
```

You’re partway there, but you’re still forced to hard code a value, the number 20 in this case.

```js
const weightCheck = weight => dog => dog.weight < weight;
getDogNames(dogs, weightCheck(20));
// ['max']
getDogNames(dogs, weightCheck(50));
// ['max', 'shadow']
```

```js
const identity = field => value => dog => dog[field] === value;
const colorCheck = identity('color');
const stateCheck = identity('state');
getDogNames(dogs, colorCheck('chocolate'));
// ['shadow']
getDogNames(dogs, stateCheck('kansas'));
// ['don']
```

Now think about what you’ve created. You took a function that had specific
requirements  and  made  something  abstract  that  can  take  many  different comparisons.

If you only wanted the dogs that meet at least one criteria, you can write a
function that uses the some() array method, which returns true if any value
returns true.
functions/curry/curry.js
```js
function allFilters(dogs, ...checks) {
  return dogs
  .filter(dog => checks.every(check => check(dog)))
  .map(dog => dog.name);
}
allFilters(dogs, colorCheck('black'), stateCheck('kansas'));
// ['Don']
```

```js
function anyFilters(dogs, ...checks) {
  return dogs
  .filter(dog => checks.some(check => check(dog)))
  .map(dog => dog.name);''
}
anyFilters(dogs, weightCheck(20), colorCheck('chocolate'));
// ['max', 'shadow']
```

### Prevent Context Confusion with Arrow Functions

Scope and context are probably the two most confusing concepts for JavaScript
developers.

A function’s scope, at it simplest, is what variables the functions can access. Context is what the keyword this refers to in a function or class.

Scope pertains to functions and context pertains to objects. While that’s not 100 percent true—you can use this in any function—it’s a good general rule.

```js
const validator = {
  message: 'is invalid.',
  setInvalidMessage(field) {
    return `${field} ${this.message}`;
  },
};

validator.setInvalidMessage('city');
// city is invalid
```

As you see, this.message refers to the property on the object. This works because, when the method is called from the object, the function creates a this binding with the containing object as context.

Working with this on objects usually isn’t a problem until you try to use a function as callback for another function.
For example, you’ll encounter problems with this when using setTimeout(), setInterval(), or your favorite array methods such as map() or filter(). Each of these functions takes a callback, which, as you’ll see, changes the context of the callback.

```js
const validator = {
  message: 'is invalid.',
  setInvalidMessages(...fields) {
    return fields.map(function (field) {
      return `${field} ${this.message}`;
    });
  },
};

validatorProblem.setInvalidMessages(field);
// TypeError: Cannot read property 'message' of undefined
```

The problem is that when you invoke the function, you’ll get either a TypeError or undefined. This is where most developers get frustrated and refactor the code to remove a reference to this.

Remember that whenever you call a function, it creates a this binding based on where it’s called. setInvalidMessage() was called in the context of an object. The this context was the object. The callback for the map function is called in the context of the map() method, so the this binding is no longer the Validator object. It will actually be the global object: window in a browser and the Node.js environment in a REPL. The callback doesn’t have access to the message property.

This is where arrow functions come in. Arrow functions don’t create a new this binding when you use them. If you were to rewrite the preceding map() callback using an arrow function, everything would work as expected.

```js
const validator = {
  message: 'is invalid.',
  setInvalidMessages(...fields) {
    return fields.map(field => {
      return `${field} ${this.message}`;
  });
  },
};
validator.setInvalidMessages('city');
// ['city is invalid.]
```

Now this may seem great and a good reason to always use arrow functions.
But remember, sometimes you actually do want to set a this context.
For example, what if you wrote your original setInvalidMessage() method not as
a named method but as an arrow function assigned to a property?
functions/context/method.js
```js
const validator = {
  message: 'is invalid.',
  setInvalidMessage: field => `${field} ${this.message}`,
};

validatorMethod.setInvalidMessage(field);
// TypeError: Cannot read property 'message' of undefined
```
You’d have the exact same TypeError when you called it.

In this case, you didn’t create a new this context binding to the current object. Because you didn’t create a new context, you’re still bound to the global object.

## Keep Interfaces Clear with Classes

### Build Readable Classes

To start off, make a class called Coupon. You declare a class with the class
keyword. You can then create new instances using the new keyword.

```js
class Coupon {

}

const coupon = new Coupon();
```

The next step is to create a constructor method. You’ll need to name it constructor().

```js
class Coupon {
  constructor(price, expiration) {
    this.price = price;
    this.expiration = expiration || 'two weeks';
  }
}
const coupon = new Coupon(5);
coupon.price;
// 5
coupon['expiration'];
// 'Two Weeks'
```

Note that you aren’t declaring properties as public or private. Currently,
everything is public.

The class and object instance are getting a little more interesting, but they still can’t do much. The next step is to add two simple methods: getPriceText() to return a formatted price and getExpirationMessage() to get a formatted message.

```js
class Coupon {
  constructor(price, expiration) {
    this.price = price;
    this.expiration = expiration || 'two weeks';
  }
  getPriceText() {
    return `$ ${this.price}`;
  }
  getExpirationMessage() {
    return `This offer expires in ${this.expiration}.`;
  }
}
const coupon = new Coupon(5);
coupon.getPriceText();
// '$ 5'
coupon.getExpirationMessage();
// 'This offer expires in two weeks.'
```

### Share Methods with Inheritance

You’ll learn how to extend classes and call parent methods.

```js
import Coupon from './extend';
class FlashCoupon extends Coupon {
}

const flash = new FlashCoupon(10);

flash.price;
// 10

flash.getPriceText();
// "$ 10"
```

To make the change, set up a constructor function that takes price and expiration, as you did on the parent. In this constructor, you’ll need to 
> call **super()** to access the parent constructor.

```js
import Coupon from './extend';

class FlashCoupon extends Coupon {
  constructor(price, expiration) {
    super(price);
    this.expiration = expiration || 'two hours';
  }
}

const flash = new FlashCoupon(10);

flash.price;
// 10

flash.getExpirationMessage();
// "This offer expires in two hours"
```

Of course, you may not like that message. This is a flash coupon after all. You should alert your users that this coupon is special. Any time you call a method, the JavaScript engine first checks to see if the method exists on the current class. If not, the engine goes up the chain, checking each class or prototype along the way. This means you can override any method by creating a new method with the same name.

Try adding a new method called `getExpirationMessage()` to the FlashCoupon class. This method will be the same as the parent method except that it returns a message of This is a flash offer and expires in `${this.expiration}`.

The last step is to write methods that invoke the parent methods. To start, add two new methods to your Coupon class. First, add the method getRewards(), which takes a user and then calls isRewardsEligible() to find out if the user is eligible for further discounts. If the user is eligible for further discounts, reduce the price.

As a warning, any method you add to a parent class is inherited by a child class. This can be a huge benefit, but it’s also easy to create bloat in child classes by adding methods to parents that aren’t necessary in child classes.

```js
class Coupon {
  constructor(price, expiration) {
    this.price = price;
    this.expiration = expiration || 'Two Weeks';
  }
  getPriceText() {
    return `$ ${this.price}`;
  }
  getExpirationMessage() {
    return `This offer expires in ${this.expiration}`;
  }
  isRewardsEligible(user) {
    return user.rewardsEligible && user.active;
  }
  getRewards(user) {
    if (this.isRewardsEligible(user)) {
      this.price = this.price * 0.9;
    }
  }
}

export default Coupon
```

```js
import Coupon from './extend';
class FlashCoupon extends Coupon {
  constructor(price, expiration) {
    super(price);
    this.expiration = expiration || 'two hours';
  }
  getExpirationMessage() {
    return `This is a flash offer and expires in ${this.expiration}.`;
  }
  isRewardsEligible(user) {
    return super.isRewardsEligible(user) && this.price > 20;
  }
  getRewards(user) {
    if (this.isRewardsEligible(user)) {
      this.price = this.price * 0.8;
    }
  }
}

export { FlashCoupon };
```

JavaScript is a prototype language. Classes as you’re using them are simply a familiar syntax for a different paradigm. The benefit is that because they are using the same prototype actions under the hood, you can combine classes with legacy code.

### Extend Existing Prototypes with Class