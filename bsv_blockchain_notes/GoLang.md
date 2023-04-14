# Go Lang 

## Quick review 
Go programming language (also known as “Golang”) originated at Google by Ken Thompson, Rob Pike, and others. The Go lang syntax shares many similarities with the C programming language but comes with many safety features such as:

- Free and open source
- Statically typed
- Memory safety
- Garbage collection
- structural typing
- CSP-style
- Python/JS like readability and usability
- Strong support for multicore and networked systems
- Concurrency, and more.

### Using apt-get/apt command to install Go
Search for Go:
```sh
$ sudo apt search golang-go
$ sudo apt search gccgo-go
```
Install Golang version 1.13 on Ubuntu Linux 20.04 LTS:
```sh 
$ sudo apt install golang-go
```

### How to display Go version on Ubuntu
Execute the following command:
```sh 
$ go version
```

### Hello world program 
```go
// Hello Word in Go by Vivek Gite
package main
// Import OS and fmt Packages
import (
"fmt"
"os"
)
// Let us start
func main() {
 fmt.Println("Hello, world!") // Print simple text on screen
 fmt.Println(os.Getenv("USER"), ", Let's be friends!") // Read Linux $USER environment variab
}
```

### Compile and run Go program
```sh
$ go run hello.go
```

### Build/compile Packages and dependencies
```sh 
go build go/src/my-project/test.go
```

### Setting up variables in go
The syntax is
```go
// we use var that declares one or more variables with or without type
var name type
var name = value
//shorthand syntax 
name := value
// define i
var i int
// set value for i
i = 10
// we can also set value as follows
var y = 5
var msg = "Remote host found."
var foo, bar int = 100, 200
// shorthand syntax
vehicle := "Mercedes"
age := 52
// Bool true or false
var is_job_failed = false
// print it
fmt.Printf("%d %d %s\n", i,y,msg)
fmt.Println(foo)
fmt.Println(age)
fmt.Println(vehicle)
```

### Constants
We use the const keyword to declare a constant value. We can set it to character,
string, boolean, and numeric values. For instance:
```go
// syntax 
const var type = value
// define constant pi with as float32 with 3.14159 value
const pi float32 = 3.14159
// create constant string variable 
const error_msg string = "Docker is not installed"
fmt.Println(pi)
fmt.Println(error_msg)
```

### Simple for loop in golang
```go 
package main
import "fmt"
func main() {
 // single condition for loop
 m := 1
 for m <= 5 {
 fmt.Printf("Welcome %d times.\n",m)
 m = m + 1
 }
 // classic for loop example 
 for i := 6; i <= 10; i++ {
 fmt.Printf("Welcome %d times.\n",i)
 }
}
```

### Using If and else in go 
The syntax is:
```
if condition {
 // do-something when condition is true
}
else {
 // do-something when condition is false 
}
```

Here is our go for loop example but with condition added :
```go
package main
import "fmt"
func main() {
 for i := 1; i <= 10; i++ {
 fmt.Printf("Welcome %d times.\n",i)
// break out of for loop when i is 5
if i == 5 {
break
}
 }
}
 ``` 

In this example, read int number from your keyboard and print message:
```go 
package main
import "fmt"
func main() {
var n int
fmt.Scanf("%d", &n)
fmt.Println(n)
if n >= 0 {
fmt.Println("Number is positive")
} else {
fmt.Println("Number is negative")
}
}
```

### Creating array in Go lang
```go
package main
import "fmt"
func main() {
 // define array named domains as string type
 var domains [2]string
 fmt.Println("current values for array:", domains)
 // add value and print it
 domains[0] = "cyberciti.biz"
 fmt.Println("Set value : ", domains)
 fmt.Println("Get value for 0 element : ", domains[0])
 // get array length 
 fmt.Println("Array length : ", len(domains))
 // add one more value 
 domains[1] = "nixcraft.com"
 // use for loop to print our array
 for i := 0; i < len(domains); i++ {
 fmt.Println("Get value for element ", i, " is ", domains[i])
 }
}
```
It will produce output as follows:
current values for array: [ ]
Set value : [cyberciti.biz ]
Get value for 0 element : cyberciti.biz
Array lenght : 2
Get value for element 0 is cyberciti.biz
Get value for element 1 is nixcraft.com


Creating user defined function in Golang
```go
package main
import "fmt"
// define function named total that accept int values and returns int 
func total(x int, y int) int {
 return x + y
}
func main() {
 // call our function and store result in the answer variable 
 answer := total(10, 20)
 fmt.Println("10 + 20 = ", answer)
 fmt.Println("100 + 500 = ", total(100,500))
}
```
That is all for now. As you can see from quick examples if you know C or a similar
language picking up Go is easy.





## Course Overview

This course covers the fundamental elements of Go: 
- data types
- protocols
- formats
- writing code that incorporates RFCs and JSON. 

Course Outline
● Overview
        ○ Objects
        ○ Concurrency
        ○ Installing Go ★
        ○ Workspaces & Packages ★
        ○ Go Tool
        ○ Variables ★
        ○ Variable Initialization ★

