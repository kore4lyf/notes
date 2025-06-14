# Node Js and Express Js

## Introduction

What is Node Js?

- Environment to run JS outside Browser
- Built on chrome's V8 JS Engine
- Big Community
- Full-stack

### Global Variables

Global variables are variables that can be accessed anywhere in an application.

- __dirname - path to current directory
- __filename - filename
- require - function to use modules (commonJS) e.t.c
- module - info about current module (file)
- process - info about env where the program is being executed.

> You can console.log these global variables.

```js
console.log(__dirname)
```

> You can also use setInterval or setTimeout in node js.

```js
setInterval(() => {
  console.log('hello, world')
}, 1000)
```

## Modules

Node uses Common JS Library, and every file in node is a module (by default)

Module - A module is an Encapsulated code, that share part of its code with other programs.

You can use `module.exports = {var1, var2}` to export variables in a file, or you can use `module.exports = sayHi`, if there is only one variable to export.

### Export as you go method

```js
module.exports.items = ['items1', 'items2']
const person = {
  name: 'bob'
}
module.exports.singlePerson = person
```

If you want to include a file in your working file, just use, don't export any variable because you do, it's the variable that will be imported instead of the entire code. If you run a function in the order file, it run in your current file if you require the file.

```js
require('file path')
```

## Built-in Modules

- OS
- PATH
- FS
- HTTP

### OS

The os module provides operating system-related utility methods and properties. It can be accessed using:

```js
const os = require('os');
```  

#### `os.userInfo()`

Returns information (object) about the currently effective user.

```js
const os = require('os')
const user = os.userInfo() 
console.log(user)
```

result:
{
  uid: 10274,
  gid: 10274,
  username: 'u0_a274',
  homedir: '/data/data/com.termux/files/home',
  shell: '/data/data/com.termux/files/usr/bin/login'
}

#### Some other os methods

```js
const os = require('os')

console.log(`The system uptime is ${os.uptime()} seconds `) 

const currentOS = {
  name: os.type(), 
  release: os.release(), 
  totalmem: os.totalmem(),
  freemem: os.freemem()
}
console.log(currentOS)
```

result:
The system uptime is 31134.4 seconds

{
  name: 'Linux',
  release: '4.19.269-gad29e12f916e-ab9989690',
  totalmem: 7823982592,
  freemem: 1251684352
}

### Path

The path module provides utilities for working with file and directory paths. It can be accessed using:

```js
const os = require('os')
```

```js
const os = require('os')
const path = path.sep
```

result: /

```js
const os = require('os') 

const filepath = path.join('/meadowlark','meadowlark.js')

// base name
const base = path.basename(filepath)
console.log(base) // meadowlark.js


// return absolute path 
const absolute = path.resolve(__dirname,'meadowlark', 'meadowlark.js')

console.log(absolute) 
// /storage/emulated/0/Documents/codingProjects/nodejs/meadowlark/meadowlark.js
```

```js
console.log(path.basename("c:\\nodejs\\app.html")) // app.html
console.log(path.basename("c:\\nodejs\\app.js", "js")) // app
console.log(path.dirname("c:\\nodejs\\courses\\app.js", "js")) // c:\nodejs\courses
console.log(path.extname("c:\\nodejs\\courses\\app.js")) // .js
console.log(path.join("c:", "nodejs", "courses")) // c:\nodejs\courses
console.log(path.join("c:", "nodejs", "courses", "..")) // c:\nodejs
console.log(path.normalize("c:\\\courses\\\redux\\\\store\\\\features\\")) // c:\courses\redux\store\features
console.log(path.parse("c:\\nodejs\\courses\\app.js"))
/*
  {
    root: "c:\\",
    dir: "c:\\nodejs\\course",
    base: "app.js",
    ext: "js",
    name: "app"
  }
*/
```

### fs (file system)

#### Creating folders

```js
import * as fs from "fs/promises"

try {
  await fs.mkdir("c"\\nodejs")
  console.log("Foldoer Created ...")
} catch (error) {
  console.log(error)
}
```

