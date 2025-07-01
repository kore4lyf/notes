# GraphQL Server with Apollo Server

```sh
npm i -D nodemon graphql @apollo/server
```

Apollo server will be used to create and run the graphql server.

index.js
```js
import { ApolloServer } from "@apollo/server"
```

Brings the apollo instance from the apollo library.
ApolloServer lets us create a graphql server.

```js
import { startStandaloneServer } from "@apollo/server/standalone"
```

```js
const server = new ApolloServer({ // Graphql Server instance
  typeDefs,
  resolvers
})
```

Import a standalone server to start the server quickly.
without needing extra setup like Express js.

Every GraphQL server needs:

- typeDefs
- resolvers

```js
const { url } = await startStandaloneServer(server, { 
  listen: { port: 4000 }
});
console.log(`Server ready at: ${url}`)
```

start server instance.

typeDefs is used to define the type of data the api can work with, it's like a blue print for your data.(What can be requested or changed in the system).
e.g. imagine you are at a restaurant and the menu is the typeDefs of the restaurant.

## Defining a typeDefs

```js
const server = new ApolloServer({ // Graphql Server instance
  typeDefs: '#graphql
    type Query {
      hello: String
    }
  ',
  resolvers
})
```

`#graphql` is used to specify that we are defining a type def.

## Resolvers

Resolvers are functions that provides the actual data for the queries or changes requested based on the typesDefs.
For example:
Imagine you are at a restaurant and the menu is the typeDefs of the restaurant & resolvers are the chefs in the kitchen who actually prepare the food (data) when you place an order (make a query or mutation)

```js
const server = new ApolloServer({ // Graphql Server instance
  typeDefs: `#graphql
    type Query {
      hello: String
    }
  `,
  resolvers: {
    Query: {
      hello: () => "Hello world"
    }
  }
})
```

when you run:

```json
query {
  hello
}
```

result:

```json
{
  "data": {
    "hello": "Hello world"
  }
}
```

## Scalar type definition

Scalar Types:

- String
- Boolean
- Int
- Float
- ID
- enum

```js
const server = new ApolloServer({ // Graphql Server instance
  typeDefs: `#graphql
    type Query {
      id: ID!,
      name: String,
      age: Int,
      inActive: Boolean,
      height: Float
    }
  `,
  resolvers: {
    Query: {
      id: () => "1",
      name: () => "John Doe",
      age: () => 30,
      inactive: () => true,
      height: () => 5.6
    }
  }
})
```

{
  "data": {
    "id": "1",
      "name": "John Doe",
      "age": 30,
      "height": 5.6
  }
}

### enum

One way to implement this validation is adding a check against an array of allowed values as part of the issueAdd resolver. But the GraphQL schema itself gives us an automatic way of doing this via enumeration types or enums.

```js
enum Color {
  Red
  Green
  Blue
}
```

Example:

```js
enum StatusType {
  New
  Assigned
  Fixed
  Closed
}

type Issue {
  ...
  status: StatusType!
  ...
}
```

One notable feature of the GraphQL schema is that it allows us to supply default values in case the input has not given a value for an argument. This can be done by adding an = symbol and the default value after the type specification, like owner: String = "Self". In the case of status, the default value is an enum, so it can be specified without the quotes like this:

```js
status: StatusType = New
```

## Custom Types

```js
typeDefs: `#graphql
  type Post {
    id: ID!,
    title: String!,
    body: String!,
    tags: [String]
  }
  
  type Query {
    posts: [Post]
  }
`
```

You must have at least the one query type.

request:

```js
{
  posts {
    id,
    title,
    body,
    tags
  }
}
```

result:

```json
{
  "data": {
    "post": [
      {
        "id": "1",
        "title": "post 1",
        "body": "Body of post 1",
        "tags": ["tag1", "tags2"]
      },
      {
        "id": "2",
        "title": "post 2",
        "body": "Body of post 2",
        "tags": ["tag1", "tags2"]
      }
    ]
  }
}
```

## Operational Arguments

Operational Arguments aka operation variables are value passed to a query, mutation to customize its behavior at runtime.

For Example:
Imagine you are at a juice bar.
"I want an orange Juice, medium size, with no Ice"

arguments here include:
flavor (orange)
size (medium)
iced (no ice)