● Data Types
        ○ Pointers ★
        ○ Variable Scope ★
        ○ Deallocating Memory
        ○ Garbage Collection
        ○ Comments, Printing, Integers ★
        ○ Ints, Floats, Strings ★
        ○ String Packages
        ○ Constants ★
        ○ Control Flow ★
        ○ Control Flow, Scan ★

● Composite Data Types
        ○ Arrays ★
        ○ Slices ★
        ○ Variable Slices ★
        ○ Hash Tables
        ○ Maps ★
        ○ Structs ★

● Protocols and Formats
        ○ RFCs
        ○ JSON
        ○ File Access, ioutil
        ○ File Access, os










## Hello world 
```go 
package main
import "fmt"
// this is a comment
func main() {
 fmt.Println("Hello, World")
}
```
Hello, World


The first line says this: `package main`
This is known as a package declaration, and every Go program must start with it. Packages are Go’s way of organizing and reusing code.

> There are two types of Go programs: executables and libraries.

**Executable** applications are the kinds of programs
that we can run directly from the terminal (on Windows, they end with .exe). 
**Libraries** are collections of code that we package together so that we can use them in other programs. 

`import "fmt"` **The import keyword is how we include code from other Packages to use with our program**. The fmt package (shorthand for format) implements formatting for input and output. 

The line that starts with // is known as a comment. Comments are ignored by the Go compiler and are there for your own sake (or whoever picks up the source code for
your program). 
Go supports two different styles of comments: // comments in which all the text between the // and the end of the line is part of the comment, and /* */ comments where everything between the asterisks is part of the comment (and may include multiple lines).

- Println means “print line.” 


## Data Types 
### Numbers
Go has several different types to represent numbers. Generally, we split numbers into two different kinds: integers and floating-point numbers

#### Integers
Integers—like their mathematical counterpart—are numbers without a decimal component (…, −3, −2, −1, 0, 1, …) Unlike the base-10 decimal system we use to represent numbers, computers use a base-2 binary system.
Computers do the same, but they only have 2 digits instead of 10. So counting looks like this: 0, 1, 10, 11, 100, 101, 110, 111, and so on. The other difference between the number system we use and the one computers use is that all of the integer types have a definite size. They only have room for a certain number of digits. So a 4-bit integer might look like this: 0000, 0001, 0010, 0011, 0100.

Go’s integer types are **uint8, uint16, uint32, uint64, int8, int16, int32, and int64**.
8, 16, 32, and 64 tell us how many bits each of the types use. uint means “unsigned integer” while int means “signed integer.” Unsigned integers only contain positive numbers (or zero). 
In addition, there two alias types: 
- **byte** (which is the same as uint8) and **rune** (which is the same as int32). 
- Bytes are an extremely common unit of measurement used on computers (1 byte = 8 bits, 1,024 bytes = 1 kilobyte, 1,024 kilobytes = 1 megabyte, etc.) and therefore Go’s byte data type is often used in the definition of other types. 

 
** There are also three machine dependent integer types**: 
- uint
- int
- uintptr

They are machine dependent because their size depends on the type of architecture you are using.





#### Floating-Point Numbers
Floating-point numbers are numbers that contain a decimal component (i.e., real numbers). For example, 1.234, 123.4, 0.00001234, and 12340000 are all floating-point numbers. 

keep the following in mind:
• Floating-point numbers are inexact. Occasionally it is not possible to represent a number. For example, computing 1.01 – 0.99 using floating-point arithmetic results in 0.020000000000000018—a number extremely close to what we would expect, but not exactly the same.
• Like integers, **floating-point numbers have a certain size (32 bit or 64 bit)**. Using **a larger-sized floating-point number increases its precision** (i.e., how many digits it can represent).
• In addition to numbers, there are several other values that can be represented: “not a number” (**NaN**, for things like **0/0**) and positive and negative infinity (**+∞**
and **−∞**).

Go supports the following standard arithmetic operators:
```
+
Addition
-
Subtraction
*
Multiplication
/
Division
%
Remainder
```





#### Strings 
> String literals can be created using double quotes "Hello, World" or backticks `Hello, World`. The difference between these is that double-quoted strings cannot contain newlines and they allow special escape sequences. For example, \n gets replaced with a newline and \t gets replaced with a tab character. 

The following are some common operations on strings:

`len("Hello, World")`
Finds the length of a string

`"Hello, World"[1]`
Accesses a particular character in the string (in this case, the second character)

`"Hello, " + World"`
Concatenates two strings together

```go
package main
import "fmt"
func main() {
 fmt.Println(len("Hello, World"))
 fmt.Println("Hello, World"[1])
 fmt.Println("Hello, " + "World")
}
```





#### Booleans
A boolean value (named after George Boole) is a special 1-bit integer type used to represent true and false (or on and off). Three logical operators are used with boolean
values:
- && and
- || or
- ! not
Here is an example program showing how they can be used:
```go
func main() {
    fmt.Println(true && true)
    fmt.Println(true && false)
    fmt.Println(true || true)
    fmt.Println(true || false)
    fmt.Println(!true)
}
```





