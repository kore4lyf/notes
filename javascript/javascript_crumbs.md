# JavaScript

## JavaScript String Methods

### String Length

The length property returns the length of a string:

Example

```js
var txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var sln = txt.length;
```

R -> 26

### Finding a String in a String

The `indexOf()` method returns the index of (the position of) the first occurrence of a specified text in a string:

Example

```js
var str = "Please locate where 'locate' occurs!";
var pos = str.indexOf("locate");
```

The `lastIndexOf()` method returns the index of the last occurrence of a specified text in a string:

Example
var str = "Please locate where 'locate' occurs!";
var pos = str.lastIndexOf("locate");

> Both indexOf(), and lastIndexOf() return -1 if the text is not found.

**Both methods accept a second parameter as the starting position for the search:**

Example

```js
var str = "Please locate where 'locate' occurs!";
var pos = str.indexOf("locate", 15);
```

The lastIndexOf() methods searches backwards (from the end to the beginning), meaning: if the second parameter is 15, the search starts at position 15, and searches to the beginning of the string.

### Searching for a String in a String

The search() method searches a string for a specified value and returns the position of the match:

Example

```js
var str = "Please locate where 'locate' occurs!";
var pos = str.search("locate");
```

**NB**:

The two methods are NOT equal. These are the differences:p

- The search() method cannot take a second start position argument.
- The indexOf() method cannot take powerful search values (regular expressions).

### Extracting String Parts

There are 3 methods for extracting a part of a string:

- slice(start, end)
- substring(start, end)
- substr(start, length)

### The slice() Method

slice() extracts a part of a string and returns the extracted part in a new string.

The method takes 2 parameters: the start position, and the end position (end not included).

This example slices out a portion of a string from position 7 to position 12 (13-1):

Example

```js
var str = "Apple, Banana, Kiwi";
var res = str.slice(7, 13);
```

The result of res will be:
Banana

If a parameter is negative, the position is counted from the end of the string.

This example slices out a portion of a string from position -12 to position -6:

Example

```js
var str = "Apple, Banana, Kiwi";
var res = str.slice(-12, -6);
```

The result of res will be:

Banana

If you omit the second parameter, the method will slice out the rest of the string:

Example

```js
var res = str.slice(7);
```

Banana, Kiwi

> Negative positions do not work in Internet Explorer 8 and earlier.

### The substring() Method

substring() is similar to slice().

The difference is that substring() cannot accept negative indexes.

Example

```js
var str = "Apple, Banana, Kiwi";
var res = str.substring(7, 13);
```

The result of res will be:
Banana

> If you omit the second parameter, substring() will slice out the rest of the string.

### The substr() Method

substr() is similar to slice().

The difference is that the second parameter specifies the length of the extracted part.

Example

```js
var str = "Apple, Banana, Kiwi";
var res = str.substr(7, 6);
```

The result of res will be:
Banana

If the first parameter is negative, the position counts from the end of the string.

Example

```js
var str = "Apple, Banana, Kiwi";
var res = str.substr(-4);
```

The result of res will be:
Kiwi

### Replacing String Content

The replace() method replaces a specified value with another value in a string:

Example

```js
str = "Please visit Microsoft!";
var n = str.replace("Microsoft", "W3Schools");
```

> The replace() method does not change the string it is called on. It returns a new string.

By default, the replace() method replaces only the first match:

Example

```js
str = "Please visit Microsoft and Microsoft!";
var n = str.replace("Microsoft", "W3Schools");
```

> By default, the replace() method is case sensitive. Writing MICROSOFT (with upper-case) will not work:

To replace case insensitive, use a regular expression with an /i flag (insensitive):

Example

```js
str = "Please visit Microsoft!";
var n = str.replace(/MICROSOFT/i, "W3Schools");
```

To replace all matches, use a regular expression with a /g flag (global match):

Example

```js
str = "Please visit Microsoft and Microsoft!";
var n = str.replace(/Microsoft/g, "W3Schools");
```

### Converting to Upper and Lower Case

A string is converted to upper case with toUpperCase():

Example

```js
var text1 = "Hello World!";       // String
var text2 = text1.toUpperCase();  // text2 is text1 converted to upper
```

### The concat() Method

concat() joins two or more strings:

Example

```js
var text1 = "Hello";
var text2 = "World";
var text3 = text1.concat(" ", text2);
```

The concat() method can be used instead of the plus operator. These two lines do the same:

Example

```js
var text = "Hello" + " " + "World!";
var text = "Hello".concat(" ", "World!");
```

> All string methods return a new string. They don't modify the original string.
Formally said: Strings are immutable: Strings cannot be changed, only replaced.

### String.trim()

The trim() method removes whitespace from both sides of a string:

Example

```js
var str = "       Hello World!        ";
alert(str.trim());
```

### Extracting String Characters

There are 3 methods for extracting string characters:

- charAt(position)
- charCodeAt(position)
- Property access [ ]

### The charAt() Method

The charAt() method returns the character at a specified index (position) in a string:

Example

```js
var str = "HELLO WORLD";
str.charAt(0);            // returns H
```

### The charCodeAt() Method

The charCodeAt() method returns the unicode of the character at a specified index in a string:

The method returns a UTF-16 code (an integer between 0 and 65535).

Example

```js
var str = "HELLO WORLD";
str.charCodeAt(0);         // returns 72
```

### Property Access

ECMAScript 5 (2009) allows property access [ ] on strings:

Example

```js
var str = "HELLO WORLD";
str[0];                   // returns H
```

> It makes strings look like arrays (but they are not)

Example

```js
var str = "HELLO WORLD";
str[0] = "A";  // Gives no error, but does not work
str[0]; // returns H
```

## JavaScript Numbers

JavaScript has only one type of number. Numbers can be written with or without decimals.

Example

```js
var x = 3.14;    // A number with decimals
var y = 3;       // A number without decimals
```

Extra large or extra small numbers can be written with scientific (exponent) notation:

Example

```js
var x = 123e5;    // 12300000
var y = 123e-5;   // 0.00123
```

### JavaScript Numbers are Always 64-bit Floating Point

Unlike many other programming languages, JavaScript does not define different types of numbers, like integers, short, long, floating-point etc.
JavaScript numbers are always stored as double precision floating point numbers, following the international IEEE 754 standard.

#### Precision

Integers (numbers without a period or exponent notation) are accurate up to 15 digits.

Example

```js
var x = 999999999999999;
// x will be 999999999999999
var y = 9999999999999999;
// y will be 10000000000000000
```

The maximum number of decimals is 17, but floating point arithmetic is not always 100% accurate:

Example

```js
var x = 0.2 + 0.1;
// x will be 0.30000000000000004

// toFixed() can be used to solve the problem
```

### Infinity

Infinity (or -Infinity) is the value JavaScript will return if you calculate a number outside the largest possible number.

Example

```js
var myNumber = 2;
while (myNumber != Infinity) {   // Execute until Infinity
  myNumber = myNumber * myNumber;
}
```

Division by 0 (zero) also generates Infinity:

Example

```js
var x =  2 / 0;       // x will be Infinity
var y = -2 / 0;       // y will be -Infinity
```

Infinity is a number: typeof Infinity returns number.

Example

```js
typeof Infinity;     // returns "number"
```

### Hexadecimal

JavaScript interprets numeric constants as hexadecimal if they are preceded by 0x.

Example

```js
var x = 0xFF;        // x will be 255
```

> Never write a number with a leading zero (like 07).
Some JavaScript versions interpret numbers as octal if they are written with a leading zero.

### Convert from Base 10 to any other base

By default, JavaScript displays numbers as base 10 decimals.

But you can use the toString() method to output numbers from base 2 to base 36.

Hexadecimal is base 16. Decimal is base 10. Octal is base 8. Binary is base 2.

Example

```js
var myNumber = 32;
myNumber.toString(10);  // returns 32
myNumber.toString(32);  // returns 10
myNumber.toString(16);  // returns 20
myNumber.toString(8);   // returns 40
myNumber.toString(2);   // returns 100000
```

### Numbers can be objects too 

Do not create Number objects. It slows down execution speed.
The new keyword complicates the code. This can produce some unexpected results:

```js
let num1 = 500;
let num2 = new Number(500);
let num3 = new Number(500);
// (num1 === num2) is false because num1 and num2 have different types

// (num2 == num3) is false because objects cannot be compared
```

## JavaScript Number Methods

### The toString() Method

The toString() method returns a number as a string.

All number methods can be used on any type of numbers (literals, variables, or expressions):

Example
```js
var x = 123;
x.toString();            // returns 123 from variable x
(123).toString();        // returns 123 from literal 123
(100 + 23).toString();   // returns 123 from expression 100 + 23
```

### The toExponential() Method
toExponential() returns a string, with a number rounded and written using exponential notation.

A parameter defines the number of characters behind the decimal point:

Example

```js
var x = 9.656;
x.toExponential(2);     // returns 9.66e+0
x.toExponential(4);     // returns 9.6560e+0
x.toExponential(6);     // returns 9.656000e+0
The parameter is optional. If you don't specify it, JavaScript will not round the number.
```

### The toFixed() Method

toFixed() returns a string, with the number written with a specified number of decimals:

Example

```js
var x = 9.656;
x.toFixed(0);           // returns 10
x.toFixed(2);           // returns 9.66
x.toFixed(4);           // returns 9.6560
x.toFixed(6);           // returns 9.656000
```

### The toPrecision() Method

toPrecision() returns a string, with a number written with a specified length:

Example

```js
var x = 9.656;
x.toPrecision();        // returns 9.656
x.toPrecision(2);       // returns 9.7
x.toPrecision(4);       // returns 9.656
x.toPrecision(6);       // returns 9.65600
```

### Converting Variables to Numbers

There are 3 JavaScript methods that can be used to convert variables to numbers:

- The Number() method 
- The parseInt() method
- The parseFloat() method
  
These methods are not number methods, but global JavaScript methods.

#### The Number() Method

Number() can be used to convert JavaScript variables to numbers:

Example

```js
Number(true);          // returns 1
Number(false);         // returns 0
Number("10");          // returns 10
Number("  10");        // returns 10
Number("10  ");        // returns 10
Number(" 10  ");       // returns 10
Number("10.33");       // returns 10.33
Number("10,33");       // returns NaN
Number("10 33");       // returns NaN
Number("John");        // returns NaN
```

> If the number cannot be converted, NaN (Not a Number) is returned.

#### The parseInt() Method

parseInt() parses a string and returns a whole number. Spaces are allowed. Only the first number is returned:

Example
```js
parseInt("10");         // returns 10
parseInt("10.33");      // returns 10
parseInt("10 20 30");   // returns 10
parseInt("10 years");   // returns 10
parseInt("years 10");   // returns NaN 
```

#### The parseFloat() Method

parseFloat() parses a string and returns a number. Spaces are allowed. Only the first number is returned:

Example

```js
parseFloat("10");        // returns 10
parseFloat("10.33");     // returns 10.33
parseFloat("10 20 30");  // returns 10
parseFloat("10 years");  // returns 10
parseFloat("years 10");  // returns NaN
```

### Number Properties

- MAX_VALUE - Returns the largest number possible in JavaScript
- MIN_VALUE - Returns the smallest number possible in JavaScript
- POSITIVE_INFINITY - Represents infinity (returned on overflow)
- NEGATIVE_INFINITY - Represents negative infinity (returned on overflow)
- NaN - Represents a "Not-a-Number" value

#### JavaScript MIN_VALUE and MAX_VALUE

MAX_VALUE returns the largest possible number in JavaScript.

Example

```js
var x = Number.MAX_VALUE; // 1.7976931348623157e+308
```

MIN_VALUE returns the lowest possible number in JavaScript.

Example

```js
var x = Number.MIN_VALUE; // 5e-324
```

#### JavaScript POSITIVE_INFINITY and NEGATIVE_INFINITY

Example

```js
var x = Number.POSITIVE_INFINITY; //Infinity
var x = 1 / 0; //Infinity

var x = Number.NEGATIVE_INFINITY; //-Infinity
var x = -1 / 0; //-Infinity
```

#### JavaScript NaN - Not a Number

Example

```js
var x = Number.NaN;
var x = 100 / "Apple";  // x will be NaN (Not a Number)
```

#### Number Properties Cannot be Used on Variables

umber properties belongs to the JavaScript's number object wrapper called Number.

These properties can only be accessed as Number.MAX_VALUE.

Using myNumber.MAX_VALUE, where myNumber is a variable, expression, or value, will return undefined:

Example

```js
var x = 6;
var y = x.MAX_VALUE;    // y becomes undefined
```

## Javascript Arrays

### Avoid new Array()

There is no need to use the JavaScript's built-in array constructor new Array().

Use [] instead.
These two different statements both create a new empty array named points:

```js
var points = new Array();     // Bad
var points = [];              // Good 
```

```js
var points = new Array(40, 100);  // Creates an array with two elements (40 and 100)
var points = new Array(40);  // Creates an array with 40 undefined elements !!!!!
```

### How to recognize an array

Solution 1:
To solve this problem ECMAScript 5 defines a new method Array.isArray():

```js
let fruits = ["Banana", "Orange", "Apple", "Mango"];
Array.isArray(fruits);   // returns true
```

Solution 3:
The instanceof operator returns true if an object is created by a given constructor:

```js
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits instanceof Array;   // returns true
```

## JavaScript Array Methods

### Converting Arrays to Strings
The JavaScript method toString() converts an array to a string of (comma separated) array values.

Example
```js
var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.toString();
```
Result:
Banana,Orange,Apple,Mango

The join() method also joins all array elements into a string.

It behaves just like toString(), but in addition you can specify the separator:

Example
```js
var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.join(" * ");
```
Result:
Banana * Orange * Apple * Mango


### Deleting Elements
Since JavaScript arrays are objects, elements can be deleted by using the JavaScript operator delete:

Example
```js
var fruits = ["Banana", "Orange", "Apple", "Mango"];
delete fruits[0];  // Changes the first element in fruits to undefined
```



## JavaScript Sorting Arrays

### Sorting an Array
The sort() method sorts an array alphabetically:

Example
```js
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();  // Apple,Banana,Mango,Orange
```

### Reversing an Array
The reverse() method reverses the elements in an array.

You can use it to sort an array in descending order:

Example
```js
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort(); // Apple,Banana,Mango,Orange
fruits.reverse(); // Orange,Mango,Banana,Apple
```

### Sort data within an Object

```js
const staff = [
  {
  name: 'Joe',
  years: 10,
  },
  {
  name: 'Theo',
  years: 5,
  },
  {
  name: 'Dyan',
  years: 10,
  }
]

staff.sort((staff1, staff2) => {
  return staff1.name < staff2.name ? -1 : 1
  return 0
})

console.log(staff)
```

My assumption on how it works:

```js
"J".charCodeAt()
// 74

"D".charCodeAt()
// 68

"T".charCodeAt()
// 84
```

To get the result in descending order change the condition to >.

J < D
74 < 68
Condition will be false and the tenary will return 1, Dyan will be swaped with Joe. In a case where
If condition is true it will return -1 to sort.
if both characters are qual no sort is done.

### Numeric Sort

By default, the sort() function sorts values as strings.

> However, if numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".

Because of this, the sort() method will produce incorrect result when sorting numbers.

You can fix this by providing a compare function:

Example:

```js
var points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a - b});
```

Use the same trick to sort an array descending:

Example:

```js
var points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return b - a});
```

#### The Compare Function

The purpose of the compare function is to define an alternative sort order.

The compare function should return a negative, zero, or positive value, depending on the arguments:
```js
function(a, b){return a - b}
```
When the sort() function compares two values, it sends the values to the compare function, and sorts the values according to the returned (negative, zero, positive) value.

If the result is negative a is sorted before b.

If the result is positive b is sorted before a.

If the result is 0 no changes are done with the sort order of the two values.

### Sorting an Array in Random Order

Example:

```js
var points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return 0.5 - Math.random()});
```

### Find the Highest (or Lowest) Array Value
There are no built-in functions for finding the max or min value in an array.

However, after you have sorted an array, you can use the index to obtain the highest and lowest values.

Sorting ascending:

Example
```js
var points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a - b});
// now points[0] contains the lowest value
// and points[points.length-1] contains the highest value
```


#### Using Math.max() on an Array or Array list
```js
var points = [40, 100, 1, 5, 25, 10];
var highest = Math.max(...points); // 100
```

