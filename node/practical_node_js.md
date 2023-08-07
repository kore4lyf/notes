# Practical Node JS br Azat Mardan
Just to give you some idea, Practical Node.js is a one-stop place for getting started with Express.js 4, Hapi.js, DerbyJS, Mongoskin, Mongoose, Everyauth, Mocha, Jade, Socket.IO, TravisCI, Heroku, Amazon Web Services (AWS), and many others. Most of these items are vital for any serious project.

Practical Node.js takes you from an overview of JavaScript and Node.js basics, installing all the necessary modules to  writing and deploying web applications, and everything in between. We cover libraries including, but not limited to, 

Express.js 4 and Hapi.js frameworks, Mongoskin and the Mongoose object-relational mapping (ORM) library for the 
MongoDB database, Jade and Handlebars template engines, OAuth and Everyauth libraries for OAuth integrations, 
the Mocha testing framework and Expect test-driven development/behavior-driven development language, and the Socket.IO and DerbyJS libraries for WebSocket real-time communication.

In the deployment chapters (10 and 11), the book covers how to use Git and deploy to Heroku, as well as examples of how to deploy to AWS, daemonize apps, and use Nginx, Varnish Cache, Upstart, init.d, and the forever module. 
The hands-on approach of this book walks you through iterating on the Blog project in addition to many other 
smaller examples. You’ll build database scripts, representational state transfer (RESTful) application programming interfaces (APIs), tests, and full-stack apps all from scratch. You’ll also discover how to write your own Node.js modules and publish them on NPM.

**Practical Node.js will show you how to do the following:**
- Build web apps with Express.js 4, MongoDB, and the Jade template engine
- Use various features of Jade and Handlebars
- Manipulate data from the MongoDB console
- Use the Mongoskin and Mongoose ORM libraries for MongoDB
- Build REST API servers with Express.js 4 and Hapi.js
- Test Node.js web services with Mocha, Expect, and TravisCI
- Use token and session-based authentication
- Implement a third-party (Twitter) OAuth strategy with Everyauth
- Build WebSocket apps using Socket.IO and DerbyJS libraries
- Prepare code for production with Redis, Node.js domains, and the cluster library using tips and best practices
- Deploy apps to Heroku using Git
- Install necessary Node.js components on an AWS instance
- Configure Nginx, Upstart, Varnish, and other tools on an AWS instance
- Write your own Node.js module and publish it on NPM
You already know what Node.js is; now, learn what you can do with it and how far you can take it.





## Chapter 1: Setting up Node.js and Other !Essentials


### Launching Node.js Scripts 
To start a Node.js script from a file, simply run $ node filename—for example, 
```sh
$ node program.js. 
``` 

If all we need is a quick set of statements, there’s a -e option that allows us to run inline JavaScript/Node.js—for example, 
```sh
$ node -e "console.log(new Date());".
```



### Node.js Basics and Syntax
Node.js was built on top of the Google Chrome V8 engine and its ECMAScript, which means most of the Node.js syntax is similar to front-end JavaScript (another implementation of ECMAScript), including objects, functions, and methods. In this section, we look at some of the most important aspects; let’s call them Node.js/JavaScript fundamentals:
•	 Loose typing
•	 Buffer—Node.js super data type
•	 Object literal notation
•	 Functions
•	 Arrays
•	 Prototypal nature
•	 Conventions

#### Loose Typing
Automatic typecasting works well most of the time. It’s a great feature that saves a lot of time and mental energy! 
There are only a few types of primitives:
•	 String
•	 Number (both integer and real)
•	 Boolean
•	 Undefined
•	 Null
•	 RegExp
Everything else is an object.


Also, in JavaScript, there are String, Number, and Boolean objects that contain helpers for the primitives, as follows:
```js
'a' === new String('a') //false 
```
but 
```js
'a' === new String('a').toString() //true
```
or 
```js
'a' == new String('a') //true 
``` 

By the way, == performs automatic typecasting whereas === does not.

#### Buffer—Node.js Super Data Type
Buffer is a Node.js addition to four primitives (boolean, string, number, and RegExp) and all-encompassing objects (array and functions are also objects) in front-end JavaScript. Think of buffers as extremely efficient data stores. In fact, Node.js tries to use buffers any time it can, such as when reading from file systems and when receiving packets over the network.

#### Object Literal Notation
Object notation is super readable and compact:
```js
var obj = {
 color: "green",
 type: "suv",
 owner: {
 ...
 }
}
``` 

Remember, functions are objects:
```js
var obj = function () {
 this.color: "green",
 this.type: "suv",
 this.owner: {
 ...
 }
}
```

#### Functions
In Node.js (as well as in JavaScript), functions are first-class citizens, and we treat them as variables, because they are objects! Yes, functions can even have properties/attributes. 


#### Conventions
It’s important to follow the most common language conventions. Some of them are listed here:
•	 Semicolons
•	 camelCase
•	 Naming
•	 Commas
•	 Indentations
•	 Whitespace
These JavaScript/Node.js conventions (with semicolons being an exception) are stylistic and highly preferential. 
They don’t impact the execution; however, it’s strongly suggested that you follow one style consistently, especially if you are a developer working in teams and/or on open-source projects. Some open-source projects might not accept pull requests if they contain semicolons (e.g., NPM) or if they don’t use comma-first style (e.g., request).

##### Semicolons
The use of semicolons is optional, except for two cases:
1. In for loop construction: for (var i=0; i++; i<n)
2. When a new line starts with parentheses, such as when using an immediately invoked 
function expression (IIFE): ;(function(){...}())

##### camelCase
camelCase is the main naming pattern in JavaScript, except for class names, which are CapitalCamelCase. An example follows:
```js
var MainView = Backbone.View.extend({...})
var mainView = new MainView()
```

##### Naming
_ and $ are perfectly legitimate characters for literals (jQuery and Underscore libraries use them a lot). Private methods and attributes start with _ (and it does nothing by itself!).


##### Whitespace
Usually, there is a space before and after the =, +, {, and } symbols. There is no space on invocation (e.g., arr.push(1);), but there’s a space when we define an anonymous function: function () {}.

