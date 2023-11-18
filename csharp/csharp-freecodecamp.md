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



### Store and retrieve data using literal and variable values in C#  

#### What is a literal value?
A literal value is a constant value that never changes. Previously, you displayed a literal string to the output console. In other words, you literally wanted that string of alphanumeric characters H, e, l, l, o, and so on, displayed in the output console.

##### character literals
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



##### Integer literals
If you want to display a numeric whole number (no fractions) value in the output console, you can use an int literal. The term int is short for integer

```cs
Console.WriteLine(123)
```

##### Floating-point literals
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



##### Boolean literals
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


### Perform Basic String Formatting in C# 

#### Character escape sequences
An escape character sequence is an instruction to the runtime to insert a special character that will affect the output of your string. In C#, the escape character sequence begins with a backslash `\` followed by the character you're escaping. For example, the `\n` sequence will add a new line, and a `\t` sequence will add a tab.

The following code uses escape character sequences to add newlines and tabs:
```cs
Console.WriteLine("Hello\nWorld!");
Console.WriteLine("Hello\tWorld!");
``` 
If you run the code, you'll see the following output:
```
Hello
World!
Hello   World!
``` 

\"
```cs
Console.WriteLine("Hello \"World\"!");
``` 
If you run the code above, you would see the following output:
```
Hello "World"!
``` 

\\
```cs 
Console.WriteLine("c:\\source\\repos");
``` 
Escaping the back slash character produces the output you intended:
```
c:\source\repos
```


```cs 
Console.WriteLine("Generating invoices for customer \"Contoso Corp\" ...\n");
Console.WriteLine("Invoice: 1021\t\tComplete!");
Console.WriteLine("Invoice: 1022\t\tComplete!");
Console.WriteLine("\nOutput Directory:\t");
``` 
Now, run the code. You'll see the following result in the output console:
```cs 
Generating invoices for customer "Contoso Corp" ...

Invoice: 1021           Complete!
Invoice: 1022           Complete!

Output Directory:    
```


#### Verbatim string literal
A verbatim string literal will keep all whitespace and characters without the need to escape the backslash. To create a verbatim string, use the @ directive before the literal string.

```cs 
Console.WriteLine(@"    c:\source\repos    
        (this is where your code goes)");
``` 
Notice that the string spans two lines and the whitespace generated by this C# instruction is kept in the following output.
```
    c:\source\repos    
        (this is where your code goes)
``` 


#### Unicode escape characters
You can also add encoded characters in literal strings using the \u escape sequence, then a four-character code representing some character in Unicode (UTF-16).
```cs 
// Kon'nichiwa World
Console.WriteLine("\u3053\u3093\u306B\u3061\u306F World!");
``` 

> There are several caveats here. First, some consoles like the Windows Command Prompt will not display all Unicode characters. It will replace those characters with question mark characters instead. Also, the examples used here are UTF-16. Some characters require UTF-32 and therefore require a different escape sequence. This is a complicated subject, and this module is only aiming at showing you what is possible. Depending on your need, you may need to spend quite a bit of time learning and working with Unicode characters in your applications. 

Unicode characters may not print correctly depending on the application.


#### Combine strings using string concatenation 

```cs 
string firstName = "Bob";
string message = "Hello " + firstName;
Console.WriteLine(message);
``` 
Now, run the code. You'll see the following result in the output console:
```
Hello Bob
```

```cs 
string firstName = "Bob";
string greeting = "Hello";
string message = greeting + " " + firstName + "!";
Console.WriteLine(message); 
``` 
Now, run the code. You'll see the following result in the output console:
```
Hello Bob!
``` 


#### Combine strings using string interpolation
String interpolation combines multiple values into a single literal string by using a "template" and one or more interpolation expressions. An interpolation expression is indicated by an opening and closing curly brace symbol { }. You can put any C# expression that returns a value inside the braces. The literal string becomes a template when it's prefixed by the $ character.

In other words, instead of writing the following line of code: 
```cs 
string message = greeting + " " + firstName + "!";
``` 
You can write this more concise line of code instead:
```cs 
string message = $"{greeting} {firstName}!";
``` 

```cs 
string firstName = "Bob";
string message = $"Hello {firstName}!";
Console.WriteLine(message); 
``` 

#### Combine verbatim literals and string interpolation
Suppose you need to use a verbatim literal in your template. You can use both the verbatim literal prefix symbol @ and the string interpolation $ symbol together. 

```cs 
string projectName = "First-Project";
Console.WriteLine($@"C:\Output\{projectName}\Data");
``` 

### EXERCISE 
```cs 
string projectName = "ACME";

string russianMessage = "\u041f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0440\u0443\u0441\u0441\u043a\u0438\u0439 \u0432\u044b\u0432\u043e\u0434";

Console.WriteLine($@"View English output:
  c:\Exercise\{projectName}\data.txt

{russianMessage}:
  c:\Exercise\{projectName}\ru-RU\data.txt
");
``` 


```cs 
string projectName = "ACME";
string englishLocation = $@"c:\Exercise\{projectName}\data.txt";
Console.WriteLine($"View English output:\n\t\t{englishLocation}\n");

string russianMessage = "\u041f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0440\u0443\u0441\u0441\u043a\u0438\u0439 \u0432\u044b\u0432\u043e\u0434";
string russianLocation = $@"c:\Exercise\{projectName}\ru-RU\data.txt";
Console.WriteLine($"{russianMessage}:\n\t\t{russianLocation}\n");
```


### Perform basic operations on numbers 
```cs 
int firstNumber = 12;
int secondNumber = 7;
Console.WriteLine(firstNumber + secondNumber);
```
Output
19 


#### Mix data types to force implicit type conversions
What happens if you try to use the + symbol with both string and int values? 
```cs 
string firstName = "Bob";
int widgetsSold = 7;
Console.WriteLine(firstName + " sold " + widgetsSold + " widgets.");
```
Run the code and you'll see the following result in the output console:

Output
Bob sold 7 widgets.

> It attempts to implicitly convert the int variable widgetsSold into a string temporarily so it can concatenate it to the rest of the string. The C# compiler tries to help you when it can, but ideally, you would be explicit about your intentions.

Add parentheses to clarify your intention to the compiler
Modify the code you wrote to match the following code:
```cs 
string firstName = "Bob";
int widgetsSold = 7;
Console.WriteLine(firstName + " sold " + (widgetsSold + 7) + " widgets.");
``` 

Run the code and you'll see the following result in the output console:

Output
Bob sold 14 widgets.



### Math Operations 
```cs 
int sum = 7 + 5;
int difference = 7 - 5;
int product = 7 * 5;
int quotient = 7 / 5;

Console.WriteLine("Sum: " + sum);
Console.WriteLine("Difference: " + difference);
Console.WriteLine("Product: " + product);
Console.WriteLine("Quotient: " + quotient);
```
Run the code. You should see the following output:

Output
Sum: 12
Difference: 2
Product: 35
Quotient: 1



- + is the addition operator
- - is the subtraction operator
- * is the multiplication operator
- / is the division operator

> However, the resulting quotient of the division example may not be what you may have expected. The values after the decimal are truncated from the quotient since it is defined as an int, and int cannot contain values after the decimal.

```cs 
decimal decimalQuotient = 7.0m / 5;
Console.WriteLine($"Decimal quotient: {decimalQuotient}");
``` 
Run the code. You should see the following output:

Output
Decimal quotient: 1.4


For this to work, the quotient (left of the assignment operator) must be of type decimal and at least one of numbers being divided must also be of type decimal (both numbers can also be a decimal type).

Here are two additional examples that work equally well: 
```cs 
decimal decimalQuotient = 7 / 5.0m;
decimal decimalQuotient = 7.0m / 5.0m;
``` 

However, the following lines of code won't work (or give inaccurate results):
```cs
int decimalQuotient = 7 / 5.0m;
int decimalQuotient = 7.0m / 5;
int decimalQuotient = 7.0m / 5.0m;
decimal decimalQuotient = 7 / 5;
``` 

#### Type Casting
To cast int to decimal, you add the cast operator before the value. You use the name of the data type surrounded by parentheses in front of the value to cast it. In this case, you would add (decimal) before the variables first and second.

```cs 
int first = 7;
int second = 5;
decimal quotient = (decimal)first / (decimal)second;
Console.WriteLine(quotient);
``` 

Run the code. You should see the following output:

Output
1.4

> You've seen three uses for the parenthesis operator: method invocation, order of operations and casting. 

#### Modulus (remainder after integer division)
The modulus operator `%` tells you the remainder of int division.
```cs 
Console.WriteLine($"Modulus of 200 / 5 : {200 % 5}");
Console.WriteLine($"Modulus of 7 / 5 : {7 % 5}");
```
Run the code. You should see the following output:

Output
Modulus of 200 / 5 : 0
Modulus of 7 / 5 : 2 


#### Order of operations
As you learned in the previous exercise, you can use the () symbols as the order of operations operators. However, this isn't the only way the order of operations is determined.

In math, **PEMDAS** is an acronym that helps students remember the order of operations. The order is:

- Parentheses (whatever is inside the parenthesis is performed first)
- Exponents
- Multiplication and Division (from left to right)
- Addition and Subtraction (from left to right)

> C# follows the same order as PEMDAS except for exponents. While there's no exponent operator in C#, you can use the `System.Math.Pow method`. The module "Call methods from the .NET Class Library using C#" will feature this method and others.

```cs 
int value1 = 3 + 4 * 5;
int value2 = (3 + 4) * 5;
Console.WriteLine(value1);
Console.WriteLine(value2);
```
Output
23
35 



#### Increment and decrement values 
```cs 
int value = 0;     // value is now 0.
value = value + 5; // value is now 5.
value += 5;        // value is now 10. 
```
The ++ operator increments the value of the variable by 1. So, lines two and three in the following code snippet are the same:

```cs 
int value = 0;     // value is now 0.
value = value + 1; // value is now 1.
value++;           // value is now 2.
``` 


> Operators like +=, -=, *=, ++, and -- are known as compound assignment operators because they compound some operation in addition to assigning the result to the variable. The += operator is specifically termed the addition assignment operator. 


#### Position the increment and decrement operators
Both the increment and decrement operators have an interesting quality — depending on their position, they perform their operation before or after they retrieve their value. In other words, if you use the operator before the value as in ++value, then the increment will happen before the value is retrieved. Likewise, value++ will increment the value after the value has been retrieved.

```cs 
int value = 1;
value++;
Console.WriteLine("First: " + value);
Console.WriteLine($"Second: {value++}");
Console.WriteLine("Third: " + value);
Console.WriteLine("Fourth: " + (++value));
```
Run the code. You should see the following output:

Output
First: 2
Second: 2
Third: 3
Fourth: 4

Notice this line of code:
```cs
Console.WriteLine($"Second: {value++}");
``` 
There's two steps to this line:
Retrieve the current value of the variable value and use that in the string interpolation operation.
Increment the value.



