# React JS UDACITY



##  1. React Fundamentals 

### Rendering UI with React
React uses JavaScript objects to create React elements. We'll use these React elements to describe what we want the page to look like, and React will be in charge of generating the DOM nodes to achieve the result.
The React code that we write is declarative because we aren't telling React what to do; instead, we're writing React elements that describe what the page should look like, and React does all of the implementation work to get it done.


In React, deciding what to render is completely different rendering it. 
Decoupling makes it possible to render on the
- Server
- Native Devices
- VR Environments

We use **ReactDOM** because we are working in the browser.
  
Apps built with React typically have a single root DOM node. For example, an HTML file may contain a `<div>` with the following:

```html
<div id="root"></div>
```

By passing this DOM node into getElementById(), React will end up controlling the entirety of its contents. 


#### HTML Attributes That Works differently In JSX 
In HTML attribute like **class** and **for** are replaced with **className** and **htmlFor** in React. 

> we cant use these attributes with the same name in both React and HTML because when the code is rendered in React, JSX gets translated into JavaScript, and the attributes like **class** and **for** are reserved words in JavaScript.

1. **className**: Use to represent a class in JSX.
```html
<h1 class="bla-bla">
  Welcome to GeeksforGeeks
</h1>
```
When the JSX is rendered, it automatically rerenders as an HTML class attributes.

2. **Self-Closing Tags**: We have to write all our HTML in XHTML, which means all HTML must be closed or self closed.
```html
<img src"" />
<input />
```

3. **htmlFor**: for attribute is used in  `<label>` element.
```html
<label for="username"> Click Me: </label>
<input type="text" id="username"/>
```
In JSX **for** is replaced with **htmlFor**.

4. **Select Tag**: 
   In HTML
```html
<select>
  <option value="Apple">Apple</option>
  <option value="Orange">Orange</option>
  <option value="Water Melon">Water Melon</option>
  <option selected value="Grape">Grape</option>
</select>
```
NB: Grape is initially selected because of the selected attribute. But in JSX, instead of using selected attribute, it uses a value on the root selected tag.

```js
render() {
  return (
    <select value={this.state.value} onChange={this.handleChange}>
      <option value="Apple">Apple</option>
      <option value="Orange">Orange</option>
      <option value="Water Melon">Water Melon</option>
      <option selected value="Grape">Grape</option>
    </select>
  )
}

```


5. **Textarea Tag**: `<textarea>` in HTML defines a multi-line text input control. 
In JSX textarea uses a value attribute.
```js
render() {
  return (
    <textarea value={this.state.value} onChange={this.handleChange}>
  )
}
```

6. **dangerouslySetInnerHTML**: In HTML, **innerHTML** is used to set or return the content of an element. In JSX instead of **dangerouslySetInnerHTML** is used.
```Js
function gfg() {
  return { __html: 'First &middot; Second' };
}

<div dangerouslySetInnerHTML={gfg}/>
```
The attribute can be used directly on the element.

As the name of the property suggests, it can be dangerous to use because it makes code vulnerable to cross-site scripting (XSS) attacks. A use case where you need to set the HTML content of a DOM element is when the content of an element is writing in form of a text editor(e.g that can format text eg`<b>` for bold, `<img>` for image e.t.c). Using **dangerouslySetInnerHTML** with the text editor ensures the out of the editor will end up being a text.

For Example: 
```js 
const App = () => {
  const data = 'lorem <b>ipsum</b>';

  return (
    <div>
      {data}
    </div>
  );
}

export default App;
```

When **dagerouslySetInnerHTML** is used:
```js 
const App = () => {
  const data = 'lorem <b>ipsum</b>';

  return (
    <div dangerouslySetInnerHTML={{__html: data}}/>
  );
}

export default App;
```
NB: An object with the **__html** key should be passed to **dangerouslySetInnerHTML**.


The Code above pose no danger when rendered, there might be some cases where an HTML element executes a script e.g.


