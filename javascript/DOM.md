
# DOM

## JavaScript HTML DOM Collections

### The HTMLCollection Object

The getElementsByTagName() method returns an HTMLCollection object.

An HTMLCollection object is an array-like list (collection) of HTML elements.

The following code selects all `<p>` elements in a document:

Example:

```js
var x = document.getElementsByTagName("p");
```

The elements in the collection can be accessed by an index number.

To access the second `<p>` element you can write:

```js
y = x[1];
```

### HTML HTMLCollection Length

The length property defines the number of elements in an HTMLCollection:

Example:

```js
var myCollection = document.getElementsByTagName("p");
document.getElementById("demo").innerHTML = myCollection.length;
```

Change the background color of all `<p>` elements:

```js
var myCollection = document.getElementsByTagName("p");
var i;
for (i = 0; i < myCollection.length; i++) {
  myCollection[i].style.backgroundColor = "red";
}
```

### An HTMLCollection is NOT an array!

> An HTMLCollection may look like an array, but it is not.

You can loop through the list and refer to the elements with a number (just like an array).

However, you cannot use array methods like valueOf(), pop(), push(), or join() on an HTMLCollection.

### The HTML DOM NodeList Object

A NodeList object is a list (collection) of nodes extracted from a document.

A NodeList object is almost the same as an HTMLCollection object.

Some (older) browsers return a NodeList object instead of an HTMLCollection for methods like getElementsByClassName().

All browsers return a NodeList object for the property childNodes.

Most browsers return a NodeList object for the method querySelectorAll().

The following code selects all `<p>` nodes in a document:

Example:

```js
var myNodeList = document.querySelectorAll("p");
```

The elements in the NodeList can be accessed by an index number.
To access the second `<p>` node you can write:

```js
y = myNodeList[1];
```

### A node list is not an array

A node list may look like an array, but it is not.

You can loop through the node list and refer to its nodes like an array.

However, you cannot use Array Methods, like valueOf(), push(), pop(), or join() on a node list.

## The Difference Between an HTMLCollection and a NodeList

- An HTMLCollection (previous chapter) is a collection of HTML elements.

- A NodeList is a collection of document nodes.

- A NodeList and an HTML collection is very much the same thing.

- Both an HTMLCollection object and a NodeList object is an array-like list (collection) of objects.

- Both have a length property defining the number of items in the list (collection).

- Both provide an index (0, 1, 2, 3, 4, ...) to access each item like an array.

- HTMLCollection items can be accessed by their name, id, or index number.

- NodeList items can only be accessed by their index number.

- Only the NodeList object can contain attribute nodes and text nodes.

## NodeList and HTMLCollection

> JavaScript NodeList is an interface that defines a read-only list of Node objects.

When you use methods like **getElementsByName** or **querySelectorAll**, to access elements in JavaScript, what is returned is a **NodeList**.

A NodeList is a collection of HTML DOM nodes representing the HTML elements that met the criteria. At first glance, a NodeList looks like an array, but it is not.

Using the Nodelist.forEach method and for loop:

```js
const options = document.querySelectorAll('li');

options.forEach(option => {
  option.addEventListener('click', () =>{
    console.log(option.textContent);
    if(option.textContent === "Sorted"){
      option.style.color = "green";
    }else{
      option.style.color = "red";
      for(let i = 0; i <= options.length; i++){
        if(options[i].textContent === "Sorted"){
           options[i].style.color = "green";
        }
      }
    }
  })
})
```

Another approach would be to convert the NodeList into an array using`array.from`. If you want to select an element at a particular position, then you can use the `NodeList.item` method.

The item(index) method will let you obtain a node at a specific position in the list.

This is its syntax:

```js
nodeItem = nodeList.item(index)
```

> However, the method does not throw exceptions, provided you specify arguments.

If the index is out of range, this method will return the null value, and it will throw a TypeError if you do not provide an argument.

Alternate JS NodeList Syntax
Syntax:

```js
nodeItem = nodeList[index]
```

it is easier to think of a NodeList object as a read-only JS array. That’s why some developers may use the notation Node[] (a Node array) rather than NodeList. The best example here is the `Element.getElementsByTagName()` method that is listed as returning a Node[] instead of a NodeList object.