```js
import * as fs from "fs/promises"

try {
  await fs.mkdir("c"\\nodejs\\courses")
  console.log("Foldoer Created ...")
} catch (error) {
  console.log(error)
}
```

If folder nodejs folder doesn't exists it will throw an error.
But by adding `{recursive: true}` it will create exisiting folders that do not exist.

```js
import * as fs from "fs/promises"

try {
  await fs.mkdir("c"\\nodejs\\courses", { recursive: true })
  console.log("Folder Created ...")
} catch (error) {
  console.log(error)
}
```

#### Reading the content of a folder

```js
import * as fs from "fs/promises"

try {
  const file = await fs.readdir("c"\\nodejs", { recursive: true })
  
  for (const file of files) {
  console.log(file)}
} catch (error) {
  console.log(error)
}
```

#### Remove Folder / Directory

```js
try {
  await fs.rmdir("c:\\nodejs\\courses")
} catch(error) {
  console.log(error)
}
```

Folder must be empty

#### Copying Files

```js
import * as fs from "fs/promises"

try {
  await fs.copyFile("README.md", "info.txt")
} catch (error) {
  console.log(error)
}
```

#### Synchronously Read and Access files

```js
const { readFileSync, writeFileSync } = require('fs')
console.log('start')
const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

writeFileSync(
  './content/result-sync.txt',
  `Here is the result : ${first}, ${second}`,
  { flag: 'a' }
)
console.log('done with this task')
console.log('starting the next one')
```

If you don't include the third parameter, the writeFileSync new text will override the existing content in the file.
but by providing `{flag: a}` you allow the new text to be appended to the existing one.

#### Asynchronously Read and Access files

```js
const { readFile, writeFile } = require('fs')

console.log('start')

readFile('./content/first.txt', 'utf8', (err, result) => {
  if (err) {
    console.log(err)
    return
  }
  console.log(result)
})


writeFile(
      './content/result-async.txt',
      `Here is the result : ${first}, ${second}`,
      (err, result) => {
        if (err) {
          console.log(err)
          return
        }
        console.log('done with this task')
      }
    )
```

It's best to use the async approach, because node will not be able to serve other users if it handling a resource intensive synchronous request.

Here writing two opened files into another file.

```js
const { readFile, writeFile } = require('fs')

console.log('start')
readFile('./content/first.txt', 'utf8', (err, result) => {
  if (err) {
    console.log(err)
    return
  }

  const first = result

  readFile('./content/second.txt', 'utf8', (err, result) => {
    if (err) {
      console.log(err)
      return
    }
    const second = result
    writeFile(
      './content/result-async.txt',
      `Here is the result : ${first}, ${second}`,
      (err, result) => {
        if (err) {
          console.log(err)
          return
        }
        console.log('done with this task')
      }
    )
  })
})
console.log('starting next task')
```

One way to avoid call back hell is to use promise, another is async await.

```js
const { readFile, writeFile } = require('fs')

const start = async () => {
  try {
    const first = await readFile('./content/first.txt', 'utf8')
    const second = await readFile('./content/second.txt', 'utf8')
    await writeFile(
      './content/result-mind-grenade.txt',
      `THIS IS AWESOME : ${first} ${second}`,
      { flag: 'a' }
    )
    console.log(first, second)
  } catch (error) {
    console.log(error)
  }
}

start()
```

### HTTP

```js
const http = require('http')

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Welcome to our home page')
  } else if (req.url === '/about') {
    res.end('Here is our short history')
  } else {
    res.end(`
    <h1>Oops!</h1>
    <p>We can't seem to find the page you are looking for</p>
    <a href="/">back home</a>
    `)
  }
})

server.listen(5000)
```

## NPM

NPM means Node Package manager.

- npm i `<packageName>` // Install local dependency 
- npm install -g `<packageName>` // Install dependency globally 
- package.json // A manifest file (stores important info about project/package)

It should be created with any if the following:

```sh
npm init // step by step, press enter to skip
```

```sh
npm init -y (skip steps and creates default files)
```

### devDependencies

> nodemon is an npm package that watches our file for changes and restarts our server.

Packages that are not used in production should be installed as devDependencies
nodemon should be installed as a dev dependency.

```sh
npm i nodemon -D 
```

OR

```sh
npm i nodemon --save-dev
```

If you are using node add this to the script.

```js
"script": {
  "start": "node app.js",
  "dev": "nodemon app.js"
}
```

we can run our app normally using `npm start`to or `npm run start`, or `npm run dev` to run our app with nodemon. 
In some cases one might be able to use `npm <scriptName>` but in most cases `npm run <scriptName>` will work.

> start or dev can be renamed to any word.

### npx

npx stands for execute its a package tht was introduced in npm 5.2. It allow you run a cli tool instead of installing it globally e.g. npx create-reaxt-app my-app

### Uninstall a node module

```sh
npm uninstall <moduleName>
```

### Install a particular version

```sh
npm i <moduleName>@version
```

## Event Loop

The event loop is what allows Node.js to perform non-blocking I/O operations, despite the fact that JavaScript is single threaded, by offloading operations to the system kernel whenever possible. 

- JavaScript is synchronous and single threaded. i.e. It reads code line by line.  

The event loop is responsible for preventing a running request from delaying other requests. The event loop registers the callback running other blocking request and runs the registered request when the .

```js
console.log('First') 
setTimeout(() => {
  console.log('Second')
}, 0)
console.log('Third')
```

Results:
  First
  Third
  Second

## Async Patterns

- Callbacks
- Promises
- async await

```js
const { readFile, writeFile } = require('fs').promises
// const util = require('util')
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)

const start = async () => {
  try {
    const first = await readFile('./content/first.txt', 'utf8')
    const second = await readFile('./content/second.txt', 'utf8')
    await writeFile(
      './content/result-mind-grenade.txt',
      `THIS IS AWESOME : ${first} ${second}`,
      { flag: 'a' }
    )
    console.log(first, second)
  } catch (error) {
    console.log(error)
  }
}

start()

// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, 'utf8', (err, data) => {
//       if (err) {
//         reject(err)
//       } else {
//         resolve(data)
//       }
//     })
//   })
// }
// getText('./content/first.txt')
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err))
```

## Events Emitter / Event-driving programming

Example:

```js
const  EventEmitter = require('event') 

// If you to create sth custom you need to extend ye class 
// But if you want to emit an event and listen for it just create the instance 

const customEmmiter = new EventEmitter()

// METHODS 
// on - listen for event 
// emit - emit an event 
 
customEmitter.on('respond', () => {
  console.log('Data Received`)
})

customEmitter.emit('response');
```

Result:
Data Received

We can also pass the using the same event multiple times

```js
const  EventEmitter = require('event')

// If you to create sth custom you need to extend ye class 
// But if you want to emit an event and listen for it just create the instance 

const customEmmiter = new EventEmitter()

// METHODS 
// on - listen for event 
// emit - emit an event 

