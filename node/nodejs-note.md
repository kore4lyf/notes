# Node Js

## Event loop

```js
console.log('Start');
setTimeout(() => console.log('Timer finished'), 2000);
console.log('End');
```

OUTPUT:
Start
End
Timer finished

## Understanding Modules

Syntax

```js
const module = require('module_name');
```

If a module path begins with “./” or “/”, Node tries to load the module as a file. If it does not succeed, it tries to load the module as a directory.

As a file:
When loading as a file, if the file exists, Node just loads it as JavaScript text.
If not, it tries doing the same by appending “.js” to the given path.
If not, it tries appending “.node” and load it as a binary add-on.

As a directory:
If appending “/package.json” is a file, try loading the package definition and look for a “main” field.
Try to load it as a file. If unsuccessful, try to load it by appending “/index” to it.

As an installed module:
If the module path does not begin with “.” or “/” or if loading it with complete or relative paths does not work, Node tries to load the module as a module that was previously installed. For that it adds “/node_modules” to the current directory and tries to load the module from there.
If it does not succeed it tries adding “/node_modules” to the parent directory and load the module from there.
If it does not succeed it moves again to the parent directory and so on, until either the module is found or the root of the tree is found.
This means that you can put your Node modules into your app directory, and Node will find those

## API

Node provides a platform API that covers mainly 4 aspects:

• processes
• filesystem
• networking
• utilities

### Processes

Node allows you to analyze your process (environment variables, etc.) and manage external processes. The involved modules are:

- process
Inquire the current process to know the PID, environment variables, platform, memory usage, etc.

- child_process
Spawn and kill new processes, execute commands and pipe their outputs.

### File system

Node also provides a low-level API to manipulate files, which is inspired by the POSIX standard, and is comprised of the following modules:

- fs
File manipulation: create, remove, load, write and read files. Create read and write streams (covered later).

- path
Normalize and join file paths. Check if a file exists or is a directory.

### Networking

- net
Create a TCP server or client.

- dgram
Receive and send UDP packets.

- http
Create an HTTP server or Client.

- tls (ssl)
The tls module uses OpenSSL to provide Transport Layer Security and/or Secure Socket Layer:
encrypted stream communication.

- https
Implementing http over TLS/SSL.

- dns
Asynchronous DNS resolution.

### Utilities

- console
Node provides a global “console” object to which you can output strings using:

```js
console.log("Hello");
console.warn("Warning!");
console.error("Error!");
console.trace()
```

#### util (DEPRECATED)

Node has an util module which bundles some functions like:

```js
let util = require('util');
util.log('Hello');
```

which outputs a the current timestamp and the given string like this:

14 Mar 16:38:31 - Hello

## Buffers

Natively, JavaScript is not very good at handling binary data, so Node adds a native buffer implementation with a JavaScript way of manipulating it. It’s the standard way in Node to transport data.
Generally, you can pass buffers on every Node API requiring data to be sent.

This will be covered later. You can create a Buffer from an UTF-8 string like this:

Old:

```js
let buf = new Buffer('Hello World!');
```

new Buffer is an old way of using Buffer, in order to avoid memory leaks one must use Buffer, as recommend by NodeJs

New:
Node.js introduced safer alternatives:

```js
Buffer.alloc(size) //→ Creates a buffer of the specified size filled with zeros.
const buf = Buffer.alloc(10); // Safe
console.log(buf); 
// <Buffer 00 00 00 00 00 00 00 00 00 00>
```

similar to `new Buffer` is `Buffer.allocUnsafe()`

```js
Buffer.allocUnsafe(size) //→ Creates an uninitialized buffer, which might have old memory data. Use with caution.

const buf = Buffer.allocUnsafe(10); // Faster but potentially contains old data
console.log(buf); // Could contain random memory data
```

Creating Buffer from other data types:

```js
Buffer.from(data) // → Creates a buffer from a string, array, or another buffer.

const buf = Buffer.from('Hello');
console.log(buf); // <Buffer 48 65 6c 6c 6f>
```

You can also create a buffer from strings with other encodings, as long as you pass it as the second argument:
let buf = new Buffer('8b76fde713ce', 'base64');

