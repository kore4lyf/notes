# Dart

## Getting started with Dart

By installing the flutter SDK, dart will automatically be installed.

or

Linux

```sh
apt install dart
```

Upgrading Dart version.

```sh
flutter upgrade
```

## Dart CLI

Help

```sh
dart -h

or 

dart -help
```

Use the help command to see the commands available in the dart cli

- `create` - is use to create a new dart project

For info on the type of project that can be created.

```sh
dart create -h
```

The can be a package, console (default), server-shelf, web.

To create a console app

```sh
dart create -t console-simple .
```

you will require force to create the template in a current directory.

```sh
dart create -t console-simple .
```

### Console template files

1. `pubspec.yaml` file is where we add packages from pub.dev
2. `/bin` folder is where source code are stored.

The main function is the entry point for any dart program.

### Executing Dart Code

```sh
dart run
```

### Compiling code to exe

```sh
dart compile exe bin/dart.dart
```

It will create a file called dart.exe
to run the code

```sh
bin/dart.exe
```

### Compiling code to Javascript

```sh
dart compile js bin/dart.dart
```

It will create a file called out.js
To execute this file.

```sh
node out
```

## Variables

### Built-in Types

- Numbers (int, double)
- Strings (string)
- Booleans (bool)
- Lists(List, also known as arrays)
- Sets (Set)
- Maps (Map)
- Runes (Runes, oftem replaced by the character API)
- Symbols (Symbol)
- null (Null)

```dart
void main() {
  int num = 2;
}
```

```dart
void main() {
  int num1 = 2; // whole number 
  double num2 = 3.0; // Decimal

  // "is" is the instance-of operator 
  print((num1 + num2) is int);

  // print runtime type of an object
  print((num1 + num2).runtimeType);

  String str = "hero";

  // String interpolation
  // $str simple logic
  // ${complex logic}
  print("The type of $str is a String? ${str is String}");

  // Reassignable variables
  var username = "korede"

}
```

The `var` reps a reassignable variable

```dart
var username;
username = "fireship"
```

If you have a variable that shouldn't be reinitalize after it has been initialized.

```dart
final String fullname = "Jeffrey";
// realName = "Jefferson" // error
```

// const is like final, but is an immutable compile-time constant

```dart
const int age = 75;
// The value must be known at compile time
// therefore it cannot be used with a value generated at runtime 
// const int favNumber = num1 + 5; // error
```

## Null Safety

Null safety means that a variable cannot be assigned a null value by default.

```dart
// int age = null // error;

// To null a variable use ?
int? age;

print(age == null) // true
```

Assertion operator ! Make the compiler think the value is non-null

```dart
String? answer;

// String result = answer; // error;

String result = answer!; // i.e I am sure this won't be null
// Doing this will increase the risk of runtime errors
```

Another application is Late Initialization

```dart
class Animal {
  late final String _size;

  void goBig() {
    _size = "big";
    print(_size);
  }
}
```

You can add a ? to String to make _size nullable but, what if you don't want it to be nullable.

By using final you are suppose to initialise _size immediately but, that where late comes into play.

**`late` is used to assign a non-nullable value.**

## Control flow

### If statements

Example:

```dart
void main() {
  String color = "blue";

  if (color == "blue") {
    //
  }
  else if (color == "green") {
    //
  } else {
    // default
  }
}
```

For simple conditionals we can ommit curly braces.

```dart
if (color == "red") print("hello red!");
```

Example 2:

```dart
String thing1 = "";

// if (thing1){} won't work. use thing1.isEmpty

if (thing1.isEmpty)

String? thing2;

if (thing2 != null);
```

### Loops

#### For loop

Example:

```dart
for (var i = 0; i < 5; i++) {
  print(i);
  // break;
  // continue;
}

```

#### While loop

Example:

```dart
int i = 0;

while (i < 5) {
  print(i);
}
```

#### Do While loop

```dart
i = 0;

do {
  print(i);
} while (i < 5);
```

#### Assert

It takes a condition as an argument.
If a condition is true, nothing will happen, if it's not true, it will raise an error in debug mode.

```dart
// Assert
var text = "good";

assert(txt != "bad");
```

## Operators

### Basic Math

```dart
1 + 2 - 3 * 4 / 5;
```

### Logic

```dart
1 == 1;
1 < 2;
(1 >= 1) || ("a" == "b");
(1 >= 1) && ("a" == "b");
```

### Decrement && Increment

```dart
var x = 1;
x++; // x = x + 1
x--; // x = x - 1
```

### Assignment

??= - assign value if null, otherwise use current value.

```dart
String? name;
name ??= "Guest";
// ??=

// i.e. guest will be assigned to name, if name is null.

var z = name ?? "Guest";
// z will be equal to name only if 
```

### Tenary

Syntax:
Condition ? value (if true) : value (if false)

### Cascade

starts with two dots (..)

Example without cascade:

```dart
dynamic Paint;

var paint = Paint();
paint.color = "black";
paint.strokeCap = "round";
paint.strokeWidth = 5.0;
```

Cascade allows you to call a method, or access a property on an object, but it will discard the result and return the original object.

Cascade is useful because one may want to modify some properties on an object, but one would want to return the object maybe to a function or a property on a flutter widget.

```dart
var paint = Paint()
  ..color = "black"
  ..strokeCap = "round"
  ..strokeWidth = 5.0;
```

### Typecast

```dart
var number = 23 as String;
number is String; // true
```

## Function

Functions are objects. Which they can be assigned to a variable or passed as variables / argument.

In dart, there is no function keyword.

Example

```dart
void main () {

  // Basic Function
  takeFive() {

  }

  takeFive(); // calling the function, which doesn't have a return value.
}
```

```dart
void main () {

  // Basic Function
  String takeFive(int number) {
    return "$number minus five equals ${number - 5}";
  }

  var str = takeFive(23); // 23 is a positional argument
}
```

In dart, named parameter is much more preferable to a positional parameter, because they make your code more readable.

```dart
void main() {
  s
  // Basic Function
  namedParams({int a, required int b}) {
    return a - b;
  }

  namedParams(b: 10, a: 23); // a & b are named params
}
```

By using named params, the order would not matter.
B is required.

### Arrow Function

The benefit of using arrow function is that you can fit your code on one line.

```dart
void main() {
  takeTen(int number) => "$number minus ten equals ${number - 10}"

  takeTen(23);
}
```

#### Anonymous Function

A function without a name.

```dart
callIt(() => "Hola mundo!");
```

#### Callback Function

A function that takes another function as an argument.

```dart
// First-class functions
callIt(Function callback) {

}
```

## List

Similar to array in other languages.

```dart
void main() {
  List<int> list = [1, 2, 3, 4, 5]; //

  list[0]; // 1

  list.sublist(2, 5); // [3, 4, 5]

  list.sublist(0, 5); // [1, 2, 3, 4, 5]

  var list2 = List.filled(5, "hello") // ["hello", "hello", "hello", "hello", "hello"] // fixed length

  list.length; // returns the size of an array
  list.last; // returns the last item of an array
  list.first; // returns the first item of an arrays

  list.add(4) // push
  list.removeLast(); // pop
  list.insert(1, 20) // inserts 20 at index 1

  // Iterables can be used on a loop

  for(int n in list) {
    print(n);
  }

  // ForEach
  list.forEach((item) => print(item))

  // Creating a new list from an existing list
  var doubled = list.map((n) => n*2);

  // Combining multiple lists, with the spread syntax
  var combined [...list, ...doubled];
  combined.forEach(print)

  // Adding an Item to a list based on certain condition
  bool depressed = false;
  
  var cart = [
    "milk",
    "eggs",
    if (depressed) "vodka"
  ]

}
```

The data type is called the `<Generic Type>` of the list, which reps the data type that is acceptable by the variable.

A `List` inherits it's behaviour from a more fundamental class called an **Iterable**.

An **iterable** is a collection of objects.

The 3 most common iterable in dart are:

1. List
2. Map
3. Set

## Map

It's called a some languages e.g. python

It also take a generic `<key, value>`.

```dart
void main() {
  Map<String, dynamic> book = {
    "title": "Moby Dick",
    "author": "Herman Melville",
    "pages": 744
  }
}

// Accessing values in a map
book["title"];

// Assigning a value to a specific key
book["publised"] = 1851;

book.keys; // Access all of the keys as an iterable
book.values; // Access all of the values as an iterable
book.values.toList(); // Convert the iterable to a List



// Looping through maps
// using entries
for (MapEntry b in book.entries) {
  print("Key ${b.key}, Value ${b.value}");
}

book.forEach((k,v) => print("Key: $k, Value: $v"));
```

## Classes

A class is a blueprint of an object, which means that every object is an instance of a class.

```dart
void main() {

  // Creating an object
  Basic thing = Basic();
  thing.id;

}

class Basic {
  int id;

  // constructor
  Basic(this.ids);

  // method
  doStuff() {
    print("Hello my ID is $id");
  }

  // Static Method - the operate globally i.e. they don't require instantiation to work.
  static helper() {
    print("I am static")
  }
}
```

## Constructor

```dart
void main() {

}

class Rectangle {

  final int width;
  final int height;
  late final int area;

  Rectangle(this.width, this.height) {
    area = width * height;
    // this.area (is optional)
  }
}
```

Adding optional arguments

```dart
void main() {
  var rect = Reactangle(25, 30);
}

class Rectangle {

  final int width;
  final int height;
  late final int area;
  String? name;

  Rectangle(this.width, this.height, [this.name]) {
    area = width * height;
    // this.area (is optional)
  }
}
```

Using named arguments

```dart
void main() {
  const cir = Circle(radius: 50, name: "foo");
}

class Circle {

  const Circle ({ int radius, String? name });
}
```