```js
typeDefs: `#graphql
  type Query {
    greetings(name: String): String!
  }
`

resolvers: {
  Query: {
    greetings(parent, args, ctx, info) {
      console.log(args)
      return `Hello ${args.name}`
    }
  }
}
```

- parent: refers to the parent field
- args: contains the argument passed to the field
- ctx: useful for sharing data auth
- info: information about the execution state fo the query

use:

```js
{
  greetings(name: "Jordan")
}
```

Result:

{
  "data": {
    "greetings": "Hello Jordan"
  }
}

```js
typeDefs: `#graphql
  type Query {
    greetings(name: String): String!,
    add(a: Int!, b: Int!): Int
  }
`

resolvers: {
  Query: {
    greetings(parent, args, ctx, info) {
      console.log(args)
      return `Hello ${args.name}`
    },
    add: (_, {a, b}) => a * b
  }
}
```

use:

```js
{
  greetings(name: "Jordan"),
  add(a: 10, b: 20)
}
```

Result:

```json
{
  "data": {
    "greetings": "Hello Jordan",
    "add": 30
  }
}
```

## Using array

```json
typeDefs: `#graphql
  type Query {
    greetings: [String],
    luckyNumbers: [Int],
    temperatures: [Float],
    flags: [Boolean],
    ids: [ID]
  }
`
```

```json
resolvers: {
  Query: {
    greetings: () => ["Hello", "Hi", "Hey"],
    luckyNumbers: () => [3, 7, 13],
    temperatures: () => [23.5, 23.8, 21.9],
    flags: () => [true, flase, true],
    ids: () => ["id_1", "id_2", "id_3"]
  }
}
```

Use:

```json
query {
  greetings,
  luckyNumbers,
  temperatures,
  flags,
  ids
}
```

Result:

```json
{
  "data": {
    "greetings": [
    "Hello",
    "Hi",
    "Hey"
   ],
   "luckyNumbers": [ 3, 7, 13],
   "temperatures": [ 22.5, 23.8, 21.9],
   "flags": [ true, false, true],
   "ids": [ "id_1", "id_2", "id_3"]
  }
}
```

## Relationship

A relationship is when one type is connected to another type.
e.g.
Imagine you have two types: User and Post

```json
type User {
  id: ID!,
  name: String!,
  posts: [Post!]!
}

type Post {
  id: ID!,
  title: String!,
  content: String!,
  author: User!
}
```

A user has many Post: `posts: [Post!]!`
each post belongs to a single `author: User!`

```json
typeDefs: `#graphql
  type User {
    id: ID!,
    name: String!
    posts: [Post!]!
  }
  
  type Post {
    id: ID!,
    title: String!,
    content: String,
    author: User!
  }
  
  type Query {
    users: [User!]!,
    posts: [Post!]!
  }
```

```json
resolvers: {
  Query: {
    users: () => users,
    posts: () => posts
  },
  User: {
    posts: (parent) => 
      posts.filter((post) => 
        post.authorId === parent.id)
  },
  Post: {
    author: (parent) =>
      users.find((user) => 
      user.id === parent.authorId)
  }
}
```

Use:

```json
query {
  users {
    name,
    posts {
      title
    }
  }
}
```

another query:

```json
query {
  posts {
    title,
    author {
      name
    }
  }
}
```

## Mutation

A mutation is used to change data, like creating, updating, or deleting something.

NB:

- Queries are for reading data
- Mutations are for writing data

For example, If you want to add a new user, you will be using mutation.

```json
typeDefs: `#graphql
  type User {
    id: ID!,
    firstName: String!,
    lastName: String!,
    email: String!
    password: String!
  }
  
  type Query {
    users: [User!]!
  }
  
  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): User!
  }
`

