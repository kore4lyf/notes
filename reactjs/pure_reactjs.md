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





## The “key” Prop

Any time you use map to render an array, you’ll also need key on the topmost element. React consumes the key prop before rendering, so the component you pass key to will not actually receive the prop.


In practice, the important thing to keep in mind is that keys should be stable, permanent, and unique for each element in the array.
- **Stable**: An element should always have the same key, regardless of its position in the array. This means key={index} is a bad idea.
- **Permanent**: An element’s key must not change between renders. This means key={Math.random()} is a bad idea.
- **Unique**: No two elements should have the same key.
If an item has a unique ID attached to it, that’s a great choice for the key. If the items don’t have IDs, try using a hashing function, or generate unique IDs with a library like shortid.
The item’s array index is not a good choice because if the index changes, for instance when an element is added to the front of the array, React’s mapping of indexes will become outdated. The item that was previously index “0” will now be “1”, but React doesn’t know that, and it might cause tough-to-diagnose rendering bugs.

```jsx
const FileList = ({ files }) => (
  <table className="filelist">
      <tbody>
          {files.map(file => (
              <tr className="filelist-item" key={file.id}>
                  <td className="file-name">{file.name}</td>
              </tr>
          ))
          }
      </tbody>
  </table>
);

FileList.propTypes = {
  files: PropTypes.array
};
const testFiles = [
  {
    id: 1,
    name: 'src',
    type: 'folder',
    updated_at: "2016-07-11 21:24:00",
    latestCommit: {
      message: 'Initial commit'
    }
    },
    {
    id: 2,
    name: 'tests',
    type: 'folder',
    updated_at: "2016-07-11 21:24:00",
    latestCommit: {
      message: 'Initial commit'
    }
    },
    {
    id: 3,
    name: 'README',
    type: 'file',
    updated_at: "2016-07-18 21:24:00",
    latestCommit: {
      message: 'Added a readme'
    }
  },
];
```





## State

Up until this point we’ve used props to pass data to components. But props are read-only. What if you need to keep track of data that can change? This is where state comes in.


For Example: : A Counter
```js
function handleAction(event) {
  console.log('Child did:', event);
}
function Parent() {
  return (
    <Child onAction={handleAction}/>
  );
}
function Child({ onAction }) {
  return (
    <button onClick={onAction}>
      Click Me!
    </button>
  );
}
```

What if we wanted Parent to keep track of how many times the button was clicked. To do this, Parent needs 3 new things: an initial state where the counter is set to 0, a call to this.setState to increment the counter, and a way to display the current count.

> t function components are stateless. To make Parent stateful, it needs to be transformed into an ES6 class component.

Here’s the new version of Parent, renamed to CountingParent – make sure to update the call to ReactDOM.render!
```js
class CountingParent extends React.Component {
  state = {
    actionCount: 0
  }
  handleAction = (action) => {
    console.log('Child says', action);
    // actionCount is incremented, and
    // the new count replaces the existing one
    this.setState({
      actionCount: this.state.actionCount + 1
    });
  }

  render() {
    return (
      <div>
        <Child onAction={this.handleAction}/>
        <p>Clicked {this.state.actionCount} times</p>
      </div>
    );
  }
}
```

> this.setState({}) is a function that is called when ever we want to make changes to a state's data actionCount: this.state.actionCount + 1})

The action variable passed into the function, hold information about the computer as the action was performed. e.g. 

```js
{
altKey: false
bubbles: true
button: 0
buttons: 0
cancelable: true
clientX: 49
clientY: 20
ctrlKey: true
currentTarget: null
defaultPrevented: false
detail: 1
eventPhase: 3
getModifierState: ƒ modifierStateGetter(keyArg)
isDefaultPrevented: ƒ functionThatReturnsFalse()
isPropagationStopped: ƒ functionThatReturnsFalse()
isTrusted: true
metaKey: false
movementX: 0
movementY: 0
nativeEvent: PointerEvent {isTrusted: true, pointerId: 3, width: 1, height: 1, pressure: 0, …}
pageX: 49
pageY: 20
relatedTarget: null
screenX: 769
screenY: 203
shiftKey: false
target: button
timeStamp: 184306.69999999553
type: "click"
view: Window {window: Window, self: Window, document: document, name: '', location: Location, …}
_reactName: "onClick"
_targetInst: null
[[Prototype]]: Object
}
```



### setState Is Asynchronous
setState function would immediately update the state and call render. 

If you need to set the state and immediately act on that change, you can pass in a
callback function like this:
```js
this.setState({name: 'Joe'}, function() {
// called after state has been updated
// and the component has been re-rendered
});
```
I.e it can take a callback. The code above updates the state data "name" and then calls the function immediately after the update.



