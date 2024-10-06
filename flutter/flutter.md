# Flutter

## Introduction

Flutter is a framework for creating cross-platform applications (With a single code base).

- Android
- iOS
- Desktop
- Web

## Making a New Flutter Project

To create a new flutter project:

Syntax: flutter create project_name

```sh
 flutter create coffee_card
```

## Widgets

Almost everything in Flutter is a widget.

Widgets are classes.

A flutter app is primarily built from a bunch of widget which forms a **widget tree**.

There is the root widget (MyAPP), which is passed into `runApp(MyApp())`. The root widget will have a child widget, which could be a layout or container widget.

### Some categories of widgets

- Container
- Column
- Row
- Text
- Image
- Text
- Button

A widget can be Built-in or Custom.

Just like our app (MyApp) is a custom widget, because it inherits from the custom widget class.

Widgets are like reuseable components in react.

> Flutter apps are made using widgets, which are dart classes that can be instantiated.

## Material App & Scaffold

Always use material app at start, with time you can begin to scaffold your app.

```dart
import 'package:flutter/material.dart';

void main() {
  runApp(const MaterialApp(
    home: Text('hello, bro'),
  ));
}
```

You can optimize performance and improve performance.

You will notice that the text is red and has a yellow underline. This is because the text lacks a Material Ancestor.

The typical fix is to give the widget a Scaffold ancestor. The Scaffold creates a Material widget that defines it's default text styles.

```dart
import 'package:flutter/material.dart';

void main() {
  runApp(const MaterialApp(
    home: Scaffold(
      body: Center(
        child: Text('hello, bro')
      )
    )
  ));
}
```

Dute to the how appBar work our MaterialApp widget cannot be a constant any more.
```dart
import 'package:flutter/material.dart';

void main() {
  runApp(MaterialApp(
    home: Scaffold(
      appBar: AppBar(
        title: const Text("My Coffee Card"),
        backgroundColor: Colors.brown[700],
        centerTitle: true,
      ),
      body:  const Text("Hello, Korede")
      )
  ));
}
```

Due the way the code is written we won't automatically get a hot reload, which means we must manually do a refresh.

## Stateless Widgets

The way hot reload works in Flutter is that when changes are made it re-runs the build function that the change was made in.  and rebuilds that part of the app.

> Type stl and enter to get a blueprint function of a stateless widget.

A stateless widget doesn't contain any state that changes over time (e.g. toggling, tracking user input)

```dart
import 'package:flutter/material.dart';

void main() {
  runApp(MaterialApp(
    home: Scaffold(
      appBar: AppBar(
        title: const Text("My Coffee Card"),
        backgroundColor: Colors.brown[700],
        centerTitle: true,
      ),
      body:  const Home(),
      )
  ));
}

class Home extends StatelessWidget {
  const Home({super.key});

  @override
  Widget build(BuildContext context) {
    return const Text("Hello, Korede");
  }
}
```

## Containers

A container widget wraps other widgets.

When a container is used, we can add a margin and a padding to that container easily and we can also apply a layout if we want to.


The child should be the last name parameter.

```dart
import 'package:flutter/material.dart';

void main() {
  runApp(MaterialApp(
    home: Scaffold(
      appBar: AppBar(
        title: const Text("My Coffee Card"),
        backgroundColor: Colors.brown[700],
        centerTitle: true,
      ),
      body:  const Home(),
      )
  ));
}

class Home extends StatelessWidget {
  const Home({super.key});

  @override 
  Widget build(BuildContext context) {
    return Container(
      color: Colors.orange, 
      width: 200,
      height: 100,
      padding: const EdgeInsets.all(20),
      margin: const EdgeInsets.fromLTRB(10, 40, 0, 0),
      child: const Text('Hello, bro', 
        style: TextStyle(
          fontSize: 18,
          letterSpacing: 4,
          decoration: TextDecoration.underline,
          fontStyle: FontStyle.italic
        )
      ),
    );
  }
}
```

## Imports & Quick Refactor

You can decide to modularise a part of your code.

home.dart 

```dart
import "package:flutter/material.dart";

class Home extends StatelessWidget {
  const Home({super.key});

  @override 
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text("My Coffee Card"),
        backgroundColor: Colors.brown[700],
        centerTitle: true,
      ),
      body:  const Text("Holla, mundos!"),
      );
  }
}
```

main.dart

```dart
import 'package:coffee_card/home.dart';
import 'package:flutter/material.dart';

void main() {
  runApp(MaterialApp(
    home: Home(),
  ));
}
```

VScode can easily help fix your import by doing a quick fix.

## Columns

The column widget lets us create the column of other child widgets.

```dart
import "package:flutter/material.dart";

class Home extends StatelessWidget {
  const Home({super.key});

  @override 
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text("My Coffee Card", style: TextStyle(
          color: Colors.white,
          fontWeight: FontWeight.bold
        )),
        backgroundColor: Colors.brown[700],
        centerTitle: true,
      ),
      body:  Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          Container(
            color: Colors.brown[200],
            padding: const EdgeInsets.all(20),
            child: const Text('How I like my coffee...')
          ),
          Container(
            color: Colors.brown[100],
            padding: const EdgeInsets.all(20),
            child: const Text('Coffee prefs')
          )
      ],),
      );
  }
}
```

## Rows

Rows allow us to display widgets from left to right.

```dart
import 'package:flutter/material.dart';

class CoffeePrefs extends StatelessWidget {
  const CoffeePrefs({super.key});

  @override
  Widget build(BuildContext context) {
    return const Column(
      children: [
        Row(
          children: [
            Text('Strength: '),
            Text('3'),
            SizedBox(width: 50)
          ],
        ),
        Row(
          children: [
            Text('Sugars: '),
            Text('3'),
            SizedBox(width: 50)
          ]
        )
      ],
    );
  }
}
```