## Defining Multiple Variables
Go also has another shorthand when you need to define multiple variables:
```go
var (
 a = 5
 b = 10
 c = 15
)
```
Use the keyword var (or const) followed by parentheses with each variable on its
own line.





## Scope 
Let’s take another look at the program we saw at the beginning of the chapter:
```go
package main
import "fmt"
func main() {
 var x string = "Hello, World"
 fmt.Println(x)
}
```
Another way of writing this program would be like this:
```go
package main
import "fmt"
var x string = "Hello, World"
func main() {
 fmt.Println(x)
}
```





## Use backticks to span strings across multiple line 
```go
package main
import "fmt"
func main() {
fmt.Println(`1
2
3
4
5
6
7
8
9
10`)
}
``` 





## The for Statement
```go
func main() {
 for i := 1; i <= 10; i++ {
 fmt.Println(i)
 }
}
```

```go 
package main
import "fmt"
func main() {
 i := 1
 for i <= 10 {
 fmt.Println(i)
 i = i + 1
 }
}
```





## The if Statement
```go
if i % 2 == 0 {
 // divisible by 2
} else if i % 3 == 0 {
 // divisible by 3
} else if i % 4 == 0 {
 // divisible by 4
} else {
 // default 
}
``` 





## The switch Statement 
```go 
switch i {
case 0: fmt.Println("Zero")
case 1: fmt.Println("One")
case 2: fmt.Println("Two")
case 3: fmt.Println("Three")
case 4: fmt.Println("Four")
case 5: fmt.Println("Five")
default: fmt.Println("Unknown Number")
}
```




## Arrays, Slices, and Maps 
### Arrays
An array is a numbered sequence of elements of a single type with a fixed length. In Go, they look like this:
`var x [5]int`
x is an example of an array that is composed of five ints. Try running the following
program:
```go 
package main
import "fmt"
func main() {
 var x [5]int
 x[4] = 100
 fmt.Println(x)
}
```

You should see this:
[0 0 0 0 100]

Go also provides a shorter syntax for creating arrays:
```go
x := [5]float64{ 98, 93, 77, 82, 83 }
```

We no longer need to specify the type because Go can figure it out. Sometimes arrays like this can get too long to fit on one line, so Go allows you to break it up like this:
```go
x := [5]float64{
 98,
 93,
 77,
 82,
 83,
}
```

Notice the extra trailing , after 83. This is required by Go and it allows us to easily
remove an element from the array by commenting out the line:
```go
x := [4]float64{
 98,
 93,
 77,
 82,
 // 83,
}
```


> Because the length of an array is part of its type name, working with arrays can be a little cumbersome. Adding or removing elements as we did here requires also changing the length inside the brackets. Because of this and other limitations, you rarely see arrays used directly in Go code. Instead, you will usually use a slice, which is a type built on top of an array.

## Slices
A slice is a segment of an array. Like arrays, slices are indexable and have a length.
Unlike arrays, this length is allowed to change. Here’s an example of a slice:
```go
var x []float64
```
The only difference between this and an array is the missing length between the brackets. In this case, x has been created with a length of zero.
If you want to create a slice, you should use the built-in make function:
```go
x := make([]float64, 5)
```
This creates a slice that is associated with an underlying float64 array of length 5.
Slices are always associated with some array, and although they can never be longer
than the array, they can be smaller. The make function also allows a third parameter:
```go
x := make([]float64, 5, 10) // A slice of length 5 with a capacity of 10
``` 
Another way to create slices is to use the [low : high] expression:
```go
arr := [5]float64{1,2,3,4,5}
x := arr[0:5]
```
low is the index of where to start the slice and high is the index of where to end it
(but not including the index itself). For example, while arr[0:5] returns
[1,2,3,4,5], arr[1:4] returns [2,3,4].
For convenience, we are also allowed to omit low, high, or even both low and high.
arr[0:] is the same as arr[0:len(arr)], arr[:5] is the same as arr[0:5], and
arr[:] is the same as arr[0:len(arr)].


## append
append adds elements onto the end of a slice. 
```go 
func main() {
 slice1 := []int{1,2,3}
 slice2 := append(slice1, 4, 5)
 fmt.Println(slice1, slice2)
}
```
After running this program, slice1 has [1,2,3] and slice2 has [1,2,3,4,5].


## copy
copy takes two arguments: dst and src. All of the entries in src are copied into dst overwriting whatever is there. If the lengths of the two slices are not the same, the
smaller of the two will be used.
Here is an example of copy:
```go
func main() {
 slice1 := []int{1,2,3}
 slice2 := make([]int, 2)
 copy(slice2, slice1)
 fmt.Println(slice1, slice2)
}
```
After running this program slice1 has [1,2,3] and slice2 has [1,2]. The contents of slice1 are copied into slice2, but because slice2 has room for only two elements, only the first two elements of slice1 are copied.

