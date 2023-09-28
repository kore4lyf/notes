# mongoose 

## Quick Start 

```js 
// Now say we like fuzzy kittens and want to record every kitten we ever meet in MongoDB. 

// open a connection to the test database on our locally running instance of MongoDB.

// getting-started.js
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
// For brevity, let's assume that all following code is within the main() function.


// With Mongoose, everything is derived from a Schema. Let's get a reference to it and define our kittens.

const kittySchema = new mongoose.Schema({
  name: String
});

//We've got a schema with one property, name, which will be a String. The next step is compiling our schema into a Model.
const Kitten = mongoose.model('Kitten', kittySchema);
// A model is a class with which we construct documents. 


//Let's create a kitten document representing the little guy we just met on the sidewalk outside:
const silence = new Kitten({ name: 'Silence' });
console.log(silence.name); // 'Silence' 


// Each document can be saved to the database by calling its save method. The first argument to the callback will be an error if any occurred.

await fluffy.save();
fluffy.speak();



// Kittens can meow, so let's take a look at how to add "speak" functionality to our documents:

// NOTE: methods must be added to the schema before compiling it with mongoose.model()
kittySchema.methods.speak = function speak() {
  const greeting = this.name
    ? 'Meow name is ' + this.name
    : 'I don\'t have a name';
  console.log(greeting);
};

// const Kitten = mongoose.model('Kitten', kittySchema);

//Functions added to the methods property of a schema get compiled into the Model prototype and exposed on each document instance:
const fluffy = new Kitten({ name: 'fluffy' });
fluffy.speak(); // "Meow name is fluffy" 


//Say time goes by and we want to display all the kittens we've seen. We can access all of the kitten documents through our Kitten model.

const kittens = await Kitten.find();
console.log(kittens);
//We just logged all of the kittens in our db to the console. If we want to filter our kittens by name, Mongoose supports MongoDBs rich querying syntax.

 await Kitten.find({ name: /^fluff/ });
//This performs a search for all documents with a name property that begins with "fluff" and returns the result as an array of kittens to the callback.
``` 


## Schema 
Everything in Mongoose starts with a Schema. Each schema maps to a MongoDB collection and defines the shape of the documents within that collection.

```js 
import mongoose from 'mongoose';
const { Schema } = mongoose;

const blogSchema = new Schema({
  title: String, // String is shorthand for {type: String}
  author: String,
  body: String,
  comments: [{ body: String, date: Date }],
  date: { type: Date, default: Date.now },
  hidden: Boolean,
  meta: {
    votes: Number,
    favs: Number
  }
});
``` 


The permitted SchemaTypes are:
- String
- Number
- Date
- Buffer
- Boolean
- Mixed
- ObjectId
- Array
- Decimal128
- Map
- UUID


### Creating a model 
To use our schema definition, we need to convert our blogSchema into a Model we can work with. To do so, we pass it into mongoose.model(modelName, schema):
```js
const Blog = mongoose.model('Blog', blogSchema);
// ready to go!
``` 


### Ids 
By default, Mongoose adds an _id property to your schemas.

const schema = new Schema();

schema.path('_id'); // ObjectId { ... }
When you create a new document with the automatically added _id property, Mongoose creates a new _id of type ObjectId to your document.
```js 
const Model = mongoose.model('Test', schema);

const doc = new Model();
doc._id instanceof mongoose.Types.ObjectId; // true 
``` 

You can also overwrite Mongoose's default _id with your own _id. Just be careful: Mongoose will refuse to save a document that doesn't have an _id, so you're responsible for setting _id if you define your own _id path.

```js 
const schema = new Schema({ _id: Number });
const Model = mongoose.model('Test', schema);

const doc = new Model();
await doc.save(); // Throws "document must have an _id before saving"

doc._id = 1;
await doc.save(); // works
```


## 
```js 
const schema = new Schema({
  name: String,
  binary: Buffer,
  living: Boolean,
  updated: { type: Date, default: Date.now },
  age: { type: Number, min: 18, max: 65 },
  mixed: Schema.Types.Mixed,
  _someId: Schema.Types.ObjectId,
  decimal: Schema.Types.Decimal128,
  array: [],
  ofString: [String],
  ofNumber: [Number],
  ofDates: [Date],
  ofBuffer: [Buffer],
  ofBoolean: [Boolean],
  ofMixed: [Schema.Types.Mixed],
  ofObjectId: [Schema.Types.ObjectId],
  ofArrays: [[]],
  ofArrayOfNumbers: [[Number]],
  nested: {
    stuff: { type: String, lowercase: true, trim: true }
  },
  map: Map,
  mapOfString: {
    type: Map,
    of: String
  }
});

// example use

const Thing = mongoose.model('Thing', schema);

const m = new Thing;
m.name = 'Statue of Liberty';
m.age = 125;
m.updated = new Date;
m.binary = Buffer.alloc(0);
m.living = false;
m.mixed = { any: { thing: 'i want' } };
m.markModified('mixed');
m._someId = new mongoose.Types.ObjectId;
m.array.push(1);
m.ofString.push('strings!');
m.ofNumber.unshift(1, 2, 3, 4);
m.ofDates.addToSet(new Date);
m.ofBuffer.pop();
m.ofMixed = [1, [], 'three', { four: 5 }];
m.nested.stuff = 'good';
m.map = new Map([['key', 'value']]);
m.save(callback);
```


### The type Key
type is a special property in Mongoose schemas. When Mongoose finds a nested property named type in your schema, Mongoose assumes that it needs to define a SchemaType with the given type.
```js
// 3 string SchemaTypes: 'name', 'nested.firstName', 'nested.lastName'
const schema = new Schema({
  name: { type: String },
  nested: {
    firstName: { type: String },
    lastName: { type: String }
  }
}); 
```