```js 
const App = () => {
  const data = 'lorem <b onmouseover="alert('mouseover');">ipsum</b>';

  return (
    <div dangerouslySetInnerHTML={{__html: data}}/>
  );
}


// OR

const App = () => {
  const data = 'lorem ipsum <img src="" onerror="alert('message');">';

  return (
    <div dangerouslySetInnerHTML={{__html: data}}/>
  );
}
```
There are sanitation tools for HTML which detect potentially malicious parts in HTML code and then output a clean and safe version of it. e.g. [DOMPurify](https://github.com/cure53/DOMPurify).

> I tested DOMPurify, passed this (lorem < b onmouseover="alert('mouseover');">ipsum`</b>`) into it and I got this(lorem `<b>`ipsum`</b>`)

It's good practice to use a sanitizer even when we trust the source of the data. With the DOMPurify package used, One of the example would be as follows:

```js
import DOMPurify form 'dompurify'

const App = () => {
  const data = `lorem <b onmouseover="alert('mouseover');">ipsum</b>`
  const sanitizedData = () => ({
    __html: DOMPurify.sanitize(data)
  })

  return (
    <div dangerouslySetInnerHTML={santizedData()}/>
  );
}

export default App;
```



#### Virtual DOM
**Virtual DOM** - Virtual DOMs are objects that describe real DOM nodes. When we call React.createElement() the element will not be rendered until we call **ReactDOM.render()**.


#### React createElement to JSX
JSX is a syntax extension to javascript that makes us write JavaScript code that looks a little more like HTML.


#### JSX Returns One Main Element
When writing JSX, keep in mind that it must only return a single element. This element may have any number of descendants, but there must be a single root element wrapping your overall JSX (typically a `<div>` or a `<span>`).

If we have two sibling elements that are both at the root level (e.g. `<h1>` and `<ul>`). This won't work and will give the error:

**Syntax error: Adjacent JSX elements must be wrapped in an enclosing tag**

Since we know that JSX is really just a syntax extension for .createElement(), this makes sense; .createElement() takes in only one tag name (as a string) as its first argument.


#### Intro to Components

Components refer to reusable pieces of code ultimately responsible for returning HTML to be rendered onto the page. More often than not, you'll see React components written with JSX.


Since React's main focus is to streamline building our app's UI, there is only one method that is absolutely required in any React component class: **render()**.


```js
import React from 'react';
import ReactDOM from 'react-dom';

const people = [
  { name: 'Tyler' },
  { name: 'Karen' },
  { name: 'Richard' }
]

const element = <ol>
  {people.map(person => (
    <li key={person.name}> {person.name}</li>
  ))}
</ol>


ReactDOM.render(
  element,
  document.getElementById('root')
)
```

The code above can be written as a component like this.
```js
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class ContactList extends Component {
  constructor() {
    super();
    this.people = [
      { name: 'Tyler' },
      { name: 'Karen' },
      { name: 'Richard' }
    ] 
  }
  
  render() {
    return (<ol>
      {this.people.map(person => (
        <li key={person.name}> {person.name}</li>
      ))}
    </ol>);
  }
}
  
ReactDOM.render(
  <ContactList/>,
  document.getElementById('root')
)
```


#### Declaring Components in React
1.  We can import React
```js
import React from 'react';
class ContactList extends React.Component {}
```
  OR

2. import Componet from react
```js
import React, { Component } from 'react';
class ContactList extends Component {}
```


#### Summary
React is only concerned with the View layer of our app. You'll use a syntax extension to describe what your UI should look like. This syntax extension is known as JSX, and just looks similar to plain HTML written right into a JavaScript file. The JSX gets transpiled to React's .createElement() method that outputs HTML to be rendered in the browser. 
A great mindset to have when building React apps is to think in components. Components represent the modularity and reusability of React. You can think of your component classes as factories that produce instances of components. These component classes should follow the single responsibility principle and just "do one thing". If it manages too many different tasks, it may be a good idea to decompose your component into smaller subcomponents.



### Create React App

#### Scaffolding Your React App
JSX is awesome, but it does need to be transpiled into regular JavaScript before reaching the browser. We typically use a transpiler like **Babel** to accomplish this for us. We can run Babel through a build tool, like **Webpack** which helps bundle all of our assets (JavaScript files, CSS, images, etc.) for web projects.

Install Create React App (through the command-line with npm), and then we can walk through what makes it so great.

```sh
npm install -g create-react-app
```

 Note that to find out where global packages are installed, you can run `npm list -g` in your console


react-script contains alot of libraries like 
1. **Babel** - So we can use the latest javaScript syntax and JSX.
2. **Webpack** - So we can generate the build.
3. **Webpack dev server** - Which supports auto reload when code is changed while running. 

> You can use `yarn start` to start the development server. Yarn is a package manager that's similar to NPM. Yarn was created from the ground up by Facebook to improve on some key aspects that are slow or lacking in NPM. If you don't want to install Yarn, you don't have to! What's great about it is that almost every use of yarn can be swapped with npm and everything will work just fine! So if the command is `yarn start`, you can use `npm start` to run the same command.



### Composing With Components

```js
//using Props in class component
const myelement = <Car brand="Ford"/>;
```

Use the brand attribute in the component:
```js
class Car extends React.Component {
  render() {
    return <h2>I am a {this.props.brand}!</h1>;
  }
}
```


```js
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class ContactList extends Component {
  render() {
    return (<ol>
      {this.props.contact.map(person => (
        <li key={person.name}> {person.name}</li>
      ))}
    </ol>);
  }
}
  
const workContact = [
  { name: 'Tyler' },
  { name: 'Karen' },
  { name: 'Richard' }
];

const friendContact = [
  { name: 'Korede' },
  { name: 'Dozie' },
  { name: 'Faith' }
];

ReactDOM.render(
  <div>
    <ContactList contact={workContact} />
    <ContactList contact={friendContact}/>
  </div>, 
  document.getElementById('root')
  ) 
```


#### Favor Composition Over Inheritance
You might have heard before that it’s better to “favor composition over inheritance”. This is a principle that I believe is difficult to learn today. Many of the most popular programming languages make extensive use of inheritance, and it has carried over into popular UI frameworks like the Android and iOS SDKs.

In contrast, React uses composition to build user interfaces. Yes, we extend React.Component, but we never extend it more than once. Instead of extending base components to add more UI or behavior, we compose elements in different ways using nesting and props. You ultimately want your UI components to be independent, focused, and reusable.

So if you’ve never understood what it means to “favor composition over inheritance” you’ll definitely learn using React!