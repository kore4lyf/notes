# React JS UDACITY

## 1. Why React

### What is Composition

Composition means to combine simple functions to build more complicated ones.

Composition is built from simple functions. Let's look at an example:
```js
function getProfileLink (username) {
 return 'https://github.com/' + username
}
```

This function is ridiculously simple, isn't it? It's just one line! Similarly, the getProfilePic function is also just a single line:
```js
function getProfilePic (username) {
 return 'https://github.com/' + username + '.png?size=200'
}
```

These are definitely simple functions, so to compose them, we'd just combine them together inside another function:
```js
function getProfileData (username) {
 return {
 pic: getProfilePic(username),
 link: getProfileLink(username)
 }
}
```

Now we could have written getProfileData without composition by providing the data directly:
```js
function getProfileData (username) {
 return {
 pic: 'https://github.com/' + username + '.png?size=200',
 link: 'https://github.com/' + username
 }
}
```
here's nothing technically wrong with this at all; this is entirely accurate JavaScript code. But this isn't composition.
There are also a couple of potential issues with this version that isn't using composition. If the user's link to GitHub is needed somewhere else, then duplicate code would be needed. A good function should follow the "DOT" rule:

**Do One Thing**

In the composed version, each function just does one thing:

**getProfileLink** – just builds up a string of the user's GitHub profile link
**getProfilePic** – just builds up a string the user's GitHub profile picture
**getProfileData** – returns a new object


#### React & Composition
Here are three different components:
```js
<Page />
<Article />
<Sidebar />
```
Now let's take these simple components, combine them together, and create a more complex component (aka, composition in action!):
```js
<Page>
 <Article />
 <Sidebar />
</Page>
```

Composition occurs when simple functions are combined together to create more complex functions. Think of each function as a single building block that does one thing (DOT). When you combine these simple functions together to form a more complex function, this is composition.



#### What is Declarative Code

**Imperative Code**: A lot of JavaScript is imperative code.  According to the dictionary, "imperative" means: **expressing a command; commanding**.

When JavaScript code is written imperatively, we tell JavaScript exactly what to do and how to do it. Think of it as if we're giving JavaScript commands on exactly what steps it should take. 
For example, I give you the humble for loop:
```js
const people = ['Amanda', 'Farrin', 'Geoff', 'Karen', 'Richard', 'Tyler']
const excitedPeople = []

for (let i = 0; i < people.length; i++) {
 excitedPeople[i] = people[i] + '!'
}
```

**Declarative Code**: In contrast to imperative code, we've got declarative code. With declarative code, we don't code up all of the steps to get us to the end result. Instead, we declare what we want done, and JavaScript will take care of doing it. This explanation is a bit abstract, so let's look at an example. Let's take the imperative for loop code we were just looking at and refactor it to be more declarative.
```js
const people = ['Amanda', 'Farrin', 'Geoff', 'Karen', 'Richard', 'Tyler']

// The end goal
//["Amanda!", "Farrin!", "Geoff!", "Karen!", "Richard!", "Tyler!"]

// To get us from the starting point to the end, we'll just use JavaScript's .map() function to declare what we want done.

const excitedPeople = people.map(name => name + '!')
```

Ex:
```js
const people = ['Amanda', 'Farrin', 'Geoff', 'Karen', 'Richard', 'Tyler']
const longNames = people.filter(name => name.length > 6)
```

#### React is Declarative
We'll get to writing React code very soon, but let's take another glimpse at it to show how it's declarative.
```js
<button onClick={activateTeleporter}>Activate Teleporter</button>
```
Notice that there's just an onClick attribute on the button…we aren't using .addEventListener() to set up event handling with all of the steps involved to set it up. Instead, we're just declaring that we want the activateTeleporter function to run when the button is clicked.


### Unidirectional Data Flow
Front-end frameworks like Angular and Ember make use of two-way data bindings. In two-way data binding, the data is kept in sync throughout the app no matter where it is updated. If a model changes the data, then the data updates in the view. Alternatively, if the user changes the data in the view, then the data is updated in the model. Two-way data binding sounds really powerful, but it can make the application harder to reason about and know where the data is actually being updated.

#### React's Data-flow
Data moves differently with React's unidirectional data flow. **In React, the data flows from the parent component to a child component**.

> Data flows down from parent component to child component. Data updates are sent to the parent component where the parent performs the actual change.


The data lives in the parent component and is passed down to the child component. Even though the data lives in the parent component, both the parent and the child components can use the data. However, if the data must be updated, then only the parent component should perform the update. If the child component needs to make a change to the data, then it would send the updated data to the parent component where the change will actually be made. Once the change is made in the parent component, the child component will be passed the data (that has just been updated!).


> In React, data flows in only one direction, from parent to child. If data is shared between sibling child components, then the data should be stored in the parent component and passed to both of the child components that need it.



### React Is “just JavaScript”
React does't re-create functionality you can already do in Javascript.

