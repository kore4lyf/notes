# React JS
Pure React by Dave	Ceddia




## Introduction
There’s	React, Redux, Webpack, Babel, React Router,	and	on and on.	

**Pure React**:	The	core concepts of React,	in	isolation, without	Redux, Webpack, and the rest.

When you learn React  cold , you’ll be able to go on and learn all of its friends with ease: Redux, Router, and the rest

- We’ll look at how to compose components together and how to work with JSX, React’s HTML-like syntax for rendering elements to the page.
- You’ll learn about “props” as a way to pass in the data they need, and “propTypes” for documenting and debugging the props that a component requires.
- We’ll cover React’s special “children” prop, which is a powerful tool for building reusable, composable components.
- Finally, you’ll learn about “state,” how it differs from props, and how to
organize it in an application. 



### Why Just React?
Without a solid understanding of React, simultaneously learning libraries like Redux and tools like Webpack will only slow down your learning process. It’s very tempting to dive in and learn it all at once, especially if you have a fun project in mind (or a deadline to meet).

Learn Webpack + Babel + Redux + Routing + AJAX later.



### Environment Setup
Tools
- Node.js (at least v4.0, >= 6 recommended)
- NPM (version >= 3 recommended) or yarn
- Google Chrome (or some other modern browser)
- React Developer Tools 
The React Developer Tools can be installed from here: https://github.com/facebook/react-devtools
Follow the instructions to install the tools for your browser. The React dev tools allow you to inspect the React component tree (as opposed to the DOM tree) and view the props and state assigned to each component. It is extremely useful for debugging.

- Your text editor or IDE of choice



### Install Create React App
Run this command to install the tool globally (the -g means global):
```sh
npm install -g create-react-app
```





## Hello World

**Step 1**

Use the create-react-app command to generate a new project. It will create a directory and install all the necessary packages, and then we’ll move into that
new directory.

```sh
$ create-react-app react-hello
$ cd react-hello
```
The generated project contains some files we won’t need right now, so we’ll delete them. You could also just ignore them.
```sh
$ rm src/App.* src/index.css src/logo.svg
```



**Step 2**

Open up the file src/index.js. Delete all of the contents, and type this code in:
Type it out by hand? Like a savage? Typing it drills it into your brain much better than simply copying and pasting it. You’re forming new neuron pathways. Those pathways are going to understand React one day. Help
’em out.

```js
import React from 'react';
import ReactDOM from 'react-dom';

function HelloWorld() {
    return (
        <div>Hello World!</div>
    );
}

ReactDOM.render(
    <HelloWorld/>,
    document.querySelector('#root')
);
```

> The strings ‘react’ and ‘react-dom’ are important: they correspond to the names
of modules installed by npm. If you’re familiar with Node.js, import React from 'react' is equivalent to var **React = require('react')**.



**Step 3**

From inside the react-hello directory, start the app by running:
```sh
$ npm start
```
A browser will open up automatically and display “Hello World!”.




### How the Code Works
The call to ReactDOM.render, is what actually
makes this work. 
React uses the concept of a virtual DOM. It creates a representation of your component hierarchy and then renders those components by creating real DOM elements and inserting them where you tell it. In this case, that’s inside the element with an id of root.

Try commenting out that line `<HelloWorld/>` and watch how Hello World disappears thing there. 

**ReactDOM.render** takes 2 arguments: what you want to render (your component, or any other React Element) and where you want to render it into (a real DOM element).

**ReactDOM.render([React Element], [DOM element]);**

Above that, we have a component named HelloWorld. The primary way of writing React components is as plain functions like this. They’re often called
“**stateless function components**”.

There are 2 other ways to create components: ES6 classes, and the nowdeprecated React.createClass. You may still see the createClass style in old Stack Overflow answers or old GitHub projects, so we’ll go over how it works.
But primarily we’ll be writing functions where possible, and ES6 classes when we need to.
The HTML-like syntax inside the render function is called JSX, and we’ll cover that next.





## JSX: What and Why

One of the first things you probably noticed about React code is that it looks like the component function is returning HTML. This HTML-like syntax is actually called JSX.




### What Is JSX?
JSX is a syntax invented for React that looks very similar to (X)HTML. It allows you to create elements by writing in a familiar-looking syntax, instead of writing out function calls by hand. The HTML-like syntax actually compiles down to real JavaScript.



### JSX Is Compiled to JavaScript
The JSX elements you write are actually compiled down to JavaScript by a tool called Babel. Babel is a “transpiler,” a made-up word that means it transforms code into valid ES5 JavaScript that all browsers can understand. Each JSX element becomes a function call, where its arguments are its attributes (“props”) and its contents (“children”).

Here’s an example of some simple JSX:   
```js
return <span>Hello!</span>; 
```
And here is the JavaScript generated by the compiler:
```js
return React.createElement(
'span',
{},
'Hello!');
```

The React.createElement function signature looks like this:
```
React.createElement(
    string|element,
    [propsObject],
    [children...])
```

The string|element can be a string describing an HTML or SVG tag (like 'div' or 'span'), or it can be a component (like HelloWorld, with no quotes).
The propsObject and children are optional, and you can also supply more than one child by passing additional arguments:

```js
React.createElement(
    'div',
    {},
    'Hello',
    'World'
);

You can also nest the calls:
React.createElement('div', {},
 React.createElement('div', {}, 'Child1'),
 React.createElement('div', {}, 'Child2',
  React.createElement('div', {}, 'Child2_child')
  )
);
```

Try it yourself! Rewrite the HelloWorld component to call React.createElement instead of returning JSX.
```js
function HelloWorld() {
    return (
        React.createElement(/* ... */)
    );
}
```
Here is a slightly more complicated bit of JSX:
```jsx
<span className='song-name'>
{props.song.name}
</span>
```
And here is what it compiles to:
```js
React.createElement('span',
    {className: 'song-name' },
    props.song.name
);
```
See how JSX is essentially a nice shorthand for writing function calls? You don’t even have to use JSX if you don’t want to – you can write out these
function calls manually.
Your first instinct might be to avoid writing JSX because you don’t like the look of “HTML in JS.” Maybe you’d rather write real JavaScript function calls, because it feels more “pure” somehow. I suggest giving JSX an honest try before
you give up on it.
Writing out the React.createElement calls is not a common approach in the React community. Nearly all React developers use JSX, which means code that
you see in the wild (on GitHub, Stack Overflow, etc) is likely to be written with it.





