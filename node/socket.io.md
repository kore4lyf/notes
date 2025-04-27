# SOCKET.IO

Socket.io is a javascript library that enables real-time, bidirectional communication between web clients (Browsers) and servers. It simplifies the process of building interactive we applications by allowing data to be transmitted instantly and continuously between the client and server, facilitating features like chat applications, live updates and multiplayer gaming.

Bidirectional Communication:
Bidirectional communication means that information can flow in two directions, both the web client (browser) and the server can send and receive data to and from each other in real-time. So, if something changes on the server, it cna immediately notify the client, and vice versa, without the client needing to constantly ask the serer if there's new information available.

## Setup

```js
// 1. Packages
import express from "express"
import http from "http"
import { fileURLToPath } from "node:url"
import { dirname, join } from "node:path"
import { Server } from "socket.io"

// 2. Instances
const app = express()
const server = http.createServer(app)
const io = new Server(server)


// 3. Serving HTML File
const __dirname = dirname(fileURLToPath(import.meta.url))
console.log(__dirname, "index.html")
app.get("/", (req, res) => res.sendFile(join(__dirname, "index.html")))


// 4. Define a connection event handler
io.on("connection", client => {
  console.log("User connected to Server ✅")
})

// 5. Start the server
const PORT = 3000
server.listen(PORT, () => console.log(`Sever running on port: ${PORT}`))
```

index.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>SOCKET.IO TEST</title>
</head>
<body>
  <h1>Socket.io Test</h1>

  <script src="/socket.io/socket.io.js"></script>
  <script type="module">
    const socket = io()

    socket.on("connect", () => console.log("Connected to the Client."))

    setTimeout(() => socket.disconnect(), 5000)

    socket.on("disconnect", () => {
      console.log("Disconnect from client")
    })
  </script>
</body>
</html>
```

## Event Handler

### io.on("connection", callback)

io.on is a method used to register event listeners for different events that occur on the server-side. 

The io object represents the main Socket.io server instance.

When we call `io.on("connection", callback)` we are telling socket.IO to listen for a connection event which occurs when a new client establishes a connection with the server. The callback function will be called/invoked when ever the event occurs, and it will receive a socket object representing the connection to the client.

Similarly, we can use socket.on on the socket object to listen for events specific to that individual client connection.

```js
io.on("connection", (client) => {
  console.log("User connected to Server")
  console.log(client)
})
```

### client.on("disconnect", callback)

```js
io.on("connection", (client) => {
  // Log every time a user connects to the server
  console.log("User connected to Server")
  
  client.on("disconnect", () => {
    // Logs when a connected user disconnects from the server.
    console.log("User diconnected from Server")
  })
})
```

connect(ion) and disconnect happen in both client and server environment.

The client can deliberately disconnect from the server with

```sh
socket.disconnect()
```

### Emitting Events

Emitting events allows us to send data from one side (client or server) to the other. It's a fundamental feature of real-time communication.

```js
client.emit("new message", "Welcome to the server!")
```

The "new message" event here is can be could be written as any thing e.g. "text".

To get the response on the client, we listen to a message event on the client.

```js
const socket = io()

