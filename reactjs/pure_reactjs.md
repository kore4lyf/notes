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





## Props 
Where HTML elements have “attributes,” React components have “props” (short for “properties”). Props are the arguments to your components.



### Passing Props
This bit of JSX is passing a prop called name with a string value of "Dave":
`<Person name='Dave'/>`

Here’s another example, passing a className prop with the value "person":
`<div className='person'/>`

JSX uses className instead of class to specify CSS classes.

> Notice how the div is self-closing? In JSX, every component can be self-closing. In fact, if the component has no children (no contents), the convention is to write it like this, instead of using a
closing tag.

Here, we’re passing a string for className, a number for the age prop, and an actual JavaScript expression for the name:

```js
function Dave() {
  const firstName = "Dave";
  const lastName = "Ceddia";
  
  return (
    <Person 
    className='person'
    age={33}
    name={firstName + ' ' + lastName} />
  );
}
```

Remember that JSX evaluates to JavaScript, and the props become keys and values in an object. Here’s that example from above, transformed into

JavaScript:
```js
function Dave() {
  const firstName = "Dave";
  const lastName = "Ceddia";
  return React.createElement(Person, {
    age: 33,
    name: firstName + ' ' + lastName,
    className: 'person'
    }, null);
}
```



### Receiving Props

Props are passed as the first argument to a component function, like this:
```js
function Hello(props) {
  return (
    <span>Hello, {props.name}</span>
  );
}
```
// Used like:
`<Hello name="Dave"/>`


ES6 has a new syntax called destructuring which makes props easier to work with. It looks like this:
```js
const Hello = ({ name }) => (
  <span>Hello, {name}</span>
);
```

It can extract multiple keys, too:
```js
const Hello = ({ firstName, lastName }) => (
<span>Hello, {firstName} {lastName}</span>
);
``` 

In practice, props are very often written using this destructuring syntax. Just so you know, it works outside of function arguments as well. You can destructure props this way, for instance:



### Modifying Props
One important thing to know is that props are read-only. Components that receive props must not change them. If you come from an Angular background this is a change. Angular’s 2-way binding mechanism allowed modifying scope variables (Angular’s version of
props) and would automatically propagate those changes to the parent component.
In React, data flows one way. Props are read-only, and can only be passed down to children.




### Communicating With Parent Components
If you can’t change props, but you need to communicate something up to a parent component, how does that work?
If a child needs to send data to its parent, the parent can inject a function as a prop, like this:
```js
function handleAction(event) {
  console.log('Child did:', event);
}

function Parent() {
  return (
    <Child onAction={handleAction}/>
  );
}
```
The Child component receives a prop named onAction, which it can call whenever it needs to send up data or notify the parent of an event. You’ll notice that the built-in button element accepts an onClick prop, which it’ll call when the button is clicked. We’ll look more deeply at event handling later on.
```js 
function Child({ onAction }) {
  return (
    <button onClick={onAction}/>
  );
}
```





## PropTypes
What happens if you forget to pass one of the props? Well, it ends up being undefined. 

When you create a component, you can declare that certain props are optional or required, and you can declare what type of value that prop expects. Here’s an example:

```js
import PropTypes from 'proptypes';
function Comment({ author, message, likes }) {
  return (
    <div>
      <div className='author'>{author}</div>
        <div className='message'>{message}</div>
        <div className='likes'>
          {likes > 0 ? likes : 'No'} likes
        </div>
    </div>
  );
}
Comment.propTypes = {
  message: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  likes: PropTypes.number
}
```

React will warn you in the console if you forget a required prop:
<Comment author='an_error'/>
Warning: Failed propType: Required prop message was not specified in Comment.

Likewise, you’ll get a warning if you pass the wrong type:
<Comment author={42}/>
Warning: Failed propType: Invalid prop author of type number supplied to Comment, expected string.

These warning messages are invaluable for debugging. It tells you the mistake you made, and gives you a hint where to look! This is a fair bit better than some frameworks that silently fail when you forget a required attribute.



### The Catch
The only catch with propTypes is that you must remember to declare them. Providing propTypes is optional, and React won’t give you any warnings if you don’t specify propTypes for one of your components.
You can either vow to be super-diligent about writing those propTypes, or you can have a linter tool check for you. I recommend the second one.
**ESLint** is a popular choice, and there is a React plugin for ESLint that will check for things like missing PropTypes and that props are passed correctly.



### Validators
First, there are validators for the standard JavaScript types:
- PropTypes.array
- PropTypes.bool
- PropTypes.func
- PropTypes.number
- PropTypes.object
- PropTypes.string

There are validators for node and element. A node is anything that can be rendered, meaning numbers, strings, elements, or an array of those. An element is a React element created with JSX or by calling React.createElement:
- PropTypes.node
- PropTypes.element

There’s an instanceOf validator for checking that the prop is an instance of a specific class. It takes an argument:
```
PropTypes.instanceOf(SpecificClass)
```


You can limit to specific values with oneOf:
```
PropTypes.oneOf(['person', 'place', 1234])
```

You can validate that the prop is one of a few types:
```
PropTypes.oneOfType([
PropTypes.string,
PropTypes.boolean
])
```

You can validate that it’s an array of a certain type, or an object whose properties are values of a certain type:
``` 
PropTypes.arrayOf(PropTypes.string)
```
Would match: ['a', 'b', 'c']
Would not match: ['a', 'b', 42]

