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
```
"package": "MAJOR.MINOR.PATCH
``` 
The MAJOR version should increment when you make incompatible API changes. 

The MINOR version should increment when you add functionality in a backwards-compatible manner. 

The PATCH version should increment when you make backwards-compatible bug fixes. This means that PATCHes are bug fixes and MINORs add new features but neither of them break what worked before. 

Finally, MAJORs add changes that won’t work with earlier versions.


### Use the Tilde-Character to Always Use the Latest Patch Version of a Dependency 
To allow an npm dependency to update to the latest PATCH version, you can prefix the dependency’s version with the tilde (~) character. Here's an example of how to allow updates to any 1.3.x version.
```
"package": "~1.3.8"
```


### Use the Caret-Character to Use the Latest Minor Version of a Dependency 
Caret (^) allows npm to install future updates as well. The difference is that the caret will allow both MINOR updates and PATCHes.
If use the caret (^) as a version prefix instead, npm would be allowed to update to any 1.x.x version.
```
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