### Convert Fahremheit to Celsius 
```cs 
int fahrenheit = 94;
decimal celsius = (fahrenheit - 32m) * (5m / 9m);
Console.WriteLine("The temperature is " + celsius + " Celsius.");
``` 



### Guided project - Calculate and print student grades
```cs 
int currentAssignments = 5;

int sophia1 = 93;
int sophia2 = 87;
int sophia3 = 98;
int sophia4 = 95;
int sophia5 = 100;

int nicolas1 = 80;
int nicolas2 = 83;
int nicolas3 = 82;
int nicolas4 = 88;
int nicolas5 = 85;

int zahirah1 = 84;
int zahirah2 = 96;
int zahirah3 = 73;
int zahirah4 = 85;
int zahirah5 = 79;

int jeong1 = 90;
int jeong2 = 92;
int jeong3 = 98;
int jeong4 = 100;
int jeong5 = 97;

int sophiaSum = sophia1 + sophia2 + sophia3 + sophia4 + sophia5;
int nicolasSum = nicolas1 + nicolas2 + nicolas3 + nicolas4 + nicolas5;
int zahirahSum = zahirah1 + zahirah2 + zahirah3 + zahirah4 + zahirah5;
int jeongSum = jeong1 + jeong2 + jeong3 + jeong4 + jeong5;

decimal sophiaScore = (decimal) sophiaSum / currentAssignments;
decimal nicolasScore = (decimal) nicolasSum / currentAssignments;
decimal zahirahScore = (decimal) zahirahSum / currentAssignments;
decimal jeongScore = (decimal) jeongSum / currentAssignments;

Console.WriteLine("Student\t\tGrade\n");
Console.WriteLine("Sophia:\t\t" + sophiaScore + "\tA");
Console.WriteLine("Nicolas:\t" + nicolasScore + "\tB");
Console.WriteLine("Zahirah:\t" + zahirahScore + "\tB");
Console.WriteLine("Jeong:\t\t" + jeongScore + "\tA");
```

### Calculating Students GPA
```cs 
string studentName = "Sophia Johnson";
string course1Name = "English 101";
string course2Name = "Algebra 101";
string course3Name = "Biology 101";
string course4Name = "Computer Science I";
string course5Name = "Psychology 101";

int course1Credit = 3;
int course2Credit = 3;
int course3Credit = 4;
int course4Credit = 4;
int course5Credit = 3;

int gradeA = 4;
int gradeB = 3;

int course1Grade = gradeA;
int course2Grade = gradeB;
int course3Grade = gradeB;
int course4Grade = gradeB;
int course5Grade = gradeA;

int totalCreditHours = 0;
totalCreditHours += course1Credit;
totalCreditHours += course2Credit;
totalCreditHours += course3Credit;
totalCreditHours += course4Credit;
totalCreditHours += course5Credit;

int totalGradePoints = 0;
totalGradePoints += course1Credit * course1Grade;
totalGradePoints += course2Credit * course2Grade;
totalGradePoints += course3Credit * course3Grade;
totalGradePoints += course4Credit * course4Grade;
totalGradePoints += course5Credit * course5Grade;

decimal gradePointAverage = (decimal) totalGradePoints/totalCreditHours;

int leadingDigit = (int) gradePointAverage;
int firstDigit = (int) (gradePointAverage * 10 ) % 10;
int secondDigit = (int) (gradePointAverage * 100 ) % 10;

Console.WriteLine($"Student: {studentName}\n");
Console.WriteLine("Course\t\t\t\tGrade\tCredit Hours");

Console.WriteLine($"{course1Name}\t\t\t{course1Grade}\t\t{course1Credit}");
Console.WriteLine($"{course2Name}\t\t\t{course2Grade}\t\t{course2Credit}");
Console.WriteLine($"{course3Name}\t\t\t{course3Grade}\t\t{course3Credit}");
Console.WriteLine($"{course4Name}\t{course4Grade}\t\t{course4Credit}");
Console.WriteLine($"{course5Name}\t\t{course5Grade}\t\t{course5Credit}");

Console.WriteLine($"\nFinal GPA:\t\t\t {leadingDigit}.{firstDigit}{secondDigit}");
``` 




## Create and run simple C# console applications

### Check to see if .NET is already installed 
1. Open the Windows Command Prompt app or another application that displays a terminal command prompt.
2. At the command prompt, type: `dotnet --version` and then press the Enter key. 


 During this training, you use .NET CLI commands to create new console applications, build your project code, and run your applications.

For example, the following .NET CLI command will create a new console application in the specified folder location:

```sh
dotnet new console -o ./CsharpProjects/TestProject
```
The structure of a CLI command consists of the following three parts: 
- The driver: `dotnet` in this example.
- The command: `new console` in this example.
- The command arguments: `-o ./CsharpProjects/TestProject` in this example.



### Call Methods From the .NET Class Library Using C#
In this module, you learn about class libraries, and write code that calls methods in the .NET Class Library. You learn the characteristics of methods, and why methods of the .NET Class Library are designed and implemented differently across the .NET Class Library. Most importantly, you write code that uses the .NET Library methods to achieve a specific programming task. Finally, you'll use built-in tools and online documentation to help you gather information about the methods you want to work with. 


### .NET Class Library 
The .NET Class Library is a collection of thousands of classes containing tens of thousands of methods. 
For example, the .NET Class Library includes the Console class for developers working on console applications. The Console class includes methods for input and output operations such as `Write()`, `WriteLine()`, `Read()`, `ReadLine()`, and many others. For example, you may already be familiar with the following code:
```cs 
Console.WriteLine("Hello, World!")
```
You can think of a class as a container for Methods. 

There's also several families of classes that enable you to build native desktop applications. Another subset of classes and methods enable you to access a database. There are lots of classes in the .NET Class Library that support specific types of applications. 


#### Even data types are part of the .NET Class Library
C# data types (such as string and int) are actually made available through classes in the .NET Class Library. 



### Call the methods of a .NET Class 
From your previous experience with the Console.WriteLine() method, you should already know the basics:

- Start by typing the class name. In this case, the class name is Console.
- Add the member access operator, the . symbol.
- Add the method's name. In this case, the method's name is WriteLine.
- Add the method invocation operator, which is a set of parentheses ().
- Finally, specify the arguments that are passed to the method, if there are any, between the parentheses of the method invocation operator. In this case, you specify the text that you want the Console.WriteLine() method to write to the console (for example, "Hello World!"). 

```cs 
Random dice = new Random();
int roll = dice.Next(1, 7);
Console.WriteLine(roll);
``` 

This code simulates a dice roll using the `Random.Next()` method to generate a number, and the `Console.WriteLine()` method to display the value.

On the third code line, you include a reference to the Console class and call the `Console.WriteLine()` method directly. However, you use a different technique for calling the `Random.Next()` method. The reason why you're using two different techniques is because some methods are stateful and others are stateless. Your next step is to examine the difference between stateful and stateless methods. 

> Next is a statefull method 


#### Stateful versus stateless methods
In software development projects, the term state is used to describe the condition of the execution environment at a specific moment in time. As your code executes line by line, values are stored in variables. At any moment during execution, the current state of the application is the collection of all values stored in memory.

Some methods don't rely on the current state of the application to work properly. In other words, **stateless methods** are implemented so that they can work without referencing or changing any values already stored in memory. **Stateless methods are also known as static methods**.

For example, the Console.WriteLine() method doesn't rely on any values stored in memory. It performs its function and finishes without impacting the state of the application in any way. 

Stateful (instance) methods keep track of their state in fields, which are variables defined on the class. Each new instance of the class gets its own copy of those fields in which to store state.

> A single class can support both stateful and stateless methods. However, when you need to call stateful methods, you must first create an instance of the class so that the method can access state.

#### Creating an instance of a class
An instance of a class is called an object. To create a new instance of a class, you use the new operator. Consider the following line of code that creates a new instance of the Random class to create a new object called dice:

```cs 
Random dice = new Random(); 
``` 

The new operator does several important things:
- It first requests an address in the computer's memory large enough to store a new object based on the Random class.
- It creates the new object, and stores it at the memory address.
- It returns the memory address so that it can be saved in the dice variable. 

> To create the illusion of randomness, the developers of the Next() method decided to capture the date and time down to the fraction of a millisecond and use that to seed an algorithm that produces a different number each time. While not entirely random, it suffices for most applications. The state that is captured and maintained through the lifetime of the dice object is the seed value. 

To use the Random.Next() method, however, you don't have to understand how it works. The important thing to know is that some methods require you to create an instance of a class before you call them, while others do not.

#### How can you determine whether you need to create an instance of a class before calling its methods?
- One approach for determining whether a method is stateful or stateless is to consult the documentation. The documentation includes examples that show whether the method must be called from the object instance or directly from the class.
- As an alternative to searching through product documentation, you can attempt to access the method directly from the class itself. If it works, you know that it's a stateless method. 



> **Recap**
  >> To call methods of a class in the .NET Class Library, you use the format ClassName.MethodName(), where the . symbol is the member access operator to access a method defined on the class, and the () symbols are the method invocation operators.
  >> When calling a stateless method, you don't need to create a new instance of its class first.
  >> When calling a stateful method, you need to create an instance of the class, and access the method on the object.
  >> Use the new operator to create a new instance of a class.
  >> An instance of a class is called an object.


### Return values and input parameters of methods 
#### Return values
Some methods are designed to complete their function and end "quietly". In other words, they don't return a value when they finish. They are referred to as void methods.

Other methods are designed to return a value upon completion. The return value is typically the result of an operation.

#### Input parameters
The information consumed by a method is called a parameter. A method can use one or more parameters to accomplish its task, or none at all.

> Often times, the terms 'parameter' and 'argument' are used interchangeably. However, 'parameter' refers to the variable that's being used inside the method. An 'argument' is the value that's passed when the method is called.



#### Overloaded methods
Many methods in the .NET Class Library have overloaded method signatures. Among other things, this enables you to call the method with or without parameters.

An overloaded method is defined with multiple method signatures. Overloaded methods provide different ways to call the method or provide different types of data.

In some cases, overloaded versions of a method are used to accept an input parameter using different data types. For example, the Console.WriteLine() method has 19 different overloaded versions. Most of those overloads allow the method to accept different types and then write the specified information to the console. Consider the following code:

```cs 
int number = 7;
string text = "seven";

Console.WriteLine(number);
Console.WriteLine();
Console.WriteLine(text);
``` 

For example, the Random.Next() method has three different overloaded versions. 

```cs
Random dice = new Random();
int roll1 = dice.Next();
int roll2 = dice.Next(101);
int roll3 = dice.Next(50, 101);

Console.WriteLine($"First roll: {roll1}");
Console.WriteLine($"Second roll: {roll2}");
Console.WriteLine($"Third roll: {roll3}");
``` 


