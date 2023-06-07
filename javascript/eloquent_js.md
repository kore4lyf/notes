# Eloquent JavaScript
It is not uncommon for code to look like this:
```js
if (x == "value1") action1();
else if (x == "value2") action2();
else if (x == "value3") action3();
else defaultAction();
```
There is a construct called switch that is intended to express such a “dispatch” in a more direct way.
Here is an example:
```js
switch (prompt("What is the weather like?")) {
  case "rainy":
    console.log("Remember to bring an umbrella.");
    break;
  case "sunny":
    console.log("Dress lightly.");
  case "cloudy":
    console.log("Go outside.");
    break;
  default:
    console.log("Unknown weather type!");
    break;
}
```



## Closure
A function that references bindings from local scopes around it is called a closure.
```js 
function multiplier(factor) {
  return number => number * factor;
}
let twice = multiplier(2);
console.log(twice(5));
```


## Recursion
But this implementation has one problem: in typical JavaScript implementations, it’s about three times slower than the looping version.
Running through a simple loop is generally cheaper than calling a function multiple times.

```js 
function findSolution(target) {
  function find(current, history) {
    if (current == target) {
      return history;
    } else if (current > target) {
      return null;
    } else {
      return find(current + 5, `(${history} + 5)`) ||
      find(current * 3, `(${history} * 3)`);
    }
  }
  return find(1, "1");
}
console.log(findSolution(24));
// → (((1 * 3) + 5) * 3)
```

!
find that are made when searching

for a solution for the number 13.

find(1, "1")
find(6, "(1 + 5)")
find(11, "((1 + 5) + 5)")
find(16, "(((1 + 5) + 5) + 5)")
too big
find(33, "(((1 + 5) + 5) * 3)")
too big
find(18, "((1 + 5) * 3)")
too big
find(3, "(1 * 3)")
find(8, "((1 * 3) + 5)")
find(13, "(((1 * 3) + 5) + 5)")
found!



## Function
- If you find yourself rewritting a protion of code twice or three, modularize it.
- It's mostly better to write a function the does a specific task than trying to combine another functionality in one function.


## String methods

###  padStart
It takes the desired length and padding character as arguments.
```js
console.log(String(6).padStart(3, "0"));
// → 006
``` 


### repeat
A string can be repeated with the repeat method.
which creates a new string containing multiple copies of the original string, glued together.

```js 
console.log("LA".repeat(3));
// → LALALA
``` 


## Generating new Object with similar pattern
Write a function arrayToList that builds up a list structure like the one shown when given [1, 2, 3] as argument. 
 
Also write a listToArray function that produces an array from a list. 
 
Then add a helper function prepend, which takes an element and a list and creates a new list that adds the element to the front of the input list, and nth, which takes a list and a number and returns the element at the given position in the list (with zero referring to the first element) or undefined when there is no such element.

 If you haven’t already, also write a recursive version of nth.
 


function arrayToList(array) {
  let list = null;
  for (let i = array.length - 1; i >= 0; i--) {
    list = {value: array[i], rest: list};
  }
  return list;
}

function listToArray(list) {
  let array = [];
  for (let node = list; node; node = node.rest) {
    array.push(node.value);
  }
  return array;
}

function prepend(value, list) {
  return {value, rest: list};
}

function nth(list, n) {
  if (!list) return undefined;
  else if (n == 0) return list.value;
  else return nth(list.rest, n - 1);
}

console.log(arrayToList([10, 20,30,40,50]));
// → {value: 10, rest: {value: 20, rest: null}}
//console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
//console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
//console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20



## Taking function as a parameter
```js 
function repeat(n, action) {
for (let i = 0; i < n; i++) {
action(i);
}
}
repeat(3, console.log);
// → 0
// → 1
// → 2

let labels = [];
repeat(5, i => {
labels.push(`Unit ${i + 1}`);
});
console.log(labels);
// → ["Unit 1", "Unit 2", "Unit 3", "Unit 4", "Unit 5"]
```


## Higher-order functions
Functions that operate on other functions, either by taking them as arguments or by returning them, are called higher-order functions. 

Higher-order functions allow us to abstract over actions, not just values. They come in several forms. For example, we can have functions that create new functions.
```js
function greaterThan(n) {
return m => m > n;
}
let greaterThan10 = greaterThan(10);
console.log(greaterThan10(11));
// → true
``` 

And we can have functions that change other functions.
```js 
function noisy(f) {
return (...args) => {
console.log("calling with", args);
let result = f(...args);
console.log("called with", args, ", returned", result);
return result;
};
}
noisy(Math.min)(3, 2, 1);
// → calling with [3, 2, 1]
// → called with [3, 2, 1] , returned 1
```



## Strings and character codes 
JavaScript strings are encoded as a sequence of 16-bit numbers. UTF-16 is generally considered a bad idea today. 
UTF-16, the format used by JavaScript strings describes most common characters using a single 16-bit code unit but uses a pair of two such units for others.
Unfortunately, obvious operations on JavaScript strings, such as getting their length through the length property and accessing their content using square brackets, deal only with code units.

```js
// Two emoji characters, horse and shoe
let horseShoe = "🐴👟";
console.log(horseShoe.length);
// → 4
console.log(horseShoe[0]);
// → (Invalid half-character)
console.log(horseShoe.charCodeAt(0));
// → 55357 (Code of the half-character)
console.log(horseShoe.codePointAt(0));
// → 128052 (Actual code for horse emoji)
```

JavaScript’s charCodeAt method gives you a code unit, not a full character code. The codePointAt method, added later, does give a full Unicode character. 


Like codePointAt, this type of loop was introduced at a time where people were acutely aware of the problems with UTF-16.
When you use it to loop over a string, it gives you real characters, not code units.
```js
let roseDragon = "🌹🐉";
for (let char of roseDragon) {
console.log(char);
}
// → 🌹
// → 🐉
```

If you have a character (which will be a string of one or two code units), you can use codePointAt(0) to get its code.


## Encapsulation
The core idea in object-oriented programming is to divide programs into smaller pieces and make each piece responsible for managing its own state.
This way, some knowledge about the way a piece of the program works can be kept local to that piece. Someone working on the rest of the program does not have to remember or even be aware of that knowledge. Whenever these local details change, only the code directly around it needs to be updated.
Different pieces of such a program interact with each other through interfaces, limited sets of functions or bindings that provide useful functionality at a more abstract level, hiding their precise implementation.

> It is also common to put an underscore (_) character at the start of property names to indicate that those properties are private.

Separating interface from implementation is a great idea. It is usually called **encapsulation**.


## Prototypes
```js
let empty = {};
console.log(empty.toString);
// → function toString()…{}
console.log(empty.toString());
// → [object Object]
``` 

A prototype is another object that is used as a fallback source of properties. When an object gets a request for a property that it does not have, its prototype will be searched for the property, then the prototype’s prototype, and so on.
```js
console.log(Object.getPrototypeOf({}) ==

Object.prototype);

// → true
console.log(Object.getPrototypeOf(Object.prototype));
// → null
```

Many objects don’t directly have Object.prototype as their prototype but instead have another object that provides a different set of default properties. Functions derive from Function.prototype, and arrays derive from Array.prototype.
```js
console.log(Object.getPrototypeOf(Math.max) ==
Function.prototype);
// → true
console.log(Object.getPrototypeOf([]) ==
Array.prototype);
// → true
```