customEmitter.on('respond', () => {
  console.log('Data Recieved`)
})
 
customEmitter.on('respond', () => {
  console.log('Some other logic here`)
})

customEmitter.emit('response');
```

Result:
Data Received
Some other logic here

Passing parameters and arguments to Event

```js
const  EventEmitter = requie('event')

// If you to create sth custom you need to extend ye class 
// But if you want to emit an event and listen for it just create the instance 

const customEmmiter = new EventEmitter()

// METHODS 
// on - listen for event 
// emit - emit an event 
 
customEmitter.on('respond', (name, id) => {
  console.log('Data Recieved user ${name} with id:${id}`)
})
 
customEmitter.on('respond', () => {
  console.log('Some other logic here`)
})

customEmitter.emit('response', 'john', 24);
```

Result:
Data Received user John with id:24
Some other logic here

> The order matters you must first listen for an event before you can emit it.

The server (`http.createServer()`) has a method called `on`. We can create an event an listen for it. 

```js
const http = require('http') 

const server = http.createServer() 

server.on('request', (req, res) => {
  res.end('Welcome')
})

server.listen(5000)
```

This simply means that the server has a request event.

> You may not be setting up events on you own, a lot of built-in modules relay heavily on the concept of events.

## Streams

Streams are used to read or write sequentially.
It's handy when u are dealing with large files.

**4 Different Types of Streams**:

- Writeable (Use to **write data** sequentially)
- Readable (Used to **read data** sequentially)
- Duplex (Use to both **read and write data** sequentially)
- Transform (Where data can be **modified** when writing or reading) 

> Just like event, many built-in module implement stream interface. Stream extends event emitters class which means we can use events on streams.

In our previous chapter we learned about readFile, readFileSync, writeFile and writeFileSync. these file system method read the entire data at once, which is not appropriate for a very large file because such file will occupy a large part of the computer memory.

```js
const { createReadStream } = require('fs')

// default 64kb
// last buffer - remainder
// highWaterMark - control size of file read
// const stream = createReadStream('./content/big.txt', { highWaterMark: 90000 })
// const stream = createReadStream('../content/big.txt', { encoding: 'utf8' })
const stream = createReadStream('./content/big.txt')

stream.on('data', (result) => {
  console.log(result)
})

stream.on('error', (err) => console.log(err))
```

HTTP stream

```js
var http = require('http')
var fs = require('fs')

http.createServer(function (req, res) {
  // const text = fs.readFileSync('./content/big.txt', 'utf8')
  // res.end(text)
  const fileStream = fs.createReadStream('./content/big.txt', 'utf8')
  fileStream.on('open', (res) => {
    fileStream.pipe(res)
  })
  fileStream.on('error', (err) => {
    res.end(err)
  })
})
.listen(5000)
```

### Other Info in Node

- req.method ( Based on current request e.g GET, POST )
- req.url e.g /, /about

## Express

### http basics

```js
const http = require('http')

const server = http.createServer((req, res) => {
  // console.log(req.method)
  const url = req.url
  // home page
  if (url === '/') {
    res.writeHead(200, { 'content-type': 'text/html' })
    res.write('<h1>home page</h1>')
    res.end()
  }
  // about page
  else if (url === '/about') {
    res.writeHead(200, { 'content-type': 'text/html' })
    res.write('<h1>about page</h1>')
    res.end()
  }
  // 404
  else {
    res.writeHead(404, { 'content-type': 'text/html' })
    res.write('<h1>page not found</h1>')
    res.end()
  }
})

server.listen(5000)
```

- We must specify a status code for the pages we want our users to access.
- Others that cannot be accessed will lead to a 404 status code.
- `content-type: text/plain` will return `res.write()` data as a text, event if it contains an html, it will render as a text.
- Http status code 201 is used to show that post request is successful.

### Requesting Resources

```js
const http = require('http')
const { readFileSync } = require('fs')

// get all files
const homePage = readFileSync('./navbar-app/index.html')
const homeStyles = readFileSync('./navbar-app/styles.css')
const homeImage = readFileSync('./navbar-app/logo.svg')
const homeLogic = readFileSync('./navbar-app/browser-app.js')

const server = http.createServer((req, res) => {
  // console.log(req.method)
  const url = req.url
  console.log(url)
  // home page
  if (url === '/') {
    res.writeHead(200, { 'content-type': 'text/html' })
    res.write(homePage)
    res.end()
  }
  // about page
  else if (url === '/about') {
    res.writeHead(200, { 'content-type': 'text/html' })
    res.write('<h1>about page</h1>')
    res.end()
  }
  // styles
  else if (url === '/styles.css') {
    res.writeHead(200, { 'content-type': 'text/css' })
    res.write(homeStyles)
    res.end()
  }
  // image/logo
  else if (url === '/logo.svg') {
    res.writeHead(200, { 'content-type': 'image/svg+xml' })
    res.write(homeImage)
    res.end()
  }
  // logic
  else if (url === '/browser-app.js') {
    res.writeHead(200, { 'content-type': 'text/javascript' })
    res.write(homeLogic)
    res.end()
  }
  // 404
  else {
    res.writeHead(404, { 'content-type': 'text/html' })
    res.write('<h1>page not found</h1>')
    res.end()
  }
})

server.listen(5000)
```

- In node files cannot be directly requested directly, it must be read first and displayed. 
- The problem with using node is that you must also read all the local resources that your file/document/webpage needs to functions and write them back. You can use the `res.url`

### Using Express

```js
const express = require('express')
const app = express()

app.get('/', (req, res) => {
  console.log('user hit the resource')
  res.status(200).send('Home Page')
})

app.get('/about', (req, res) => {
  res.status(200).send('About Page')
})

app.all('*', (req, res) => {
  res.status(404).send('<h1>resource not found</h1>')
})

app.listen(5000, () => {
  console.log('server is listening on port 5000...')
})

// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use - Responsible for Middleware
// app.listen
```

### Loading HTML file with and it resources

```js
const express = require('express')
const path = require('path')

const app = express()

// setup static and middleware
app.use(express.static('./public'))

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
})

app.all('*', (req, res) => {
  res.status(404).send('resource not found')
})

app.listen(5000, () => {
  console.log('server is listening on port 5000....')
})
```

You can remove `app.get('/', (req, res) => { res.sendFile(path.resolve(__dirname, './navbar-app/index.html')) })` and place your index.html file in /public.

> by using express.static('./public'), all static file like css JavaScript etc must be placed in the public folder.


### API vs SSR (Server Side Rendering )
When using express, you will mostly use it to setup an API or Templates with server side rendering. 

#### API 
Involves setting up an HTTP interface to interact with out data. 
Data is sent using JSON. 
In order to send our response we will `res.JSON()`

- API - JSON 
- SEND DATA 
- res.json() 


#### SSR 
We will set-up templates and set back an entire HTML, CSS, and JavaScript. 
We'd do that using `res.render()`

- SRR - TEMPLATE 
- SEND TEMPLATE
- res.render() 



### API 
```js 
const express = require('express')
const app = express()
const { products } = require('./data')
app.get('/', (req, res) => {
  res.json(products)
})

app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})
``` 

The page server above return a json when localhost:5000 is entered in the browser. 



#### Modifying JSON based on Request 
```js 
const express = require('express')
const app = express()
const { products } = require('./data')