## Looping through a list 
```go 
func main() {
 xs := []float64{98,93,77,82,83}
 total := 0.0
 for _, v := range xs {
 // _ can be replaced with a variable name 
 // to indicate or represent the index of the array
 total += v
 }
 fmt.Println(total / float64(len(xs)))
}
```




## Maps
A map is an unordered collection of key-value pairs (maps are also sometimes called associative arrays, hash tables, or dictionaries). Maps are used to look up a value by its associated key. Here’s an example of a map in Go:
```go
var x map[string]int
```
The map type is represented by the keyword map, followed by the key type in brackets and finally the value type. If you were to read this out loud, you would say “x is a map of strings to ints.”

** Maps cannot be created like this **
```go
var x map[string]int
x["key"] = 10
fmt.Println(x)
```
You should see an error similar to this:
panic: runtime error: assignment to entry in nil map

> The problem with our program is that maps have to be initialized before they can be used. We should have written this:

```go
x := make(map[string]int)
x["key"] = 10
fmt.Println(x["key"])
```

```go
x := make(map[int]int)
x[1] = 10
fmt.Println(x[1])
```
> the length of a map can be found with len()

We can also delete items from a map using the built-in delete function:
```go 
delete(x, 1)
```
Let’s look at an example program that uses a map:
```go
package main
import "fmt"
func main() {
 elements := make(map[string]string)
 elements["H"] = "Hydrogen"
 elements["He"] = "Helium"
 elements["Li"] = "Lithium"
 elements["Be"] = "Beryllium"
 elements["B"] = "Boron"
 elements["C"] = "Carbon"
 elements["N"] = "Nitrogen"
 elements["O"] = "Oxygen"
 elements["F"] = "Fluorine"
 elements["Ne"] = "Neon"
 fmt.Println(elements["Li"])
}
```

Suppose we tried to look up an element that doesn’t exist:
fmt.Println(elements["Un"]) 
If you run this, you should see nothing returned. Technically, a map returns the zero value for the value type (which for strings is the empty string). Although we could check for the zero value in a condition 
**( elements["Un"] == "")**, Go provides a better way:
```go
value, status := elements["Un"]
fmt.Println(value, status)
```
if Un is in elements, status will be true, otherwise false if it not.
value is the content in Un.
Un will be = "" if Un is not in element, otherwise it will return it true value if it does.

**Accessing an element of a map can return two values instead of just one**. The first value is the result of the lookup, the second tells us whether or not the lookup was successful. 

```go 
if name, ok := elements["Un"]; ok {
 fmt.Println(name, ok)
}
```


Like we saw with arrays, there is also a shorter way to create maps:
```go
elements := map[string]string{
 "H": "Hydrogen",
 "He": "Helium",
 "Li": "Lithium",
 "Be": "Beryllium",
 "B": "Boron",
 "C": "Carbon",
 "N": "Nitrogen",
 "O": "Oxygen",
 "F": "Fluorine",
 "Ne": "Neon",
}
```



```go
func main() {
 elements := map[string]map[string]string{
 "H": map[string]string{
 "name":"Hydrogen",
 "state":"gas",
 },
 "He": map[string]string{
 "name":"Helium",
 "state":"gas",
 },
 "Li": map[string]string{
 "name":"Lithium",
 "state":"solid",
 },
 "Be": map[string]string{
 "name":"Beryllium",
 "state":"solid",
 },
 "B": map[string]string{
 "name":"Boron",
 "state":"solid",
 },
 "C": map[string]string{
 "name":"Carbon",
 "state":"solid",
 },
 "N": map[string]string{
"name":"Nitrogen",
 "state":"gas",
 },
 "O": map[string]string{
 "name":"Oxygen",
 "state":"gas",
 },
 "F": map[string]string{
 "name":"Fluorine",
 "state":"gas",
 },
 "Ne": map[string]string{
 "name":"Neon",
 "state":"gas",
 },
 }
 if el, ok := elements["Li"]; ok {
 fmt.Println(el["name"], el["state"])
 }
}
``` 
or 
```go
elements["Li"]["name"]
elements["Li"]["state"]
```



## Functions 
The function below take in a slice or an array with a data type of float64 and returns a float64 value
```go
func average(xs []float64) float64 {
 // code
}
```
- The parameters (inputs) of the function are defined like this: name type, name type,



### Return types can have names
We can specify the variable we want to return like this:
```go
func f2() (r int) {
 r = 1
 return
}
```



### Multiple values can be returned
Go is also capable of returning multiple values from a function. Here is an exam‐
ple function that returns two integers:
```go 
func f() (int, int) {
 return 5, 6
}
func main() {
 x, y := f()
}
```



### Variadic Functions
There is a special form available for the last parameter in a Go function:
```go
func add(args ...int) int {
 total := 0
 for _, v := range args { 
 // _ can be replaced with a variable name 
 // to indicate or represent the index of the array
 total += v
 }
 return total
}
func main() {
 fmt.Println(add(1,2,3))
}
```



