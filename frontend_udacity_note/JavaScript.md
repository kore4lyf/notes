# JAVASCRIPT 

##JavaScript was Created for the Web
JavaScript was created in 1995 to make it easier to add interactive and dynamic elements to websites.
Today, JavaScript is used for all sorts of applications - from programming robots to writing game scripts. Even some code editors were built with JavaScript.

## Where Did JavaScript Come From?
The first version of JavaScript was created in just ten days 1995 by Brendan Eich. Eich was working on Netscape Navigator, one of the Internet's first web browsers. Eich's goal was to add the capability for dynamic web pages, which, at that time, were simple pages of HTML and CSS.

## Why Is It Called Javascript?
JavaScript was originally called LiveScript, but it was changed back to JavaScript as a marketing decision to piggyback off Java's popularity. Despite the name, JavaScript is not related to Java in any way.

## The Evolution of JavaScript
As the language evolved, competing versions of the language emerged. To standardize the language, JavaScript was brought to Ecma International, an industry association "dedicated to the standardization of information and communication systems." That's why you might hear JavaScript referred to as ECMAScript.

The standards body has transitioned to a year-based number to promote a more consistent release cycle. So we have ES2016, ES2017, and so on. You can see current specifications on the ECMA website. ECMA-262, and you can even look over drafts of proposed updates ECMAScript® 2022 Language Specification

JavaScript Today
JavaScript has grown to be one of the most popular programming languages globally and is considered one of the foundational pillars of front-end web development.

Example of a JavaScript code:
```js 
document.body.addEventListener('click', function () {
     const myParent =document.getElementsByTagName("h1")[0]; 
     const myImage = document.createElement("img");
     myImage.src = 'https://thecatapi.com/api/images/get?format=src&type=gif';
     myParent.appendChild(myImage);
     myImage.style.marginLeft = "160px";
});
``` 

## Data Types 
Data and data types are the building blocks of any programming language because they help us organize information and determine how our programs will run.
In this lesson we will learn how to define and manipulate the primitive data types of JavaScript.
- number
- string
- booleans
- undefined

 type(null) => object

> Exponent	a ** b	Raises a to the power of b 

##### JavaScript Has Three Ways to Declare Variables - var, let, and const
With var we create a variable that is available in the global scope -- which means it can be used anywhere in our program. We'll talk more about scope later, but for now, keep in mind that globally scoped variables are not a good practice.

Here's why: in a small program with just a few variables, it's easy to keep track of the variables and avoid collisions. But when you are working on a complex project or with a large team. It is very easy to inadvertently overwrite an existing variable that is hidden in another part of the program. let and const avoid this issue because they are only available in the scope where they are declared. Again, more on scope later. 

##### Best Practice #1
Always use let or const instead of var

##### Which to Use - let or const?
Use let when we think that the value of a variable might change
let lets us to assign a new value to the variable name when needed.
Use const when we think that the value of a variable is fixed
A variable declared with const cannot be assigned a new value. It's value is constant.
So which should be your default choice? That's easy. Pick the one that gives you more control: const. Using const means that your program will throw an error if there is an attempt to change the value of the variable when the code runs. If that is an intended outcome, you can go back and revise your code to declare the variable with let. If you did not intend for the value to change, congratulations! You've just discovered a bug that you can fix before it causes any problems.

##### Best Practice #2
If you aren't sure, use const. You can revise your code later to replace the const with let if needed.

##### Practice let and const
Try to answer these questions using what you know about let and const. If you aren't sure, open up the console and run these code snippets to see what happens.


##### ASCII
Alternatively, you can use the String’s charAt() method to access individual characters of a String. For example, quote.charAt(6) 
- Print the ASCII Character of a string 
```js 
// Pick a string. Your string can have any number of characters.
const my_string = "a";

// Calculate the ASCII value of the first character, i.e. the character at the position 0. 
const ASCII_value = my_string.charCodeAt(0);
```

##### What is the Difference Between null and undefined?
null refers to the "value of nothing", while undefined refers to the "absence of value".

