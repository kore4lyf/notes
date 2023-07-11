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
