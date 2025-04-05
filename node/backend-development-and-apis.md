# Backend Development and APIs

## NPM

1. Add your name to package.json
e.g. "name": "Korede Faleye"

2. Add description to package.json to give other developers an overview of what your project is all about
e.g. "Description": "I love freecodecamp"

3. Add Keywords, i.e. words that relate to your node project
e.g. "keywords": ["Backend", "Backend Development", "APIs", "freecodecamp"]

4. Add licence i.e. "license": "MIT"

5. Add a Version to Your package.json.
e.g. "version": "1.2.0"

Each time you make changes in your project, you should update the version too. In "version": "1.2.0"
1 - is major version (Breaking Changes)
.2 - is minor version (new features)
.0 - is patch version (minor adjustments)
the reset of the decimals are alpha and beta.

## Manage npm Dependencies By Understanding Semantic Versioning

This is how Semantic Versioning works according to the official website:

```json
"package": "MAJOR.MINOR.PATCH
```

The MAJOR version should increment when you make incompatible API changes.

The MINOR version should increment when you add functionality in a backwards-compatible manner.

The PATCH version should increment when you make backwards-compatible bug fixes. This means that PATCHes are bug fixes and MINORs add new features but neither of them break what worked before.

Finally, MAJORs add changes that won’t work with earlier versions.

### Use the Tilde-Character to Always Use the Latest Patch Version of a Dependency

To allow an npm dependency to update to the latest PATCH version, you can prefix the dependency’s version with the tilde (~) character. Here's an example of how to allow updates to any 1.3.x version.

```json
"package": "~1.3.8"
```

### Use the Caret-Character to Use the Latest Minor Version of a Dependency

Caret (`^`) allows npm to install future updates as well. The difference is that the caret will allow both MINOR updates and PATCHes.
If use the caret (`^`) as a version prefix instead, npm would be allowed to update to any 1.x.x version.

```json
"package": "^1.3.8"
```

## Node

### Serve Static Assets

You can place there the static assets needed by your application (stylesheets, scripts, images).

In Express, you can put in place this functionality using the middleware `express.static(path)`, where the path parameter is the absolute path of the folder containing the assets.

A middleware needs to be mounted using the method app.use(path, middlewareFunction). The first path argument is optional. If you don’t pass it, the middleware will be executed for all requests.

Mount the `express.static()` middleware to the path /public with app.use(). The absolute path to the assets folder is `__dirname + /public`

Now your app should be able to serve a CSS stylesheet. Note that the /public/style.css file is referenced in the /views/index.html in the project boilerplate. Your front-page should look a little better now!

### Use the .env File

The .env file is a hidden file that is used to pass environment variables to your application.
This file is secret, no one but you can access it, and it can be used to store data that you want to keep private or hidden. For example, you can store API keys from external services or your database URI. You can also use it to store configuration options. By setting configuration options, you can change the behavior of your application, without the need to rewrite some code.

The environment variables are accessible from the app as process.env.VAR_NAME. The process.env object is a global Node object, and variables are passed as strings. By convention, the variable names are all uppercase, with words separated by an underscore.

It is also important to note that there cannot be space around the equals sign when you are assigning values to your variables, e.g. VAR_NAME=value.

Let's add an environment variable as a configuration option.

Create a `.env` file in the root of your project directory, and store the variable `MESSAGE_STYLE=uppercase` in it.

Then, in the /json GET route handler you created in the last challenge access `process.env.MESSAGE_STYLE` and transform the response object's message to uppercase if the variable equals uppercase. The response object should either be {"message": "Hello json"} or {"message": "HELLO JSON"}, depending on the `MESSAGE_STYLE` value. Note that you must read the value of `process.env.MESSAGE_STYLE` inside the route handler, not outside of it, due to the way our tests run.

If you are working locally, you will need the dotenv package. It loads environment variables from your `.env` file into `process.env`. The dotenv package has already been installed, and is in your project's package.json file. At the top of your myApp.js file, add `require('dotenv').config()` to load the environment variables.

### Implement a Root-Level Request Logger Middleware

Earlier, you were introduced to the `express.static()` middleware function. Now it’s time to see what middleware is, in more detail. Middleware functions are functions that take 3 arguments: the request object, the response object, and the next function in the application’s request-response cycle. These functions execute some code that can have side effects on the app, and usually add information to the request or response objects. They can also end the cycle by sending a response when some condition is met. If they don’t send the response when they are done, they start the execution of the next function in the stack. This triggers calling the 3rd argument, `next()`.

Look at the following example:

```js
function(req, res, next) {
  console.log("I'm a middleware...");
  next();
}
```

### Chain Middleware to Create a Time Server

Middleware can be mounted at a specific route using app.METHOD(path, middlewareFunction). Middleware can also be chained within a route definition.

Look at the following example:

```js
app.get('/user', function(req, res, next) {
  req.user = getTheUserSync();  // Hypothetical synchronous operation
  next();
}, function(req, res) {
  res.send(req.user);
});
```

