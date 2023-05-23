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





## React Lifecycle


### Lifecycle of Components
Each component in React has a lifecycle which you can monitor and manipulate during its three main phases.

The three phases are: Mounting, Updating, and Unmounting.



### Mounting
Mounting means putting elements into the DOM.

React has four built-in methods that gets called, in this order, when mounting a component:

1. constructor()
2. getDerivedStateFromProps()
3. render()
4. componentDidMount()
   
The render() method is required and will always be called, the others are optional and will be called if you define them.

 

#### constructor
The constructor() method is called before anything else, when the component is initiated, and it is the natural place to set up the initial state and other initial values.

The `constructor()` method is called with the props, as arguments, and you should always start by calling the super(props) before anything else, this will initiate the parent's constructor method and allows the component to inherit methods from its parent (React.Component).

Example:
The constructor method is called, by React, every time you make a component:
```js
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {favoritecolor: "red"};
  }
  render() {
    return (
      <h1>My Favorite Color is {this.state.favoritecolor}</h1>
    );
  }
}

ReactDOM.render(<Header/>, document.getElementById('root'));
``` 
 


#### getDerivedStateFromProps
The getDerivedStateFromProps() method is called right before rendering the element(s) in the DOM.

This is the natural place to set the state object based on the initial props.

It takes state as an argument, and returns an object with changes to the state.

The example below starts with the favorite color being "red", but the getDerivedStateFromProps() method updates the favorite color based on the favcol attribute:

Example:
The getDerivedStateFromProps method is called right before the render method:
```js
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {favoritecolor: "red"};
  }
  static getDerivedStateFromProps(props, state) {
    return {favoritecolor: props.favcol };
  }
  render() {
    return (
      <h1>My Favorite Color is {this.state.favoritecolor}</h1>
    );
  }
}

ReactDOM.render(<Header favcol="yellow"/>, document.getElementById('root')); 
``` 

 
 
#### render
The render() method is required, and is the method that actual outputs HTML to the DOM.

Example:
A simple component with a simple render() method:
```js
class Header extends React.Component {
  render() {
    return (
      <h1>This is the content of the Header component</h1>
    );
  }
}

ReactDOM.render(<Header />, document.getElementById('root'));
```



### Updating
The next phase in the lifecycle is when a component is updated.

A component is updated whenever there is a change in the component's state or props.

React has five built-in methods that gets called, in this order, when a component is updated:

1. getDerivedStateFromProps()
2. shouldComponentUpdate()
3. render()
4. getSnapshotBeforeUpdate()
5. componentDidUpdate()

The render() method is required and will always be called, the others are optional and will be called if you define them.



getDerivedStateFromProps
Also at updates the getDerivedStateFromProps method is called. This is the first method that is called when a component gets updated.

This is still the natural place to set the state object based on the initial props.

The example below has a button that changes the favorite color to blue, but since the getDerivedStateFromProps() method is called, which updates the state with the color from the favcol attribute, the favorite color is still rendered as yellow:

Example:
If the component gets updated, the getDerivedStateFromProps() method is called:
```js
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {favoritecolor: "red"};
  }
  static getDerivedStateFromProps(props, state) {
    return {favoritecolor: props.favcol };
  }
  changeColor = () => {
    this.setState({favoritecolor: "blue"});
  }
  render() {
    return (
      <div>
      <h1>My Favorite Color is {this.state.favoritecolor}</h1>
      <button type="button" onClick={this.changeColor}>Change color</button>
      </div>
    );
  }
}

ReactDOM.render(<Header favcol="yellow"/>, document.getElementById('root'));
```
 

#### shouldComponentUpdate
In the shouldComponentUpdate() method you can return a Boolean value that specifies whether React should continue with the rendering or not.

The default value is true.

The example below shows what happens when the shouldComponentUpdate() method returns false:

Example:
Stop the component from rendering at any update:

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {favoritecolor: "red"};
  }
  shouldComponentUpdate() {
    return false;
  }
  changeColor = () => {
    this.setState({favoritecolor: "blue"});
  }
  render() {
    return (
      <div>
      <h1>My Favorite Color is {this.state.favoritecolor}</h1>
      <button type="button" onClick={this.changeColor}>Change color</button>
      </div>
    );
  }
}

