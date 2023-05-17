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





## Working With JSX

### Composing Components
JSX, like HTML, allows you to nest elements inside of one another. This is probably not a big surprise.
Let’s refactor the HelloWorld component from earlier to demonstrate how composition works. Here’s the original HelloWorld:
```js
function HelloWorld() {
    return (
        <div>Hello World!</div>
    );
}
```
Leaving the HelloWorld component intact for now, create two new components:
one named Hello and one named World. Hello should render `<span>Hello</span>` and World should render `<span>World</span>`. You can basically copy-and-paste the HelloWorld component and just change the text and the function name.

Your two new components should look like this:
```js
function Hello() {
    return <span>Hello</span>;
}

function World() {
    return <span>World</span>;
}
```
Now, update the HelloWorld component to use the two new components you just created. It should look something like this:
```js
function HelloWorld() {
return (
    <div>
        <Hello/> <World/>!
    </div>
);
}
```



### Wrap JSX with Parentheses
First, a note on formatting. You might notice I wrapped the returned JSX inside parentheses, (). This isn’t strictly necessary, but if you leave off the parens, the opening tag must be on the same line as the return, which looks a bit awkward:

```
function HelloWorld() {
    return <div>
        <Hello/> <World/>!
    </div>;
}
```

Just for kicks, try removing the parens and watch what happens:
```
function HelloWorld() {
return
    <div>
    <Hello/> <World/>!
    </div>;
}
```
This will fail with an error in the browser console


#### Return a Single Element
Notice how the two components are wrapped in a `<div>` in the HelloWorld
example:
```js
function HelloWorld() {
return (
    <div>
        <Hello/> <World/>!
    </div>
);
}
```
Here’s a little exercise: try removing the <div> wrapper and see what happens.
You should get this error:
> Adjacent JSX elements must be wrapped in an enclosing tag

Returning two things at once makes no sense. So that leads to this very important rule:
> A component function must return a single element.


But wait! Could you return an array? It’s just JavaScript after all…
```js
// This JSX:
return [<Hello/>, <World/>];
// Would turn into this JS
// (notice the brackets).
// It looks valid...
return [
    React.createElement(Hello, null),
    React.createElement(World, null)
];
```
Try it out! It should fail in the dev console.





## JavaScript in JSX

You can insert real JavaScript expressions within JSX code, and in fact, you’ll do this pretty often. Surround JavaScript with single braces like this:

```js
function SubmitButton() {
    var buttonLabel = "Submit";
    return (
        <button>{buttonLabel}</button>
    );
}
```

Remember that this will be compiled to JavaScript, which means that the JS inside the braces must be an expression. An expression produces a value. These
are expressions:
1 + 2, buttonLabel, aFunctionCall(), aFunctionName
Each of these produces (aka returns) a single value. 

In contrast, statements do not produce values and can’t be used inside JSX. Here are some examples of statements:
var a = 5
if(true) { 17; }
while(i < 7) { i++ }
None of these things produces a value. 



#### “If” in JSX
The next question you might wonder is, “How do I write a conditional if I can’t
use ‘if’?” There are a couple of options.
The first is the ternary operator (?). Use it like this:
```js
function ValidIndicator() {
    var isValid = true;
    return (
        <span>{isValid ? 'valid' : 'not valid'}</span>
    );
}
```
You can also use boolean operators such as && like this:
```js
function ValidIndicator() {
    var isValid = true;
    return (
        <span>
            {isValid && 'valid'}
            {!isValid && 'not valid'}
        </span>
    );
}
```



### Comments in JSX
If you need to put a comment into a block of JSX, the syntax may look a little strange. Remember that JavaScript needs to be inside single braces. Comments in JSX must go inside a JavaScript block like this:
```js
function ValidIndicator() {
    var isValid = true;
    return (
        <span>
            {/* here is a comment */}
            {isValid && 'valid'}
            {!isValid && 'not valid'}
            {
            // Double-slash comments are
            // OK in multi-line blocks.
            }
        </span>
    );
}
```


#### Capitalize Component Names
The components you write must begin with an uppercase letter. This means using names like UserList and Menu and SubmitButton, and not names like userList, menu, and submitButton.

In JSX, a component that starts with a lowercase letter is assumed to be a built-in HTML or SVG element (div, ul, rect, etc.).

> Early versions of React kept a “whitelist” of all the built-in element names so it could tell them apart from custom ones. Maintaining that whitelist was timeconsuming and error-prone – if a new SVG element made its way into the spec, you couldn’t use it until React updated that list. So they killed the list, and added this rule



#### Close Every Element
JSX requires that every element be closed, similar to XML or XHTML. This
includes the ones you might be used to leaving open in HTML5, like `<br>` or
`<input>` or maybe even `<li>`. MMR
// DO THIS:
return `<br/>`;
return `<input type='password' .../>`;
return `<li>`text`</li>`;
// NOT THIS:
return `<br>`;
return `<input type='password' ...>`;
return `<li>`text;





## Component
Assuming your are trying to build out a tweet box, you will need the following...
Each of these will become a component, with Tweet being the “parent” of the others:
- Tweet
  - Avatar
  - NameWithHandle
  - Time
  - Message
  - ReplyButton
  - LikeButton
  - RetweetButton
  - MoreOptionsButton

The parent component, which is the tweet can then be return in ReactDOM.render().

> You can import css into the index.js. import './index.css'