What is NaN?
NaN stands for "Not-A-Number" and it's often returned indicating an error with number operations. For instance, if you wrote some code that performed a math calculation, and the calculation failed to produce a valid number, NaN might be returned.
e.g. 5/"hello"



## Conditionals
##### Equality
So far, you’ve seen how you can use == and != to compare numbers and strings for equality. However, if you use == and != in situations where the values that you're comparing have different data-types, it can lead to some interesting results. For example,

"1" == 1
Returns: true

and

0 == false
Returns: true. The == operator is unable to differentiate 0 from false.

' ' == false
Returns: true. Both the operands on either side of the == operator are first converted to zero, before comparison.

All of the above three evaluate to true. The reason for such interesting outcomes is **Type Conversion**. In the case of regular comparison, the operands on either side of the == operator are first converted to numbers, before comparison. Therefore, a ' ', false, and 0 are all considered equal. Similarly, a '1' and 1 are also considered equal. If we don't want to convert the operands, before comparison, we have to use a strict comparison ===, that is explained below.

>  it’s actually considered bad practice to use the == and != operators when comparing values for equality.
Instead, in JavaScript it’s better to use strict equality to see if numbers, strings, or booleans, etc. are identical in type and value without doing the type conversion first. To perform a strict comparison, simply add an additional equals sign = to the end of the == and != operators.
i.e === or !==

##### Truthy and Falsy
Every value in JavaScript has an inherent boolean value. When that value is evaluated in the context of a boolean expression, the value will be transformed into that inherent boolean value.

