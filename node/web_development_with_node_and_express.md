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








