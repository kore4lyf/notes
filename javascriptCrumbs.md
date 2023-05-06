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







