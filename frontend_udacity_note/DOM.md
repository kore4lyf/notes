# Javascript DOM

The web browser provides an API for accessing the HTML document in a tree structure known as the Document Object Model (DOM). 
In addition to parsing the style and structure of the HTML and CSS, the browser creates a representation of the document known as the Document Object Model. This model allows JavaScript to access the text content and elements of the website document as objects.

## What is the Difference Between the DOM and HTML Source Code?
Currently, with this example, it seems that HTML source code and the DOM are the exact same thing. There are two instances in which the browser-generated DOM will be different than HTML source code:
- The DOM is modified by client-side JavaScript
- The browser automatically fixes errors in the source code

Let’s demonstrate how the DOM can be modified by client-side
JavaScript. Type the following into the console:
document.body;
The console will respond with this output:

Output
document is an object, body is a property of that object that we have accessed with dot notation. 

Submitting document.body to the console outputs the body element and everything inside of it.

In the console, we can change some of the live properties of the body object on this website. We’ll edit the style attribute, changing the background color to fuchsia. Type this into the console:
`document.body.style.backgroundColor = 'fuchsia';`
After typing and submitting the above code, you’ll see the live update to the site, as the background color changes.

## The DOM Tree and Nodes

All items in the DOM are defined as nodes. There are many types of nodes, but there are three main ones that we work with most often:
- Element nodes
- Text nodes
- Comment nodes

When an HTML element is an item in the DOM, it is referred to as an **element node**. 
Any lone text outside of an element is a **text node**, and an
HTML comment is a **comment node**. 

## Identifing Node Types
Every node in a document has a node type, which is accessed through the **nodeType** property. 

| Node Type | Value | Example |
| :--- | :--- | :--- |
|ELEMENT_NODE | 1 | The <body> element |
| TEXT_NODE | 3 | Text that is not part of an element|
| COMMENT_NODE | 8 | <!-- an HTML comment --> |

> In the Elements tab of Developer Tools, you may notice that whenever you click on and highlight any line in the DOM the value of == $0 will appear next to it. This is a very handy way to access the currently active element in Developer Tools by typing $0.
In the console of nodes.html, click on the first element in the body, which is an h1 element.


## How To Access Elements in the DOM

| ID | #demo | getElementById() |
| :--- | :--- | :--- |
| Class | .demo | getElementsByClassName() |
| Tag | demo | getElementsByTagName() |
| Selector | (single) | querySelector() |
| Selector | (all) | querySelectorAll() |

##### How To Access Elements in the DOM 
`document.getElementById();`

```js 
const demoId = document.getElementById('demo');
demoId.style.border = '1px solid purple';
```
##### Accessing Elements by Class 
Now we want to access more than one element, and in our example we have two elements with a demo class.
```html
<div class="demo">Access me by class (1)</div>
<div class="demo">Access me by class (2)</div>
```
`document.getElementsByClassName();`

```js 
const demoClass = document.getElementsByClassName('demo');
demoClass.style.border = '1px solid orange';
```
Output
Uncaught TypeError: Cannot set property 'border' of undefined

> The reason this doesn’t work is because instead of just getting one element, we have an array-like object of elements. 

```js 
console.log(demoClass);
``` 

Output
(2) [div.demo, div.demo]

JavaScript arrays must be accessed with an index number. We can therefore change the first element of this array by using an index of 0.

`demoClass[0].style.border = '1px solid orange';`

##### Accessing Elements by Tag

A less specific way to access multiple elements on the page would be by its HTML tag name. We access an element by tag with the getElementsByTagName() method.

`document.getElementsByTagName();`

For our tag example, we’re using article elements.
```html
<article>Access me by tag (1)</article>
<article>Access me by tag (2)</article>
```

Just like accessing an element by its class, getElementsByTagName() will return an array-like object of
elements, and we can modify every tag in the document with a for loop.
```js
const demoTag = document.getElementsByTagName('article');
for (i = 0; i < demoTag.length; i++) {
demoTag[i].style.border = '1px solid blue';
}
```

##### Query Selectors
`$('#demo'); // returns the demo ID element in`

jQuery
We can do the same in plain JavaScript with the **querySelector()** and **querySelectorAll()** methods.