Here’s the list of all of the falsy values:
- the Boolean value false
- the null type
- the undefined type
- the number 0
- the empty string ""
- the odd value NaN (stands for "not a number", check out the NaN


Here are some examples of truthy values:
- 1
- true
- 42
- "pizza"
- "0"
- "null"
- "undefined"
- {}
- []

> All objects are truthy


##### So Many Options!
Play Video
If you find yourself repeating else if statements in your code, where each condition is based on the same value, like this:
```js
if (option === 1) {
  console.log("You selected option 1.");
} else if (option === 2) {
  console.log("You selected option 2.");
} else if (option === 3) {
  console.log("You selected option 3.");
} else if (option === 4) {
  console.log("You selected option 4.");
} else if (option === 5) {
  console.log("You selected option 5.");
} else if (option === 6) {
  console.log("You selected option 6.");
}
```
then it might be time to use a switch statement.

Switch Statement
A switch statement is an another way to chain multiple else if statements that are based on the same value without using conditional statements. Instead, you just switch which piece of code is executed based on a value.
```js
switch (option) {
  case 1:
    console.log("You selected option 1.");
  case 2:
    console.log("You selected option 2.");
  case 3:
    console.log("You selected option 3.");
  case 4:
    console.log("You selected option 4.");
  case 5:
    console.log("You selected option 5.");
  case 6:
    console.log("You selected option 6.");
}
```

example: 
```js 
const month = 7;
let days;

switch(month) {
  case 1:
  case 2:
    days = 28;
    break;
  case 3:
  case 4:
    days = 30;
    break;
  case 5:
  case 6:
    days = 30;
    break;
  case 7:
  case 8:
  case 9:
    days = 30;
    break;
  case 10:
  case 11:
    days = 30;
    break;
  case 12:
  default:
    days = 31;
}
console.log("There are " + days + " days in this month.");
```
> case 7 doesn't include any break statements so the code falls through from case 7 until the break statement in the code for case 9.



If winner is equal to 3, then what will be output to the console?
```js
let prize = "";

switch (winner) {
  case 1:
    prize += "a trip for two to the Bahamas and ";
  case 2:
    prize += "a four piece furniture set.";
    break;
  case 3:
    prize += "a smartwatch and ";
  default:
    prize += "tickets to the circus.";
}

console.log("You've won " + prize);
```
You've won a smartwatch and tickets to the circus
> Falling through should only be used in similar situations; otherwise, make sure to break each switch case to avoid unexpected behavior.


##### Using commas with numbers 
To print out the average salary with commas (i.e. 59,124), use the toLocaleString() method and pass it the locale "en-US". For example, salary.toLocaleString("en-US").


##### if else and else if 
Example 1:
```js
if (condition)
    //your code on one line
``` 

Example 2: 
```js 
if (condition)
    //Your code on one line 
else: 
    //your code on one line
 ```
 
Example 3: 
```js 
if (condition){
    /* 
     * Multi line code
     */
} else if (condition) {
    /* 
     * Multi line code
     */   
} else {
    /* 
     * Multi line code
     */
}
``` 

##### Ternary Operator
syntax: 
conditional ? (if condition is true) : (if condition is false)

```js
age = 22;
shoeSize = age > 20 ? 40 : 35;
```

Truthy or falsy value can also be used 
```
ate = true; 
serve = ate ? "skip" : "serve"
``` 

##### Nested Ternary Operator 
example
```js
const eatsPlants = false;
const eatsAnimals = true;
let category;

// your code
category = eatsPlants ? (eatsAnimals ? "omnivore" : "herbivore") : (eatsAnimals ? "carnivore" : "undefined")

// output
console.log(category);
``` 



## Loops 

forloop Example:
```js 
for (let i = 0; i < 6; i = i + 1) {
  console.log("Printing out i = " + i);
}
``` 

while Loop Example:
```js 
while(condition) {
    //your codes
}
```

## Assignment Operators
An assignment operator is a shorthand way to peform a mathematical operation on a variable and assigns that value to the variable.

You can use assignment operators for addition, subtraction, multiplication, and division.
```js
// Add y to x
x += y // x = x + y

// Subtract y from x
x -= y // x = x - y

// Multiply x by x
x *= y // x = x * y

// Divide x by y
x /= y // x = x / y
```

## Increment and Decrement Operator
x++ postfix
++x prefix 
--x 
x-- 

## Functions
What Are Functions?
Functions are reusable chunks of code.
Functions are very helpful as the problems we need to solve with our code get more complex. We'll often need to repeat steps on different inputs -- and functions let us do that!

```js 
function reverseString(reverseMe) {
    let reversed = "";
    for (let i = reverseMe.length - 1; i >= 0; i--) {
        reversed += reverseMe[i];
    }
    return reversed;
}

console.log(reverseString("Julia"));
``` 

Annotated Function
```js
// Set one parameter to hold the value of the input string
function reverseString(reverseMe) {
    // Declare a variable with an empty string to store the reversed string
    let reversed = "";
    // Loop through the `reverseMe` string from back to front
    for (let i = reverseMe.length - 1; i >= 0; i--) {
        // Add each character to the end of `reversed`
        reversed += reverseMe[i];
    }
    // Return the completed string when the loop is complete
    return reversed;
}

console.log(reverseString("Julia"));
```

##### Output from a Function
There are two ways to get output from a function:
console.log is used to print a value to the JavaScript console.
- The return keyword is used to stop execution of a function and *return the value back to the caller.
- Points to Remember About Returning and Printing
Returning is different from printing
- Printing a value to the JavaScript console only displays the value but the value can't be used anwywhere else.

##### Printing is great for debugging code
- Using console.log to test your code in the JavaScript console or to print out values as your code runs can be extremely helpful in pinpointing where something has gone wrong in your code.

- All function calls return something
If a return value is not specified, the function will return undefined.

- The return keyword will stop the execution of a function
Any code after a return statement will be ignored.
```js 
function isPrime(integer) {
    for (let x = 2; x < integer; x++ ) {
        if(integer % x === 0) {
            console.log(integer + " is divisible by " + x);
            return false
        }
    }

    return true
}
``` 

##### Understanding Scope
Scope is the part of the program where a particular identifier, such as a variable or a function name, is visible or accessible.

As a programmer, you'll run into a lot of situations where understanding scope will be critical to writing effective and error-free code.

The Three Types of Scope in JavaScript
JavaScript has three types of scope.
- global scope
- function scope
- block scope

The first two are pretty simple:
Variables declared in the global scope are accessible to any other part of the program.
Variables declared inside a function are in the function scope which means they are only accessible inside that function.

##### How Does Javascript Find a Variable? It Uses the Scope Chain
When the JavaScript engine is looking for a variable, it starts from the current scope and moves outward:

The JavaScript engine will start looking in the scope where the variable is requested.
If it can't find it in the current scope, it moves out one level and checks again.
It keeps moving to the outer scope until it has reached the global scope.
If the JavaScript engine checks all of the outer functions and global scope, and it still can't find the identifier then it will return a Reference error.


##### A New Type of Scope
With the ES6 version of JavaScript, a new type of scope was created: block scope which limits the scope of a variable to the block of code where it is declared.

What is a Block?
A block is a group of statements in between curly braces. You've seen blocks in conditional statements:
```js
const x = 5;
if (x < 6) {
  const double = x * 2;
  console.log(double);
} else {
  const half = x / 2;
  console.log(half);
}
``` 


## A New Type of Scope
With the ES6 version of JavaScript, a new type of scope was created: block scope which limits the scope of a variable to the block of code where it is declared.

What is a Block?

A block is a group of statements in between curly braces. You've seen blocks in conditional statements:

```js
const x = 5; if (x < 6) { const double = x * 2; console.log(double); } else { const half = x / 2; console.log(half); }
``` 

> Block Scope Only Works with let And const, Unlike with function scope, if you declare a variable inside a block using var the variable will be accessible both inside the block and in the block's outer scope.

```js
let fruit = "apple"; 

if (fruit !== "banana") {
    let fruit = "banana";
    console.log(fruit);   
}
console.log(fruit);   
```  
R - > banana 🍌
apple 🍎



##### Scope Can Be Tricky!
Scope can be a tricky subject, especially when you're working in both global and function scope.

Shadowing occurs when variables in different scopes have the same name. When this happens the variable in the inner scope overrides the variable in the outer scope.

Example: scope shadowing
```
let bookTitle = "Le Petit Prince";
console.log(bookTitle);

function displayBookEnglish() {
    bookTitle = 'The Little Prince';
    console.log(bookTitle);
}

displayBookEnglish()
console.log(bookTitle);    
``` 

Prints
Le Petit Prince
The Little Prince
The Little Prince

Best Practice: Declare a New Variable
To avoid scope override, always declare a new variable inside your function. This prevents JavaScript from reassigning the value of the variable in the outer scope.

Example: no shadowing
```js 
let bookTitle = "Le Petit Prince";
console.log(bookTitle);

function displayBookEnglish() {
    let bookTitle = 'The Little Prince';
    console.log(bookTitle);
}

displayBookEnglish()
console.log(bookTitle);     
``` 

Prints
Le Petit Prince
The Little Prince
Le Petit Prince


## Function Expression
When a function is stored inside a variable it's called a **function expression.**
```js
const catSays = function(max) {
  let catMessage = "";
  for (let i = 0; i < max; i++) {
    catMessage += "meow ";
  }
  return catMessage;
};
```
Notice how the function keyword no longer has a name.
```js
const catSays = function(max) { 
  // code here 
};
```
It's an anonymous function, a function with no name, and you've stored it in a variable called catSays.


##### Hoisting
Sometimes your JavaScript code will produce errors that may seem counterintuitive at first. Hoisting is another one of those topics that might be the cause of some of these tricky errors you're debugging.

Hoisting is a result of how JavaScript is interpreted by your browser. Essentially, before any JavaScript code is executed, all function declarations and variables declared with var are hoisted, which means they're raised to the top of the function scope.

Let's take a look at an example:

JavaScript is Different!
In most programming languages, you have to declare a function or variable before you can call it.
Intuitively, you might think "This code shouldn't work!" because we're trying to call findAverage before it is declared:

```js
findAverage(5, 9);

function findAverage(x, y) {
    var answer = (x + y) / 2;
    return answer;
}
But, surprisingly it does work!

Returns 7
```

##### What About Function Expressions?
Function expressions are not hoisted, since they involve variable assignment, and only variable declarations are hoisted. The function expression will not be loaded until the interpreter reaches it in the script.

Example: Function Expressions vs Function Declarations
The function expression meow is not hoisted so this code throws an error:
```js
function cat() {
    console.log(meow(2));
    const meow = function (max) {
        let catMessage = '';
        for (let i = 0; i < max; i++) {
            catMessage = 'meow ';
        }
        return catMessage;
    };
    function purr() {
        return 'purrrr!';
    }
}

cat();
```
Returns Uncaught ReferenceError: Cannot access 'meow' before initialization

The function declaration purr is hoisted so this code runs without error:
```js
function cat() {
    console.log(purr());
    const meow = function (max) {
        let catMessage = '';
        for (let i = 0; i < max; i++) {
            catMessage = 'meow ';
        }
        return catMessage;
    };
    function purr() {
        return 'purrrr!';
    }
}

cat();
```
Prints purrrr!


**What will be returned when you run this code?**
```js
let x = 1;

function addTwo() {
   let x = x + 2;
}

addTwo();
x = x + 1;
console.log(x);
```

Uncaught ReferenceError: Cannot access 'x' before initialization

##### Functions as Parameters
Being able to store a function in a variable makes it really simple to pass the function into another function. A function that is passed into another function is called a callback. 
```js 
// function expression catSays
const catSays = function(max) {
  let catMessage = "";
  for (let i = 0; i < max; i++) {
    catMessage += "meow ";
  }
  return catMessage;
};

// function declaration helloCat accepting a callback
function helloCat(callbackFunc) {
  return "Hello " + callbackFunc(3);
}

// pass in catSays as a callback function
helloCat(catSays);
``` 


##### Named Function Expressions

You can create a function expression with a named function, like this:
```js
const favoriteMovie = function movie() {
    return "The Fountain";
};
```
But you still need to use its assigned identifier to call it:
```js
favoriteMovie();
```
Returns 'The Fountain'

If you try to use the function name to call the function you'll get an error:
```js
movie();
```
Returns Uncaught ReferenceError: movie is not defined

##### Inline Function expressions
When you pass a function inline as an argument to another function. 

Compare this two examples: 
Example 1
```js 
// Function expression that assigns the function displayFavorite 
// to the variable favoriteMovie
const favoriteMovie = function displayFavorite(movieName) {
    console.log("My favorite movie is " + movieName);
};

// Function declaration that has two parameters: a function for displaying
// a message, along with a name of a movie
function movies(messageFunction, name) {
    messageFunction(name);
}

// Call the movies function, pass in the favoriteMovie function and name of movie
movies(favoriteMovie, "Finding Nemo");
```
Returns: My favorite movie is Finding Nemo

But you could have bypassed the first assignment of the function, by passing the function to the movies() function inline.
```js
// Function declaration that takes in two arguments: a function for displaying
// a message, along with a name of a movie
function movies(messageFunction, name) {
    messageFunction(name);
}

// Call the movies function, pass in the function and name of movie
movies(function displayFavorite(movieName) {
    console.log("My favorite movie is " + movieName);
}, "Finding Nemo");
```
Returns: My favorite movie is Finding Nemo

##### Why Use Anonymous Inline Function Expressions?
Using an anonymous inline function expression might not seem useful at first. Why define a function that can only be used once and you can't even call it by name?

Anonymous inline function expressions are often used with function callbacks that are unlikely to be reused elsewhere. Yes, you could store the function in a variable, give it a name, and pass it in like you saw in the examples above. However, when you know the function is not going to be reused, it could save you many lines of code to just define it inline.

For example, we can make the callback function in movies an anonymous inline function like this:
```js
function movies(messageFunction, name) {
    messageFunction(name);
}

movies(function (movieName) {
    console.log("My favorite movie is " + movieName);
}, "Finding Nemo");
```

## Array
An array is a data structure we can use to store multiple values. Values in an array are ordered (like a numbered list). The numbering of the array order starts at 0 -- not at 1. 

```js
const donuts = [  // start of the array
  "glazed", // each element separated by a comma
  "chocolate frosted", 
  "cinnamon",
  "sprinkled",
  "powdered",  
  "cinnamon sugar",
  "glazed cruller",
  "chocolate cruller",
  "cookies",
  "Boston creme", 
  "powdered jelly filled",
  "creme de leche",
  "glazed donut holes",
  "blueberry donut holes",
  "cake donut holes",  
  "chocolate donut holes"
];  // end of the Array
``` 

##### Arrays
An array is useful because it stores multiple values into a single, organized data structure. You can define a new array by listing values separated with commas between square brackets [].
```js
// creates a new empty array
const emptyArray = [];

// creates a `donuts` array with three strings
const donuts = ["glazed", "powdered", "jelly"];
```
But strings aren’t the only type of data you can store in an array. You can also store numbers, booleans… and really anything!
```js
// creates a `mixedData` array with mixed data types
const mixedData = ["abcd", 1, true, undefined, null, "all the things"];
```
You can even store an array in an array to create a nested array!
```js
// creates a `arraysInArrays` array with three arrays
const arraysInArrays = [[1, 2, 3], ["Julia", "James"], [true, false, true, false]];
```
Nested arrays can be particularly hard to read, so it's common to write each nested array on one line, using a newline after each comma:
```js
const arraysInArrays = [
  [1, 2, 3], 
  ["Julia", "James"], 
  [true, false, true, false]
];
```

##### Using the Array Constructor
You may also see arrays created this way:
```js
// creates a new empty array
const emptyArray = new Array();

// creates a `donuts` array with three strings
const donuts = new Array("glazed", "powdered", "jelly");
```
This syntax is valid, but it is preferred to use the literal constructor because the syntax is simpler and more intuitive.
```js
// creates a new empty array
const emptyArray = [];

// creates a `donuts` array with three strings
const donuts = ["glazed", "powdered", "jelly"];
```

> Avoid accessing elements outside the bounds of an array. If you try to, the missing element will be returned back as undefined !

##### Why are we using const instead of let when we declare arrays?
Another great question!

A simple way to think about the difference between let and const is that we use let when we anticipate that the value of a variable will change and const when we think it will be constant -- but that shorthand doesn't tell the whole story. **The difference between let and const is not so much about change but about reassignment**

let allows you to reassign the variable
const doesn't allow you to reassign the variable
The decision about whether we need to be able to reassign the variable is based on what type of variable it is and how JavaScript stores those values.

> JavaScript will throw an error if you try to re-declare a variable you previously declared with let. You'll get this error: Uncaught SyntaxError: Identifier 'myArray' has already been declared 

```js 
let myVar = 2;
let myVar = 4;
``` 

> JavaScript will throw an error if you try to re-declare a variable you previously declared with const. You'll get this error: Uncaught SyntaxError: Identifier 'myArray' has already been declared
JavaScript allows you can reassign the value of an array element -- and even assign it to a different type when you assign the array with const.

```js 
const myVar = 2;
const myVar = 4;
``` 

> JavaScript allows you can reassign the value of an array element -- and even assign it to a different type when you assign the array with const. 

```js 
const myVar = [1, 2, 3, 4, 5];
const myVar[3] = "Hello, world!";
``` 

> We use const to declare arrays because JavaScript is assigning a reference that points to that array. We can change whatever we want inside the array, but we cannot change which array the variable points to.


##### Primitive vs. Object Types in JavaScript
String, Number, Boolean, undefined and null are considered Primitive Types in JavaScript. These relatively simple data types represent just one value which makes it easy for JavaScript to store that value. So when you assign a primitive value to a variable, JavaScript actually assigns that value.

Arrays are more complicated because they consist of a list of values which makes storage much more complicated. Arrays are actually Object types which means that instead of assigning all of the values of the list to the array, JavaScript simply assigns a reference to where to find the values in the array. Even if the values inside the object change, the reference address doesn't.


##### Array Methods 
Array properties include length which is similar to the length method for String types.

Common Array methods include:
**reverse**: reverses the order of the elements in an array
**sort**: sorts the elements in an array
**push**: adds elements to an array
**pop**: removes elements from an array

##### Array.length
You can find the length of an array by using its length property.
```js 
const donuts = ["glazed", "powdered", "sprinkled"];
console.log(donuts.length);
```
Prints: 3

##### Push
Similar to pythons append.
You can use the push() method to add elements to the end of an array.
```js
const donuts = ["glazed", "chocolate frosted", "Boston creme", "glazed cruller", "cinnamon sugar", "sprinkled"];.
donuts.push("powdered"); 
```

**Returns: 7 **
donuts array: ["glazed", "chocolate frosted", "Boston creme", "glazed cruller", "cinnamon sugar", "sprinkled", "powdered"]

##### Pop
Alternatively, you can use the pop() method to remove elements from the end of an array.
```js
const donuts = ["glazed", "chocolate frosted", "Boston creme", "glazed cruller", "cinnamon sugar", "sprinkled", "powdered"];

donuts.pop(); // pops "powdered" off the end of the `donuts` array
donuts.pop(); // pops "sprinkled" off the end of the `donuts` array
donuts.pop(); // pops "cinnamon sugar" off the end of the `donuts` array
``` 
Returns: "cinnamon sugar"
donuts array: ["glazed", "chocolate frosted", "Boston creme", "glazed cruller"]


##### Splice
splice() is another handy method that allows you to add and remove elements from anywhere within an array.

While push() and pop() limit you to adding and removing elements from the end of an array, splice() lets you specify the index location to add new elements, as well as the number of elements you'd like to delete (if any).
```js
const donuts = ["glazed", "chocolate frosted", "Boston creme", "glazed cruller"];
donuts.splice(1, 1, "chocolate cruller", "creme de leche"); // removes "chocolate frosted" at index 1 and adds "chocolate cruller" and "creme de leche" starting at index 1
```
Returns: ["chocolate frosted"]
donuts array after calling the splice() method: ["glazed", "chocolate cruller", "creme de leche", "Boston creme", "glazed cruller"]


Following is the syntax of **splice()** method: arrayName.splice(arg1, arg2, item1, ....., itemX); where,

**arg1** = Mandatory argument. Specifies the starting index position to add/remove items. You can use a negative value to specify the position from the end of the array e.g., -1 specifies the last element.
**arg2** = Optional argument. Specifies the count of elements to be removed. If set to 0, no items will be removed.
item1, ....., itemX are the items to be added at index position arg1

> splice() method returns the item(s) that were removed.

##### sort 
The sort() method can sort an array.
```js
let sort = [.......];
sortMe.sort();
```
Returns: [1, 10, 2, 6, 7]

Did you notice that 10 appears before 2? Traditionally, the number 2 comes before 10. But in the .sort() method, numbers are converted to Unicode strings, so 10 comes before 2 in Unicode order.

##### reverse 
```js
reverseMe = [...........]
reverseMe.reverse();
```
Returns: [ 'o', 'l', 'l', 'e', 'h' ]


##### join
converts an array to a string.
```js
arrayVarName.join();
```


##### removing the first element of an array 
use 
- shift()
- splice()


##### forEach Loop
forEach Syntax
The function that you pass to the forEach() method can take up to three parameters. We have named them element, index, and array, but you can name them whatever you like.
```js
const myArray = ["A", "B", "C", "D"];

function myAwesomeFunction(element, index, array) {
  console.log("Element: ", element);
  console.log("Index: ", index);
  console.log("Array: ", array);
}
```
myArray.forEach(myAwesomeFunction);
The forEach() method will call this function once for each element in the array (hence the name forEach.) Each time, it will call the function with different arguments. The element parameter will get the value of the array element. The index parameter will get the index of the element (starting with zero). The array parameter will get a reference to the whole array, which is handy if you want to modify the elements.

Here's another example:
```js
words = ["cat", "in", "hat"];
words.forEach(function(word, num, all) {
  console.log("Word " + num + " in " + all.toString() + " is " + word);
});
```
Prints:
Word 0 in cat,in,hat is cat
Word 1 in cat,in,hat is in
Word 2 in cat,in,hat is hat


##### map 
map Loops
Creating a new array from an existing array is simple with the powerful map() method.

With the map() method, you can take an array, perform some operation on each element of the array, and return a new array.
```js
const newArray = myArray.map(function (elem) {
  elem = elem + 100;
  return elem;
});

console.log(newArray); //[101, 102, 103, 104, 105]
```
The map() method accepts one argument, a function that will be used to manipulate each element in the array. 


##### TIP: Check out the toFixed() method for numbers to help with rounding the values to a maximum of 2 decimal places. Note, that the method returns a string to maintain the "fixed" format of the number. So, if you want to convert the string back to a number, you can cast it or convert it back to a number:
```js
Number("1");
```
Returns: 1

##### Arrays in Arrays
Think of an Array in an Array as a Grid. 
You can use a single loop to access each row of the grid.
```js
for (let r = 0; r < grid.length; r++) {
  console.log(grid[r]);
}
```
And you can use nested loops, or a loop inside of a loop, to loop over each element of each of those rows.
```js
for (let r = 0; r < grid.length; r++) {
  for (let c = 0; c < grid[r].length; c++) {
    console.log(grid[r][c]);
  }
}
```
The outer loop will cycle through each row and then in the row that's currently being iterated over, the inner loop will iterate over each cell.



## Object 

##### Using typeof
typeof is handy operator that returns the name of the data type that follows it. Try running this code in your console:

```js
typeof "hello" // returns "string"  
typeof true // returns "boolean"  
typeof [1, 2, 3] // returns "object" (Arrays are a type of object)  
typeof function hello() { } // returns "function"  
``` 

##### Creating an Object
Paste this JavaScript code in the console to create the object:
```js
const umbrella = {
  color: "pink",
  isOpen: false,
  open: function() {
    if(umbrella.isOpen === true) {
      return "The umbrella is already opened!";
    } else {
      umbrella.isOpen = true;
      return "Julia opens the umbrella!";
    }
  }
}
```


##### Using the Object
Then run this code, one line at a time:

umbrella.isOpen; // returns false
umbrella.open(); // returns 'Julia opens the umbrella!'
umbrella.isOpen; // returns true

> Objects are JavaScript Object types that are assigned by reference, not by value.


What Is An Object?
An object is a data structure in JavaScript that let's you store data about a particular thing and helps you keep track of that data using a "key".
Person Example
Defining data about a person in isolated variables is clunky:
```js
const sisterName = "Sarah";
const sisterAge = 23;
const sisterParents = ["Alice", "Andy"];
const sisterSiblings = ["Julia"];
const sisterFavoriteColor = "purple";
const sisterPets = true;
```
An object allows you group this information into a meaningful structure:
```js
const sister = {
  name: "Sarah",
  age: 23,
  parents: ["Alice", "Andy"],
  siblings: ["Julia"],
  favoriteColor: "purple",
  pets: true
};
```

## Best Practices for Naming Object Properties
Using Quotes
Using quotes around property names is valid but not required -- but be careful! Sometimes quotes can mask naming problems with dot notation.

Problem 1: Using a number as the first character in a property name
```js
const person = {
  "name": "John",
  "age": 55,
  "1stChild": "James",  // USes a number as the first character in a property name
  "2ndChild": "Jarrod",
  "3rdChild": "Alexis"
};
```
person["1stChild"]; // returns "James"
person.1stChild; // returns Uncaught SyntaxError: Invalid or unexpected token
It would be even better to store the children in an array:
```js
const person = {
  name: "John",
  age: 55,
  children: ["James", "Jarrod","Alexis"]
};
```


Problem 2: Using spaces or hyphens in a property name
```js 
const garage = {
  "fire truck": {
    "color": "red",
    "wheels": 4,
    "operational": true
  },
   "race-car": {
    "color": "blue",
    "wheels": 4,
    "operational": false
  }, 
};
```

garage.fire truck; // returns Uncaught SyntaxError: Unexpected identifier
garage.race-car; // returns Uncaught ReferenceError: car is not defined
You can avoid these issues by using camelCase when you want a multi-word variable name:
```js
const garage = {
  "fireTruck": {
    "color": "red",
    "wheels": 4,
    "operational": true
  },
   "raceCar": {
    "color": "blue",
    "wheels": 4,
    "operational": false
  }, 
};
```

Naming Best Practices
- Don't use a number as the first character in a property name
- Don't use quotes around key names unless absolutely necessary
- Use camelCase when you need a multi-word variable name.


```js
const user = {
  email: "user@example.com",
  firstName: "first",
  lastName: "last"
};
```
console.log(user.email) uses dot notation to access the email property of user. console.log(user["email"]) uses bracket notation to access the email property of user.