This approach is useful to split the server operations into smaller units. That leads to a better app structure, and the possibility to reuse code in different places. This approach can also be used to perform some validation on the data. At each point of the middleware stack you can block the execution of the current chain and pass control to functions specifically designed to handle errors. Or you can pass control to the next matching route, to handle special cases. We will see how in the advanced Express section.

### Get Route Parameter Input from the Client

For Example:

If route is "mywebsite.com/api/v1/:id"
use `req.params`

```js
app.get('mywebsite.com/api/v1/:id', (req, res) => {
  let {id} = req.params
})
```

### Get Query Parameter Input from the Client

Another common way to get input from the client is by encoding the data after the route path, using a query string. The query string is delimited by a question mark (?), and includes field=value couples. Each couple is separated by an ampersand (&). Express can parse the data from the query string, and populate the object req.query. Some characters, like the percent (%), cannot be in URLs and have to be encoded in a different format before you can send them. If you use the API from JavaScript, you can use specific methods to encode/decode these characters.

```json
route_path: '/library'
actual_request_URL: '/library?userId=546&bookId=6754'
req.query: {userId: '546', bookId: '6754'}
```

### URL Encoding

Since Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine, you can use JavaScript methods such as encodeURI() and encodeURIComponent() to encode a URL.

#### encodeURI Method

The encodeURI() method encodes a complete URL, including encodes special characters except ~!$&@#*()=:/,;?+ characters

```js
const url = 'http://example.com/!Learn Node$/ Example'

// Encode complete URL
const encodedUrl = encodeURI(url)

// Print encoded URL
console.log(encodedUrl)

// http://example.com/!Learn%20Node$/%20Example 
```

#### encodeURIComponent() Method

You should use the encodeURIComponent() method to encode special characters in URI components. This method is suitable for encoding URL components such as query string parameters and not the complete URL.

Here is an example:

```js
const baseUrl = 'http://example.com/search?q='
const query = 'SELECT * from users WHERE id = 1'

// Encode query string
const encodedQuery = encodeURIComponent(query)

// Build full URL
const url = baseUrl + encodedQuery

// Print full URL
console.log(url)

// http://example.com/search?q=SELECT%20*%20from%20users%20WHERE%20id%20%3D%201 
```

### querystring Module

You could also use the Node.js built-in querystring module to encode a URL. This module provides utility methods for parsing and formatting URL query strings:

```js
const querystring = require('querystring')

const baseUrl = 'http://example.com/search?'
const query = 'SELECT * from users WHERE id = 1'

// Encode query string
const encodedQuery = querystring.stringify({ q: query })

// Build full URL
const url = baseUrl + encodedQuery

// Print full URL
console.log(url)

// http://example.com/search?q=SELECT%20*%20from%20users%20WHERE%20id%20%3D%201 
```

### URL Decoding

URL decoding is the opposite of the encoding process. It converts the encoded URL strings and query parameters back to their regular formats.

JavaScript provides decodeURI() and decodeURIComponent() that can also be used in Node.js to perform URL decoding.

#### decodeURI Method

The decodeURI() method is used to decode a complete URL:

```js
const encodedUrl = 'http://example.com/!Learn%20Node$/%20Example'

// Decode URL
const url = decodeURI(encodedUrl)

// Print URL
console.log(url)

// http://example.com/!Learn Node$/ Example
```

#### decodeURIComponent() Method

The decodeURIComponent() function is used to decode URL components:

```js
const query = 'Dankeschön für Ihre €100'

// perofrm encode/decode
const encodedStr = encodeURIComponent(query)
const decodedStr = decodeURIComponent(encodedStr)

// print values
console.log(`Encoded Query: ${encodedStr}`)
console.log(`Decoded Query: ${decodedStr}`)

// Output
// Encoded Query: Dankesch%C3%B6n%20f%C3%BCr%20Ihre%20%E2%82%AC100
// Decoded Query: Dankeschön für Ihre €100
```

### Use body-parser to Parse POST Requests

To parse the data coming from POST requests, you must use the body-parser package. This package allows you to use a series of middleware, which can decode data in different formats.
`body-parser` should be installed.

Require it at the top of your code. store it in a variable named bodyParser. The middleware to handle URL encoded data is returned by bodyParser.urlencoded({extended: false}). Pass the function returned by the previous method call to app.use(). As usual, the middleware must be mounted before all the routes that depend on it.

Note: extended is a configuration option that tells body-parser which parsing needs to be used. When extended=false it uses the classic encoding querystring library. When extended=true it uses qs library for parsing.

When using extended=false, values can be only strings or arrays. The object returned when using querystring does not prototypically inherit from the default JavaScript Object, which means functions like hasOwnProperty, toString will not be available. The extended version allows more data flexibility, but it is outmatched by JSON.

### Get Data from POST Requests

If the body-parser is configured correctly, you should find the parameters in the object req.body. Have a look at the usual library example:

```js
route: POST '/library'
urlencoded_body: userId=546&bookId=6754
req.body: {userId: '546', bookId: '6754'}
```

Tip: There are several other http methods other than GET and POST. And by convention there is a correspondence between the http verb, and the operation you are going to execute on the server. The conventional mapping is:

POST (sometimes PUT) - Create a new resource using the information sent with the request,

GET - Read an existing resource without modifying it,

PUT or PATCH (sometimes POST) - Update a resource using the data sent,

DELETE - Delete a resource.

There are also a couple of other methods which are used to negotiate a connection with the server. Except from GET, all the other methods listed above can have a payload (i.e. the data into the request body). The body-parser middleware works with these methods as well.

## MongoDB & Mongoose

### Introduction to Mongoose for MongoDB

Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js. It manages relationships between data, provides schema validation, and is used to translate between objects in code and the representation of those objects in MongoDB.
MongoDB is a schema-less NoSQL document database. It means you can store JSON documents in it, and the structure of these documents can vary as it is not enforced like SQL databases. This is one of the advantages of using NoSQL as it speeds up application development and reduces the complexity of deployments.

### Terminologies

#### Collections

Collections in Mongo are equivalent to tables in relational databases. They can hold multiple JSON documents.

#### Documents

Documents are equivalent to records or rows of data in SQL. While a SQL row can reference data in other tables, Mongo documents usually combine that in a document.

#### Fields

Fields, also known as properties or attributes, are similar to columns in a SQL table. In the image above, FirstName, LastName, Email, and Phone are all fields.

#### Schema

While Mongo is schema-less, SQL defines a schema via the table definition. A Mongoose schema is a document data structure (or shape of the document) that is enforced via the application layer.

#### SchemaTypes

While Mongoose schemas define the overall structure or shape of a document, SchemaTypes define the expected data type for individual fields (String, Number, Boolean, and so on).

You can also pass in useful options like required to make a field non-optional, default to set a default value for the field, and many more.

#### Models

Models are higher-order constructors that take a schema and create an instance of a document equivalent to records in a relational database.

Example
Here's a small code snippet to illustrate some of the terminology above:

```js
const puppySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: Number
});

const Puppy = mongoose.model('Puppy', puppySchema);
```

#### Database Connection

Create a file ./src/database.js under the project root.
Next, we will add a simple class with a method that connects to the database.
Your connection string will vary based on your installation.

```js
let mongoose = require('mongoose');

const server = '127.0.0.1:27017'; // REPLACE WITH YOUR DB SERVER
const database = 'fcc-Mail'; // REPLACE WITH YOUR DB NAME

class Database {
  constructor() {
    this._connect();
  }
  _connect() {
    mongoose
      .connect(`mongodb://${server}/${database}`)
      .then(() => {
        console.log('Database connection successful');
      })
      .catch((err) => {
        console.error('Database connection error');
      });
  }
}

module.exports = new Database();
```

### Install and Set Up Mongoose

Set up a MongoDB Atlas database and import the required packages to connect to it.
`mongoose@^5.11.15` has been added to your project’s package.json file. First, require mongoose as mongoose in myApp.js. Next, create a `.env` file and add a `MONGO_URI` variable to it. Its value should be your MongoDB Atlas database URI. Be sure to surround the URI with single or double quotes, and remember that you can't use spaces around the = in environment variables. For example, `MONGO_URI='VALUE'`.

Note: If you are using Replit, you cannot create a .env file. Instead, use the built-in SECRETS tab to add the variable. Do not surround the values with quotes when using the SECRETS tab.

When you are done, connect to the database by calling the connect method within your myApp.js file by using the following syntax:

```js
mongoose.connect(<Your URI>, { useNewUrlParser: true, useUnifiedTopology: true });
```

### Create a Model

#### CRUD Part I - CREATE

First of all, we need a Schema. Each schema maps to a MongoDB collection. It defines the shape of the documents within that collection. Schemas are building blocks for Models. They can be nested to create complex models, but in this case, we'll keep things simple. A model allows you to create instances of your objects, called documents.

The done() function is a callback that tells us that we can proceed after completing an asynchronous operation such as inserting, searching, updating, or deleting. It's following the Node convention, and should be called as done(null, data) on success, or done(err) on error.

Warning - When interacting with remote services, errors may occur!

```js
/* Example */

const someFunc = function(done) {
  //... do something (risky) ...
  if (error) return done(error);
  done(null, result);
};
```

Create a person schema called personSchema with the following shape:

- A required name field of type String
- An age field of type Number
- A favoriteFoods field of type [String]

```js
require('dotenv').config();
const mongoose = require('mongoose')
const {Schema, model} = mongoose 

let personSchema = new Schema({
  name: {
    type: String, 
    required: true
  }, 
  age: Number, 
  favoriteFoods: [String]
}) 

let Person = model('Person', personSchema);

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

```

### Create and Save a Record of a Model