To access a single element, we will use the querySelector() method. In our HTML file, we have a demo-query element
```html
<div id="demo-query">Access me by query</div>
```
The selector for an id attribute is the hash symbol (#). We can assign the element with the demo-query id to the demoQuery variable.
```js
const demoQuery = document.querySelector('#demo-
query');
```
In the case of a selector with multiple elements, such as a class or a tag,
> querySelector() will return the first element that matches the query.

> We can use the querySelectorAll() method to collect all the elements that match a specific query.

In our example file, we have two elements with the demo-query-all class applied to them.
```html
<div class="demo-query-all">Access me by query all
(1)</div>
<div class="demo-query-all">Access me by query all
(2)</div>
```
The selector for a class attribute is a period or full stop (.), so we can access the class with .demo-query-all.


## How To Traverse the DOM
##### Root Nodes
The document object is the root of every node in the DOM. This object is actually a property of the window object, which is the global, top-level object representing a tab in the browser. 
The **window** object has access to such information as the toolbar, height and width of the window, prompts, and alerts. The document consists of what is inside of the inner window.

| PROPERTY | NODE | NODE TYPE |
| :--- | :---| :--- |
| document |#document DOCUMENT_NODE |
| document.documentElement | html | ELEMENT_NODE |
| document.head | head | ELEMENT_NODE |
| document.body | body | ELEMENT_NODE |

##### Parent Nodes

The nodes in the DOM are referred to as parents, children, and siblings, depending on their relation to other nodes. The parent of any node is the node that is one level above it, or closer to the document in the DOM hierarchy. There are two properties to get the parent — parentNode and parentElement.

| Property | Get|
| parentNode | Parent Node |
| parentElement ,| Parent Element Node |




# (UDACITY) Javascript DOM
The DOM
In this section, we'll look at the Document Object Model - otherwise known as the DOM.

The words "the DOM" are used all over developer documentation sites and tutorials on writing interactive JavaScript code. But what is it? Perhaps you've even used the DOM and still aren't quite sure what it is. Is it the browser? Is it a special part of JavaScript? ¯\_(ツ)_/¯

> The DOM is a tree structure that captures the content and properties of the HTML and all the relationships between the nodes

                        OR
> The DOM is the full, parsed representation of the HTML

the following steps happen:
- HTML is received (**Characters**)
- HTML tags are converted to **tokens**
- Tokens are converted to **Nodes**
- Nodes are converted to the **DOM**

When you request a website, no matter what backend language is powering that website, it will respond with HTML. The browser receives a stream of HTML. The bytes are run through a complicated (but fully documented) parsing process that determines the different characters (e.g. the start tag character <, an attribute like href, a closing angle bracket like >). After parsing has occurred, a process called tokenization begins. Tokenization takes one character at a time and builds up tokens. The tokens are:

- DOCTYPE
- start tag
- end tag
- comment
- character
- end-of-file

Let's take a break for a second. At this state, the browser has received the bytes that've been sent by a server. The browser has converted the bytes to tags and has read through the tags to create a list of tokens.

This list of tokens then goes through the tree construction stage. The output of this stage is a tree-like structure - this is the DOM!


The **document object is provided by the browser** and is a representation of the HTML document. This object is not provided by the JavaScript language. ECMAScript is the language specification that JavaScript is based on, and it only references the document object model in one place, in its "Global Object" section:

In addition to the properties defined in this specification the global object may have additional host defined properties. This may include a property whose value is the global object itself; for example, in the HTML document object model the window property of the global object is the global object itself. (source)

Basically, this says that the document object is not part of JavaScript, but is expected to already exist and be freely accessible to JavaScript code.

The DOM is standardized by the W3C. There are a number of specifications that make up the DOM, here are few:

- Core Specification
- Events Specification
- Style Specification
- Validation Specification
- Load and Save Specification

## The DOM Recap
The DOM stands for "Document Object Model" and is a tree-like structure that is a representation of the HTML document, the relationship between elements, and contains the content and properties of the elements.

The DOM is not:
- part of the JavaScript language

The DOM is:
- constructed from the browser
- is globally accessible by JavaScript code using the document object


## Select An Element By ID
Let's take a look at how we can use JavaScript and the DOM to gain access to specific elements using their ID attribute.

Remember the document object from the previous section? Well, we're going to start using it! Remember the document object is an object, just like a JavaScript object. This means it has key/value pairs. Some of the values are just pieces of data, while others are functions (also known as methods!) that provide some type of functionality. The first DOM method that we'll be looking at is the .getElementById() method:
```js
document.getElementById();
```
If we ran the code above in the console, we wouldn't get anything, because we did not tell it the ID of any element to get! We need to pass a string to .getElementById() of the ID of the element that we want it to find and subsequently return to us:
```js
document.getElementById('footer');
```
> Passing document.getElementById() an unknown ID returns null.


## Selecting Multiple Elements At Once 
- .getElementsByClassName()
- .getElementsByTagName()

Accessing Elements By Their Class
The first method we'll look at is
.getElementsByClassName():

```js
document.getElementsByClassName();
```
Similarly to .getElementById(), if we ran the code above in the console, we wouldn't get anything, because we did not tell it the class to search for! Also just like .getElementById(), .getElementsByClassName() is expecting that we call it with a string of the class we want it to search for/return:
```js
document.getElementsByClassName('brand-color');
```

> Beware of the S!
I know we haven't looked at .getElementsByTagName() just yet, but there's something different about .getElementById() compared with both .getElementsByClassName() and .getElementsByTagName() that I want to point out because it can be easy to miss; both .getElementsByClassName() and .getElementsByTagName() have an extra "s" in their name.

> .getElementsByClassName() returns an array-like data structure of elements called **HTML COLLECTIONS**


## The Node Interface 
Node (with a capital "N"!) is a blueprint that contains information about all of the properties and methods for real nodes (with a lowercase "n"!). If you're not used to them, the words "interface", "property", and "method" can be kind of cryptic at first. Just remember that:

- interface = blueprint
- properties = data
- methods = functionality

> Node = Blueprint + Behaviour eg Car Model

> node = Node Implentation eg Vehicle 

Node Interface is a blueprint for all of the properties (data) and methods (functionality) that every real node has after it's been created. 

##### Element Interface
Just like the Node Interface, the Element Interface is a blueprint for creating elements:

EventTarget `<-` Node `<-` Element 

One really important thing about the Element Interface is that it is a descendent of the Node Interface.

A diagram showing an Element with an arrow pointing to Node, and Node with an arrow pointing to EventTarget
Element points to its parent, Node.

Since Element is pointing at Node, this indicates that the Element Interface inherits all of the Node Interface's properties and methods. This means that any element (lowercase "e"!) that was created from the Element Interface is also a descendent from the Node Interface...which means the element (lowercase "e"!) is also a node (lowercase "n"!).

Do you remember the .getElementsByClassName() method on the document object that we looked at previously? While reviewing the Element interface, you might've noticed that it also has a .getElementsByClassName() method! The Element Interface inherits from the Node Interface, not the Document Interface (yep, there's a Document Interface!). The Element Interface has its own .getElementsByClassName() that does the exact same thing as the one on the document object.

This means that you can use the document object to select an element, then you can call .getElementsByClassName() on that element to receive a list of elements with the class name that are descendents of that specific element!
```js
// selects the DOM element with an ID of "sidebar"
const sidebarElement = document.getElementById('sidebar');

// searches within the "sidebar" element for any elements with a class of "sub-heading"
const subHeadingList = sidebarElement.getElementsByClassName('sub-heading');
``` 

##### The querySelector Method
We can use the .querySelector() method to select elements just like we do with CSS. We use the .querySelector() method and pass it a string that's just like a CSS selector:
```js
// find and return the element with an ID of "header"
document.querySelector('#header');

// find and return the first element with the class "header"
document.querySelector('.header');

// find and return the first <header> element
document.querySelector('header');
``` 

##### The querySelectorAll Method
The .querySelector() method returns only one element from the DOM (if it exists). However, there are definitely times when you will want to get a list of all elements with a certain class or all of one type of element (e.g. all <tr> tags). We can use the .querySelectorAll() method to do this!
```js
// find and return a list of elements with the class "header"
document.querySelectorAll('.header');

// find and return a list of <header> elements
document.querySelectorAll('header');
```


## Creating Content With Javascript 

### Update Existing Page Content 

##### An Element's Inner HTML
Every element inherits properties and methods from the Element Interface (remember this from the previous lesson!). This means that every element has an .innerHTML property. This property, as it's rightly named, represents the markup of the element's content. We can use this property to:

- get an element's (and all of its descendants!) HTML content
- set an element's HTML content

**innerHTML** is a property of an element that returns all the html content of an element.
It returns what it returns is called a DOMString.
e.g. 
```js 
document.querselector('.card');
```

The **.innerHTML** property sets or returns the HTML content inside the selected element (i.e. between the tags).

There's also the rarely used .outerHTML property. **.outerHTML** represents the HTML element itself, as well as its children.
```js
<h1 id="pick-me">Greetings To <span>All</span>!</h1>

const innerResults = document.querySelector('#pick-me').innerHTML;
console.log(innerResults); // logs the string: "Greetings To <span>All</span>!"

const outerResults = document.querySelector('#pick-me').outerHTML;
console.log(outerResults); // logs the string: "<h1 id="pick-me">Greetings To <span>All</span>!</h1>"
```

##### An Element's Text Content
So .innerHTML will get/set an element's HTML content. If we just want the text content, we can use the fantastically named .textContent property!

The .textContent property will:

- set the text content of an element and all its descendants
- return the text content of an element and all its descendants

Setting an element's text content is easy, just set it like you would any other property:
```js
nanodegreeCard.textContent = "I will be the updated text for the nanodegreeCard element!";
```