name here is an optional parameter because of the symbol ?, provided before the type.

A class may want to have multiple ways to construct an object.

```dart
void main() {
  var p1 = Point.fromMap({ "lat": 23, "lng": 50 });
  var p2 = Point.fromList([ 23, 50 ]);
}

class Point {
  double lat = 0;
  double lng = 0;

  // Name constructor
  Point.fromMap(Map data) {
    lat = data["lat"]
    lng = data["lng"]
  }

  Point.fromList(List data) {
    lat = data[0]
    lng = data[1]
  }
}
```

## Interfaces

When ever you create a class in dart, you are implicitly creating an interface.

```dart
void main() {
  var e = Elephant("Boo");

  // works everywhere
  e.sayHi();

  // only works in this file
  e._saySecret();
}

class Elephant {
  // public interface
  final String name;

  // In the interface, but visible only in this library. (private)
  final int _id = 23;

  // Not in the interface, since this is a constructor.
  Elephant(this.name);

  // Public method.
  sayHi() => "My name is $name.";

  // Private method
  _saySecret() => "My ID is $_id.";
}
```

> Every variable that starts with an _ is a private variable.

To create a class that cannot be instantiated add the `abstract` keyword before the class.

An abstract class can only be implemented by another class.

```dart
abstract class Animal {

}
```

## Inheritance (extends) & Method Overriding & super keyword

```dart
void main() {

}

abstract class Dog {
  
  void walk() {
    print("Walking...")
  }
}

class Pug extend Dog {
  String breed = "pug";

  // To change how the walk method works
  @override
  void walk() {
    super.walk(); // Calling base class walk() method;
    print("I am tired. Stopping now.") // Adding more functionality
  }
}
```

The super keyword is used to reference the base class (the class that was inherited from)

## Mixin

You may want to add additional behaviour instead of extending a class.

Mixins are usually considered as behaviours.

```dart
void main() {
  var s = SuperHuman();
  s.benchPress();
  s.sprint();

}

class Human() {}

class SuperHuman extends Human with Strong, Fast {

}

mixin Strong {
  bool doesList = true;

  void benchPress() {
    print("doing bench press...");
  }
}

mixin Fast {
  bool doesRun = true;

  void sprint() {
    print("running fast...");
  }
}
```

## Generics

A generic is way to to pass a type as a parameter.

```dart
void main() {
  List<int> numbers = [1, 2, 3];

  Box<String> box1 = Box("cool");

  Box<double> box2 = Box(2.23);

  Box<List<int>> box3 = Box([1, 2, 3])
}

class Box<T> {
  T value;
  
  Box(this.value);
  
  T openBox() {
    return value
  }
}
```

## Packages

Import file

```dart
import "constructors.dart";

void main() {
  Circle(radius: 23);
}

```

You might want to avoid name colision, and assign a name to you import.

Assuming we try to create another circle class in our code there will be a name collision, in that case it might be best for us to assign a name to our import, instead of importing the library to our code directly.

```dart
import "constructors.dart" as my_shapes;

class Circle {}

void main() {
  Circle();
  my_shapes.Circle(radius: 23);
}
```

Another solution is to ommit the class causing the colision.

```dart
import "constructors.dart" hide Circle;

class Circle {}

void main() {
  Circle();
}
```

In a case where you only want to use a class.

```dart
import "constructors.dart" show Rectangle;

class Circle {}

void main() {
  Circle();
  Rectangle(1, 2);
}
```

## Future

Future is similart to Promises in javascript. 

Futures are non-blocking

```dart
import "dart:async";

void main() {
  var delay = Future.delayed(Duration(second: 5))

  delay.then((value) => print("I have been waithing")).CatchError((err) => print(err))
}
```

Future support asyn await syntax.

```dart
import "dart:async";

void main() {

  runInTheFuture();
}

Future<String> runInTheFuture() async {
  var data = await Future.value("world"); // Pause function until resolved
  
  return "hello $data";
}

```

## Stream

Future listens for one single async event.

stream listens for many async events.

```dart
import "dart:async";

void main() {
  var stream = Stream.fromIterable([1, 2, 3])
  stream.listen((event) => print(event)); 

  stream
    .map((event) => event * 2)
    .listen((event) => print(event)); // The stream has already been listened to
}
```

Can only listen to stream once.

In the code above the second listen won't work because a stream can only be listened to once.

To enable a stream to be listened to multiple times, it must be made a broadcast stream.

```dart
import "dart:async";

void main() {
  var stream = Stream.fromIterable([1, 2, 3]).asBroadcastStream();

  stream.listen((event) => print(event)); 

  stream
    .map((event) => event * 2)
    .listen((event) => print(event));
}
```

Streams can also use async await.

```dart

streamFun() async {
  var stream = Stream.fromIterable([4, 5, 6])

  // The code inside this for loop will execute each time the stream emmit a new event.
  await for (int value in stream) {
    print(value)
  }
}
```