**NB**:

- `document.getElementsByClassName()` - returns a NodeList Object.
- `document.querySelectorAll()` - returns a NodeList Object.
- `document.getElementsByTagName()` - returns a NodeList Object.
- All browsers will return a NodeList object for the property `childNodes`.
- `querySelectorAll()` - returns a node list Object.

> A NodeList is not an Array; nevertheless, you can iterate over it with the JavaScript NodeList foreach() method. Similarly, you can convert it to a real array using the array.from(). Keep in mind, however, that older browsers do not have the NodeList.forEach() and array.from() methods, making it impossible to implement.

### NodeList Methods

1. `NodeList.item()`: evaluates an item in the list by its index. If the index is out of bounds, it returns a null. Alternatively, you can access the NodeList via nodeList[i], which returns undefined when [i] is out-of-bounds. This method is useful for non-JavaScript DOM implementations.
2. `NodeList.entries()`:  this method returns an iterator, allowing a code to go through all value/key pairs in the collection. Here, keys are numbers starting from zero, and the values are nodes.
3. `NodeList.forEach()`: JavaScript NodeList foreach() method executes a function provided once per NodeList element, and it presents the element as an argument to the function.
4. `NodeList.keys()`: the NodeList.keys() method evaluates to an iterator, letting a code pass through all the keys of key or value pairs within the collection. Again, here keys are numbers beginning from zero.
5. `NodeList.values()`: this method returns an iterator that allows a code to pass through all nodes/values of a key or value pairs in that collection.

#### Live and Static NodeLists

The two varieties of NodeLists are static and live, so let’s look at them more closely:

`Live NodeLists`: In js live NodeLists, changes in the DOM automatically update the collection. A typical example of live NodeList is the `node.childNodes`.

`Static NodeLists`: in this category of NodeLists, changes in the DOM do not affect the collection’s content. The method, `document.querySelectorAll()` returns a static NodeList. So, when choosing how to iterate over the items in a NodeList, keep this distinction in mind.

#### JavaScript NodeList Properties

There is only one property:

- `NodeList.length`: it returns the number of nodes in the NodeList. If you want to know the length of the NodeList, use the length property. Also, the length property is very important when looping through a NodeList.

### HTMLCollection vs. NodeList

Items in both NodeList and HTMLCollection refer to HTML elements, making them nearly the same. However, HTMLCollection is a body of HTML elements, while a NodeList is an assembly of element nodes.

NodeList and HTMLCollection have length properties to display the number of items within a collection, and you can use their index number to access each one of them. Nevertheless, you can also access HTMLCollection items by their name and ID, a feature not in JavaScript NodeList.

A JS collection can have both attribute and text nodes, a feature not found in HTMLCollection. But both NodeList and HTMLCollection are not arrays. Therefore, they will not work with array methods.

> NodeList is pretty similar to HTMLCollection; however, you can only access the JS NodeList items with their index number, while you can access the HTMLCollection item with a name, ID, or an index number

**The fundamental methods you can use to turn a NodeList into an array are array.from(), Spread Operator, and array.prototype.slice() Method.**

## JavaScript Window - The Browser Object Model

The Browser Object Model (BOM) allows JavaScript to "talk to" the browser.

### The Window Object

The window object is supported by all browsers. It represents the browser's window.

```js
window.document.getElementById("header");
```

is the same as:

```js
document.getElementById("header");
```

### Window Size

Two properties can be used to determine the size of the browser window.

Both properties return the sizes in pixels:

- window.innerHeight - the inner height of the browser window (in pixels)
- window.innerWidth - the inner width of the browser window (in pixels)

For Internet Explorer 8, 7, 6, 5:

- document.documentElement.clientHeight
- document.documentElement.clientWidth
or
- document.body.clientHeight
- document.body.clientWidth

Example:

```js
var w = window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;

var h = window.innerHeight
|| document.documentElement.clientHeight
|| document.body.clientHeight;
```

### Other Window Methods

Some other methods:

- **window.open()** - open a new window
- **window.close()** - close the current window
- **window.moveTo()** - move the current window
- **window.resizeTo()** - resize the current window

## JavaScript Window Screen

The window.screen object contains information about the user's screen.