If you'd like to update an element, including its HTML, then you need to use the .innerHTML property:
```js
myElement.textContent = 'The <strong>Greatest</strong> Ice Cream Flavors'; // doesn't work as expected

myElement.innerHTML = 'The <strong>Greatest</strong> Ice Cream Flavors';  // works as expected
```
.textContent displays everything as text while .innerHTML reders HTML tags written in a text.

##### An Element's Text Content - Version 2! 
**.innerText** - will get the visible text of the element. This is an important distinction! If CSS is used to hide any text inside that element, .innerText will not return that text, while .textContent will return it.


## Adding Content To The Page
As you've already discovered, the .createElement() method is a method on the document object:
```js
// creates and returns a <span> element
document.createElement('span');

// creates and returns an <h3> element
document.createElement('h3');
```

You may have noticed that using document.createElement() to create an element didn't actually add that newly created element anywhere on the page! Creating an element...just creates it. It doesn't add it to the DOM. Since the element isn't added to the DOM, it doesn't appear in the page (if you remember, the DOM is the parsed representation of the page). So, now that we can create brand new elements, we need to be able to add them to the DOM so that they'll show up on the page.

We can use the .appendChild() method to add an element to the page! Before we see how this element works, let's quickly define the word "append". There are several different definitions of the word, but I like the wording of the Cambridge Dictionary's the best:

Now, to use the .appendChild() method, it needs to be called on another element, not the document object!
```js
// create a brand new <span> element
const newSpan = document.createElement('span');

// select the first (main) heading of the page
const mainHeading = document.querySelector('h1');

// add the <span> element as the last child element of the main heading
mainHeading.appendChild(newSpan);
```

##### Creating Text Nodes
Just like you created new elements with the .createElement() method, you can also create new text nodes using the .createTextNode() method. Take a look at the following code that:
```js
creates a paragraph element
creates a text node
appends the text node to the paragraph
appends the paragraph to the tag
const myPara = document.createElement('p');
const textOfParagraph = document.createTextNode('I am the text for the paragraph!');

myPara.appendChild(textOfParagraph);
document.body.appendChild(myPara);
```
However, since you already know about the .textContent property, the code below will provide the exact same result:
```js
const myPara = document.createElement('p');

myPara.textContent = 'I am the text for the paragraph!';
document.body.appendChild(myPara);
```

##### Inserting HTML In Other Locations
By definition, the **.appendChild()** method will add an element as the last child of the parent element. It's impossible to put it as the first child or anywhere else...it has to be the last child. Wouldn't it be nice if there were a little flexibility in where we could add the child element?

Enter the **.insertAdjacentHTML()** method! The **.insertAdjacentHTML()** method has to be called with two arguments:

the location of the HTML
the HTML text that is going to be inserted
The first argument to this method will let us insert the new HTML in one of four different locations

- **beforebegin** – inserts the HTML text as a previous sibling
- **afterbegin** – inserts the HTML text as the first child
- **beforeend** – inserts the HTML text as the last child
- **afterend** – inserts the HTML text as a following sibling
A visual example works best, and MDN's documentation has a fantastic example that I'll modify slightly:
```js
<!-- beforebegin -->
<p>
    <!-- afterbegin -->
    Existing text/HTML content
    <!-- beforeend -->
</p>
<!-- afterend -->
Here's how we'd call .insertAdjacentHTML():

const mainHeading = document.querySelector('#main-heading');
const htmlTextToAdd = '<h2>Skydiving is fun!</h2>';

mainHeading.insertAdjacentHTML('afterend', htmlTextToAdd);
``` 

### Removing A Page's Content 

Removing a Child Element

We can use the **.removeChild()** method to...wait for it...remove a child element. Basically, this is exactly the opposite of the **.appendChild()** method. So just like the **.appendChild()** method, the **.removeChild()** method requires:

a parent elementthe child element that will be removed.

Just like the .appendChild() method, there's a (somewhat minor) drawback to the .removeChild() method. Both methods:

require access to parent to function

However, we don't actually need to have the parent element because there is a workaround! Just like the .firstElementChild property can be called on a parent element to access its first element, every element also has a parentElement property that refers to its parent! So if we have access to the child element that we're about to add or remove, you can use the parentElement property to "move focus" to the element's parent. Then we can call .removeChild() (or .appendChild()) on that referenced parent element.

Let's look at an example:
```js
const mainHeading = document.querySelector('h1'); mainHeading.parentElement.removeChild(mainHeading); 
```
Let's walk through this code.
```js
const mainHeading = document.querySelector('h1'); 
```
The preceding code will select the first `<h1>` on the page and stores it in the mainHeading variable. Now to the next line:
```js
mainHeading.parentElement.removeChild(mainHeading);
```

#### .remove()
We can remove the child element directly with the .remove() method:

```js
const mainHeading = document.querySelector('h1');
mainHeading.remove();
```

### Style Page Content
In this section, we'll be looking at controlling page and element styling using the following properties and methods:

- .style.<prop>
- .cssText
- .setAttribute()
- .className
- .classList

##### Modifying an Element's Style Attribute
Let's jump back to your knowledge of CSS. When trying to style an element, the most-specific rules that you can write for an element are written in that element's style attribute. Lucky for us, we can access an element's style attribute using the .style property!
```js
const mainHeading = document.querySelector('h1');

mainHeading.style.color = 'red';
```

##### Adding Multiple Styles At Once
We've seen how the .style.<property> syntax will let us change just one piece of styling for an element. So if we wanted to set an element's color, background color, and font size, we'd have to use three separate lines of code:
```js
const mainHeading = document.querySelector('h1');
mainHeading.style.color = 'blue';
mainHeading.style.backgroundColor = 'orange';
mainHeading.style.fontSize = '3.5em';
```
...and that's just for setting three styles. Imagine if we needed 15 or 20 different styles! So the .style.property syntax is perfect for setting one style at a time, but it's not great for controlling multiple styles.

Fortunately, we can use the .style.cssText property to set multiple CSS styles at once!
```js
const mainHeading = document.querySelector('h1');

mainHeading.style.cssText = 'color: blue; background-color: orange; font-size: 3.5em';
```
Notice that when using the .style.cssText property, you write the CSS styles just as you would in a stylesheet; so you write font-size rather than fontSize. This is different than using the individual .style.< property> way.


##### Setting An Element's Attributes
Another way to set styles for an element is to bypass the .style.< property> and .style.cssText properties altogether and use the .setAttribute() method:
```js
const mainHeading = document.querySelector('h1');

mainHeading.setAttribute('style', 'color: blue; background-color: orange; font-size: 3.5em;');
```
Check out the documentation page for more information: style docs

.setAttribute() Is Not Just For Styling
The setAttribute() method is not just for styling page elements. You can use this method to set any attribute for an element. If you want to give an element an ID, you can do that!:
```js
const mainHeading = document.querySelector('h1');

// add an ID to the heading's sibling element
mainHeading.nextElementSibling.setAttribute('id', 'heading-sibling');

// use the newly added ID to access that element
document.querySelector('#heading-sibling').style.backgroundColor = 'red';
```

The last two lines could've been combined into one to bypass setting an ID and just styling the element directly:

mainHeading.nextElementSibling.style.backgroundColor = 'red';
...but this was just to demonstrate that it's possible to set an attribute with JavaScript that affects the DOM which then can be used immediately

##### Accessing an Element's Classes
The first element property we'll look at is the .className property. This property returns a string of all of the element's classes. If an element has the following HTML:

```js
<h1 id="main-heading" class="ank-student jpk-modal">Learn Web Development at Udacity</h1>
We could use .className to access the list of classes:

const mainHeading = document.querySelector('#main-heading');

// store the list of classes in a variable
const listOfClasses = mainHeading.className;

// logs out the string "ank-student jpk-modal"
console.log(listOfClasses);
```

The .className property returns a space-separated string of the classes. This isn't the most ideal format, unfortunately. We can, however, convert this space-separated string into an array using the JavaScript string method, .split():
```js
const arrayOfClasses = listOfClasses.split(' ');
```
// logs out the array of strings ["ank-student", "jpk-modal"]
console.log(arrayOfClasses);
Now that we have an array of classes, we can do any data-intensive calculations:

- use a for loop to loop through the list of class names
- use .push() to add an item to the list
- use .pop() to remove an item from the list
- .className is a property, so we can set its value just by assigning a string to the property:
``js
mainHeading.className = "im-the-new-class";
```

##### The .classList Property
The .classList property is newer than the .className property, but is much nicer, check it out:

```js
<h1 id="main-heading" class="ank-student jpk-modal">Learn Web Development at Udacity</h1>
const mainHeading = document.querySelector('#main-heading');

// store the list of classes in a variable
const listOfClasses = mainHeading.classList;

// logs out ["ank-student", "jpk-modal"]
console.log(listOfClasses);
```

The .classList property has a number of properties of its own. Some of the most popularly used ones are:

- .add() - to add a class to the list
- .remove() - to remove a class from the list
- .toggle() - to add the class if it doesn't exists or remove it from the list if it does already exist
- .contains() - returns a boolean based on if the class exists in the list or not


## Working with Browser Events 
Lesson Overview
To recap, we'll be looking at :

Events - what they are
Responding to an event - how to listen for an event and respond when one happens
Event Data - harness the data that is included with an event
Stopping an event - preventing an event from triggering multiple responses
Event Lifecycle - the lifecycle stages of an event
DOM Readiness - events to know when the DOM itself is ready to be interacted with
This lesson is chock full of incredibly useful information, so don't skim over anything!

##### Seeing An Event
There is a hidden world of events going on right now on this very page! It's really hard to actually see into this hidden world, though. So how can we know that events really are being announced? If they are being announced, how come they're not easy for us to see?

Fortunately, the Chrome browser has a special **monitorEvents()** function that will let us see different events as they are occurring.

On the console u can try 
```js 
monitorEvents(document)
```

you may see the following events:
- click
- dblclick
- scroll
- resize
However, there are hundreds more!

The monitorEvents function will keep spitting out all of the events that are happening on the targeted element until the end of time...that, or until you refresh the page. Alternatively, the Chrome browser does offer an unmonitorEvents() function that will turn off the announcing of events for the targeted element:
```js
// start displaying all events on the document object
monitorEvents(document);

// turn off the displaying of all events on the document object.
unmonitorEvents(document);
```
One last little bit of info on monitorEvents is that this is for development/testing purposes only. It's not supposed to be used for production code.


### Respond to Events 
Do you remember how the Element Interface is a descendant of the Node Interface, and therefore inherits all of Node's properties and methods?

EventTarget `<-` Node `<-` Element  

Well there was one piece that I totally skipped over then but am addressing now. The Node Interface inherits from the EventTarget Interface.

> EventTarget is an interface implemented by objects that can receive events and may have listeners for them. 

Element, document, and window are the most common event targets, but other objects can be event targets too…

As you can see from the image above, the EventTarget is at the top of the chain. This means that it does not inherit any properties or methods from any other interfaces. However, every other interface inherits from it and therefore contain its properties and methods. This means that each of the following is an "event target";

- the document object
- a paragraph element
- a video element
- etc.

Remember that both the document object and any DOM element can be an event target. And again, why is this?...because both the Element Interface and the Document Interface inherit from the EventTarget Interface. So any individual element inherits from the Element Interface, which in turn inherits from the EventTarget Interface. Likewise, the document object comes from the Document Interface, which in turn inherits from the EventTarget Interface.

If you take a look at the EventTarget Interface, you'll notice that it doesn't have any properties and only three methods! These methods are:
- .addEventListener()
- .removeEventListener()
- .dispatchEvent()


#####  Adding an Event Listener
```js
const mainHeading = document.querySelector('h1');

mainHeading.addEventListener('click', function () {
  console.log('The heading was clicked!');
});
```

### Removing An Event Listener
To remove an event listener, we use the .removeEventListener() method.
However, before we look at .removeEventListener(), we need to take a brief review of object equality. It seems like an odd jump, but it'll make sense in just a moment.


**Are Objects Equal in JavaScript**
Equality is a common task in most programming languages, but in JavaScript, it can be a little bit tricky because JavaScript does this thing called type coercion where it will try to convert the items being compared into the same type. (e.g. string, number,). JavaScript has the double equality (==) operator that will allow type coercion. It also has the triple equality (===) symbol that will prevent type coercion when comparing.

Hopefully, this is all review. But let's talk about just object equality, which includes objects, arrays, and functions. Try giving this quiz a shot:

QUIZ QUESTION
Will the following equality test result in true or false?
```js
{ name: 'Richard' } === { name: 'Richard' }
```
Result: false

> Even though two objects look exactly the same it doesn't mean that they are identical. i.e The same information does not indicate equality. If there is a reference to one object then the orginan and the reference can be identical. If myBoyfriend is richard then then my boyfriend object is similar to richard object.

> Two similar objects are not identical

QUIZ QUESTION
Given this code:
```js
var a = {
    myFunction: function quiz() { console.log('hi'); }
};
var b = {
    myFunction: function quiz() { console.log('hi'); }
};
```

Does the following code evaluate to true or false?
```js
a.myFunction === b.myFunction
```
**Result** false

> This is the same thing as { name: 'Richard' } === { name: 'Richard' }; both of the myFunction functions are different functions. They look the same, but they are distinct entities.

QUIZ QUESTION
Given this code:
```js
function quiz() { ... }

var a = {
    myFunction: quiz
};
var b = {
    myFunction: quiz
}
```
Does the following code evaluate to true or false?
```js
a.myFunction === b.myFunction
```
> Both of the myFunction functions are referring to the same, exact quiz function.


Ok, so why do we care about any of this object/function equality? The reason is that the .removeEventListener() method requires you to pass the same exact listener function to it as the one you passed to .addEventListener().


##### So an event listener needs three things:
- an event target - this is called the target
- the type of event to listen for - this is called the type
- the function to remove - this is called the listener

Remember, the listener function must be the exact same function as the one used in the .addEventListener() call...not just an identical looking function. Let's look at a couple of examples.

This code will successfully add and then remove an event listener:
```js
function myEventListeningFunction() {
    console.log('howdy');
}

