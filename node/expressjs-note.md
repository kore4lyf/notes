# Express Js

Express Js is a fast, unopinionated, minimalist web framework for Nodejs. Express Js simplfies how web applications are created woth node js.

## Install Express

```sh
npm i express
```

## Setup

```js
import express from "express"
const app = express()

app.get("/", (req, res) => {
  res.send("Welcome to Express.js")
})

app.listen(8000, () => console.log("Server running on port: 8000"))
```

rendering HTML

```js
import express from "express"
const app = express()

app.get("/", (req, res) => {
  res.send("<h1>Welcome to Express.js</h1>")
})

app.get("/about", (req, res) => {
  res.send("<h1>About</h1>")
})

app.get("/contact", (req, res) => {
  res.send("<h1>contact</h1>")
})

app.listen(8000, () => console.log("Server running on port: 8000"))
```

## HTTP Methods

- GET (Retrieve Data)
- POST (Create/Insert Data)
- PUT (Completely Update Data)
- PATCH (Partially Update Data)
- DELETE (Delete Data)
- ALL (Any HTTP request method)

## Advanced Routing (String pattern Path)

You can also use regex too

```js
import express from "express"
const app = express()

app.get("/ab?cd", (req, res) => {
  res.send("If the user hits (acd) or (abcd) then this will run.")
})

app.get(/x/, (req, res) => {
  res.send("If the path include x, it will work")
})

// Example: users/8888
app.get(/^\/users\/[0-9][4]$/, (req, res) => {
  res.send("Working")
})

// Nested Routes
app.get("/products/iphone", (req, res) => {
  res.send("This code will run if you provide /products/iphone")
})

app.get("/products/product/product-details", (req, res) => {
  res.send("/products/product/product-details")
})

app.listen(8000, () => console.log("Server running on port: 8000"))
```

## Callbacks

`app.get()` can take multiple callbacks.

but in order to use multiple callbacks you must call `next()`, which all us to jump from one callback function to another callback function.

```js
import express from "express"
const app = express()

app.get("/single-cb", (req, res) => {
  res.send("First Callback")
})

app.get("/double-cb", 
  (req, res, next) => {
    console.log("First Callback")
    next()
  },
  (req, res) => {
    res.send("Second Callback")
  }
)

app.listen(8000, () => console.log("Server running on port: 8000"))
```

### Arrays of callback function

```js
import express from "express"
const app = express()

const cb1 = (req, res, next) => {
  console.log("First callback")
  next() // Not neccessary if we did not use res.send()
}

const cb2 = (req, res, next) {
  console.log("Second callback")
  next() // Not neccessary if we did not use res.send()
}

const cb3 = (req, res) {
  console.log("Third callback")
  res.send("Array of callbacks")
}

app.get("/array-cb", [cb1, cb2, cb3])

app.listen(8000, () => console.log("Server running on port: 8000"))
```

```js
import express from "express"
const app = express()

const cb1 = (req, res, next) => {
  console.log("First callback")
  next() // Not neccessary if we did not use res.send()
}

const cb2 = (req, res, next) {
  console.log("Second callback")
  next() // Not neccessary if we did not use res.send()
}

app.get("/array-cb", [cb1, cb2], (req, res) => {
  res.send("Final callback")
})

app.listen(8000, () => console.log("Server running on port: 8000"))
```

## Requests

```js
import express from "express"
const app = express()

app.get("/student", (req, res) => {
  res.send("All Students")
})

app.post("/student", (req, res) => {
  res.send("Add new Student")
})

app.put("/student", (req, res) => {
  res.send("Update Student")
})

app.delete("/student", (req, res) => {
  res.send("Delete Student")
})

app.listen(8000, () => console.log("Server Up!"))
```

Refactoring the code above

```js
import express from "express"
const app = express()

app
  .route("/student")
  .get((req, res) => res.send("All student"))
  .post((req, res) => res.send("Add New Student"))
  .put((req, res) => res.send("Update Student"))
  .delete((req, res) => res.send("Delete Student"))

app.listen(8000, () => console.log("Server Up!"))
```

### Best Practices

```js
// 1. Create routes folder and put your routes in a separate file
// 2. Create instance of express.Router()
// 3. Instead of app.method change that to "router.method"
// 4. Export router
// 5. Import router
// 6. Use the (app.use) built-in middleware & provide your routes
```

Create a folder called `routes/`
Create a file called `student.js`

/routes/student.js

```js
import express from "express"

const router = express.Router()

router.get("/all", (req, res) => {
  res.send("All Student")
})
router.post("/create", (req, res) => {
  res.send("Create New Student")
})
router.put("/update", (req, res) => {
  res.send("Update Student")
})
router.delete("/delete", (req, res) => {
  res.send("Delete Student")
})

export default router
```