ReactDOM.render(<Header />, document.getElementById('root'));
 
 
 

Example:
Same example as above, but this time the shouldComponentUpdate() method returns true instead:
```js
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {favoritecolor: "red"};
  }
  shouldComponentUpdate() {
    return true;
  }
  changeColor = () => {
    this.setState({favoritecolor: "blue"});
  }
  render() {
    return (
      <div>
      <h1>My Favorite Color is {this.state.favoritecolor}</h1>
      <button type="button" onClick={this.changeColor}>Change color</button>
      </div>
    );
  }
}

ReactDOM.render(<Header />, document.getElementById('root'));
```


#### render
The render() method is of course called when a component gets updated, it has to re-render the HTML to the DOM, with the new changes.

The example below has a button that changes the favorite color to blue:

Example:
Click the button to make a change in the component's state:

```js
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {favoritecolor: "red"};
  }
  changeColor = () => {
    this.setState({favoritecolor: "blue"});
  }
  render() {
    return (
      <div>
      <h1>My Favorite Color is {this.state.favoritecolor}</h1>
      <button type="button" onClick={this.changeColor}>Change color</button>
      </div>
    );
  }
}

ReactDOM.render(<Header />, document.getElementById('root'));
```

getSnapshotBeforeUpdate
In the getSnapshotBeforeUpdate() method you have access to the props and state before the update, meaning that even after the update, you can check what the values were before the update.

If the getSnapshotBeforeUpdate() method is present, you should also include the componentDidUpdate() method, otherwise you will get an error.

The example below might seem complicated, but all it does is this:

When the component is mounting it is rendered with the favorite color "red".

When the component has been mounted, a timer changes the state, and after one second, the favorite color becomes "yellow".

This action triggers the update phase, and since this component has a getSnapshotBeforeUpdate() method, this method is executed, and writes a message to the empty DIV1 element.

Then the componentDidUpdate() method is executed and writes a message in the empty DIV2 element:

 

Example:
Use the getSnapshotBeforeUpdate() method to find out what the state object looked like before the update:
```js
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {favoritecolor: "red"};
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({favoritecolor: "yellow"})
    }, 1000)
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    document.getElementById("div1").innerHTML =
    "Before the update, the favorite was " + prevState.favoritecolor;
  }
  componentDidUpdate() {
    document.getElementById("div2").innerHTML =
    "The updated favorite is " + this.state.favoritecolor;
  }
  render() {
    return (
      <div>
        <h1>My Favorite Color is {this.state.favoritecolor}</h1>
        <div id="div1"></div>
        <div id="div2"></div>
      </div>
    );
  }
}

ReactDOM.render(<Header />, document.getElementById('root'));
```


#### componentDidUpdate
The componentDidUpdate method is called after the component is updated in the DOM.

The example below might seem complicated, but all it does is this:

When the component is mounting it is rendered with the favorite color "red".

When the component has been mounted, a timer changes the state, and the color becomes "yellow".

This action triggers the update phase, and since this component has a componentDidUpdate method, this method is executed and writes a message in the empty DIV element:

Example:
The componentDidUpdate method is called after the update has been rendered in the DOM:
```js
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {favoritecolor: "red"};
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({favoritecolor: "yellow"})
    }, 1000)
  }
  componentDidUpdate() {
    document.getElementById("mydiv").innerHTML =
    "The updated favorite is " + this.state.favoritecolor;
  }
  render() {
    return (
      <div>
      <h1>My Favorite Color is {this.state.favoritecolor}</h1>
      <div id="mydiv"></div>
      </div>
    );
  }
}

ReactDOM.render(<Header />, document.getElementById('root'));
```



### Unmounting
The next phase in the lifecycle is when a component is removed from the DOM, or unmounting as React likes to call it.

React has only one built-in method that gets called when a component is unmounted:

componentWillUnmount()

#### componentWillUnmount
The componentWillUnmount method is called when the component is about to be removed from the DOM.

Example:
```js
class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {show: true};
  }
  delHeader = () => {
    this.setState({show: false});
  }
  render() {
    let myheader;
    if (this.state.show) {
      myheader = <Child />;
    };
    return (
      <div>
      {myheader}
      <button type="button" onClick={this.delHeader}>Delete Header</button>
      </div>
    );
  }
}

class Child extends React.Component {
  componentWillUnmount() {
    alert("The component named Header is about to be unmounted.");
    Click the button to delete the header:
  }
  render() {
    return (
      <h1>Hello World!</h1>
    );
  }
}

ReactDOM.render(<Container />, document.getElementById('root'));
```