### Closure
It is possible to create functions inside of functions. Let’s move the add function we saw before inside of main:
```go
func main() {
 add := func(x, y int) int {
 return x + y
 }
 fmt.Println(add(1,1))
}
``` 

```go 
func main() {
 x := 0
 increment := func() int {
 x++
 return x
 }
 fmt.Println(increment())
 fmt.Println(increment())
}
```



One way to use closure is by writing a function that returns another function, which when called, can generate a sequence of numbers. For example, here’s how we might generate all the even numbers:
```go 
func makeEvenGenerator() func() uint {
 i := uint(0)
 return func() (ret uint) {
 ret = i
 i += 2
 return
 }
}
func main() {
 nextEven := makeEvenGenerator()
 fmt.Println(nextEven()) // 0
 fmt.Println(nextEven()) // 2
 fmt.Println(nextEven()) // 4
}
```



### Recursion 
Finally, a function is able to call itself. Here is one way to compute the factorial of a number:
```go 
func factorial(x uint) uint {
 if x == 0 {
 return 1
 }
 return x * factorial(x-1)
}
```



### defer, panic, and recover
Go has a special statement called defer that schedules a function call to be run after the function completes. Consider the following example:
```go 
package main
import "fmt"
func first() {
 fmt.Println("1st")
}
func second() {
 fmt.Println("2nd")
}
func main() {
 defer second()
 first()
}
```
This program prints 1st followed by 2nd. Basically, defer moves the call to second to the end of the function:
```
func main() {
 first()
 second()
}
```
defer is often used when resources need to be freed in some way. For example, when we open a file, we need to make sure to close it later. With defer:
```go
f, _ := os.Open(filename)
defer f.Close()
```
This has three advantages:
• It keeps our Close call near our Open call so it’s easier to understand.
• If our function had multiple return statements (perhaps one in an if and one in an else), Close will happen before both of them.
• Deferred functions are run even if a runtime panic occurs.i



### panic and recover
Earlier, we created a function that called the panic function to cause a runtime error. We can handle a runtime panic with the built-in recover function. recover stops the panic and returns the value that was passed to the call to panic. We might be tempted to recover from a panic like this:
```go
package main
import "fmt"
func main() {
 panic("PANIC")
 str := recover() // this will never happen
 fmt.Println(str)
}
```

But the call to recover will never happen in this case, because the call to panic immediately stops execution of the function. Instead, we have to pair it with defer:
```go
package main
import "fmt"
func main() {
 defer func() {
 str := recover()
 fmt.Println(str)
 }()
 panic("PANIC")
}
```


## Pointers
When we call a function that takes an argument, that argument is copied to the function:
```go 
func zero(x int) {
 x = 0
 }
 func main() {
 x := 5
 zero(x)
 fmt.Println(x) // x is still 5
 }
```
In this program, the zero function will not modify the original x variable in the main
function. But what if we wanted to? One way to do this is to use a special data type
known as a pointer:
```go
 func zero(xPtr *int) {
 *xPtr = 0
 }
 func main() {
 x := 5
 zero(&x)
 fmt.Println(x) // x is 0
 }
```
Pointers reference a location in memory where a value is stored rather than the value itself. By using a pointer (*int), the zero function is able to modify the original variable.
The `*` and & operators In Go, a pointer is represented using an asterisk (*) followed by the type of the stored
value. In the zero function, xPtr is a pointer to an int.

Another way to get a pointer is to use the built-in new function:

```go
func one(xPtr *int) {
 *xPtr = 1
 }
 func main() {
 xPtr := new(int)
 one(xPtr)
 fmt.Println(*xPtr) // x is 1
 }
```
new takes a type as an argument, allocates enough memory to fit a value of that type, and returns a pointer to it.





## Structs and Interfaces
Consider a program that interacts
with shapes:
```go
package main
import ("fmt"; "math")
func distance(x1, y1, x2, y2 float64) float64 {
 a := x2 – x1
 b := y2 – y1
 return math.Sqrt(a*a + b*b)
}
func rectangleArea(x1, y1, x2, y2 float64) float64 {
 l := distance(x1, y1, x1, y2)
 w := distance(x1, y1, x2, y1)
 return l * w
}
func circleArea(x, y, r float64) float64 {
 return math.Pi * r*r
}
func main() {
 var rx1, ry1 float64 = 0, 0
 var rx2, ry2 float64 = 10, 10
 var cx, cy, cr float64 = 0, 0, 5
 fmt.Println(rectangleArea(rx1, ry1, rx2, ry2))
 fmt.Println(circleArea(cx, cy, cr))
}
```
This program finds the area of a rectangle and a circle. Keeping track of all the coor‐
dinates makes it difficult to see what the program is doing and will likely lead to mis‐
takes.
Structs
An easy way to make this program better is to use a struct. A struct is a type that con‐
tains named fields. For example, we could represent a circle like this:
```go 
type Circle struct {
 x float64
 y float64
 r float64
}
```
**The type keyword introduces a new type**. It’s followed by the name of the type (Circle), the keyword struct to indicate that we are defining a struct type, and a list of fields inside of curly braces.
Fields are like a set of grouped variables. Each field has a name and a type and is stored adjacent to the other fields in the struct. Like with functions, we can collapse fields that have the same type:
```go
type Circle struct {
 x, y, r float64
}
```