### Implement a method of the Math class that returns the larger of two numbers 

```cs 
using System;
public class largestOfTwoNumbersInBuiltMethod
{
  public static void Main(String[] args)
  {
    int firstValue = 500;
    int secondValue = 600;
    int largerValue = Math.Max(firstValue, secondValue);
    Console.WriteLine(largerValue);
  }
}
```


### Add decision logic to your code using `if`, `else`, and `else if` statements in C# 
You'll use the Random.Next() method to simulate rolling three six-sided dice. You'll evaluate the rolled values to calculate the score. If the score is greater than an arbitrary total, then you'll display a winning message to the user. If the score is below the cutoff, you'll display a losing message to the user.

- If any two dice you roll result in the same value, you get two bonus points for rolling doubles.
- If all three dice you roll result in the same value, you get six bonus points for rolling triples.
- If the sum of the three dice rolls, plus any point bonuses, is 15 or greater, you win the game. Otherwise, you lose.

```cs 
Random dice = new Random();

int roll1 = dice.Next(1, 7);
int roll2 = dice.Next(1, 7);
int roll3 = dice.Next(1, 7);

int total = roll1 + roll2 + roll3;

Console.WriteLine($"Dice roll: {roll1} + {roll2} + {roll3} = {total}");

if ((roll1 == roll2) || (roll2 == roll3) || (roll1 == roll3))
{
    Console.WriteLine("You rolled doubles! +2 bonus to total!");
    total += 2;
}

if ((roll1 == roll2) && (roll2 == roll3)) 
{
    Console.WriteLine("You rolled triples! +6 bonus to total!");
    total += 6;
}

if (total >= 15)
{
    Console.WriteLine("You win!");
}

if (total < 15)
{
    Console.WriteLine("Sorry, you lose.");
} 
``` 


#### Boolean expression?
A Boolean expression is any code that returns a Boolean value, either true or false. The simplest Boolean expressions are simply the values true and false. Alternatively, a Boolean expression could be the result of a method that returns the value true or false. For example, here's a simple code example using the string.Contains() method to evaluate whether one string contains another string.

```cs
string message = "The quick brown fox jumps over the lazy dog.";
bool result = message.Contains("dog");
Console.WriteLine(result);

if (message.Contains("fox"))
{
    Console.WriteLine("What does the fox say?");
}
```

Because the message.Contains("fox") returns a true or false value, it qualifies as a Boolean expression and can be used in an if statement.

Other simple Boolean expressions can be created by using operators to compare two values. Operators include:

- ==, the "equals" operator, to test for equality
- >, the "greater than" operator, to test that the value on the left is greater than the value on the right
- <, the "less than" operator, to test that the value on the left is less than the value on the right
>=, the "greater than or equal to" operator
- <=, the "less than or equal to" operator
and so on


#### A code block
A code block is a collection of one or more lines of code that are defined by an opening and closing curly brace symbol { }. It represents a complete unit of code that has a single purpose in your software system. 


### Create nested decision logic with if, else if, and else
```cs 
Random dice = new Random();

int roll1 = dice.Next(1, 7);
int roll2 = dice.Next(1, 7);
int roll3 = dice.Next(1, 7);

int total = roll1 + roll2 + roll3;

Console.WriteLine($"Dice roll: {roll1} + {roll2} + {roll3} = {total}");

if ((roll1 == roll2) || (roll2 == roll3) || (roll1 == roll3))
{
    if ((roll1 == roll2) && (roll2 == roll3))
    {
        Console.WriteLine("You rolled triples!  +6 bonus to total!");
        total += 6;
    }
    else
    {
        Console.WriteLine("You rolled doubles!  +2 bonus to total!");
        total += 2;
    }
}

if (total >= 16)
{
    Console.WriteLine("You win a new car!");
}
else if (total >= 10)
{
    Console.WriteLine("You win a new laptop!");
}
else if (total == 7)
{
    Console.WriteLine("You win a trip for two!");
}
else
{
    Console.WriteLine("You win a kitten!");
} 
``` 


#### Complete a challenge activity to apply business rules 
```cs 
Random random = new Random();
int daysUntilExpiration = random.Next(12);
int discountPercentage = 0;

if (daysUntilExpiration == 0)
{
    Console.WriteLine("Your subscription has expired.");
}
else if (daysUntilExpiration == 1)
{
    Console.WriteLine("Your subscription expires within a day!");
    discountPercentage = 20;
}
else if (daysUntilExpiration <= 5)
{
    Console.WriteLine($"Your subscription expires in {daysUntilExpiration} days.");
    discountPercentage = 10;
}
else if (daysUntilExpiration <= 10)
{
    Console.WriteLine("Your subscription will expire soon. Renew now!");
}

if (discountPercentage > 0)
{
    Console.WriteLine($"Renew now and save {discountPercentage}%.");
}
```  



### Store and Iterate Through Sequences of Data Using Arrays and the foreach Statement in C# 

#### Get started with array basics 
##### Declare a new array
To declare a new array of strings that can hold three elements, enter the following code:

```cs 
string[] fraudulentOrderIDs = new string[3];
``` 

The new operator creates a new instance of an array in the computer's memory that can hold three string values. For more information about the new keyword, see the module "Call methods from the .NET Class Library using C#".

Notice that the first set of square brackets [] merely tells the compiler that the variable named fraudulentOrderIDs is an array, but the second set of square brackets [3] indicates the number of elements that the array can hold. 

```cs 
string[] fraudulentOrderIDs = new string[3];

fraudulentOrderIDs[0] = "A123";
fraudulentOrderIDs[1] = "B456";
fraudulentOrderIDs[2] = "C789"; 
```  

##### Attempt to use an index that is out of bounds of the array 
dotnet build and then press Enter.

You should see the following message:

Output 
```
Build succeeded.        
    0 Warning(s)        
    0 Error(s)
```
At the Terminal command prompt, to run your code, type dotnet run and then press Enter.


When you run the app, you get the following runtime error message:
Output 
``` 
Unhandled exception. System.IndexOutOfRangeException: Index was outside the bounds of the array.     
   at Program.< Main >$(String[] args) in C:\Users\someuser\Desktop\CsharpProjects\TestProject\Program.cs:line 6
``` 

Notice the following parts of the error:
- Error message: System.IndexOutOfRangeException: Index was outside the bounds of the array.
- Error location: Program.cs:line 6

##### Reinitialising 
```cs 
string[] fraudulentOrderIDs = new string[3];

fraudulentOrderIDs[0] = "A123";
fraudulentOrderIDs[1] = "B456";
fraudulentOrderIDs[2] = "C789";
// fraudulentOrderIDs[3] = "D000";

Console.WriteLine($"First: {fraudulentOrderIDs[0]}");
Console.WriteLine($"Second: {fraudulentOrderIDs[1]}");
Console.WriteLine($"Third: {fraudulentOrderIDs[2]}");

fraudulentOrderIDs[0] = "F000";

Console.WriteLine($"Reassign First: {fraudulentOrderIDs[0]}");
``` 

Output
First: A123
Second: B456
Third: C789
Reassign First: F000


##### Initialize an array
You can initialize an array during declaration just like you would a regular variable.  

```cs 
string[] fraudulentOrderIDs = { "A123", "B456", "C789" };
``` 

Ensure that your code matches the following example:
```cs 
/*
string[] fraudulentOrderIDs = new string[3];

fraudulentOrderIDs[0] = "A123";
fraudulentOrderIDs[1] = "B456";
fraudulentOrderIDs[2] = "C789";
// fraudulentOrderIDs[3] = "D000";
*/

string[] fraudulentOrderIDs = { "A123", "B456", "C789" };

Console.WriteLine($"First: {fraudulentOrderIDs[0]}");
Console.WriteLine($"Second: {fraudulentOrderIDs[1]}");
Console.WriteLine($"Third: {fraudulentOrderIDs[2]}");

fraudulentOrderIDs[0] = "F000";

Console.WriteLine($"Reassign First: {fraudulentOrderIDs[0]}"); 
```


##### Use the Length property of an array
Depending on how the array is created, you may not know in advance how many elements an array contains. To determine the size of an array, you can use the Length property. 

```cs 
Console.WriteLine($"There are {fraudulentOrderIDs.Length} fraudulent orders to process."); 
``` 
There are 3 fraudulent orders to process. 




####  Implement the foreach statement 
```cs 
string[] names = { "Rowena", "Robin", "Bao" };
foreach (string name in names)
{
    Console.WriteLine(name);
} 
``` 

Output
Rowena
Robin
Bao


```cs 
int[] inventory = { 200, 450, 700, 175, 250 };
int sum = 0;
foreach (int items in inventory)
{
    sum += items;
}

Console.WriteLine($"We have {sum} items in inventory."); 
``` 


#### Complete a challenge activity for nested iteration and selection statements 
```cs 
string[] orderIDs = { "B123", "C234", "A345", "C15", "B177", "G3003", "C235", "B179" };

foreach (string orderID in orderIDs)
{
    if (orderID.StartsWith("B"))
    {
        Console.WriteLine(orderID);
    }
} 
``` 



### Create readable code with conventions, whitespace, and comments in C#  
In this module, you'll learn how to choose names for your variables that describe their purpose and intent. You'll learn how to add code comments that document the higher-level requirements and your approach in code, as well as to temporarily instruct the compiler to ignore lines of code. Finally, you'll learn how whitespace can be used to help convey the relationship of individual lines of code.

#### Choose variable names that follow rules and conventions
Not only does the name of a variable have to follow certain syntax rules, it should also be used to make the code more human-readable and understandable. That's a lot to ask of one line of code!. 

##### Variable name rules 
- Variable names can contain alphanumeric characters and the underscore character. Special characters like the pound #, the dash -, and the dollar sign $ are not allowed.
- Variable names must begin with an alphabetical letter or an underscore, not a number. Developers use the underscore for a special purpose, so try to not use that for now.
- Variable names must NOT be a C# keyword. For example, these variable name declarations won't be allowed: float float; or string string;.
- Variable names are case-sensitive, meaning that string MyValue; and string myValue; are two different variables.


#### Variable name conventions 
- Variable names should use camel case. For example: `string thisIsCamelCase;`
- Variable names should be descriptive and meaningful in your application. You should choose a name for your variable that represents the kind of data it will hold (not the data type). >For example: bool orderComplete;, NOT bool isComplete;.
- Variable names should be one or more entire words appended together. Don't use contractions because the name of the variable may be unclear to others who are reading your code. >For example: decimal orderAmount;, NOT decimal odrAmt;.
- Variable names shouldn't include the data type of the variable. You might see some advice to use a style like string strMyValue;. It was a popular style years ago. However, most developers don't follow this advice anymore and there are good reasons not to use it. 


#### Variable name examples
Here's a few examples of variable declarations (using common data types):

