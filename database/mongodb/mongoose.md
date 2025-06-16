# Mongoose

```url
mongodb+srv://kore4lyf:<password>@nodejstest.xdcuxj1.mongodb.net/?retryWrites=true&w=majority
```

- Mongoose is an Object Data Modelling (ODM) library for Node.js and MongoDB.
- It manages relationships between data, and provides schema validation, and is used to translate between objects in code and the representation of those objects in MongoDB.
- **Mongoose makes it easier to work with MongoDB in Node.js by providing a higher-level abstraction layer.**

**Why Mongoose**:

- Simplifies working with MongoDB: Mongoose provides an easy-to-use API that simplifies many common tasks when working with MongoDB, such as querying and updating data.
- Schema definition: Mongoose allows you to define a schema for your data, which can help enforce consistency and reduce errors.
- Validation: Mongoose provides built-in validation for your data, allowing you to ensure that incoming data meets certain requirements before saving it to the database.
- Middleware support: Mongoose supports middleware functions, allowing you to hook into certain events in the data lifecycle and perform custom logic.

## Mongoose Live App Test

```sh
npm i express nodemon mongoose dotenv
```

## Schema

Mongoose schema is a blueprint that defines the structure of a document in a MongoDB database collection. It defines the fields, their data types, and any additional options such as default values, validation rules, and indexes.

### Creating Schema

Example 1:

```js
import mongoose from "monogoose"

const schema = new mongoose.Schema({
  // key: type,
  keyTwo: { type: String}
})
```

### Types

- Number
- String
- Boolean
- Data
- Array

Example 2:

```js
const moviesSchema = new mongoose.Schema({
  name: { type: String, required: true, tring: true },
  ratings: { type: Number, required: true, min: 1, max: 1},
  money: {
    type: mongoose.Decimal128,
    required: true,
    validate: (v) => v >= 10
  },
  genre: { type: Array },
  isActive: { type: Boolean },
  comments: [
    { value: { type: String }, publish: { type: Data, dafault: Data.now }},
  ]
})
```

### Model

A model is a constructor function that represents a collection in MongoDB and defines the schema for each document.

```js
import mongoose from "mongoose"

// Define a schema for a user collection
const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  age: Number
})

// Create a model for the "users" collection using the schema
const User = mongoose.model("User", userSchema)

export default User
```

> NB: "User" will be converted to "users" by mongoose.

Inserting a document to database

```js
// Define a schema for a users collection
const userSchema = new mongoose.Schema({ name: String })

// Create a model for the users collection using the schema
const User = mongoose.model("User", userSchema)

// Create a new instance of the user model with the data you want to store in the document
const newUser = new User({ name: "John Doe" })

// Save the new user document to the database using the save() method.
newUser.save((err) => (err ? console.log(err) : console.log("User Saved")))
```

## Example: Movies

```js
import mongoose from "mongoose"

// Define Schema
const movieSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true},
  rating: { type: Number, required: true, min: 1, max: 9 },
  money: {
    type: mongoose.Decimal128,
    required: true,
    validate: v => v >= 10
  },
  genre: { type: Array },
  isActive: { type: Boolean },
  comments: [
    { 
      value: { type: String},
      published: {
        type: Date,
        default: Date.now
      }
    }
  ]
})

// Creating Model
const MovieModel = mongoose.model("Movie", movieSchema)

const createMovie = async () => {
  try {
    // Creating new document
    const movie = new MovieModel({
      name: "Extraction 2",
      rating: 5,
      money: 50000,
      genre: ["action", "romance", "adventrue"],
      isActive: true,
      comments: [ { value: "That was an amazing MovieModel." } ]
    })

    // const result = await movie.save()
    // console.log(result)
  } catch (error) {
    console.log(error)
  }
}

const insertManyMovies = async () => {
  try {
    // Creating new document
    const movie1 = new MovieModel({
      name: "Extraction 2",
      rating: 5,
      money: 50000,
      genre: ["action", "romance", "adventure"],
      isActive: true,
      comments: [ { value: "That was an amazing MovieModel." } ]
    })
    
    const movie2 = new MovieModel({
      name: "Big 5",
      rating: 5,
      money: 25000,
      genre: ["action", "romance", "adventure"],
      isActive: true,
      comments: [ { value: "Amazing MovieModel." } ]
    })

    // const result = await MovieModel.insertMany([movie1, movie2])
    // console.log(result)
  } catch (error) {
    console.log(error)
  }  
}

// Fetching all movies
const allMovies = async () => {
  try {
    const result = await MovieModel.find()
    console.log(result)
  } catch (error) {
    console.log(error)
  }
}

// Fetching a movie by name
const findMovieByName = async (movieName) => {
  try {
    const result = await MovieModel.find({name: movieName})
    console.log(result)
  } catch (error) {
    console.log(error)
  }
}
  // Fetching a movie by id (return a single object not an array)
const findMovieById = async (movieId) => {
  try {
    const result = await MovieModel.findById(movieId)
    // const result = await MovieModel.findById(movieId, "name") // You can also specify a specific key you are interested in
    console.log(result)
  } catch (error) {
    console.log(error)
  }
}

// count
// const result = await MovieModel.find().countDocuments()

// sort
// const result = await MovieModel.find().sort({name: 1})

// limit
// const result = await MovieModel.find().limit(2)

// skip
// const result = await MovieModel.find().skip(3)

// Comparison
// const result = await MovieModel.find({ money: { $gt: 6000 }})
// const result = await MovieModel.find({ money: { $ne: 6000 }}) // don't include document where value is equal to 6000
// const result = await MovieModel.find({ money: { $and: [{money: 6000}, {rating: 4}] }}) // Find all where money is 6000 and rating is 4
// const result = await MovieModel.find({ money: { $or: [{money: 6000}, {rating: 4}] }}) //  Find all where money is 6000 or rating is 4


const updateById = async (id) => {
  try {
    const result = await MovieModel.updateOne({_id: id}, {name: "Kore"})
    console.log(result)
  } catch (error) {
    console.log(error)
  }
}

const updateMany = async () => {
  try {
    const result = await MovieModel.updateMany({rating: 5}, {name: "5 start movies"})
    console.log(result)
  } catch (error) {
    console.log(error)
  }
}

const deleteOne = async () => {
  try {
    const result = await MovieModel.deleteOne({name: "5 start movies"})
    console.log(result)
  } catch (error) {
    console.log(error)
  }
}

const deleteMany = async () => {
  try {
    const result = await MovieModel.deleteMany({rating: 4})
    console.log(result)
  } catch (error) {
    console.log(error)
  }
}

export {
  createMovie,
  insertManyMovies,
  allMovies,
  findMovieByName,
  findMovieById,
  updateById,
  updateMany
}
```