## React Events

Just like HTML, React can perform actions based on user events.


React has the same events as HTML: click, change, mouseover etc.

### Adding Events
React events are written in camelCase syntax:

onClick instead of onclick.

React event handlers are written inside curly braces:

onClick={shoot}  instead of onclick="shoot()".

React:
```js
<button onClick={shoot}>Take the Shot!</button>
```

HTML:
```html
<button onclick="shoot()">Take the Shot!</button>
```



### Event Handlers
A good practice is to put the event handler as a method in the component class:

Example:
Put the shoot function inside the Football component:
```js
class Football extends React.Component {
  shoot() {
    alert("Great Shot!");
  }
  render() {
    return (
      <button onClick={this.shoot}>Take the shot!</button>
    );
  }
}

ReactDOM.render(<Football />, document.getElementById('root'));
```



### Bind this
For methods in React, the this keyword should represent the component that owns the method.

That is why you should use arrow functions. With arrow functions, this will always represent the object that defined the arrow function.

Example:
```js
class Football extends React.Component {
  shoot = () => {
    alert(this);
    /*
    The 'this' keyword refers to the component object
    */
  }
  render() {
    return (
      <button onClick={this.shoot}>Take the shot!</button>
    );
  }
}

ReactDOM.render(<Football />, document.getElementById('root'));
```
#### Why Arrow Functions?
In class components, the this keyword is not defined by default, so with regular functions the this keyword represents the object that called the method, which can be the global window object, a HTML button, or whatever.

If you must use regular functions instead of arrow functions you have to bind this to the component instance using the bind() method:

Example:
Make this available in the shoot function by binding it in the constructor function:
```js
class Football extends React.Component {
  constructor(props) {
    super(props)
    this.shoot = this.shoot.bind(this)
  }
  shoot() {
    alert(this);
    /*
    Thanks to the binding in the constructor function,
    the 'this' keyword now refers to the component object
    */
  }
  render() {
    return (
      <button onClick={this.shoot}>Take the shot!</button>
    );
  }
}

ReactDOM.render(<Football />, document.getElementById('root'));
```

> Without the binding, the this keyword would return undefined.




### Passing Arguments
If you want to send parameters into an event handler, you have two options:

1. Make an anonymous arrow function:

Example:
Send "Goal" as a parameter to the shoot function, using arrow function:
```js
class Football extends React.Component {
  shoot = (a) => {
    alert(a);
  }
  render() {
    return (
      <button onClick={() => this.shoot("Goal")}>Take the shot!</button>
    );
  }
}

ReactDOM.render(<Football />, document.getElementById('root'));
```

Or:

2. Bind the event handler to this.

Note that the first argument has to be this.

Example:
Send "Goal" as a parameter to the shoot function:
```js
class Football extends React.Component {
  shoot(a) {
    alert(a);
  }
  render() {
    return (
      <button onClick={this.shoot.bind(this, "Goal")}>Take the shot!</button>
    );
  }
}

ReactDOM.render(<Football />, document.getElementById('root'));
```

> Note on the second example: If you send arguments without using the bind method, (this.shoot(this, "Goal") instead of this.shoot.bind(this, "Goal")), the shoot function will be executed when the page is loaded instead of waiting for the button to be clicked.



### React Event Object
Event handlers have access to the React event that triggered the function.

In our example the event is the "click" event. Notice that once again the syntax is different when using arrow functions or not.

With the arrow function you have to send the event argument manually:

Example:
Arrow Function: Sending the event object manually:
```js
class Football extends React.Component {
  shoot = (a, b) => {
    alert(b.type);
    /*
    'b' represents the React event that triggered the function,
    in this case the 'click' event
    */
  }
  render() {
    return (
      <button onClick={(ev) => this.shoot("Goal", ev)}>Take the shot!</button>
    );
  }
}

ReactDOM.render(<Football />, document.getElementById('root'));
```

Without arrow function, the React event object is sent automatically as the last argument when using the bind() method:

