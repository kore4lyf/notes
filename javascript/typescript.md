# Typescript

## What is Typescript

Is a superset of JavaScript.

Typescript can't be executed on the browser.

Typescript compiler compiles Typescript to JavaScript.

TypesScript allow the usage of types.

## Initialize a Typescript Project

Install TypeScript

```sh
npm install --save-dev typescript
```

Initialize a Typescript project

```sh
npx tsc --init
```

This will generate a `tsconfig.json` file with default settings.

To run all typescript files

```sh
tsc
```

To watch and auto compile specific files:

```sh
tsc app.ts -w

# OR

tsc app.ts --watch
```

To watch all files in a directory

```sh
tsc -w

# OR

tsc --watch
```

Another method of interacting with Typescript:

```sh
npm init -y
```

package.json
add the line of script

```sh
{
  "scripts": {
    "tsc": "tsc"
  }
}
```

Create a typescript file e.g. `app.ts`.

To run Typescript

```sh
npm run tsc # to execute all tsc file in the folder

# OR

tsc app.ts # to transpile a specific Typescript file
```

To run generated app.js

```sh
node app.js
```

## Core Types
  
Always specify types because it make your code readable

1. number e.g. 1, 5.3, -1  (inters and float)
2. string e.g 'Hi" ( all text)
3. boolean e.g true, false
4. object e.g {age: 30}
5. Array e.g [1, 2, 3]
6. Tuple e.g [1,2] (a fixed length array )
7. Enum {NEW, OLD}
8. Any (any data type)

**Others**:

- undefined
- void
- Function
- unknown
- never
- null
- Custom types

**Array Types**:

```ts
let favouriteActivites: any[];
// using any defeats all the good that TS brings to the table 
```

string[] - array of strings
number[]
boolean[]

ARRAY OF ARRAY

```ts
const listOfList: number[][]

// OR 

const listOfList: <Array<Array<Any>>>
const listOfList: <Array<Array<{z:int, w:string, r:Time}>>>
```

**Typed object**:
One doesn't have to necessarily declare a typed object like this for simple data type

```ts
const person: {
  name: string;
  age: number;
} = {
  name: 'Max',
  age: 30
}
```

**Tuple**:

```ts
const roles: [number, string] = [1, 'one'];
```

**Enum**:
Instead of doing something like this:

```ts
const ADMIN:  number = 0;
const READ_ONLY: number = 1;
const AUTHOR: number = 2;

const person = {
  name: 'Max',
  age: 30,
  hobbies: ['sport', 'Cooking'],
  role: ADMIN
}

if (person.role === ADMIN) {
  console.log("ADMIN")
}
```

It can be better with enum

```ts
enum Roles { ADMIN, READ_ONLY, AUTHOR };
// ADMIN = 0, READ_ONLY = 1, AUTHOR = 2

const person = {
  name: 'Max',
  age: 30,
  hobbies: ['sport', 'Cooking'],
  role: ADMIN
}

if (person.role === ADMIN) {
  console.log("ADMIN")
}
```

**Customizing enum**:

```ts
enum Roles { ADMIN = 'ADMIN', READ_ONLY = 100, AUTHOR = 'AUTHOR' }
```

**Any**
Avoid any.
works like js.

```ts
let favoriteArtist: any;
let hobbies: any[];
```

### Union Types

e.g. number | string

```ts
function combine(input: number | string, input2: number | string) {
  let result;
  if (typeof input1 == 'number' && typeof input2 == 'number') {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString()
  }
  return result;
}
```

### Literal Types

Usually constants.

```ts
const number2 = 2.8
```

```ts
function combine(input: 0 | 1, input2: 0 | 1, input3: 'hello' | 'welcome') {
  let result;
  if (typeof input1 == 'number' && typeof input2 == 'number') {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString()
  }
  return result;
}
```

#### Type Alias

```ts
type combined = number | string;
type binary = 0 | 1;
type greet = 'hello' | 'welcome';

function combine(input: binary, input2: combined, input3: greet) {
  ...
}
```

#### Functions and Types

```ts
function add(n1: number, n2: number): number  {
  return n1 + n2;
}
```

```ts
function printResult(num: number): void {
  console.log('Result: ' + num)
}
```

#### Function Types

```ts
let combinedValue: function;
```

One can specify function blue blueprint type.

```ts
let combinedValues: (a: number, b: number) => number;
```

#### Unknown Type