// adds a listener for clicks, to run the `myEventListeningFunction` function
document.addEventListener('click', myEventListeningFunction);

// immediately removes the click listener that should run the `myEventListeningFunction` function
document.removeEventListener('click', myEventListeningFunction);
```
Now, why does this work? It works because both .addEventListener() and .removeEventListener:

- have the same target
- have the same type
- and pass the exact same listener 


```
Now let's look at an example that would not work (it does not remove the event listener): 
XXXX CODE with function created inside addEventListener and removeEventListener XXXX 
The code will not successfully remove the event listener. Again, why does this not work?

both .addEventListener() and .removeEventListener have the same target
both .addEventListener() and .removeEventListener have the same type
.addEventListener() and .removeEventListener have their own distinct listener functions...they do not refer to the exact same function (this is the reason the event listener removal fails!)
Two functions can look the same, but live in two different places in memory. Looks can be deceiving!
Two functions can look the same, but live in two different places in memory. Looks can be deceiving!
```

They may look the same and do the same thing, but that doesn't make them the same. Imagine a scenario where you see two houses that look exactly the same. While the houses might look the same, their addresses are different! 

### Phases of an Event 
Event Phases
There are three different phases during the lifecycle of an event. They are:

- the **capturing** phase
- the at **target** phase
- and the **bubbling** phase
And they actually follow the order above; first, it's capturing, then at target, and then the bubbling phase.

Most event handlers run during the at target phase, such as when you attach a click event handler to the button. The event arrives at the button (its target), and there's only a handler for it right there, so the event handler gets run.

But sometimes you have a collection of items -- such as a list -- and want to have one handler cover every item (and still have the option of individual handlers for some items.) By default, if you click on a child item and a handler doesn't intercept the click, the event will "bubble" upward to the parent, and keep bubbling until something handles it or it hits the document.

Capturing, on the other hand, lets the parent intercept an event before it reaches a child.

> There's actually a third argument to the .addEventListener() method; the useCapture argument. 

> By default, when .addEventListener() is called with only two arguments, the method defaults to using the bubbling phase. 

However, in this code, .addEventListener() is called with three arguments with the third argument being true (meaning it should invoke the listener earlier, during the capturing phase!).
```js
document.addEventListener('click', function () {
   console.log('The document was clicked');
}, true);
``` 

##### The Event Object 
When an event occurs, the browser includes an event object. This is just a regular JavaScript object that includes a ton of information about the event itself. According to MDN, the .addEventListener()'s listener function receives:

a notification (an object that implements the Event interface) when an event of the specified type occurs

Up until this point, I've been writing all of the listener functions without any parameter to store this event object. Let's add a parameter so we can store this important information:
```js
document.addEventListener('click', function (event) {  // ← the `event` parameter is new!
   console.log('The document was clicked');
});
```

Instead of event, the parameter's name could just as easily be:
- evt
- e
- theEvent
- horse
The name event or evt does not provide any inherent meaning or special capabilities; there is nothing special to the name... it's just the name of the parameter. Feel free to give it any name that's informative/descriptive!


##### The Default Action
As we just looked at, the event object stores a lot of information, and we can use this data to do all sorts of things. However, one incredibly common reason that professionals use the event object for, is to prevent the default action from happening. That sounds like an odd thing to do, but let's explore this.

Think about an anchor link on a webpage. There are probably a couple dozen links on this page! What if you wanted to run some code and display some output when you click on one of these links. If you click on the link, it will automatically navigate you to the location listed in its href attribute: that's what it does by default.

What about a form element? When you submit a form, by default, it will send the data to the location in its action attribute. What if we wanted to validate the data before sending it, though?

Without the event object, we're stuck with the default actions. However, the event object has a .preventDefault() method on it that a handler can call to prevent the default action from occurring!

```js
const links = document.querySelectorAll('a');
const thirdLink = links[2];

thirdLink.addEventListener('click', function (event) {
    event.preventDefault();
    console.log("Look, ma! We didn't navigate to a new page!");
});
```

##### Avoid too many Events
We're creating a < div> element, attaching two hundred paragraph elements and attaching an event listener with a respondToTheClick function to each paragraph as we create it. There are a number of ways we could refactor this code. For example, as of right now, we're creating two hundred different respondToTheClick functions (that all actually do the exact same thing!). We could extract this function and just reference the function instead of creating two hundred different functions:
```js
const myCustomDiv = document.createElement('div');

function respondToTheClick() {
    console.log('A paragraph was clicked.');
}

for (let i = 1; i <= 200; i++) {
    const newElement = document.createElement('p');
    newElement.textContent = 'This is paragraph number ' + i;

    newElement.addEventListener('click', respondToTheClick);

    myCustomDiv.appendChild(newElement);
}

document.body.appendChild(myCustomDiv);
```

This is a great step in the right direction!
However, we still have two hundred event listeners. They're all pointing to the same listener function, but there are still two hundred different event listeners.
What if we moved all of the listeners to the < div> instead?

The code for this would look like:
```js
const myCustomDiv = document.createElement('div');

function respondToTheClick() {
    console.log('A paragraph was clicked.');
}

for (let i = 1; i <= 200; i++) {
    const newElement = document.createElement('p');
    newElement.textContent = 'This is paragraph number ' + i;

    myCustomDiv.appendChild(newElement);
}

myCustomDiv.addEventListener('click', respondToTheClick);

document.body.appendChild(myCustomDiv);
```

Now there is only:
- a single event listener
- a single listener function
Now the browser doesn't have to store in memory two hundred different event listeners and two hundred different listener functions. That's great for performance`!

However, if you test the code above, you'll notice that we've lost access to the individual paragraphs. There's no way for us to target a specific paragraph element. So how do we combine this efficient code with the access to the individual paragraph items that we did before?

We use a process called **event delegation.**

##### Event Delegation 
Remember the event object that we looked at in the previous section? That's our ticket to getting back the original functionality!

The event object has a .target property. This property references the target of the event. Remember the capturing, at target, and bubbling phases?...these are coming back into play here, too!

Let's say that you click on a paragraph element. Here's roughly the process that happens:
- a paragraph element is clicked
- the event goes through the capturing phase
- it reaches the target
- it switches to the bubbling phase and starts going up the DOM tree. when it hits the <div> element
- it runs the listener function inside the listener function, event.target is the element that was clicked.

So event.target gives us direct access to the paragraph element that was clicked. Because we have access to the element directly, we can access its .textContent, modify its styles, update the classes it has - we can do anything we want to it!

