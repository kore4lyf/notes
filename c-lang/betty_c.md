# Betty style

## What is Betty style and documentation in C programming?
Betty coding style is a set of guides crafted to ensure that the code we write is well written, documented, and presented in a way that anyone can easily understand.
Betty has therefore been developed as a code checker that checks whether a code written in the C language follows the Betty styles and documentation.
This checker throws in an error any time, it finds part of the written code violating either the styles or documentation guides.

## Multiple Statements or Assignments
No two statements should be put on the same line. Each statement should be on a single line. Don't put multiple assignments on the same line.
This is wrong
```c
printf("I am checking for Betty style \n"); printf("Oops! Betty says I have some errors /n");
```
This is Correct
```c
printf("I am checking for Betty style \n"); 
printf("Bravo! You passed my test. /n");
```

## Indentation
The rules for indentation in the Betty Style are:

Never use spaces (don't click your spacebar key) for indentation.
Use the tab key for indentation.
Indent every block of code you write.
You also have to indent the nested blocks of code.
```c
int main(void)
{
     printf("Here is your block of code \n");
     printf("Can you see how I have been indented \n");
}
```
if you introduce a new block of code within this block of code then you would have to also indent that as well.
```c
{
     printf("Here is your block of code \n");
     printf("Can you see how I have been indented \n");
     if (true)
     {
           printf("I passed Betty test \n");
     }
}
```

## What is a block of code in C programming?
> There is however an exception when it comes to using switch statements. In order to prevent, double indentation in a switch statement, Betty style allows you to put the case labels on the same line without indenting them.

```c
int main(void)
{
    int var;
    var = 0;
    switch (suffix)
    {
    case 'g':
        var = 30;
        break;
    case 'm':
        var = 20;
        break;
    case 'k':
        var = 10;
    default:
        break;
    }
    return (0);
}
```

## White spaces
Avoid trailing whitespaces (one of the common errors that you are likely to come across). Trailing whitespaces are some empty space after a given statement.
Avoid using spacebar often in your code especially after you have ended a statement. Click the Enter key anytime you end a statement to avoid trailing whitespaces.

## How to use braces { } in your code
For all non-function statement blocks: if, switch, for, while, the curly brackets should start and end on the first and last line respectively.

```c
if (condition)
{
      // Your code goes here
}
else if (another condition)
{
      // Your code goes here
}
else
{
      // Your code goes here
}
```

The rule also applies to functions as well
```c
    int function(int x)
    {
        body of function
    }
```
Do not use the curly bracket when if, switch, for and while is followed by only one statement.

```c
    if (condition)
        do_this();
    else
        do_that();
```

## Placing spaces in your code
Most keywords in C language should be followed by a space with the exception of the following which look like functions: sizeof, typeof, alignof, and __attribute__.

You are supposed to add spaces after the following: if, else if, switch, case, for, while, return. Examples:



| Keyword	| Space After |	Example                  |
| :---      | :---        | :---                     |
| if        |	Yes       |	if (condition)           |
| else if	| Yes         |	else if (condition)      |
| for       | Yes         |	for (i = 0; i < 10; ++i) |
| while     | Yes         | while (conditio)         |
| return    | Yes         | return (1);              |
| sizeof    | No          |	sizeof(struct file)      |
| typeof    | No          |	typeof(variable)         |
| alignof   | No          |	alignof(variable)        |

Do not add spaces around (inside) parenthesized expressions
Don't leave a space after a bracket before writing the content of the bracket. You shouldn't also leave a space before the ending closing bracket.

Bad Example:
```c
    s = sizeof( struct file );
```
Good Example
```c
s = sizeof(struct file);
```
Add spaces around (each side of) binary and ternary operators
Any of the following operators should have a space before and after them.
```
 =  +  -  <  >  *  /  %  |  &  ^  <=  >=  ==  !=  ?  :
```

but no space after unary operators:
```
 &  *  +  -  ~  !  sizeof  typeof  alignof  __attribute__  defined ++ --
```


