# Web Development with Node and Express by Ethan Brown

## Chapter 1. Introducing Express 

### Introducing Express
The Express website describes Express as a “minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.” 


#### Server-Side and Client-Side Applications 
A server-side application is one where the pages in the application are rendered on the server (as HTML, CSS, images and other multimedia assets, and JavaScript) and sent to the client. 

A client-side application, by contrast, renders most of its own user interface from an initial application bundle that is sent only once. That is, once the browser receives the initial (generally very minimal) HTML, it uses JavaScript to modify the DOM dynamically and doesn’t need to rely on the server to display new pages (though raw data usually still comes from the server).

Server-side applications are often called server-side rendered (SSR), and client-side applications are usually called single-page applications (SPAs). Client-side applications are fully realized in frameworks such as React, Angular, and Vue. I’ve always felt that “single-page” was a bit of a misnomer because—from the user’s perspective—there can indeed be many pages. The only difference is whether the page is shipped from the
server or dynamically rendered in the client.


#### A Brief History of Express

The creator of Express, TJ Holowaychuk, describes Express as a web framework inspired by Sinatra, which is a web framework based on Ruby. It is no surprise that Express borrows from a framework built on Ruby:
Ruby spawned a wealth of great approaches to web development, aimed at making web development faster, more efficient, and more maintainable.

As much as Express was inspired by Sinatra, it was also deeply intertwined with Connect, a “plug-in” library for Node. Connect coined the term middleware to describe pluggable Node modules that can handle web requests to varying degrees. In 2014, in version 4.0, Express removed its dependency on Connect, but it still owes its concept of middleware to Connect.

Another major difference between Node and more traditional web servers is that Node is single threaded. Single threading vastly simplifies the business of writing web apps, and if you need the performance of a multithreaded app, you can simply spin up more instances of Node, and you will effectively have the performance benefits of multithreading. 

In terms of the way apps are written, Node apps have more in common with PHP or Ruby apps than .NET or Java apps. While the JavaScript engine that Node uses (Google’s V8) does compile JavaScript to native machine code (much like C or C++), it does so transparently, so from the user’s perspective, it behaves like a purely interpreted language. Not having a separate compile step reduces maintenance and deployment hassles: all you have to do is update a JavaScript file, and your changes will automatically be available.

Another compelling benefit of Node apps is that Node is incredibly platform independent. For example, you can run .NET apps on a Linux server

thanks to Mono, but it’s a painful endeavor thanks to spotty

documentation and system incompatibilities. Likewise, you can run PHP apps on a Windows server, but it is not generally as easy to set up as it is on a Linux machine. Node, on the other hand, is a snap to set up on all the major operating systems (Windows, macOS, and Linux) and enables easy collaboration. 

#### The Node Ecosystem
Node, of course, lies at the heart of the stack. It’s the software that enables JavaScript to run on the server, uncoupled from a browser, which in turn allows frameworks written in JavaScript (like Express) to be used.
The advent of Node development has revitalized a new approach to database storage: the so-called NoSQL databases. It’s not always helpful to define something as what it’s not, so we’ll add that these NoSQL databases might be more properly called “document databases” or “key/value pair databases.” They provide a conceptually simpler approach to data storage. There are many, but MongoDB is one of the front-runners, and it’s the NoSQL database we will be using in this book.


#### Licensing
When developing Node applications, you may find yourself having to pay more attention to licensing than you ever have before (I certainly have).
One of the beauties of the Node ecosystem is the vast array of packages available to you. However, each of those packages carries its own licensing, and worse, each package may depend on other packages, meaning that understanding the licensing of the various parts of the app you’ve written can be tricky.


However, there is some good news. One of the most popular licenses for Node packages is the MIT license, which is painlessly permissive, allowing you to do almost anything you want, including use the package in closed source software. However, you shouldn’t just assume every package you use is MIT licensed.

> **TIP**:There are several packages available in npm that will try to figure out the licenses of each dependency in your project. Search npm for nlf or license-report.

While MIT is the most common license you will encounter, you may also see the following licenses:
- GNU General Public License (GPL): 
The GPL is a popular open source license that has been cleverly crafted to keep software free. That means if you use GPL-licensed code in your project, your project must also be GPL licensed.
Naturally, this means your project can’t be closed source.

- Apache 2.0: 
This license, like MIT, allows you to use a different license for your project, including a closed source license. You must, however, include notice of components that use the Apache 2.0 license.

- Berkeley Software Distribution (BSD): 
Similar to Apache, this license allows you to use whatever license you wish for your project, as long as you include notice of the BSD-licensed components. 


Lastly, if you find yourself writing your own packages, you should be a good citizen and pick a license for your package, and document it correctly. There is nothing more frustrating to a developer than using someone’s package and having to dig around in the source to determine the licensing or, worse, find that it isn’t licensed at all.





## Chapter 2. Getting Started with Node 

### npm
npm is the ubiquitous package manager for Node packages (and is how we’ll get and install Express). npm is not an acronym (which is why it isn’t capitalized); rather, it is a recursive abbreviation for “npm is not an acronym.” Broadly speaking, a package manager’s two primary responsibilities are installing packages and managing dependencies. npm is a fast, capable, and painless package manager. 

> **NOTE**: There is a popular competing package manager called Yarn that uses the same package database that npm does.

