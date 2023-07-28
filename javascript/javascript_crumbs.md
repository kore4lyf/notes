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

**NB: **
The two methods are NOT equal. These are the differences:

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


### Numeric Sort
By default, the sort() function sorts values as strings.

> However, if numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".

Because of this, the sort() method will produce incorrect result when sorting numbers.

You can fix this by providing a compare function:

Example
```js
var points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a - b});
```

Use the same trick to sort an array descending:

Example
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
Example
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





## JavaScript HTML DOM Collections




### The HTMLCollection Object
The getElementsByTagName() method returns an HTMLCollection object.

An HTMLCollection object is an array-like list (collection) of HTML elements.

The following code selects all <p> elements in a document:

Example
```js
var x = document.getElementsByTagName("p");
```
The elements in the collection can be accessed by an index number.

To access the second <p> element you can write:

```js
y = x[1];
```




### HTML HTMLCollection Length
The length property defines the number of elements in an HTMLCollection:

Example
```js
var myCollection = document.getElementsByTagName("p");
document.getElementById("demo").innerHTML = myCollection.length;
```

Change the background color of all <p> elements:

```js
var myCollection = document.getElementsByTagName("p");
var i;
for (i = 0; i < myCollection.length; i++) {
  myCollection[i].style.backgroundColor = "red";
}
```

### An HTMLCollection is NOT an array!

> An HTMLCollection may look like an array, but it is not.

You can loop through the list and refer to the elements with a number (just like an array).

However, you cannot use array methods like valueOf(), pop(), push(), or join() on an HTMLCollection.




### The HTML DOM NodeList Object
A NodeList object is a list (collection) of nodes extracted from a document.

A NodeList object is almost the same as an HTMLCollection object.

Some (older) browsers return a NodeList object instead of an HTMLCollection for methods like getElementsByClassName().

All browsers return a NodeList object for the property childNodes. 

Most browsers return a NodeList object for the method querySelectorAll().


The following code selects all <p> nodes in a document:

Example
```js
var myNodeList = document.querySelectorAll("p");
```

The elements in the NodeList can be accessed by an index number.
To access the second <p> node you can write:
```js
y = myNodeList[1];
```




### A node list is not an array!

A node list may look like an array, but it is not.

You can loop through the node list and refer to its nodes like an array.

However, you cannot use Array Methods, like valueOf(), push(), pop(), or join() on a node list.



## The Difference Between an HTMLCollection and a NodeList
- An HTMLCollection (previous chapter) is a collection of HTML elements.

- A NodeList is a collection of document nodes.

- A NodeList and an HTML collection is very much the same thing.

- Both an HTMLCollection object and a NodeList object is an array-like list (collection) of objects.

- Both have a length property defining the number of items in the list (collection).

- Both provide an index (0, 1, 2, 3, 4, ...) to access each item like an array.

- HTMLCollection items can be accessed by their name, id, or index number.

- NodeList items can only be accessed by their index number.

- Only the NodeList object can contain attribute nodes and text nodes.





## JavaScript Window - The Browser Object Model
The Browser Object Model (BOM) allows JavaScript to "talk to" the browser.


### The Window Object
The window object is supported by all browsers. It represents the browser's window.
```js
window.document.getElementById("header");
```
is the same as:

```js
document.getElementById("header");
```




### Window Size
Two properties can be used to determine the size of the browser window.

Both properties return the sizes in pixels:

- window.innerHeight - the inner height of the browser window (in pixels)
- window.innerWidth - the inner width of the browser window (in pixels)

For Internet Explorer 8, 7, 6, 5:

- document.documentElement.clientHeight
- document.documentElement.clientWidth
or
- document.body.clientHeight
- document.body.clientWidth

Example
```js
var w = window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;

var h = window.innerHeight
|| document.documentElement.clientHeight
|| document.body.clientHeight;
```




### Other Window Methods
Some other methods:
- **window.open()** - open a new window
- **window.close()** - close the current window
- **window.moveTo()** - move the current window
- **window.resizeTo()** - resize the current window




## JavaScript Window Screen
The window.screen object contains information about the user's screen.

Properties:

- **screen.width** - returns the width of the visitor's screen in pixels.
- **screen.height** - returns the height of the visitor's screen in pixels.
- **screen.availWidth** - returns the width of the visitor's screen, in pixels, minus interface features like the Windows Taskbar.
- **screen.availHeight** - returns the height of the visitor's screen, in pixels, minus interface features like the Windows Taskbar.
- **screen.colorDepth**
- **screen.pixelDepth** - returns the pixel depth of the screen.


Example
Display the available height of the screen in pixels:
```js
document.getElementById("demo").innerHTML =
"Available Screen Height: " + screen.availHeight;
```




### Window Screen Color Depth
The screen.colorDepth property returns the number of bits used to display one color.

All modern computers use 24 bit or 32 bit hardware for color resolution:

24 bits =      16,777,216 different "True Colors"
32 bits = 4,294,967,296 different "Deep Colors"
Older computers used 16 bits: 65,536 different "High Colors" resolution.

Very old computers, and old cell phones used 8 bits: 256 different "VGA colors".





## JavaScript Window Location
The window.location object can be used to get the current page address (URL) and to redirect the browser to a new page.



### Window Location
The window.location object can be written without the window prefix.

Some examples:
- **window.location.href** - returns the href (URL) of the current page
- **window.location.hostname** - returns the domain name of the web host
- **window.location.pathname** - returns the path and filename of the current page
- **window.location.protocol** - returns the web protocol used (http: or https:)
- **window.location.port** property returns the number of the internet host port (of the current page).
- **window.location.assign()** - loads a new document

Example
Load a new document:
```js
function newDoc() {
  window.location.assign("https://www.w3schools.com")
}
```

Display the web protocol:
```js
document.getElementById("demo").innerHTML =
"Page protocol is " + window.location.protocol;
```





## JavaScript Window History
The window.history object contains the browsers history.

### Window History
The window.history object can be written without the window prefix.

To protect the privacy of the users, there are limitations to how JavaScript can access this object.

Some methods:

- **history.back()** - same as clicking back in the browser
- **history.forward()** - same as clicking forward in the browser




### Window History Back
The `window.history.back()` method loads the previous URL in the history list.

This is the same as clicking the Back button in the browser.





## JavaScript Window Navigator
The window.navigator object contains information about the visitor's browser.

Window Navigator
The window.navigator object can be written without the window prefix.

Some examples:
- navigator.appName (Strange enough, "Netscape" is the application name for both IE11, Chrome, Firefox, and Safari.)
  
- navigator.appCodeName ("Mozilla" is the application code name for both Chrome, Firefox, IE, Safari, and Opera.)
  
- navigator.platform




### Browser Cookies
The cookieEnabled property returns true if cookies are enabled, otherwise false:

Example
```html
<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML =
"cookiesEnabled is " + navigator.cookieEnabled;
</script>
```




### Browser Application Name
The appName property returns the application name of the browser:

Example
```html
<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML =
"navigator.appName is " + navigator.appName;
</script>
```

> Strange enough, "Netscape" is the application name for both IE11, Chrome, Firefox, and Safari.




### Browser Application Code Name
The appCodeName property returns the application code name of the browser:

Example
```html
<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML =
"navigator.appCodeName is " + navigator.appCodeName;
</script>
```
"Mozilla" is the application code name for both Chrome, Firefox, IE, Safari, and Opera.




### The Browser Engine
The product property returns the product name of the browser engine:

Example
```html
<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML =
"navigator.product is " + navigator.product;
</script>
```
> Do not rely on this. Most browsers returns "Gecko" as product name !!




### The Browser Version
The appVersion property returns version information about the browser:

Example
```html
<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML = navigator.appVersion;
</script>
```
5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36




### The Browser Agent
The userAgent property returns the user-agent header sent by the browser to the server:

Example
<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML = navigator.userAgent;
</script>
Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36


Warning !!!
The information from the navigator object can often be misleading, and should not be used to detect browser versions because:

Different browsers can use the same name
The navigator data can be changed by the browser owner
Some browsers misidentify themselves to bypass site tests
Browsers cannot report new operating systems, released later than the browser
The Browser Platform
The platform property returns the browser platform (operating system):

Example
```js
<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML = navigator.platform;
</script>
```
Win32




### The Browser Language
The language property returns the browser's language:

Example
```js
<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML = navigator.language;
</script>
```
en-US




