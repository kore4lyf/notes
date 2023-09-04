# Node Js and Express Js 

## Introduction 
What is Node Js?
- Environment to run JS outside Browser
- Built on chrome's V8 JS Engine 
- Big Community
- Full-stack 

### Global Variables
Global variables are variables thatcan be accessed anywhere in an application. 
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
module.exports.items ['items1', 'items2']
const person = {
  name: 'bob
}
module.exports.simglePerson = person
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



### fs (file system)

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
Welcome to Gboard clipboard, any text that you copy will be saved here.
``` 

One way to avoid call back hell is to use promise, another is async await. 


```js 
const { readFile, writeFile } = require('fs').promises

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


- npm i <packageName> // Install local dependency 
- npm install -g <packageName> // Install dependency globally 
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



## Event Loop 
The event loop is what allows Node.js to perform non-blocking I/O operations, despite the fact that JavaScript is single threaded, by offloading operations to the system kernel whenever possible. 

- JavaScript is synchronous and single thread. i.e. It reads code line by line.  

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



## Events Emitter






## Streams 









