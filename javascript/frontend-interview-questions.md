# Frontend Interview Questions

## 1

```js
function sayHi() {
  console.log(name)
  console.log(age)
  var name = "Lydia"
  let age = 21
}
```

A. Lydia and undefined
B. Lydia and ReferenceError
C. ReferenceError and 21
D. undefined and ReferenceError

Answer: D
name is hoisted
let and const is not hoisted.

## 2

```js
let a = 5
let b = 10

[a, b] = [b, a]
```

What is the value of a
What is the value of b

Answer: a = 10, b = 5

## 3

What will be the output of the code below?

```js
console.log(typeof typeof 1);
```

A. number
B. string
C. object

Answer: B

## 4

What is the output?

```js
for(var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1)
}

for(var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1)
}
```

Answer: 333333

## 5

```js
function getAge() {
  "use strict";
  age = 21
  console.log(age)
}

getAge()
```

Answer: ReferenceError

"use strict" enforces stricter parsing and error handling rules.
Age = 21 without strict mode will become a global variable.
**Strict mode prohibits implicitly creating global variables.** JavaScript will throw a ReferenceError since assigning to an undeclared variable is an error in strict mode.
Execution will stop at `age = 21`.
ReferenceError: age is not defined

## RULES/BEHAVIOURS ENFORCED BY STRICT MODE

A. **Prevents Accidental Globals**: Assigning values to undeclared variables throws a ReferenceError instead of creating global variables.

Non-strict: `undeclaredVar = 1`, creates window.undeclearedVar
Strict: `undeclaredVar = 1`, throws ReferenceError

```js
"use strict"

undeclaredVar = 1
// ReferenceError

x = 3.14; // ReferenceError
// This will cause an error because x is not declared

function myFunction() {
  y = 3.14; // ReferenceError
}

// Declared inside a function, it has local scope (only the code inside the function is in strict mode)

function myFunction() {
  "use strict";
  y = 3.14;   // ReferenceError
}
```

B. **Prevents Silent Errors on Assignments**: Assignment that would silently fail in non-strict mode now throw errors.

```js
undefined = 5
// TypeError

// Non Writable Objects
Object.defineProperty(obj, "x", { value: 0, writable: false}))
obj.x = 1 // TypeError

// Getter-only Properies
var obj = {
  get x() { return 0}
}
obj.x = 1 // TypeError
```

> In strict mode, any assignment to a non-writable property, a getter-only property, a non-existing property, a non-existing variable, or a non-existing object, will throw an error.

C. Requires delete on Deletable properties

Attempting to delete variables, functions, function arguments or non-configurable properties throws an Error.

You can only delete configurable properties of objects.

Non strict: delete someVarable; // returns false

```js
"use strict"
delete someVariables // SyntaxError
```

D. Prohibits Duplicate Parameter Name

Declaring duplicate parameter name will throw SyntaxError.

Non strict: function sum(x, x) {...} 
is allowed but the second parameter overrides the first.

```js
function getSum(x, x) {
  sum = x+x
  console.log(sum)
}

getSum(3, 4) // 8
```

```js
"use strict"
function sum(x, x) { // SyntaxError
  ...
}
```

E. Prohibits Old Octal Syntax

Octal numeric literals (Prefixed with a leading zero e.g. 010) are a syntaxError.
The new way to do it is `0o` prefix (e.g. `0o10`)

Non Strict: var x = 010
Sets x to 8

```js
"use strict"
var x = 010; // SyntaxError
```

F. Reserved Keywords

Using future reserved keywords like (implements, interface, let, package, private, protected, public, static, yield) as a variables or function names throws SyntaxError.

G. Prohibits `with` Statement
The `with` statement is disallowed and throws a SyntaxError.
`with` is discouraged to performance and readability issues.

H. Makes `eval` Safer
Variables declared in eval() code in strict mode do not leak into the surrounding scope (i.e eval cannot introduce a new variable into the surrounding scope)

I. Secures arguments and arguments.callee

- Changes to arguments do not affect the corresponding named parameters, and vice-versa.
- arguments.callee is disallowed and accessing it throws a TypeError
- arguments.caller is also disallowed

J. Changes `this` Binding
if a function is called without explicit context, this with be undefined.

## 6

What is the output

```js
const obj = { a: "one", b: "two", a: "three" }
console.log(obj)
```

Answer: { a: "three", b: "two"}

{a: "three"} is an update to initial value of a

## 7

What is the event.target when clicking the button?

```js
<div onclick="console.log('first div')">
  <div onclick="console.log('Second div')">
    <button onclick="(e) => console.log('Button', e.target)">
      CLICK
    </button>
  </div>
</div>
```

A. Outer div
B. Inner div
C. button
D. An array of all nested element

result:
button
second div
first div

due to bubbling.

When the handlers in the inner and outer div elements are executed because of the click bubbling up, the `event.target` property within those handlers will still refer back to the original element that was clicked (Which is the button).
To know which element the current handler/function is attached to you would use `event.currentTarget`

Answer: C

## 8

```js

```

## 9

```js

```

## 10

```js

```

## 11

```js

```

## 12

```js

```

## 13

```js

```

## 14

```js

```

## 15

```js

```

## 16

```js

```

## 17

```js

```

## 18

```js

```

## 19

```js

```

## 20

```js

```

## 21

```js

```

## 22

```js

```

## 23

```js

```

## 24

```js

```

## 25

```js

```

## 26

```js

```

## 27

```js

```

## 28

```js

```

## 29

```js

```

## 30

```js

```

## 31

```js

```

## 32

```js

```

## 33

```js

```

## 34

```js

```

## 35

```js

```

## 36

```js

```

## 37

```js

```

## 38

```js

```

## 39

```js

```

## 40

```js

```

## 41

```js

```

## 42

```js

```

## 43

```js

```

## 44

```js

```

## 45

```js

```

## 46

```js

```

## 47

```js

```

## 48

```js

```

## 49

```js

```

## 50

```js

```

## 51

```js

```

## 52

```js

```

## 53

```js

```

## 54

```js

```

## 55

```js

```

## 56

```js

```

## 57

```js

```

## 58

```js

```

## 59

```js

```

## 60

```js

```

## 61

```js

```

## 62

```js

```

## 63

```js

```

## 64

```js

```

## 65

```js

```

## 66

```js

```

## 67

```js

```

## 68

```js

```

## 69

```js

```

## 70

```js

```

## 71

```js

```

## 72

```js

```

## 73

```js

```

## 74

```js

```

## 75

```js

```

## 76

```js

```

## 77

```js

```

## 78

```js

```

## 79

```js

```

## 80

```js

```

## 81

```js

```

## 82

```js

```

## 83

```js

```

## 84

```js

```

## 85

```js

```

## 86

```js

```

## 87

```js

```

## 88

```js

```

## 89

```js

```

## 90

```js

```

## 91

```js

```

## 92

```js

```

## 93

```js

```

## 94

```js

```

## 95

```js

```

## 96

```js

```

## 97

```js

```

## 98

```js

```

## 99

```js

```

## 100

```js

```