#### It's Just JavaScript
One of the great things about React is that a lot of what you'll be using is regular JavaScript. To make sure you're ready to move forward, please take a look at the following code:
```js
const shelf1 = [{name: 'name1', shelf: 'a'},{name: 'name2', shelf: 'a'}];
const shelf2 = [{name: 'name3', shelf: 'b'},{name: 'name4', shelf: 'b'}];
const allBooks = [...shelf1, ...shelf2];

const filter = books => shelf => books.filter(b => {
  return b.shelf === shelf;
});

const filterBy = filter(allBooks);
const booksOnShelf = filterBy('b');
```





##  2. React Fundamentals 

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




## Extra Note:

###  A. Functional JavaScript: Function Composition For Every Day Use. by Joel Thoms
You will learn how to write as well as organize your files, so you can write short, clean and functional code like this.

```js 
import { listGroupPanel } from './lib/html'
import { setInnerHtml }   from './lib/dom'

const content = document.getElementById('content')
const main = e => compose(setInnerHtml(e), listGroupPanel)

const list = [
  'Cras justo odio',
  'Dapibus ac facilisis in',
  'Morbi leo risus',
  'Porta ac consectetur ac',
  'Vestibulum at eros'
]

main(content)(list)
```
that will produce output like this. 

```js 
<div class="panel panel-default">
  <div class="panel-body">
    <ul class="list-group">
      <li class="list-group-item">Cras justo odio</li>
      <li class="list-group-item">Dapibus ac facilisis in</li>
      <li class="list-group-item">Morbi leo risus</li>
      <li class="list-group-item">Porta ac consectetur ac</li>
      <li class="list-group-item">Vestibulum at eros</li>
    </ul>
  </div>
</div>
```

**Function composition** is a mathematical concept that allows you to combine two or more functions into a new function.

You can turn any function into a composable function by currying the function. 
You might do html stuff, so that’s a good point to start. Let’s make a tag. (I’m going to be working with strings here, but you could also do this with React).

```js
const tag = t => contents => `<${t}>${contents}</${t}>`
tag('b')('this is bold!') 
> <b>this is bold!</b>
```

We also want a function to handle tags with attributes like `<div class="title">...</ddiv`. So I’ll add another function to handle this use case.
```js
const encodeAttribute = (x = '') =>
  x.replace(/"/g, '&quot;')

const toAttributeString = (x = {}) =>
  Object.keys(x)
    .map(attr => `${encodeAttribute(attr)}="${encodeAttribute(x[attr])}"`) 
    .join(' ')

const tagAttributes = x => c =>
  `<${x.tag}${x.attr?' ':''}${toAttributeString(x.attr)}>${c}</${x.tag}>` 
```
Sprinkle in a little refactoring to combine it all into these four functions…

```js 
const encodeAttribute = (x = '') =>
  x.replace(/"/g, '&quot;')

const toAttributeString = (x = {}) =>
  Object.keys(x)
    .map(attr => `${encodeAttribute(attr)}="${encodeAttribute(x[attr])}"`) 
    .join(' ')

const tagAttributes = x => (c = '') =>
  `<${x.tag}${x.attr?' ':''}${toAttributeString(x.attr)}>${c}</${x.tag}>`

const tag = x =>
  typeof x === 'string'
    ? tagAttributes({ tag: x })
    : tagAttributes(x) 
```
Now we can call tag with a string or an object.

```
const bold = tag('b')

bold('this is bold!')
// <b>this is bold!</b>

tag('b')('this is bold!')
// <b>this is bold!</b>

tag({ tag: 'div', attr: { 'class': 'title' }})('this is a title!') 
// <div class="title">this is a title!</div>
```

#### Organizing Your Code
Organizing your code is also very important. This involves separating your functions into multiple files.

I like to create a file called functional.js and this is where I put compose and related functional functions.

All of the functions we created above I would put in html.js.

I am also creating a dom.js for DOM manipulation (you will see in the codepen.)

Breaking our code out into multiple library files allows us to reuse these functions in other projects.

Now when we write the main program in main.js, there will be very little code.

> Functions with multiple inputs must be curried.


### B. Compose and Pipe in JavaScript by Gianmarco Ebeling