#### Using Math.max() on an Array or Array list
```js
var points = [40, 100, 1, 5, 25, 10];
var lowest = Math.min(...points); // 1
```

### Sorting Object Arrays
JavaScript arrays often contain objects:

Example
```js
var cars = [
  {type:"Volvo", year:2016},
  {type:"Saab", year:2001},
  {type:"BMW", year:2010}
];
```

Even if objects have properties of different data types, the sort() method can be used to sort the array.

The solution is to write a compare function to compare the property values:

Example

```js
cars.sort(function(a, b){return a.year - b.year});
```

## JavaScript Array Iteration Methods

### Array.forEach()
The forEach() method calls a function (a callback function) once for each array element.

Example
```js
var txt = "";
var numbers = [45, 4, 9, 16, 25];
numbers.forEach(myFunction);

function myFunction(value, index, array) {
  txt = txt + value + "<br>";
}
```

### Array.map()
The map() method creates a new array by performing a function on each array element.

The map() method does not execute the function for array elements without values.

The map() method does not change the original array.

This example multiplies each array value by 2:

Example
```js
var numbers1 = [45, 4, 9, 16, 25];
var numbers2 = numbers1.map(myFunction);

function myFunction(value, index, array) {
  return value * 2;
}
```

### Array.filter()
The filter() method creates a new array with array elements that passes a test.

This example creates a new array from elements with a value larger than 18:

Example
```js
var numbers = [45, 4, 9, 16, 25];
var over18 = numbers.filter(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}
```

### Array.reduce()
The reduce() method runs a function on each array element to produce (reduce it to) a single value.

The reduce() method works from left-to-right in the array. See also **reduceRight()**.
The reduce() method does not reduce the original array.

This example finds the sum of all numbers in an array:

> Takes 4 arguments

Example
```js
var numbers1 = [45, 4, 9, 16, 25];
var sum = numbers1.reduce(myFunction);

function myFunction(total, value, index, array) {
  return total + value;
}
```

The example above does not use the index and array parameters. It can be rewritten to:

Example
```js
var numbers1 = [45, 4, 9, 16, 25];
var sum = numbers1.reduce(myFunction);

function myFunction(total, value) {
  return total + value;
}
```

### Array.reduceRight()
The reduceRight() method runs a function on each array element to produce (reduce it to) a single value.

> Takes 4 arguments

This example finds the sum of all numbers in an array:

Example
```js
var numbers1 = [45, 4, 9, 16, 25];
var sum = numbers1.reduceRight(myFunction);

function myFunction(total, value, index, array) {
  return total + value;
}
```



### Array.every()
The every() method check if all array values pass a test.

> return a boolean value

This example check if all array values are larger than 18:

Example
```js
var numbers = [45, 4, 9, 16, 25];
var allOver18 = numbers.every(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}
```

### Array.some()
The some() method check if some array values pass a test.

> returns a boolean 

This example check if some array values are larger than 18:

Example
```js
var numbers = [45, 4, 9, 16, 25];
var someOver18 = numbers.some(myFunction);

function myFunction(value, index, array) {
  return value > 18; // true
}
```

### Array.find()
The find() method returns the value of the first array element that passes a test function.

This example finds (returns the value of) the first element that is larger than 18:

Example
```js
var numbers = [4, 9, 16, 25, 29];
var first = numbers.find(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}
```


### Array.findIndex()
The findIndex() method returns the index of the first array element that passes a test function.

This example finds the index of the first element that is larger than 18:

Example
```js
var numbers = [4, 9, 16, 25, 29];
var first = numbers.findIndex(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}
```



## JavaScript Date Objects
By default, JavaScript will use the browser's time zone and display a date as a full text string:

**Sun Apr 23 2023 11:31:16 GMT+0100 (West Africa Standard Time)**

### Creating Date Objects
Date objects are created with the new Date() constructor.

There are 4 ways to create a new date object:
```js
new Date()
new Date(year, month, day, hours, minutes, seconds, milliseconds)
new Date(milliseconds)
new Date(date string)
```

### new Date()
new Date() creates a new date object with the current date and time:

Example
```js
var d = new Date();
```

### new Date(year, month, ...)
new Date(year, month, ...) creates a new date object with a specified date and time.

7 numbers specify year, month, day, hour, minute, second, and millisecond (in that order):

Example
```js
var d = new Date(2018, 11, 24, 10, 33, 30, 0);
```

> Note: JavaScript counts months from 0 to 11. January is 0. December is 11.

6 numbers specify year, month, day, hour, minute, second:

Example
```js
var d = new Date(2018, 11, 24, 10, 33, 30);
```
5 numbers specify year, month, day, hour, and minute:

Example
```js
var d = new Date(2018, 11, 24, 10, 33);
```
4 numbers specify year, month, day, and hour:

Example
```js
var d = new Date(2018, 11, 24, 10);
```
3 numbers specify year, month, and day:

Example
```js
var d = new Date(2018, 11, 24);
```
2 numbers specify year and month:

Example
```js
var d = new Date(2018, 11);
```

> You cannot omit month. If you supply only one parameter it will be treated as milliseconds.

Example
```js
var d = new Date(2018); // Miliseconds
```


### Previous Century
One and two digit years will be interpreted as 19xx:

Example
```js
var d = new Date(99, 11, 24);
```
Example
```js
var d = new Date(9, 11, 24);
```

### new Date(dateString)
new Date(dateString) creates a new date object from a date string:

Example
```js
var d = new Date("October 13, 2014 11:13:00");
```

### JavaScript Stores Dates as Milliseconds
JavaScript stores dates as number of milliseconds since January 01, 1970, 00:00:00 UTC (Universal Time Coordinated).

Zero time is January 01, 1970 00:00:00 UTC.

> Now the time is: 1682245876537 milliseconds past January 01, 1970

### new Date(milliseconds)
new Date(milliseconds) creates a new date object as zero time plus milliseconds:

Example
```js
var d = new Date(0);
```

01 January 1970 plus 100 000 000 000 milliseconds is approximately 03 March 1973:

Example
```js
var d = new Date(100000000000);
```
January 01 1970 minus 100 000 000 000 milliseconds is approximately October 31 1966:

Example
```js
var d = new Date(-100000000000);
```
Example
```js
var d = new Date(86400000);
```


### Displaying Dates
JavaScript will (by default) output dates in full text string format:
```
Wed Mar 25 2015 01:00:00 GMT+0100 (West Africa Standard Time)
```

When you display a date object in HTML, it is automatically converted to a string, with the toString() method.

Example
```js
d = new Date();
document.getElementById("demo").innerHTML = d;
```

Same as:
```js
d = new Date();
document.getElementById("demo").innerHTML = d.toString();
```
Sun Apr 23 2023 12:00:17 GMT+0100 (West Africa Standard Time)


The toUTCString() method converts a date to a UTC string (a date display standard).

Example
```js
var d = new Date();
document.getElementById("demo").innerHTML = d.toUTCString();
```
Sun, 23 Apr 2023 11:02:25 GMT

The toDateString() method converts a date to a more readable format:

Example
```js
var d = new Date();
document.getElementById("demo").innerHTML = d.toDateString();
```
Sun Apr 23 2023



## JavaScript Date Input
There are generally 3 types of JavaScript date input formats:

TYPE
- ISO Date - "2015-03-25" (The International Standard)
- Short Date - "03/25/2015"
- Long Date	- "Mar 25 2015" or "25 Mar 2015"

### JavaScript Date Output
> Independent of input format, JavaScript will (by default) output dates in full text string format:

```js
Wed Mar 25 2015 01:00:00 GMT+0100 (West Africa Standard Time)
```

### JavaScript ISO Dates
ISO 8601 is the international standard for the representation of dates and times.

The ISO 8601 syntax (YYYY-MM-DD) is also the preferred JavaScript date format:

Example (Complete date)
```js
var d = new Date("2015-03-25");
```
Wed Mar 25 2015 01:00:00 GMT+0100 (West Africa Standard Time)


### ISO Dates (Year and Month)
ISO dates can be written without specifying the day (YYYY-MM):

Example
```js
var d = new Date("2015-03");
```
Sun Mar 01 2015 01:00:00 GMT+0100 (West Africa Standard Time)


### ISO Dates (Only Year)
ISO dates can be written without month and day (YYYY):

Example
```js
var d = new Date("2015");
```
Thu Jan 01 2015 01:00:00 GMT+0100 (West Africa Standard Time)


### Time Zones
When setting a date, without specifying the time zone, JavaScript will use the browser's time zone.

When getting a date, without specifying the time zone, the result is converted to the browser's time zone.

In other words: If a date/time is created in GMT (Greenwich Mean Time), the date/time will be converted to CDT (Central US Daylight Time) if a user browses from central US.

### JavaScript Short Dates.
Short dates are written with an "MM/DD/YYYY" syntax like this:

Example
```js
var d = new Date("03/25/2015");
```

### WARNINGS !
In some browsers, months or days with no leading zeroes may produce an error:

```js
var d = new Date("2015-3-25");
```

### JavaScript Long Dates.
Long dates are most often written with a "MMM DD YYYY" syntax like this:

Example
```js
var d = new Date("Mar 25 2015");
```

Month and day can be in any order:

Example
```js
var d = new Date("25 Mar 2015");
```
And, month can be written in full (January), or abbreviated (Jan):

Example
```js
var d = new Date("January 25 2015");
```

### Date Input - Parsing Dates
If you have a valid date string, you can use the Date.parse() method to convert it to milliseconds.

Date.parse() returns the number of milliseconds between the date and January 1, 1970:

Example
```js
var msec = Date.parse("March 21, 2012");
document.getElementById("demo").innerHTML = msec;
```



## JavaScript Get Date Methods
These methods can be used for getting information from a date object:

Method	Description
- **getFullYear()** - Get the year as a four digit number (yyyy)
- **getMonth()** - Get the month as a number (0-11)
- **getDate()** - Get the day as a number (1-31)
- **getHours()** - Get the hour (0-23)
- **getMinutes()** - Get the minute (0-59)
- **getSeconds()** - Get the second (0-59)
- **getMilliseconds()** - Get the millisecond (0-999)
- **getTime()** - Get the time (milliseconds since January 1, 1970) e.g. 1682249981442 
- **getDay()** - Get the weekday as a number (0-6)
- **Date.now()** - Get the time in miliseconds. e.g. 1682249981442 ECMAScript 5.


### The getTime() Method
The getTime() method returns the number of milliseconds since January 1, 1970:

Example
```js
var d = new Date();
document.getElementById("demo").innerHTML = d.getTime();
```

### The getFullYear() Method
The getFullYear() method returns the year of a date as a four digit number:

Example
```js
var d = new Date();
document.getElementById("demo").innerHTML = d.getFullYear();
```

### The getMonth() Method
The getMonth() method returns the month of a date as a number (0-11):

Example
```js
var d = new Date();
document.getElementById("demo").innerHTML = d.getMonth();
```
> In JavaScript, the first month (January) is month number 0, so December returns month number 11.

You can use an array of names, and getMonth() to return the month as a name:

Example
```js
var d = new Date();
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
document.getElementById("demo").innerHTML = months[d.getMonth()];
```

### The getDate() Method
The getDate() method returns the day of a date as a number (1-31):

Example
```js
var d = new Date();
document.getElementById("demo").innerHTML = d.getDate();
```

### The getHours() Method
The getHours() method returns the hours of a date as a number (0-23):

Example
```js
var d = new Date();
document.getElementById("demo").innerHTML = d.getHours();
```

### The getSeconds() Method
The getSeconds() method returns the seconds of a date as a number (0-59):

Example
```js
var d = new Date();
document.getElementById("demo").innerHTML = d.getSeconds();
```

### The getMilliseconds() Method
The getMilliseconds() method returns the milliseconds of a date as a number (0-999):

Example
```js
var d = new Date();
document.getElementById("demo").innerHTML = d.getMilliseconds();
```

### The getDay() Method
The getDay() method returns the weekday of a date as a number (0-6):

Example
```js
var d = new Date();
document.getElementById("demo").innerHTML = d.getDay();
```



## JavaScript Set Date Methods
Set Date methods let you set date values (years, months, days, hours, minutes, seconds, milliseconds) for a Date Object.

### Set Date Methods
Set Date methods are used for setting a part of a date:


- **setDate()** - Set the day as a number (1-31)
- **setFullYear()** - Set the year (optionally month and day)
- **setHours()** - Set the hour (0-23)
- **setMilliseconds()** - Set the milliseconds (0-999)
- **setMinutes()** - Set the minutes (0-59)
- **setMonth()** - Set the month (0-11)
- **setSeconds()** - Set the seconds (0-59)
- **setTime()** - Set the time (milliseconds since January 1, 1970)
- **The setFullYear()** - Method
- **The setFullYear()** - method sets the year of a date object. In this example to 2020:

Example
```js
var d = new Date();
d.setFullYear(2020);
document.getElementById("demo").innerHTML = d;
```
The setFullYear() method can optionally set month and day:

Example
```js
var d = new Date();
d.setFullYear(2020, 11, 3);
document.getElementById("demo").innerHTML = d;
```


### Compare Dates
Dates can easily be compared.
The following example compares today's date with January 14, 2100:

Example
```js
var today, someday, text;
today = new Date();
someday = new Date();
someday.setFullYear(2100, 0, 14);

if (someday > today) {
  text = "Today is before January 14, 2100.";
} else {
  text = "Today is after January 14, 2100.";
}
document.getElementById("demo").innerHTML = text;
```



## JavaScript Math Object
The JavaScript Math object allows you to perform mathematical tasks on numbers.

Example
```js
Math.PI;            // returns 3.141592653589793
```