npm is installed when you install Node, so if you followed the steps listed earlier, you’ve already got it. 
The primary command you’ll be using with npm (unsurprisingly) is install. For example, to install nodemon (a popular utility to automatically restart a Node program when you make changes to the source code), you would issue the following command (on the console):

`npm install -g nodemon`

The `-g` flag tells npm to install the package globally, meaning it’s available globally on the system. This distinction will become clearer when we cover the package.json files.


### A Simple Web Server with Node 
Node offers a different paradigm than that of a traditional web server: the app that you write is the web server. Node simply provides the framework for you to build a web server.
“But I don’t want to write a web server,” you might be saying! It’s a natural response: you want to be writing an app, not a web server.
However, Node makes the business of writing this web server a simple affair (just a few lines, even), and the control you gain over your application in return is more than worth it.
So let’s get to it. You’ve installed Node, you’ve made friends with the terminal, and now you’re ready to go.

#### Hello World 
In your favorite editor, create a file called helloworld.js (ch02/00-helloworld.js in the companion repo):

```js
const http = require('http')
const port = process.env.PORT || 3000
const server = http.createServer((req, res) => {
res.writeHead(200, { 'Content-Type': 'text/plain' })
res.end('Hello world!')
})
server.listen(port, () => console.log(`server started on port ${port}; ` +
'press Ctrl-C to terminate....'))
```

This particular one doesn’t serve HTML; rather, it just displays the message “Hello world!” in plain text to your browser. If you want, you can experiment with sending HTML instead: just change text/plain to text/html and change 'Hello world!' to a string containing valid HTML. I didn’t demonstrate that, because I try to avoid writing HTML inside JavaScript for reasons that will be discussed in more detail in Chapter 7.


### Event-Driven Programming
The core philosophy behind Node is that of event-driven programming. What that means for you, the programmer, is that you have to understand what events are available to you and how to respond to them. 
In the previous code example, the event is implicit: the event that’s being handled is an HTTP request. The `http.createServer` method takes a function as an argument; that function will be invoked every time an HTTP request is made. Our simple program just sets the content type to plain text and sends the string “Hello world!"

Once you start thinking in terms of event-driven programming, you start seeing events everywhere. One such event is when a user navigates from one page or area of your application to another. How your application responds to that navigation event is referred to as **routing**.


### Routing 
Routing refers to the mechanism for serving the client the content it has asked for. For web-based client/server applications, the client specifies the desired content in the URL; specifically, the path and querystring

```js 
const http = require('http')

const port = process.env.PORT || 3000

const server = http.createServer((req,res) => {
  // normalize url by removing querystring, optional
  // trailing slash, and making it lowercase
  const path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase()
  switch(path) {
    case '':
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.end('Homepage')
    break 
    
    case '/about':
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.end('About')
    break 
    
    default:
    res.writeHead(404, { 'Content-Type': 'text/plain' })
    res.end('Not Found')
    } 
})
server.listen(port, () => console.log(`server started on port ${port}; ` +
'press Ctrl-C to terminate....'))
```

If you run this, you’ll find you can now browse to the home page(http://localhost:3000) and the About page (http://localhost:3000/about). Any querystrings will be ignored (so http://localhost:3000/?foo=bar will serve the home page), and any other URL (http://localhost:3000/foo) will serve the Not Found page.


### Serving Static Resources
Now that we’ve got some simple routing working, let’s serve some real HTML and a logo image. These are called static resources because they generally don’t change (as opposed to, for example, a stock ticker: every
time you reload the page, the stock prices may change).


> Serving static resources with Node is suitable for development and small projects, but for larger projects, you will probably want to use a proxy server such as NGINX or a CDN to serve static resources.


If you’ve worked with Apache or IIS, you’re probably used to just creating an HTML file, navigating to it, and having it delivered to the browser automatically. Node doesn’t work like that: we’re going to have
to do the work of opening the file, reading it, and then sending its contents along to the browser. So let’s create a directory in our project called public
(why we don’t call it static will become evident in the next chapter). In that directory, we’ll create home.html, about.html, 404.html, a subdirectory called img, and an image called img/logo.png. I’ll leave that
up to you; if you’re reading this book, you probably know how to write an HTML file and find an image. In your HTML files, reference the logo thusly: `<img src="/img/logo.png" alt="logo">`.
Now modify helloworld.js (ch02/02-helloworld.js in the companion repo):
```js
const http = require('http')
const fs = require('fs')
const port = process.env.PORT || 3000
function serveStaticFile(res, path, contentType, responseCode = 200) {
  fs.readFile(__dirname + path, (err, data) => {
    if(err) {
      res.writeHead(500, { 'Content-Type': 'text/plain' })
      return res.end('500 - Internal Error')
    }
  
    res.writeHead(responseCode, { 'Content-Type': contentType })
    res.end(data)
  })
}
const server = http.createServer((req,res) => {
  // normalize url by removing querystring, optional trailing slash, and
  // making lowercase
  const path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase()
  switch(path) {
    case '':
      serveStaticFile(res, '/public/home.html', 'text/html')
      break 
    case '/about':
      serveStaticFile(res, '/public/about.html', 'text/html')
      break
    case '/img/logo.png':
      serveStaticFile(res, '/public/img/logo.png', 'image/png')
      break
    default:
      serveStaticFile(res, '/public/404.html', 'text/html', 404)
  }
})
server.listen(port, () => console.log(`server started on port ${port}; ` +
'press Ctrl-C to terminate....'))
```





## Chapter 3. Saving Time with Express