Properties:

- **screen.width** - returns the width of the visitor's screen in pixels.
- **screen.height** - returns the height of the visitor's screen in pixels.
- **screen.availWidth** - returns the width of the visitor's screen, in pixels, minus interface features like the Windows Taskbar.
- **screen.availHeight** - returns the height of the visitor's screen, in pixels, minus interface features like the Windows Taskbar.
- **screen.colorDepth**
- **screen.pixelDepth** - returns the pixel depth of the screen.

Example:

Display the available height of the screen in pixels:

```js
document.getElementById("demo").innerHTML =
"Available Screen Height: " + screen.availHeight;
```

### Window Screen Color Depth

The screen.colorDepth property returns the number of bits used to display one color.

All modern computers use 24 bit or 32 bit hardware for color resolution:

24 bits =      16,777,216 different "True Colors"
32 bits = 4,294,967,296 different "Deep Colors"
Older computers used 16 bits: 65,536 different "High Colors" resolution.

Very old computers, and old cell phones used 8 bits: 256 different "VGA colors".

## JavaScript Window Location

The window.location object can be used to get the current page address (URL) and to redirect the browser to a new page.

### Window Location

The window.location object can be written without the window prefix.

Some examples:

- **window.location.href** - returns the href (URL) of the current page
- **window.location.hostname** - returns the domain name of the web host
- **window.location.pathname** - returns the path and filename of the current page
- **window.location.protocol** - returns the web protocol used (http: or https:)
- **window.location.port** property returns the number of the internet host port (of the current page).
- **window.location.assign()** - loads a new document

Example:

Load a new document:

```js
function newDoc() {
  window.location.assign("https://www.w3schools.com")
}
```

Display the web protocol:

```js
document.getElementById("demo").innerHTML =
"Page protocol is " + window.location.protocol;
```

## JavaScript Window History

The window.history object contains the browsers history.

### Window History

The window.history object can be written without the window prefix.

To protect the privacy of the users, there are limitations to how JavaScript can access this object.

Some methods:

- **history.back()** - same as clicking back in the browser
- **history.forward()** - same as clicking forward in the browser

### Window History Back

The `window.history.back()` method loads the previous URL in the history list.

This is the same as clicking the Back button in the browser.

## JavaScript Window Navigator

The window.navigator object contains information about the visitor's browser.

Window Navigator
The window.navigator object can be written without the window prefix.

Some examples:

- navigator.appName (Strange enough, "Netscape" is the application name for both IE11, Chrome, Firefox, and Safari.)
- navigator.appCodeName ("Mozilla" is the application code name for both Chrome, Firefox, IE, Safari, and Opera.)
- navigator.platform

### Browser Cookies

The cookieEnabled property returns true if cookies are enabled, otherwise false:

Example:

```html
<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML =
"cookiesEnabled is " + navigator.cookieEnabled;
</script>
```

### Browser Application Name

The appName property returns the application name of the browser:

Example:

```html
<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML =
"navigator.appName is " + navigator.appName;
</script>
```

> Strange enough, "Netscape" is the application name for both IE11, Chrome, Firefox, and Safari.

### Browser Application Code Name

The appCodeName property returns the application code name of the browser:

Example:

```html
<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML =
"navigator.appCodeName is " + navigator.appCodeName;
</script>
```

"Mozilla" is the application code name for both Chrome, Firefox, IE, Safari, and Opera.

### The Browser Engine

The product property returns the product name of the browser engine:

Example:

```html
<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML =
"navigator.product is " + navigator.product;
</script>
```

> Do not rely on this. Most browsers returns "Gecko" as product name !!

### The Browser Version

The appVersion property returns version information about the browser:

Example:

```html
<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML = navigator.appVersion;
</script>
```

5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36

### The Browser Agent

The userAgent property returns the user-agent header sent by the browser to the server:

Example:

```js
<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML = navigator.userAgent;
</script>
Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36

```

Warning !!!
The information from the navigator object can often be misleading, and should not be used to detect browser versions because:

Different browsers can use the same name
The navigator data can be changed by the browser owner
Some browsers misidentify themselves to bypass site tests
Browsers cannot report new operating systems, released later than the browser
The Browser Platform
The platform property returns the browser platform (operating system):