Example:
With the bind() method, the event object is sent as the last argument:
```js
class Football extends React.Component {
  shoot = (a, b) => {
    alert(b.type);
    /*
    'b' represents the React event that triggered the function,
    in this case the 'click' event
    */
  }
  render() {
    return (
      <button onClick={this.shoot.bind(this, "Goal")}>Take the shot!</button>
    );
  }
}

ReactDOM.render(<Football />, document.getElementById('root'));
```





## React Forms

Just like in HTML, React uses forms to allow users to interact with the web page.


Adding Forms in React
You add a form with React like any other element:

Example:
Add a form that allows users to enter their name:
```js
class MyForm extends React.Component {
  render() {
    return (
      <form>
        <h1>Hello</h1>
        <p>Enter your name:</p>
        <input
          type="text"
        />
      </form>
    );
  }
}
ReactDOM.render(<MyForm />, document.getElementById('root'));
```
 

### Handling Forms
Handling forms is about how you handle the data when it changes value or gets submitted.

In HTML, form data is usually handled by the DOM.

In React, form data is usually handled by the components.

When the data is handled by the components, all the data is stored in the component state.

You can control changes by adding event handlers in the onChange attribute:

Example:
Add an event handler in the onChange attribute, and let the event handler update the state object:
```js
class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '' };
  }
  myChangeHandler = (event) => {
    this.setState({username: event.target.value});
  }
  render() {
    return (
      <form>
      <h1>Hello {this.state.username}</h1>
      <p>Enter your name:</p>
      <input
        type='text'
        onChange={this.myChangeHandler}
      />
      </form>
    );
  }
}

ReactDOM.render(<MyForm />, document.getElementById('root'));
```
 
> Note: You must initialize the state in the constructor method before you can use it.

> Note: You get access to the field value by using the event.target.value syntax.




### Conditional Rendering
If you do not want to display the h1 element until the user has done any input, you can add an if statement.

Look at the example below and note the following:

1. We create an empty variable, in this example we call it header.

2. We add an if statement to insert content to the header variable if the user has done any input.

3. We insert the header variable in the output, using curly brackets.

Example:
Display the header only if username is defined:
```js
class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '' };
  }
  myChangeHandler = (event) => {
    this.setState({username: event.target.value});
  }
  render() {
    let header = '';
    if (this.state.username) {
      header = <h1>Hello {this.state.username}</h1>;
    } else {
      header = '';
    }
    return (
      <form>
      {header}
      <p>Enter your name:</p>
      <input
        type='text'
        onChange={this.myChangeHandler}
      />
      </form>
    );
  }
}

ReactDOM.render(<MyForm />, document.getElementById('root'));
```



### Submitting Forms
You can control the submit action by adding an event handler in the onSubmit attribute:

Example:
Add a submit button and an event handler in the onSubmit attribute:
```js
class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '' };
  }
  mySubmitHandler = (event) => {
    event.preventDefault();
    alert("You are submitting " + this.state.username);
  }
  myChangeHandler = (event) => {
    this.setState({username: event.target.value});
  }
  render() {
    return (
      <form onSubmit={this.mySubmitHandler}>
      <h1>Hello {this.state.username}</h1>
      <p>Enter your name, and submit:</p>
      <input
        type='text'
        onChange={this.myChangeHandler}
      />
      <input
        type='submit'
      />
      </form>
    );
  }
}

ReactDOM.render(<MyForm />, document.getElementById('root'));
 ```
 

> Note that we use event.preventDefault() to prevent the form from actually being submitted.



### Multiple Input Fields
You can control the values of more than one input field by adding a name attribute to each element.

When you initialize the state in the constructor, use the field names.

To access the fields in the event handler use the event.target.name and event.target.value syntax.

To update the state in the this.setState method, use square brackets [bracket notation] around the property name.

Example:
Write a form with two input fields:
```js
class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      age: null,
    };
  }
  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});
  }
  render() {
    return (
      <form>
      <h1>Hello {this.state.username} {this.state.age}</h1>
      <p>Enter your name:</p>
      <input
        type='text'
        name='username'
        onChange={this.myChangeHandler}
      />
      <p>Enter your age:</p>
      <input
        type='text'
        name='age'
        onChange={this.myChangeHandler}
      />
      </form>
    );
  }
}

ReactDOM.render(<MyForm />, document.getElementById('root')); 
```
 