Accepted encodings are: “ascii”, “utf8” and “base64”.
or you can create a new empty buffer with a specific size:

```js
let buf = Buffer.alloc(1024);

// and you can manipulate it:

buf[20] = 56; // set byte 20 to 56
```

You can also convert it to a UTF-8-encoded string:

```js
let str = buf.toString();


// or into a string with an alternative encoding:
let str = buf.toString('base64');

// UTF-8 is the default encoding for Node, so, in a general way, if you omit it as we did on the buffer.toString() call, UTF-8 will be assumed.
```

```js
const base64Buf = Buffer.from('Hello, Node.js', 'base64');
console.log(base64Buf);

const asciiBuf = Buffer.from('Hello, Node.js', 'ascii');
console.log(asciiBuf);

const utf8Buf = Buffer.from('Hello, Node.js', 'utf-8'); // Default encoding
console.log(utf8Buf); // <Buffer 48 65 6c 6c 6f 2c 20 4e 6f 64 65 2e 6a 73>

console.log(utf8Buf.toString('utf-8')); // "Hello, Node.js"
console.log(base64Buf.toString('base64')); // Convert to Base64 string
console.log(asciiBuf.toString('ascii')); // Convert to ASCII string

const text = 'Node.js Buffers!';
const base64Encoded = Buffer.from(text).toString('base64');
console.log(base64Encoded); // "Tm9kZS5qcyBCdWZmZXJzIQ=="

const decodedText = Buffer.from(base64Encoded, 'base64').toString('utf-8');
console.log(decodedText); // "Node.js Buffers!"
```

Yes, they are essential in various situations:

1. UTF-8 → Used by default for text encoding. Essential for working with text-based data.

2. Base64 → Commonly used for:
Encoding binary files (images, videos) for transport in text-based formats (e.g., JSON, HTML).
Storing small binary data in databases.

3. ASCII → Useful when working with legacy systems or ensuring compatibility with simple text formats.

### Slice a Buffer

Slicing a buffer is similar to slicing the string itself.

```js
const msg = "Hello, world!"
const msgBuffer = Buffer.from(msg)
// <Buffer 48 65 6c 6c 6f 2c 20 77 6f 72 6c 64 21>

const worldBuffer = msgBuffer.slice(7,12)
// <Buffer 77 6f 72 6c 64>

const world = worldBuffer.toString()
// console.log(world) → world
```

This technique of slicing can be use to make a copy of a buffer.

```js
const msg = "Hello, world!"
const msgBuffer = Buffer.from(msg)
// <Buffer 48 65 6c 6c 6f 2c 20 77 6f 72 6c 64 21>

const msgBufferCopy = msgBuffer.slice()
// or msgBuffer.slice(0)
// <Buffer 48 65 6c 6c 6f 2c 20 77 6f 72 6c 64 21>
```

### Copying Buffers

Syntax:

```js
buf.copy(target[, targetStart[, sourceStart[, sourceEnd]]])
```

Example:

```js
const sourceBuffer = Buffer.from('Hello World!');
const targetBuffer = Buffer.alloc(10); // Create a buffer of size 10, initialized to 0s

// Copy the first 5 bytes from sourceBuffer to targetBuffer starting at index 0
sourceBuffer.copy(targetBuffer, 0, 0, 5);
console.log('targetBuffer after first copy:', targetBuffer.toString()); // Output: targetBuffer after first copy: Hello

// Copy bytes from index 6 to 10 (exclusive) of sourceBuffer to targetBuffer starting at index 5
sourceBuffer.copy(targetBuffer, 5, 6, 11);
console.log('targetBuffer after second copy:', targetBuffer.toString()); // Output: targetBuffer after second copy: Hello World
```

### Buffers in TypeScript

