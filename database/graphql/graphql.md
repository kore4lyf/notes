# Graphql

GraphQL is a powerful query language.
ALlows for a more flexible and efficient approach than REST.

**A Restful approach**:

- Endpoint for getting a particular book:
  domain.com/books/:id
  returns title, genre, reviews, authorId

- Endpoint for getting the author info of that book:
  domain.com/authors/:id
  returns name, age, biography, booksIds

**A GraphQL approach**:

- Query to get book data and it's author data ( and the other books)

```js
{
  book(id: 123){
    title
    genre
    reviews
    author {
      name
      bio
      books {
        name
      }
    }
  }
}
```

We can also modify the request, depending on the result you are looking for.

```js
{
  book(id: 123) {
    title
    author {
      name
      books {
        name
      }
    }
  }
}
```

In summary GraphQL gives us a more flexible approach to managing data than to Rest

We imagine GraphQL as a graph that has entry points, where data can only be fetch from a starting point then other details pertaining to entry point can be fetched. For our previous examples we can have two entry point `author(id: 123)` where we can fetch information about the author and other books written by an author. We can also have another entry point `Book(id: 123)` where we can get the details like title and genre of a book, information about the author and books written by the author.

GraphQL is platform agnostic, which means you don't have to use it with certain technology.

> GraphiQL can be use to test a graphql request

The entry points are called root queries.

## Installing GraphQL

```sh
npm i graphql express-graphql
```

Express doesn't understand graphql, express-graphql lets us use graphql on our express server.

server/app.js

```js
const express = require("express")
const graphqlHTTP = require("express-graphql")

const app = express()
const PORT = 3000

app.use("/graphql", graphqlHTTP({
  
}))

app.listen(PORT, () => console.log("Server running on port: ", PORT))

```

server/schema/schema.js

```js
const graphql = require("graphql")

const { GraphQLObjectType, GraphQLString } = graphql

const BookType = new GraphQLObjectType({
  name: "Book",
  fields: () => ({
    id: {
      type: { type: GraphQLString },
      name: { type: GraphQLString },
      genre: { type: GraphQLString }
    }
  })
})
```

A schema file has 3 responsibilities.

1. Define types
2. Define relation between types
3. Define root queries ( Root queries define how users enter the data )