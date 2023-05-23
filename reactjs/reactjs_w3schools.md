# React W3schools.com

## Introduction
- React is a JavaScript library for building user interfaces.
- React is used to build single page applications.
- React allows us to create reusable UI components.
- React is a JavaScript library created by Facebook.



### How does React Work?
> React creates a VIRTUAL DOM in memory.

Instead of manipulating the browser's DOM directly, React creates a virtual DOM in memory, where it does all the necessary manipulating, before making the changes in the browser DOM.

> React only changes what needs to be changed!

React finds out what changes have been made, and changes only what needs to be changed.

You will learn the various aspects of how React does this in the rest of this tutorial.





## React Getting Started

To use React in production, you need NPM and Node.js


To get an overview of what React is, you can write React code directly in HTML.



### React Directly in HTML
The quickest way start learning React is to write React directly in your HTML files.

Start by including three scripts, the first two let us write React code in our JavaScripts, and the third, Babel, allows us to write JSX syntax and ES6 in older browsers.

You will learn more about JSX in the React JSX chapter.

Example
Include three CDN's in your HTML file:
```html
<!DOCTYPE html>
<html>
  <script src="https://unpkg.com/react@16/umd/react.production.min.js"></script>
  <script src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script>
  <script src="https://unpkg.com/babel-standalone@6.15.0/babel.min.js"></script>
  <body>
  
    <div id="mydiv"></div>

    <script type="text/babel">
      class Hello extends React.Component {
        render() {
          return <h1>Hello World!</h1>
        }
      }
    </script>

  </body>
</html>
```
> This way of using React can be OK for testing purposes, but for production you will need to set up a React environment.




### Setting up a React Environment
If you have NPM and Node.js installed, you can create a React application by first installing the create-react-app.

If you've already created the create-react-app you can skip this section.

Install create-react-app by running this command in your terminal:
```
C:\Users\Your Name>npm install -g create-react-app
```

Then you are able to create a React application, let's create one called myfirstreact.

Run this command to create a React application named myfirstreact:

```
C:\Users\Your Name>npx create-react-app myfirstreact
```
The create-react-app will set up everything you need to run a React application.



### Run the React Application
Now you are ready to run your first real React application!

Run this command to move to the myfirstreact directory:
```
C:\Users\Your Name>cd myfirstreact
```
Run this command to run the React application myfirstreact:

```
C:\Users\Your Name\myfirstreact>npm start
```
A new browser window will pop up with your newly created React App! If not, open your browser and type localhost:3000 in the address bar.



### Modify the React Application
So far so good, but how do I change the content?

Look in the myfirstreact directory, and you will find a src folder. Inside the src folder there is a file called App.js, open it and it will look like this:

/myfirstreact/src/App.js:
```js
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
```
> Try changing the HTML content and save the file.

Notice that the changes is visible immediately after you save the file, you do not have to reload the browser!


Example
Replace all the content inside the `<div className="App">` with a `<h1>` element.

See the changes in the browser when you click Save.

```js
import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello World!</h1>
      </div>
    );
  }
}

export default App;
```




### What's Next?
Now you have a React Environment on your computer, and you are ready to learn more about React.

In the rest of this tutorial we will use our Show React tool to explain the various aspects of React, and how they are displayed in the browser.

If you want to follow the same steps on your computer, start by stripping down the src folder to only contain two files: index.js and index.html, you should also remove any unnecessary lines of code inside the two files to make them look like the files in the Show React tool below:

Example
Click the "Run Example" button to see the result.

index.js:
```js
import React from 'react';
import ReactDOM from 'react-dom';

const myfirstelement = <h1>Hello React!</h1>

ReactDOM.render(myfirstelement, document.getElementById('root'));
```

index.html:
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>React App</title>
  </head>
  <body>

    <div id="root"></div>

  </body>
</html>
```





## React ES6



### What is ES6?
ES6 stands for ECMAScript 6.

ECMAScript was created to standardize JavaScript, and ES6 is the 6th version of ECMAScript, it was published in 2015, and is also known as ECMAScript 2015.



### Why Should I Learn ES6?
React uses ES6, and you should be familiar with some of the new features like:

- Classes
- Arrow Functions
- Variables (let, const, var)



### Classes
ES6 introduced classes.

A class is a type of function, but instead of using the keyword function to initiate it, we use the keyword class, and the properties are assigned inside a constructor() method.

Example
```js
A simple class constructor:

class Car {
  constructor(name) {
    this.brand = name;
  }
}

```
Now you can create objects using the Car class:

Example
Create an object called "mycar" based on the Car class:
```js
class Car {
  constructor(name) {
    this.brand = name;
  }
}

mycar = new Car("Ford");
```

> Note: The constructor function is called automatically when the object is initialized.




### Method in Classes
You can add your own methods in a class:

Example
Create a method named "present":
```js
class Car {
  constructor(name) {
    this.brand = name;
  }
  
  present() {
    return 'I have a ' + this.brand;
  }
}

mycar = new Car("Ford");
mycar.present();
```



### Class Inheritance
To create a class inheritance, use the extends keyword.

A class created with a class inheritance inherits all the methods from another class:

Example
Create a class named "Model" which will inherit the methods from the "Car" class:
```js
class Car {
  constructor(name) {
    this.brand = name;
  }

  present() {
    return 'I have a ' + this.brand;
  }
}

class Model extends Car {
  constructor(name, mod) {
    super(name);
    this.model = mod;
  }  
  show() {
      return this.present() + ', it is a ' + this.model
  }
}
mycar = new Model("Ford", "Mustang");
mycar.show();
```

> The super() method refers to the parent class. By calling the super() method in the constructor method, we call the parent's constructor method and gets access to the parent's properties and methods.



### Arrow Functions
Arrow functions were introduced in ES6.

Arrow functions allow us to write shorter function syntax:

Before:
```js
hello = function() {
  return "Hello World!";
}
```

With Arrow Function:
```js
hello = () => {
  return "Hello World!";
}
```

It gets shorter! If the function has only one statement, and the statement returns a value, you can remove the brackets and the return keyword:

Arrow Functions Return Value by Default:
```js
hello = () => "Hello World!";
```
> Note: This works only if the function has only one statement.


If you have parameters, you pass them inside the parentheses:
Arrow Function With Parameters:
```js
hello = (val) => "Hello " + val;
```

In fact, if you have only one parameter, you can skip the parentheses as well:
Arrow Function Without Parentheses:
```js
hello = val => "Hello " + val;
```




### What About this?
The handling of this is also different in arrow functions compared to regular functions.
In short, with arrow functions there are no binding of this.
With arrow functions, the this keyword always represents the object that defined the arrow function.





## React JSX

### What is JSX?
JSX stands for JavaScript XML.
JSX allows us to write HTML in React.
JSX makes it easier to write and add HTML in React.



### Coding JSX
JSX allows us to write HTML elements in JavaScript and place them in the DOM without any createElement()  and/or appendChild() methods.

JSX converts HTML tags into react elements.

You are not required to use JSX, but JSX makes it easier to write React applications.

Let us demonstrate with two examples, the first uses JSX and the second does not:

Example 1
JSX:
```js
const myelement = <h1>I Love JSX!</h1>;

ReactDOM.render(myelement, document.getElementById('root'));
```

Example 2
Without JSX:
```js
const myelement = React.createElement('h1', {}, 'I do not use JSX!');