### Functional setState
Another way to make it so that sequential state updates run in sequence is to use the functional form of setState, like this:
```js
this.setState((state, props) => {
  return {
  value: state.value + 1
  }
});
```
In this form, you pass a function to setState. The function receives the current state and props as arguments, and it is expected to return the desired new state. If you were to run a few of these sequentially…
```js
this.setState((state, props) => {
  return {
    value: state.value + 1
  }
});

this.setState((state, props) => {
  return {
    value: state.value + 1
  }
});

this.setState((state, props) => {
  return {
    value: state.value + 1
  }
});
```

This would work as expected, eventually incrementing value by 3.  It works because calling setState “queues” the updates in the order they’re called, and when they’re executed, they receive the latest state as an argument instead of using a potentially-stale this.state.



### Shallow vs Deep Merge
When you call setState, whether you call it with an object or in the functional form, the result is that it will shallow merge the properties in your object with the curren state. Here’s how that works.

The “shallow merging” behavior means that if you have a state like this:
```js
{
  score: 7,
  user: {
    name: "somebody",
    age: 26
  },
  products: [ /*...*/ ]
}
```
And then you do this.setState({ score: 42 }), the new state will be:
```js
{
  score: 42, // new!
  user: { // unchanged
    name: "somebody", // unchanged
    age: 26 // unchanged
  },
  products: [ /* unchanged */ ]
}
```

That is, it merges the object you pass to setState (or return from the functional
version) with the existing state. It doesn’t erase the existing state.
If instead you run this.setState({ user: { age: 4 } }) then it would
replace the entire user object with the new one:
```js
{
  score: 7, // unchanged
  user: { // new!
    age: 4 // no more 'name'
  },
  products: [ ... ], // unchanged
}
```



### Handling Events
We’ve seen a few components that take an onClick prop. This is just one of many events that React components can handle. The convention is that React’s events are named with camelCase like onClick, onSubmit, onKeyDown.
At least **one event differs by more than just capitalization: ondblclick is renamed to onDoubleClick**. A complete list of events can be found in the official Facebook docs.

If you print it out with console.log(event), the instance logged to the console will be cleared out by the time you go to look at it. You also can’t access it asynchronously (say, after a timeout). If you need to access it asynchronously, you can call event.persist() and React will keep it around for you.



### What to Put in State
How do you decide what should go into state? Is there anywhere else to store persistent data?

> As a general rule, data that is stored in state should be referenced inside render somewhere. 

**Component state is for storing UI state** – things that affect the visual rendering of the page. This makes sense because **any time state is updated, the component will re-render.**

> If modifying a piece of data does not visually change the component, that data shouldn’t go into state. 

Here are some things that make sense to put in state:
- User-entered input (values of text boxes and other form fields)
- Current or selected item (the current tab, the selected row)
- Data from the server (a list of products, the number of “likes” on a page)
- Open/closed state (modal open/closed, sidebar expanded/hidden)


Other stateful data, like handles to timers, should be stored on the component instance itself.



Example: Animating a Change
Let’s say you have a badge with a counter showing the number of logged-in users. It gets this number from a prop. What if you want the badge to animate
when the number changes?

**The old way:** You might use jQuery to toggle a class that plays the animation, or use jQuery to animate the element directly.
**The declarative way:** You can respond when props change by implementing the componentWillReceiveProps lifecycle method and comparing the old value to
the new one (you’ll learn more about lifecycle methods in Chapter 14). If it changed, you can set the “animating” state to true. Then in render, when
“animating” is true, add a CSS class that does the animation. When “animating” is false, don’t add that class. Here’s what this might look like:

```js
class Badge extends Component {
  componentWillReceiveProps(nextProps) {
    if(this.props.counter !== nextProps.counter) {
      // Set animating to true right now.
      // When the state change finishes, set a timer
      // to turn animating off in 200ms.
      this.setState({ animating: true }, () => {
        setTimeout(() => {
          this.setState({ animating: false });
        }, 200);
      });
    }
  }
  render() {
    const animatingClass =
    this.state.animating ? 'animating' : '';
    return (
      <div className={`badge ${animatingClass}`}>
      {this.props.counter}
      </div>
    );
  }
}
```



### Where to Keep State
Whenever you can, **it’s best to keep components stateless**. Sometimes this isn’t possible, but often, pieces of data you initially think should go into internal state can actually be pulled up to the parent component, or even higher.

Think about a section of the page that can be shown or hidden, maybe a sidebar like this:

When you click the “Hide” button, the sidebar should disappear, which means setting a showSidebar flag to false. This flag should be stored in state somewhere. But where?

Option 1, the showSidebar flag could reside in the Sidebar component. This way the Sidebar “knows” whether it is open or not. This is similar to how uncontrolled inputs work, which we’ll see next.

Option 2, the showSidebar flag can go in the parent Layout component, and the
parent can decide whether to render the Sidebar or not:

```js
class Layout extends React.Component {
  state = {
    showSidebar: false
  }
  toggleSidebar = () => {
    this.setState({
    showSidebar: !this.state.showSidebar
  });
  }
  render() {
    const { showSidebar } = this.state;
    return (
      <div className="layout">
        {showSidebar &&
        <Sidebar onHide={this.toggleSidebar}>
          some sidebar content
        </Sidebar>}
        <Content isSidebarVisible={showSidebar}
        onShowSidebar={this.toggleSidebar}>
          some content here
        </Content>
      </div>
    );
  }
}

const Content = ({children, isSidebarVisible, onShowSidebar}) => (
  <div className="content">
    {children}
    {!isSidebarVisible && (
    <button onClick={onShowSidebar}>
      Show
    </button>
    )}
  </div>
);


const Sidebar = ({onHide, children  }) => (
  <div className="sidebar">
    {children}
    <button onClick={onHide}>
      Hide
    </button>
  </div>
);
```

This way Sidebar doesn’t internally “know” whether it’s visible. It is either rendered, or not rendered. 

Keeping the state in a parent component might feel unnatural. It might even seem at first glance like this would make Sidebar hard to reuse, since you need to pass a callback function that Sidebar can call when it needs to hide. 

On the contrary, having fewer components containing state means fewer places to look when a bug appears. And if you need to do anything with that state, for instance, save it to localStorage to persist across page reloads, that logic only needs to exist in one component instance. 

Browsers come with localStorage, a place you can use to save data between sessions. Closing and reopening the browser or refreshing the page won’t clear the data. You could save the Sidebar state with **localStorage.setItem('showSidebar', true)** and later retrieve it with **localStorage.getItem('showSidebar')**.

You can see that if the Sidebar component knew how to save its own state tolocalStorage, and there were multiple Sidebars in the app, they would need away to differentiate themselves. A single showSidebar key in localStoragewould lead to conflicts, and the Sidebars don’t know where in the app they reside.

Perhaps the parents could be responsible for passing down a unique “id” or “location” to each Sidebar. However, that would split the concern of “where to save” between both the parent and the Sidebar. That makes two components that need to know about saving, rather than one. A better design would keep all of the saving-related logic in one place, and that is easier to do if the state is stored alongside it.



### “Kinds” of Components
Architecturally, you can segment components into two kinds: Presentational (a.k.a “Dumb”) and Container (a.k.a. “Smart”).

Presentational components are stateless. They simply accepts props and render
some elements based on those props. Being stateless means that the component will contain less logic, and will be easier to debug and test. They are, in essence, pure functions. They always return the same result for a given set of props, and they don’t change anything. Ideally, most of your components will be presentational

Sidebar, as written above, is a presentational component. So is Child, and so is the Tweet component we made a while back. They accept data and render it, and if events need to be handled, they call back up to the parent. Other kinds of common presentational components include buttons, navigation bars, links, images, etc.

Container components are stateful. They maintain state for themselves and any child components, and pass it down to them via props. They usually pass down handler functions to children, and respond to callbacks by updating their internal state. Container components are also responsible for asynchronous communication, such as AJAX calls to the server.

Page is actually presentational. Presentational components can contain Container components, and Containers can contain Presentational components – there aren’t any strict rules for nesting.

In an ideal world, you’d try to organize your app so that the components at the very top level (and maybe one level below that) are containers, and everything under them is presentational. In the real world this is difficult to achieve because you might have nested inputs that contain their own state. That’s okay though – perfection is not the goal.





## Input Controls
Input controls in React come in two flavors: **controlled** and **uncontrolled**.



### Controlled Inputs
The reason they’re called “controlled” is because you are responsible for controlling their state. You need to pass in a value, and keep that value updated
as the user types.
Example 1: 
```js
class ControlledInput extends React.Component {
  state = { text: '' };
  handleChange = (event) => {
    this.setState({
    text: event.target.value
    });
  };

  render() {
    return (
      <input type="text"
      value={this.state.text}
      onChange={this.handleChange} />
    );
  }
}
```


Example 2:
```js
class TrickInput extends React.Component {
  state = {
    text: 'try typing something'
  };
  handleChange = (event) => {
    this.setState({
    text: 'haha nope'
    });
  };
  render() {
    return (
      <input type="text"
      value={this.state.text}
      onChange={this.handleChange} />
    );
  }
}
```
You’ll see that the input thwarts your attempts to change it, and mocks you. Every time you try to type, all you see in the input box is "haha nope".


This is very powerful though. If you want to do some kind of custom validation, or formatting, you can do that in the handleChange function. Don’t want the user to type numbers? Strip out the numbers before updating the state:

```js
class NoNumbersInput extends React.Component {
  // ...
  handleChange = (event) => {
    let text = event.target.value;
    text = text.replace(/[0-9]/g, '');
    this.setState({ text });
  };
  // ...
}
```

> that syntax this.setState({ text }) is just ES6 shorthand for this.setState({ text: text }). With ES6, if the key is the same as the variable name, you don’t have to write it twice.



### Uncontrolled Inputs
When an input is uncontrolled, it manages its own internal state. So you can put
an input on the page like this (without a value prop):
```js
const EasyInput = () => (
  <input type="text" />
);
```