Unknown is more safer than any.
Just stick to `void` or `unknown` instead of any.

```ts
let userInput: unknown; // can hold any type

let userName: string;
// but string or any other data type is not the same as unknown

userInput = 5;
userInput = 'Max';

username == userInput; // false
userInput == username; // true
```

#### Never Type

Is used to infer that a function will never end. It is more clearer when used that when used.

```ts
function generateError(message: string, code: number): never {
  // throw { message: message, errorCode: code }

  while(true){ }
}
```

## Interfaces

Interfaces helps us to describe entities.

We can have an object like this.

```ts
const person: {  name: string; age: number} = {
  name: 'Max',
  age: 30
}
```

We can make it more readable by separating the interface, and make it reusable.

```ts
interface Person {
  name: string;
  age: number;
}

const person: Person = {
  name: 'Max',
  age: 30
}
```

One can use question mark `?` to make a property optional in the interface.

```ts
interface Person {
  name: string;
  age?: number;
}

const person: Person = {
  name: 'Max',
  age: 30
}
```

Adding a function.

```ts
interface Person {
  name: string;
  age?: number;
  getMessage(): string;
}

const person: Person = {
  name: 'Max',
  age: 30,
  getmessage(){
    return `Hello ${name}`
  }
}
```

### Interface Naming Convention

In the previous example,  if we need to add a Person class to our program, it might cause a little bit of a confusion.
The solve this problem can name Person (for interface).

Solution -
IPerson or PersonInterface

But using the prefix "interface" is much more readable.

```ts
interface IPerson {
  name: string;
  age?: number;
  getMessage(): string;
}

const person: IPerson = {
  name: 'Max',
  age: 30,
  getmessage(){
    return `Hello ${name}`
  }
}
```

OR

```ts
interface PersonInterface {
  name: string;
  age?: number;
  getMessage(): string;
}

const person: PersonInterface = {
  name: 'Max',
  age: 30,
  getmessage(){
    return `Hello ${name}`
  }
}
```

## Type Assertion (type conversion)

using `as dataType`

```ts
let vAny: any = 10;
let vUnknown: unknown = 10;

let s1: string = vAny;
let s2: string = vUnknown as string;
```

String type cannot be converted to a number. To make this happen it must be converted to unknown first then number.

```ts
let pageNumber: string = '1';
let numericPageNumber: number = pageNumber as number // error
```

SOLUTION

```ts
let pageNumber: string = '1';
let numericPageNumber: number = (pageNumber as unknown) as number // successful conversion
```

## Using TypeScript to work with the DOM

In order to be able to work with DOM flawlessly one need to use type assertion to specify HTML type.

```ts
const someElement = document.querySelector(".foo");

console.log("someELement', someElement.value) 
// error. TS can't find var.value
```

This can be solved by making someElement a generic type (any) but this disables or defeats the essence of using TS.

Bad fix. Works but not recommended.

```ts
const someElement = document.querySelector(".foo");

console.log("someELement', (someElement as any).value) 
```

```ts
const someElement = document.querySelector(".foo") as HTMLInputElement;

console.log("someElement", someElement.value);
```

Here it was converted to HTMLInputElement which allows it to access the `value` property

### Adding Eventlistener

```ts
const someElement = document. querySelector(".foo");

someElement.addEventListener('blur', (event) => {
  console.log("event", event.target.value) // error
})
```

The code above failed because by default `event.target` has a type EventTarget.
But the particular element we target is an input element.

SOLUTION

```ts
const someElement = document. querySelector(".foo");

someElement.addEventListener('blur', (event) => {
  const target = event.target as HTMLInputElement;
  console.log("event", target.value)
})
```

## Classes

```ts
class User {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullname(): string {
    return this.firstName + " " + this.lastName;
  }
}

const user = new User("Monster", "lessons")

console.log(user.firstName) 
```

> `protected`, private is allowed in class and it's children.

```ts
class User {
  private firstName: string;
  protected lastName: string;
}
```

firstName and lastName can only be accessed in the class. (Private Variables)

**readonly variables**:

```ts
class User {
  firstName: string;
  lastName: string;
  readonly unchangableName: string;

    constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.unchangeableName = this.firstName;
  }
}
```

Any attempt to rewrite `unchangableName` within the class will lead to an error.

### Using Interfaces with classes

When a class implements an interface the function(s) declare within the interface must created in it.