### Is The Browser Online?
The onLine property returns true if the browser is online:

Example
```js
<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML = navigator.onLine;
</script>
```
true


Is Java Enabled?
The javaEnabled() method returns true if Java is enabled:

Example
```js
<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML = navigator.javaEnabled();
</script>
```
false





## JavaScript Popup Boxes
JavaScript has three kind of popup boxes: Alert box, Confirm box, and Prompt box.




### Alert Box
An alert box is often used if you want to make sure information comes through to the user.

When an alert box pops up, the user will have to click "OK" to proceed.

Syntax
```js
window.alert("sometext");
```

The window.alert() method can be written without the window prefix.

Example
```js
alert("I am an alert box!");
```




### Confirm Box
A confirm box is often used if you want the user to verify or accept something.

When a confirm box pops up, the user will have to click either "OK" or "Cancel" to proceed.

If the user clicks "OK", the box returns true. If the user clicks "Cancel", the box returns false.

Syntax
```js
window.confirm("sometext");
```
The window.confirm() method can be written without the window prefix.

Example
```js
if (confirm("Press a button!")) {
  txt = "You pressed OK!";
} else {
  txt = "You pressed Cancel!";
}
```




### Prompt Box
A prompt box is often used if you want the user to input a value before entering a page.

When a prompt box pops up, the user will have to click either "OK" or "Cancel" to proceed after entering an input value.

If the user clicks "OK" the box returns the input value. If the user clicks "Cancel" the box returns null.

Syntax
```js
window.prompt("sometext","defaultText");
```
The window.prompt() method can be written without the window prefix.

Example
```js
var person = prompt("Please enter your name", "Harry Potter");

if (person == null || person == "") {
  txt = "User cancelled the prompt.";
} else {
  txt = "Hello " + person + "! How are you today?";
}
```




### Line Breaks
To display line breaks inside a popup box, use a back-slash followed by the character n.

Example
```js
alert("Hello\nHow are you?");
```




## JavaScript Timing Events

### Timing Events
The window object allows execution of code at specified time intervals.

These time intervals are called timing events.

The two key methods to use with JavaScript are:

- setTimeout(function, milliseconds)
Executes a function, after waiting a specified number of milliseconds.

- setInterval(function, milliseconds)
Same as setTimeout(), but repeats the execution of the function continuously.

> The setTimeout() and setInterval() are both methods of the HTML DOM Window object.




### The setTimeout() Method
```js
window.setTimeout(function, milliseconds);
```
The `window.setTimeout()` method can be written without the window prefix.

The first parameter is a function to be executed.

The second parameter indicates the number of milliseconds before execution.




### How to Stop the Execution?
The clearTimeout() method stops the execution of the function specified in setTimeout().

```js
window.clearTimeout(timeoutVariable)
```
The `window.clearTimeout()` method can be written without the window prefix.

The `clearTimeout()` method uses the variable returned from setTimeout():

```js
myVar = setTimeout(function, milliseconds);
clearTimeout(myVar);
```
If the function has not already been executed, you can stop the execution by calling the `clearTimeout()` method:




### The setInterval() Method
The setInterval() method repeats a given function at every given time-interval.


```js
window.setInterval(function, milliseconds);
```
The `window.setInterval()` method can be written without the window prefix.

The first parameter is the function to be executed.

The second parameter indicates the length of the time-interval between each execution.

This example executes a function called "myTimer" once every second (like a digital watch).

Example
```js
Display the current time:

var myVar = setInterval(myTimer, 1000);

function myTimer() {
  var d = new Date();
  document.getElementById("demo").innerHTML = d.toLocaleTimeString();
}
```




### How to Stop the Execution?
The `clearInterval()` method stops the executions of the function specified in the `setInterval()` method.


```js
window.clearInterval(timerVariable)
```

The `window.clearInterval()` method can be written without the window prefix.

The `clearInterval()` method uses the variable returned from `setInterval()`:

```js
myVar = setInterval(function, milliseconds);
clearInterval(myVar);
```





## JavaScript Cookies
Cookies let you store user information in web pages.
What are Cookies?
Cookies are data, stored in small text files, on your computer.


Cookies are saved in name-value pairs like:
```
username = John Doe
```