#### Compose
In algebra, function composition allows you to apply one function to the output of another function.
i.e **g(f(x)**
In **g(f(x)**, the function g is applied to the result of applying the function f to x. As we can see, function composition works from right to left.

The same result can be achieved in JavaScript with compose:
```js
const compose = (g,f) => x => g(f(x))
// Same as **g(f(x)**
``` 

For example:
Let’s suppose we want to get the name of a user and uppercase it. First of all, we have to write a function that extracts the name of the user:
```js
const user = {name: 'Gianmarco', password: 1234}
const getUserName = (user) => user.name
getUserName(user)
// 'Gianmarco'
```

And then a function that uppercases strings:
```js
const upperCase = (string) => string.toUpperCase()
upperCase('Gianmarco')
// 'GIANMARCO'
``` 

Now we can compose the two functions to have just one function that executes both actions: Get the name and uppercase it.

We can use the implementation of compose() that we saw before:
```js
const compose = (g, f) => x => g(f(x));
// 'x' in compose() 
const user = {name: 'Gianmarco', password: 1234}
// function 'f' in compose()
const getUserName = (user) => user.name
// function 'g' in compose()
const upperCase = (string) => string.toUpperCase()
const getUserNameAndUpperCase = compose(upperCase, getUserName)
getUserNameAndUpperCase(user); 
//'GIANMARCO'
```
The problem with this implementation of compose() is that it takes as parameters just two functions (in our example, upperCase()and getUserName()).

Let’s suppose we want to add another function that returns the first four characters of a string:
```js
const firstFour = (string) => string.substring(0,4)
firstFour(‘GIANMARCO’);
// 'GIAN'
``` 
How can we compose more than two functions at a time?
We can use Compose and the reduceRight() method:
```js
const compose = (...functions) => x => functions.reduceRight((acc, fn) => fn(acc), x);
``` 

In this implementation, compose() takes rest parameters (any number of parameters — in this example, any number of functions) and returns a function that takes the initial value x. It then uses the reduceRight() method to iterate from right to left over each function fn in functionsand apply it, in turn, to the accumulated value acc.

With this new implementation of compose(), we can now create a function that gets the name of the user, uppercases it, and returns just its first four characters:
```js 
const compose = (...functions) => x => functions.reduceRight((acc, fn) => fn(acc), x);
const user = {name: 'Gianmarco', password: 1234}
const getUserName = (user) => user.name
const upperCase = (string) => string.toUpperCase()
const firstFour= (string) => string.substring(0,4)
compose (firstFour, upperCase, getUserName) (user);
// 'GIAN'
```

### Pipe
Pipe is exactly like compose(), but it works left to right. I personally prefer it over compose() because you can think of it as a sequence of events.

If we want to recreate our compose() function above but with pipe(), we can use this implementation:
```js
const pipe = (...functions) => x => functions.reduce((acc, fn) => fn(acc), x);
```
As you noticed, we now use reduce() instead of reduceRight(), as the function iterates left to right.

Our final result will be:
```js
const pipe = (…functions) => x => functions.reduce((acc, fn) => fn(acc), x);
const user = {name: 'Gianmarco', password: 1234}
const getUserName = (user) => user.name
const upperCase = (string) => string.toUpperCase()
const firstFour= (string) => string.substring(0,4)
pipe (getUserName, upperCase, firstFour) (user);
```

As a sequence of events, pipe() applies getUserName() to our initial data, then it applies upperCase() to the result of applying getUserName() to our initial data. Finally, it will applyfirstFour() to the output from applying upperCase() to the result of applying getUserName() to our initial data.


### Currying 
Currying in JavaScript is a process in functional programming in which you can transform a function with multiple arguments into a sequence of nesting functions. It returns a new function that expects the next argument inline.  

In other words, instead of a function taking all arguments at one time, it takes the first one and returns a new function, which takes the second one and returns a new function, which takes the third one, and so on, until all arguments have been fulfilled.

Currying in JavaScript transforms a function with multiple arguments into a nested series of functions, each taking a single argument. Currying helps you avoid passing the same variable multiple times, and it helps you create a higher order function.

That is, when we turn a function call sum(1,2,3) into sum(1)(2)(3). 

The number of arguments a function takes is also called arity.

```js 
function sum(a, b) {
    // do something
}
function _sum(a, b, c) {
    // do something
}
```

The function sum takes two arguments (two-arity function) and _sum takes three arguments (three-arity function).

> Curried functions are constructed by chaining closures and by defining and immediately returning their inner functions simultaneously.

#### Why Is Currying in JavaScript Useful?
- Currying helps you avoid passing the same variable again and again.
- It helps to create a higher order function.

Currying transforms a function with multiple arguments into a sequence/series of functions, each taking a single argument.

For example:

function sum(a, b, c) {
    return a + b + c;
}
sum(1,2,3); // 6
As you can see, this is a function with full arguments. Let’s create a curried version of the function and see how we would call the same function (and get the same result) in a series of calls:
```js
function sum(a) {
    return (b) => {
        return (c) => {
            return a + b + c
        }
    }
}
console.log(sum(1)(2)(3)) // 6
```
We could even separate this sum(1)(2)(3) to understand it better:
```js
const sum1 = sum(1);
const sum2 = sum1(2);
const result = sum2(3);
console.log(result); // 6
```





##  2. React Fundamentals



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
**Virtual DOM** - Virtual DOMs are objects that describe real DOM nodes. When we call React.createElement() the element will not be rendered until we call **ReactDOM.render(){}**.


#### React createElement to JSX
JSX is a syntax extension to javascript that makes us write JavaScript code that looks a little more like HTML.


#### JSX Returns One Main Element
When writing JSX, keep in mind that it must only return a single element. This element may have any number of descendants, but there must be a single root element wrapping your overall JSX (typically a `<div>` or a `<span>`).

If we have two sibling elements that are both at the root level (e.g. `<h1>` and `<ul>`). This won't work and will give the error:

**Syntax error: Adjacent JSX elements must be wrapped in an enclosing tag**

Since we know that JSX is really just a syntax extension for .createElement(), this makes sense; .createElement() takes in only one tag name (as a string) as its first argument.



*********************** Day 2

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

So if you’ve never understood what it means to “favor composition over inheritance” you’ll definitely learn using React!.



## 3. State Management



### Introduction 
We's introduce three new concepts to you in react.
1. **Props**: Props allow you to pass data into your components.
2. **Functional Components**: Are alternative, and probabl more intuitive approach to creating components.
3. **Controlled Components**: Allow you to hook up the forms in your application to your component state.
   

### Passing Data into Components with props
For example: 
```js
class User extend react.component {
  render(){
    return (
      <p> Username: {this.props.username}</p>
    )
  }
}

ReactDOM.render(
  <User username="Tyler"/>,
  document.querySelector("root")
)
```
In the code above, `username` is the prop and the string 'Tyler' is the value.

All props are stored on the this.props object. So to access this `username` prop from inside the component, we'd use `this.props.username`.

### Mapping over array
```js
return (
  <ol className="contact-list">
    {this.props.contacts.map(contact => (
      <li key={contact.id}>
        {contact.name}
      </li>
    ))}
  </ol>
)
```
The reason we need to add a key is becaus eventually one of those list items may change, and by having a unique key attribute on each list item. React is able to performantly know which list item has changed and can update just that item rather than having to recreate the entire list every time.


### Functional Components
If your component does not keep track of internal state (i.e., all it really has is just a render() method), you can declare the component as a Stateless Functional Component.

```js
class Email extends React.Component {
 render() {
   return (
     <div>
       {this.props.text}
     </div>
   );
 }
}
```
like this.
```js
const Email = (props) => (
 <div>
   {props.text}
 </div>
);
```



### Add State to a component
**props** refer to attributes from parent components. In the end, props represent "read-only" data that are immutable.

A component's **state**, on the other hand, represents mutable data that ultimately affects what is rendered on the page. State is managed internally by the component itself and is meant to change over time, commonly due to user input (e.g., clicking on a button on the page).

With React your two concerns are: 
- Which state is in my application.
- How does my UI change based off of that state.

**Class Fields**

```js
class User extends React.Component {
state = {
username: 'Tyler'
}
}
```

**OR**

```js
class User extends React.Component {
 constructor(props) {
   super(props);
   this.state = {
     username: 'Tyler'
   };
 }
}
```
Having state outside the constructor() means it is a class field, which is a proposal for a new change to the language. It currently isn't supported by JavaScript, but thanks to Babel's fantastic powers of transpiling, we can use it!


###  Props in Initial State 
When defining a component's initial state, avoid initializing that state with props. This is an error-prone anti-pattern, since state will only be initialized with props when the component is first created.
```js
this.state = {
 user: props.user
}
```
In the above example, if props are ever updated, the current state will not change unless the component is "refreshed." Using props to produce a component's initial state also leads to duplication of data, deviating from a dependable "source of truth."


By having a component manage its own state, any time there are changes made to that state, React will know and automatically make the necessary updates to the page.

> This is one of the key benefits of using React to build UI components: when it comes to re-rendering the page, we just have to think about updating state. We don't have to keep track of exactly which parts of the page change each time there are updates. We don't need to decide how we will efficiently re-render the page. React compares the previous output and new output, determines what has changed, and makes these decisions for us. This process of determining what has changed in the previous and new outputs is called **Reconciliation**.


### Update state with setState()
Your natural intuition might be to update the state directly.
```js
// ⚠ This is wrong ⚠
this.state.username = 'james';
```
Unfortunately, that's not going to work. The reason is because by mutating the state directly. React will have no idea that the state of your component actually changed.

**setState()**
To solve this problem. React gives you a helper method called setState(). There are two ways to use setState.
- **setState function** - Used when new state is based on previous state.
- **setState object** - Used when new state dosen't depend on previous state.

The first way is by passing setState a function
```js
// setState passing a function
this.setState(prevState => ({// <- Implicit return
  count: prevState.count + 1
}))  
```
This function will be passed the previous the previous state as its first argument.

The second pattern is to pass an object, which will be merged with the current state to form the new state of the component.

```js 
// setState passing an object
this.setState({
  username: 'james'
})
```


### PropTypes
PropTypes is a great way to validate intended data types in our React app.

Consider this component:
```js
import PropTypes from 'prop-types';

class Email extends React.Component {
  render() {
    return (
      <h3>Message: {this.props.text}</h3>
    );
  }
}

Email.propTypes = {
  text: // ???
};
```

We want to validate that a text prop is indeed being passed in, and that its data type is a string. What should the value of the above object's text key be?

Answer: 
**PropTypes.string.isRequired**



### Controlled Components
Forms in a web app, lives inside of the DOM, React solves this problem with what is Controlled components. 

Controlled components are components which render a form, but the source of truth for the form state lives inside of the component state rather than inside of the DOM.

The reason they are called controlled components is because React is controlling the state of the form. 
For example:

```js
Class NameForm extends React.Component {
  state = {email: ""}

  handleChange = (event) => {
    this.setState({email: event.target.value})
  }

  render() {
    return {
      <form>
        <input type="text" value={this.state.email} onChange={this.handleChange} />
      </form>
    }
  }
}
```
`value={this.state.email}` ensures that the value of the input form will all be the value stored in state.

if we want the input to change we can create a handle chage function that update state as user enters data.


Although controlled components require a little bit more typing, they do have some benefits. 
1. They support instant input validation.
2. They allow you to conditionally disable or enable form buttons.
3. They enforce input formats.

> Controlled components refer to components that render a form, but the "source of truth" for that form state lives inside of the component state rather than inside of the DOM.


### React Developer Tools
While building React apps, it may be tricky at times to see exactly what is going on in your components. After all, with so many props being passed and accessed, numerous nested components, and all the JSX yet to be rendered as HTML, it can be tough to put things into perspective!

React Developer Tools allows you to inspect your component hierarchy along with their respective props and states. Once you install the Chrome extension, open the Chrome console and check out the React tab. For a detailed overview, feel free to check out the official documentation.



## 4. Lifecycle Events

render() is For Rendering, Only!. Don't make an AJAX or Asynchronous request in the render method.


> Data should not be fetched in the render method!

A component's `render()` method should only be used to render that component; it should not make any HTTP requests, fetch data that's used to display the content, or alter the DOM. The `render()` method also shouldn't call any other functions that do any of these things, either.

So if render() is only used for displaying content, we put the code that should handle things like Ajax requests in what React calls lifecycle events.

**Lifecycle Events** are special methods each component can have that allow us to hook into the views when specific condition happen. 


### Lifecycle Events
Lifecycle events are specially named methods in a component. These methods are automatically bound to the component instance, and React will call these methods naturally at certain times during the life of a component. There are a number of different lifecycle events, but here are the most commonly used ones.

- `componentDidMount()`: invoked immediately after the component is inserted into the DOM

- `componentWillUnmount()`: invoked immediately before a component is removed from the DOM

- `getDerivedStateFromProps()`: invoked after a component is instantiated as well as when it receives brand new props

> To use one of these, you'd just create a method in your component with the name and React will call it. It's an easy way to hook into different parts of the lifecycle of React components.


You'll sometimes see `shouldComponentUpdate()` in React apps as well. It returns true by default. This means that whenever a component's state (or its parent's state) is updated, the component re-renders.

The React documentation provides the following guidance for using this lifecycle event:

- The default behavior is to re-render on every state change, and in the vast majority of cases you should rely on the default behavior.
- Do not rely on it to “prevent” a rendering, as this can lead to bugs.
- Consider using the built-in PureComponent instead of writing shouldComponentUpdate() by hand.
- We do not recommend doing deep equality checks or using JSON.stringify() in shouldComponentUpdate(). It is very inefficient and will harm performance.



### componentDidMount Lifecycle Event
componentDidMount() is invoked immediately after a component is mounted. Initialization that requires DOM nodes should go here. If you need to load data from a remote endpoint, this is a good place to instantiate the network request. Setting state in this method will trigger a re-rendering.

Let's take a look at an example User component:
```js
import React, { Component } from 'react';
import fetchUser from '../utils/UserAPI';

class User extends Component {
 constructor(props) {
   super(props);

   this.state = {
     name: '',
     age: ''
   };
 }

 componentDidMount() {
   fetchUser().then((user) => this.setState({
     name: user.name,
     age: user.age
   }));
 }

 render() {
   return (
     <div>
       <p>Name: {this.state.name}</p>
       <p>Age: {this.state.age}</p>
     </div>
   );
   }
}

export default User;
```


### Summary
lifecycle events are special methods that React provides that allow us to hook into different points in a component's life to run some code. Now, there are a number of different lifecycle events. They will run at different points, but we can break them down into three distinct categories:

#### Adding to the DOM 
1. constructor()
- getDerivedStateFromProps()
- render()
- componentDidMount()

⚠️componentWillMount() has been deprecated. ⚠️

As of React 16.3, componentWillMount() has been replaced with UNSAFE_componentWillMount(). Only UNSAFE_componentWillMount() will work starting with React 17.0. UNSAFE_componentWillMount() is now considered to be a legacy method and should not be used in new code.


#### Re-rendering
The following lifecycle events will be called in order when a component is re-rendered to the DOM:

1. getDerivedStateFromProps()
- shouldComponentUpdate()
- render()
- getSnapshotBeforeUpdate()(specific use cases
- componentDidUpdate()

⚠️componentWillReceiveProps() and componentWillUpdate() have been deprecated. ⚠️

As of React 16.3, they have been replaced with UNSAFE_componentWillUpdate() and UNSAFE_componentWillReceiveProps(). Only UNSAFE_componentWillUpdate() and UNSAFE_componentWillReceiveProps() will work starting with React 17.0. UNSAFE_componentWillUpdate() and UNSAFE_componentWillReceiveProps() are now considered to be legacy methods and should not be used in new code.


#### Removing from the DOM
This lifecycle event is called when a component is being removed from the DOM:

componentWillUnmount()




## 5. React Router

When javascript is used inside of the browser to render the UI of a website, it's called a single page application. In SPA javascript handles the transition between pages from the single initial page server from the server. 

**React Router** is a tool, that lets us use react to build a SPA.


#### Single-Page Apps
Single-page applications can work in different ways. 
1. One way a single-page app loads is by downloading the entire site's contents all at once. This way, when you're navigating around on the site, everything is already available to the browser, and it doesn't need to refresh the page. 
2. Another way single-page apps work is by downloading everything that's needed to render the page the user requested. Then when the user navigates to a new page, asynchronous JavaScript requests are made for just the content that was requested.

- Another key factor in a good single-page app is that the URL controls the page content. Single-page applications are highly interactive, and users want to be able to get back to a certain state using just the URL. 
Why is this important? Bookmarkability! (pretty sure that's not a word…yet) When you bookmark a site, that bookmark is only a URL, it doesn't record the state of that page.

Have you noticed that any of the actions you perform in the app do not update the page's URL? We need to create React applications that offer bookmarkable pages!


#### React Router
React Router turns React projects into single-page applications. It does this by providing a number of specialized components that manage the creation of links, manage the app's URL, provide transitions when navigating between different URL locations, and so much more.

According to the React Router website:
React Router is a collection of navigational components that compose declaratively with your application.




### Dynamically Render Pages
Using state and short-circuiting 

```js
return(
  {this.state.screen === 'list' && (
    <ListContacts
    contacts={this.state.contacts}
    onDeleteContact={this.removeContact}
    />
  )};
  
  {this.state.screen === 'create' && (
    <CreateContact />
  )}
)
```
If you try using state to control what content displays to the user. Things will break down, when you try to use the back button. we tried our attempt at using state to control what content displays to the user. We saw things break down, though, when we used the back button.

When the user presses the 'back' button in the browser, they will probably have to refresh the page to see the proper content at that location. This isn't the best experience for our user! When we update location, we can update the app as well using JavaScript. This is where React Router comes in.


### The BrowserRouter Component

#### Install React Router
To use React Router in our app, we need to install react-router-dom.
```js
npm install --save react-router-dom
```
The first component we'll be looking at in react-router-dom is the browser router.

#### BrowserRouter Component
It listens for changes in the url and make sure the correct screen shows up when ever the url changes.
```js
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);
```
By wrapping `<App/>` within `<BrowserRouter/>`, we can now use other components that comes with react-router-dom in our `<App/>`. When ever the url changes, the routing componet will be notified about it.

What's nice about React Router is that everything is just a component. This makes using it nice, but it also makes diving into the code more convenient as well. Let's take a look at what exactly BrowserRouter is doing under the hood.

Here is the code straight from the React Router repository.
```js
class BrowserRouter extends React.Component {
  static propTypes = {
    basename: PropTypes.string,
    forceRefresh: PropTypes.bool,
    getUserConfirmation: PropTypes.func,
    keyLength: PropTypes.number,
    children: PropTypes.node
  }

  history = createHistory(this.props)

  render() {
    return <Router history={this.history} children={this.props.children} />
  }
}
```

For React Router to work properly, you need to wrap your whole app in a BrowserRouter component. Also, BrowserRouter wraps the history library which makes it possible for your app to be made aware of changes in the URL.


#### Replace Anchor Links With The Link Component
Link is a straightforward way to provide declarative, accessible navigation around your application. By passing a to property to the Link component, you tell your app which path to route to.
```js
<Link to="/about">About</Link>
```

If you're experienced with routing on the web, you'll know that sometimes our links need to be a little more complex than just a string. For example, you can pass along query parameters or link to specific parts of a page. What if you wanted to pass state to the new route? To account for these scenarios, instead of passing a string to Links to prop, you can pass it an object like this,
```js
<Link to={{
 pathname: '/courses',
 search: '?sort=name',
 hash: '#the-hash',
 state: { fromDashboard: true }
}}>
 Courses
</Link>
```
You won't need to use this feature all of the time, but it's good to know it exists.


### The Route Component
`<Route/>` takes a path that would matches a url. If the Route path matches a url then it would render some UI.

```js
<Route
  path="/create"
  element={<componentName/>}
/>
```

```js
<Routes>
  <Route
    exact
    path="/"
    element={<componentName/>}
  />
  <Route
    path="/create"
    element={<componentName/>}
  />
</Routes>

```

In summary, the Route component is a critical piece of building an application with React Router because it's the component which is going to decide which components are rendered based on the current URL path.


### Serialize The Form Data
we'll use the form-serialize package to output this information as a regular JavaScript object for the app to use.

```js
npm install --save form-serialize
```



 ## 6. React & Redux

### Managing State

Remember that the main goal of Redux is to make the state management of an application more predictable. Let's see what that might look like:

#### The Store
In this example, the app appears exactly the same to the end user, however, it's functioning quite differently under the hood. All of the data is stored outside of the UI code and is just referenced from the UI code.

With a change like this, if the data needs to be modified at all, then all of the data is located in one place and needs to be only changed once. Then the areas of the app that are referencing pieces of data, will be updated since the source they're pulling from has changed.


#### State Tree
One of the key points of Redux is that all of the data is stored in a single object called the state tree. But what does a **state tree** actually look like? Good question! Here's an example:
```js
{
  recipes: [
    { … },
    { … },
    { … }
  ],
  ingredients: [
    { … },
    { … },
    { … },
    { … },
    { … },
    { … }
  ],
  products: [
    { … },
    { … },
    { … },
    { … }
  ]
}
```

#### The Store
Now that we have decided that, we will  be putting our data in a place called the state tree. 
If we are going to build a real application with our state tree, there are 3 ways in which we can interface with it.

1. Getting the state
2. Listening for changes
3. Updating the state

The Store = The State Tree + 3 ways we can interact with it.



### Create Store: Getting and Listening
So this is what we're going to do in this lesson - we're going to actually create the store code ourselves, from scratch.

In the following video, we'll start with a blank index.js file and create a factory function that creates store objects. Then we'll have the store keep track of the state, and we'll write the method to get the state from the store.


#### Getting the State
```js
function createStore() {
  // The store should have four parts
  // 1. The state
  // 2. Get the state
  // 3. Listen to changes on the state
  // 4. Update the state

  // 1. The state
  let state

  // 2. Get state
  const getState = () => state

  return {
    getState
  }
}
```

#### Listening To Changes
Listeners are functions that are called when the state changes.
The subscribe function, used to add a function to listeners.
```js
function createStore() {
  // The store should have four parts
  // 1. The state
  // 2. Get the state
  // 3. Listen to changes on the state
  // 4. Update the state


  let state
  let listeners = []


  const getState = () => state

  const subscribe = (listener) => {
    listeners.push(listener)
    return () => {
      // returns a function that unsubscribes the listener
      listeners = listeners.filter((l) => l !== listener)
    }
  }

  return {
    getState
  }
}
```


#### Updating the State
The goal here is to be able to predict the predictability of our application. 
We can allow allow any thing to update the state, if we did, it will drastically decrease predictability.

**Rule #1:** Only an event can change the state of the store.

Lets see an example of this kind of event: 
If you are building a ToDo app, an event could be adding a ToDo.

##### Intro to Actions
When an event takes place in a Redux application, we use a plain JavaScript object to keep track of what the specific event was. This object is called an Action.

That object(ToDo) might look like this
```js
// An object with a type property that indicates 
// the type of event that occured;
{
  type: "ADD_TODO"
}

// We can now add any information we want, just by 
// adding a property to the object
{
  type: "ADD_TODO",
  todo: {
    id: 0,
    name: "Learn Redux",
    complete: false
  }
}
```

What if we remove the todo what event might this be?
```js 
// We can remove a todo by passing an event that signifys that we want to remove a todo and specifying the ID of the ToDo we want to remove
{
  type: "REMOVE_TODO",
  id: 0
}
```

If we want to Toggle the state of the a ToDo, we can have.
```js
// Event or action is toggle todo
{
  type: "TOGGLE_TODO",
  id: 0
}
```

If we want the user to be able to add a goal
```js
{
  type: "ADD_GOAL",
  goal: {
    id: 0,
    name: "Run a Marathon"
  }
}
```

If we want the user to be able to remove a goal
```js
{
  type: "REMOVE_GOAL",
  id:0 
}
```

> All actions must have a type property (Redux will throw an error if it is missing)

By creating the actions that can change the state of our app, if a value in state changes, we will know that one of those actions occured.



### Update State
Redux is a predictable state container for JavaScript apps.


#### Predictable Functions
So we have the entire state of the application in the state tree, and we also know about all the possible action that can change the applictions state.

We need something to tie this two data together(A way to update our state base on the action that occured). 

We can use a function, the function will take in a state and an action, and return a new state. But the function must be predictable(i.e the function must be a pure function).


#### Pure Functions
Pure functions are defined by 3 characteristics.
1. Return the same result if the same arguments are passed in.
2. Depend solely on the arguments passed into them
3. Do not produce side effects

If a function doesn't pass any of the characteristics listed above then it's not a pure function.

Let’s check out an example of a pure function, `square()`:
```js
// `square()` is a pure function
const square = x => x * x;
```
square() is a pure function because it outputs the same value every single time, given that the same argument is passed into it. There is no dependence on any other values to produce that result, and we can safely expect just that result to be returned (no side effects).


On the other hand, let’s check out an example of an impure function, `calculateTip()`:
```js
// `calculateTip()` is an impure function
const tipPercentage = 0.15;
const calculateTip = cost => cost * tipPercentage;
```
`calculateTip()` calculates and returns a number value. However, it relies on a variable (tipPercentage) that lives outside the function to produce that value. Since it fails one of the requirements of pure functions, `calculateTip()` is an impure function. However, we could convert this function to a pure function by passing in the outside variable, tipPercentage, as a second argument to this function!
```js
const calculateTip = (cost, tipPercentage = 0.15) => cost * tipPercentage;
```


#### The Reducer Function
todos here is called a reducer, because it takes a state and an action and returns a new state
```js
function todos (state = [], action) {
  if (action.type === "ADD_TODO") {
    return state.concat([action.todo])
  }
}

// Using the todos function above
state = [];
action = {
  type: "ADD_TODO",
  todo: {id:0, name:"Learn Redux", completed: false}
}

// A call to the reducer
const newState = todos(state, action);
consolel.log(newState); 
// [{id:0, name:"Learn Redux", completed: false}]
```

> A reducer must always be a pure function.

Example 2: 
```js
/* Create A Reducer
 *
 * You need to create a reducer called "appReducer" that accepts two arguments:
 * - First, an array containing information about ice cream 
 * - Second, an object with a 'DELETE_FLAVOR' `type` key
 * (i.e., the object contains information to delete the flavor from the state)
 *
 * The action your reducer will receive will look like this:
 * { type: 'DELETE_FLAVOR', flavor: 'Vanilla' }
 *
 * And the initial state will look something like this (as such, refrain 
 * from passing in default values for any parameters!):
 * [{ flavor: 'Chocolate', count: 36 }, { flavor: 'Vanilla', count: 210 }];
*/

let state = [
  { flavor: 'Chocolate', count: 36 },
  { flavor: 'Vanilla', count: 210 }
];

function appReducer(state, action) {
  // return an empty array if state is undefined
  if (state == undefined) return [];

  if (action.type === "DELETE_FLAVOR") {
    return state.map((item) => {
      if (item.flavor === action.flavor) item.count -= 1;
      return item;
    });
  }
}

console.log(appReducer(state, { type: 'DELETE_FLAVOR', flavor: 'Vanilla' }));

/*
 [
  { flavor: 'Chocolate', count: 36 },
  { flavor: 'Vanilla', count: 209 }
  ]
 */

```



#### Dispatch 
There 3 parts to our app 
1. Action
2. Reducer
3. store (createStore())

createStore() must have:
1. State Tree
2. Getting the state
3. Listening for changes 
4. Updating the state (This can be achieved by creating a dispatch function)


Dispatch is responsible for updating the state in our store

```js
const dispatch = (action) => {
  // todos here is a reducer
  state = todos(state, action);

  // We also need to make sure our listeners are also called
  listeners.foreach((listener) => listener());
  }
```

##### Putting it all together
**Our store**
```js
/* We can think of our createStore() as a libray code.
  */
// Libray code
function createStore(reducer) {
  // The store should have four parts
  // 1. The state
  // 2. Get the state
  // 3. Listen to changes on the state
  // 4. Update the state


  let state
  let listeners = []

  const getState = () => state

  const subscribe = (listener) => {
    listeners.push(listener)
    return () => {
      // returns a function that unsubscribes the listener
      listeners = listeners.filter((l) => l !== listener)
    }
  }

  const dispatch = (action) => {
  // todos here is a reducer
  state = reducer(state, action);

  // We also need to make sure our listeners are also called
  listeners.forEach((listener) => listener());
  }

  return {
    getState,
    subscribe,
    dispatch
  }
}


// App Code 
function todos (state = [], action) {
  if (action.type === 'ADD_TODO') {
    return state.concat([action.todo])
  }

  return state
}

// Usage
const store = createStore(todos);

store.subscribe(() => {
  console.log('The new state is: ', store.getState());
})

store.dispatch({
  type: "ADD_TODO",
  todo: {
    id: 1,
    name: "Learn Redux",
    complete: false
  }
})
```

> The Store contains the state tree and provides ways to interact with the state tree.

we created a function called `createStore()` that returns a store object
`createStore()` must be passed a "reducer" function when invoked
the store object has three methods on it:
`.getState()` - used to get the current state from the store
`.subscribe()` - used to provide a listener function the store will call when the state changes
`.dispatch()` - used to make changes to the store's state
the store object's methods have access to the state of the store via closure


> Up until this point, we've been building out the createStore() function, piece by piece. In this section, we put all of those pieces together to create a fully functioning project. Then we took that code and demoed it working in the console. We showed that subscribing to the store returned a function we could use to unsubscribe later. We also dispatched an action and saw how the state was updated as a result.

There are still a couple more actions that our app is supposed to be able to handle:

- the `REMOVE_TODO` action
- the `TOGGLE_TODO` action


```js
function todos(state = [], action) {
  if (action.type === "ADD_TODOS") {
    return state.concat([action.todo])
  } elese if (action.type === "REMOVE_TODO") {
    return state.filter((todo) => todo.id !== action.id)
  } else if (action.type === "TOGGLE_TODO") {
    return state.map((todo) => todo.id !== action.id ? todo : 
    Object.assign([], todo, {complete: !todo.complete}))
  } else {
    return state
  }
}
```

OR (You can use a Switch statement to make it easier to read)

```js
function todos(state = [], action) {
  switch(action.type) {
    case "ADD_TODOS": 
      return state.concat([action.todo])

    case "REMOVE_TODO": 
      return state.filter((todo) => todo.id !== action.id)

    case "TOGGLE_TODOS": 
      return state.map((todo) => todo.id !== action.id ? todo : !todo.complete)
    
    default: 
      return state
  }
}
```


**Adding Goals**
To be able to add goals to the existing app, we need to create another reducer to handle goals.
Let's make the app a bit more complicated and add in a second piece of state for our app to track - goals.

```js
function goals (state = [], action) {
  switch(action.type) {
    case "ADD_GOAL":
      return state.concat([action.goal]);
    case "REMOVE_GOAL":
      return state.filter((goal) => goal.id !== action.id)
    default: 
      return state
  }
}
```

We now have two reducer functions:
- todos
- goals
However, the `createStore()` function we built can only handle a single reducer function.

To be able to use multiple reducers, we need to create a root reducer, to handle calls the appropriate/correct reducer.