##### Checking the Node Type in Event Delegation
In the code snippet we used above, we added the event listener directly to the < div> element. The listener function logs a message saying that a paragraph element was clicked (and then the text of the target element). This works perfectly! However, there is nothing to ensure that it was actually a < p> tag that was clicked before running that message. In this snippet, the < p> tags were direct children of the < div> element, but what happens if we had the following HTML:
```js
<article id="content">
  <p>Brownie lollipop <span>carrot cake</span> gummies lemon drops sweet roll dessert tiramisu. Pudding muffin <span>cotton candy</span> croissant fruitcake tootsie roll. Jelly jujubes brownie. Marshmallow jujubes topping sugar plum jelly jujubes chocolate.</p>

  <p>Tart bonbon soufflé gummi bears. Donut marshmallow <span>gingerbread cupcake</span> macaroon jujubes muffin. Soufflé candy caramels tootsie roll powder sweet roll brownie <span>apple pie</span> gummies. Fruitcake danish chocolate tootsie roll macaroon.</p>
</article>
```
In this filler text, notice that there are some < span> tags. If we want to listen to the < article> for a click on a < span>, you might think that this would work:
```js
document.querySelector('#content').addEventListener('click', function (evt) {
    console.log('A span was clicked with text ' + evt.target.textContent);
});
```
This will work, but there's a major flaw. The listener function will still fire when either one of the paragraph elements is clicked, too! In other words, this listener function is not verifying that the target of the event is actually a < span> element. Let's add in this check:
```js
document.querySelector('#content').addEventListener('click', function (evt) {
    if (evt.target.nodeName === 'SPAN') {  // ← verifies target is desired element
        console.log('A span was clicked with text ' + evt.target.textContent);
    }
});
```

##### The nodeName's Capitalization ⚠️
The .nodeName property will return an uppercase string, not a lowercase one. So when you perform your check make sure to either:

check for capital letters
convert the .nodeName to lowercase
```js
// check using capital letters
if (evt.target.nodeName === 'SPAN') {
    console.log('A span was clicked with text ' + evt.target.textContent);
}

> // convert nodeName to lowercase
if (evt.target.nodeName.toLowerCase() === 'span') {
    console.log('A span was clicked with text ' + evt.target.textContent);
}
```

##### Know When the DOM is Ready 
The DOM Is Built Incrementally
Do you remember the video we watched of Illya from Google explaining how the DOM is parsed? A key thing to point out is that when the HTML is received and converted into tokens and built into the document object model, is that this is a sequential process. When the parser gets to a `<script>` tag, it must wait to download the script file and execute that JavaScript code. This is the important part and the key to why the placement of the JavaScript file matters! 

Let's look at some code to show (more or less) what's happening. Take a look at this initial part of an HTML file:
```
<!DOCTYPE html>
<html lang="en">
<head>
  <link rel="stylesheet" href="/css/styles.css" />
  <script>
    document.querySelector('footer').style.backgroundColor = 'purple';
  </script>
 ```

The problem with moving JavaScript into the head tag  is that the DOM is not ready to be manipulated. 
```js
null.style.backgroundColor = 'purple';
```
null doesn't have a .style property, so thus our error is born.

> Now, we've already used one solution to this issue. Remember that we moved the JavaScript file down to the bottom of the page. Think about why this would make things work. Well, if the DOM is built sequentially, _if_ the JavaScript code is moved to the very bottom of the page, then by the time the JavaScript code is run, all DOM elements will already exist!



##### The Content Is Loaded Event
When the document object model has been fully loaded, the browser will fire an event. This event is called the DOMContentLoaded event, and we can listen for it the same way we listen to any other events:
```js
document.addEventListener('DOMContentLoaded', function () {
    console.log('the DOM is ready to be interacted with!');
});
``` 
However, just because you can use the DOMContentLoaded event to write JavaScript code in the `<head>` that doesn't mean you should do this. Doing it this way, we have to write more code (all of the event listening stuff) and more code is usually not always the best way to do something. Instead, it would be better to move the code to the bottom of the HTML file just before the closing `</body>` tag.

So when would you want to use this technique? Well, JavaScript code in the `<head>` will run before JavaScript code in the `<body>`, so if you do have JavaScript code that needs to run as soon as possible, then you could put that code in the `<head>` and wrap it in a DOMContentLoaded event listener. This way it will run as early as possible, but not too early that the DOM isn't ready for. 


## PERFORMANCE 

### Add Page Content Efficiently 

#### using a loop to add content 
```js 
    for (let i = 1; i <= 200; i++) {
    const newElement = document.createElement('p');
    newElement.textContent = 'This is paragraph number ' + i;

    document.body.appendChild(newElement);
}
``` 

This code:

creates a paragraph element
adds some text to the paragraph
adds the paragraph to the page
...and it does this two hundred times.

Since we want two hundred things done, the best way to do this is with a for loop, so that code is inescapable. However, the code inside the for loop is not all that efficient, and there are quite a few things we could do to improve this code. We could:

create some parent container element outside of the loop we could append all new paragraph elements to this parent container we append this parent container to the < body> element instead of appending each time through the loop
Let's see all of these changes:
```js
const myCustomDiv = document.createElement('div');
for (let i = 1; i <= 200; i++) {
  const newElement = document.createElement('p');
  newElement.innerText = 'This is paragraph number ' + i;
  myCustomDiv.appendChild(newElement);
}
document.body.appendChild(myCustomDiv);
```

We can test the time it takes to actually run this code!

#### Testing Code Performance
The standard way to measure how long it takes code to run is by using performance.now(). performance.now() returns a timestamp that is measured in milliseconds, so it's extremely accurate. How accurate? Here's what the its documentation page says:

accurate to five thousandths of a millisecond (5 microseconds)

That's incredibly precise!

If you've ever used a timing procedure in another programming language, then you might've heard of Epoch time (also called Unix time or POSIX time). These tools tell you the time that has passed since 1/1/1970 (the first of January). The browser's performance.now() method is slightly different in that it starts measuring from the time the page loaded. Detailed information can be found on its documentation page: performance.now() on MDN

These are the steps to use performance.now() to measure the speed of your code:

- use performance.now() to get the initial start time for the code
- run the code you want to test
- execute performance.now() to get another time measurement
- subtract the initial time from the final time

Adding two hundred paragraphs to the page is actually going to be relatively quick, so let's slow things down by using a set of nested for loops that just count from one to a hundred...one hundred times!
```js 
for (let i = 1; i <= 100; i++) { 
  for (let j = 1; j <= 100; j++) {
    console.log('i and j are ', i, j);
  }
}
```
Next, we'll add in the performance.now() code to measure how long these loops take:
```js
const startingTime = performance.now();

for (let i = 1; i <= 100; i++) { 
  for (let j = 1; j <= 100; j++) {
    console.log('i and j are ', i, j);
  }
}

const endingTime = performance.now();
console.log('This code took ' + (endingTime - startingTime) + ' milliseconds.');
```


#### Using a Document Fragment
So far, we've made a number of improvements to the code. However, there is still one thing that seems not so great; we have to create a extraneous < div> element just to hold all the < p> tags so we can add them all at once and then we append this < div> to the < body> element. So in the end, we have an extra < div> that isn't really needed. It was just around because we wanted to add each new < p> to it instead of to the < body>.

Why are we doing this? The browser is constantly working to make the screen match the DOM. When we add a new element, the browser has to run through a reflow calculation (to determine the new screen layout) and then repaint the screen. This takes time.

If we had added each new paragraph to the body element, then the code would've been a lot slower, because this would cause the browser to go through the reflow and repaint process for each paragraph. We really only want the browser to do this once, so we need to attach each new paragraph to something, but we don't want to have an extra, unneeded element to get added to the DOM.