```ts
interface UserInterface {
  getFullname(): string;
}

class User implements UserInterface {
  firstName: string;
  lastName: string;
  readonly unchangeable: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.unchangeableName = this.firstName;
  }

  getFullame(): string {
    return this.firstName + " " + this.lastName;
  }
}
```

If getFullname function was not created in the class it will cause an error to occur.

### Static Properties

A static property makes a variable accessible only within the class and unavailable within the instance of that class.

```ts
class User implements UserInterface {
  firstName: string;
  lastName: string;
  readonly unchangeable: string;
}
```

### Inheritance

```ts
interface UserInterface {
  getFullname(): string;
}

class User implements UserInterface {
  firstName: string;
  lastName: string;
  readonly unchangeable: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.unchangeableName = this.firstName;
  }

  getFullame(): string {
    return this.firstName + " " + this.lastName;
  }
}

class Admin extends User {
  private editor: string

  setEditor(editor: string): void {
    this.editor = editor
  }

  getEditor(): string {
    return this.editor
  }
}
```

## OOP

Object-oriented programming (OOP) is a programming paradigm that organizes code into objects, which are instances of classes. In TypeScript, a statically-typed superset of JavaScript, you can create classes and objects to implement OOP concepts.

Here's a brief explanation using TypeScript:

1. **Class Definition:**
   Define a class using the `class` keyword. Classes are blueprints for creating objects.

    ```typescript
    class Animal {
      // Properties
      name: string;
      age: number;

      // Constructor
      constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
      }

      // Methods
      makeSound() {
        console.log("Some generic animal sound");
      }
    }
    ```

2. **Object Creation:**
   Instantiate objects from the class by using the `new` keyword.

    ```typescript
    const myPet = new Animal("Fluffy", 3);
    ```

3. **Inheritance:**
   Create a hierarchy of classes using inheritance. A class can inherit properties and methods from another class.

    ```typescript
    class Dog extends Animal {
      // Additional properties
      breed: string;

      // Constructor
      constructor(name: string, age: number, breed: string) {
        super(name, age); // Call the parent class constructor
        this.breed = breed;
      }

      // Override method
      makeSound() {
        console.log("Woof! Woof!");
      }

      // Additional method
      fetch() {
        console.log("Fetching the ball!");
      }
    }
    ```

4. **Encapsulation:**
   Encapsulate data by using access modifiers (`public`, `private`, `protected`) to control access to class members.

    ```typescript
    class BankAccount {
      private balance: number;

      constructor(initialBalance: number) {
        this.balance = initialBalance;
      }

      deposit(amount: number) {
        this.balance += amount;
      }

      withdraw(amount: number) {
        if (amount <= this.balance) {
          this.balance -= amount;
        } else {
          console.log("Insufficient funds");
        }
      }
    }
    ```

5. **Polymorphism:**
   Achieve polymorphism by using method overloading or implementing interfaces to allow objects of different classes to be treated as objects of a common type.

    ```typescript
    interface Shape {
      calculateArea(): number;
    }

    class Circle implements Shape {
      radius: number;

      constructor(radius: number) {
        this.radius = radius;
      }

      calculateArea() {
        return Math.PI * this.radius ** 2;
      }
    }

    class Square implements Shape {
      sideLength: number;

      constructor(sideLength: number) {
        this.sideLength = sideLength;
      }

      calculateArea() {
        return this.sideLength ** 2;
      }
    }
    ```

These are fundamental OOP concepts in TypeScript. Classes provide a way to model real-world entities, encapsulate data, and define behaviors in a structured manner.

## Generics in TypeScript

Generics allow creating "type variables" which can be used to create classes, function & type aliases that don't need to explicitly define the type that they use.

Generics makes it easier to write reusable code.

### Functions-Generics

Generics with functions help make more generalized methods which more accurately represent the types used and returned.

```ts
function createPair<S, T>(v1: S, v2: T): [S, T]{
  return [v1, v2];
}

console.log(createPair<string, number>("hello", 42))
```

### Classes-Generics

Generics can be used to create generalized classes like Map

```ts
class NamedValue<T> {
  private _value: T | undefined;

  constructor (private name: string) {}

  public setValue(value: T) {
    this._value = value
  }

  public getValue(): T | undefined {
    return this._value
  }

  public toString(): string {
    return `${this.name}: ${this._value}`
  }
}

let value = new NamedValue<number>("myNumber")
value.setValue(10)
```

### Type Aliases