When a browser requests a web page from a server, cookies belonging to the page are added to the request. This way the server gets the necessary data to "remember" information about users.


None of the examples below will work if your browser has local cookies support turned off.




### Create a Cookie with JavaScript
JavaScript can create, read, and delete cookies with the document.cookie property.

With JavaScript, a cookie can be created like this:

```js
document.cookie = "username=John Doe";
```
You can also add an expiry date (in UTC time). By default, the cookie is deleted when the browser is closed:

```js
document.cookie = "username=John Doe; expires=Thu, 18 Dec 2013 12:00:00 UTC";
```
With a path parameter, you can tell the browser what path the cookie belongs to. By default, the cookie belongs to the current page.

```js
document.cookie = "username=John Doe; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/";
```




### Read a Cookie with JavaScript
With JavaScript, cookies can be read like this:

```js
var x = document.cookie;
document.cookie will return all cookies in one string much like: cookie1=value; cookie2=value; cookie3=value;
```

Change a Cookie with JavaScript
With JavaScript, you can change a cookie the same way as you create it:

```js
document.cookie = "username=John Smith; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/";
```
The old cookie is overwritten.

Delete a Cookie with JavaScript
Deleting a cookie is very simple.

You don't have to specify a cookie value when you delete a cookie.

Just set the expires parameter to a passed date:

```js
document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
```
You should define the cookie path to ensure that you delete the right cookie.

Some browsers will not let you delete a cookie if you don't specify the path.




### A Function to Set a Cookie
First, we create a function that stores the name of the visitor in a cookie variable:

Example
```js
function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
```

Example explained:

The parameters of the function above are the name of the cookie (cname), the value of the cookie (cvalue), and the number of days until the cookie should expire (exdays).

The function sets a cookie by adding together the cookiename, the cookie value, and the expires string.

A Function to Get a Cookie
Then, we create a function that returns the value of a specified cookie:

Example
```js
function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
```

Function explained:

Take the cookiename as parameter (cname).

Create a variable (name) with the text to search for (cname + "=").

Decode the cookie string, to handle cookies with special characters, e.g. '$'

Split document.cookie on semicolons into an array called ca (ca = decodedCookie.split(';')).

Loop through the ca array (i = 0; i < ca.length; i++), and read out each value c = ca[i]).