Example:

```js
<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML = navigator.platform;
</script>
```

Win32

### The Browser Language

The language property returns the browser's language:

Example:

```js
<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML = navigator.language;
</script>
```

en-US

### Is The Browser Online?

The onLine property returns true if the browser is online:

Example:

```js
<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML = navigator.onLine;
</script>
```

true

Is Java Enabled?
The javaEnabled() method returns true if Java is enabled:

Example:

```js
<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML = navigator.javaEnabled();
</script>
```

false

## JavaScript Popup Boxes

JavaScript has three kind of popup boxes: Alert box, Confirm box, and Prompt box.

### Alert Box

An alert box is often used if you want to make sure information comes through to the user.

When an alert box pops up, the user will have to click "OK" to proceed.

Syntax:

```js
window.alert("sometext");
```

The window.alert() method can be written without the window prefix.

Example:

```js
alert("I am an alert box!");
```

### Confirm Box

A confirm box is often used if you want the user to verify or accept something.

When a confirm box pops up, the user will have to click either "OK" or "Cancel" to proceed.

If the user clicks "OK", the box returns true. If the user clicks "Cancel", the box returns false.

Syntax:

```js
window.confirm("sometext");
```

The window.confirm() method can be written without the window prefix.

Example"

```js
if (confirm("Press a button!")) {
  txt = "You pressed OK!";
} else {
  txt = "You pressed Cancel!";
}
```

### Prompt Box

A prompt box is often used if you want the user to input a value before entering a page.

When a prompt box pops up, the user will have to click either "OK" or "Cancel" to proceed after entering an input value.

If the user clicks "OK" the box returns the input value. If the user clicks "Cancel" the box returns null.

Syntax:

```js
window.prompt("sometext","defaultText");
```

The window.prompt() method can be written without the window prefix.

Example:

```js
var person = prompt("Please enter your name", "Harry Potter");

if (person == null || person == "") {
  txt = "User cancelled the prompt.";
} else {
  txt = "Hello " + person + "! How are you today?";
}
```

### Line Breaks

To display line breaks inside a popup box, use a back-slash followed by the character n.

Example:

```js
alert("Hello\nHow are you?");
```

## Java script event

- Right click - `onContextMenu()`

### preventing an element from being draggable

HTML
Add draggable="false" to img tag

```html
<img draggable="false" src="..."/>
```

OR

CSS
add user-drag: none; to img

```css
img {
  user-drag: none;
}
```

## JavaScript Timing Events

### Timing Events

The window object allows execution of code at specified time intervals.

These time intervals are called timing events.

The two key methods to use with JavaScript are:

- setTimeout(function, milliseconds)
Executes a function, after waiting a specified number of milliseconds.

- setInterval(function, milliseconds)
Same as setTimeout(), but repeats the execution of the function continuously.

> The setTimeout() and setInterval() are both methods of the HTML DOM Window object.

### The setTimeout() Method

```js
window.setTimeout(function, milliseconds);
```

The `window.setTimeout()` method can be written without the window prefix.

The first parameter is a function to be executed.

The second parameter indicates the number of milliseconds before execution.

### How to Stop the Execution?

The clearTimeout() method stops the execution of the function specified in setTimeout().

```js
window.clearTimeout(timeoutVariable)
```

The `window.clearTimeout()` method can be written without the window prefix.

The `clearTimeout()` method uses the variable returned from setTimeout():

```js
myVar = setTimeout(function, milliseconds);
clearTimeout(myVar);
```

If the function has not already been executed, you can stop the execution by calling the `clearTimeout()` method:

### The setInterval() Method

The setInterval() method repeats a given function at every given time-interval.

```js
window.setInterval(function, milliseconds);
```

The `window.setInterval()` method can be written without the window prefix.

The first parameter is the function to be executed.

The second parameter indicates the length of the time-interval between each execution.

This example executes a function called "myTimer" once every second (like a digital watch).

Example

```js
// Display the current time:

var myVar = setInterval(myTimer, 1000);

function myTimer() {
  var d = new Date();
  document.getElementById("demo").innerHTML = d.toLocaleTimeString();
}
```

### How to Stop the Execution? - clear Interval

