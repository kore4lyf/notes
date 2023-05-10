# C Note 

## Why C programming is awesome
The programs that you write in C compile and execute
much faster than those written in other languages. This
is because it does not have garbage collection and other
such additional processing overheads. Hence, the
language is faster as compared to most other
programming languages.

- C is a widely used portable high level programming language.
- High level, but gives us control over the computer hardware.
- It is increasingly important for embedded programming 
- Many languages have a C pedigree.

## Who invented C
Dennis Ritchie
Dennis MacAlistair Ritchie (September 9, 1941 – c.
October 12, 2011) was an American computer scientist.
He ismost well-known for creating the C programming languageand, with long-time colleague Ken Thompson, the Unix operating system and B programming language.
Ritchie worked together with KenThompson, who is credited with writing the original version of Unix.


## Who are Dennis Ritchie, Brian Kernighan and Linus Torvalds
Ritchie and Ken Thompson worked on theMultics operating system at Bell Labs. Q
Brian Kernighan suggested the name"Unix", a pun on the name "Multics"

Linus Torvalds
Linus Benedict Torvalds is a Finnish-American software engineer who is the creator and, historically, the main developer of the Linux kernel, used by Linux distributions and other operating systems such as Android. He also created the distributed version control system Git.

## C Standardization
- "K & R" C (Kernighan and Ritchie)
These are compilers that are inspired by the book derived from the book that was Written by Dennis Ritchie and Brain Kernighan (The C Programming Language)
- ANSI C (aka c89 or c90)
ANSI usually refered to as the c89 or c90. It's is the most portable standard.
Most compiler will turn on ANSI mode bu using 
```c
-ansi, -std=c89
```
- c99
Its is a new version that extends the c89/90.
It contains new data types, variable length array

> gcc by default is c89, it also includes a number of c99 features to improve usability
> Use -pedantic for warning messages
> GNU c doesn't fully support (-std=c99)

## A Basic C code
```c
#include <stdio.h>
int main(void)
{
	printf("Hello World!\n");
	return 0;
}
```
Main is the entry point point of the program.
stdio.h is a header file that define the input/output routines used by the program
The program returns the integer 0 to whomever called it.

## Identifier rules
- Must begin with a letter or an underscore 
- Cannot be a reserved word
- Cannot include symbols except underscore

## Data types
- char (character):
1 byte e.g. a, b, c, 2
- int (integer): 
4 byte e.g. 
16 (decimal)
020(octal)
0x10(hex)
- float (floating point):
4 bytes e.g. 0.00225, 2.225e-3
- double (extented precision float):
8 bytes eg 3.14f

## Modifiers
- long, long long - extended on some systems
- shot - takes half spance on some systems
- signed/unsigned (int or char)

## sizeof() operator
- c/c++ define a unary operator sizeof
- Used to determine the amount of size any intrinsic type, union or struct takes in bytes.

## Type Casting
int i = 10;
f = (float) i; //assigned 10.0 to f

f = 3.14;
i = (int) f; //assigned 3 to i

## getchar()/putchar() Functions
 Reads the next character from standard input (if available).
```c
int getchar(void)
```

Writes the character c (converted to an unsigned char to standard output).
Returns the character that was written.
```c
int putchar(int c)
```

## Formatted input/output using printf() and scanf()
printf() displays formatted output to stdout

** Syntax **
```c
printf(format_str, arg1, arg2, ...);
```

** Example **
```c
printf("who %s size %d cost %5.2f", "you", 12, 1.2);
```
Result
who you sized 12 cost 1.20


scanf() reads formatted input from the standard input. 

** Syntax **
```c
scanf(format_str, &arg1, &arg2, ...);
```
Arguments are the addresses of variables that will the read values.
Format string tells scanf() how the input is formatted. 

** Example ** 
```c
char c;
int i;
scanf("%c %d", &c, &i);
```
Result
k 2  // input

```c
char f, m, l;
int age;
scanf("%c %c %c  %d", &f, &m &l, &age);
``` 
** Result **
JRE 20 //input






