resolvers: {
  Query: {
    users: () => users,
  },
  Mutation: {
    addUser: (_, {
      firstName,
      lastName,
      email,
      password
    }) => {
      const newUser = {
        id: idCounter++,
        firstName,
        lastName,
        email,
        password
      }
      
      users.push(newUser)
      return newUser
    }
  }
}
```

use:

```json
mutation {
  addUser (
    firstName: "John",
    lastName: "Doe",
    email: "john@example.com",
    password: "Secure123"
  ) {
    id,
    firstName,
    lastName,
    email
  }
}
```

response:

```json
{
  "data": {
    "id": "1",
    "firstName": "John",
    "lastName": "Doe",
    "email": "john@example.com"
  }
}
```

### Input Types

An input type is like a custom object you define to group multiple arguments together.
Instead of sending 4 or 5 separate fields directly into a mutation, you can wrap them all inside one object.
This helps keep your schema cleaner especially when you have large or complex inputs.

```json
typeDefs: `#graphql
  type User {
    id: ID!,
    firstName: String!,
    lastName: String!,
    email: String!
    password: String!
  }
  
  type Query {
    users: [User!]!
  }
  
  input AddUserInput {
    firstName: String!,
    lastName: String!,
    email: String!,
    password: String!
  }
  
  type Mutation {
    addUser(input: AddUserInput!): User!
  }
`

resolvers: {
  Query: {
    users: () => users,
  },
  Mutation: {
    addUser: (_, { input }) => {
      const { firstName, lastName, email, password } = input
      
      if (users.find((user) =. user.email === email))){
        throw new Error("User already exists")
      }
      
      const newUser = {
        id: idCounter++,
        firstName,
        lastName,
        email,
        password
      }
      
      users.push(newUser)
      return newUser
    }
  }
}
```

### Delete User with Mutation

```json
typeDefs: `#graphql
  type User {...}
  type Query {...}
  input AddUserInput {...}
  
  type Mutation {
    addUser(input: AddUserInput!): User!,
    deleteUser(id: ID!): User!
  }
`

resolvers: {
  deleteUser: (_, {id}) => {
    const userIndex = users.findIndex(
      (user) => String(user.id) === String(id))
  
  
  if(userIndex === -1) {
    throw new Error("User not found")
  }
  
  const deleteUser = users[userIndex]
  users.splice(userIndex, 1)
  return deleteUser
}
}
```

### Updating data with Mutation

```JS
typeDefs: `#graphql
  type User {...}
  type Query {...}
  input AddUserInput {...}
  
  input UpdateUserInput {
    firstName: String,
    lastName: String,
    email: String,
    password: String
  }
  
  type Mutation {
    addUser(input: AddUserInput!): User!,
    deleteUser(id: ID!): User!,
    updateUser(id: ID!, input: UpdateUserInput!): User!
  }
`