### Initialization
We can create an instance of our new Circle type in a variety of ways:
```go 
var c Circle
```
Like with other data types, this will create a local Circle variable that is by default set to zero. For a struct, zero means each of the fields is set to their corresponding zero value (0 for ints, 0.0 for floats, "" for strings, nil for pointers, etc.) We can also use the new function:
```go
c := new(Circle)
```
This allocates memory for all the fields, sets each of them to their zero value, and returns a pointer to the struct (*Circle). Pointers are often used with structs so that functions can modify their contents.

More typically, we want to give each of the fields an initial value. We can do this in two ways.
The first option looks like this:
```go
c := Circle{x: 0, y: 0, r: 5}
```
The second option is to leave off the field names if we know the order they were
defined:
```go
c := Circle{0, 0, 5}
```
This creates the same Circle as the previous example. If you want a pointer to the struct, use &:
```go
c := &Circle{0, 0, 5}
```



### Fields
We can access fields using the . operator:
```go 
fmt.Println(c.x, c.y, c.r)
c.x = 10
c.y = 5
Let’s modify the circleArea function so that it uses a Circle:
func circleArea(c Circle) float64 {
 return math.Pi * c.r*c.r
}
```
In main, we have:
```go
c := Circle{0, 0, 5}
fmt.Println(circleArea(c))
```
One thing to remember is that arguments are always copied in Go. If we attempted to modify one of the fields inside of the circleArea function, it would not modify the original variable. Because of this, we would typically write the function using a pointer to the Circle:
```go
func circleArea(c *Circle) float64 {
 return math.Pi * c.r*c.r
}
```
And change main to use & before c:
```go
c := Circle{0, 0, 5}
fmt.Println(circleArea(&c))
```



### Methods
Although this is better than the first version of this code, we can improve it significantly by using a special type of function known as a method:
```go
func (c *Circle) area() float64 {
 return math.Pi * c.r*c.r
}
```
In between the keyword func and the name of the function, we’ve added a receiver. The receiver is like a parameter—it has a name and a type—but by creating the function in this way, it allows us to call the function using the . operator:
```go 
fmt.Println(c.area())
```
This is much easier to read. We no longer need the & operator (Go automatically knows to pass a pointer to the circle for this method), and because this function can
only be used with Circles, we can rename the function to just area.
Let’s do the same thing for the rectangle:
```go 
type Rectangle struct {
 x1, y1, x2, y2 float64
}
func (r *Rectangle) area() float64 {
 l := distance(r.x1, r.y1, r.x1, r.y2)
 w := distance(r.x1, r.y1, r.x2, r.y1)
 return l * w
}
```
main has:
```go
r := Rectangle{0, 0, 10, 10}
fmt.Println(r.area())
```



### Embedded Types
A struct’s fields usually represent the has-a relationship (e.g., a Circle has a radius).
The following snippet shows an example of a person struct:
```go
type Person struct {
 Name string
}
func (p *Person) Talk() {
 fmt.Println("Hi, my name is", p.Name)
}
```
Now suppose we wanted to create a new Android struct. We could do this:
```go
type Android struct {
 Person Person
 Model string
}
```
This would work, but we would rather say an android is a person, rather than an Android has a person. Go supports relationships like this by using embedded types (sometimes also referred to as anonymous fields) they look like this:
```go
type Android struct {
 Person
 Model string
}
```
We use the type (Person) and don’t give it a name. When defined this way, the Person struct can be accessed using the type name:
```go 
a := new(Android)
a.Person.Talk()
```
But we can also call any Person methods directly on the Android:
```
a := new(Android)
a.Talk()
```
The is-a relationship works this way intuitively: people can talk, an android is a person, therefore an android can talk.




## Interfaces 
Go has a way of making relationships explicit through a type known as an interface. e.g @circle area().
Here is an example of a Shape interface:
```go
type Shape interface {
 area() float64
}
```
Interface allows us to define a method set (Instead of fields). A **method set** is a list of methods that a type must have in order to implement the interface.


Suppose we want to write a function that calculates the area of several shapes. Using the techniques we’ve discussed so far, we might start to write the function like this:
```go
func totalArea(circles ...Circle) float64 {
 var total float64
 for _, c := range circles {
 total += c.area()
 }
 return total
}
```


And then we’d try to add in Rectangles:
```
// THIS IS INVALID
func totalArea(circles ...Circle, rectangles ...Rectangle) float64 {
 var total float64
 for _, c := range circles {
 total += c.area()
 }
 for _, r := range rectangles {
 total += r.area()
 }
 return total
}
```
But we can’t write a function that contains two variadic parameters, so we would have to modify the program:
```go
func totalArea(circles []Circle, rectangles []Rectangle) float64 {
 var total float64
 for _, c := range circles {
 total += c.area()
 }
 for _, r := range rectangles {
 total += r.area()
 }
 return total
}
```