app.get('/', (req, res) => {
  res.send('<h1> Home Page</h1><a href="/api/products">products</a>')
})
app.get('/api/products', (req, res) => {
  const newProducts = products.map((product) => {
    const { id, name, image } = product
    return { id, name, image }
  })

  res.json(newProducts)
})
app.get('/api/products/:productID', (req, res) => {
  // console.log(req)
  // console.log(req.params)
  const { productID } = req.params

  const singleProduct = products.find(
    (product) => product.id === Number(productID)
  )
  if (!singleProduct) {
    return res.status(404).send('Product Does Not Exist')
  }

  return res.json(singleProduct)
})

app.get('/api/products/:productID/reviews/:reviewID', (req, res) => {
  console.log(req.params)
  res.send('hello world')
})

app.get('/api/v1/product', (req, res) => {
  // console.log(req.query)
  const { search, limit } = req.query
  let sortedProducts = [...products]

  if (search) {
    sortedProducts = sortedProducts.filter((product) => {
      return product.name.startsWith(search)
    })
  }
  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit))
  }
  if (sortedProducts.length < 1) {
    // res.status(200).send('no products matched your search');
    return res.status(200).json({ sucess: true, data: [] })
  }
  res.status(200).json(sortedProducts)
})

app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})
```

See how `req.params` is used to get a value from the url. 
To set variable, in url use `:variableName` e.g. localhost:5000/product/:userId/ 
This way one will be able to get the userId from Params.



#### Obtaining data from Query Strings 

```js 