If the cookie is found (c.indexOf(name) == 0), return the value of the cookie (c.substring(name.length, c.length).

If the cookie is not found, return "".




### A Function to Check a Cookie
Last, we create the function that checks if a cookie is set.

If the cookie is set it will display a greeting.

If the cookie is not set, it will display a prompt box, asking for the name of the user, and stores the username cookie for 365 days, by calling the setCookie function:

Example
```js
function checkCookie() {
  var username = getCookie("username");
  if (username != "") {
   alert("Welcome again " + username);
  } else {
    username = prompt("Please enter your name:", "");
    if (username != "" && username != null) {
      setCookie("username", username, 365);
    }
  }
}
```
All Together Now
Example
```js
function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie() {
  var user = getCookie("username");
  if (user != "") {
    alert("Welcome again " + user);
  } else {
    user = prompt("Please enter your name:", "");
    if (user != "" && user != null) {
      setCookie("username", user, 365);
    }
  }
}
```
The example above runs the checkCookie() function when the page loads.





## window.console



### Console Object
The Console object provides access to the browser's debugging console.

| Method |	Description |
| :--- | :--- |
| assert() |	Writes an error message to the console if the assertion is false |
| clear() |	Clears the console |
| count() |	Logs the number of times that this particular call to count() has been called |
| error() |	Outputs an error message to the console |
| group() |	Creates a new inline group in the console. This indents following console messages by an additional level, until console.groupEnd() is called |
| groupCollapsed() |	Creates a new inline group in the console. However, the new group is created collapsed. The user will need to use the disclosure button to expand it |
| groupEnd() |	Exits the current inline group in the console |
| info() |	Outputs an informational message to the console |
| log() |	Outputs a message to the console |
| table() |	Displays tabular data as a table |
| time() |	Starts a timer (can track how long an operation takes) |
| timeEnd() |	Stops a timer that was previously started by console.time() |
| trace() |	Outputs a stack trace to the console |
| warn() |	Outputs a warning message to the console |



### console.assert() Method
The console.assert() method writes a message to the console, but only if an expression evaluates to false.
```js
console.assert(document.getElementById("demo"), "You have no element with ID 'demo'");
```

**Syntax**
```
console.assert(expression, message)
```
- expression - A Boolean expression
- message -	String or Object



### console.clear() Method
The console.clear() method clears the console.
It will also write a message in a browser's console: "Console was cleared".

**Syntax**
```js
console.clear();
```



### console.count() Method
Write to the console the number of time the console.count() is called inside the loop:

```js
for (i = 0; i < 10; i++) {
  console.count();
}
```

**Syntax**
```
console.count(label)
```

- label -	String
Optional. If present, the method counts the number of times console.count() has been called with this label. If not present, the label "default" will be added.



### console.error() Method
Write an error to the console (has a light red background on the browser):
```js
console.error("You made a mistake");
```


### console.group() Method
Create a group of messages in the console:
```js
console.log("Hello world!");
console.group();
console.log("Hello again, this time inside a group!");
```

> Tip: Use the `console.groupEnd()` method to end the group.

> Tip: Use the `console.groupCollapsed()` method to hide the message group (collapsed by default).


**Syntax**
```
console.group(label)
```
- label	- String -	Optional. A label for the group



### console.info() Method
Write a message to the console:
```js
console.info("Hello world!");
```

**Syntax**
```
console.info(message)
```



### console.table() Method
Writes a table in the console. The first parameter is required, and must be either an object, or an array, containing data to fill the table.
```js
console.table(["Audi", "Volvo", "Ford"]);
```

**Syntax**
```
console.table(tabledata, tablecolumns)
```

- **tabledata**	- Object or Array -	Required. The data to fill the table with.

- **tablecolumns** -	Array	Optional. - An array containing the names of the columns to be included in the table.

**Example**
Using an object as the first parameter:
```js
console.table({ firstname : "John", lastname : "Doe" });
```

**Example**
Using an array of objects:
```js
var car1 = { name : "Audi", model : "A4" }
var car2 = { name : "Volvo", model : "XC90" }
var car3 = { name : "Ford", model : "Fusion" }

console.table([car1, car2, car3]);
```

**Example**
Specifying that we only want to include the "model" column in the table:

var car1 = { name : "Audi", model : "A4" }
var car2 = { name : "Volvo", model : "XC90" }
var car3 = { name : "Ford", model : "Fusion" }

console.table([car1, car2, car3], ["model"]);


### console.time() Method
The console.time() method starts a timer in the console view.

This method allows you to time certain operations in your code for testing purposes.

Use the console.timeEnd() method to end the timer and display the result in the console.view.

Use the label parameter to name the timer, then you are able to have many timers on the same page.

How long does it take to perform a for-loop 100.000 times:
```js
console.time();
for (i = 0; i < 100000; i++) {
  // some code
}
console.timeEnd();
```

- label	- String -	Optional. Use the label parameter to give the timer a name

Using the label parameter:
```js
console.time("test1");
for (i = 0; i < 100000; i++) {
  // some code
}
console.timeEnd("test1");
```


### console.trace() Method
Trace of how a function was called.
Show the trace of how the code ended up here:

```html
function myFunction() {
  myOtherFunction();
}

function myOtherFunction() {
  console.trace();
}
```

The console.trace() method displays a trace that show how the code ended up at a certain point.

**Syntax**
```
console.trace(label)
```



### console.warn() Method

Write a warning to the console:
```js
console.warn("This is a warning!");
```

**Syntax**
```js
console.warn(message)
```




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


## NodeList and HTMLCollection 
> JavaScript NodeList is an interface that defines a read-only list of Node objects. 

When you use methods like **getElementsByName** or **querySelectorAll**, to access elements in JavaScript, what is returned is a **NodeList**. 

A NodeList is a collection of HTML DOM nodes representing the HTML elements that met the criteria. At first glance, a NodeList looks like an array, but it is not. 

Using the Nodelist.forEach method and for loop: 
```js
const options = document.querySelectorAll('li');

options.forEach(option => {
  option.addEventListener('click', () =>{
    console.log(option.textContent);
    if(option.textContent === "Sorted"){
      option.style.color = "green";
    }else{
      option.style.color = "red";
      for(let i = 0; i <= options.length; i++){
        if(options[i].textContent === "Sorted"){
           options[i].style.color = "green";
        }
      }
    }
  })
})
```

Another approach would be to convert the NodeList into an array uusing`array.from`. If you want to select an element at a particular position, then you can use the `NodeList.item` method.

The item(index) method will let you obtain a node at a specific position in the list.

This is its syntax:
```js
nodeItem = nodeList.item(index)
```
> However, the method does not throw exceptions, provided you specify arguments. 

If the index is out of range, this method will return the null value, and it will throw a TypeError if you do not provide an argument.

Alternate JS NodeList Syntax
Syntax:
```js
nodeItem = nodeList[index]
```

it is easier to think of a NodeList object as a read-only JS array. That’s why some developers may use the notation Node[] (a Node array) rather than NodeList. The best example here is the `Element.getElementsByTagName()` method that is listed as returning a Node[] instead of a NodeList object.



#### NB
- `document.getElementsByClassName()` - returns a NodeList Object.
- `document.querySelectorAll()` - returns a NodeList Object.
- `document.getElementsByTagName()` - returns a NodeList Object.
- All browsers will return a NodeList object for the property `childNodes`.
- `querySelectorAll()` - returns a node list Object.

> A NodeList is not an Array; nevertheless, you can iterate over it with the JavaScript NodeList foreach() method. Similarly, you can convert it to a real array using the array.from(). Keep in mind, however, that older browsers do not have the NodeList.forEach() and array.from() methods, making it impossible to implement.

### NodeList Methods 
1. `NodeList.item()`: evaluates an item in the list by its index. If the index is out of bounds, it returns a null. Alternatively, you can access the NodeList via nodeList[i], which returns undefined when [i] is out-of-bounds. This method is useful for non-JavaScript DOM implementations.
2. `NodeList.entries()`:  this method returns an iterator, allowing a code to go through all value/key pairs in the collection. Here, keys are numbers starting from zero, and the values are nodes.
3. `NodeList.forEach()`: JavaScript NodeList foreach() method executes a function provided once per NodeList element, and it presents the element as an argument to the function.
4. `NodeList.keys()`: the NodeList.keys() method evaluates to an iterator, letting a code pass through all the keys of key or value pairs within the collection. Again, here keys are numbers beginning from zero.
5. `NodeList.values()`: this method returns an iterator that allows a code to pass through all nodes/values of a key or value pairs in that collection.


#### Live and Static NodeLists
The two varieties of NodeLists are static and live, so let’s look at them more closely:

`Live NodeLists`: In js live NodeLists, changes in the DOM automatically update the collection. A typical example of live NodeList is the `node.childNodes`.

`Static NodeLists`: in this category of NodeLists, changes in the DOM do not affect the collection’s content. The method, `document.querySelectorAll()` returns a static NodeList. So, when choosing how to iterate over the items in a NodeList, keep this distinction in mind.


#### JavaScript NodeList Properties
There is only one property:

- `NodeList.length`: it returns the number of nodes in the NodeList. If you want to know the length of the NodeList, use the length property. Also, the length property is very important when looping through a NodeList.

### HTMLCollection vs. NodeList
Items in both NodeList and HTMLCollection refer to HTML elements, making them nearly the same. However, HTMLCollection is a body of HTML elements, while a NodeList is an assembly of element nodes.

NodeList and HTMLCollection have length properties to display the number of items within a collection, and you can use their index number to access each one of them. Nevertheless, you can also access HTMLCollection items by their name and ID, a feature not in JavaScript NodeList.

A JS collection can have both attribute and text nodes, a feature not found in HTMLCollection. But both NodeList and HTMLCollection are not arrays. Therefore, they will not work with array methods.


 > NodeList is pretty similar to HTMLCollection; however, you can only access the JS NodeList items with their index number, while you can access the HTMLCollection item with a name, ID, or an index number 
 
** The fundamental methods you can use to turn a NodeList into an array are array.from(), Spread Operator, and array.prototype.slice() Method. **


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
let text1 = "ab";
let text2 = "ab";
let result = text1.localeCompare(text2);
let text1 = "A";
let text2 = "a";
let result = text1.localeCompare(text2);
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

