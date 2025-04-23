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

## Emitting Events

Emitting events allows us to send data from one side (client or server) to the other. It's a fundamental feature of real-time communication.

```js
client.emit("message", "Welcome to the server!")
```

The message event here is can be could be written as any thing e.g. "text".

To get the response on the client, we listen to a message event on the client.

```js
socket.on("message", (message) => {
  console.log(message)
})
```