```ts
// Declare a variable of type Buffer
let myBuffer: Buffer;

// Initialize a Buffer using Buffer.from()
myBuffer = Buffer.from('Hello TypeScript');
console.log(myBuffer); // Output: <Buffer 48 65 6c 6c 6f 20 54 79 70 65 53 63 72 69 70 74>

// Initialize a Buffer with a specific length using Buffer.alloc()
let emptyBuffer: Buffer = Buffer.alloc(10);
console.log(emptyBuffer); // Output: <Buffer 00 00 00 00 00 00 00 00 00 00>

// Initialize a Buffer with a specific length and fill value using Buffer.allocUnsafe()
let unsafeBuffer: Buffer = Buffer.allocUnsafe(5); // Uninitialized memory
console.log(unsafeBuffer); // Output: (potentially garbage data)

let filledBuffer: Buffer = Buffer.alloc(8, 'a'); // Fill with the ASCII value of 'a' (97)
console.log(filledBuffer); // Output: <Buffer 61 61 61 61 61 61 61 61>
```

### Initialized vs Uninitialized Memory

```js
// Creating an uninitialized buffer in JavaScript (Node.js)

// Using Buffer.allocUnsafe()
const uninitializedBuffer = Buffer.allocUnsafe(10); // Creates a buffer of 10 bytes without initializing its contents

console.log("Uninitialized Buffer (before any modification):");
console.log(uninitializedBuffer);
// The output here will likely show some seemingly random hexadecimal values
// because the memory hasn't been cleared.

// Let's try to read the contents as numbers (though they are not guaranteed to be meaningful)
for (let i = 0; i < uninitializedBuffer.length; i++) {
  console.log(`Byte ${i}: ${uninitializedBuffer[i]}`);
}

// Now, let's initialize a buffer with a known value for comparison

// Using Buffer.alloc() (initialized with 0 by default)
const initializedBuffer = Buffer.alloc(10); // Creates a buffer of 10 bytes and initializes them to 0

console.log("\nInitialized Buffer (after initialization):");
console.log(initializedBuffer);
// The output will be: <Buffer 00 00 00 00 00 00 00 00 00 00>

// Let's read the contents of the initialized buffer
for (let i = 0; i < initializedBuffer.length; i++) {
  console.log(`Byte ${i}: ${initializedBuffer[i]}`);
}

// Explanation:

// 1. Buffer.allocUnsafe(10):
//    - This method allocates a block of memory of 10 bytes.
//    - The "Unsafe" part signifies that the memory is *not* guaranteed to be zeroed out or initialized to any specific value.
//    - The contents of this buffer will be whatever was present in that memory location before it was allocated to our program. This is why the initial output often looks like random or garbage data.

// 2. Buffer.alloc(10):
//    - This method also allocates a block of memory of 10 bytes.
//    - However, it *does* initialize the contents of this memory to zero. This makes its initial state predictable.

// The key takeaway is that an "uninitialized" buffer provides a raw, uncleaned memory space, while an "initialized" buffer has its contents set to a known value (usually zero) at the time of creation.
```

`Buffer.allocUnsafe()` and `Buffer.alloc()` in Node.js (and by extension, in JavaScript when dealing with Uint8Array in similar contexts). Both methods are used to create Buffer objects (or Uint8Array instances), but they differ significantly in how the underlying memory is handled, primarily concerning initialization.

### Exercises - Buffers

- Create an uninitialized buffer with 100 bytes length and fill it with bytes with values starting from 0 to 99. And then print its contents.

```js
let buf = Buffer.allocUnsafe(100)

forEach((val, index) => {
  buf[index] = index
})
```

- Do what is asked on the previous exercise and then slice the buffer with bytes ranging 40 to 60, and then print it.

```js
let buf = Buffer.allocUnsafe(100)

forEach((val, index) => {
  buf[index] = index
})

let slicedBuf = buf.slice(40, 60)
console.log(slicedBuf)
```

- Do what is asked on exercise 1 and then copy bytes ranging 40 to 60 into a new buffer. And then print it.

```js
let buf = Buffer.allocUnsafe(100)

forEach((val, index) => {
  buf[index] = index
})

let slicedBuf = buf.slice(40, 60)
console.log(slicedBuf)

let newBuf = Buffer.alloc(20)

slicedBuf.copy(newBuf, 0, 0, 20)
```

## Event Emitter

On node, many objects can emit events. For instance, a TCP server can emit a "connect" event every time a client connects, or aa file stream request can emit a "data" event.

### .addListener

"addListener" method allows you to listen for events by calling it and passing a callback function. For instance a file ReadStream can emit a "data" event every time there is some data available to read.

Instead of using the "addListener" function, you can use "on", which is the same thing

