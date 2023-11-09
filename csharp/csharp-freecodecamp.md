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