The `SizeBox(width: 20) is used to add space between widgets.

## Images

Create an **/assets** folder in your root directory then you can add your images inside it or inside a subdirectory in the assets folder.

When static assets are used in a flutter project, we must inform flutter where to find them (by specifying the path in the **pubspec.yaml** file).

In the pubspec.yaml we will find this commented part:

```yaml
  # To add assets to your application, add an assets section, like this:
  # assets:
  #   - images/a_dot_burr.jpeg
  #   - images/a_dot_ham.jpeg
```

Uncomment the **assets:** and add you image path

```yaml
  # To add assets to your application, add an assets section, like this:
  assets:
    - assets/img/coffee_bean.png
    - assets/img/coffe_bg.png 
    - assets/img/sugar_cube.png
```

To use your image:

```dart
Row(
  children: [
    const Text('Sugars: '),
    const Text('3'),
    Image.asset("assets/img/sugar_cube.png", 
      width: 25,
      color: Colors.brown[100], 
      colorBlendMode: BlendMode.multiply),
    SizedBox(width: 50)
  ]
)
```

## Expanded Widget

Assuming you add a large image to your app, it will not overflow like it does on a website, it will show some type of an image error symbol in your app.

In app dev we must stay within the bounds of the screen. To fix the problem, we must use an `Expanded()` widget.

By using the expanded widget, it automatically passes the screen bound constraint to it's child.

```dart
Expanded( 
  child: Image.asset('assets/img/coffee_bg.jpg',
  fit: BoxFit.cover,
  alignment: Alignment.bottomCenter
)
```

Using Expanded to create a space between effect betweeen two widget.

```dart
Row(
  children: [
    const Text('Strength: '),
    const Text('3'), 
    Image.asset("assets/img/coffee_bean.png", 
      width: 25,
      color: Colors.brown[100], 
      colorBlendMode: BlendMode.multiply),
    const Expanded(
      child: SizedBox()
    ),
    const Text('+'),
  ],
),
```

## Buttons & Click Events

### Types of buttons

1. Elevated (`ElevatedButton`)
2. Filled(`FilledButton`)
3. Filled Tonal (`FilledButton.tonal`)
4. Outlined (`OutlinedButton`)
   1. Text (`TextButton`)

```dart
children: [
  TextButton(
    style: TextButton.styleFrom(
      backgroundColor: Colors.brown,
      foregroundColor: Colors.white
    ),
    onPressed: increaseSugar,
    child: const Text('+'),
  )
]
```

## Stateful Widgets

A stateful widgets is a widget that can take a dynamic data which rely on changing data to reflect the changes.



## Control Flow in Lists



## Making Reusable Widgets 



## Setting up a New Project



## Making a Custom Theme 



## Text Theme



## Reusable Styled Text Widgets



## Using Google Fonts



## Container Gradients



## List View



## Card Widget



## Icon Button



## Making a Character Class



## Mixins



## Getters



## Enhanced Enums 



## Making a Skill Class



## Adding Images



## Adding Dummy Data



## Using the Character Class



## Adding a Create Screen



## Making a Text Field



## Text Editing Controllers



## Submit Handler Function



## Displaying Vocations



## Adding a Scrollable Widget



## onTap Gesture



## Selecting a Vocation 



## Submitting the Data



## What About the Form ## 



## Pushing & Popping Routes



## Navigating Between Screens



## Showing a Dialog



## Adding a Dialog Theme



## Navigating to a Profile Screen



## Passing Data into Routes



## Fleshing Out the Profile Screen



## Arguments in Stateful Widgets 



## Using Tables 



## Outputting Vocation Skills 



## Selecting an Active Skill



## Adding a Snackbar



## Why We Need Global State



## Provider Package



## Making a Character Store



## Providing & Consuming State



## Adding New Characters



## Chapter Introduction



## Firebase SDK Setup



## Firestore Database Setup



## Factory Contructors



## Processing Character Data



## Character Factory Constructor 



## Processing Character Stats



## Firestore Converters



## Adding Firestore Data



## Fetching Character Data 



## Saving Character Changes



## Deleting Character Data



## Swipe to Dismiss



## Implicit vs Explicit Animations



## Hero Widget



## Animated Rotation



## Animation Controllers



## Tween Sequences



## Animated Builder Widget



## Changing the Heart Color



## Stack and Positioned Widgets



## User Input in Flutter



## Text Field Widget



## Text Editing Controller



## Form Widget



## Text Form Field



## Drodown Form Field



## Saving the Form Data



## Resetting the Form



## Why use Riverpod



## Setup & Installing Riverpod



## Providers



## Stateless Consumers



## Stateful Consumers



## Generated Providers



## Notifier Providers 



## Updating State



## Generated Notifier Provider



## Dependent Providers



## Final Touches



## Intro & Setup



## Making a User Model



## Making Auth Forms 



## Switching Between Forms



## Validating Form Fields



## Firebase SDK Setup



## Firebase Auth Setup



## Signing Users Up



## Logging Users Out



## Signing Users In



## Simple Error Feedback



## Riverpod Stream Providers



## Auth State Changes



## Consumer Widget



## Finishing Touches



## What is Dart



## Dart Basics 



## Type Annotations



## Functions



## Lists & Sets 



## Control Flow



## Maps



## Classes 



## Method Overriding



## Generics



## Async, Await & Futures



## Fetching Data 