This works, but it has a major issue—whenever we define a new shape, we have to change our function to handle it (a third parameter for Polygons, a fourth for Squares, etc.).
This is the problem interfaces are designed to solve. Because both of our shapes have an area method, they both implement the Shape interface and we can change our
function to this:
```go
func totalArea(shapes ...Shape) float64 {
 var area float64
 for _, s := range shapes {
 area += s.area()
 }
 return area
}
```
We would call this function like this:
```go
fmt.Println(totalArea(&c, &r)) 
```
All totalArea knows about each shape is that it has an area method:
```
type Shape interface {
 area() float64
}
```


Interfaces can also be used as fields. Consider a MultiShape that is made up of several
smaller shapes:
```go
type MultiShape struct {
 shapes []Shape
}
```
We can create a MultiShape like this:
```go 
multiShape := MultiShape{
 shapes: []Shape{
 Circle{0, 0, 5},
 Rectangle{0, 0, 10, 10},
 },
}
```
We can even turn MultiShape itself into a Shape by giving it an area method:
```go
func (m *MultiShape) area() float64 {
 var area float64
 for _, s := range m.shapes {
 area += s.area()
 }
 return area
}
```
Now a MultiShape can contain Circles, Rectangles, or even other MultiShapes.

> Go also has a mechanism for combining interfaces, types, variables, and functions together into a single component known as a package. 

> Difference between method and a function is that a method has a receiver while a function does not.


> Why would you use an embedded anonymous field instead of a normal named field ? 
You would use an embedded anonymous field instead of a normal named field in order to use methods directly on the containing type





## Packages
Packages encourage code reuse reuse—embodied in the principle “Don’t Repeat Yourself.”

Nearly every program we’ve seen so far included this line:
```go
import "fmt"
```
fmt is the name of a package that includes a variety of functions related to formatting and output to the screen. Bundling code in this way serves three purposes:
• It reduces the chance of having overlapping names, and in turn keeps our function names short and succinct.
• It organizes code so that it’s easier to find code you want to reuse.
• It speeds up the compiler by only requiring recompilation of smaller chunks of a program. Although we use the package fmt, we don’t have to recompile it every time we change our program.



### The Core Packages
Instead of writing everything from scratch, most real-world programming depends on our ability to interface with existing libraries. This chapter will take a look at some of the most commonly used Packages included with Go.

#### Strings
- To search for a smaller string in a bigger string, use the `Contains` function:
```go 
package main
import (
 "fmt"
 "strings"
)
func main() {
 // Contains(s, substr string) bool
 fmt.Println(strings.Contains("test", "es"))
 // => true
}
```


- To count the number of times a smaller string occurs in a bigger string, use the `Count` function:
```go
package main
import (
 "fmt"
 "strings"
)
func main() {
 // func Count(s, sep string) int
 fmt.Println(strings.Count("test", "t"))
 // => 2
}
```


- To determine if a bigger string starts with a smaller string, use the `HasPrefix` function:
```go
package main
import (
 "fmt"
 "strings"
)
func main() {
 // func HasPrefix(s, prefix string) bool
 fmt.Println(strings.HasPrefix("test", "te"))
// => true
}
```


- To determine if a bigger string ends with a smaller string, use the `HasSuffix` function:
```go 
package main
import (
 "fmt"
 "strings"
)
func main() {
 // func HasSuffix(s, suffix string) bool
 fmt.Println(strings.HasSuffix("test", "st"))
 // => true
}
```


- To find the position of a smaller string in a bigger string, use the `Index` function (it returns -1 if not found):
```go
package main
import (
 "fmt"
 "strings"
)
func main() {
 // func Index(s, sep string) int
 fmt.Println(strings.Index("test", "e"))
 // => 1
}
```


- To take a list of strings and join them together in a single string separated by another string (e.g., a comma), use the `Join` function:
```go 
package main
import (
 "fmt"
 "strings"
)
func main() {
 // func Join(a []string, sep string) string
 fmt.Println(strings.Join([]string{"a","b"}, "-"))
 // => "a-b"
}
```


- To repeat a string, use the `Repeat` function:
```go 
package main
import (
 "fmt"
 "strings"
)
func main() {
 // func Repeat(s string, count int) string
 fmt.Println(strings.Repeat("a", 5))
 // => "aaaaa"
}
```


- To replace a smaller string in a bigger string with some other string, use the Replace function. In Go, Replace also takes a number indicating how many times to do the replacement (pass -1 to do it as many times as possible):
```go
package main
import (
 "fmt"
 "strings"
)
func main() {
 // func Replace(s, old, new string, n int) string
 fmt.Println(strings.Replace("aaaa", "a", "b", 2))
 // => "bbaa"
}
```