This is exactly why we have the DocumentFragment! According to the documentation, a DocumentFragment:

represents a minimal document object that has no parent. It is used as a lightweight version of Document that stores a segment of a document structure comprised of nodes just like a standard document.

So it's like creating another lightweight DOM tree. But the beneficial part of this is what it says next:

The key difference is that because the document fragment isn't part of the active document tree structure, changes made to the fragment don't affect the document, cause reflow, or incur any performance impact that can occur when changes are made.

In other words, changes made to a DocumentFragment happen off-screen; there's no reflow and repaint cost while you build this. So this is exactly what we need! 

We can use the .createDocumentFragment() method to create an empty DocumentFragment object. This code should be very familiar to you, because it looks so very similar to document.createElement().

`const myDocFrag = document.createDocumentFragment();`

Let's rewrite our code to use a DocumentFragment instead of the < div>.

```
const fragment = document.createDocumentFragment();  // ← uses a DocumentFragment instead of a <div>

for (let i = 0; i < 200; i++) {
    const newElement = document.createElement('p');
    newElement.innerText = 'This is paragraph number ' + i;
    fragment.appendChild(newElement);
}

document.body.appendChild(fragment); // reflow and repaint here -- once!
```

## Reflow & Repaint
We mentioned Reflow and Repaint in the last section, now it's time to take a closer look.

Reflow is the process of the browser laying out the page. It happens when you first display the DOM (generally after the DOM and CSS have been loaded), and happens again every time something could change the layout. This is a fairly expensive (slow) process.

Repaint happens after reflow as the browser draws the new layout to the screen. This is fairly quick, but you still want to limit how often it happens.

For example, if you add a CSS class to an element, the browser often recalculates the layout of the entire page—that's one reflow and one repaint!

Why did adding a little CSS change cause a reflow? What if adding a class changed the position of the element or caused it to float? The browser won't know for certain (and a complete calculation of the impact of a change could take longer than doing the reflow!)

Let's take a realistic example. Say you're writing the next great blogging platform, and you want to have a "remove spam" button for the administrator. Your HTML looks like this:
```html
<div id="comments">
  <div class="comment"> <!-- some content --> </div>
  <div class="comment"> <!-- some content --> </div>
  <div class="comment"> <!-- some content --> </div>
</div>
```
When we run the spam filter, we discover comments one and two have to be removed.

If we simply call .removeChild() for each of the two comments that need to be removed, that's one reflow and one repaint for each change (so a total of 2 reflows and 2 repaints). We could rebuild the whole thing in a DocumentFragment and replace #comments -- that's the time to rebuild (possibly involving reading files or data), plus at least one reflow and one repaint.

Or we could hide #comments, delete the spam, and show it again -- that's surprisingly fast, to the cost of one reflow and two repaints (and little else). It's fast because hiding doesn't change the layout, it just erases that section of the screen (1 repaint). When you make the changed section visible again, that's a reflow and a repaint.

```js
// hide #comments
document.getElementById("comments").style.display = "none";

// delete spam comments

// show #comments
document.getElementById("comments").style.display = "block";
```

#### Virtual DOM
By the way, this is why React and other "virtual DOM" libraries are so popular. You don't make changes to the DOM, but make changes to another structure (a "virtual DOM") and the library calculates the best way to update the screen to match. The catch is you then have to rework your code to use whatever library you're adopting, and sometimes you can do a better job updating the screen yourself (because you understand your own unique situation).

## THE CALL STACK 

### Single Threading 
Single Threading
You might've heard that JavaScript is single-threaded but what does that mean? According to Wikipedia, single-threading is:

the processing of one command at a time (source)

Ok, so JavaScript can "process" one command at a time. The opposite of single-threading, is multithreading. There are numerous pros and cons to both which we won't be getting into (feel free to check out the Wikipedia article on Threading for more info about the pros and cons). We're going to take a look at JavaScript's single-threaded model and how/why we should write our code to take advantage of it.

Let's look at some code:
```
function addParagraph() {
    const para = document.createElement('p');
    para.textContent = 'JavaScript is single threaded!';
    document.body.appendChild(para);
}

function appendNewMessage() {
    const para = document.createElement('p');
    para.textContent = "Isn't that cool?";
    document.body.appendChild(para);
}
```
addParagraph();
appendNewMessage();
Keeping JavaScript's single-threaded nature in mind (meaning it can only perform one task at a time), let's break down this code into the order it will run:

- the addParagraph() function is declared on line 1
- the appendNewMessage() function is declared on line 6
addParagraph() is called on line 13
    - execution moves into the function and executes all three lines in order
    - now that the function is finished, execution returns to where it was called
    
- the appendNewMessage() function is called on line 14
execution moves into the function and executes all three lines in order
    - now that the function is finished, execution returns to where it was called
- the program ends because all lines of code have been executed

Hopefully, the order that this code executed in wasn't surprising. There are a couple of things I particularly want you to pay attention to. First, is the run-to-completion nature of the code. When addParagraph() is invoked on line 13, all of the code in the function gets executed: it doesn't just execute some lines and leave other lines to be executed later. The entire block of code is run. A second thing I want to point out is that addParagraph() is invoked, runs, and finishes before appendNewMessage() is invoked (including a possible reflow and repaint); JavaScript doesn't execute multiple lines/functions at the same time (this is single-threading...processing one command at a time!).

I have a question for you - once addParagraph() has been invoked and it runs the lines of code inside the addParagraph() function, how does it know to go back to appendNewMessage()? How does it keep track of that?

What if we changed this code slightly to create nested functions:
```js
function addParagraph() {
    const para = document.createElement('p');
    para.textContent = 'JavaScript is single threaded!';

    appendNewMessage();
    document.body.appendChild(para);
}

function appendNewMessage() {
    const para = document.createElement('p');

    para.textContent = "Isn't that cool?";
    document.body.appendChild(para);
}

addParagraph();
```

Notice that the call to appendNewMessage() is located inside the addParagraph() function. First, addParagraph() is invoked. Then appendNewMessage() is invoked on line 5. Once appendNewMessage() has finished running, execution returns and finishes running the last line of code in the addParagraph() function...but how does it know how to do that? How does the JavaScript engine know where it left off and how to get back to it?

### The Call Stack
The JavaScript engine keeps a call stack (basically a list) of the functions that are running. When a function is invoked, it is added to the list. When all of the code inside a function has been run, then the function is removed from the call stack. The cool part about a call stack is that a function doesn't have to complete before another function is added to the call stack.


## THE EVENT LOOP 
Code Synchronicity
In the previous section on the Call Stack, we used the terms:
- run-to-completion
- single-threaded
 
Another term for this is synchronous. By definition

> "synchronous" means: existing or occurring at the same time

All of the code we've been looking at runs in order, at the same time. Functions are added to the call stack, and then removed from the call stack when they've completed. However, there is some code that is not synchronous - meaning that the code is written just like any other code, but it is executed at some later point in time. Does this sound familiar at all? You've just been working with it:
```js
const links = document.querySelectorAll('input');
const thirdField = links[2];

thirdField.addEventListener('keypress', function handleKeyPresses(event) {
    console.log('a key was pressed');
});
```
...event listeners! Most of this code is synchronous like you're used to. But the event listener's function handleKeyPresses is not invoked immediately, it's invoked at some later point in time.