```ts
type Wrapped<T> = { value: T }

const WrappedValue: Wrapped<number> = { value: 10 }
```

Also works with interface syntax

### Default Value

Generics can be assigned default value which apply if no other value is specified or inferred.

```ts
class NamedValue<T = string> {
  private _value: T | undefined

  constructor(private name: string){}

  public setValue(value: T) {
    this._value = value
  }

  public getValue(value: T) {
    return this._value
  }

  public toString(): string {
    return `${this.name}: ${this._value}`;
  }
}

let value = new NamedValue("myNumber")
value.setValue("myValue")

console.log(value.toString())
```

### Extends

constraint can be added to generics to limit what's allowed. The constraints make it possible to rely on a more specific type when using the generic type.

```ts
function createLoggedPair<S extends string | number, T extends string | number>(v1: S, v2: T): [S, T] {
  console.log(`Createing pair: v1='${v1}', v2='${v2}'`_
    return [v1, v2]
  )
}
```

## Typescript Compiler

### Watch mode

Used to auto compile TypeScript file to a JavacSript file based on changes in the file.

```sh
tsc app.ts --watch

// or 

tsc app.ts -w
```

### Allow TypeScript manage file in a directory

```sh
tsc --init 
```

Running this code create a **tsconfig.json** file.

After running the code above

```sh
tsc
```

 when `tsc` is run, it executes all TS files within the directory, producing a their JS file.

 To enter watch mode for all TS files in the directory:

 ```sh
 tsc --watch
 ```

**tsconfig.json**:

```json
{
  "compilerOptions": {
        "target": "es2016",
        "module": "commonjs",
        "esModuleInterop": true,
        "forceConsistentCasingInFileNames": true, 
        "strict": true, 
        "skipLibCheck": true
  }
}   
```

#### Exclude Files to Execute in the directory

This allow one to inform typescript to exclude files to execute

```json
{
  "compilerOptions": {
        ....
  },
  "exclude": [
    "app.ts",
    "**/*.dev.ts"
    "node_modules"
  ]
}   
```

The configuration above prevent `app.ts` in the main directory and any file that ends `.dev.ts` that is within a the main or that is a sub directory of the main directory.

And also any TS file within node modules. But by default node_module is excluded.

#### Include Files to Execute in the directory

This allows one to specify files to execute. Files not listed will not be executed.

```json
{
  "compilerOptions": {
        ....
  },
  "include": [
    "app.ts",
    "helpers/analytics.ts"
  ]
}   
```

#### Specifying Files to Execute in the directory

```json
{
  "compilerOptions": {
        ....
  },
  "files": [
    "app.ts",
    "helpers/analytics.ts"
  ]
}   
```

#### Using DOM APIs in TS

**app.ts**:

```ts
const button = document.querySelector('button')!;

button.addEventListener();
```

The `!` after the button allows TypeScript to accept button even though it doesn't know what it is.

the `lib: []` compiler option allow one to include some JavaScript library to TS.

**tsconfig.json**:

```json
{
  "compilerOption": {
    "lib": [
      "dom", // unlocks all the javascript DOM api
      "es6", 
      "dom.iterable",
      "scripthost"
    ]
  }
}
```

One can get the same configuration as the  one above by setting

```json
{
  "compilerOptions": {
    "target": "es6"
  }
}
```

#### Allow JavaScript files to be compiled

This allow JS file to be compiled  by TS.

```json
{
  "compilerOptions": {
    "allowJs": true
  }
}
```

#### Set where TS creates files (.js) should be stored

```json
{
  "compilerOptions": {
    "outDir": "./dist"
  }
}
```

All executed files are move into dist directory.

It can also recreate directories based on the structure of the working directory. In order to prevent this, it's best to set the rootDir.

#### Set TS rootDir

```json
{
  "compilerOptions": {
    "rootDir": "./src"
  }
}
```

#### Remove Comments  in generated JS

```json
{
  "compilerOptions": {
    "removeComments": true
  }
}
```

#### Don't generate .js files

```json
{
  "compilerOptions": {
    "noEmit": true
  }
}
```

#### Prevent TS from generating JavaScript when an error occurs

```json
{
  "compilerOptions": {
    "noEmitOnError": true
  }
}
```

#### Strict Type-Checking Options

- `strict: true`
Enables all type checking.

- `noImplicitAny: true`
It ensure that data is properly declared.

- `strictNullCheck`
Ensure there are no null value that are null