resolvers: {
  addUser: (_ {input}) => {...},
  deleteUser: (_, {id}) => {...},
  updateUser: (_, {id, input}) => {
    const user = users.find(
      (user) => String(user.id) === String(id))
  
    if(!user) {
      throw new Error("User not found")
    }
  
  Object.assign(user, input)
  return user
}
```

## Examples

```js
import express from 'express'
import { ApolloServer } from "@apollo/server"
import { startStandaloneServer } from "@apollo/server/standalone"

let aboutMessage = "Issue Tracker API v1.0";

const typeDefs = `
  type Query {
    about: String!
  }

  type Mutation {
    setAboutMessage(message: String!): String
  }
`;

const resolvers = {
  Query: {
    about: () => aboutMessage,
  },
  Mutation: {
    setAboutMessage,
  },
};
  
function setAboutMessage(_, { message }) {
  return aboutMessage = message;
}


const server = new ApolloServer({
  typeDefs,
  resolvers
})

const { url } = await startStandaloneServer(server, { 
  listen: { port: 8000 }
});
console.log(`Server ready at: ${url}`)
```

Request

```json
query {
  about
}
```

Result:

```json
{
  "data": {
    "about": "Issue Tracker API v1.0"
  }
}
```

Request:

```json
mutation {
  setAboutMessage(message: "Hello World!")
}
```

Result:

```json
{
  "data": {
    "setAboutMessage": "Hello World!"
  }
}
```

## Schema files

Create a file called `schema.graphql` move the contents of the string `typeDefs` into it. The new file, `schema.graphql`.

/schema/schema.graphql

```graphql
type Query {
  about: string
}

type Mutation {
  setAboutMessage(message: String!): String
}
```

server.js

```js
const fs = require('fs');

const typeDefs = fs.readFileSync('./schema/schema.graphql', 'utf-8')
```

final

```js
import { ApolloServer } from "@apollo/server"
import { startStandaloneServer } from "@apollo/server/standalone"
import fs from "fs"

let aboutMessage = "Issue Tracker API v1.0";

const typeDefs = fs.readFileSync('./schema/schema.graphql', 'utf-8')

const resolvers = {
  Query: {
    about: () => aboutMessage,
  },
  Mutation: {
    setAboutMessage,
  },
};
  
function setAboutMessage(_, { message }) {
  return aboutMessage = message;
}


const server = new ApolloServer({
  typeDefs,
  resolvers
})

const { url } = await startStandaloneServer(server, { 
  listen: { port: 8000 }
});
console.log(`Server ready at: ${url}`)
```

### Example 2

```graphql
type Issue {
  id: Int!
  title: String!
  status: String!
  owner: String
  effort: Int
  created: String!
  due: String
}

##### Top level declarations

type Query {
  about: String!
  issueList: [Issue!]!
}

type Mutation {
  setAboutMessage(message: String!): String
}
```

/server/server.js

```js
import { ApolloServer } from "@apollo/server"
import { startStandaloneServer } from "@apollo/server/standalone"
import fs from "fs"

let aboutMessage = "Issue Tracker API v1.0";

const issuesDB = [
  {
    id: 1,
    status: "New",
    owner: "Ravan",
    effort: 5,
    created: new Date("2019-01-15"),
    due: undefined,
    title: "Error in console when clicking Add",
  },
  {
    id: 2,
    status: "Assigned",
    owner: "Eddie",
    effort: 14,
    created: new Date("2019-01-16"),
    due: new Date("2019-02-01"),
    title: "Missing bottom border on panel",
  },
];

const typeDefs = fs.readFileSync('./schema/schema.graphql', 'utf-8')

const resolvers = {
  Query: {
    about: () => aboutMessage,
    issueList,
  },
  Mutation: {
    setAboutMessage,
  }
};
  
function setAboutMessage(_, { message }) {
  return aboutMessage = message;
}

function issueList() {
  return issuesDB;
}


const server = new ApolloServer({
  typeDefs,
  resolvers
})

const { url } = await startStandaloneServer(server, { 
  listen: { port: 8000 }
});
console.log(`Server ready at: ${url}`)
```

Testing:

```json
query {
  issueList {
    id
    title
    created
  }
}
```

Result:

```json
{
  "data": {
    "issueList": [
      {
        "id": 1,
        "title": "Error in console when clicking Add",
        "created": "1547510400000"
      },
      {
        "id": 2,
        "title": "Missing bottom border on panel",
        "created": "1547596800000"
      }
    ]
  }
}
```

## Fetching Data from graphql with fetch

```js
const query = `query {
  issueList {
    id title status owner due
  }
}`

const response = await fetch('http://localhost:8000/graphql', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json'},
  body: JSON.stringify({ query })
});

const result = await response.json()

console.log(result.data.issueList)
```

Creating/Updata data:

schema.graphql

```js
input IssueInputs {
  title: String!
  "Optional, if not supplied, will be set to 'New'"
  status: String
  owner: String
  effort: Int
  due: GraphQLDate
}

##### Top level declarations

type Mutation {
  setAboutMessage(message: String!): String
  issueAdd(issue: IssueInputs!): Issue!
}
```

Resolvers:

```js
function issueAdd(_, { issue }) {
  issue.created = new Date();
  issue.id = issuesDB.length + 1

  if (issue.status == undefined) issue.status =
'New';

  issuesDB.push(issue);
  return issue;
},

Mutation: {
  setAboutMessage,
  issueAdd,
},
```

testing:

```js
async createIssue(issue) {
  const query = `mutation {
    issueAdd(issue:{
      title: "${issue.title}",
      owner: "${issue.owner}",
      due: "${issue.due.toISOString()}",
    }) { id }
  }`;

  const response = await fetch('/graphql', 
  { 
    method: 'POST', 
    headers: { 'Content-Type': 'application/json'},
    body: JSON.stringify({ query })
  });

  this.loadData();
}
```

## Catching Errors

```js
try {
  const response = await fetch('/graphql', {
    ...
  });
  ...
} catch (e) {
  alert(`Error in sending data to server:
  ${e.message}`);
}
```