``` 

NB: For example http://hn.algolia.com/api/v1/search?query=foo&tags=story.
Here if you `console.log(req.search)` you will get an object `{query: 'foo', tags: 'story'}`.

```js 
app.get('/api/v1/query?')

```


> If You have multiple responses (e.g. res.send(), res.json() e.t.c ) it's better to return the response calls before the last one, to prevent he code from running 


### middleware 
Middleware are functions that execute during the request to the server. 

```js 
const express = require('express')
const app = express()

//  req => middleware => res

const logger = (req, res, next) => {
  const method = req.method
  const url = req.url
  const time = new Date().getFullYear()
  console.log(method, url, time)
  next()
}

app.get('/', logger, (req, res) => {
  res.send('Home')
})
app.get('/about', logger, (req, res) => {
  res.send('About')
})

app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})
``` 

> The logger function is used as a Middleware. an express middleware has access to the following parameters (req, res, next)


NB: If you noticed `logger` was added between each get request to the server. This could be a serious problem of we configure many routes to the server. 
We can use `app.use()` to apply a Middleware to all route. 

There `app.use(logger)` will apply the logger middleware to all route. 

We can also specify a path for a Middleware, in the `use()` method. 
e.g `app.use('/api', logger)`
NB: The Middleware will be applied to the specified path and any path that includes the specified path and it subpath e.g. /api/product/


If you want to execute multiple Middleware in express.js you must enclose them in an array 
e.g `app.use([logger, authorise])`

```
app.get('/about', [logger, authorise], (req, res) => {
  res.send('About')
```

```js
const express = require('express')
const app = express()
const logger = require('./logger')
const authorize = require('./authorize')
//  req => middleware => res
app.use([logger, authorize])
// api/home/about/products
app.get('/', (req, res) => {
  res.send('Home')
})
app.get('/about', (req, res) => {
  res.send('About')
})
app.get('/api/products', (req, res) => {
  res.send('Products')
})
app.get('/api/items', (req, res) => {
  console.log(req.user)
  res.send('Items')
})

app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})
```


#### Express Built-in Middleware 
And example is: `express.static` Which fetches static files from the a folder e.g. public
```js
app.use(express.static('./public'))
``` 




### Using HTTP Methods 
- GET - Read Data 
- POST - Insert Data 
- PUT - Update Data 
- DELETE - Delete Data 


#### POST 
```js 
app.use(express.urlencoded({ extended: false }))
// NB: express.urlencoded encoded is a Middleware that allows us to access post data passed to the body of the request 
app.post ('/login', (req, res) => {
  console.log(req.body) // contains data passed 
  const {name} = req.body
  // If name data is passed to body
  if(name) {
    return res.status(200).send(`Welcome, ${name}`)
  }
  res.status(401).send('Kindly login')
})
```


#### Using JavaScript to send a POST request 
You can use axios to make a psot request and also pass data along while doing that.
```js 
const { data } = await axio.post('/api/people', { name: nameValue })
```

#### Using express.json middleware parse incoming data 
```js 
app.use()
``` 


```js 
const express = require('express')
const app = express()
let { people } = require('./data')

// static assets
app.use(express.static('./methods-public'))
// parse form data
app.use(express.urlencoded({ extended: false }))
// parse json
app.use(express.json())

app.get('/api/people', (req, res) => {
  res.status(200).json({ success: true, data: people })
})

app.post('/api/people', (req, res) => {
  const { name } = req.body
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: 'please provide name value' })
  }
  res.status(201).json({ success: true, person: name })
})

app.post('/api/postman/people', (req, res) => {
  const { name } = req.body
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: 'please provide name value' })
  }
  res.status(201).json({ success: true, data: [...people, name] })
})

app.post('/login', (req, res) => {
  const { name } = req.body
  if (name) {
    return res.status(200).send(`Welcome ${name}`)
  }

  res.status(401).send('Please Provide Credentials')
})