To split a string into a list of strings by a separating string (e.g., a comma), use the
Split function (Split is the reverse of Join):
```go 
package main
import (
 "fmt"
 "strings"
)
func main() {
 // func Split(s, sep string) []string
 fmt.Println(strings.Split("a-b-c-d-e", "-")))
 // => []string{"a","b","c","d","e"}
}
```


- To convert a string to all lowercase letters, use the ToLower function:
```go
package main
import (
 "fmt"
 "strings"
)
func main() {
 // func ToLower(s string) string
 // fmt.Println(strings.ToLower("TEST"))
 // => "test"
}
```


- To convert a string to all uppercase letters, use the ToUpper function:
```go 
package main
import (
 "fmt"
 "strings"
)
func main() {
 // func ToUpper(s string) string
 // fmt.Println(strings.ToUpper("test"))
 // => "TEST"
}
```


Sometimes we need to work with strings as binary data. To convert a string to a slice of bytes (and vice versa), do this:
```go
arr := []byte("test")
```
```go
str := string([]byte{'t','e','s','t'})
```


### Input/Output
To read or write to a []byte or a string, you can use the Buffer struct found in the bytes package:
```go
var buf bytes.Buffer
buf.Write([]byte("test"))
```
A Buffer doesn’t have to be initialized, and it supports both the Reader and Writer interfaces. You can convert it into a []byte by calling buf.Bytes(). If you only need to read from a string, you can also use the strings.NewReader function, which is more efficient than using a buffer.


### Files and Folders

#### Reading a file
```go 
package main

import (

 "fmt"
 "os"
)
func main() {
 file, err := os.Open("test.txt")
 if err != nil {
 // handle the error here
 return
 }
 defer file.Close()
 // get the file size
 stat, err := file.Stat()
 if err != nil {
 return
 }
 // read the file
 bs := make([]byte, stat.Size())
 _, err = file.Read(bs)
 if err != nil {
 return
 }
 str := string(bs)
 fmt.Println(str)

}
```


There’s a shorter way to do this:
```go
package main
import (
 "fmt"
 "io/ioutil"
)
func main() {
 bs, err := ioutil.ReadFile("test.txt")
 if err != nil {
 return
 }
 str := string(bs)
 fmt.Println(str)
}
``` 



#### Create a file
It takes the name of the file, creates it in the current working directory, and returns an os.File and possibly an error (if it was unable to create it for some reason). 
```go
package main
import (
 "os"
)
func main() {
 file, err := os.Create("test.txt")
 if err != nil {
 // handle the error here
 return
 }
 defer file.Close()
 file.WriteString("test")
}
```

#### Get the contents of a directory
To get the contents of a directory, we use the same os.Open function but give it a directory path instead of a file name. Then we call the Readdir method:

Readdir takes a single argument that limits the number of entries returned. By passing in -1, we return all of the entries.
```go
package main
import (
 "fmt"
 "os"
)
func main() {
 dir, err := os.Open(".")
 if err != nil {
 return
 }
 defer dir.Close()
 fileInfos, err := dir.Readdir(-1)
 if err != nil {
 return
 }
 for _, fi := range fileInfos {
 fmt.Println(fi.Name())
 }
}
```

#### Recursively walk a folder
```go 
Often, we want to recursively walk a folder (read the folder’s contents, all the subfolders, all the sub-subfolders, etc.). To make this easier, there’s a Walk function provided in the path/filepath package.
package main
import (
 "fmt"
 "os"
 "path/filepath"
)
func main() {
 filepath.Walk(".", func(path string, info os.FileInfo, err error) error {
 fmt.Println(path)
 return nil
 })
}
```

### Errors
Go has a built-in type for errors that we have already seen (the error type). We can
create our own errors by using the New function in the errors package:
```go
package main
import "errors"
func main() {
 err := errors.New("error message")
 ```
 
 
 ## More
 
##### Package strconv
Converts string to int or uint
- func **ParseUint**
func ParseUint(s string, base int, bitSize int) (n uint64, err error)
ParseUint is like ParseInt but for unsigned numbers.
- func **ParseInt**
func ParseInt(s string, base int, bitSize int) (i int64, err error)

The bitSize argument specifies the integer type that the
result must fit into. The uint type size is implementation
defined, either 32 or 64 bits. The ParseUint return type is always uint64 . For example:
```go 
package main
import (
    "fmt"
    "strconv"
)
func main() {
    width := "42"
    u64, err := strconv.ParseUint(width, 10, 32)
    if err != nil {
        fmt.Println(err)
    }
    wd := uint(u64)
    fmt.Println(wd)
}
```

##### Array of struct
```go 
type mytype struct {
  a, b int
}
func main() {
  a := []mytype{mytype{1, 2}, mytype{3, 4}}
  a = append(a, mytype{5, 6})
}
```

##### Dynamically Sized Array
Use append and you can reasign to the same variable. 
```go 
arr := []int{1, 2}
func main() {
  for i:=0; i<=20; i++ {
    arr = append(arr, i)
}
```

##### 