```cs
char userOption;

int gameScore;

float particlesPerMillion;

bool processedCustomer;
``` 


#### Create effective code comments 
A code comment is an instruction to the compiler to ignore everything after the code comment symbols in the current line. 

This may not seem useful at first, however it's useful in three situations:
- When you want to leave a note about the intent of a passage of code. It can be helpful to include code comments that describe the purpose or the thought process when you're writing a particularly challenging set of coding instructions. Your future self will thank you.
- When you want to temporarily remove code from your application to try a different approach, but you're not yet convinced your new idea will work. You can comment out the code, write the new code, and once you're convinced the new code will work the way you want it to, you can safely delete the old (commented code).
- Adding a message like TODO to remind you to look at a given passage of code later. While you should use this judiciously, it's a useful approach. You may be working on another feature when you read a line of code that sparks a concern. Rather than ignoring the new concern, you can mark it for investigation later. 


> Code comments should be used to say what the code cannot. Often, developers update their code but forget to update the code comments. It's best to use comments for higher-level ideas and not to add comments about how an individual line of code works.


```cs 
string firstName = "Bob";
int widgetsPurchased = 7;
// Testing a change to the message.
// int widgetsSold = 7;
// Console.WriteLine($"{firstName} sold {widgetsSold} widgets.");
Console.WriteLine($"{firstName} purchased {widgetsPurchased} widgets."); 
``` 


##### Random random = new Random();
```cs 
string[] orderIDs = new string[5];
// Loop through each blank orderID
for (int i = 0; i < orderIDs.Length; i++)
{
    // Get a random value that equates to ASCII letters A through E
    int prefixValue = random.Next(65, 70);
    // Convert the random value into a char, then a string
    string prefix = Convert.ToChar(prefixValue).ToString();
    // Create a random number, pad with zeroes
    string suffix = random.Next(1, 1000).ToString("000");
    // Combine the prefix and suffix together, then assign to current OrderID
    orderIDs[i] = prefix + suffix;
}
// Print out each orderID
foreach (var orderID in orderIDs)
{
    Console.WriteLine(orderID);
} 
```  


To add a comment that explains the higher-level purpose of your code, update your code as follows:

```cs 
/*
  The following code creates five random OrderIDs
  to test the fraud detection process.  OrderIDs 
  consist of a letter from A to E, and a three
  digit number. Ex. A123.
*/
Random random = new Random();
string[] orderIDs = new string[5];

for (int i = 0; i < orderIDs.Length; i++)
{
    int prefixValue = random.Next(65, 70);
    string prefix = Convert.ToChar(prefixValue).ToString();
    string suffix = random.Next(1, 1000).ToString("000");

    orderIDs[i] = prefix + suffix;
}

foreach (var orderID in orderIDs)
{
    Console.WriteLine(orderID);
} 
```


#### Use whitespace to make your code easier to read 
What is whitespace?
The term "whitespace" refers to individual spaces produced by the space bar, tabs produced by the tab key, and new lines produced by the enter key. The C# compiler ignores whitespace

```cs 
// Example 1:
Console
.
WriteLine
(
"Hello Example 1!"
)
;

// Example 2:
string firstWord="Hello";string lastWord="Example 2";Console.WriteLine(firstWord+" "+lastWord+"!"); 
```  

Output
Hello Example 1!
Hello Example 2!



```cs 
// Example 1 
Random dice = new Random();
int roll1 = dice.Next(1, 7);
int roll2 = dice.Next(1, 7);
int roll3 = dice.Next(1, 7);
int total = roll1 + roll2 + roll3;
Console.WriteLine($"Dice roll: {roll1} + {roll2} + {roll3} = {total}");
if ((roll1 == roll2) || (roll2 == roll3) || (roll1 == roll3)) {
    if ((roll1 == roll2) && (roll2 == roll3)) {
        Console.WriteLine("You rolled triples!  +6 bonus to total!");
        total += 6; 
    } else {
        Console.WriteLine("You rolled doubles!  +2 bonus to total!");
        total += 2;
    }
} 



// Example 2 
Random dice = new Random();

int roll1 = dice.Next(1, 7);
int roll2 = dice.Next(1, 7);
int roll3 = dice.Next(1, 7);

int total = roll1 + roll2 + roll3;
Console.WriteLine($"Dice roll: {roll1} + {roll2} + {roll3} = {total}");

if ((roll1 == roll2) || (roll2 == roll3) || (roll1 == roll3)) {
    if ((roll1 == roll2) && (roll2 == roll3)) {
        Console.WriteLine("You rolled triples!  +6 bonus to total!");
        total += 6; 
    } else {
        Console.WriteLine("You rolled doubles!  +2 bonus to total!");
        total += 2;
    }
} 





// Exaple 3 

Random dice = new Random();

int roll1 = dice.Next(1, 7);
int roll2 = dice.Next(1, 7);
int roll3 = dice.Next(1, 7);

int total = roll1 + roll2 + roll3;
Console.WriteLine($"Dice roll: {roll1} + {roll2} + {roll3} = {total}");

if ((roll1 == roll2) || (roll2 == roll3) || (roll1 == roll3)) 
{
    if ((roll1 == roll2) && (roll2 == roll3)) 
    {
        Console.WriteLine("You rolled triples!  +6 bonus to total!");
        total += 6; 
    } 
    else 
    {
        Console.WriteLine("You rolled doubles!  +2 bonus to total!");
        total += 2;
    }
}
``` 


#### Code readability challenge
In this challenge, you'll use the techniques you learned in this module to improve the readability of a code sample. You are provided with a code sample that is poorly styled and commented. Your goal is to update the code using style guidelines for variable names, code comments, and whitespace to improve code readability. 

// Ex1 poor commented, name & white space
```cs 
string str = "The quick brown fox jumps over the lazy dog.";
// convert the message into a char array
char[] charMessage = str.ToCharArray();
// Reverse the chars
Array.Reverse(charMessage);
int x = 0;
// count the o's
foreach (char i in charMessage) { if (i == 'o') { x++; } }
// convert it back to a string
string new_message = new String(charMessage);
// print it out
Console.WriteLine(new_message);
Console.WriteLine($"'o' appears {x} times."); 
```

// Ex2 Solution 
```cs 
/*
   This code reverses a message, counts the number of times 
   a particular character appears, then prints the results
   to the console window.
 */

string originalMessage = "The quick brown fox jumps over the lazy dog.";

char[] message = originalMessage.ToCharArray();
Array.Reverse(message);

int letterCount = 0;

foreach (char letter in message)
{
    if (letter == 'o')
    {
        letterCount++;
    }
}

string newMessage = new String(message);

Console.WriteLine(newMessage);
Console.WriteLine($"'o' appears {letterCount} times.");
```


### Develop foreach and if-elseif-else structures to process array data in C#

```cs 
/* 
This C# console application is designed to:
- Use arrays to store student names and assignment scores.
- Use a `foreach` statement to iterate through the student names as an outer program loop.
- Use an `if` statement within the outer loop to identify the current student name and access that student's assignment scores.
- Use a `foreach` statement within the outer loop to iterate though the assignment scores array and sum the values.
- Use an algorithm within the outer loop to calculate the average exam score for each student.
- Use an `if-elseif-else` construct within the outer loop to evaluate the average exam score and assign a letter grade automatically.
- Integrate extra credit scores when calculating the student's final score and letter grade as follows:
    - detects extra credit assignments based on the number of elements in the student's scores array.
    - divides the values of extra credit assignments by 10 before adding extra credit scores to the sum of exam scores.
- use the following report format to report student grades: 

    Student         Grade

    Sophia:         92.2    A-
    Andrew:         89.6    B+
    Emma:           85.6    B
    Logan:          91.2    A-
*/

int examAssignments = 5;

string[] studentNames = new string[] { "Sophia", "Andrew", "Emma", "Logan" };

int[] sophiaScores = new int[] { 90, 86, 87, 98, 100, 94, 90 };
int[] andrewScores = new int[] { 92, 89, 81, 96, 90, 89 };
int[] emmaScores = new int[] { 90, 85, 87, 98, 68, 89, 89, 89 };
int[] loganScores = new int[] { 90, 95, 87, 88, 96, 96 };

int[] studentScores = new int[10];

string currentStudentLetterGrade = "";

// display the header row for scores/grades
Console.Clear();
Console.WriteLine("Student\t\tGrade\n");

/*
The outer foreach loop is used to:
- iterate through student names 
- assign a student's grades to the studentScores array
- sum assignment scores (inner foreach loop)
- calculate numeric and letter grade
- write the score report information
*/
foreach (string name in studentNames)
{
    string currentStudent = name;

    if (currentStudent == "Sophia")
        studentScores = sophiaScores;

    else if (currentStudent == "Andrew")
        studentScores = andrewScores;

    else if (currentStudent == "Emma")
        studentScores = emmaScores;

    else if (currentStudent == "Logan")
        studentScores = loganScores;

    int sumAssignmentScores = 0;
    decimal currentStudentGrade = 0;
    int gradedAssignments = 0;

    /* 
    the inner foreach loop sums assignment scores
    extra credit assignments are worth 10% of an exam score
    */
    foreach (int score in studentScores)
    {
        gradedAssignments += 1;

        if (gradedAssignments <= examAssignments)
            sumAssignmentScores += score;
        else
            sumAssignmentScores += score / 10;
    }

    currentStudentGrade = (decimal)(sumAssignmentScores) / examAssignments;

    if (currentStudentGrade >= 97)
        currentStudentLetterGrade = "A+";
    else if (currentStudentGrade >= 93)
        currentStudentLetterGrade = "A";
    else if (currentStudentGrade >= 90)
        currentStudentLetterGrade = "A-";
    else if (currentStudentGrade >= 87)
        currentStudentLetterGrade = "B+";
    else if (currentStudentGrade >= 83)
        currentStudentLetterGrade = "B";
    else if (currentStudentGrade >= 80)
        currentStudentLetterGrade = "B-";
    else if (currentStudentGrade >= 77)
        currentStudentLetterGrade = "C+";
    else if (currentStudentGrade >= 73)
        currentStudentLetterGrade = "C";
    else if (currentStudentGrade >= 70)
        currentStudentLetterGrade = "C-";
    else if (currentStudentGrade >= 67)
        currentStudentLetterGrade = "D+";
    else if (currentStudentGrade >= 63)
        currentStudentLetterGrade = "D";
    else if (currentStudentGrade >= 60)
        currentStudentLetterGrade = "D-";
    else
        currentStudentLetterGrade = "F";

    // Student         Grade
    // Sophia:         92.2    A-
    
    Console.WriteLine($"{currentStudent}\t\t{currentStudentGrade}\t{currentStudentLetterGrade}");
}

// required for running in VS Code (keeps the Output windows open to view results)
Console.WriteLine("\n\rPress the Enter key to continue");
Console.ReadLine();
``` 