> Note: We use the same event handler function for both input fields, we could write one event handler for each, but this gives us much cleaner code and is the preferred way in React.




### Validating Form Input
You can validate form input when the user is typing or you can wait untill the form gets submitted.

Example:
When you fill in your age, you will get an alert if the age field is not numeric:
```js
class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      age: null,
    };
  }
  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    if (nam === "age") {
      if (!Number(val)) {
        alert("Your age must be a number");
      }
    }
    this.setState({[nam]: val});
  }
  render() {
    return (
      <form>
      <h1>Hello {this.state.username} {this.state.age}</h1>
      <p>Enter your name:</p>
      <input
        type='text'
        name='username'
        onChange={this.myChangeHandler}
      />
      <p>Enter your age:</p>
      <input
        type='text'
        name='age'
        onChange={this.myChangeHandler}
      />
      </form>
    );
  }
}

ReactDOM.render(<MyForm />, document.getElementById('root')); 
```
 

Below you will see the same example as above, but the validation is done when the form gets submitted instead of when you write in the field.

Example:
Same example, but with the validation at form submit:
```js
class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      age: null,
    };
  }
  mySubmitHandler = (event) => {
    event.preventDefault();
    let age = this.state.age;
    if (!Number(age)) {
      alert("Your age must be a number");
    }
  }
  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});
  }
  render() {
    return (
      <form onSubmit={this.mySubmitHandler}>
      <h1>Hello {this.state.username} {this.state.age}</h1>
      <p>Enter your name:</p>
      <input
        type='text'
        name='username'
        onChange={this.myChangeHandler}
      />
      <p>Enter your age:</p>
      <input
        type='text'
        name='age'
        onChange={this.myChangeHandler}
      />
      <br/>
      <br/>
      <input type='submit' />
      </form>
    );
  }
}

ReactDOM.render(<MyForm />, document.getElementById('root')); 
```
 
 

### Adding Error Message
Error messages in alert boxes can be annoying, so let's make an error message that is empty by default, but displays the error when the user inputs anything invalid:

Example:
When you fill in your age as not numeric, an error message is displayed:
```js
class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      age: null,
      errormessage: ''
    };
  }
  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    let err = '';
    if (nam === "age") {
      if (val !="" && !Number(val)) {
        err = <strong>Your age must be a number</strong>;
      }
    }
    this.setState({errormessage: err});
    this.setState({[nam]: val});
  }
  render() {
    return (
      <form>
      <h1>Hello {this.state.username} {this.state.age}</h1>
      <p>Enter your name:</p>
      <input
        type='text'
        name='username'
        onChange={this.myChangeHandler}
      />
      <p>Enter your age:</p>
      <input
        type='text'
        name='age'
        onChange={this.myChangeHandler}
      />
      {this.state.errormessage}
      </form>
    );
  }
}

ReactDOM.render(<MyForm />, document.getElementById('root')); 
```
 

### Textarea
The textarea element in React is slightly different from ordinary HTML.

In HTML the value of a textarea was the text between the start tag <textarea> and the end tag </textarea>, in React the value of a textarea is placed in a value attribute:

Example:
A simple textarea with some content initialized in the constructor:
```js
class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: 'The content of a textarea goes in the value attribute'
    };
  }
  render() {
    return (
      <form>
      <textarea value={this.state.description} />
      </form>
    );
  }
}

ReactDOM.render(<MyForm />, document.getElementById('root')); 
```


### Select
A drop down list, or a select box, in React is also a bit different from HTML.

in HTML, the selected value in the drop down list was defined with the selected attribute:

HTML:
```html
<select>
  <option value="Ford">Ford</option>
  <option value="Volvo" selected>Volvo</option>
  <option value="Fiat">Fiat</option>
</select> 
```
In React, the selected value is defined with a value attribute on the select tag:

Example:
A simple select box, where the selected value "Volvo" is initialized in the constructor:
```js
class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mycar: 'Volvo'
    };
  }
  render() {
    return (
      <form>
      <select value={this.state.mycar}>
        <option value="Ford">Ford</option>
        <option value="Volvo">Volvo</option>
        <option value="Fiat">Fiat</option>
      </select>
      </form>
    );
  }
}

ReactDOM.render(<MyForm />, document.getElementById('root'));
```