```
PropTypes.objectOf(PropTypes.number)
```
Would match: {age: 27, birthMonth: 9}
Would not match: {age: 27, name: 'Joe'}

You can validate that an object has a certain shape, meaning that it has particular properties. The object passed to this prop is allowed to have extra properties too, but it must at least have the ones in the shape description.
```
PropTypes.shape({
  name: PropTypes.string,
  age: PropTypes.number
})
```
This will match an object of the exact shape, like this:

person = {
name: 'Joe',
age: 27
}


It will also match an object with additional properties, like this:

person = {
name: 'Joe',
age: 27,
address: '123 Fake St',
validPerson: false
}


This PropTypes shape is requiring an object that has name and age keys, so if we leave one of them off, it won’t pass. This would generate a warning:

person = {
age: 27
}


Similarly, if we pass the wrong type for one of those keys, we’ll get a warning:

person = {
name: false, // boolean instead of string
age: 27
}



### Required Props
Any PropType validation can be made required by adding .required to the end of it. These are all required:

```
PropTypes.bool.isRequired
PropTypes.oneOf(['person', 'place', 1234]).isRequired
PropTypes.shape({
  name: PropTypes.string,
  age: PropTypes.number
}).isRequired
```



### Custom Validators
If the built-in PropType validators aren’t expressive enough, you can write your own! The function should take the props, propName, and componentName, and
return an Error if validation fails. Note that’s return an Error, not throw an Error.
A custom validator to check that the passed prop is exactly length 3 (either a string or an array) would look like this:
```js 
function customValidator(props, propName, componentName) {
// here, propName === "myCustomProp"
  if (props[propName].length !== 3) {
    return new Error(
      'Invalid prop `' + propName + '` supplied to' +
      ' `' + componentName + '`. Length is not 3.'
    );
  }
}

const CustomTest = ({ myCustomProp }) => (
  <span>{myCustomProp}</span>
);

CustomTest.propTypes = {
  myCustomProp: customValidator
}

// This will produce a warning:
ReactDOM.render(
  <CustomTest myCustomProp='not_three_letters'/>,
  document.getElementById('root')
);
```

> PropTypes are a great debugging tool, but a failed validation won’t stop your code from running. Keep an eye on that console window.



### PropTypes as Documentation
One last thing about PropTypes: in addition to helping out with debugging, they serve as nice documentation. When you come back to a component a few days, a week, or a month later, the PropTypes will serve as a “README” of sorts. You won’t have to scan through the code to decipher which props are required.




## Children 

There’s a special prop we haven’t talked about yet: it’s called children.

You might imagine using it like this:
```jsx
<IconButton>Do The Thing</IconButton>
```
Assuming you want react to be able to access the inner text, “Do The Thing”? Well, that’s where the children prop comes in.

You have to explicitly render the children somewhere in your component. If you
don’t, they are ignored. For instance, if the IconButton component looked like this:
```jsx
function IconButton() {
    return (
        <button>
        <i class="target-icon"/>
        </button>
    );
}
```
The rendered component would be a button with an icon, the inner text will not be included in the button.

With a small tweak, we can place the text after the icon:
```jsx
function IconButton({ children }) {
    return (
        <button>
            <i class="target-icon"/>
            {children}
        </button>
    );
}
```



### Different Types of Children
The children prop is always pluralized as children no matter whether there’s a single child or multiple children. Moreover, the type of children will change depending on what it contains.

> When there are multiple children, children is an array of ReactElements. However, when there is only one child, it is a single ReactElement.



### Dealing with children
React provides utility functions for dealing with this opaque data structure.

- **React.Children.map**(children, function)
map returns an array made up of the values you return from the function you provide.

- **React.Children.forEach**(children, function)
forEach iterates over the children and returns nothing

- **React.Children.count**(children)
count is pretty self-explanatory: it returns the number of items in children.

- **React.Children.only**(children)
only returns the single child, or throws an exception if there is more than one child.
  
- **React.Children.toArray**(children)
toArray is similarly intuitive: it converts children into a flat array, whether it was an array or not.


The first two, map and forEach, work the same as the methods on JavaScript’s built-in Array.



### PropTypes for Children
If you want your component to accept zero, one, or more children, use the .node validator:
```js
propTypes: {
children: PropTypes.node
}
```

If you want it to accept only a single child, use the element validator:
```js
propTypes: {
children: PropTypes.element
}
```

Beware that this expects a single React Element as a child. This means it has to be a custom component, or a tag like `<div>`. PropTypes.element will warn if you pass a string or number. If you need to allow an element or a string, you can use the oneOfType validator like this:
```js
propTypes: {
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.string
    ])
}
```



### A More Interesting Example
Imagine that we constructed our own “API” of sorts for expressing a navigation
header:
```js
<Nav>
    <NavItem url='/'>Home</NavItem>
    <NavItem url='/about'>About</NavItem>
    <NavItem url='/contact'>Contact</NavItem>
</Nav>
```

Using the children prop, the Nav component can do things like insert a separator between each item:





## 






**NB:** STATE: 
If you write a function within a class component (container) it doesn't automatically bind unless the function is an arrow function.
To make the function bind you can append .bind(this) to the function call
e.g.
`<button onClick={this.delta.bind(this)}>+</button>`

When using ES6 code in React always use arrow functions, because the this context is automatically binded with it.
```js
//Use this:
(videos) => {
    this.setState({ videos: videos });
    console.log(this.state.videos);
};

//instead of:
function(videos) {
    this.setState({ videos: videos });
    console.log(this.state.videos);
};
```