```cs 
// initialize variables - graded assignments 
int currentAssignments = 5;

int[] sophiaScores = new int[] { 90, 86, 87, 98, 100 };
int[] andrewScores = new int[] { 92, 89, 81, 96, 90 };
int[] emmaScores = new int[] { 90, 85, 87, 98, 68 };
int[] loganScores = new int[] { 90, 95, 87, 88, 96 };

int sophiaSum = 0; 
``` 



### ontinuation Of previous Exercise: Including Extra credit Score
```cs 
/* 
This C# console application is designed to:
- Use arrays to store student names and assignment scores.
- Use a `foreach` statement to iterate through the student names as an outer program loop.
- Use an `if` statement within the outer loop to identify the current student name and access that student's assignment scores.
- Use a `foreach` statement within the outer loop to iterate though the assignment scores array and sum the values.
- Use an algorithm within the outer loop to calculate the average exam score for each student.
- Use an `if-elseif-else` construct within the outer loop to evaluate the average exam score and assign a letter grade automatically.
- Integrate extra credit scores when calculating the student's final score and letter grade as follows:
    - detects extra credit assignments based on the number of elements in the student's scores array.
    - divides the values of extra credit assignments by 10 before adding extra credit scores to the sum of exam scores.
- use the following report format to report student grades: 

Student         Exam Score      Overall Grade   Extra Credit

Sophia          92.2            95.88   A       92 (3.68 pts)

*/
int examAssignments = 5;

string[] studentNames = new string[] { "Sophia", "Andrew", "Emma", "Logan" };

int[] sophiaScores = new int[] { 90, 86, 87, 98, 100, 94, 90 };
int[] andrewScores = new int[] { 92, 89, 81, 96, 90, 89 };
int[] emmaScores = new int[] { 90, 85, 87, 98, 68, 89, 89, 89 };
int[] loganScores = new int[] { 90, 95, 87, 88, 96, 96 };

int[] studentScores = new int[10];

string currentStudentLetterGrade = "";

// display the header row for scores/grades
Console.Clear();
Console.WriteLine("Student\t\tExam Score\tOverall Grade\tExtra Credit\n");

/*
The outer foreach loop is used to:
- iterate through student names 
- assign a student's grades to the studentScores array
- calculate exam and extra credit sums (inner foreach loop)
- calculate numeric and letter grade
- write the score report information
*/
foreach (string name in studentNames)
{
    string currentStudent = name;

    if (currentStudent == "Sophia")
        studentScores = sophiaScores;

    else if (currentStudent == "Andrew")
        studentScores = andrewScores;

    else if (currentStudent == "Emma")
        studentScores = emmaScores;

    else if (currentStudent == "Logan")
        studentScores = loganScores;

    int gradedAssignments = 0;
    int gradedExtraCreditAssignments = 0;

    int sumExamScores = 0;
    int sumExtraCreditScores = 0;

    decimal currentStudentGrade = 0;
    decimal currentStudentExamScore = 0;
    decimal currentStudentExtraCreditScore = 0;

    /* 
    the inner foreach loop: 
    - sums the exam and extra credit scores
    - counts the extra credit assignments
    */
    foreach (int score in studentScores)
    {
        gradedAssignments += 1;

        if (gradedAssignments <= examAssignments)
        {
            sumExamScores = sumExamScores + score;
        }

        else
        {
            gradedExtraCreditAssignments += 1;
            sumExtraCreditScores += score;
        }
    }

    currentStudentExamScore = (decimal)(sumExamScores) / examAssignments;
    currentStudentExtraCreditScore = (decimal)(sumExtraCreditScores) / gradedExtraCreditAssignments;

    currentStudentGrade = (decimal)((decimal)sumExamScores + ((decimal)sumExtraCreditScores / 10)) / examAssignments;

    if (currentStudentGrade >= 97)
        currentStudentLetterGrade = "A+";

    else if (currentStudentGrade >= 93)
        currentStudentLetterGrade = "A";

    else if (currentStudentGrade >= 90)
        currentStudentLetterGrade = "A-";

    else if (currentStudentGrade >= 87)
        currentStudentLetterGrade = "B+";

    else if (currentStudentGrade >= 83)
        currentStudentLetterGrade = "B";

    else if (currentStudentGrade >= 80)
        currentStudentLetterGrade = "B-";

    else if (currentStudentGrade >= 77)
        currentStudentLetterGrade = "C+";

    else if (currentStudentGrade >= 73)
        currentStudentLetterGrade = "C";

    else if (currentStudentGrade >= 70)
        currentStudentLetterGrade = "C-";

    else if (currentStudentGrade >= 67)
        currentStudentLetterGrade = "D+";

    else if (currentStudentGrade >= 63)
        currentStudentLetterGrade = "D";

    else if (currentStudentGrade >= 60)
        currentStudentLetterGrade = "D-";

    else
        currentStudentLetterGrade = "F";


    // Student         Exam Score      Overall Grade   Extra Credit
    // Sophia          92.2            95.88   A       92 (3.68 pts)

    Console.WriteLine($"{currentStudent}\t\t{currentStudentExamScore}\t\t{currentStudentGrade}\t{currentStudentLetterGrade}\t{currentStudentExtraCreditScore} ({(((decimal)sumExtraCreditScores / 10) / examAssignments)} pts)");
}

// required for running in VS Code (keeps the Output windows open to view results)
Console.WriteLine("\n\rPress the Enter key to continue");
Console.ReadLine();
```


## Add Logic to C# Console Applications 

### Evaluate Boolean expressions to make decisions in C# 
#### Evaluate an expression

What is an expression?
An expression is any combination of values (literal or variable), operators, and methods that return a single value. A statement is a complete instruction in C#, and statements are comprised of one or more expressions. For example, the following if statement contains a single expression that returns a single value:

```cs 
if (myName == "Luiz")
``` 

Developers refer to this type of expression as a Boolean expression. When your code includes a Boolean expression, return value is always a single true or false value.

#### Evaluating equality and inequality 
- equality operator `==`
- inequality operator `!=`


#### Evaluating comparisons
When working with numeric data types, you may want to determine if a value is larger or smaller than another value. Use the following operators to perform these types of comparisons:

- Greater than >
- Less than <
- Greater than or equal to >=
- Less than or equal to <=

Naturally, the == and != operators that you used to compare string values above will also work when comparing numeric data types.


```cs 
Console.WriteLine(1 > 2);
Console.WriteLine(1 < 2);
Console.WriteLine(1 >= 1);
Console.WriteLine(1 <= 1);
``` 

You should see the following output:
Output
False
True
True
True


#### Methods that return a Boolean value
Some methods return a Boolean value (true or false). In the following exercise, you'll use a built-in method of the String class to determine whether or not a larger string contains a specific word or phrase that's significant to your application.

 Note

> Some data types have methods that perform helpful utility tasks. The String data type has many of these. Several return a Boolean value including `Contains()`, `StartsWith()`, and `EndsWith()`. You can learn more about them in the Microsoft Learn module "Manipulate alphanumeric data using String class methods in C#".

```cs 
string pangram = "The quick brown fox jumps over the lazy dog.";
Console.WriteLine(pangram.Contains("fox"));
Console.WriteLine(pangram.Contains("cow"));
```
You should see the following output.

Output
True
False