ReactDOM.render(myelement, document.getElementById('root'));
```
As you can see in the first example, JSX allows us to write HTML directly within the JavaScript code.

JSX is an extension of the JavaScript language based on ES6, and is translated into regular JavaScript at runtime.



### Expressions in JSX
With JSX you can write expressions inside curly braces { }.

The expression can be a React variable, or property, or any other valid JavaScript expression. JSX will execute the expression and return the result:

Example
Execute the expression 5 + 5:
```js
const myelement = <h1>React is {5 + 5} times better with JSX</h1>;
```



### Inserting a Large Block of HTML
To write HTML on multiple lines, put the HTML inside parentheses:

Example
Create a list with three list items:
```js
const myelement = (
  <ul>
    <li>Apples</li>
    <li>Bananas</li>
    <li>Cherries</li>
  </ul>
);
```


### One Top Level Element
The HTML code must be wrapped in ONE top level element.

So if you like to write two headers, you must put them inside a parent element, like a div element

Example
Wrap two headers inside one DIV element:
```js
const myelement = (
  <div>
    <h1>I am a Header.</h1>
    <h1>I am a Header too.</h1>
  </div>
);
```

JSX will throw an error if the HTML is not correct, or if the HTML misses a parent element.

Elements Must be Closed
JSX follows XML rules, and therefore HTML elements must be properly closed.

Example
Close empty elements with />

```js
const myelement = <input type="text" />;
```

JSX will throw an error if the HTML is not properly closed.





## React Components

Components are like functions that return HTML elements.




### React Components
Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and returns HTML via a render function.

Components come in two types, Class components and Function components, in this tutorial we will concentrate on Class components.



### Create a Class Component
When creating a React component, the component's name must start with an upper case letter.

The component has to include the extends React.Component statement, this statement creates an inheritance to React.Component, and gives your component access to React.Component's functions.

The component also requires a render() method, this method returns HTML.

Example
Create a Class component called Car

```js
class Car extends React.Component {
  render() {
    return <h2>Hi, I am a Car!</h2>;
  }
}
```

Now your React application has a component called Car, which returns a <h2> element.

To use this component in your application, use similar syntax as normal HTML: <Car />

Example
Display the Car component in the "root" element:
```js
ReactDOM.render(<Car />, document.getElementById('root'));
```



### Create a Function Component
Here is the same example as above, but created using a Function component instead.

A Function component also returns HTML, and behaves pretty much the same way as a Class component, but Class components have some additions, and will be preferred in this tutorial.

Example
Create a Function component called Car
```js
function Car() {
  return <h2>Hi, I am also a Car!</h2>;
}
```
Once again your React application has a Car component.

Refer to the Car component as normal HTML (except in React, components must start with an upper case letter):

Example
Display the Car component in the "root" element:
```js
ReactDOM.render(<Car />, document.getElementById('root'));
```



### Component Constructor
If there is a constructor() function in your component, this function will be called when the component gets initiated.

The constructor function is where you initiate the component's properties.

In React, component properties should be kept in an object called state.

You will learn more about state later in this tutorial.

The constructor function is also where you honor the inheritance of the parent component by including the super() statement, which executes the parent component's constructor function, and your component has access to all the functions of the parent component (React.Component).

Example
Create a constructor function in the Car component, and add a color property:

```js
class Car extends React.Component {
  constructor() {
    super();
    this.state = {color: "red"};
  }
  render() {
    return <h2>I am a Car!</h2>;
  }
}
```

Use the color property in the render() function:

Example
```js
class Car extends React.Component {
  constructor() {
    super();
    this.state = {color: "red"};
  }
  render() {
    return <h2>I am a {this.state.color} Car!</h2>;
  }
}
```



### Props
Another way of handling component properties is by using props.

Props are like function arguments, and you send them into the component as attributes.

You will learn more about props in the next chapter.

Example
Use an attribute to pass a color to the Car component, and use it in the render() function:
```js
class Car extends React.Component {
  render() {
    return <h2>I am a {this.props.color} Car!</h2>;
  }
}

ReactDOM.render(<Car color="red"/>, document.getElementById('root'));
```



### Components in Components
We can refer to components inside other components:

Example
Use the Car component inside the Garage component:
```js
class Car extends React.Component {
  render() {
    return <h2>I am a Car!</h2>;
  }
}

class Garage extends React.Component {
  render() {
    return (
      <div>
        <h1>Who lives in my Garage?</h1>
        <Car />
      </div>
    );
  }
}

ReactDOM.render(<Garage />, document.getElementById('root'));
```



### Components in Files
React is all about re-using code, and it can be smart to insert some of your components in separate files.

To do that, create a new file with a .js file extension and put the code inside it:

Note that the file must start by importing React (as before), and it has to end with the statement export default Car;.

Example
This is the new file, we named it "App.js":
```js
import React from 'react';
import ReactDOM from 'react-dom';

class Car extends React.Component {
  render() {
    return <h2>Hi, I am a Car!</h2>;
   
  }
}
export default Car;
```
To be able to use the Car component, you have to import the file in your application.

Example
Now we import the "App.js" file in the application, and we can use the Car component as if it was created here.
```js
import React from 'react';
import ReactDOM from 'react-dom';
import Car from './App.js';