Have you ever wondered about that? Where does the code go? What about the "call stack" that we learned about? Is it hidden in the call stack somewhere?

Let's look at this code snippet:
```js
console.log('howdy');
document.addEventListener('click', function numbers() {
    console.log('123');
});
console.log('ice cream is tasty');
```

The code will run in this order:

'howdy' will be logged to the console
'ice cream is tasty' will be logged to the console
The string '123' will only be logged if there's a click. If the page is never clicked, then this code might not ever run! But where is it? Where did the numbers function holding the console.log('123'); code go?

Running Code Later
But the same questions exist for this code as it does for the .addEventListener() code:

where does the function go to wait?
how does the function get run when it needs to?
This happens because of the JavaScript Event Loop!

### The JavaScript Event Loop
The simplest explanation of JavaScript's concurrency model uses two rules: If some JavaScript is running, let it run until it is finished ("run-to-completion"). If no JavaScript is running, run any pending event handlers.

Since most JavaScript is run in response to an event, this is known as an event loop: Pick up the next event, run its handler, and repeat.

There are three parts you have to think about around the event loop:
- the Call Stack
- Web APIs/the browser
- an Event Queue

Not all of the code that we write is 100% JavaScript code. Some of the code is interacting with the Web APIs (also known as "browser APIs"). There are many more examples, but both .addEventListener() and setTimeout() are Web APIs. 
What happens if someone clicks before this block of code is done? When there is a click event and there is code already running, the numbers function can't just be added directly to the Call Stack because of JavaScript's run-to-completion nature; we can't interrupt any code that might currently be happening. So the function is placed in the Queue. When all of the functions in the Call Stack have finished (also known as idle time), then the Queue is checked to see if anything is waiting. If something is in the Queue, then it's run, creating an entry on the call stack.

IMPORTANT: The key things to remember here are 1) current synchronous code runs to completion, and 2) events are processed when the browser isn't busy. Asynchronous code (such as loading an image) runs outside of this loop and sends an event when it is done.


## setTimeout
Similarly to .addEventListener() code being run at some later point, there is the setTimeout() function that will run code at a point later in time. The setTimeout() function takes:

- a function to run at some later time
- the number of milliseconds the code should wait before running the function
Let's check out an example:
```
setTimeout(function sayHi() {
    console.log('Howdy');
}, 1000);
```

If we ran this code, the string 'Howdy' would appear in the console in about 1,000 milliseconds or in just about 1 second.

Since setTimeout() is an API provided by the browser, the call to setTimeout() gives the sayHi() function over to the browser which it starts a timer. After the timer is finished, the sayHi() function moves to the Queue. If the Call Stack is empty, then the sayHi() function is moved to the Call Stack and executed.

setTimeout() with Delay of 0
An interesting aspect to setTimeout() is that we can pass it a delay of 0 milliseconds.
```js
setTimeout(function sayHi() {
    console.log('Howdy');
}, 0);  // ← 0 milliseconds!
```
You might think that since it has a delay of 0 milliseconds, that the sayHi function would run immediately. However, it still goes through the JavaScript Event Loop. So the function is handed off to the browser where the browser starts a timer for 0 milliseconds. Since the timer ends immediately, the sayHi function will move to the Queue, and then to the Call Stack once the Call Stack has finished executing any currently-running tasks.

So why is this helpful? Well, this technique can help us to convert potentially long-running code to one that's broken up to allow for the browser to handle user interactions!

#### Break Up Long-Running Code
Do you remember back to a previous section when we wrote JavaScript code to add two hundred paragraphs to the page? Now, instead of adding two hundred paragraphs to the page, what if we added twenty thousand? That's a lot of elements to create, append, and insert into the page!

Now keep in mind how reflow and repaint affect an app's performance. We want to write our JavaScript code to take into consideration reflow and repaint and to cause the fewest number of these.

However, we also want to make sure our app is responsive to user interaction. While JavaScript is running, the page is "busy" and the user won't be able to interact with the page (e.g. clicking a button, filling out a form). Remember that this is because JavaScript runs synchronously. So it will run to completion (creating, appending, and inserting all twenty thousand elements), and it does this before it is able to respond to any actions the user has taken. The function that creates all of these elements and adds them to the page will be in the Call Stack until it's completely finished.

One way to give the user a chance to interact with the page is to break up the adding of the content into chunks. Let's do this with setTimeout(): 
```
let count = 1

function generateParagraphs() {
    const fragment = document.createDocumentFragment();

    for (let i = 1; i <= 500; i++) {
        const newElement = document.createElement('p');
        newElement.textContent = 'This is paragraph number ' + count;
        count = count + 1;

        fragment.appendChild(newElement);
    }

    document.body.appendChild(fragment);

    if (count < 20000) {
        setTimeout(generateParagraphs, 0);
    }
}

generateParagraphs();
```
This code starts off by setting a count variable to 1. This will keep track of the number of paragraphs that have been added. The generateParagraphs() function will add 500 paragraphs to the page each time it's invoked. The interesting thing is that there's a setTimeout() call at the end of the generateParagraphs() function. If there are less than twenty thousand elements, then the setTimeout() will be used to call the generateParagraphs() function.

If you try running this code on a page, you can still interact with the page while the code is running. It doesn't lock up or freeze the page. And it doesn't lock up or freeze because of the setTimeout() calls.




## How to Traverse the DOM Using JavaScript
Every item in the DOM is known as a node. Only through the DOM can you manipulate your HTML document structure, content, and style.

DOM traversal (also called walking or navigating the DOM) is the act of selecting nodes in the DOM tree from other nodes. 



### Traversing the DOM Downwards
You can traverse the DOM downwards using one of two methods.
1. **element.querySelector** or **element.querySelectorAll**
2. children or childNodes (There are also two other special properties which are **lastChild** and **firstChild**.)

The **children** property selects all child elements that are directly under a given element. 
Unlike the children property, **childNodes** returns all direct child nodes (not just child elements e,g, text nodes, comment nodes and all the element nodes).


### Traversing the DOM Upwards
You can navigate up the DOM using the parentElement (or parentNode) and closest properties. 

#### Using the closest Property
The closest property selects the first parent element that matches a specified selector. It lets you select multiple levels up instead of one. For instance, if we already have the button with class "btn-1" selected, we can select the main element using the closest property as follows:

```js
const btn1 = document.querySelector('.btn-1');
const mainEl = btn1.closest('main');
console.log(mainEl); // displays main element
```


### Traversing the DOM Sideways
There are two methods available for walking the DOM sideways. You can use **nextElementSibling** or **previousElementSibling**. Use nextElementSibling to select the following sibling element and previousElementSibling to select the previous sibling.

```js
const orange = document.querySelector('.orange');
const apple = orange.previousElementSibling;
const avocado = orange.nextElementSibling
```