The `clearInterval()` method stops the executions of the function specified in the `setInterval()` method.

```js
window.clearInterval(timerVariable)
```

The `window.clearInterval()` method can be written without the window prefix.

The `clearInterval()` method uses the variable returned from `setInterval()`:

```js
myVar = setInterval(function, milliseconds);
clearInterval(myVar);
```

## JavaScript Cookies

Cookies let you store user information in web pages.
What are Cookies?
Cookies are data, stored in small text files, on your computer.

Cookies are saved in name-value pairs like:

```js
username = John Doe
```

When a browser requests a web page from a server, cookies belonging to the page are added to the request. This way the server gets the necessary data to "remember" information about users.

None of the examples below will work if your browser has local cookies support turned off.

### Create a Cookie with JavaScript

JavaScript can create, read, and delete cookies with the document.cookie property.

With JavaScript, a cookie can be created like this:

```js
document.cookie = "username=John Doe";
```

You can also add an expiry date (in UTC time). By default, the cookie is deleted when the browser is closed:

```js
document.cookie = "username=John Doe; expires=Thu, 18 Dec 2013 12:00:00 UTC";
```

With a path parameter, you can tell the browser what path the cookie belongs to. By default, the cookie belongs to the current page.

```js
document.cookie = "username=John Doe; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/";
```

### Read a Cookie with JavaScript

With JavaScript, cookies can be read like this:

```js
var x = document.cookie;
document.cookie will return all cookies in one string much like: cookie1=value; cookie2=value; cookie3=value;
```

Change a Cookie with JavaScript
With JavaScript, you can change a cookie the same way as you create it:

```js
document.cookie = "username=John Smith; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/";
```

The old cookie is overwritten.

Delete a Cookie with JavaScript
Deleting a cookie is very simple.

You don't have to specify a cookie value when you delete a cookie.

Just set the expires parameter to a passed date:

```js
document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
```

You should define the cookie path to ensure that you delete the right cookie.

Some browsers will not let you delete a cookie if you don't specify the path.

### A Function to Set a Cookie

First, we create a function that stores the name of the visitor in a cookie variable:

Example:

```js
function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
```

Example explained:

The parameters of the function above are the name of the cookie (cname), the value of the cookie (cvalue), and the number of days until the cookie should expire (exdays).

The function sets a cookie by adding together the cookiename, the cookie value, and the expires string.

A Function to Get a Cookie
Then, we create a function that returns the value of a specified cookie:

Example:

```js
function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
```

Function explained:

Take the cookiename as parameter (cname).

Create a variable (name) with the text to search for (cname + "=").

Decode the cookie string, to handle cookies with special characters, e.g. '$'

Split document.cookie on semicolons into an array called ca (ca = decodedCookie.split(';')).

Loop through the ca array (i = 0; i < ca.length; i++), and read out each value c = ca[i]).