index.js

```js
import express from "express"
import students from "./routes/student.js"

const app = express()

app.use("/students",students)

app.listen(8000, () => "Server running on ")
```

valid paths:
`http://localhost:8000/students/all` (GET Request)
`http://localhost:8000/students/create` (POST Request)
`http://localhost:8000/students/update` (PUT Request)
`http://localhost:8000/students/delete` (DELETE Request)

**Example 2:**:

/routes/teachers.js

```js
import express from "express"

const router = express.Router()

router.get("/all", (req, res) => {
  res.send("All Teacher")
})
router.post("/create", (req, res) => {
  res.send("Create New Teacher")
})
router.put("/update", (req, res) => {
  res.send("Update Teacher")
})
router.delete("/delete", (req, res) => {
  res.send("Delete Teacher")
})

export default router
```

index.js

```js
import express from "express"
import students from "./routes/students.js"
import students from "./routes/teachers.js"

const app = express()

app.use("/students",students)
app.use("/teachers",teachers)

app.listen(8000, () => "Server running on ")
```

valid paths:
`http://localhost:8000/students/all` (GET Request)
`http://localhost:8000/students/create` (POST Request)
`http://localhost:8000/students/update` (PUT Request)
`http://localhost:8000/students/delete` (DELETE Request)

`http://localhost:8000/teachers/all` (GET Request)
`http://localhost:8000/teachers/create` (POST Request)
`http://localhost:8000/teachers/update` (PUT Request)
`http://localhost:8000/teachers/delete` (DELETE Request)

### Post Request

```js
app.post("/post", (req, res) => {
  const { name, youtube, age } = req.body
  res.send(`${name}, ${youtube}, ${age}`)
})
```

When data is passed to the body of the request, it can be gotten here.
But you must have `body-parser` module installed to get the body data.

```sh
npm install body parser
```

Usage:

```js
const bodyParser = require("body-parser")
// OR
import bodyParser from "bodyParser"

app.use(bodyParser.json())
``

## Route Params

`req.params`

```js
import express from "express"

const app = express()

// Route Params
app.delete("/student/delete/:id", (req, res) => {
  res.send(req.params.id)
})

// Test (https://localhost:8000/student/delete/12)
// Result: 12
```

On can also destructure the data

```js
const { id } = req.params
```

```js
import express from "express"

const app = express()

// Route Params
app.delete("/product/:category/:id", (req, res) => {
  const { category, id } = req.params
  res.send(`Product Category (${category}) & Product ID (${id})`)
})
```

### Using app.param

```js
import express from "express"

app.param("id", (req, res, next, id) => {
  console.log(`id: ${id}`)
  next()
})

app.get("/user/:id", (req, res) => {
  console.log("This is User ID Path")
  res.send("Response OK"ss)
})
```

## Controllers

Controllers are separate files for each request in a route.

Assuming you have a file called `router/students.js` containing the following code below.

```js
import express from "express"

const router = express.Router()

router.get("/all", (req, res) => res.send("All Students"))
router.post("/create", (req, res) => res.send("Create new Student"))
router.put("/update", (req, res) => res.send("Update Student"))
router.delete("/delete", (req, res) => res.send("Delete Student"))

export default router
```

Create a new folder called controllers

`/controllers`

Create a new file called `students.js`

`/controllers/students.js`

```js
import express from "express"

const allStudents = (req, res) => {
  res.send("All students")
}

const createStudent = (req, res) => {
  res.send("Create New Student")
}

const updateStudent = (req, res) => {
  res.send("Update Students")
}

const deleteStudent = (req, res) => {
  res.send("Delete User")
}