#### What is logical negation?
The term "Logical Negation" refers to the ! operator. Some people call this operator the "not operator". When you place the ! operator before a conditional expression (or any code that's evaluated to either true or false), it forces your code to ensure that the expression is false.
```cs
string pangram = "The quick brown fox jumps over the lazy dog.";
Console.WriteLine(!pangram.Contains("fox"));
Console.WriteLine(!pangram.Contains("cow"));
```

#### Implement the conditional operator (aka Ternary Operator)
**What is the conditional operator?**
The conditional operator, also known as the ternary operator, is a shorthand way of writing a simple if-else statement in C#. It evaluates a Boolean expression and returns one of two results based on whether the expression is true or false.

Basic form of the conditional operator:
```cs
<evaluate this condition> ? <if condition is true, return this value> : <if condition is false, return this value>
``` 

Example of using the conditional operator:
```cs 
int saleAmount = 1001;
int discount = saleAmount > 1000 ? 100 : 50;
Console.WriteLine($"Discount: {discount}");
``` 

This code snippet calculates the discount amount for a purchase based on the purchase amount. If the purchase amount is greater than $1000, the discount is $100; otherwise, the discount is $50.


#### Review the solution to the conditional operator challenge activity
The following code is one possible solution for the challenge from the previous unit.

```cs 
Random coin = new Random();
int flip = coin.Next(0, 2);
Console.WriteLine((flip == 0) ? "heads" : "tails");
```
This code is merely "one possible solution". You could have eliminated the temporary variable flip by calling the Next() inside of the Boolean expression like so:

```cs 
Random coin = new Random();
Console.WriteLine((coin.Next(0, 2) == 0) ? "heads" : "tails");
``` 
However, this code is packed densely and it might be more difficult to understand what the code is doing.



#### Solution to the Boolean expressions challenge 

```cs 
string permission = "Admin|Manager";
int level = 53;

if (permission.Contains("Admin"))
{
    if (level > 55)
    {
        Console.WriteLine("Welcome, Super Admin user.");
    }
    else
    {
        Console.WriteLine("Welcome, Admin user.");
    }
}
else if (permission.Contains("Manager"))
{
    if (level >= 20)
    {
        Console.WriteLine("Contact an Admin for access.");
    }
    else
    {
        Console.WriteLine("You do not have sufficient privileges.");
    }
}
else
{
    Console.WriteLine("You do not have sufficient privileges.");
}
```



### Control variable scope and logic using code blocks in C# 
**Selection and iteration statements:**
- Code blocks are used to group together code lines for execution, skipping, or iteration.
- Code blocks can also control or limit variable accessibility.
Variable scope refers to the portion of an application where a variable is accessible.

**Variable scope issues:**
- Reusing variable names in different parts of an application can lead to unexpected results and errors.
- Declaring variables inside and outside code blocks can affect their accessibility.


#### Code blocks and variable scope
Variable Scope

Variable scope refers to the portion of an application where a variable is accessible. A variable declared inside of a code block is only accessible inside of that code block. If you attempt to access the variable outside of the code block, you'll get a compiler error.

For example, consider the following code:
```cs 
int value = 10;

if (true)
{
    int value = 20;
    Console.WriteLine(value); // This will print 20
}

Console.WriteLine(value); // This will print 10
``` 

In this code, the variable value is declared outside of the if statement's code block. This means that it is accessible throughout the entire program. However, the variable value is also declared inside of the if statement's code block. This means that it is only accessible inside of the if statement's code block. 


#### Code Blocks

Code blocks are groups of statements that are treated as a single unit. Code blocks are typically used to group statements that are related to each other, such as the statements inside of an if statement or a for loop.

Code blocks are also used to control the scope of variables. As we saw in the previous example, a variable declared inside of a code block is only accessible inside of that code block.

Moving Variables Outside of Code Blocks

If you want to access a variable from both inside and outside of a code block, you will need to move the variable declaration outside of the code block. For example, consider the following code: 

```cs 
int value;

if (true)
{
    value = 20;
    Console.WriteLine(value); // This will print 20
}

Console.WriteLine(value); // This will print 20
```


```cs 
bool flag = true;
if (flag)
{
    int value = 10;
    Console.WriteLine("Inside of code block: " + value);
}
Console.WriteLine($"Outside of code block: {value}"); 
``` 
Output: 
error CS0103: The name 'value' does not exist in the current context



```cs 
bool flag = true;
int value;

if (flag)
{
    value = 10;
    Console.WriteLine("Inside of code block: " + value);
}
Console.WriteLine($"Outside of code block: {value}"); 
``` 
Output: 
error CS0165: Use of unassigned local variable 'value'


```cs
bool flag = true;
int value = 0;

if (flag)
{
    value = 10;
    Console.WriteLine("Inside of code block: " + value);
}
Console.WriteLine("Outside of code block: " + value);
``` 

OUTPUT
Inside of code block: 10
Outside of code block: 10 



#### Remove code blocks from if statements 
Only apply the phrase "less is more" in the development process when it makes your code more readable and understandable.

If a code block needs only one line of code, chances are you don't need to define a formal code block using curly braces. Although technically you don't even need to separate your code into multiple lines, combining statements on a single line can make your code hard to read. 

In C#, it is generally considered acceptable to remove curly braces from code blocks that contain only a single line of code. This can make the code more concise and easier to read, especially for simple if statements. However, there are some cases where it is better to keep the curly braces for readability purposes.

Here are some guidelines for removing curly braces from single-line code blocks in if statements:

- **Only remove curly braces if it improves code readability.** If the code is already easy to read with the curly braces, there is no need to remove them.
- **Be consistent with curly brace usage.** If you remove curly braces from one if statement, you should remove them from all if statements that contain only a single line of code.
- **Add a line break after the if statement if the code is dense.** If the code is difficult to read because there are no line breaks, adding a line break after the if statement can improve readability.
Here is an example of how to remove curly braces from a single-line code block in an if statement:

```cs
bool flag = true;

if (flag)
    Console.WriteLine(flag);
``` 


Here is an example of how to add a line break after an if statement to improve readability:

```cs 
string name = "steve";

if (name == "bob")
    Console.WriteLine("Found Bob");
else
 
if (name == "steve")
    Console.WriteLine("Found Steve");
else
    Console.WriteLine("Found Chuck"); 
```



#### Branch the flow of code using the switch-case construct in C#
A switch statement is a control flow structure that allows you to execute a block of code based on the value of a variable or expression. It is a more concise and readable alternative to an if-elseif-else construct when you have a variable that can take on multiple values.

Here is the basic syntax of a switch statement:

```cs 
switch (expression)
{
    case value1:
        // Code to execute if expression equals value1
        break;
    case value2:
        // Code to execute if expression equals value2
        break;
    // ...
    default:
        // Code to execute if expression does not equal any of the values
}
``` 

 

They are more concise, readable, and maintainable than if-elseif-else constructs. When you have a variable or expression that can take on multiple values, you should consider using a switch statement to implement your branching logic. 


**Benefits of Using Switch Statements**
There are several benefits to using switch statements over if-elseif-else constructs:

- Switch statements are more concise and readable. This is because you do not have to write multiple if statements and else clauses.
- Switch statements are easier to maintain. This is because you can easily add or remove case blocks without having to modify the rest of the code.
- Switch statements are more expressive. This is because they make it clear which code will be executed for each value of the expression.



#### How Switch works 
default is optional.
```cs 
switch (fruit)
{
    case "apple":
        Console.WriteLine($"App will display information for apple.");
        break;

    case "banana":
        Console.WriteLine($"App will display information for banana.");
        break;

    case "cherry":
        Console.WriteLine($"App will display information for cherry.");
        break;
} 
``` 


```cs 
int employeeLevel = 200;
string employeeName = "John Smith";

string title = "";

switch (employeeLevel)
{
    case 100:
        title = "Junior Associate";
        break;
    case 200:
        title = "Senior Associate";
        break;
    case 300:
        title = "Manager";
        break;
    case 400:
        title = "Senior Manager";
        break;
    default:
        title = "Associate";
        break;
}

Console.WriteLine($"{employeeName}, {title}"); 
``` 


> The break keyword tells the runtime to stop evaluating case patterns and prevents execution of other cases in the switch Construct. 


> The default keyword acts as the matching value when none of the supplied values is a match. 


#### Solution to Exercise 
```cs 
// SKU = Stock Keeping Unit
string sku = "01-MN-L";

string[] product = sku.Split('-');

string type = "";
string color = "";
string size = "";

switch (product[0])
{
    case "01":
        type = "Sweat shirt";
        break;
    case "02":
        type = "T-Shirt";
        break;
    case "03":
        type = "Sweat pants";
        break;
    default:
        type = "Other";
        break;
}

switch (product[1])
{
    case "BL":
        color = "Black";
        break;
    case "MN":
        color = "Maroon";
        break;
    default:
        color = "White";
        break;
}

switch (product[2])
{
    case "S":
        size = "Small";
        break;
    case "M":
        size = "Medium";
        break;
    case "L":
        size = "Large";
        break;
    default:
        size = "One Size Fits All";
        break;
}

Console.WriteLine($"Product: {size} {color} {type}"); 
``` 


### Iterate Through a Code Block Using the for Statement in C# 

#### Create and configure for iteration loops 
A for statement is a control flow structure that allows you to execute a block of code a specific number of times. It is a more concise and readable alternative to an if-elseif-else construct when you know the number of times you need to iterate through a block of code.

Here is the basic syntax of a for statement:
```cs 
for (initialization; condition; iterator)
{
    // Code to execute
}
``` 

The for keyword is followed by three parts, separated by semicolons:

- **Initialization**: This part initializes the loop variable.
- **Condition**: This part specifies the condition that determines whether the loop should continue iterating.
- **Iterator**: This part specifies what happens after each iteration.

The code block enclosed in curly braces is executed for each iteration of the loop. The loop continues iterating as long as the condition is true.

Example
The following code snippet iterates through the numbers from 0 to 9 and prints each number to the console:
```cs 
for (int i = 0; i < 10; i++)
{
    Console.WriteLine(i);
}
```  

##### Common Uses for For Statements

For statements are commonly used to iterate through arrays and collections. For example, the following code snippet iterates through an array of strings and prints each string to the console:

```cs 
string[] names = { "John", "Jane", "Peter", "Mary" };

for (int i = 0; i < names.Length; i++)
{
    Console.WriteLine(names[i]);
}
``` 


```cs 
string[] names = { "Alex", "Eddie", "David", "Michael" };
for (int i = names.Length - 1; i >= 0; i--)
{
    Console.WriteLine(names[i]);
}
```

For statements can also be used to iterate through a range of numbers. For example, the following code snippet iterates through the numbers from 1 to 10 and prints the square of each number to the console:

```cs 
for (int i = 1; i <= 10; i++)
{
    Console.WriteLine(i * i);
}
``` 

#### Use the break keyword to break the iteration statement
What if we need to exit the iteration statement prematurely based on some condition? We can use the break keyword.

Use the Visual Studio Code Editor to update your code as follows:

```cs 
for (int i = 0; i < 10; i++)
{
    Console.WriteLine(i);
    if (i == 7) break;
}
``` 


####  Iterate Through a Code Block Using the for Statemernt in C#
##### Loop through each element of an array 
```cs 
string[] names = { "Alex", "Eddie", "David", "Michael" };
for (int i = names.Length - 1; i >= 0; i--)
{
    Console.WriteLine(names[i]);
} 
```  

##### Examine the limitation of the foreach statement 
```cs 
string[] names = { "Alex", "Eddie", "David", "Michael" };
foreach (var name in names)
{
    // Can't do this:
    if (name == "David") name = "Sammy";
}
```
Output 
Cannot assign to name because it is a 'foreach iteration variable'

##### Overcoming the limitation of the foreach statement using the for statement 
```cs 
string[] names = { "Alex", "Eddie", "David", "Michael" };
for (int i = 0; i < names.Length; i++)
    if (names[i] == "David") names[i] = "Sammy";

foreach (var name in names) Console.WriteLine(name); 
``` 



### Add Looping Logic to Your Code Using the do-while and while Statements in C# 

**Introduction**
The do-while and while statements are two looping constructs in C# that allow you to execute a block of code repeatedly until a condition is met. The main difference between the two is that the do-while statement will always execute its code block at least once, even if the condition is false at the start of the loop. The while statement, on the other hand, will only execute its code block if the condition is true at the start of the loop.

**When to use each statement**
The do-while statement is a good choice when you want to make sure that a certain block of code is executed at least once, even if the condition is false at the start of the loop. For example, you might use a do-while loop to accept user input until the user enters a valid value.

The while statement is a good choice when you don't know how many times you need to execute a block of code. For example, you might use a while loop to continue generating random numbers until you get a number that is greater than 100.

**Using the continue statement**
The continue statement is a keyword that can be used to skip the rest of the code in a loop and go directly to the next iteration. For example, you might use the continue statement to skip over an iteration of a loop if the current value of a variable is not what you're looking for.

> The continue statement is used to skip the rest of the code in a loop and go directly to the next iteration.



#### Task 1: 
Write a do-while loop that generates random numbers between 1 and 10 until it generates the number 7

Code:

```cs 
Random random = new Random();
int current = 0;

do
{
    current = random.Next(1, 11);
    Console.WriteLine(current);
} while (current != 7);
```
Use code with caution. Learn more 

Result:
2
5
8
2
7


Task 2: Write a while loop that iterates only while a random number is greater than or equal to 3

```cs 
Random random = new Random();
int current = random.Next(1, 11);

while (current >= 3)
{
    Console.WriteLine(current);
    current = random.Next(1, 11);
}
Console.WriteLine($"Last number: {current}"); 
``` 

Result:
5
1
6
7
Last number: 2



#### Task 3: 
Use the continue statement to skip over iterations of a do-while loop where the current value is greater than or equal to 8

Code:
```cs 
Random random = new Random();
int current = random.Next(1, 11);

do
{
    current = random.Next(1, 11);
    if (current >= 8) continue;
    Console.WriteLine(current);
} while (current != 7);
``` 

Result:

5
1
6
7




#### Exercise - Complete a challenge activity using do and while iteration statements 

```cs 
int hero = 10;
int monster = 10;

Random dice = new Random();

do
{
    int roll = dice.Next(1, 11);
    monster -= roll;
    Console.WriteLine($"Monster was damaged and lost {roll} health and now has {monster} health.");

    if (monster <= 0) continue;

    roll = dice.Next(1, 11);
    hero -= roll;
    Console.WriteLine($"Hero was damaged and lost {roll} health and now has {hero} health.");

} while (hero > 0 && monster > 0);

Console.WriteLine(hero > monster ? "Hero wins!" : "Monster wins!"); 
``` 


As you have seen, C# supports four types of iteration statements: for, foreach, do-while, and while. Microsoft's language reference documentation describes these statements as follows:

The for statement: executes its body while a specified Boolean expression (the 'condition') evaluates to true.
The foreach statement: enumerates the elements of a collection and executes its body for each element of the collection.
The do-while statement: conditionally executes its body one or more times.
The while statement: conditionally executes its body zero or more times. 


#### Manage user input during this challenge
When using a Console.ReadLine() statement to obtain user input, it's common practice to use a nullable type string (designated string?) for the input variable and then evaluate the value entered by the user. The following code sample uses a nullable type string to capture user input. The iteration continues while the user-supplied value is null:

```cs 
string? readResult;
Console.WriteLine("Enter a string:");
do
{
    readResult = Console.ReadLine();
} while (readResult == null);
``` 

> It's common practice to use a nullable type string (designated string?) for the input variable and then evaluate the value entered by the user. 


```cs 
string? readResult;
bool validEntry = false;
Console.WriteLine("Enter a string containing at least three characters:");
do
{
    readResult = Console.ReadLine();
    if (readResult != null)
    {
        if (readResult.Length >= 3)
        {
            validEntry = true;
        }
        else
        {
            Console.WriteLine("Your input is invalid, please try again.");
        }
    }
} while (validEntry == false); 
``` 

#### int.TryParse()
The `int.TryParse()` method can be used to convert a string value to an integer. The method uses two parameters, a string that will be evaluated and the name of an integer variable that will be assigned a value. The method returns a Boolean value. The following code sample demonstrates using the `int.TryParse()` method:

```cs 
// capture user input in a string variable named readResult

int numericValue = 0;
bool validNumber = false;

validNumber = int.TryParse(readResult, out numericValue); 
``` 

If the string value assigned to readResult represents a valid integer, the value will be assigned to the integer variable named numericValue, and true will be assigned to the Boolean variable named validNumber. If the value assigned to readResult doesn't represent a valid integer, validNumber will be assigned a value of false. For example, if readResult is equal to "7", the value 7 will be assigned to numericValue. 


Here is a table summarizing the key differences between int.Parse() and int.TryParse():

| Feature |	int.Parse()	| int.TryParse() |
| :--- | :--- |:--- | 
| Behavior | if string cannot be converted to integer	Throws an exception	| Returns a false value |
| Robustness |	Less robust |	More robust |
| Recommended | usage	Use only if you are sure the string can be converted to an integer	| Use in most cases | 



#### How to remove characters from a string using Remove() in C#
Removing characters in C# can be done through the Remove() method. It removes characters in a string and returns a new string without the removed characters.

If a length is not specified, it removes all the characters from the beginning index until the end.  

**syntax**
```cs 
str.Remove(index)
or
str.Remove(index, length)
``` 

**parameters**
str: This is the string that calls the Remove() method.

index: This is the index position of characters to start deletion from. It is an integer value.

length: This is the length of characters to delete. 


**Return value**
The value returned is a new string without the removed characters.



#### Substring() Method 
Substring() is a string method. It is used to retrieve a substring from the current instance of the string. This method can be overloaded by passing the different number of parameters to it as follows:

```cs 
String.Substring(Int32) Method
String.Substring(Int32, Int32) Method
String.Substring Method (startIndex)
``` 

This method is used to retrieves a substring from the current instance of the string. The parameter “startIndex” will specify the starting position of substring and then substring will continue to the end of the string. 

Input : str  = "GeeksForGeeks"
        str.Substring(5);
Output: ForGeeks

Input : str  = "GeeksForGeeks"
        str.Substring(8);
Output: Geeks 



#### Project 1 code 

```cs 
string? readResult;
string valueEntered = "";
int numValue = 0;
bool validNumber = false;

Console.WriteLine("Enter an integer value between 5 and 10");

do
{
    readResult = Console.ReadLine();
    if (readResult != null) 
    {
        valueEntered = readResult;
    }

    validNumber = int.TryParse(valueEntered, out numValue);

    if (validNumber == true)
    {
        if (numValue <= 5 || numValue >= 10)
        {
            validNumber = false;
            Console.WriteLine($"You entered {numValue}. Please enter a number between 5 and 10.");
        }
    }
    else 
    {
        Console.WriteLine("Sorry, you entered an invalid number, please try again");
    }
} while (validNumber == false);

Console.WriteLine($"Your input value ({numValue}) has been accepted.");

readResult = Console.ReadLine(); 
``` 

#### Project 2 code

```cs 
string? readResult;
string roleName = "";
bool validEntry = false;

do
{                
    Console.WriteLine("Enter your role name (Administrator, Manager, or User)");
    readResult = Console.ReadLine();
    if (readResult != null) 
    {
        roleName = readResult.Trim();
    }

    if (roleName.ToLower() == "administrator" || roleName.ToLower() == "manager" || roleName.ToLower() == "user") 
    {
        validEntry = true;
    }
    else
    {
        Console.Write($"The role name that you entered, \"{roleName}\" is not valid. ");
    }

} while (validEntry == false);

Console.WriteLine($"Your input value ({roleName}) has been accepted.");
readResult = Console.ReadLine(); 
``` 


#### Project 3 code 
```cs 
string[] myStrings = new string[2] { "I like pizza. I like roast chicken. I like salad", "I like all three of the menu choices" };
int stringsCount = myStrings.Length;

string myString = "";
int periodLocation = 0;

for (int i = 0; i < stringsCount; i++)
{
    myString = myStrings[i];
    periodLocation = myString.IndexOf(".");

    string mySentence;

    // extract sentences from each string and display them one at a time
    while (periodLocation != -1)
    {

        // first sentence is the string value to the left of the period location
        mySentence = myString.Remove(periodLocation);

        // the remainder of myString is the string value to the right of the location
        myString = myString.Substring(periodLocation + 1);

        // remove any leading white-space from myString
        myString = myString.TrimStart();

        // update the comma location and increment the counter
        periodLocation = myString.IndexOf(".");

        Console.WriteLine(mySentence);
    }
 
    mySentence = myString.Trim();
    Console.WriteLine(mySentence);
} 
``` 



#### Knowledge Check 
1. A developer needs to iterate through an array of items. The number of items in the array is unknown. The code inside the iteration code block examines each item sequentially to select an item that matches specified criteria. The index number of the selected array element is not important. The selected item is referenced multiple times within the code block. Which type of iteration statement is best suited for this scenario? 

Answer: foreach

Correct! It's possible to use any of these iteration types for the conditions described, but a foreach is best suited for this scenario. The foreach is easy to implement when the number of array elements is unknown. The foreach is a good choice when the index number of the selected array element isn't important. The foreach might run faster when the selected item is used multiple times within the code block. 


2. A developer needs to capture a list of items from the user. The user will enter the keyboard combination ctrl + Esc to exit. Which is the best iteration statement for this purpose? 

Answer: do-while

Correct! The do-while will allow the code to check each entry by the user until they enter the special keyboard combination to exit. 





### Add Looping Logic to Your Code Using the do-while and while Statements in C# 

```cs 
using System;
using System.IO;

// the ourAnimals array will store the following: 
string animalSpecies = "";
string animalID = "";
string animalAge = "";
string animalPhysicalDescription = "";
string animalPersonalityDescription = "";
string animalNickname = "";

// variables that support data entry
int maxPets = 8;
string? readResult;
string menuSelection = "";
int petCount = 0;
string anotherPet = "y";
bool validEntry = false;
int petAge = 0;

// array used to store runtime data, there is no persisted data
string[,] ourAnimals = new string[maxPets, 6];

// create some initial ourAnimals array entries
for (int i = 0; i < maxPets; i++)
{
    switch (i)
    {
        case 0:
            animalSpecies = "dog";
            animalID = "d1";
            animalAge = "2";
            animalPhysicalDescription = "medium sized cream colored female golden retriever weighing about 65 pounds. housebroken.";
            animalPersonalityDescription = "loves to have her belly rubbed and likes to chase her tail. gives lots of kisses.";
            animalNickname = "lola";
            break;

        case 1:
            animalSpecies = "dog";
            animalID = "d2";
            animalAge = "9";
            animalPhysicalDescription = "large reddish-brown male golden retriever weighing about 85 pounds. housebroken.";
            animalPersonalityDescription = "loves to have his ears rubbed when he greets you at the door, or at any time! loves to lean-in and give doggy hugs.";
            animalNickname = "loki";
            break;

        case 2:
            animalSpecies = "cat";
            animalID = "c3";
            animalAge = "1";
            animalPhysicalDescription = "small white female weighing about 8 pounds. litter box trained.";
            animalPersonalityDescription = "friendly";
            animalNickname = "Puss";
            break;

        case 3:
            animalSpecies = "cat";
            animalID = "c4";
            animalAge = "?";
            animalPhysicalDescription = "";
            animalPersonalityDescription = "";
            animalNickname = "";

            break;

        default:
            animalSpecies = "";
            animalID = "";
            animalAge = "";
            animalPhysicalDescription = "";
            animalPersonalityDescription = "";
            animalNickname = "";
            break;

    }

    ourAnimals[i, 0] = "ID #: " + animalID;
    ourAnimals[i, 1] = "Species: " + animalSpecies;
    ourAnimals[i, 2] = "Age: " + animalAge;
    ourAnimals[i, 3] = "Nickname: " + animalNickname;
    ourAnimals[i, 4] = "Physical description: " + animalPhysicalDescription;
    ourAnimals[i, 5] = "Personality: " + animalPersonalityDescription;
}

// display the top-level menu options
do
{
    Console.Clear();

    Console.WriteLine("Welcome to the Contoso PetFriends app. Your main menu options are:");
    Console.WriteLine(" 1. List all of our current pet information");
    Console.WriteLine(" 2. Add a new animal friend to the ourAnimals array");
    Console.WriteLine(" 3. Ensure animal ages and physical descriptions are complete");
    Console.WriteLine(" 4. Ensure animal nicknames and personality descriptions are complete");
    Console.WriteLine(" 5. Edit an animal’s age");
    Console.WriteLine(" 6. Edit an animal’s personality description");
    Console.WriteLine(" 7. Display all cats with a specified characteristic");
    Console.WriteLine(" 8. Display all dogs with a specified characteristic");
    Console.WriteLine();
    Console.WriteLine("Enter your selection number (or type Exit to exit the program)");

    readResult = Console.ReadLine();
    if (readResult != null)
    {
        menuSelection = readResult.ToLower();
        // NOTE: We could put a do statement around the menuSelection entry to ensure a valid entry, but we
        //  use a conditional statement below that only processes the valid entry values, so the do statement 
        //  is not required here. 
    }

    // use switch-case to process the selected menu option
    switch (menuSelection)
    {
        case "1":
            // List all of our current pet information
            for (int i = 0; i < maxPets; i++)
            {
                if (ourAnimals[i, 0] != "ID #: ")
                {
                    Console.WriteLine();
                    for (int j = 0; j < 6; j++)
                    {
                        Console.WriteLine(ourAnimals[i, j].ToString());
                    }
                }
            }
            Console.WriteLine("\n\rPress the Enter key to continue");
            readResult = Console.ReadLine();

            break;

        case "2":
            // Add a new animal friend to the ourAnimals array
            //
            // The ourAnimals array contains
            //    1. the species (cat or dog). a required field
            //    2. the ID number - for example C17
            //    3. the pet's age. can be blank at initial entry.
            //    4. the pet's nickname. can be blank.
            //    5. a description of the pet's physical appearance. can be blank.
            //    6. a description of the pet's personality. can be blank.

            anotherPet = "y";
            petCount = 0;
            for (int i = 0; i < maxPets; i++)
            {
                if (ourAnimals[i, 0] != "ID #: ")
                {
                    petCount += 1;
                }
            }

            if (petCount < maxPets)
            {
                Console.WriteLine($"We currently have {petCount} pets that need homes. We can manage {(maxPets - petCount)} more.");
            }

            while (anotherPet == "y" && petCount < maxPets)
            {
                // get species (cat or dog) - string animalSpecies is a required field 
                do
                {
                    Console.WriteLine("\n\rEnter 'dog' or 'cat' to begin a new entry");
                    readResult = Console.ReadLine();
                    if (readResult != null)
                    {
                        animalSpecies = readResult.ToLower();
                        if (animalSpecies != "dog" && animalSpecies != "cat")
                        {
                            //Console.WriteLine($"You entered: {animalSpecies}.");
                            validEntry = false;
                        }
                        else
                        {
                            validEntry = true;
                        }
                    }
                } while (validEntry == false);

                // build the animal the ID number - for example C1, C2, D3 (for Cat 1, Cat 2, Dog 3)
                animalID = animalSpecies.Substring(0, 1) + (petCount + 1).ToString();

                // get the pet's age. can be ? at initial entry.
                do
                {
                    Console.WriteLine("Enter the pet's age or enter ? if unknown");
                    readResult = Console.ReadLine();
                    if (readResult != null)
                    {
                        animalAge = readResult;
                        if (animalAge != "?")
                        {
                            validEntry = int.TryParse(animalAge, out petAge);
                        }
                        else
                        {
                            validEntry = true;
                        }                        
                    }
                } while (validEntry == false);


                // get a description of the pet's physical appearance - animalPhysicalDescription can be blank.
                do
                {
                    Console.WriteLine("Enter a physical description of the pet (size, color, gender, weight, housebroken)");
                    readResult = Console.ReadLine();
                    if (readResult != null)
                    {
                        animalPhysicalDescription = readResult.ToLower();
                        if (animalPhysicalDescription == "")
                        {
                            animalPhysicalDescription = "tbd";
                        }
                    }
                } while (validEntry == false);


                // get a description of the pet's personality - animalPersonalityDescription can be blank.
                do
                {
                    Console.WriteLine("Enter a description of the pet's personality (likes or dislikes, tricks, energy level)");
                    readResult = Console.ReadLine();
                    if (readResult != null)
                    {
                        animalPersonalityDescription = readResult.ToLower();
                        if (animalPersonalityDescription == "")
                        {
                            animalPersonalityDescription = "tbd";
                        }
                    }
                } while (validEntry == false);


                // get the pet's nickname. animalNickname can be blank.
                do
                {
                    Console.WriteLine("Enter a nickname for the pet");
                    readResult = Console.ReadLine();
                    if (readResult != null)
                    {
                        animalNickname = readResult.ToLower();
                        if (animalNickname == "")
                        {
                            animalNickname = "tbd";
                        }
                    }
                } while (validEntry == false);

                // store the pet information in the ourAnimals array (zero based)
                ourAnimals[petCount, 0] = "ID #: " + animalID;
                ourAnimals[petCount, 1] = "Species: " + animalSpecies;
                ourAnimals[petCount, 2] = "Age: " + animalAge;
                ourAnimals[petCount, 3] = "Nickname: " + animalNickname;
                ourAnimals[petCount, 4] = "Physical description: " + animalPhysicalDescription;
                ourAnimals[petCount, 5] = "Personality: " + animalPersonalityDescription;

                // increment petCount (the array is zero-based, so we increment the counter after adding to the array)
                petCount = petCount + 1;

                // check maxPet limit
                if (petCount < maxPets)
                {
                    // another pet?
                    Console.WriteLine("Do you want to enter info for another pet (y/n)");
                    do
                    {
                        readResult = Console.ReadLine();
                        if (readResult != null)
                        {
                            anotherPet = readResult.ToLower();
                        }

                    } while (anotherPet != "y" && anotherPet != "n");
                }
                //NOTE: The value of anotherPet (either "y" or "n") is evaluated in the while statement expression - at the top of the while loop
            }

            if (petCount >= maxPets)
            {
                Console.WriteLine("We have reached our limit on the number of pets that we can manage.");
                Console.WriteLine("Press the Enter key to continue.");
                readResult = Console.ReadLine();
            }

            break;

        case "3":
            // Ensure animal ages and physical descriptions are complete
            //
            //    ourAnimals[i, 2] = "Age: " + animalAge;
            //    ourAnimals[i, 4] = "Physical description: " + animalPhysicalDescription;

            for (int i = 0; i < maxPets; i++)
            {
                if (ourAnimals[i, 2] == "Age: ?" && ourAnimals[i, 0] != "ID #: ")
                {
                    do
                    {
                        Console.WriteLine($"Enter an age for {ourAnimals[i, 0]}");
                        readResult = Console.ReadLine();
                        if (readResult != null)
                        {
                            animalAge = readResult;
                            validEntry = int.TryParse(animalAge, out petAge);
                        }
                    } while (validEntry == false);
                    ourAnimals[i, 2] = "Age: " + animalAge.ToString();
                }

                if (ourAnimals[i, 4] == "Physical description: " && ourAnimals[i, 0] != "ID #: ")
                {
                    do
                    {
                        Console.WriteLine($"Enter a physical description for {ourAnimals[i, 0]} (size, color, gender, weight, housebroken)");
                        readResult = Console.ReadLine();
                        if (readResult != null)
                        {
                            animalPhysicalDescription = readResult.ToLower();
                            if (animalPhysicalDescription == "")
                            {
                                validEntry = false;
                            }
                            else
                            {
                                validEntry = true;
                            }

                        }
                    } while (validEntry == false);

                    ourAnimals[i, 4] = "Physical description: " + animalPhysicalDescription;
                }
            }
            Console.WriteLine("\n\rAge and physical description fields are complete for all of our friends. \n\rPress the Enter key to continue");
            readResult = Console.ReadLine();

            break;

        case "4":
            // Ensure animal nickname and personality descriptions are complete
            //
            //    ourAnimals[i, 3] = "Nickname: " + animalNickname;
            //    ourAnimals[i, 5] = "Personality: " + animalPersonalityDescription;

            for (int i = 0; i < maxPets; i++)
            {
                if (ourAnimals[i, 3] == "Nickname: " && ourAnimals[i, 0] != "ID #: ")
                {
                    do
                    {
                        Console.WriteLine($"Enter a nickname for {ourAnimals[i, 0]}");
                        readResult = Console.ReadLine();
                        if (readResult != null)
                        {
                            animalNickname = readResult;
                            if (animalNickname == "")
                            {
                                validEntry = false;
                            }
                            else
                            {
                                validEntry = true;
                            }

                        }

                    } while (validEntry == false);

                    ourAnimals[i, 3] = "Nickname: " + animalNickname;
                }

                if (ourAnimals[i, 5] == "Personality: " && ourAnimals[i, 0] != "ID #: ")
                {
                    do
                    {
                        //"Enter a description of the pet's personality (likes or dislikes, tricks, energy level"
                        Console.WriteLine($"Enter a personality description for {ourAnimals[i, 0]} (likes or dislikes, tricks, energy level)");
                        readResult = Console.ReadLine();
                        if (readResult != null)
                        {
                            animalPersonalityDescription = readResult.ToLower();
                            if (animalPersonalityDescription == "")
                            {
                                validEntry = false;
                            }
                            else
                            {
                                validEntry = true;
                            }
                        }
                    } while (validEntry == false);

                    ourAnimals[i, 5] = "Personality: " + animalPersonalityDescription;
                }
            }
            Console.WriteLine("\n\rAge and physical description fields are complete for all of our friends. \n\rPress the Enter key to continue");
            readResult = Console.ReadLine();

            break;

        case "5":
            // Edit an animal’s age");
            Console.WriteLine("UNDER CONSTRUCTION - please check back next month to see progress.");
            Console.WriteLine("Press the Enter key to continue.");
            readResult = Console.ReadLine();
            break;

        case "6":
            // Edit an animal’s personality description");
            Console.WriteLine("UNDER CONSTRUCTION - please check back next month to see progress.");
            Console.WriteLine("Press the Enter key to continue.");
            readResult = Console.ReadLine();
            break;
        
        case "7":
            // Display all cats with a specified characteristic
            Console.WriteLine("UNDER CONSTRUCTION - please check back next month to see progress.");
            Console.WriteLine("Press the Enter key to continue.");
            readResult = Console.ReadLine();
            break;

        case "8":
            // Display all dogs with a specified characteristic
            Console.WriteLine("UNDER CONSTRUCTION - please check back next month to see progress.");
            Console.WriteLine("Press the Enter key to continue.");
            readResult = Console.ReadLine();
            break;

        default:
            break;
    }

} while (menuSelection != "exit");
``` 




### Choose the correct data type in your C# code 
#### Discover value types and reference types 
What is a data type?
A data type is a way a programming language defines how much memory to save for a value. There are many data types in the C# language to be used for many different applications and sizes of data.

**Simple value types**
Simple value types are a set of predefined types provided by C# as keywords. 

> For example, the C# keyword int is an alias of a value type defined in the .NET Class Library as System.Int32.

Simple value types include many of the data types that you may have used already like `char` and `bool`. There are also many integral and floating-point value types to represent a wide range of whole and fractional numbers. 


**Recap**
- Values are stored as bits, which are simple on / off switches. Combining enough of these switches allows you to store just about any possible value.
- There are two basic categories of data types: value and reference types. The difference is in how and where the values are stored by the computer as your program executes.
- Simple value types use a keyword alias to represent formal names of types in the .NET Library. 