ReactDOM.render(<Car />, document.getElementById('root'));
```





## React Props

Props are arguments passed into React components.

Props are passed to components via HTML attributes.



### React Props
React Props are like function arguments in JavaScript and attributes in HTML.

To send props into a component, use the same syntax as HTML attributes:

Example
Add a "brand" attribute to the Car element:
```js
const myelement = <Car brand="Ford" />;
```
The component receives the argument as a props object:

Example
Use the brand attribute in the component:
```js
class Car extends React.Component {
  render() {
    return <h2>I am a {this.props.brand}!</h1>;
  }
}
```



### Pass Data 
Props are also how you pass data from one component to another, as parameters.

Example
Send the "brand" property from the Garage component to the Car component:
```js
class Car extends React.Component {
  render() {
    return <h2>I am a {this.props.brand}!</h2>;
  }
}

class Garage extends React.Component {
  render() {
    return (
      <div>
      <h1>Who lives in my garage?</h1>
      <Car brand="Ford" />
      </div>
    );
  }
}

ReactDOM.render(<Garage/>, document.getElementById('root'));
```
 

If you have a variable to send, and not a string as in the example above, you just put the variable name inside curly brackets:

Example
Create a variable named "carname" and send it to the Car component:
```js
class Car extends React.Component {
  render() {
    return <h2>I am a {this.props.brand}!</h2>;
  }
}

class Garage extends React.Component {
  render() {
    const carname = "Ford";
    return (
      <div>
      <h1>Who lives in my garage?</h1>
      <Car brand={carname} />
      </div>
    );
  }
}

ReactDOM.render(<Garage />, document.getElementById('root'));
```
 

Or if it was an object:

Example
Create an object named "carinfo" and send it to the Car component:
```js
class Car extends React.Component {
  render() {
    return <h2>I am a {this.props.brand.model}!</h2>;
  }
}

class Garage extends React.Component {
  render() {
    const carinfo = {name: "Ford", model: "Mustang"};
    return (
      <div>
      <h1>Who lives in my garage?</h1>
      <Car brand={carinfo} />
      </div>
    );
  }
}

ReactDOM.render(<Garage />, document.getElementById('root'));
```

### Props in the Constructor
If your component has a constructor function, the props should always be passed to the constructor and also to the React.Component via the super() method.

Example
```js
class Car extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <h2>I am a Car!</h2>;
  }
}

ReactDOM.render(<Car model="Mustang"/>, document.getElementById('root'));
```

> Note: React Props are read-only! You will get an error if you try to change their value.





## React State

React components has a built-in state object.


The state object is where you store property values that belongs to the component.

When the state object changes, the component re-renders.



### Creating the state Object
The state object is initialized in the constructor:

Example:
Specifiy the state object in the constructor method:
```js
class Car extends React.Component {
  constructor(props) {
    super(props);
    this.state = {brand: "Ford"};
  }
  render() {
    return (
      <div>
        <h1>My Car</h1>
      </div>
    );
  }
}
```

The state object can contain as many properties as you like:

Example:
Specify all the properties your component need:
```js
class Car extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: "Ford",
      model: "Mustang",
      color: "red",
      year: 1964
    };
  }
  render() {
    return (
      <div>
        <h1>My Car</h1>
      </div>
    );
  }
}
```
 
 

 ### Using the state Object
Refer to the state object anywhere in the component by using the this.state.propertyname syntax:

Example:
Refer to the state object in the render() method:
```js
class Car extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: "Ford",
      model: "Mustang",
      color: "red",
      year: 1964
    };
  }

  render() {
    return (
      <div>
        <h1>My {this.state.brand}</h1>
        <p>
          It is a {this.state.color}
          {this.state.model}
          from {this.state.year}.
        </p>
      </div>
    );
  }
}
``` 
 
 Changing the state Object
To change a value in the state object, use the this.setState() method.

When a value in the state object changes, the component will re-render, meaning that the output will change according to the new value(s).

Example:
Add a button with an onClick event that will change the color property:
```js
class Car extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: "Ford",
      model: "Mustang",
      color: "red",
      year: 1964
    };
  }
  changeColor = () => {
    this.setState({color: "blue"});
  }
  render() {
    return (
      <div>
        <h1>My {this.state.brand}</h1>
        <p>
          It is a {this.state.color}
          {this.state.model}
          from {this.state.year}.
        </p>
        <button
          type="button"
          onClick={this.changeColor}
        >Change color</button>
      </div>
    );
  }
}
```

> Always use the setState() method to change the state object, it will ensure that the component knows its been updated and calls the render() method (and all the other lifecycle methods).