export {
  allStudents,
  createStudent,
  updateStudent,
  deleteStudent
}
```

The `router/students.js` file will now look like this.

```js
import express from "express"
import { allStudents, createStudent, updateStudent, deleteStudent from "../controllers/students.js"

const router = express.Router()

router.get("/all", allStudents)
router.post("/create", createStudents)
router.put("/update", updateStudents)
router.delete("/delete", deleteStudents)

export default router
```

## Query Strings

```js
import express from "express"
const app = express()

app..get("/", (req, res) => {
  res.send(`Response Ok ${req.query.category}`)
})

app.listen(8000, () => console.log("Server Up!"))

// Test: http://localhost:8000/product?category=apple
// Result: Response Ok apple.

// destructuring
// const {category, id} = req.query
```

## Sending data from Server to client

create a new file called products.js

products.js

```js
const products = [{ title: "Some Title", company: "Nike" }]

export default products
```

index.js

```js
import express from "express"
import products from "./products"

const app = express()

app.get("/products", (req, res) => {
  res.json(products) // sends products to client
})

app.listen(8000, () => console.log("Server Up!"))
```

### Middlewares

Introducing Middlewares:
Middlewares can be introduced, they execute between request and response and can be use to alter or modify response.

A middleware is a javascript function, which takes 3 parameters (req, res, next).

index.js

```js
import express from "express"
import products from "./products"

const app = express()

function userCredentials(req, res, next) {
  console.log("Username: (alex)")
  console.log("Email: (alex21@gmail.com)")
  console.log("Password: (alex222333)")
  console.log("age: ((18))")
  next()
}

app.get("/", userCredentials,(req, res) => {
  res.send("<h1> Hello Admin </h1>)
})

app.listen(8000, () => console.log("Server Up!"))
```

For separation of concerns.

Create a folder called `middlewares`.

then create a file called `log.js` within in it.

middlewares/logs.js

```js
function userCredentials(req, res, next) {
  console.log("Username: (alex)")
  console.log("Email: (alex21@gmail.com)")
  console.log("Password: (alex222333)")
  console.log("age: ((18))")
  next()
}

export default userCredentials
```

index.js

```js
import express from "express"
import userCredentials from "./middlewares/logs.js"

const app = express()

// app.use(userCredentials) // allow us use or call the middleware on every route.

app.get("/", userCredentials,
  (req, res) => {
    res.send("<h1> Hello Admin </h1>")
  }
)

app.listen(8000, () => console.log("Server Up!"))
```

### Serving Static Files

```js
import express from "express"
import path from "path"

const app = express()

app.use(express.static("./public"))

app.get("/", (req, res) => {
  res.sendFile(path.join(path.join(process.cwd(), "./public/index.html")))
})
```

### Template Engines

There are different templates engines that can be used with express js.

EJS - Embedded Javascript Template Engine (`<%= EJS %>`)

EJS lets you generate HTML markup with plain javascript.

#### Installing EJS

```sh
npm install ejs
```

#### Using EJS

/index.js

```js
import express from "express"
import route from "./routes/route.js"
import {join} from "path"

const app = express()

app.set("view engine", "ejs")

app.use("/", route)

app.listen(8000, () => console.log("Server Up!"))
```

/routes/routes.js

```js
import express from "express"
import { homeController } from "../controllers/homeController.js"
import { aboutController } from "../controllers/aboutController.js"

const router = express.Router()

router.get("/", homeController)
router.get("/about", aboutController)

export default router
```

/controllers/homeController.js

```js
const homeController = (req, res) => {
  res.render("index") // ejs file named index.ejs in /views
}

export { homeController }
```

/controllers/aboutController.js

```js
const aboutController = (req, res) => {
  res.render("about")
}

export { aboutController }
```

/views/index.ejs

```html
<html lang="en">
  <head>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Home</title>
  </head>
  <body>
    <h1>Home</h1>
    <h5>This is HomePage
  </body>
</html>
```

/views/about.ejs

```html
<html lang="en">
  <head>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>About</title>
  </head>
  <body>
    <h1>About</h1>
    <h5>This is AboutPage
  </body>
</html>
```

## EJS Script

### Display a variable value on a page with EJS

/controllers/homeController.js

```js
const homeController = (req, res) => {

  const data = {
    name: "KoRe",
    userId: 20
  }

  res.render("index", data) // ejs file named index.ejs in /views
}

export { homeController }
```

/views/index.ejs

```html
<html lang="en">
  <head>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Home</title>
  </head>
  <body>
    <h1>Home</h1>
    <h2>This is HomePage </h2>
    <%= name %> <!-- KoRe -->
    <%= 2 + 5 %> <!-- 7 -->

    <!-- Conditional statments -->
    <% if(userId === 20) { %>
      <h1>User ID: <%= userId %> </h1>
    <% } else if (userId === 30) { %>
      <h2>User ID: <%= userId %></h2>
    <% } else { %>
      <h2> Nothing... </h2>
    <% } %>

    <!-- For Loop -->
    <% for(let i=1; i<= 10; i++>) { %>
      <h1> <%= i %> </h1>
    <% } %>

    <!-- For in Loop-->
     <% const data = [1, 2, 3, 4, 5] %>
     <% for (d in data) { %>
      <h1> <%= d %> </h1>
     <% } %>

  </body>
</html>
```

## Generating JWT secret

a. Using Node.js's Crypto Module

```js
import * as crypto from "crypto"
// const crypto = require("crypto")


// Generate a 256-bit (32-byte) random string, encoded in hex
const generateSecret = () => {
  return crypto.randomBytes(32).toString("hex")
}

const jwtSecret = generateSecret()
console.log("Your JWT secret: ", jwtSecret)
```

## Using a command-line tool

```sh
openssl rand -base64 32
```