```js
let fs = require("fs")
let readStream = fs.createReadStream("/etc/passwd")
readStream.on("data", (data) => console.log(data) )
readStream.on("end", () => console.log("File ended"))
```

When one of these events happens, the readStream will call the callback function we pass in.

### .once

You may also want to listen for an event exactly once. For instance, if you want to listen to the first connection on a server, you should do something like this:

```js
server.once("connection", (stream) => {
  console.log("Welcome")
})
```

Once is similar to "on", but once can only be called at most once.

### .removeListener

```js
const connectionListener = (stream) => {
  console.log("Welcome")
  server.removeListener("connection", connectionListener)
}

server.on("Connection", connectionListener)
```

### .removeAllListeners

If you ever need to, you can also remove all listeners for an event from an Event Emitter by simply calling.

```js
server.removeAllListeners("connection");
```

### Creating an Event Emitter

```js
const events = require("events")

class MyEmitter extends events.EventEmitter {
  constructor() {
    super()
    // ... any initialization code
  }

  myMethod() {
    this.emit("myEvent", "some data")
  }
}
```

Using the Emitter Class

```js
const myEmitter = new MyEmitter()

myEmitter.on("myEvent", (data) => {
  console.log("Received", data)
})

// Trigger the event
myEmitter.myMethod()
```

### Exercises - EventEmitter

Exercise 1
Build a pseudo-class named “Ticker” that emits a “tick” event every 1 second.

```js
const events = require("events")

class Ticker extends events {
  constructor() {
    super()

    this.interval = setInterval(() => this.emit("tick", "Tick is the soud"), 1000)
  }

  tock() {
    this.emit("tock", "Tock is the sound")
  }

  stop() {
    clearInterval(this.interval)
  }

}

const ticker = new Ticker()

ticker.on("tick", (data) => console.log(data))

// Stop the ticker after some 10 seconds
setTimeout(() -> {
  ticker.stop()
  console.log("Ticker Stopped.", 10000)
})
```

Exercise 2
Build a script that instantiates one Ticker and bind to the “tick” event, printing “TICK” every time it gets one.

```js
// The solution to Exercise 1 already covers a lot
```

## Timers

Node implements the timer API also found in web browsers.

### setTimeout

```js
const timeout = 2000 // 2 seconds

setTimeout(() => console.log("Timed Out", timeout))
```

### clearTimeout

setTimeout returns a timeout handle that you can use to disable it.

```js
const timeoutHandle = setTimeout(() => console.log("Yeah!"), 1000)

clearTimeout(timeoutHandle)
```

Here the timeout will never execute because we clear it right after we set it.

```js
const timeoutHandle = setTimeout(() => console.log("Yeah!"), 1000)

const timeoutKiler = setTimeout(() => { 
  console.log("Timeout killer")
  clearTimeout(timeoutHandle)  
}, 500)
```

Time handle will never execute because clearTimeout will be called 0.5 sec to the time of its execution.

### setInterval

Set Interval is similar to setTimeout, but schedules a given function to run every X seconds. where X is the number of times it runs.

```js
const period = 1000

const interval = setInterval(() => {
  console.log("tick")
}, period)
```

### clearInterval

clearInterval unschedule a running interval.

```sh
const period = 1000

const interval = setInterval(() => {
  console.log("tick")
}, period)

setTimeout(() => clearInterval(interval), 10000)
```

### process.nextTick()

setTimeout and setInterval let things happen later, `process.nextTick()` makes something happen right after what's happening right now is finished, but before anything else.

`process.nextTick()`: This schedules a callback to be executed after the current operation is complete, but before the event loop moves on to the next event.

```js
process.nextTick(() => {
  // Do something
})
```

### A note on tail recursion

Assuming you want to schedule a function that executes periodically, and you want to guarantee that no two of the function is executing at the same time, `setInterval` is not the best way to go about it. The interval will fire regardless of whether the function has finished it's duty or not.

If any two async() calls can't overlap you are better off using tail recursion.

```js
const schedule = () => {
  setTimeout(async () => {
    console.log("Yeah!")
    schedule()
  }, 1000)
}
```

The trick here is that you call the function inside setTimeout, which means it has to wait for the timer every time.

