# C Note

## Function
A function is a routine that takes one or more arguments, and returns a
single value.

## Data Types
The C built-in data types are int , char , short , long , float , double ,
long double 

The char type is commonly used to store letters of the ASCII chart, but it
can be used to hold small integers from -128 to 127 . It takes at least 1 byte.

int takes at least 2 bytes. short takes at least 2 bytes. long takes at least
4 bytes.

On all Arduino boards, short stores a 2 bytes value, ranging from -32,768
to 32,767 . long store 4 bytes, ranging from -2,147,483,648 to
2,147,483,647.

unsigned char will range from 0 to at least 255
unsigned int will range from 0 to at least 65,535
unsigned short will range from 0 to at least 65,535
unsigned long will range from 0 to at least 4,294,967,295.

Overflow Problem
If you have an unsigned int number at 255, and you increment it, you'll not get
256 in return. As expected. If you have a unsigned char number at 255, and
if you increment it, you'll get 0 in return. It resets starting from the initial
possible value.
e.g 
unsigned char j = 255;


You might see floating point numbers written as
1.29e-3
 or -2.3e+5
The minimum requirements for any C implementation is that float can
represent a range between 10^-37 and 10^+37, and is typically implemented
using 32 bits. double can represent a bigger set of numbers. long double
can hold even more numbers.

sizeof(char); //1 byte
sizeof(short); //2 bytes
sizeof(int); //4 bytes
sizeof(float); //4 bytes
sizeof(long); //8 bytes
sizeof(double); //8 bytes
sizeof(longdouble); //16 bytes

## Constant
It's just a convention, but one that can greatly help you while reading or
writing a C program as it improves readability. Uppercase name means
constant, lowercase name means variable.

const int AGE = 37;

Another way to define constants is by using this syntax:

#define AGE 37



## Unary and Ternary Operators
- USING UNARY OPERATORS
int a = 2;
int b;
b = a++  /* b is 2, a is 3 */
b = ++a  /* b is 4, a is 4 */


- TERNARY OPERATOR
<condition> ? <expression> : <expression>
Example:
a ? b : c
If a is evaluated to true , then the b statement is executed, otherwise c
is.




## gcc compiler
- gcc -E cfilename -o output
runs a C file through the preprocessor and save the result into another file.


- gcc -c cfilename.c
a C file but does not link.
cfilename.c => cfilename.o

- gcc cfilename.c 
store code.c compiled as a.out

- gcc -S cfilename.c
generates the assembly code of a C code and save it in an output file.
cfilename.c => cfilename.s
