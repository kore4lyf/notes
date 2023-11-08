# C#

## Write your first C# code  
### Hello World 
```cs 
Console.WriteLine("Hello World!"); 
```
R - Hello World  

### Commenting your code 
```cs 
//Console.WriteLine("Hello World!"); 
```

### Writting to Console 
Add a new line after printed text. 
`Console.WriteLine` appends a new line after the output.
```cs 
Console.WriteLine("Hello World!"); 
``` 

Doesn't add a new line after print 
```cs 
Console.Write("Hello World!"); 
``` 


### How Your Code Works 
```cs
Console.WriteLine("Hello World!");
``` 

- When the phrase is surrounded by double-quotation marks in your C# code, it's called a **literal string**. In other words, you literally wanted the characters H, e, l, l, o, and so on, sent to the output.

- The Console part is called a class. 

- Classes "own" methods; or you could say that methods live inside of a class. 

- There's also a dot (or period) that separates the class name Console and the method name WriteLine(). The period is the member access operator. In other words, the dot is how you "navigate" from the class to one of its methods.

- The WriteLine() part is called a method. You can always spot a method because it has a set of parentheses after it.


- The parentheses are known as the method invocation operator.

- Finally, the semicolon is the end of statement operator. 



## Store and retrieve data using literal and variable values in C#  

### What is a literal value?
A literal value is a constant value that never changes. Previously, you displayed a literal string to the output console. In other words, you literally wanted that string of alphanumeric characters H, e, l, l, o, and so on, displayed in the output console.

#### character literals
If you only wanted a single alphanumeric character printed to screen, you could create a char literal by surrounding one alphanumeric character in single quotes. The term char is short for character. In C#, this data type is officially named "char", but frequently referred to as a "character".

Add the following line of code in the code editor:
```js
Console.WriteLine('b');
```

If you enter the following code:
```
Console.WriteLine('Hello World!');
``` 
You would get the following error
```
(1,19): error CS1012: Too many characters in character literal
```
Notice the single quotation marks surrounding Hello World!.



#### Integer literals
If you want to display a numeric whole number (no fractions) value in the output console, you can use an int literal. The term int is short for integer

```cs
Console.WriteLine(123)
```

#### Floating-point literals
A floating-point number is a number that contains a decimal, for example 3.14159. 

C# supports three data types to represent decimal numbers: float, double, and decimal. 

Each type supports varying degrees of precision.


Float Type    Precision
`----------------------------`
float         ~6-9 digits  (9)
double        ~15-17 digits ((9 * 2) - 1)
decimal        28-29 digits (9 * 3)


**Float**
```cs
Console.WriteLine(0.25f);
``` 

To create a float literal, append the letter F after the number. In this context, the F is called a literal suffix. The literal suffix tells the compiler you wish to work with a value of float type. You can use either a lower-case f or upper-case F as the literal suffix for a float.

**Double**
```cs
Console.WriteLine(2.625);
``` 

To create a double literal, just enter a decimal number. The compiler defaults to a double literal when a decimal number is entered without a literal suffix.


**Decimal**
```cs
Console.WriteLine(12.39816m);
``` 

To create a decimal literal, append the letter m after the number. In this context, the m is called a literal suffix. The literal suffix tells the compiler you wish to work with a value of decimal type. You can use either a lower-case m or upper-case M as the literal suffix for a decimal.



#### Boolean literals
If you wanted to print a value representing either true or false, you could use a bool literal.

The term bool is short for Boolean.
```cs
Console.WriteLine(true);
Console.WriteLine(false);
``` 



### Declare variables 
Declaring a string Variable. 
```cs 
string firstName; 
``` 

#### Variable name rules and conventions

**Variable name rules and conventions**
Here's a few important considerations about variable names:

- Variable names can contain alphanumeric characters and the underscore character. Special characters like the hash symbol # (also known as the number symbol or pound symbol) or dollar symbol $ are not allowed.
- Variable names must begin with an alphabetical letter or an underscore, not a number.
- Variable names are case-sensitive, meaning that string Value; and string value; are two different variables.
- Variable names must not be a C# keyword. For example, you cannot use the following variable declarations: decimal decimal; or string string;.


There are coding conventions that help keep variables readable and easy to identify. As you develop larger applications, these coding conventions can help you keep track of variables among other text.

Here are some coding conventions for variables:

- Variable names should use camel case, which is a style of writing that uses a lower-case letter at the beginning of the first word and an upper-case letter at the beginning of each subsequent word. For example, `string thisIsCamelCase;``.
- Variable names should begin with an alphabetical letter. Developers use the underscore for a special purpose, so try to not use that for now.
- Variable names should be descriptive and meaningful in your app. Choose a name for your variable that represents the kind of data it will hold.
- Variable names should be one or more entire words appended together. Don't use contractions or abbreviations because the name of the variable (and therefore, its purpose) may be unclear to others who are reading your code.
- Variable names shouldn't include the data type of the variable. You might see some advice to use a style like string strValue;. That advice is no longer current.

The example `string firstName;` follows all of these rules and conventions, assuming you want to use this variable to store data that represents someone's first name.


#### Variable name examples
Here's a few examples of variable declarations using the data types you learned about thus far:

```cs
char userOption;

int gameScore;

decimal particlesPerMillion;

bool processedCustomer;
``` 


### Creating and Setting Values
```cs
string firstName;
firstName = "Bob";
``` 


### Declare implicitly typed local variables 
What are implicitly typed local variables?
An implicitly typed local variable is created by using the var keyword followed by a variable initialization. For example:

```cs
var message = "Hello world!";
``` 

In this example, a string variable was created using the var keyword instead of the string keyword.

The var keyword tells the C# compiler that the data type is implied by the assigned value. After the type is implied, the variable acts the same as if the actual data type had been used to declare it. 

```cs 
var message = "Hello world!";
```
Because the variable message is immediately set to the string value "Hello World!", the C# compiler understands the intent and treats every instance of message as an instance of type string.

In fact, the message variable is typed to be a string and can never be changed. For example, consider the following code:

```
var message = "Hello World!";
message = 10.703m;
```
If you run this code, you'll see the following error message.
```
(2,11): error CS0029: Cannot implicitly convert type 'decimal' to 'string'
```


Variables using the var keyword must be initialized 
```cs 
var message;
```
If you attempt to run this code, as it compiles, you'll see the following output:
```
(1,5): error CS0818: Implicitly-typed variables must be initialized
```


#### Why use the var keyword? 
The var keyword has an important use in C#. Many times, the type of a variable is obvious from its initialization. In those cases, it's simpler to use the var keyword. The var keyword can also be useful when planning the code for an application. When you begin developing code for a task, you may not immediately know what data type to use. Using var can help you develop your solution more dynamically. 



### Exercise solution 
```cs 
string name = "Bob";
int messages = 3;
decimal temperature = 34.4m;

Console.Write("Hello, ");
Console.Write(name);
Console.Write("! You have ");
Console.Write(messages);
Console.Write(" messages in your inbox. The temperature is ");
Console.Write(temperature);
Console.Write(" celsius."); 
``` 




