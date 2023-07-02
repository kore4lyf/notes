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




## Object
### Prototypes
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


### Methods

Methods are nothing more than properties that hold function values.

This is a simple method:
```js 
let rabbit = {};

rabbit.speak = function(line) {
  console.log(`The rabbit says '${line}'`);
};
rabbit.speak("I'm alive.");
// → The rabbit says 'I'm alive.'
```

Such a prototype object will itself have a prototype, often Object.
prototype, so that it still indirectly provides methods like toString.

> You can use Object.create to create an object with a specific prototype.

```js
let protoRabbit = {
speak(line) {
console.log(`The ${this.type} rabbit says '${line}'`);
}
};
let killerRabbit = Object.create(protoRabbit);
killerRabbit.type = "killer";
killerRabbit.speak("SKREEEE!");
// → The killer rabbit says 'SKREEEE!'
```

A property like speak(line) in an object expression is a shorthand way of defining a method. It creates a property called speak and gives it a function as its value.
The “proto” rabbit acts as a container for the properties that are shared by all rabbits. An individual rabbit object, like the killer rabbit,
contains properties that apply only to itself—in this case its type—and derives shared properties from its prototype.



###  Classes
A class defines the shape of a type of object—what methods and properties it has.
Such an object is called an instance of the class.

So to create an instance of a given class, you have to make an object that derives from the proper prototype, but you also have to make sure it, itself, has the properties that instances of this class are supposed to
have. This is what a constructor function does.

```js
function makeRabbit(type) {
  let rabbit = Object.create(protoRabbit);
  rabbit.type = type;
  return rabbit;
}
```

If you put the keyword new in front of a function call, the function is treated as a constructor. This means that an object with the right prototype is automatically created, bound to this in the function, and returned at the end of the function.
The prototype object used when constructing objects is found by taking the prototype property of the constructor function.

```js
function Rabbit(type) {
this.type = type;
}
Rabbit.prototype.speak = function(line) {
console.log(`The ${this.type} rabbit says '${line}'`);
};
let weirdRabbit = new Rabbit("weird");
```

Constructors (all functions, in fact) automatically get a property named prototype, which by default holds a plain, empty object that derives from Object.prototype. You can overwrite it with a new object if you want. Or you can add properties to the existing object, as the example does.
By convention, the names of constructors are capitalized so that they can easily be distinguished from other functions.

The actual prototype of a constructor is Function. prototype since constructors are functions. Its prototype property holds the prototype used for instances created through it.

```js
console.log(Object.getPrototypeOf(Rabbit) ==
Function.prototype);
// → true
console.log(Object.getPrototypeOf(weirdRabbit) ==
Rabbit.prototype);
// → true
``` 


### Class notation
So JavaScript classes are constructor functions with a prototype property. That is how they work, and until 2015, that was how you had to write them. These days, we have a less awkward notation.

```js
class Rabbit {
constructor(type) {
this.type = type;
}
speak(line) {
console.log(`The ${this.type} rabbit says '${line}'`);
}
}
let killerRabbit = new Rabbit("killer");
let blackRabbit = new Rabbit("black");
```

The class keyword starts a class declaration, which allows us to define a constructor and a set of methods all in a single place. Any number of methods may be written inside the declaration’s braces. 
The one named constructor is treated specially. It provides the actual constructor function, which will be bound to the name Rabbit. The others are packaged into that constructor’s prototype. Thus, the earlier class declaration is equivalent to the constructor definition from the previous section. It just looks nicer.


### Overriding derived properties
When you add a property to an object, whether it is present in the prototype or not, the property is added to the object itself. If there was already a property with the same name in the prototype, this property
will no longer affect the object, as it is now hidden behind the object’s own property.

```js
Rabbit.prototype.teeth = "small";
console.log(killerRabbit.teeth);
// → small
killerRabbit.teeth = "long, sharp, and bloody";
console.log(killerRabbit.teeth);
// → long, sharp, and bloody
console.log(blackRabbit.teeth);
// → small
console.log(Rabbit.prototype.teeth);
// → small
```



### Maps 
A map (noun) is a data structure that associates values (the keys) with other values. For example, you might want to map names to ages.

It is possible to use objects for this.
let ages = {
Boris: 39,
Liang: 22,
Júlia: 62
};
console.log(`Júlia is ${ages["Júlia"]}`);
// → Júlia is 62
console.log("Is Jack's age known?", "Jack" in ages);
// → Is Jack's age known? false
console.log("Is toString's age known?", "toString" in ages);
// → Is toString's age known? true

Here, the object’s property names are the people’s names, and the property values are their ages. But we certainly didn’t list anybody named toString in our map. Yet, because plain objects derive from Object.prototype, it looks like the property is there.
As such, using plain objects as maps is dangerous. There are several possible ways to avoid this problem. First, it is possible to create objects with no prototype. If you pass null to Object.create, the resulting object will not derive from Object.prototype and can safely be used as a map.

```js
console.log("toString" in Object.create(null));
// → false
```

Object property names must be strings. If you need a map whose keys can’t easily be converted to strings—such as objects—you cannot use an object as your map.
Fortunately, JavaScript comes with a class called Map that is written for this exact purpose. It stores a mapping and allows any type of keys.

```js
let ages = new Map();
ages.set("Boris", 39);
ages.set("Liang", 22);
ages.set("Júlia", 62);
console.log(`Júlia is ${ages.get("Júlia")}`);
// → Júlia is 62
console.log("Is Jack's age known?", ages.has("Jack"));
// → Is Jack's age known? false
console.log(ages.has("toString"));
// → false
``` 

If you do have a plain object that you need to treat as a map for some reason, it is useful to know that Object.keys returns only an object’s own keys, not those in the prototype. As an alternative to the in operator, you can use the hasOwnProperty method, which ignores theobject’s prototype.

```js
console.log({x: 1}.hasOwnProperty("x"));
// → true
console.log({x: 1}.hasOwnProperty("toString"));
// → false
``` 



### Checking If a value exists in a object 
```js 
let ages = {
Boris: 39,
Liang: 22,
Júlia: 62
};
console.log(`Júlia is ${ages["Júlia"]}`);
// → Júlia is 62
console.log("Is Jack's age known?", "Jack" in ages);
// → Is Jack's age known? false
console.log("Is toString's age known?", "toString" in ages);
// → Is toString's age known? true 
``` 

As an alternative to the in operator, you can use the hasOwnProperty method, which ignores theobject’s prototype.

```js
console.log({x: 1}.hasOwnProperty("x"));
// → true
console.log({x: 1}.hasOwnProperty("toString"));
// → false
``` 


### Polymorphism
When you call the String function (which converts a value to a string) on an object, it will call the toString method on that object to try to create a meaningful string from it. I mentioned that some of the standard prototypes define their own version of toString so they can create a string that contains more useful information than "[object Object]". You can also do that yourself.
```js
Rabbit.prototype.toString = function() {
return `a ${this.type} rabbit`;
};
console.log(String(blackRabbit));
// → a black rabbit
``` 