app.put('/api/people/:id', (req, res) => {
  const { id } = req.params
  const { name } = req.body

  const person = people.find((person) => person.id === Number(id))

  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: `no person with id ${id}` })
  }
  const newPeople = people.map((person) => {
    if (person.id === Number(id)) {
      person.name = name
    }
    return person
  })
  res.status(200).json({ success: true, data: newPeople })
})

app.delete('/api/people/:id', (req, res) => {
  const person = people.find((person) => person.id === Number(req.params.id))
  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: `no person with id ${req.params.id}` })
  }
  const newPeople = people.filter(
    (person) => person.id !== Number(req.params.id)
  )
  return res.status(200).json({ success: true, data: newPeople })
})

app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})
```


### Using express.Router 
Here you will create a new directory called route, create new .js file for each unique path ( e.g. people.js for /people/api and auth.js landing page for users.
Add all your path/route (i.e. app.get() app.post()) 
to the files. and export each route.

Import them in your code and use app.use() to specify the path and use the import variable name as response to the route.

```js 
const express = require('express')
const app = express()

const people = require('./routes/people')
const auth = require('./routes/auth')

// static assets
app.use(express.static('./methods-public'))
// parse form data
app.use(express.urlencoded({ extended: false }))
// parse json
app.use(express.json())

app.use('/api/people', people)
app.use('/login', auth)

app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})

``` 


To make our code cleaner we can create a controller folder that keeps all the call back function in a file with it's unique path.

route/people.js 
```js 
const express = require('express')
const router = express.Router()

const {
  getPeople,
  createPerson,
  createPersonPostman,
  updatePerson,
  deletePerson,
} = require('../controllers/people')

// router.get('/', getPeople)
// router.post('/', createPerson)
// router.post('/postman', createPersonPostman)
// router.put('/:id', updatePerson)
// router.delete('/:id', deletePerson)

router.route('/').get(getPeople).post(createPerson)
router.route('/postman').post(createPersonPostman)
router.route('/:id').put(updatePerson).delete(deletePerson)

module.exports = router
```


/route/auth.js
```js 
const express = require('express')
const router = express.Router()

router.post('/', (req, res) => {
  const { name } = req.body
  if (name) {
    return res.status(200).send(`Welcome ${name}`)
  }

  res.status(401).send('Please Provide Credentials')
})

module.exports = Router 
``` 





/controller/people.js 
```js 
let { people } = require('../data')

const getPeople = (req, res) => {
  res.status(200).json({ success: true, data: people })
}

const createPerson = (req, res) => {
  const { name } = req.body
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: 'please provide name value' })
  }
  res.status(201).send({ success: true, person: name })
}

const createPersonPostman = (req, res) => {
  const { name } = req.body
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: 'please provide name value' })
  }
  res.status(201).send({ success: true, data: [...people, name] })
}

const updatePerson = (req, res) => {
  const { id } = req.params
  const { name } = req.body

  const person = people.find((person) => person.id === Number(id))

  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: `no person with id ${id}` })
  }
  const newPeople = people.map((person) => {
    if (person.id === Number(id)) {
      person.name = name
    }
    return person
  })
  res.status(200).json({ success: true, data: newPeople })
}

const deletePerson = (req, res) => {
  const person = people.find((person) => person.id === Number(req.params.id))
  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: `no person with id ${req.params.id}` })
  }
  const newPeople = people.filter(
    (person) => person.id !== Number(req.params.id)
  )
  return res.status(200).json({ success: true, data: newPeople })
}

module.exports = {
  getPeople,
  createPerson,
  createPersonPostman,
  updatePerson,
  deletePerson,
}
```




## patch vs put 
`patch` is used for partial update (only the properties passed in will be updated.)
`put` is used replacing existing (Only the properties you pass in will be updated, while the rest will be overwritten if available or removed if not provided in new update. (An unprovided data may show up if it has a default in it's schema)) 

```js
const task = await taskfindOneAndUpdate({_id: taskID}, req.body, {
      new: true, 
      runValidators: true,
      overwrite: true
    })
```
