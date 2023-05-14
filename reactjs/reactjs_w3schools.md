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





