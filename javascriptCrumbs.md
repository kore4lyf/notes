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