If the cookie is found (c.indexOf(name) == 0), return the value of the cookie (c.substring(name.length, c.length).

If the cookie is not found, return "".

### A Function to Check a Cookie

Last, we create the function that checks if a cookie is set.

If the cookie is set it will display a greeting.

If the cookie is not set, it will display a prompt box, asking for the name of the user, and stores the username cookie for 365 days, by calling the setCookie function:

Example:

```js
function checkCookie() {
  var username = getCookie("username");
  if (username != "") {
   alert("Welcome again " + username);
  } else {
    username = prompt("Please enter your name:", "");
    if (username != "" && username != null) {
      setCookie("username", username, 365);
    }
  }
}
```

All Together Now

Example:

```js
function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie() {
  var user = getCookie("username");
  if (user != "") {
    alert("Welcome again " + user);
  } else {
    user = prompt("Please enter your name:", "");
    if (user != "" && user != null) {
      setCookie("username", user, 365);
    }
  }
}
```

The example above runs the checkCookie() function when the page loads.

## window.console

### Console Object

The Console object provides access to the browser's debugging console.

| Method | Description |
| :--- | :--- |
| assert() | Writes an error message to the console if the assertion is false |
| clear() | Clears the console |
| count() | Logs the number of times that this particular call to count() has been called |
| error() | Outputs an error message to the console |
| group() | Creates a new inline group in the console. This indents following console messages by an additional level, until console.groupEnd() is called |
| groupCollapsed() | Creates a new inline group in the console. However, the new group is created collapsed. The user will need to use the disclosure button to expand it |
| groupEnd() | Exits the current inline group in the console |
| info() | Outputs an informational message to the console |
| log() | Outputs a message to the console |
| table() | Displays tabular data as a table |
| time() | Starts a timer (can track how long an operation takes) |
| timeEnd() | Stops a timer that was previously started by console.time() |
| trace() | Outputs a stack trace to the console |
| warn() | Outputs a warning message to the console |

### console.assert() Method

The console.assert() method writes a message to the console, but only if an expression evaluates to false.

```js
console.assert(document.getElementById("demo"), "You have no element with ID 'demo'");
```

**Syntax**:

```js
console.assert(expression, message)
```

- expression - A Boolean expression
- message - String or Object

### console.clear() Method

The console.clear() method clears the console.
It will also write a message in a browser's console: "Console was cleared".

**Syntax**:

```js
console.clear();
```

### console.count() Method

Write to the console the number of time the console.count() is called inside the loop:

```js
for (i = 0; i < 10; i++) {
  console.count();
}
```

**Syntax**:

```js
console.count(label)
```

- label - String
Optional. If present, the method counts the number of times console.count() has been called with this label. If not present, the label "default" will be added.

### console.error() Method

Write an error to the console (has a light red background on the browser):

```js
console.error("You made a mistake");
```

### console.group() Method

Create a group of messages in the console:

```js
console.log("Hello world!");
console.group();
console.log("Hello again, this time inside a group!");
```

> Tip: Use the `console.groupEnd()` method to end the group.
> Tip: Use the `console.groupCollapsed()` method to hide the message group (collapsed by default).

**Syntax**:

```js
console.group(label)
```

- label - String - Optional. A label for the group

### console.info() Method

Write a message to the console:

```js
console.info("Hello world!");
```

**Syntax**:

```js
console.info(message)
```

### console.table() Method

Writes a table in the console. The first parameter is required, and must be either an object, or an array, containing data to fill the table.

```js
console.table(["Audi", "Volvo", "Ford"]);
```

**Syntax**:

```js
console.table(tabledata, tablecolumns)
```

- **tabledata**: - Object or Array - Required. The data to fill the table with.

- **tablecolumns** - Array Optional. - An array containing the names of the columns to be included in the table.

**Example**
Using an object as the first parameter:

```js
console.table({ firstname : "John", lastname : "Doe" });
```

**Example**:

Using an array of objects:

```js
var car1 = { name : "Audi", model : "A4" }
var car2 = { name : "Volvo", model : "XC90" }
var car3 = { name : "Ford", model : "Fusion" }

console.table([car1, car2, car3]);
```

**Example**:

Specifying that we only want to include the "model" column in the table:

```js
var car1 = { name : "Audi", model : "A4" }
var car2 = { name : "Volvo", model : "XC90" }
var car3 = { name : "Ford", model : "Fusion" }

console.table([car1, car2, car3], ["model"]);
```

### console.time() Method

The console.time() method starts a timer in the console view.

This method allows you to time certain operations in your code for testing purposes.

Use the console.timeEnd() method to end the timer and display the result in the console.view.

Use the label parameter to name the timer, then you are able to have many timers on the same page.

How long does it take to perform a for-loop 100.000 times:

```js
console.time();
for (i = 0; i < 100000; i++) {
  // some code
}
console.timeEnd();
```

- label - String - Optional. Use the label parameter to give the timer a name

Using the label parameter:

```js
console.time("test1");
for (i = 0; i < 100000; i++) {
  // some code
}
console.timeEnd("test1");
```

### console.trace() Method

Trace of how a function was called.
Show the trace of how the code ended up here:

```html
function myFunction() {
  myOtherFunction();
}

function myOtherFunction() {
  console.trace();
}
```

The console.trace() method displays a trace that show how the code ended up at a certain point.

**Syntax**:

```sh
console.trace(label)
```

### console.warn() Method

Write a warning to the console:

```sh
console.warn("This is a warning!");
```

**Syntax**:

```sh
console.warn(message)
```