socket.on("new message", (message) => {
  console.log(message)
})
```

### Broadcasting

Emit event from the server to the rest of the users.

In order to send an event to everyone, Socket.IO gives us the io.emit() method.

```js
// this will emit the event to all connected sockets/client
io.on('connection', (client) => {
  io.emit('hello', 'world')
}
```

If you want to send a message to everyone except for a certain emitting socket, we have the broadcast flag for emitting from that socket:

```js
io.on('connection', (client) => {
  client.broadcast.emit('msg', "hello world")
})
```

## Using SocketIO in a React App

Separate code into two folders.
/client
/server

within server

```sh
cd server
npm init -y
npm i cors express nodemon socket.io
```

within client or react app folder

```sh
npm i socket.io-client
```

## Overview of the API

### Common API

#### Basic Emit

**Client to Server**:

client

```js
socket.emit("hello", "world")
```

Server

```js
io.on("connection", (client) => {
  client.on("hello", (arg) => {
    console.log(arg)
  })
})
```

**Sever to Client**:

Server

```js
io.on("connection", (client) => {
  client.emit("hello", "world")
})
```

Client

```js
socket.on("hello", (arg) => {
  console.log(arg)
})
```

#### Adding More Arguments

Any number of arguments can be sent and all serializable data structures are supported, including binary objects like ArrayBuffer, TypedArray or Buffer.

**Client to Server**:

client

```js
socket.emit("hello", 1, "2", {
  3: "4",
  5: Uint8Array.from([6])
})
```

Server

```js
io.on("connection", (client) => {
  client.on("hello", (arg1, arg2, arg3) => {
    console.log(arg1) // 1
    console.log(arg2) // "2"
    console.log(arg3) // { 3: "4", 5: Uint8Array.from([6]) }
  })
})
```

**Sever to Client**:

Server

```js
io.on("connection", (client) => {
  client.emit("hello", 1, "2", {
  3: "4",
  5: Uint8Array.from([6])
})
})
```

Client

```js
socket.on("hello", (arg1, arg2, arg3) => {
  console.log(arg1) // 1
  console.log(arg2) // "2"
  console.log(arg3) // { 3: "4", 5: Uint8Array.from([6]) }
})
```

#### With a callback function

You can add a callback as the last argument of the `emit()`, and this callback will be called once the other side has acknowledged the event.

Client

```js
socket.timeout(5000).emit("request", "Korede", "Faleye", (err, res) => {
  if(err) {
    // Server did not acknowledge the event in the given delay
  } else {
    console.log(response.status) // Ok
  }
}
```

Sever

```js
io.on("connection", (client) => {
  client.on("request", (firstName, lastName, callback) => {
    console.log(firstName)
    console.log(lastName)
    callback({
      status: "ok"
    })
  }
})
```

#### With a promise

The `emitWithAck()` method provides the same functionality, but returns a promise which will resolve once the other side acknowledges the event.

Client

```js
try {
  const response = await socket.timeout(5000).emitWithAck("request", "Korede", "Faleye")
  console.log(response.status)
} catch (e) {
  // Sever did not acknowledge the event in the given delay
}
```

Server

```js
io.on("connection", (client) => {
  client.on("request", (firstName, lastName, callback) => {
    console.log(firstName)
    console.log(lastName)
    callback({
      status: "ok"
    })
  }
})
```

#### Catch-all Listeners

sender

```js
socket.emit("hello", 1, "2", {one: 1, two: 2})
```

Receiver

```js
socket.onAny((eventName, ...arg) => {
  console.log(eventName) // hello
  console.log(args) // [1, "2", {one: 1, two: 2}]
})
```

For outgoing Packets

```js
socket.onAnyOutgoing((eventName, ...args) => {
  console.log(eventName) // hello
  console.log(args) // [1, "2", {one: 1, two: 2}]
})
```

### Server API

- Broadcasting
  Broadcast an event to all connected client.

```js
io.emit("hello", "world")
```

- Rooms
  An arbitrary channel that sockets can join and leave. it can be use to broadcast to a subset of connected clients.

```js
io.on("connnection" (client) => {
  // Join the room name "some room"
  client.join("some room")

  // Broadcast to all connected clients in the room
  io.to("some room").emit("hello", "world")

  // Broadcast to all connected clients except those in the room
  io.except("some room").emit("hello", "world")

  client.leave("some room")
})
```

## Handling Disconnections

The Properties of Socket.IO

1. A Socket.IO client is not always connected
2. A Socket.IO server does not store any event

Which means that your application needs to be able to synchronize the local state of the client with the global stat on the server after a temporary disconnection.

> NB: The Socket.IO client will automatically try to reconnect after a small delay. However, any missed event during the disconnection period will effectively be lost for this client.

For example:
A disconnected client might miss some messages.

## Connection State Recovery

Connection can firstly be handled by pretending that there was no disconnection.
The `connectionStateRecovery`  feature will temporarily store all the events that are sent by the server and will try to restore the state of a client when it reconnects.

1. Restore client's rooms
2. Send any missed events

This feature must be enabled on the server side:

```js
const io = new Server(server, {
  connectionStateRecovery: {}
})
```

You can use `socket.disconnect()` and `socket.connect()` to connect disconnect and connect both client.