- **abs(x)** - Returns the absolute value of x
- **acos(x)** - Returns the arccosine of x, in radians
- **asin(x)** - Returns the arcsine of x, in radians
- **atan(x** - 	Returns the arctangent of x as a numeric value between -PI/2 and PI/2 radians
- **atan2(y, x)** - Returns the arctangent of the quotient of its arguments
- **ceil(x)** - Returns the value of x rounded up to its nearest integer
- **cos(x)** - Returns the cosine of x (x is in radians)
- **exp(x)** - Returns the value of Ex
- **floor(x)** - Returns the value of x rounded down to its nearest integer
- **log(x)** - Returns the natural logarithm (base E) of x
- **max(x, y, z, ..., n)** - Returns the number with the highest value
- **min(x, y, z, ..., n)** - Returns the number with the lowest value
- **pow(x, y)** - Returns the value of x to the power of y
- **random()** - Returns a random number between 0 and 1
- **round(x)** - Returns the value of x rounded to its nearest integer
- **sin(x)** - Returns the sine of x (x is in radians)
- **sqrt(x)** - Returns the square root of x
- **tan(x)** - Returns the tangent of an angle


### Math.round()
Math.round(x) returns the value of x rounded to its nearest integer:

Example
```js
Math.round(4.7);    // returns 5
Math.round(4.4);    // returns 4
```

### Math.pow()
Math.pow(x, y) returns the value of x to the power of y:

Example
```js
Math.pow(8, 2);      // returns 64
```

### Math.sqrt()
Math.sqrt(x) returns the square root of x:

Example
```js
Math.sqrt(64);      // returns 8
```

### Math.abs()
Math.abs(x) returns the absolute (positive) value of x:

Example
```js
Math.abs(-4.7);     // returns 4.7
```

### Math.ceil()
Math.ceil(x) returns the value of x rounded up to its nearest integer:

Example
```js
Math.ceil(4.4);     // returns 5
```

### Math.floor()
Math.floor(x) returns the value of x rounded down to its nearest integer:

Example
```js
Math.floor(4.7);    // returns 4
```


### Math.sin()
Math.sin(x) returns the sine (a value between -1 and 1) of the angle x (given in radians).

If you want to use degrees instead of radians, you have to convert degrees to radians:

Angle in radians = Angle in degrees x PI / 180.

Example
```js
Math.sin(90 * Math.PI / 180);     // returns 1 (the sine of 90 degrees)
```


### Math.cos()
Math.cos(x) returns the cosine (a value between -1 and 1) of the angle x (given in radians).

If you want to use degrees instead of radians, you have to convert degrees to radians:

Angle in **radians = Angle in degrees x PI / 180**

Example
```js
Math.cos(0 * Math.PI / 180);     // returns 1 (the cos of 0 degrees)
```


### Math.min() and Math.max()
Math.min() and Math.max() can be used to find the lowest or highest value in a list of arguments:

Example
```js
Math.min(0, 150, 30, 20, -8, -200);  // returns -200
```
Example
```js
Math.max(0, 150, 30, 20, -8, -200);  // returns 150
```


### Math.random()
Math.random() returns a random number between 0 (inclusive), and 1 (exclusive):

Example
```js
Math.random();     // returns a random number
```





## JavaScript Random

Math.random() returns a random number between 0 (inclusive),  and 1 (exclusive):


Example: 
```js
Example
Math.random();              // returns a random number
```

Math.random() used with Math.floor() can be used to return random integers.

Example
```js
Math.floor(Math.random() * 10);     // returns a random integer from 0 to 9

Math.floor(Math.random() * 100);     // returns a random integer from 0 to 99

Math.floor(Math.random() * 10) + 1;  // returns a random integer from 1 to 10
```

### A Proper Random Function
Example
```js
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}
```

Include Max value when random number is generated.

Example
```js
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
```





## JavaScript if else and else if

```js

if (condition1) {
  //  block of code to be executed if condition1 is true
} else if (condition2) {
  //  block of code to be executed if the condition1 is false and condition2 is true
} else {
  //  block of code to be executed if the condition1 is false and condition2 is false
}
```





## JavaScript Lables

To label JavaScript statements you precede the statements with a label name and a colon:


```js
label:
statements
```

The break and the continue statements are the only JavaScript statements that can "jump out of" a code block.

Syntax:
```js
break labelname;

continue labelname;
```


Example
```js
var cars = ["BMW", "Volvo", "Saab", "Ford"];
list: {
  text += cars[0] + "<br>";
  text += cars[1] + "<br>";
  break list;
  text += cars[2] + "<br>";
  text += cars[3] + "<br>";
}
```





## JavaScript Type Conversion

Number() converts to a Number, String() converts to a String, Boolean() converts to a Boolean.


### JavaScript Data Types
In JavaScript there are 5 different data types that can contain values:

- string
- number
- boolean
- object
- function

There are 6 types of objects:
- Object
- Date
- Array
- String
- Number
- Boolean


And 2 data types that cannot contain values:
- null
- undefined

Example
```js
typeof "John"                 // Returns "string"
typeof 3.14                   // Returns "number"
typeof NaN                    // Returns "number"
typeof false                  // Returns "boolean"
typeof [1,2,3,4]              // Returns "object"
typeof {name:'John', age:34}  // Returns "object"
typeof new Date()             // Returns "object"
typeof function () {}         // Returns "function"
typeof myCar                  // Returns "undefined" *
typeof null                   // Returns "object"
```


### The constructor Property
The constructor property returns the constructor function for all JavaScript variables.

Example
```js
"John".constructor                // Returns function String()  {[native code]}
(3.14).constructor                // Returns function Number()  {[native code]}
false.constructor                 // Returns function Boolean() {[native code]}
[1,2,3,4].constructor             // Returns function Array()   {[native code]}
{name:'John',age:34}.constructor  // Returns function Object()  {[native code]}
new Date().constructor            // Returns function Date()    {[native code]}
function () {}.constructor        // Returns function Function(){[native code]}
```

You can check the constructor property to find out if an object is an Array (contains the word "Array"):
```js
function isArray(myArray) {
  return myArray.constructor === Array;
}
```


You can check the constructor property to find out if an object is a Date (contains the word "Date"):
```js
function isDate(myDate) {
  return myDate.constructor === Date;
}
```





## JavaScript Bitwise Operations

| Operator |	Name |	Description |
| :--- | :--- | :--- |
| & |	AND |	Sets each bit to 1 if both bits are 1 |
| |	OR | Sets each bit to 1 if one of two bits is 1 |
| ^ |	XOR |	Sets each bit to 1 if only one of two bits is 1 |
| ~ |	NOT |	Inverts all the bits |
| << |	Zero | fill left shift	Shifts left by pushing zeros in from the right and let the leftmost bits fall off |
| >> |	Signed right shift	| Shifts right by pushing copies of the leftmost bit in from the left, and let the rightmost bits fall off |
| >>>	| Zero fill right shift	| Shifts right by pushing zeros in from the left, and let the rightmost bits fall off |



Examples
| Operation |	Result |	Same as	| Result |
| :--- | :--- | :--- | :--- |
| 5 & 1 |	1 |	0101 & 0001 | 0001 |
| 5 I 1	| 5	 | 0101 I 0001 |	 0101 |
| ~ 5 |	10	| ~0101	| 1010 |
| 5 << 1 | 10 |	0101 << 1	| 1010 |
| 5 ^ 1 |	4 |	0101 ^ 0001	| 0100 |
| 5 >> 1 |	2 |	0101 >> 1	| 0010 |
| 5 >>> 1 |	2	| 0101 >>> 1	| 0010 |





### JavaScript Regular Expressions
A regular expression is a sequence of characters that forms a search pattern.

The search pattern can be used for text search and text replace operations.

Regular expressions can be used to perform all types of **text search** and **text replace** operation

Syntax
```js
/pattern/modifiers;
```

- search() - 
- match() -  retrieves the matches in an array when matching a string against a regular expression
- test() - method executes a search for a match between a regular expression and a specified string. Returns true or false


### Regular Expression Modifiers
Modifiers can be used to perform case-insensitive more global searches:
- i  is a modifier (modifies the search to be case-insensitive).
- g	Perform a global match (find all matches rather than stopping after the first match)
- m	Perform multiline matching


### Regular Expression Patterns
Brackets are used to find a range of characters:

- [abc]	- Find any of the characters between the brackets	
- [0-9]	- Find any of the digits between the brackets	
(x|y)	- Find any of the alternatives separated with |



### Metacharacters are characters with a special meaning:

Metacharacter	Description	Try it
\d -	Find a digit	
\s	Find a whitespace character	
\b	Find a match at the beginning of a word like this: \bWORD, or at the end of a word like this: WORD\b


### Quantifiers define quantities:

Quantifier	
n+	Matches any string that contains at least one n
n*	Matches any string that contains zero or more occurrences of n
n?	Matches any string that contains zero or one occurrences of n



Example
var patt = /w3schools/i;

Example explained:
/w3schools/i  is a regular expression.
w3schools  is a pattern (to be used in a search).
i  is a modifier (modifies the search to be case-insensitive).


### Using test()
The test() method is a RegExp expression method.

It searches a string for a pattern, and returns true or false, depending on the result.

The following example searches a string for the character "e":

Example
```js
var patt = /e/;
patt.test("The best things in life are free!");

// OR

/e/.test("The best things in life are free!");
```


### Using exec()
The exec() method is a RegExp expression method.

It searches a string for a specified pattern, and returns the found text as an object.

If no match is found, it returns an empty (null) object.

The following example searches a string for the character "e":

Example 1
```js
/e/.exec("The best things in life are free!");
```

```js
var obj = /e/g.exec("The best things in life are free!");
console.log(
"Found " + obj[0] + " in position " + obj.index + " in the text: " + obj.input;
);
```
Found e in position 2 in the text: The best things in life are free!





## JavaScript Errors - Throw and Try to Catch

The try statement lets you test a block of code for errors.


- The catch statement lets you handle the error.

- The throw statement lets you create custom errors.

- The finally statement lets you execute code, after try and catch, regardless of the result.

Example 
```js
try {
  adddlert("Welcome guest!");
}
catch(err) {
  document.getElementById("demo").innerHTML = err.message;
}
```


### The throw Statement
The throw statement allows you to create a custom error.

Technically you can throw an exception (throw an error).

The exception can be a JavaScript String, a Number, a Boolean or an Object:
```js
throw "Too big";    // throw a text
throw 500;          // throw a number
```

```html
<!DOCTYPE html>
<html>
<body>

<p>Please input a number between 5 and 10:</p>

<input id="demo" type="text">
<button type="button" onclick="myFunction()">Test Input</button>
<p id="p01"></p>

<script>
function myFunction() {
  var message, x;
  message = document.getElementById("p01");
  message.innerHTML = "";
  x = document.getElementById("demo").value;
  try { 
    if(x == "")  throw "empty";
    if(isNaN(x)) throw "not a number";
    x = Number(x);
    if(x < 5)  throw "too low";
    if(x > 10)   throw "too high";
  }
  catch(err) {
    message.innerHTML = "Input is " + err;
  }
}
</script>

</body>

<!-- Mirrored from www.w3schools.com/js/tryit.asp?filename=tryjs_throw_error by HTTrack Website Copier/3.x [XR&CO'2014], Mon, 27 Jan 2020 02:39:33 GMT -->
</html>
```

### The finally Statement
The finally statement lets you execute code, after try and catch, regardless of the result:

Syntax
```js
try {
  Block of code to try
}
catch(err) {
  Block of code to handle errors
}
finally {
  Block of code to be executed regardless of the try / catch result
}
```


### The Error Object
JavaScript has a built in error object that provides error information when an error occurs.

The error object provides two useful properties: name and message.

#### Error Object Properties
- name -	Sets or returns an error name
- message -	Sets or returns an error message (a string)


#### Error Name Values
Six different values can be returned by the error name property:

- **EvalError** -	An error has occurred in the eval() function. (Newer versions of JavaScript do not throw EvalError. Use SyntaxError instead.)
- **RangeError** -	A number "out of range" has occurred (e.g. num.toPrecision(500)  A number cannot have 500 significant digits)
- **ReferenceError** -	An illegal reference has occurred 
- **SyntaxError** -	A syntax error has occurred
- **TypeError** -	A type error has occurred
- **URIError** -	An error in encodeURI() has occurred


### JavaScript Hoisting
Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope (to the top of the current script or the current function).

- Variables and constants declared with let or const are not hoisted!

#### JavaScript Declarations are Hoisted
In JavaScript, a variable can be declared after it has been used.

In other words; a variable can be used before it has been declared.

Example 1 gives the same result as Example 2:

Example 1
```js
x = 5; // Assign 5 to x

elem = document.getElementById("demo"); // Find an element
elem.innerHTML = x;                     // Display x in the element

var x; // Declare x
```

> JavaScript in strict mode does not allow variables to be used if they are not declared.





## JavaScript Use Strict

"use strict"; Defines that JavaScript code should be executed in "strict mode".


The "use strict" Directive
The "use strict" directive was new in ECMAScript version 5.

It is not a statement, but a literal expression, ignored by earlier versions of JavaScript.

The purpose of "use strict" is to indicate that the code should be executed in "strict mode".

With strict mode, you can not, for example, use undeclared variables.

Example
```js
"use strict";
x = 3.14;       // This will cause an error because x is not declared
```


Example
```js
"use strict";
myFunction();

function myFunction() {
  y = 3.14;   // This will also cause an error because y is not declared
}
```

Declared inside a function, it has local scope (only the code inside the function is in strict mode):

```js
x = 3.14;       // This will not cause an error.
myFunction();

function myFunction() {
  "use strict";
  y = 3.14;   // This will cause an error
}
```

> In strict mode, any assignment to a non-writable property, a getter-only property, a non-existing property, a non-existing variable, or a non-existing object, will throw an error.

### Not Allowed in Strict Mode
Using a variable, without declaring it, is not allowed:
```js
"use strict";
x = 3.14;                // This will cause an error
```


Objects are variables too.
Using an object, without declaring it, is not allowed:
```js
"use strict";
x = {p1:10, p2:20};      // This will cause an error
```

Deleting a variable (or object) is not allowed.
```js
"use strict";
var x = 3.14;
delete x;                // This will cause an error
```


Deleting a function is not allowed.
```js
"use strict";
function x(p1, p2) {};
delete x;                // This will cause an error 
```


Duplicating a parameter name is not allowed:
```js
"use strict";
function x(p1, p1) {};   // This will cause an error
```

Octal numeric literals are not allowed:
```js
"use strict";
var x = 010;             // This will cause an error
```


Octal escape characters are not allowed:
```js
"use strict";
var x = "\010";            // This will cause an error
```


Writing to a read-only property is not allowed:
```js
"use strict";
var obj = {};
Object.defineProperty(obj, "x", {value:0, writable:false});

obj.x = 3.14;            // This will cause an error
```


Writing to a get-only property is not allowed:
```js
"use strict";
var obj = {get x() {return 0} };

obj.x = 3.14;            // This will cause an error
```


Deleting an undeletable property is not allowed:
```js
"use strict";
delete Object.prototype; // This will cause an error
```


The word eval cannot be used as a variable:
```js
"use strict";
var eval = 3.14;         // This will cause an error
```


The word arguments cannot be used as a variable:
```js
"use strict";
var arguments = 3.14;    // This will cause an error
```


The with statement is not allowed:
```js
"use strict";
with (Math){x = cos(2)}; // This will cause an error
```


For security reasons, eval() is not allowed to create variables in the scope from which it was called:
```js
"use strict";
eval ("var x = 2");
alert (x);             // This will cause an error
```

### Keywords reserved for future JavaScript versions can NOT be used as variable names in strict mode.

These are:
implements
interface
let
package
private
protected
public
static
yield

```js
"use strict";
var public = 1500;      // This will cause an error
```

> The "use strict" directive is only recognized at the beginning of a script or a function.





## The JavaScript this Keyword

The JavaScript this keyword refers to the object it belongs to.


It has different values depending on where it is used:

- In a method, this refers to the owner object.
- Alone, this refers to the global object.
- In a function, this refers to the global object.
- In a function, in strict mode, this is undefined.
- In an event, this refers to the element that received the event.
- Methods like call(), and apply() can refer this to any object.
- 

```js
var person = {
  firstName: "John",
  lastName : "Doe",
  id       : 5566,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};

```

### this Alone
When used alone, the owner is the Global object, so this refers to the Global object.

In a browser window the Global object is [object Window]:

Example
```js
var x = this;
```

In strict mode, when used alone, this also refers to the Global object [object Window]:

Example
```js
"use strict";
var x = this;
```


### this in a Function (Default)
In a JavaScript function, the owner of the function is the default binding for this.

So, in a function, this refers to the Global object [object Window].

Example
```js
function myFunction() {
  return this;
}
```


### this in a Function (Strict)
JavaScript strict mode does not allow default binding.

So, when used in a function, in strict mode, this is undefined.

Example
```js
"use strict";
function myFunction() {
  return this;
}
```

### this in Event Handlers
In HTML event handlers, this refers to the HTML element that received the event:

Example
```js
<button onclick="this.style.display='none'">
  Click to Remove Me!
</button>
```


### Object Method Binding
In these examples, this is the person object (The person object is the "owner" of the function):

Example
```js
var person = {
  firstName  : "John",
  lastName   : "Doe",
  id         : 5566,
  myFunction : function() {
    return this;
  }
};
```
Example
```js
var person = {
  firstName: "John",
  lastName : "Doe",
  id       : 5566,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};
```
In other words: this.firstName means the firstName property of this (person) object.


### Explicit Function Binding
The call() and apply() methods are predefined JavaScript methods.

They can both be used to call an object method with another object as argument.

You can read more about call() and apply() later in this tutorial.

In the example below, when calling person1.fullName with person2 as argument, this will refer to person2, even if it is a method of person1:

Example
```js
var person1 = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}
var person2 = {
  firstName:"John",
  lastName: "Doe",
}
person1.fullName.call(person2);  // Will return "John Doe"
```





## JavaScript Const

Variables defined with const behave like let variables, except they cannot be reassigned:

```js
const PI = 3.141592653589793;
PI = 3.14;      // This will give an error
PI = PI + 10;   // This will also give an error
```


### Constant Objects can Change
You can change the properties of a constant object:

Example
```js
// You can create a const object:
const car = {type:"Fiat", model:"500", color:"white"};

// You can change a property:
car.color = "red";

// You can add a property:
car.owner = "Johnson";
```


But you can NOT reassign a constant object:

Example
```js
const car = {type:"Fiat", model:"500", color:"white"};
car = {type:"Volvo", model:"EX60", color:"red"};    // ERROR
```

### Constant Arrays can Change
You can change the elements of a constant array:

Example
```js
// You can create a constant array:
const cars = ["Saab", "Volvo", "BMW"];

// You can change an element:
cars[0] = "Toyota";

// You can add an element:
cars.push("Audi");
But you can NOT reassign a constant array:
```

Example
```js
const cars = ["Saab", "Volvo", "BMW"];
cars = ["Toyota", "Volvo", "Audi"];    // ERROR
```

### Redeclaring a variable with const
in another scope, or in another block, is allowed:
```js
const x = 2;       // Allowed

{
  const x = 3;   // Allowed
}

{
  const x = 4;   // Allowed
}
```





## Arrow Function

Arrow functions were introduced in ES6.


Arrow functions allow us to write shorter function syntax:

Before:
```js
hello = function() {
  return "Hello World!";
}
```
With Arrow Function:
```js
hello = () => {
  return "Hello World!";
}
```

It gets shorter! If the function has only one statement, and the statement returns a value, you can remove the brackets and the return keyword:

Arrow Functions Return Value by Default:
```js
hello = () => "Hello World!";
```

> Note: This works only if the function has only one statement.

In fact, if you have only one parameter, you can skip the parentheses as well:

Arrow Function Without Parentheses:
```js
hello = val => "Hello " + val;
```


### What About this?
The handling of this is also different in arrow functions compared to regular functions.

In short, with arrow functions there are no binding of this.

In regular functions the this keyword represented the object that called the function, which could be the window, the document, a button or whatever.

With arrow functions the this keyword always represents the object that defined the arrow function.





## JavaScript Classes
### ECMAScript 2015
ES6, also known as ECMAScript2015, introduced classes.

A class is a type of function, but instead of using the keyword function to initiate it, we use the keyword class, and the properties are assigned inside a constructor() method.

### Class Definition
Use the keyword class to create a class, and always add the constructor() method.

The constructor method is called each time the class object is initialized.

Example
A simple class definition for a class named "Car":
```js
class Car {
  constructor(brand) {
    this.carname = brand;
  }
}
```

Now you can create objects using the Car class:

Example
Create an object called "mycar" based on the Car class:

```js
class Car {
  constructor(brand) {
    this.carname = brand;
  }
}
mycar = new Car("Ford");
```


### Methods
The constructor method is special, it is where you initialize properties, it is called automatically when a class is initiated, and it has to have the exact name "constructor", in fact, if you do not have a constructor method, JavaScript will add an invisible and empty constructor method.

You are also free to make your own methods, the syntax should be familiar:

Example
Create a method named "present":
```js
class Car {
  constructor(brand) {
    this.carname = brand;
  }
  present() {
    return "I have a " + this.carname;
  }
}

mycar = new Car("Ford");
document.getElementById("demo").innerHTML = mycar.present();
```



### Static Methods
Static methods are defined on the class itself, and not on the prototype.

That means you cannot call a static method on the object (mycar), but on the class (Car):

Example
Create a static method and call it on the class:
```js
class Car {
  constructor(brand) {
    this.carname = brand;
  }
  static hello() {
    return "Hello!!";
  }
}

mycar = new Car("Ford");

//Call 'hello()' on the class Car:
document.getElementById("demo").innerHTML = Car.hello();

//and NOT on the 'mycar' object:
//document.getElementById("demo").innerHTML = mycar.hello();
//this would raise an error.
```
If you want to use the mycar object inside the static method, you can send it as a parameter:

Example
Send "mycar" as a parameter:
```js
class Car {
  constructor(brand) {
    this.carname = brand;
  }
  static hello(x) {
    return "Hello " + x.carname;
  }
}

mycar = new Car("Ford");

document.getElementById("demo").innerHTML = Car.hello(mycar);
```


### Inheritance
To create a class inheritance, use the extends keyword.

A class created with a class inheritance inherits all the methods from another class:

Example
Create a class named "Model" which will inherit the methods from the "Car" class:

```js
class Car {
  constructor(brand) {
    this.carname = brand;
  }
  present() {
    return 'I have a ' + this.carname;
  }
}

class Model extends Car {
  constructor(brand, mod) {
    super(brand);
    this.model = mod;
  }
  show() {
    return this.present() + ', it is a ' + this.model;
  }
}

mycar = new Model("Ford", "Mustang");
document.getElementById("demo").innerHTML = mycar.show();
```

The super() method refers to the parent class.

By calling the super() method in the constructor method, we call the parent's constructor method and gets access to the parent's properties and methods.

> Inheritance is useful for code reusability: reuse properties and methods of an existing class when you create a new class.


### Getters and Setters
Classes also allows you to use getters and setters.

It can be smart to use getters and setters for your properties, especially if you want to do something special with the value before returning them, or before you set them.

To add getters and setters in the class, use the get and set keywords.

Example
Create a getter and a setter for the "carname" property:
```js
class Car {
  constructor(brand) {
    this.carname = brand;
  }
  get cnam() {
    return this.carname;
  }
  set cnam(x) {
    this.carname = x;
  }
}

mycar = new Car("Ford");
```

document.getElementById("demo").innerHTML = mycar.cnam;

Note: even if the getter is a method, you do not use parentheses when you want to get the property value.

The name of the getter/setter method cannot be the same as the name of the property, in this case carname.

Many programmers use an underscore character _ before the property name to separate the getter/setter from the actual property:

Example
You can use the underscore character to separate the getter/setter from the actual property:
```js
class Car {
  constructor(brand) {
    this._carname = brand;
  }
  get carname() {
    return this._carname;
  }
  set carname(x) {
    this._carname = x;
  }
}

mycar = new Car("Ford");

document.getElementById("demo").innerHTML = mycar.carname;
```

To use a setter, use the same syntax as when you set a property value, without parentheses:

Example
Use a setter to change the carname to "Volvo":
```js
class Car {
  constructor(brand) {
    this._carname = brand;
  }
  get carname() {
    return this._carname;
  }
  set carname(x) {
    this._carname = x;
  }
}

mycar = new Car("Ford");
mycar.carname = "Volvo";
document.getElementById("demo").innerHTML = mycar.carname;
```


### Hoisting
Unlike functions, and other JavaScript declarations, class declarations are not hoisted.

That means that you must declare a class before you can use it:

Example
```js
//You cannot use the class yet.
//mycar = new Car("Ford")
//This would raise an error.

class Car {
  constructor(brand) {
    this.carname = brand;
  }
}

//Now you can use the class:
mycar = new Car("Ford")
```

### "use strict"
The syntax in classes must be written in "strict mode".

You will get an error if you do not follow the "strict mode" rules.

Example
In "strict mode" you will get an error if you use a variable without declaring it:

class Car {
  constructor(brand) {
    i = 0;
    this.carname = brand;
  }
}
var mycar = new Car("Ford");





## Code Debugging 

Searching for (and fixing) errors in programming code is called code debugging.


### JavaScript Debuggers
Debugging is not easy. But fortunately, all modern browsers have a built-in JavaScript debugger.

- With a debugger, you can also set breakpoints (places where code execution can be stopped), and examine variables while the code is executing.

- You activate debugging in your browser with the **F12 key**, and select "Console" in the debugger menu.



### The console.log() Method
If your browser supports debugging, you can use console.log() to display JavaScript values in the debugger window:
```js
a = 5;
b = 6;
c = a + b;
console.log(c);
```



### Setting Breakpoints
In the debugger window, you can set breakpoints in the JavaScript code.

At each breakpoint, JavaScript will stop executing, and let you examine JavaScript values.

After examining values, you can resume the execution of code (typically with a play button).

With the debugger turned on, this code will stop executing before it executes the third line.



### The debugger Keyword
The debugger keyword stops the execution of JavaScript, and calls (if available) the debugging function.

Example
```js
var x = 15 * 5;
debugger;
document.getElementById("demo").innerHTML = x;
```


### MORE 
A common practice programmers use to track bugs in their code is to print statements as the program runs. One way is to use statements such as **console.log() or console.debug()**, but it is considered to be unsafe and must be included production. 
**Debuggers** provide a systematic way to observe what is happening in a program, without exposing your program to security threats.
The key features of debuggers are **watching objects** (by watching objects you can track changes), and adding **breakpoints** (breakpoints are markers that a programmer can place in their code to stop the code form continuing beyond points that the developer is investigating). 


#### 1. Using Node JS watchers
To use the node js debugger on a program, you have to **node inspect** the program

```sh
node inspect example.js
```

##### commands that can be used in the debugger
- `c` or `cont`: continue execution to the next breakingpoin or to th end of the program. 
- `n` or `next`: Move to the next line of code.
- `s` or `step`: Step into a function. By default, we only step through code in the block or scope we're debugging. 
- `o`: Step out of a function (After stepping into a function).
- `pause`: Pause the running code.
- `watch()`: To watch a variable, use `watch()` function with a string argument that contains the variable name (e.g. `watch('myVar')`)
- `unwatch()`: To stop watching a variable (e.g. `unwatch('myVar')`)
- `.exit`: to exit debugger.


#### Using Breakpoint with the Node.js debugger
It's comon for Node.js projects to consist of many interconnnected modules debugging them line-by-line would be time consuming. 
Break points allows you to jump to a line you'd like to pause by using in the `debugger` keyword. 





## JavaScript Style Guide and Coding Conventions

Coding conventions are style guidelines for programming. They typically cover:


Naming and declaration rules for variables and functions.
- Rules for the use of white space, indentation, and comments.
- Programming practices and principles

Coding conventions secure quality:
- Improves code readability
- Make code maintenance easier



### Variable Names
Use camelCase for identifier names (variables and functions).
All names start with a letter.
```js 
firstName = "John";
lastName = "Doe";

price = 19.90;
tax = 0.20;

fullPrice = price + (price * tax);
```



### Spaces Around Operators
Always put spaces around operators ( = + - * / ), and after commas:

Examples:
```js
var x = y + z;
var values = ["Volvo", "Saab", "Fiat"];
```

### Code Indentation
Always use 2 spaces for indentation of code blocks:

Functions:
```js
function toCelsius(fahrenheit) {
  return (5 / 9) * (fahrenheit - 32);
}
```

> Do not use tabs (tabulators) for indentation. Different editors interpret tabs differently.



### Statement Rules
General rules for simple statements:

Always end a simple statement with a semicolon.
Examples:
```js
var values = ["Volvo", "Saab", "Fiat"];

var person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};
```
General rules for complex (compound) statements:

- Put the opening bracket at the end of the first line.
- Use one space before the opening bracket.
- Put the closing bracket on a new line, without leading spaces.
- Do not end a complex statement with a semicolon.

Functions:
```js
function toCelsius(fahrenheit) {
  return (5 / 9) * (fahrenheit - 32);
}
Loops:
for (i = 0; i < 5; i++) {
  x += i;
}
```
Conditionals:
```js
if (time < 20) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}
```



### Line Length < 80
For readability, avoid lines longer than 80 characters.

If a JavaScript statement does not fit on one line, the best place to break it, is after an operator or a comma.

Example
```js
document.getElementById("demo").innerHTML =
"Hello Dolly.";
```



### Naming Conventions
Always use the same naming convention for all your code. For example:

Variable and function names written as camelCase
Global variables written in UPPERCASE (We don't, but it's quite common)
Constants (like PI) written in UPPERCASE
Should you use hyp-hens, camelCase, or under_scores in variable names?

This is a question programmers often discuss. The answer depends on who you ask:

**Hyphens in HTML and CSS**:
HTML5 attributes can start with data- (data-quantity, data-price).

CSS uses hyphens in property-names (font-size).

> Hyphens can be mistaken as subtraction attempts. Hyphens are not allowed in JavaScript names.

**Underscores**:
Many programmers prefer to use underscores (date_of_birth), especially in SQL databases.

Underscores are often used in PHP documentation.

**PascalCase**:
PascalCase is often preferred by C programmers.

**camelCase**:
camelCase is used by JavaScript itself, by jQuery, and other JavaScript libraries.

> Do not start names with a $ sign. It will put you in conflict with many JavaScript library names.



### Use Lower Case File Names
Most web servers (Apache, Unix) are case sensitive about file names:
- london.jpg cannot be accessed as London.jpg.

Other web servers (Microsoft, IIS) are not case sensitive:
- london.jpg can be accessed as London.jpg or london.jpg.
- If you use a mix of upper and lower case, you have to be extremely consistent.
- If you move from a case insensitive, to a case sensitive server, even small errors can break your web site.

> To avoid these problems, always use lower case file names (if possible).





## JavaScript Best Practices

> Avoid global variables, avoid **new**, avoid **==**, avoid **eval()**


### Avoid Global Variables
Minimize the use of global variables.

This includes all data types, objects, and functions.

Global variables and functions can be overwritten by other scripts.

Use local variables instead, and learn how to use closures.

> Variables created without a declaration keyword (var, let, or const) are always global, even if they are created inside a function.





## Variable Lifetime

Global variables live until the page is discarded, like when you navigate to another page or close the window.


Local variables have short lives. They are created when the function is invoked, and deleted when the function is finished.





## JavaScript Performance

How to speed up your JavaScript code.


### Reduce Activity in Loops
Loops are often used in programming.

Each statement in a loop, including the for statement, is executed for each iteration of the loop.

Statements or assignments that can be placed outside the loop will make the loop run faster.

Bad:
```js
var i;
for (i = 0; i < arr.length; i++) {
```
Better Code:
```js
var i;
var l = arr.length;
for (i = 0; i < l; i++) {
```
The bad code accesses the length property of an array each time the loop is iterated.

The better code accesses the length property outside the loop and makes the loop run faster.


### Reduce DOM Access
Accessing the HTML DOM is very slow, compared to other JavaScript statements.

If you expect to access a DOM element several times, access it once, and use it as a local variable:

Example
```js
var obj;
obj = document.getElementById("demo");
obj.innerHTML = "Hello";
```



### Reduce DOM Size
Keep the number of elements in the HTML DOM small.

This will always improve page loading, and speed up rendering (page display), especially on smaller devices.

Every attempt to search the DOM (like getElementsByTagName) will benefit from a smaller DOM.



### Avoid Unnecessary Variables
Don't create new variables if you don't plan to save values.

Often you can replace code like this:
```js
var fullName = firstName + " " + lastName;
document.getElementById("demo").innerHTML = fullName;
```

With this:
```js
document.getElementById("demo").innerHTML = firstName + " " + lastName
```



### Delay JavaScript Loading
Putting your scripts at the bottom of the page body lets the browser load the page first.

While a script is downloading, the browser will not start any other downloads. In addition all parsing and rendering activity might be blocked.

An alternative is to use defer="true" in the script tag. The defer attribute specifies that the script should be executed after the page has finished parsing, but it only works for external scripts.



### Avoid Using with
Avoid using the `with` keyword. It has a negative effect on speed. It also clutters up JavaScript scopes.

The `with` keyword is not allowed in strict mode.





## JavaScript JSON

JSON is a format for storing and transporting data.


JSON is often used when data is sent from a server to a web page.




### What is JSON?
- JSON stands for JavaScript Object Notation
- JSON is a lightweight data interchange format
- JSON is language independent 
- JSON is "self-describing" and easy to understand

**The JSON syntax is derived from JavaScript object notation syntax, but the JSON format is text only. Code for reading and generating JSON data can be written in any programming language.**




### JSON Example
This JSON syntax defines an employees object: an array of 3 employee records (objects):

JSON Example
{
"employees":[
  {"firstName":"John", "lastName":"Doe"},
  {"firstName":"Anna", "lastName":"Smith"},
  {"firstName":"Peter", "lastName":"Jones"}
]
}




### The JSON Format Evaluates to JavaScript Objects
The JSON format is syntactically identical to the code for creating JavaScript objects.

Because of this similarity, a JavaScript program can easily convert JSON data into native JavaScript objects.





### JSON Syntax Rules
- Data is in name/value pairs
- Data is separated by commas
- Curly braces hold objects
- Square brackets hold arrays





### JSON Data - A Name and a Value
JSON data is written as name/value pairs, just like JavaScript object properties.

A name/value pair consists of a field name (in double quotes), followed by a colon, followed by a value:

```json
"firstName":"John"  
```     

JSON names require double quotes. JavaScript names do not.




### JSON Objects
JSON objects are written inside curly braces.

Just like in JavaScript, objects can contain multiple name/value pairs:
```json
{"firstName":"John", "lastName":"Doe"}
```

### JSON Arrays
JSON arrays are written inside square brackets.

Just like in JavaScript, an array can contain objects:

```json
"employees":[
  {"firstName":"John", "lastName":"Doe"},
  {"firstName":"Anna", "lastName":"Smith"},
  {"firstName":"Peter", "lastName":"Jones"}
]
```
In the example above, the object "employees" is an array. It contains three objects.

Each object is a record of a person (with a first name and a last name).

Converting a JSON Text to a JavaScript Object
A common use of JSON is to read data from a web server, and display the data in a web page.

For simplicity, this can be demonstrated using a string as input.

First, create a JavaScript string containing JSON syntax:
```json
var text = '{ "employees" : [' +
'{ "firstName":"John" , "lastName":"Doe" },' +
'{ "firstName":"Anna" , "lastName":"Smith" },' +
'{ "firstName":"Peter" , "lastName":"Jones" } ]}';
```

Then, use the JavaScript built-in function JSON.parse() to convert the string into a JavaScript object:
```js
var obj = JSON.parse(text);
```





## JavaScript Forms

### Constraint Validation HTML Input Attributes

- **disabled** - Specifies that the input element should be disabled
- **max**	- Specifies the maximum value of an input element
- **min** -	Specifies the minimum value of an input element
- **pattern**	- Specifies the value pattern of an input element
- **required**	- Specifies that the input field requires an element
- **type** 	- Specifies the type of an input element




### Constraint Validation CSS Pseudo Selectors
- **:disabled** -	Selects input elements with the "disabled" attribute specified
- **:invalid** -	Selects input elements with invalid values
- **:optional** - Selects input elements with no "required" attribute specified
- **:required** -	Selects input elements with the "required" attribute specified
- **:valid** - Selects input elements with valid values





## JavaScript Validation API



### Constraint Validation DOM Methods
- **checkValidity()** -	Returns true if an input element contains valid data.

- **setCustomValidity()** -	Sets the validationMessage property of an input element.

```js 
function myFunction() {
  var inpObj = document.getElementById("id1");
  if (!inpObj.checkValidity()) {
    document.getElementById("demo").innerHTML = inpObj.validationMessage;
  } else {
    document.getElementById("demo").innerHTML = "Input OK";
  } 
} 
```




### Constraint Validation DOM Properties
- **validity** -	Contains boolean properties related to the validity of an input element.
- **validationMessage** -	Contains the message a browser will display when the validity is false.
- **willValidate** -	Indicates if an input element will be validated.





### Validity Properties
The validity property of an input element contains a number of properties related to the validity of data:
V
- **customError** -	Set to true, if a custom validity message is set.
- **patternMismatch** -	Set to true, if an element's value does not match its pattern attribute.
- **rangeOverflow** -	Set to true, if an element's value is greater than its max attribute.
- **rangeUnderflow** -	Set to true, if an element's value is less than its min attribute.
- **stepMismatch** -	Set to true, if an element's value is invalid per its step attribute.
- **tooLong** -	Set to true, if an element's value exceeds its maxLength attribute.
- **typeMismatch** -	Set to true, if an element's value is invalid per its type attribute.
- **valueMissing** -	Set to true, if an element (with a required attribute) has no value.
- **valid** -	Set to true, if an element's value is valid.





## JavaScript Objects

In JavaScript, almost "everything" is an object.


- Booleans can be objects (if defined with the new keyword)
- Numbers can be objects (if defined with the new keyword)
- Strings can be objects (if defined with the new keyword)
- Dates are always objects
- Maths are always objects
- Regular expressions are always objects
- Arrays are always objects
- Functions are always objects
- Objects are always objects




### JavaScript Primitives
A primitive value is a value that has no properties or methods.

A primitive data type is data that has a primitive value.

JavaScript defines 5 types of primitive data types:
- string
- number
- boolean
- null
- undefined

Primitive values are immutable (they are hardcoded and therefore cannot be changed).

> if x = 3.14, you can change the value of x. But you cannot change the value of 3.14.




### JavaScript Function or Getter?
What is the differences between these two examples?

Example 1
```js
var person = {
  firstName: "John",
  lastName : "Doe",
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};
```




### JavaScript Object Constructors
Example
```js
function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}
```
> It is considered good practice to name constructor functions with an upper-case first letter.


Objects of the same type are created by calling the constructor function with the new keyword:
```js
var myFather = new Person("John", "Doe", 50, "blue");
var myMother = new Person("Sally", "Rally", 48, "green");
```




### Adding a Property to an Object
Adding a new property to an existing object is easy:

Example
```js
myFather.nationality = "English";
```




### Adding a Method to an Object
Adding a new method to an existing object is easy:

Example
```js
myFather.name = function () {
  return this.firstName + " " + this.lastName;
};
```




### Adding a Property to a Constructor
You cannot add a new property to an object constructor the same way you add a new property to an existing object:

Example
```js
Person.nationality = "English";
```

To add a new property to a constructor, you must add it to the constructor function:

Example
```js
function Person(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
  this.nationality = "English";
}
```
This way object properties can have default values.





### Adding a Method to a Constructor
Your constructor function can also define methods:

Example
```js
function Person(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
  this.name = function() {return this.firstName + " " + this.lastName;};
}
```
You cannot add a new method to an object constructor the same way you add a new method to an existing object.

Adding methods to an object constructor must be done inside the constructor function:

Example
```js
function Person(firstName, lastName, age, eyeColor) {
  this.firstName = firstName; 
  this.lastName = lastName;
  this.age = age;
  this.eyeColor = eyeColor;
  this.changeName = function (name) {
    this.lastName = name;
  };
}
```
The changeName() function assigns the value of name to the person's lastName property.




### Built-in JavaScript Constructors
JavaScript has built-in constructors for native objects:

Example
```js
var x1 = new Object();    // A new Object object
var x2 = new String();    // A new String object
var x3 = new Number();    // A new Number object
var x4 = new Boolean();   // A new Boolean object
var x5 = new Array();     // A new Array object
var x6 = new RegExp();    // A new RegExp object
var x7 = new Function();  // A new Function object
var x8 = new Date();      // A new Date object
```

But there is no reason to create complex objects. Primitive values are much faster.

ALSO:

- Use object literals {} instead of new Object().

- Use string literals "" instead of new String().

- Use number literals 12345 instead of new Number().

- Use boolean literals true / false instead of new Boolean().

- Use array literals [] instead of new Array().

- Use pattern literals /()/ instead of new RegExp().

- Use function expressions () {} instead of new Function().



### Prototype Inheritance
All JavaScript objects inherit properties and methods from a prototype.

In the previous chapter we learned how to use an object constructor:

Example
```js
function Person(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
}

var myFather = new Person("John", "Doe", 50, "blue");
var myMother = new Person("Sally", "Rally", 48, "green");
```
We also learned that you can not add a new property to an existing object constructor:

Example
```js
Person.nationality = "English";
```
To add a new property to a constructor, you must add it to the constructor function:

Example
```js
function Person(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
  this.nationality = "English";
}
```

All JavaScript objects inherit properties and methods from a prototype:

- Date objects inherit from Date.prototype
- Array objects inherit from Array.prototype
- Person objects inherit from Person.prototype

The Object.prototype is on the top of the prototype inheritance chain:
Date objects, Array objects, and Person objects inherit from Object.prototype.




### Adding Properties and Methods to Objects
Sometimes you want to add new properties (or methods) to all existing objects of a given type.

Sometimes you want to add new properties (or methods) to an object constructor.




### Using the prototype Property
The JavaScript prototype property allows you to add new properties to object constructors:

Example
```js
function Person(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
}
```

Person.prototype.nationality = "English";
The JavaScript prototype property also allows you to add new methods to objects constructors:

Example
```js
function Person(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
}

Person.prototype.name = function() {
  return this.firstName + " " + this.lastName;
};
```

> Only modify your own prototypes. Never modify the prototypes of standard JavaScript objects.





## JavaScript ES5 Object Methods

ECMAScript 5 added a lot of new Object Methods to JavaScript.


ES5 New Object Methods
```js
// Adding or changing an object property
Object.defineProperty(object, property, descriptor)

// Adding or changing many object properties
Object.defineProperties(object, descriptors)

// Accessing Properties
Object.getOwnPropertyDescriptor(object, property)

// Returns all properties as an array
Object.getOwnPropertyNames(object)

// Returns enumerable properties as an array
Object.keys(object)

// Accessing the prototype
Object.getPrototypeOf(object)

// Prevents adding properties to an object
Object.preventExtensions(object)
// Returns true if properties can be added to an object
Object.isExtensible(object)

// Prevents changes of object properties (not values)
Object.seal(object)
// Returns true if object is sealed
Object.isSealed(object)

// Prevents any changes to an object
Object.freeze(object)
// Returns true if object is frozen
Object.isFrozen(object)
```

### Changing a Property Value
Syntax
```js
Object.defineProperty(object, property, {value : value})
```
This example changes a property value:

Example
```js
var person = {
  firstName: "John",
  lastName : "Doe",
  language : "EN"
};

// Change a property
Object.defineProperty(person, "language", {value : "NO"});
```

Changing Meta Data
ES5 allows the following property meta data to be changed:

```js
writable : true      // Property value can be changed
enumerable : true    // Property can be enumerated
configurable : true  // Property can be reconfigured


writable : false     // Property value can not be changed
enumerable : false   // Property can be not enumerated
configurable : false // Property can be not reconfigured
```

ES5 allows getters and setters to be changed:
```js
// Defining a getter
get: function() { return language }
// Defining a setter
set: function(value) { language = value }
```

This example makes language read-only:
```js
Object.defineProperty(person, "language", {writable:false});
```

This example makes language not enumerable:
```js
Object.defineProperty(person, "language", {enumerable:false});
```
Listing All Properties
This example list all properties of an object:

Example
```js
var person = {
  firstName: "John",
  lastName : "Doe"
  language : "EN"
};

Object.defineProperty(person, "language", {enumerable:false});
Object.getOwnPropertyNames(person);  // Returns an array  properties
```




### Listing Enumerable Properties
This example list only the enumerable properties of an object:

Example
```js
var person = {
  firstName: "John",
  lastName : "Doe"
  language : "EN"
};

Object.defineProperty(person, "language", {enumerable:false});
Object.keys(person);  // Returns an array of enumerable properties
```



### Adding a Property
This example adds a new property to an object:

Example
```js
// Create an object:
var person = {
  firstName: "John",
  lastName : "Doe",
  language : "EN"
};

// Add a property
Object.defineProperty(person, "year", {value:"2008"});
```




### Adding Getters and Setters
The Object.defineProperty() method can also be used to add Getters and Setters:

Example
```js
//Create an object
var person = {firstName:"John", lastName:"Doe"};

// Define a getter
Object.defineProperty(person, "fullName", {
  get : function () {return this.firstName + " " + this.lastName;}
});
```




### A Counter Example
Example
```js
// Define object
var obj = {counter:0};

// Define setters
Object.defineProperty(obj, "reset", {
  get : function () {this.counter = 0;}
});
Object.defineProperty(obj, "increment", {
  get : function () {this.counter++;}
});
Object.defineProperty(obj, "decrement", {
  get : function () {this.counter--;}
});
Object.defineProperty(obj, "add", {
  set : function (value) {this.counter += value;}
});
Object.defineProperty(obj, "subtract", {
  set : function (i) {this.counter -= i;}
});

// Play with the counter:
obj.reset;
obj.add = 5;
obj.subtract = 1;
obj.increment;
obj.decrement;
```





## JavaScript Function Definitions

Function Declarations

Earlier in this tutorial, you learned that functions are declared with the following syntax:

```js
function functionName(parameters) {
  // code to be executed
}
```




### The Function() Constructor
As you have seen in the previous examples, JavaScript functions are defined with the function keyword.

Functions can also be defined with a built-in JavaScript function constructor called Function().

Example
```js
var myFunction = new Function("a", "b", "return a * b");

var x = myFunction(4, 3);
```

You actually don't have to use the function constructor. The example above is the same as writing:

Example
```js
var myFunction = function (a, b) {return a * b};

var x = myFunction(4, 3);
```




### Function Hoisting
Hoisting is JavaScript's default behavior of moving declarations to the top of the current scope.

Hoisting applies to variable declarations and to function declarations.

Because of this, JavaScript functions can be called before they are declared:

```js
myFunction(5);

function myFunction(y) {
  return y * y;
}
```

> Functions defined using an expression are not hoisted.




### Self-Invoking Functions
Function expressions can be made "self-invoking".

A self-invoking expression is invoked (started) automatically, without being called.

Function expressions will execute automatically if the expression is followed by ().

You cannot self-invoke a function declaration.

You have to add parentheses around the function to indicate that it is a function expression:

Example
```js
(function () {
  var x = "Hello!!";  // I will invoke myself
})();
```
> The function above is actually an anonymous self-invoking function (function without name).




### Functions are Objects
The typeof operator in JavaScript returns "function" for functions.

But, JavaScript functions can best be described as objects.

JavaScript functions have both properties and methods.

The arguments.length property returns the number of arguments received when the function was invoked:

Example
```js
function myFunction(a, b) {
  return arguments.length;
}
// Depends on the argument provided by user, default values are not counted execept a value is specified for them.
```

The toString() method returns the function as a string:

Example
```js
function myFunction(a, b) {
  return a * b;
}

var txt = myFunction.toString();
```

> A function defined as the property of an object, is called a method to the object.
A function designed to create new objects, is called an object constructor.





### Arrow Functions
Arrow functions allows a short syntax for writing function expressions.

You don't need the function keyword, the return keyword, and the curly brackets.

Example
```js
// ES5
var x = function(x, y) {
  return x * y;
}

// ES6
const x = (x, y) => x * y;
```
Arrow functions do not have their own this. They are not well suited for defining object methods.

Arrow functions are not hoisted. They must be defined before they are used.

Using const is safer than using var, because a function expression is always constant value.

You can only omit the return keyword and the curly brackets if the function is a single statement. Because of this, it might be a good habit to always keep them:
Example
```js
const x = (x, y) => { return x * y };
```





## JavaScript Function Parameters

The Arguments Object

JavaScript functions have a built-in object called the arguments object.

The argument object contains an array of the arguments used when the function was called (invoked).

This way you can simply use a function to find (for instance) the highest value in a list of numbers:

Example
```js
x = findMax(1, 123, 500, 115, 44, 88);

function findMax() {
  var i;
  var max = -Infinity;
  for (i = 0; i < arguments.length; i++) {
    if (arguments[i] > max) {
      max = arguments[i];
    }
  }
  return max;
}
```

Or create a function to sum all input values:

Example
```js
x = sumAll(1, 123, 500, 115, 44, 88);

function sumAll() {
  var i;
  var sum = 0;
  for (i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}
```
> If a function is called with too many arguments (more than declared), these arguments can be reached using the arguments object.




### Arguments are Passed by Value
The parameters, in a function call, are the function's arguments.

JavaScript arguments are passed by value: The function only gets to know the values, not the argument's locations.

If a function changes an argument's value, it does not change the parameter's original value.

Changes to arguments are not visible (reflected) outside the function.

### Objects are Passed by Reference

In JavaScript, object references are values.

Because of this, objects will behave like they are passed by reference:

If a function changes an object property, it changes the original value.

Changes to object properties are visible (reflected) outside the function.

## JavaScript Function Call

### Method Reuse

With the call() method, you can write a method that can be used on different objects.

Example
```js
var person = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}
var person1 = {
  firstName:"John",
  lastName: "Doe"
}
var person2 = {
  firstName:"Mary",
  lastName: "Doe"
}
person.fullName.call(person1);  // Will return "John Doe"
```

The call() Method with Arguments
The call() method can accept arguments:
Example
```js
var person = {
  fullName: function(city, country) {
    return this.firstName + " " + this.lastName + "," + city + "," + country;
  }
}
var person1 = {
  firstName:"John",
  lastName: "Doe"
}
person.fullName.call(person1, "Oslo", "Norway");
```





## JavaScript Function Apply
### Method Reuse
With the apply() method, you can write a method that can be used on different objects.

The JavaScript apply() Method
The apply() method is similar to the call() method (previous chapter).

In this example the fullName method of person is applied on person1:

Example
```js
var person = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}
var person1 = {
  firstName: "Mary",
  lastName: "Doe"
}
person.fullName.apply(person1);  // Will return "Mary Doe"
```




### The apply() Method with Arguments
The apply() method accepts arguments in an array:

Example
```js
var person = {
  fullName: function(city, country) {
    return this.firstName + " " + this.lastName + "," + city + "," + country;
  }
}
var person1 = {
  firstName:"John",
  lastName: "Doe"
}
person.fullName.apply(person1, ["Oslo", "Norway"]);
```





## The Difference Between call() and apply()
The difference is:

The call() method takes arguments separately.

The apply() method takes arguments as an array.

> The apply() method is very handy if you want to use an array instead of an argument list.

## Export and Import

### Export before declarations
We can label any declaration as exported by placing `export` before it, be it a variable, function or a class.

For instance, here all exports are valid:
```js
// export an array
export let months = ['Jan', 'Feb', 'Mar','Apr', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// export a constant
export const MODULES_BECAME_STANDARD_YEAR = 2015;

// export a class
export class User {
  constructor(name) {
    this.name = name;
  }
}
```

> No semicolons after export class/function 

There’s no need for a semicolon at the end of export class and export function:
```js
export function sayHi(user) {
  alert(`Hello, ${user}!`);
}  // no ; at the end
```




### Export apart from declarations
Also, we can put export separately.

Here we first declare, and then export:
```js
// 📁 say.js
function sayHi(user) {
  alert(`Hello, ${user}!`);
}

function sayBye(user) {
  alert(`Bye, ${user}!`);
}

export {sayHi, sayBye}; // a list of exported Variables 
```

…Or, technically we could put export above functions as well.



### Import *
Usually, we put a list of what to import in curly braces import {...}, like this:
```js
// 📁 main.js
import {sayHi, sayBye} from './say.js';

sayHi('John'); // Hello, John!
sayBye('John'); // Bye, John!
```

But if there’s a lot to import, we can import everything as an object using import * as <obj>, for instance:

```js
// 📁 main.js
import * as say from './say.js';

say.sayHi('John');
say.sayBye('John');
```


> Don’t be afraid to import too much 

Modern build tools, such as webpack and others, bundle modules together and optimize them to speedup loading. They also removed unused imports.

For instance, if you import * as library from a huge code library, and then use only few methods, then unused ones will not be included into the optimzed bundle.



### Import “as”
We can also use as to import under different names.

For instance, let’s import sayHi into the local variable hi for brevity, and import sayBye as bye:

```js
// 📁 main.js
import {sayHi as hi, sayBye as bye} from './say.js';

hi('John'); // Hello, John!
bye('John'); // Bye, John!
``` 

### Export “as”
The similar syntax exists for export.

Let’s export functions as hi and bye:
```js
// 📁 say.js
...
export {sayHi as hi, sayBye as bye};
``` 
Now hi and bye are official names for outsiders, to be used in imports:

```js
// 📁 main.js
import * as say from './say.js';

say.hi('John'); // Hello, John!
say.bye('John'); // Bye, John!
```



### Export default
In practice, there are mainly two kinds of modules.

Modules that contain a library, pack of functions, like say.js above.
Modules that declare a single entity, e.g. a module user.js exports only class User.
Mostly, the second approach is preferred, so that every “thing” resides in its own module.

Naturally, that requires a lot of files, as everything wants its own module, but that’s not a problem at all. Actually, code navigation becomes easier if files are well-named and structured into folders.

Modules provide a special export default (“the default export”) syntax to make the “one thing per module” way look better.

Put export default before the entity to export:
```js
// 📁 user.js
export default class User { // just add "default"
  constructor(name) {
    this.name = name;
  }
}
```
There may be only one export default per file.

…And then import it without curly braces:
```js
// 📁 main.js
import User from './user.js'; // not {User}, just User

new User('John');
```
Imports without curly braces look nicer. A common mistake when starting to use modules is to forget curly braces at all. So, remember, import needs curly braces for named exports and doesn’t need them for the default one.

### Named export	Default export
export class User {...}	export default class User {...}
import {User} from ...	import User from ...
Technically, we may have both default and named exports in a single module, but in practice people usually don’t mix them. A module has either named exports or the default one.

As there may be at most one default export per file, the exported entity may have no name.

For instance, these are all perfectly valid default exports:
```js
export default class { // no class name
  constructor() { ... }
}
export default function(user) { // no function name
  alert(`Hello, ${user}!`);
}

// export a single value, without making a variable
export default ['Jan', 'Feb', 'Mar','Apr', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
```

Not giving a name is fine, because there is only one export default per file, so import without curly braces knows what to import.

Without default, such an export would give an error:

```js
export class { // Error! (non-default export needs a name)
  constructor() {}
}
```



### The “default” name
In some situations the default keyword is used to reference the default export.

For example, to export a function separately from its definition:
```js
function sayHi(user) {
  alert(`Hello, ${user}!`);
}

// same as if we added "export default" before the function
export {sayHi as default};
``` 

Or, another situation, let’s say a module user.js exports one main “default” thing, and a few named ones (rarely the case, but it happens):

```js
// 📁 user.js
export default class User {
  constructor(name) {
    this.name = name;
  }
}

export function sayHi(user) {
  alert(`Hello, ${user}!`);
}
``` 

Here’s how to import the default export along with a named one:

```js
// 📁 main.js
import {default as User, sayHi} from './user.js';

new User('John');
``` 

And, finally, if importing everything * as an object, then the default property is exactly the default export:
```js
// 📁 main.js
import * as user from './user.js';

let User = user.default; // the default export
new User('John');
```

#### A word against default exports
Named exports are explicit. They exactly name what they import, so we have that information from them; that’s a good thing.

Named exports force us to use exactly the right name to import:
```js
import {User} from './user.js';
// import {MyUser} won't work, the name must be {User}
```
…While for a default export, we always choose the name when importing:

```js
import User from './user.js'; // works
import MyUser from './user.js'; // works too
// could be import Anything... and it'll still works
```
So team members may use different names to import the same thing, and that’s not good.

Usually, to avoid that and keep the code consistent, there’s a rule that imported variables should correspond to file names, e.g:

```js
import User from './user.js';
import LoginForm from './loginForm.js';
import func from '/path/to/func.js';
...
```
Still, some teams consider it a serious drawback of default exports. So they prefer to always use named exports. Even if only a single thing is exported, it’s still exported under a name, without default.

That also makes re-export (see below) a little bit easier.




### Re-export
“Re-export” syntax export ... from ... allows to import things and immediately export them (possibly under another name), like this:

```js
export {sayHi} from './say.js'; // re-export sayHi

export {default as User} from './user.js'; // re-export Defaults
```

Why would that be needed? Let’s see a practical use case.

The file structure could be like this:
```
auth/
    index.js
    user.js
    helpers.js
    tests/
        login.js
    providers/
        github.js
        facebook.js
        ...
```
We’d like to expose the package functionality via a single entry point.

In other words, a person who would like to use our package, should import only from the “main file” auth/index.js.

Like this:
```
import {login, logout} from 'auth/index.js'
```

The “main file”, auth/index.js exports all the functionality that we’d like to provide in our package.

The idea is that outsiders, other programmers who use our package, should not meddle with its internal structure, search for files inside our package folder. We export only what’s necessary in auth/index.js and keep the rest hidden from prying eyes.

```js
// 📁 auth/index.js

// import login/logout and immediately export them
import {login, logout} from './helpers.js';
export {login, logout};

// import default as User and export it
import User from './user.js';
export {User};
...
```

Now users of our package can import {login} from "auth/index.js".

The syntax export ... from ... is just a shorter notation for such import-export:

```js
// 📁 auth/index.js
// re-export login/logout
export {login, logout} from './helpers.js';

// re-export the default export as User
export {default as User} from './user.js';
...
```

The notable difference of export ... from compared to import/export is that re-exported modules aren’t available in the current file. So inside the above example of auth/index.js we can’t use re-exported login/logout functions.



### Re-exporting the default export 
The default export needs separate handling when re-exporting.

Let’s say we have user.js with the export default class User and would like to re-export it:
```js
// 📁 user.js
export default class User {
  // ...
}
```

We can come across two problems with it:
- export User from './user.js' won’t work. That would lead to a syntax error.
- To re-export the default export, we have to write export {default as User}, as in the example above.
- export * from './user.js' re-exports only named exports, but ignores the default one.
- If we’d like to re-export both named and default exports, then two statements are needed:
```js
export * from './user.js'; // to re-export named exports
export {default} from './user.js'; // to re-export the default export 
```
Such oddities of re-exporting a default export are one of the reasons why some developers don’t like default exports and prefer named ones.


____________________________________________________





## Others 

### isNaN()
```js
age = Number(age);
if (isNaN(age)) {
  voteable = "Input is not a number";
} else {
  voteable = (age < 18) ? "Too young" : "Old enough";
}
```


### JavaScript Closures
Remember self-invoking functions? What does this function do?

Example
```js
var add = (function () {
  var counter = 0;
  return function () {counter += 1; return counter}
})();

add();
add();
add();
// the counter is now 3
```
**Example Explained**
The variable add is assigned the return value of a self-invoking function.

The self-invoking function only runs once. It sets the counter to zero (0), and returns a function expression.

This way add becomes a function. The "wonderful" part is that it can access the counter in the parent scope.

This is called a JavaScript closure. It makes it possible for a function to have "private" variables.

The counter is protected by the scope of the anonymous function, and can only be changed using the add function.

> A closure is a function having access to the parent scope, even after the parent function has closed.




### Don't Use new Object()
- Use {} instead of new Object()
- Use "" instead of new String()
- Use 0 instead of new Number()
- Use false instead of new Boolean()
- Use [] instead of new Array()
- Use /()/ instead of new RegExp()
- Use function (){} instead of new Function()




### Use Parameter Defaults
If a function is called with a missing argument, the value of the missing argument is set to undefined.

Undefined values can break your code. It is a good habit to assign default values to arguments.

Example
```js
function myFunction(x, y) {
  if (y === undefined) {
    y = 0;
  }
}
```
ECMAScript 2015 allows default parameters in the function call:

```js
function (a=1, b=1) { /*function code*/ }
```


### Breaking a JavaScript String
JavaScript will allow you to break a statement into two lines:

Example 1 
```js
var x =
"Hello World!";
```
But, breaking a statement in the middle of a string will not work:

Example 2
```js
var x = "Hello
World!";
```

You must use a "backslash" if you must break a statement in a string:
Example 3
```js
var x = "Hello \
World!";
```



### JSON.parse()
A common use of JSON is to receive data from a web server.

Imagine you received this text string from a web server:
```js
'{"name":"John", "age":30, "city":"New York"}'
```

The JavaScript function JSON.parse() is used to convert the text into a JavaScript object:
```js
var obj = JSON.parse('{"name":"John", "age":30, "city":"New York"}');
```



### JSON.stringify()
A common use of JSON is to send data to a web server.

When sending data to a web server, the data has to be a string.

Imagine we have this object in JavaScript:
```js
var obj = {"name":"John", "age":30, "city":"New York"};
```

Use the JavaScript function JSON.stringify() to convert it into a string.
```js
var myJSON = JSON.stringify(obj);
```



### Date.now()
`Date.now()` returns the number of milliseconds since zero date (January 1. 1970 00:00:00 UTC).

Example 
```js
var timInMSs = Date.now();
```

> Date.now() returns the same as getTime() performed on a Date object.




### New Number Methods
ES6 added 2 new methods to the Number object:

- Number.isInteger()
- Number.isSafeInteger()



#### The Number.isInteger() Method
The Number.isInteger() method returns true if the argument is an integer.

Example
```js
Number.isInteger(10);        // returns true
Number.isInteger(10.5);      // returns false
```


#### The Number.isSafeInteger() Method
A safe integer is an integer that can be exactly represented as a double precision number.

The Number.isSafeInteger() method returns true if the argument is a safe integer.

Example
```js
Number.isSafeInteger(10);    // returns true
Number.isSafeInteger(12345678901234567890);  // returns false
```
> Safe integers are all integers from -(2^53 - 1) to +(2^53 - 1).
> This is safe: 9007199254740991. This is not safe: 9007199254740992.





## New Global Methods
ES6 also added 2 new global number methods:
- isFinite()
- isNaN()




### The isFinite() Method
The global isFinite() method returns false if the argument is Infinity or NaN.Otherwise it returns true:

Example
```js
isFinite(10/0);       // returns false (10/0 is infinity) 
isFinite(10/1);       // returns true
```




### The isNaN() Method
The global isNaN() method returns true if the argument is NaN. Otherwise it returns false:

Example
```js
isNaN("Hello");       // returns true
```

## Array.from()
The Array.from() static method creates a new, shallow-copied Array instance from an iterable or array-like object.

```js 
console.log(Array.from('foo'));
// Expected output: Array ["f", "o", "o"]

console.log(Array.from([1, 2, 3], x => x + x));
// Expected output: Array [2, 4, 6] 
``` 

syntax
```js
Array.from(arrayLike)
Array.from(arrayLike, mapFn)
Array.from(arrayLike, mapFn, thisArg)
```

### Difference between append and appendChild methods in JavaScript 
1. **append:** The append method is used to insert either Node objects or DOMStrings (basically a string or text) into the DOM, while the appendChild method can only be used to insert Node objects into the DOM.
For example, with the append method, you can do:

```js
let div = document.createElement("div")

//insert a DOM node
let p = document.createElement("p");
div.append(p);
console.log(div) //<div><p></p></div>

//insert a DOMString
div.append(‘<p>Hello</p>’)
console.log(div) //<div><p>Hello</p></div>
``` 

With the appendChild method,
```js
let div = document.createElement("div")

//insert a DOM node
let p = document.createElement("p");
div.appendChild(p);
console.log(div) //<div><p></p></div>

//insert a DOMString
div.appendChild(‘<p>Hello</p>’) //This results in an Uncaught TypeError: Failed to execute 'appendChild' on 'Node'
``` 
The append method can insert multiple items at once, but the appendChild method can’t.
```js
div.append(child, childTwo); // Works fine
div.appendChild(child, childTwo,); // Works fine, but adds the first element and ignores the rest  
```


## localCompare() 
The localeCompare() method compares two strings in the current locale.

The localeCompare() method returns sort order -1, 1, or 0 (for before, after, or equal).

The current locale is based on the language settings of the browser.

### Syntax 
```js
string.localeCompare(compareString)
```

### Parameters
Parameter	Description
compareString	Required.
The string to compare with.


### Return value
Type  Description
     A number	One of 3 values:
-1   if the string is sorted before the compareString
 0   if the two strings are equal
 1   if the string is sorted after the compareSequal
 
 
More Examples 
```js
let text1 = "a";
let text2 = "b";
let result = text1.localeCompare(text2);
console.log(result);
// -1


text1 = "b";
text2 = "a";
result = text1.localeCompare(text2);
console.log(result);
// 1


text1 = "a";
text2 = "a";
result = text1.localeCompare(text2);
console.log(result);
// 0
``` 


## Using Object.setPrototypeOf
```js
let bestFood= {
  food() {
    return (this.food1 + " & " + this.food2);
  }
}

let foods= {
  food1: "Beans",
  food2: "Rice"
}

Object.setPrototypeOf(foods, bestFood)
console.log(foods.food())
// Beans & Rice 
``` 


## Objects in JavaScript 
Object-Oriented Programming is a programming style based on classes and objects. These group data (properties) and methods (actions) inside a box.

OOP was developed to make code more flexible and easier to maintain.

JavaScript is prototype-based procedural language, which means it supports both functional and object-oriented programming.

```js
class Student{
 // Data (Properties)
 Name
 Age
 Standard
    
 // Methods (Action)
 study(){
 // Study
 }
    
 Play(){
 // Play
 }
    
 doHomeWork(){
 // Do Home Work
 }
    
}
```

### Encapsulation 
Encapsulation means keeping properties and methods private inside a class, so that they are not accessible from outside that class.

This will keep code that's outside the class from accidentally manipulating internal methods and properties.

Even though the language doesn’t have this distinction built in, JavaScript programmers are successfully using this idea. Typically, the available interface is described in documentation or comments. It
is also common to put an underscore (_) character at the start of property names to indicate that those properties are private.
Separating interface from implementation is a great idea. It is usually called encapsulation.

### Abstraction 
Abstraction means hiding certain details that don't matter to the user and only showing essential features or functions.




## IndexDB




## Some ES6 Built-ins
### Symbols (ES6)
A symbol is a uniqur and immutable data type that is often used to Identify object properties. 

To create a symbol, use `Symbol()` with an optional string as its description. 

```js 
const sym1 = Symbol('apple') 
console.log(sym1)
```
Here 'apple' is just a way to describe sym1. 

Symbol is used to to describe items that are similar. I provides a way to identify multiple items with a common property. 

```js 
const sym2 = Symbol('banana') 
const sym3 = Symbol('banana') 
console.log(sym2 === sym3)
// false
```
The result is false because the description is only used to describe the symbol 


### Iteration & Iterable Protocols 
1. Iterable Protocol 
2. Iterator Protocol 


#### Iterable Protocol 
Iterable Protocol is used for defining and customizing the Iteration behaviour of objects.

Some objects like strings & array are examples of built-in iterables. 
strings and Arrays are examples of built-in iterables. 
```js 
const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8]
for (const digit of digits) {
  console.log(digit)
}
```
Other examples of built-in interables are Sets and Maps 

> In order for an object to be Iterable, it must implement the iterable interface(the default iterator method, which will be used to define how the object should be iterated.).

An iterator method is available via the `[Symbol.iterator]`, is a zero arguments function that returns an iterator object. 
An iterator object is an object that conforms! o the iterator protocol. 


#### Iterator Protocol 
The iterator protocol is used to define a standard way that an object produces a sequence of values. Objects iterate with `.next()`.

An object will be come an iterator when it implements the `.next()` method. The .next() method is a zero arguments function that returns an object with two properties:

- value : the data representing the next value in the sequence of values within the object
- done : a boolean representing if the iterator is done going through the sequence of values 

> If done is true, then the iterator has reached the end of its sequence of values.
If done is false, then the iterator is able to produce another value in its sequence of values.


Here’s the example from earlier, but instead we are using the array’s default iterator to step through the each value in the array.

```js
const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const arrayIterator = digits[Symbol.iterator]();

console.log(arrayIterator.next());
console.log(arrayIterator.next());
console.log(arrayIterator.next());
// Object {value: 0, done: false}
// Object {value: 1, done: false}
// Object {value: 2, done: false}
```


### Set 
a set is a collection of distinct items. For example, `{2, 4, 5, 6}` is a set because each number is unique and appears only once. However, `{1, 1, 2, 4}` is not a set because it contains duplicate entries (the 1 is in there more than once!).

In JavaScript, we can already represent something similar to a mathematical set using an array.
```js 
const nums = [2, 4, 5, 6];
```

However, arrays do not enforce items to be unique. If we try to add another 2 to nums, JavaScript won't complain and will add it without any issue.
```js 
nums.push(2);
console.log(nums);
// [2, 4, 5, 6, 2]
``` 
…and now nums is no longer a set in the mathematical sense.


In ES6, there’s a new built-in object that behaves like a mathematical set and works similarly to an array. This new object is conveniently called a "Set". The biggest differences between a set and an array are:

- Sets are not indexed-based - you do not refer to items in a set based on their position in the set
- items in a Set can’t be accessed individually

> Basically, a Set is an object that lets you store unique items. 
>> You can add items to a Set, remove items from a Set, and loop over a Set. These items can be either primitive values or objects.


#### Creating a set 
There’s a couple of different ways to create a Set. The first way, is pretty straightforward:
```js
const games = new Set();
console.log(games);
// Set {}
```

This creates an empty Set games with no items.

If you want to create a Set from a list of values, you use an array:

```js
const games = new Set(['Super Mario Bros.', 'Banjo-Kazooie', 'Mario Kart', 'Super Mario Bros.']);
console.log(games);
// Set {'Super Mario Bros.', 'Banjo-Kazooie', 'Mario Kart'}
```
Notice the example above automatically removes the duplicate entry "Super Mario Bros." when the Set is created. Pretty neat!



#### Modifying Sets 
Use set methods:
- add(val)
- delete(val)
- clear()

```js
const games = new Set(['Super Mario Bros.', 'Banjo-Kazooie', 'Mario Kart', 'Super Mario Bros.']);

games.add('Banjo-Tooie');
games.add('Age of Empires');
games.delete('Super Mario Bros.');

console.log(games);
// Set {'Banjo-Kazooie', 'Mario Kart', 'Banjo-Tooie', 'Age of Empires'}
```

On the other hand, if you want to delete all the items from a Set, you can use the `.clear()` method.
```js 
games.clear()
console.log(games);
// Set {}
``` 


#### Sets & Iterators
You can use the Set’s default iterator to step through each item in a Set, one by one.
You can use the new `for...of` loop to loop through each item in a Set.


##### Using th set iterator 
Because the `.values()` method returns a new iterator object (called `SetIterator`), you can store that iterator object in a variable and loop through each item in the Set using `.next()`.

```js
const iterator = months.values();
iterator.next();
// Object {value: 'January', done: false}
``` 

And if you run `.next()` again?
```js
iterator.next();
// uObject {value: 'February', done: false}
``` 

And so on until done equals true which marks the end of the Set.


##### Using a for...of Loop
An easier method to loop through the items in a Set is the for...of loop.

```js 
const colors = new Set(['red', 'orange', 'yellow', 'green', 'blue', 'violet', 'brown', 'black']);
for (const color of colors) {
  console.log(color);
}
```
red orange yellow green blue violet brown black



#### What is a WeakSet?
A WeakSet is just like a normal Set with a few key differences:

1. a WeakSet can only contain objects
2. a WeakSet is not iterable which means it can’t be looped over
3. WeakSetet does not have a .clear() method

You can create a WeakSet just like you would a normal Set, except that you use the WeakSet constructor.

```js 
let student1 = { name: 'James', age: 26, gender: 'male' };
let student2 = { name: 'Julia', age: 27, gender: 'female' };
let student3 = { name: 'Richard', age: 31, gender: 'male' };

const roster = new WeakSet([student1, student2, student3]);
console.log(roster);
// WeakSet {Object {name: 'Julia', age: 27, gender: 'female'}, Object {name: 'Richard', age: 31, gender: 'male'}, Object {name: 'James', age: 26, gender: 'male'}}
```

…but if you try to add something other than an object, you’ll get an error!

```js 
roster.add('Amanda');
Uncaught TypeError: Invalid value used in weak set(…)
``` 

This is expected behavior because WeakSets can only contain objects. But why should it only contain objects? Why would you even use a WeakSet if normal Sets can contain objects and other types of data? Well, the answer to that question has more to do with why WeakSets do not have a .clear() method…

##### Garbage Collection
In JavaScript, memory is allocated when new values are created and is "automatically" freed up when those values are no longer needed. This process of freeing up memory after it is no longer needed is what is known as garbage collection.

WeakSets take advantage of this by exclusively working with objects. If you set an object to null, then you’re essentially deleting the object. And when JavaScript’s garbage collector runs, the memory that object previously occupied will be freed up to be used later in your program.

```js 
student3 = null;
console.log(roster);
// WeakSet {Object {name: 'Julia', age: 27, gender: 'female'}, Object {name: 'James', age: 26, gender: 'male'}}
```

What makes this so useful is you don’t have to worry about deleting references to deleted objects in your WeakSets, JavaScript does it for you! When an object is deleted, the object will also be deleted from the WeakSet when garbage collection runs. This makes WeakSets useful in situations where you want an efficient, lightweight solution for creating groups of objects.

The point in time when garbage collection happens depends on a lot of different factors. 




### Maps 
If Sets are similar to Arrays, then Maps are similar to Objects because Maps store key-value pairs similar to how objects contain named properties with values.

Essentially, a Map is an object that lets you store key-value pairs where both the keys and the values can be objects, primitive values, or a combination of the two.

How to Create a Map
To create a Map, simply type:

```js 
const employees = new Map();
console.log(employees);
// Map {}
``` 

This creates an empty Map employee with no key-value pairs.


Unlike Sets, you can’t create Maps from a list of values; instead, you add key-values by using the Map’s `.set()` method.

```js 
const employees = new Map();

employees.set('james.parkes@udacity.com', { 
    firstName: 'James',
    lastName: 'Parkes',
    role: 'Content Developer' 
});
employees.set('julia@udacity.com', {
    firstName: 'Julia',
    lastName: 'Van Cleve',
    role: 'Content Developer'
});
employees.set('richard@udacity.com', {
    firstName: 'Richard',
    lastName: 'Kalehoff',
    role: 'Content Developer'
});

console.log(employees);
// Map {'james.parkes@udacity.com' => Object {...}, 'julia@udacity.com' => Object {...}, 'richard@udacity.com' => Object {...}}
``` 
The `.set()` method takes two arguments. The first argument is the key, which is used to reference the second argument, the value.

To remove key-value pairs, simply use the `.delete()` method.
```js 
employees.delete('julia@udacity.com');
employees.delete('richard@udacity.com');
console.log(employees);
Map {'james.parkes@udacity.com' => Object {firstName: 'James', lastName: 'Parkes', role: 'Course Developer'}}
``` 

Again, similar to Sets, you can use the `.clear()` method to remove all key-value pairs from the Map.

```js 
employees.clear()
console.log(employees);
// Map {}
```

TIP: If you `.set()` a key-value pair to a Map that already uses the same key, you won’t receive an error, but the key-value pair will overwrite what currently exists in the Map. Also, if you try to `.delete()` a key-value that is not in a Map, you won’t receive an error, and the Map will remain unchanged.

The `.delete()` method returns true if a key-value pair is successfully deleted from the Map object, and false if unsuccessful. The return value of `.set()` is the Map object itself if successful.


#### Working with Maps
After you’ve built your Map, you can use the `.has()` method to check if a key-value pair exists in your Map by passing it a key.
```js 
const members = new Map();

members.set('Evelyn', 75.68);
members.set('Liam', 20.16);
members.set('Sophia', 0);
members.set('Marcus', 10.25);

console.log(members.has('Xavier'));
console.log(members.has('Marcus'));
// false

// true
```
And you can also retrieve values from a Map, by passing a key to the `.get()` method.

```js 
console.log(members.get('Evelyn'));
75.68 
````


#### Looping Through Maps
You’ve created a Map, added some key-value pairs, and now you want to loop through your Map. Thankfully, you’ve got three different options to choose from:

1. Step through each key or value using the Map’s default iterator
2. Loop through each key-value pair using the new for...of loop
3. Loop through each key-value pair using the Map’s .forEach() method


1. Using the MapIterator:

Using both the .keys() and .values() methods on a Map will return a new iterator object called MapIterator. You can store that iterator object in a new variable and use .next() to loop through each key or value. Depending on which method you use, will determine if your iterator has access to the Map’s keys or the Map’s values.

```js 
let iteratorObjForKeys = members.keys();
iteratorObjForKeys.next();
// Object {value: 'Evelyn', done: false}
```
Use `.next()` to the get the next key value.

```js 
iteratorObjForKeys.next();
// Object {value: 'Liam', done: false}
```
And so on.

```js
iteratorObjForKeys.next();
// Object {value: 'Sophia', done: false}
```

On the flipside, use the `.values()` method to access the Map’s values, and then repeat the same process.

```js
let iteratorObjForValues = members.values();
iteratorObjForValues.next();
// Object {value: 75.68, done: false}
``` 


2. Using a for…of Loop:

Your second option for looping through a Map is with a for...of loop.

```js 
for (const member of members) {
  console.log(member);
}
 ['Evelyn', 75.68]
 ['Liam', 20.16]
 ['Sophia', 0]
 ['Marcus', 10.25]
 ``` 
However, when you use a for...of loop with a Map, you don’t exactly get back a key or a value. Instead, the key-value pair is split up into an array where the first element is the key and the second element is the value. If only there were a way to fix this?


3. Using a forEach Loop 

Your last option for looping through a Map is with the .forEach() method.
```js 
members.forEach((value, key) => console.log(key, value));
 /* 
 'Evelyn' 75.68
 'Liam' 20.16
 'Sophia' 0
 'Marcus' 10.25 
 */
 ```
Notice how with the help of an arrow function, the forEach loop reads fairly straightforward. For each value and key in members, log the value and key to the console.



### What is a WeakMap?
A WeakMap is just like a normal Map with a few key differences:

1. a WeakMap can only contain objects as keys,
2. WeakMapap is not iterable which means it can’t be looped and
3. a WeakMap does not have a .clear() method.

You can create a WeakMap just like you would a normal Map, except that you use the WeakMap constructor.

```js 
const book1 = { title: 'Pride and Prejudice', author: 'Jane Austen' };
const book2 = { title: 'The Catcher in the Rye', author: 'J.D. Salinger' };
const book3 = { title: 'Gulliver’s Travels', author: 'Jonathan Swift' };

const library = new WeakMap();
library.set(book1, true);
library.set(book2, false);
library.set(book3, true);

console.log(library);
// WeakMap {Object {title: 'Pride and Prejudice', author: 'Jane Austen'} => true, Object {title: 'The Catcher in the Rye', author: 'J.D. Salinger'} => false, Object {title: 'Gulliver’s Travels', author: 'Jonathan Swift'} => true}
``` 

…but if you try to add something other than an object as a key, you’ll get an error!

```js 
library.set('The Grapes of Wrath', false);
Uncaught TypeError: Invalid value used as weak map key(…)
``` 

This is expected behavior because WeakMap can only contain objects as keys. Again, similar to WeakSets, WeakMaps leverage garbage collection for easier use and maintainability.

##### Garbage Collection
In JavaScript, memory is allocated when new values are created and is "automatically" freed up when those values are no longer needed. This process of freeing up memory after it is no longer needed is what is known as garbage collection.

WeakMaps take advantage of this by exclusively working with objects as keys. If you set an object to null, then you’re essentially deleting the object. And when JavaScript’s garbage collector runs, the memory that object previously occupied will be freed up to be used later in your program.

```js
book1 = null;
console.log(library);
// WeakMap {Object {title: 'The Catcher in the Rye', author: 'J.D. Salinger'} => false, Object {title: 'Gulliver’s Travels', author: 'Jonathan Swift'} => true}
```

What makes this so useful is you don’t have to worry about deleting keys that are referencing deleted objects in your WeakMaps, JavaScript does it for you! When an object is deleted, the object key will also be deleted from the WeakMap when garbage collection runs. This makes WeakMaps useful in situations where you want an efficient, lightweight solution for creating groupings of objects with metadata.



### Promises 
A JavaScript Promise is created with the new Promise constructor function - `new Promise()`. A promise will let you start some work that will be done asynchronously and let you get back to your regular work. When you create the promise, you must give it the code that will be run asynchronously. You provide this code as the argument of the constructor function:

```js 
new Promise(function () {
    window.setTimeout(function createSundae(flavor = 'chocolate') {
        const sundae = {};
        // request ice cream
        // get cone
        // warm up ice cream scoop
        // scoop generous portion into cone!
    }, Math.random() * 2000);
});
```
This code creates a promise that will start in a few seconds after I make the request. Then there are a number of steps that need to be made in the createSundae function.

#### Indicated a Successful Request or a Failed Request
But once that's all done, how does JavaScript notify us that it's finished and ready for us to pick back up? It does that by passing two functions into our initial function. Typically we call these `resolve` and `reject`.

The function gets passed to the function we provide the Promise constructor - typically the word "resolve" is used to indicate that this function should be called when the request completes successfully. Notice the `resolve` on the first line:

```js
new Promise(function (resolve, reject) {
    window.setTimeout(function createSundae(flavor = 'chocolate') {
        const sundae = {};
        // request ice cream
        // get cone
        // warm up ice cream scoop
        // scoop generous portion into cone!
        resolve(sundae);
    }, Math.random() * 2000);
});
```
Now when the sundae has been successfully created, it calls the resolve method and passes it the data we want to return - in this case the data that's being returned is the completed sundae.

> So the resolve method is used to indicate that the request is complete and that it completed successfully.

If there is a problem with the request and it couldn't be completed, then we could use the second function that's passed to the function. Typically, this function is stored in an identifier called "reject" to indicate that this function should be used if the request fails for some reason. Check out the `reject` on the first line:

```js 
new Promise(function (resolve, reject) {
    window.setTimeout(function createSundae(flavor = 'chocolate') {
        const sundae = {};
        // request ice cream
        // get cone
        // warm up ice cream scoop
        // scoop generous portion into cone!
        if ( /* iceCreamConeIsEmpty(flavor) */ ) {
            reject(`Sorry, we're out of that flavor :-(`);
        }
        resolve(sundae);
    }, Math.random() * 2000);
});
``` 

So the reject method is used when the request could not be completed. Notice that even though the request fails, we can still return data - in this case we're just returning text that says we don't have the desired ice cream flavor.

A Promise constructor takes a function that will run and then, after some amount of time, will either complete successfully (using the resolve method) or unsuccessfully (using the reject method). When the outcome has been finalized (the request has either completed successfully or unsuccessfully), the promise is now fulfilled and will notify us so we can decide what to do with the response.

Promises Return Immediately
The first thing to understand is that a Promise will immediately return an object.

```js 
const myPromiseObj = new Promise(function (resolve, reject) {
    // sundae creation code
});
``` 

That object has a `.then()` method on it that we can use to have it notify us if the request we made in the promise was either successful or failed. The `.then()` method takes two functions:

the function to run if the request completed successfully
the function to run if the request failed to complete
```js 
mySundae.then(function(sundae) {
    console.log(`Time to eat my delicious ${sundae}`);
}, function(msg) {
    console.log(msg);
    self.goCry(); // not a real method
});
``` 

As you can see, the first function that's passed to `.then()` will be called and passed the data that the Promise's resolve function used. In this case, the function would receive the sundae object. The second function will be called and passed the data that the Promise's reject function was called with. In this case, the function receives the error message "Sorry, we're out of that flavor :-(" that the reject function was called with in the Promise code above.




### Proxies
To create a proxy object, we use the Proxy constructor - `new Proxy();``. The proxy constructor takes two items:

- the object that it will be the proxy for
- an object containing the list of methods it will handle for the proxied object
The second object is called the handler.

#### A Pass Through Proxy
The simplest way to create a proxy is to provide an object and then an empty handler object.

```js 
var richard = {status: 'looking for work'};
var agent = new Proxy(richard, {});

agent.status; // returns 'looking for work'
``` 

The above doesn't actually do anything special with the proxy - it just passes the request directly to the source object! If we want the proxy object to actually intercept the request, that's what the handler object is for!



The key to making Proxies useful is the handler object that's passed as the second object to the Proxy constructor. The handler object is made up of a methods that will be used for property access. Let's look at the get:

#### Get Trap
The `get` trap is used to "intercept" calls to properties:

```js
const richard = {status: 'looking for work'};
const handler = {
    get(target, propName) {
        console.log(target); // the `richard` object, not `handler` and not `agent`
        console.log(propName); // the name of the property the proxy (`agent` in this case) is checking
    }
};
const agent = new Proxy(richard, handler);
agent.status; // logs out the richard object (not the agent object!) and the name of the property being accessed (`status`)
``` 

In the code above, the handler object has a get method (called a "trap" since it's being used in a Proxy). When the code agent.status; is run on the last line, because the get trap exists, it "intercepts" the call to get the status property and runs the get trap function. This will log out the target object of the proxy (the richard object) and then logs out the name of the property being requested (the status property). And that's all it does! It doesn't actually log out the property! This is important - if a trap is used, you need to make sure you provide all the functionality for that specific trap.


#### Accessing the Target object from inside the proxy
If we wanted to actually provide the real result, we would need to return the property on the target object:

```js 
const richard = {status: 'looking for work'};
const handler = {
    get(target, propName) {
        console.log(target);
        console.log(propName);
        return target[propName];
    }
};
const agent = new Proxy(richard, handler);
agent.status; // (1)logs the richard object, (2)logs the property being accessed, (3)returns the text in richard.status
```

Notice we added the return target[propName]; as the last line of the get trap. This will access the property on the target object and will return it.



#### Having the proxy return info, directly
Alternatively, we could use the proxy to provide direct feedback:

const richard = {status: 'looking for work'};
const handler = {
    get(target, propName) {
        return `He's following many leads, so you should offer a contract as soon as possible!`;
    }
};
const agent = new Proxy(richard, handler);
agent.status; // returns the text `He's following many leads, so you should offer a contract as soon as possible!`
With this code, the Proxy doesn't even check the target object, it just directly responds to the calling code.

So the get trap will take over whenever any property on the proxy is accessed. If we want to intercept calls to change properties, then the set trap needs to be used!

The set trap is used for intercepting code that will change a property. The set trap receives:
- the object it proxies
- the property that is being set
- the new value for the proxy 

```js 
const richard = {status: 'looking for work'};
const handler = {
    set(target, propName, value) {
        if (propName === 'payRate') { // if the pay is being set, take 15% as commission
            value = value * 0.85;
        }
        target[propName] = value;
    }
};

const agent = new Proxy(richard, handler);
agent.payRate = 1000; // set the actor's pay to $1,000
agent.payRate; // $850 the actor's actual pay
``` 

In the code above, notice that the set trap checks to see if the payRate property is being set. If it is, then the proxy (the agent) takes 15 percent off the top for her own commission! Then, when the actor's pay is set to one thousand dollars, since the payRate property was used, the code took 15% off the top and set the actual payRate property to 850;


#### Other Traps
So we've looked at the get and set traps (which are probably the ones you'll use most often), but there are actually a total of 13 different traps that can be used in a handler!

1. the get trap - lets the proxy handle calls to property access
2. the set trap - lets the proxy handle setting the property to a new value
3. the apply trap - lets the proxy handle being invoked (the object being proxied is a function)
4. the has trap - lets the proxy handle the using in operator
5. the deleteProperty trap - lets the proxy handle if a property is deleted
6. the ownKeys trap - lets the proxy handle when all keys are requested
7. the construct trap - lets the proxy handle when the proxy is used with the new keyword as a constructor
8. the defineProperty trap - lets the proxy handle when defineProperty is used to create a new property on the object
9. the getOwnPropertyDescriptor trap - lets the proxy handle getting the property's descriptors
10. the preventExtenions trap - lets the proxy handle calls to Object.preventExtensions() on the proxy object
11. the isExtensible trap - lets the proxy handle calls to Object.isExtensible on the proxy object
12. the getPrototypeOf trap - lets the proxy handle calls to Object.getPrototypeOf on the proxy object
13. the setPrototypeOf trap - lets the proxy handle calls to Object.setPrototypeOf on the proxy object

As you can see, there are a lot of traps that let the proxy manage how it handles calls back and forth to the proxied object.



### Proxies vs. ES5 Getter/Setter
Initially, it can be a bit unclear as to why proxies are all that beneficial when there are already getter and setter methods provided in ES5. With ES5's getter and setter methods, you need to know before hand the properties that are going to be get/set:

```js
var obj = {
    _age: 5,
    _height: 4,
    get age() {
        console.log(`getting the "age" property`);
        console.log(this._age);
    },
    get height() {
        console.log(`getting the "height" property`);
        console.log(this._height);
    }
};
``` 
With the code above, notice that we have to set get age() and get height() when initializing the object. So when we call the code below, we'll get the following results:
```js 
obj.age; // logs 'getting the "age" property' & 5
obj.height; // logs 'getting the "height" property' & 4
```
But look what happens when we now add a new property to the object:
```js
obj.weight = 120; // set a new property on the object
obj.weight; // logs just 120
``` 
Notice that a getting the "weight" property message wasn't displayed like the age and height properties produced.

With ES6 Proxies, we do not need to know the properties beforehand:
```js
const proxyObj = new Proxy({age: 5, height: 4}, {
    get(targetObj, property) {
        console.log(`getting the ${property} property`);
        console.log(targetObj[property]);
    }
});

proxyObj.age; // logs 'getting the age property' & 5
proxyObj.height; // logs 'getting the height property' & 4
``` 

All well and good, just like the ES5 code, but look what happens when we add a new property:

```js 
proxyObj.weight = 120; // set a new property on the object
proxyObj.weight; // logs 'getting the weight property' & 120
``` 

See that?!? A weight property was added to the proxy object, and when it was later retrieved, it displayed a log message!

So some functionality of proxy objects may seem similar to existing ES5 getter/setter methods. But with proxies, you do not need to initialize the object with getters/setters for each property when the object is initialized.



A proxy object sits between a real object and the calling code. The calling code interacts with the proxy instead of the real object. To create a proxy:

- use the new Proxy() constructor
    - pass the object being proxied as the first item
    - the second object is a handler object
- the handler object is made up of 1 of 13 different "traps"
- a trap is a function that will intercept calls to properties let you run code
- if a trap is not defined, the default behavior is sent to the target object 

Proxies are a powerful new way to create and manage the interactions between objects.




### Generators
Whenever a function is invoked, the JavaScript engine starts at the top of the function and runs every line of code until it gets to the bottom. There's no way to stop the execution of the function in the middle and pick up again at some later point. 

```js
function getEmployee() {
    console.log('the function has started');

    const names = ['Amanda', 'Diego', 'Farrin', 'James', 'Kagure', 'Kavita', 'Orit', 'Richard'];

    for (const name of names) {
        console.log(name);
    }

    console.log('the function has ended');
}

getEmployee();
``` 
Running the code above produces the following output on the console:

the function has started
Amanda
Diego
Farrin
James
Kagure
Kavita
Orit
Richard
the function has ended 

But what if you want to print out the first 3 employee names then stop for a bit, then, at some later point, you want to continue where you left off and print out more employee names. With a regular function, you can't do this since there's no way to "pause" a function in the middle of its execution.



#### Pausable Functions
If we do want to be able to pause a function mid-execution, then we'll need a new type of function available to us in ES6 - generator functions! Let's look at one:

```js 
function* getEmployee() {
    console.log('the function has started');

    const names = ['Amanda', 'Diego', 'Farrin', 'James', 'Kagure', 'Kavita', 'Orit', 'Richard'];

    for (const name of names) {
        console.log( name );
    }

    console.log('the function has ended');
}
```

Notice the asterisk (i.e. *) right after the function keyword? That asterisk indicates that this function is actually a generator!

Now check out what happens when we try running this function:
```js
getEmployee();

// this is the response I get in Chrome:
getEmployee {[[GeneratorStatus]]: "suspended", [[GeneratorReceiver]]: Window}
``` 

…umm, what? Where's the "the function has started" text from the top of the function? And why didn't we get any names printed to the console? Those are good questions, but first, a quiz.



#### Generators & Iterators
When a generator is invoked, it doesn't actually run any of the code inside the function. Instead, it creates and returns an iterator. This iterator can then be used to execute the actual generator's inner code.
```js
const generatorIterator = getEmployee();
generatorIterator.next();
``` 

Produces the code we expect:
the function has started
Amanda
Diego
Farrin
James
Kagure
Kavita
Orit
Richard
the function has ended 

Now if you tried the code out for yourself, the first time the iterator's .next() method was called it ran all of the code inside the generator. Did you notice anything? The code never paused! So how do we get this magical, pausing functionality?

#### The Yield Keyword 
The yield keyword is new and was introduced with ES6. It can only be used inside generator functions. yield is what causes the generator to pause. Let's add yield to our generator and give it a try:
```js
function* getEmployee() {
    console.log('the function has started');

    const names = ['Amanda', 'Diego', 'Farrin', 'James', 'Kagure', 'Kavita', 'Orit', 'Richard'];

    for (const name of names) {
        console.log(name);
        yield;
    }

    console.log('the function has ended');
}
``` 

Notice that there's now a `yield` inside the `for...of` loop. If we invoke the generator (which produces an iterator) and then call `.next()`, we'll get the following output:
```js
const generatorIterator = getEmployee();
generatorIterator.next();
```
Logs the following to the console:
the function has started
Amanda 

It's paused! But to really be sure, let's check out the next iteration:
```js
generatorIterator.next();
``` 

Logs the following to the console:
Diego 

So it remembered exactly where we left off! It took the next item in the array (Diego), logged it, and then hit the yield again, so it paused again.


Now pausing is all well and good, but what if we could send data from the generator back to the "outside" world? We can do this with yield.


#### Yielding Data to the "Outside" World
Instead of logging the names to the console and then pausing, let's have the code "return" the name and then pause.

```js 
function* getEmployee() {
    console.log('the function has started');

    const names = ['Amanda', 'Diego', 'Farrin', 'James', 'Kagure', 'Kavita', 'Orit', 'Richard'];

    for (const name of names) {
        yield name;
    }

    console.log('the function has ended');
}
```

Notice that now instead of console.log(name); that it's been switched to yield name;. With this change, when the generator is run, it will "yield" the name back out to the function and then pause its execution. Let's see this in action:

```js
const generatorIterator = getEmployee();
let result = generatorIterator.next();
result.value // is "Amanda"

generatorIterator.next().value // is "Diego"
generatorIterator.next().value // is "Farrin"
``` 


#### Sending Data into/out of a Generator
So we can get data out of a generator by using the yield keyword. We can also send data back into the generator, too. We do this using the .next() method:

```js 
function* displayResponse() {
    const response = yield;
    console.log(`Your response is "${response}"!`);
}

const iterator = displayResponse();

iterator.next(); // starts running the generator function
iterator.next('Hello Udacity Student'); // send data into the generator
// the line above logs to the console: Your response is "Hello Udacity Student"!
``` 

Calling .next() with data (i.e. .next('Richard')) will send data into the generator function where it last left off. It will "replace" the yield keyword with the data that you provided.

So the yield keyword is used to pause a generator and used to send data outside of the generator, and then the .next() method is used to pass data into the generator. Here's an example that makes use of both of these to cycle through a list of names one at a time:

```js 
function* getEmployee() {
    const names = ['Amanda', 'Diego', 'Farrin', 'James', 'Kagure', 'Kavita', 'Orit', 'Richard'];
    const facts = [];

    for (const name of names) {
        // yield *out* each name AND store the returned data into the facts array
        facts.push(yield name); 
    }

    return facts;
}

const generatorIterator = getEmployee();

// get the first name out of the generator
let name = generatorIterator.next().value;

// pass data in *and* get the next name
name = generatorIterator.next(`${name} is cool!`).value; 

// pass data in *and* get the next name
name = generatorIterator.next(`${name} is awesome!`).value; 

// pass data in *and* get the next name
name = generatorIterator.next(`${name} is stupendous!`).value; 

// you get the idea
name = generatorIterator.next(`${name} is rad!`).value; 
name = generatorIterator.next(`${name} is impressive!`).value;
name = generatorIterator.next(`${name} is stunning!`).value;
name = generatorIterator.next(`${name} is awe-inspiring!`).value;

// pass the last data in, generator ends and returns the array
const positions = generatorIterator.next(`${name} is magnificent!`).value; 

// displays each name with description on its own line
positions.join('\n'); 
```


Generators are a powerful new kind of function that is able to pause its execution while also maintaining its own state. Generators are great for iterating over a list of items one at a time so you can handle each item on its own before moving on to the next one. You can also use generators to handle nested callbacks. For example, let's say that an app needs to get a list of all repositories and the number of times they've been starred. Well, before you can get the number of stars for each repository, you'd need to get the user's information. Then after retrieving the user's profile the code can then take that information to find all of the repositories.

Generators will also be used heavily in upcoming additions to the JavaScript language. One upcoming feature that will make use of them is async functions.

## Buffer

Create an Array of n length filled with '0', where n is the length of the array.

new Uint8Array(n)
new Uint16Array(n)
new Uint32Array(n)

```js
let x = new Uint8Array(10);
console.log(x)
// Uint8Array(10) [
  0, 0, 0, 0, 0,
  0, 0, 0, 0, 0
]
```

```js
Buffer.from(new Uint8Array(5)).toString() // '\x00\x00\x00\x00\x00'

Buffer.alloc(5).toString() // '\x00\x00\x00\x00\x00'
```

### Converting Buffer to Array

- using `.toJSON().data` method


```js
const buffer = Buffer.from("Hello, World!")
const bytesArray = buffer.toJSON().data

console.log(byteArray)
// [ 72, 101, 108, 108, 111, 44,  32,  87, 111, 114, 108, 100, 33 ]

```

- You can also use spread operator

```js
const buffer = Buffer.from("Hello, World!")
const bytesArray = [...buffer]
console.log(bytesArray)
// [ 72, 101, 108, 108, 111, 44,  32,  87, 111, 114, 108, 100, 33 ]
```

Convert charCode to string

```js
const buffer = Buffer.from("Hello, World!")
const bytesArray = [...buffer.toString()]

console.log(bytesArray)
// [ 'H', 'e', 'l', 'l', 'o', ',', ' ', 'W', 'o', 'r', 'l', 'd', '!' ]
```

### chatCodeAt() vs String.fromCodePoint()

```js
let x = "Book"

console.log(x[0].charCodeAt())
// 66
console.log(x.charCodeAt(0))
// 66
console.log("B".charCodeAt())
// 66
```

String.fromCodePoint() - Converts a char code

```js
String.fromCodePoint(65) // A
String.fromCodePoint(66) // B
```