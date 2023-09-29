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


## Models
Models are fancy constructors compiled from Schema definitions. An instance of a model is called a document. 

### Compiling your first model
When you call mongoose.model() on a schema, Mongoose compiles a model for you.

```js 
const schema = new mongoose.Schema({ name: String, size: String });
const Tank = mongoose.model('Tank', schema);
``` 

The first argument is the singular name of the collection your model is for. Mongoose automatically looks for the plural, lowercased version of your model name. Thus, for the example above, the model Tank is for the tanks collection in the database.


### Constructing Documents
An instance of a model is called a document. Creating them and saving to the database is easy.

```js 
const Tank = mongoose.model('Tank', yourSchema);

const small = new Tank({ size: 'small' });
await small.save();

// or

await Tank.create({ size: 'small' });

// or, for inserting large batches of documents
await Tank.insertMany([{ size: 'small' }]);
``` 

Note that no tanks will be created/removed until the connection your model uses is open. Every model has an associated connection. When you use mongoose.model(), your model will use the default mongoose connection.
```js 
await mongoose.connect('mongodb://127.0.0.1/gettingstarted');
```

If you create a custom connection, use that connection's model() function instead.
```js 
const connection = mongoose.createConnection('mongodb://127.0.0.1:27017/test');
const Tank = connection.model('Tank', yourSchema);
```



### Querying
Finding documents is easy with Mongoose, which supports the rich query syntax of MongoDB. Documents can be retrieved using a model's `find`, `findById`, `findOne`, or `where` static functions.

```js 
await Tank.find({ size: 'small' }).where('createdDate').gt(oneYearAgo).exec();
``` 

### Deleting
Models have static `deleteOne()` and `deleteMany()` functions for removing all documents matching the given filter.

```js
await Tank.deleteOne({ size: 'large' });
```


### Updating
Each model has its own update method for modifying documents in the database without returning them to your application. See the API docs for more detail.

```js 
// Updated at most one doc, `res.nModified` contains the number
// of docs that MongoDB updated
await Tank.updateOne({ size: 'large' }, { name: 'T-90' });
``` 
If you want to update a single document in the db and return it to your application, use `findOneAndUpdate` instead.


### Change Streams
Change streams provide a way for you to listen to all inserts and updates going through your MongoDB database. Note that change streams do not work unless you're connected to a MongoDB replica set.
```js 
async function run() {
  // Create a new mongoose model
  const personSchema = new mongoose.Schema({
    name: String
  });
  const Person = mongoose.model('Person', personSchema);

  // Create a change stream. The 'change' event gets emitted when there's a
  // change in the database
  Person.watch().
    on('change', data => console.log(new Date(), data));

  // Insert a doc, will trigger the change stream handler above
  console.log(new Date(), 'Inserting doc');
  await Person.create({ name: 'Axl Rose' });
} 
```
The output from the above async function will look like what you see below.

2018-05-11T15:05:35.467Z 'Inserting doc'
2018-05-11T15:05:35.487Z 'Inserted doc'
2018-05-11T15:05:35.491Z { _id: { _data: ... },
  operationType: 'insert',
  fullDocument: { _id: 5af5b13fe526027666c6bf83, name: 'Axl Rose', __v: 0 },
  ns: { db: 'test', coll: 'Person' },
  documentKey: { _id: 5af5b13fe526027666c6bf83 } }
You can read more about change streams in mongoose in this blog post.

### Views
MongoDB Views are essentially read-only collections that contain data computed from other collections using aggregations. In Mongoose, you should define a separate Model for each of your Views. You can also create a View using createCollection().

The following example shows how you can create a new RedactedUser View on a User Model that hides potentially sensitive information, like name and email.

// Make sure to disable `autoCreate` and `autoIndex` for Views,
// because you want to create the collection manually.
```js
const userSchema = new Schema({
  name: String,
  email: String,
  roles: [String]
}, { autoCreate: false, autoIndex: false });
const User = mongoose.model('User', userSchema);

const RedactedUser = mongoose.model('RedactedUser', userSchema);

// First, create the User model's underlying collection...
await User.createCollection();
// Then create the `RedactedUser` model's underlying collection
// as a View.
await RedactedUser.createCollection({
  viewOn: 'users', // Set `viewOn` to the collection name, **not** model name.
  pipeline: [
    {
      $set: {
        name: { $concat: [{ $substr: ['$name', 0, 3] }, '...'] },
        email: { $concat: [{ $substr: ['$email', 0, 3] }, '...'] }
      }
    }
  ]
});

await User.create([
  { name: 'John Smith', email: 'john.smith@gmail.com', roles: ['user'] },
  { name: 'Bill James', email: 'bill@acme.co', roles: ['user', 'admin'] }
]);

// [{ _id: ..., name: 'Bil...', email: 'bil...', roles: ['user', 'admin'] }]
console.log(await RedactedUser.find({ roles: 'admin' }));
``` 

Note that Mongoose does not currently enforce that Views are read-only. If you attempt to save() a document from a View, you will get an error from the MongoDB server. 



## Queries 
Mongoose models provide several static helper functions for CRUD operations. Each of these functions returns a mongoose Query object.

- Model.deleteMany()
- Model.deleteOne()
- Model.find()
- Model.findById()
- Model.findByIdAndDelete()
- Model.findByIdAndRemove()
- Model.findByIdAndUpdate()
- Model.findOne()
- Model.findOneAndDelete()
- Model.findOneAndRemove()
- Model.findOneAndReplace()
- Model.findOneAndUpdate()
- Model.replaceOne()
- Model.updateMany()
- Model.updateOne() 

A mongoose query can be executed in one of two ways. 
A query also has a .then() function, and thus can be used as a promise.



### Executing
When executing a query, you specify your query as a JSON document. The JSON document's syntax is the same as the MongoDB shell.
```js 
const Person = mongoose.model('Person', yourSchema);

// find each person with a last name matching 'Ghost', selecting the `name` and `occupation` fields
const person = await Person.findOne({ 'name.last': 'Ghost' }, 'name occupation');
// Prints "Space Ghost is a talk show host".
console.log('%s %s is a %s.', person.name.first, person.name.last, person.occupation);
```
What person is depends on the operation: For `findOne()` it is a potentially-null single document, `find()` a list of documents, `count()` the number of documents, `update()` the number of documents affected, etc. The API docs for Models provide more details.

Now let's look at what happens when no await is used:
```js 
// find each person with a last name matching 'Ghost'
const query = Person.findOne({ 'name.last': 'Ghost' });

// selecting the `name` and `occupation` fields
query.select('name occupation');

// execute the query at a later time
const person = await query.exec();
// Prints "Space Ghost is a talk show host."
console.log('%s %s is a %s.', person.name.first, person.name.last, person.occupation);
``` 
In the above code, the query variable is of type Query. A Query enables you to build up a query using chaining syntax, rather than specifying a JSON object. The below 2 examples are equivalent.

```js 
// With a JSON doc
await Person.
  find({
    occupation: /host/,
    'name.last': 'Ghost',
    age: { $gt: 17, $lt: 66 },
    likes: { $in: ['vaporizing', 'talking'] }
  }).
  limit(10).
  sort({ occupation: -1 }).
  select({ name: 1, occupation: 1 }).
  exec();

// Using query builder
await Person.
  find({ occupation: /host/ }).
  where('name.last').equals('Ghost').
  where('age').gt(17).lt(66).
  where('likes').in(['vaporizing', 'talking']).
  limit(10).
  sort('-occupation').
  select('name occupation').
  exec();
  ``` 
  
  ### Queries are Not Promises
Mongoose queries are not promises. Queries are thenables, meaning they have a .then() method for async/await as a convenience. However, unlike promises, calling a query's .then() executes the query, so calling then() multiple times will throw an error.
```js
const q = MyModel.updateMany({}, { isDeleted: true });

await q.then(() => console.log('Update 2'));
// Throws "Query was already executed: Test.updateMany({}, { isDeleted: true })"
await q.then(() => console.log('Update 3')); 
``` 



### Streaming
You can stream query results from MongoDB. You need to call the Query#cursor() function to return an instance of QueryCursor.
```js
const cursor = Person.find({ occupation: /host/ }).cursor();

for (let doc = await cursor.next(); doc != null; doc = await cursor.next()) {
  console.log(doc); // Prints documents one at a time
}
``` 

Iterating through a Mongoose query using async iterators also creates a cursor.

```js 
for await (const doc of Person.find()) {
  console.log(doc); // Prints documents one at a time
}
```
Cursors are subject to cursor timeouts. By default, MongoDB will close your cursor after 10 minutes and subsequent next() calls will result in a MongoServerError: cursor id 123 not found error. To override this, set the noCursorTimeout option on your cursor.

```js
// MongoDB won't automatically close this cursor after 10 minutes.
const cursor = Person.find().cursor().addCursorFlag('noCursorTimeout', true);
```



### Versus Aggregation
Aggregation can do many of the same things that queries can. For example, below is how you can use aggregate() to find docs where name.last = 'Ghost':
```js 
const docs = await Person.aggregate([{ $match: { 'name.last': 'Ghost' } }]);
```
However, just because you can use aggregate() doesn't mean you should. In general, you should use queries where possible, and only use aggregate() when you absolutely need to.

Unlike query results, Mongoose does not hydrate() aggregation results. Aggregation results are always POJOs, not Mongoose documents.

```js
const docs = await Person.aggregate([{ $match: { 'name.last': 'Ghost' } }]);

docs[0] instanceof mongoose.Document; // false
``` 

Also, unlike query filters, Mongoose also doesn't cast aggregation pipelines. That means you're responsible for ensuring the values you pass in to an aggregation pipeline have the correct type.
```js
const doc = await Person.findOne();

const idString = doc._id.toString();

// Finds the `Person`, because Mongoose casts `idString` to an ObjectId
const queryRes = await Person.findOne({ _id: idString });

// Does **not** find the `Person`, because Mongoose doesn't cast aggregation
// pipelines.
const aggRes = await Person.aggregate([{ $match: { _id: idString } }]);
Sorting
Sorting is how you can ensure you query results come back in the desired order.

const personSchema = new mongoose.Schema({
  age: Number
});

const Person = mongoose.model('Person', personSchema);
for (let i = 0; i < 10; i++) {
  await Person.create({ age: i });
}

await Person.find().sort({ age: -1 }); // returns age starting from 10 as the first entry
await Person.find().sort({ age: 1 }); // returns age starting from 0 as the first entry
When sorting with mutiple fields, the order of the sort keys determines what key MongoDB server sorts by first.

const personSchema = new mongoose.Schema({
  age: Number,
  name: String,
  weight: Number
});

const Person = mongoose.model('Person', personSchema);
const iterations = 5;
for (let i = 0; i < iterations; i++) {
  await Person.create({
    age: Math.abs(2 - i),
    name: 'Test' + i,
    weight: Math.floor(Math.random() * 100) + 1
  });
}

await Person.find().sort({ age: 1, weight: -1 }); // returns age starting from 0, but while keeping that order will then sort by weight.
```
You can view the output of a single run of this block below. As you can see, age is sorted from 0 to 2 but when age is equal, sorts by weight.
```js
[
  {
    _id: new ObjectId('63a335a6b9b6a7bfc186cb37'),
    age: 0,
    name: 'Test2',
    weight: 67,
    __v: 0
  },
  {
    _id: new ObjectId('63a335a6b9b6a7bfc186cb35'),
    age: 1,
    name: 'Test1',
    weight: 99,
    __v: 0
  },
  {
    _id: new ObjectId('63a335a6b9b6a7bfc186cb39'),
    age: 1,
    name: 'Test3',
    weight: 73,
    __v: 0
  },
  {
    _id: new ObjectId('63a335a6b9b6a7bfc186cb33'),
    age: 2,
    name: 'Test0',
    weight: 65,
    __v: 0
  },
  {
    _id: new ObjectId('63a335a6b9b6a7bfc186cb3b'),
    age: 2,
    name: 'Test4',
    weight: 62,
    __v: 0
  }
]; 
``` 




## Validation
Before we get into the specifics of validation syntax, please keep the following rules in mind:

Validation is defined in the SchemaType
Validation is middleware. Mongoose registers validation as a pre('save') hook on every schema by default.
Validation always runs as the first pre('save') hook. This means that validation doesn't run on any changes you make in pre('save') hooks.
You can disable automatic validation before save by setting the validateBeforeSave option
You can manually run validation using doc.validate() or doc.validateSync()
You can manually mark a field as invalid (causing validation to fail) by using doc.invalidate(...)
Validators are not run on undefined values. The only exception is the required validator.
When you call Model#save, Mongoose also runs subdocument validation. If an error occurs, your Model#save promise rejects
Validation is customizable

```js 
const schema = new Schema({
  name: {
    type: String,
    required: true
  }
});
const Cat = db.model('Cat', schema);

// This cat has no name :(
const cat = new Cat();

let error;
try {
  await cat.save();
} catch (err) {
  error = err;
}

assert.equal(error.errors['name'].message,
  'Path `name` is required.');

error = cat.validateSync();
assert.equal(error.errors['name'].message,
  'Path `name` is required.');
```
Built-in Validators
Custom Error Messages
The unique Option is Not a Validator
Custom Validators
Async Custom Validators
Validation Errors
Cast Errors
Global SchemaType Validation
Required Validators On Nested Objects
Update Validators
Update Validators and this
Update Validators Only Run On Updated Paths
Update Validators Only Run For Some Operations
Built-in Validators
Mongoose has several built-in validators.

All SchemaTypes have the built-in required validator. The required validator uses the SchemaType's checkRequired() function to determine if the value satisfies the required validator.
Numbers have min and max validators.
Strings have enum, match, minLength, and maxLength validators.
Each of the validator links above provide more information about how to enable them and customize their error messages.

```js 
const breakfastSchema = new Schema({
  eggs: {
    type: Number,
    min: [6, 'Too few eggs'],
    max: 12
  },
  bacon: {
    type: Number,
    required: [true, 'Why no bacon?']
  },
  drink: {
    type: String,
    enum: ['Coffee', 'Tea'],
    required: function() {
      return this.bacon > 3;
    }
  }
});
const Breakfast = db.model('Breakfast', breakfastSchema);

const badBreakfast = new Breakfast({
  eggs: 2,
  bacon: 0,
  drink: 'Milk'
});
let error = badBreakfast.validateSync();
assert.equal(error.errors['eggs'].message,
  'Too few eggs');
assert.ok(!error.errors['bacon']);
assert.equal(error.errors['drink'].message,
  '`Milk` is not a valid enum value for path `drink`.');

badBreakfast.bacon = 5;
badBreakfast.drink = null;

error = badBreakfast.validateSync();
assert.equal(error.errors['drink'].message, 'Path `drink` is required.');

badBreakfast.bacon = null;
error = badBreakfast.validateSync();
assert.equal(error.errors['bacon'].message, 'Why no bacon?');
``` 


### Custom Error Messages
You can configure the error message for individual validators in your schema. There are two equivalent ways to set the validator error message:

Array syntax: min: [6, 'Must be at least 6, got {VALUE}']
Object syntax: enum: { values: ['Coffee', 'Tea'], message: '{VALUE} is not supported' }
Mongoose also supports rudimentary templating for error messages. Mongoose replaces {VALUE} with the value being validated.

```js 
const breakfastSchema = new Schema({
  eggs: {
    type: Number,
    min: [6, 'Must be at least 6, got {VALUE}'],
    max: 12
  },
  drink: {
    type: String,
    enum: {
      values: ['Coffee', 'Tea'],
      message: '{VALUE} is not supported'
    }
  }
});
const Breakfast = db.model('Breakfast', breakfastSchema);

const badBreakfast = new Breakfast({
  eggs: 2,
  drink: 'Milk'
});
const error = badBreakfast.validateSync();
assert.equal(error.errors['eggs'].message,
  'Must be at least 6, got 2');
assert.equal(error.errors['drink'].message, 'Milk is not supported');
``` 


### The unique Option is Not a Validator
A common gotcha for beginners is that the unique option for schemas is not a validator. It's a convenient helper for building MongoDB unique indexes. See the FAQ for more information.
```js 
const uniqueUsernameSchema = new Schema({
  username: {
    type: String,
    unique: true
  }
});
const U1 = db.model('U1', uniqueUsernameSchema);
const U2 = db.model('U2', uniqueUsernameSchema);

const dup = [{ username: 'Val' }, { username: 'Val' }];
// Race condition! This may save successfully, depending on whether
// MongoDB built the index before writing the 2 docs.
U1.create(dup).
  then(() => {
  }).
  catch(err => {
  });

// You need to wait for Mongoose to finish building the `unique`
// index before writing. You only need to build indexes once for
// a given collection, so you normally don't need to do this
// in production. But, if you drop the database between tests,
// you will need to use `init()` to wait for the index build to finish.
U2.init().
  then(() => U2.create(dup)).
  catch(error => {
    // `U2.create()` will error, but will *not* be a mongoose validation error, it will be
    // a duplicate key error.
    // See: https://masteringjs.io/tutorials/mongoose/e11000-duplicate-key
    assert.ok(error);
    assert.ok(!error.errors);
    assert.ok(error.message.indexOf('duplicate key error') !== -1);
  });
``` 


### Custom Validators
If the built-in validators aren't enough, you can define custom validators to suit your needs.

Custom validation is declared by passing a validation function. You can find detailed instructions on how to do this in the SchemaType#validate() API docs.
```js 
const userSchema = new Schema({
  phone: {
    type: String,
    validate: {
      validator: function(v) {
        return /\d{3}-\d{3}-\d{4}/.test(v);
      },
      message: props => `${props.value} is not a valid phone number!`
    },
    required: [true, 'User phone number required']
  }
});

const User = db.model('user', userSchema);
const user = new User();
let error;

user.phone = '555.0123';
error = user.validateSync();
assert.equal(error.errors['phone'].message,
  '555.0123 is not a valid phone number!');

user.phone = '';
error = user.validateSync();
assert.equal(error.errors['phone'].message,
  'User phone number required');

user.phone = '201-555-0123';
// Validation succeeds! Phone number is defined
// and fits `DDD-DDD-DDDD`
error = user.validateSync();
assert.equal(error, null);
``` 


### Async Custom Validators
Custom validators can also be asynchronous. If your validator function returns a promise (like an async function), mongoose will wait for that promise to settle. If the returned promise rejects, or fulfills with the value false, Mongoose will consider that a validation error.

```js 
const userSchema = new Schema({
  name: {
    type: String,
    // You can also make a validator async by returning a promise.
    validate: () => Promise.reject(new Error('Oops!'))
  },
  email: {
    type: String,
    // There are two ways for an promise-based async validator to fail:
    // 1) If the promise rejects, Mongoose assumes the validator failed with the given error.
    // 2) If the promise resolves to `false`, Mongoose assumes the validator failed and creates an error with the given `message`.
    validate: {
      validator: () => Promise.resolve(false),
      message: 'Email validation failed'
    }
  }
});

const User = db.model('User', userSchema);
const user = new User();

user.email = 'test@test.co';
user.name = 'test';

let error;
try {
  await user.validate();
} catch (err) {
  error = err;
}
assert.ok(error);
assert.equal(error.errors['name'].message, 'Oops!');
assert.equal(error.errors['email'].message, 'Email validation failed');
``` 
### Validation Errors
Errors returned after failed validation contain an errors object whose values are ValidatorError objects. Each ValidatorError has kind, path, value, and message properties. A ValidatorError also may have a reason property. If an error was thrown in the validator, this property will contain the error that was thrown.
``` js 
const toySchema = new Schema({
  color: String,
  name: String
});

const validator = function(value) {
  return /red|white|gold/i.test(value);
};
toySchema.path('color').validate(validator,
  'Color `{VALUE}` not valid', 'Invalid color');
toySchema.path('name').validate(function(v) {
  if (v !== 'Turbo Man') {
    throw new Error('Need to get a Turbo Man for Christmas');
  }
  return true;
}, 'Name `{VALUE}` is not valid');

const Toy = db.model('Toy', toySchema);

const toy = new Toy({ color: 'Green', name: 'Power Ranger' });

let error;
try {
  await toy.save();
} catch (err) {
  error = err;
}

// `error` is a ValidationError object
// `error.errors.color` is a ValidatorError object
assert.equal(error.errors.color.message, 'Color `Green` not valid');
assert.equal(error.errors.color.kind, 'Invalid color');
assert.equal(error.errors.color.path, 'color');
assert.equal(error.errors.color.value, 'Green');

// If your validator throws an exception, mongoose will use the error
// message. If your validator returns `false`,
// mongoose will use the 'Name `Power Ranger` is not valid' message.
assert.equal(error.errors.name.message,
  'Need to get a Turbo Man for Christmas');
assert.equal(error.errors.name.value, 'Power Ranger');
// If your validator threw an error, the `reason` property will contain
// the original error thrown, including the original stack trace.
assert.equal(error.errors.name.reason.message,
  'Need to get a Turbo Man for Christmas');

assert.equal(error.name, 'ValidationError');
``` 

### Cast Errors
Before running validators, Mongoose attempts to coerce values to the correct type. This process is called casting the document. If casting fails for a given path, the error.errors object will contain a CastError object.

Casting runs before validation, and validation does not run if casting fails. That means your custom validators may assume v is null, undefined, or an instance of the type specified in your schema.
```js 
const vehicleSchema = new mongoose.Schema({
  numWheels: { type: Number, max: 18 }
});
const Vehicle = db.model('Vehicle', vehicleSchema);

const doc = new Vehicle({ numWheels: 'not a number' });
const err = doc.validateSync();

err.errors['numWheels'].name; // 'CastError'
// 'Cast to Number failed for value "not a number" at path "numWheels"'
err.errors['numWheels'].message;
``` 

By default, Mongoose cast error messages look like Cast to Number failed for value "pie" at path "numWheels". You can overwrite Mongoose's default cast error message by the cast option on your SchemaType to a string as follows.

```js 
const vehicleSchema = new mongoose.Schema({
  numWheels: {
    type: Number,
    cast: '{VALUE} is not a number'
  }
});
const Vehicle = db.model('Vehicle', vehicleSchema);

const doc = new Vehicle({ numWheels: 'pie' });
const err = doc.validateSync();

err.errors['numWheels'].name; // 'CastError'
// "pie" is not a number
err.errors['numWheels'].message;
```

Mongoose's cast error message templating supports the following parameters:

{PATH}: the path that failed to cast
{VALUE}: a string representation of the value that failed to cast
{KIND}: the type that Mongoose attempted to cast to, like 'String' or 'Number'
You can also define a function that Mongoose will call to get the cast error message as follows.

```js 
const vehicleSchema = new mongoose.Schema({
  numWheels: {
    type: Number,
    cast: [null, (value, path, model, kind) => `"${value}" is not a number`]
  }
});
const Vehicle = db.model('Vehicle', vehicleSchema);

const doc = new Vehicle({ numWheels: 'pie' });
const err = doc.validateSync();

err.errors['numWheels'].name; // 'CastError'
// "pie" is not a number
err.errors['numWheels'].message;
```

### Global SchemaType Validation
In addition to defining custom validators on individual schema paths, you can also configure a custom validator to run on every instance of a given SchemaType. For example, the following code demonstrates how to make empty string '' an invalid value for all string paths.
```js 
// Add a custom validator to all strings
mongoose.Schema.Types.String.set('validate', v => v == null || v > 0);

const userSchema = new Schema({
  name: String,
  email: String
});
const User = db.model('User', userSchema);

const user = new User({ name: '', email: '' });

const err = await user.validate().then(() => null, err => err);
err.errors['name']; // ValidatorError
err.errors['email']; // ValidatorError
```


### Required Validators On Nested Objects
Defining validators on nested objects in mongoose is tricky, because nested objects are not fully fledged paths.
```js 
let personSchema = new Schema({
  name: {
    first: String,
    last: String
  }
});

assert.throws(function() {
  // This throws an error, because 'name' isn't a full fledged path
  personSchema.path('name').required(true);
}, /Cannot.*'required'/);

// To make a nested object required, use a single nested schema
const nameSchema = new Schema({
  first: String,
  last: String
});

personSchema = new Schema({
  name: {
    type: nameSchema,
    required: true
  }
});

const Person = db.model('Person', personSchema);

const person = new Person();
const error = person.validateSync();
assert.ok(error.errors['name']);
```


### Update Validators
In the above examples, you learned about document validation. Mongoose also supports validation for update(), updateOne(), updateMany(), and findOneAndUpdate() operations. Update validators are off by default - you need to specify the runValidators option.

To turn on update validators, set the runValidators option for update(), updateOne(), updateMany(), or findOneAndUpdate(). Be careful: update validators are off by default because they have several caveats.
```js 
const toySchema = new Schema({
  color: String,
  name: String
});

const Toy = db.model('Toys', toySchema);

Toy.schema.path('color').validate(function(value) {
  return /red|green|blue/i.test(value);
}, 'Invalid color');

const opts = { runValidators: true };

let error;
try {
  await Toy.updateOne({}, { color: 'not a color' }, opts);
} catch (err) {
  error = err;
}

assert.equal(error.errors.color.message, 'Invalid color');
```
### Update Validators and this
There are a couple of key differences between update validators and document validators. In the color validation function below, this refers to the document being validated when using document validation. However, when running update validators, this refers to the query object instead of the document. Because queries have a neat .get() function, you can get the updated value of the property you want.
```js 
const toySchema = new Schema({
  color: String,
  name: String
});

toySchema.path('color').validate(function(value) {
  // When running in `validate()` or `validateSync()`, the
  // validator can access the document using `this`.
  // When running with update validators, `this` is the Query,
  // **not** the document being updated!
  // Queries have a `get()` method that lets you get the
  // updated value.
  if (this.get('name') && this.get('name').toLowerCase().indexOf('red') !== -1) {
    return value === 'red';
  }
  return true;
});

const Toy = db.model('ActionFigure', toySchema);

const toy = new Toy({ color: 'green', name: 'Red Power Ranger' });
// Validation failed: color: Validator failed for path `color` with value `green`
let error = toy.validateSync();
assert.ok(error.errors['color']);

const update = { color: 'green', name: 'Red Power Ranger' };
const opts = { runValidators: true };

error = null;
try {
  await Toy.updateOne({}, update, opts);
} catch (err) {
  error = err;
}
// Validation failed: color: Validator failed for path `color` with value `green`
assert.ok(error);
```
Update Validators Only Run On Updated Paths
The other key difference is that update validators only run on the paths specified in the update. For instance, in the below example, because 'name' is not specified in the update operation, update validation will succeed.

When using update validators, required validators only fail when you try to explicitly $unset the key.
```js 
const kittenSchema = new Schema({
  name: { type: String, required: true },
  age: Number
});

const Kitten = db.model('Kitten', kittenSchema);

const update = { color: 'blue' };
const opts = { runValidators: true };
// Operation succeeds despite the fact that 'name' is not specified
await Kitten.updateOne({}, update, opts);

const unset = { $unset: { name: 1 } };
// Operation fails because 'name' is required
const err = await Kitten.updateOne({}, unset, opts).then(() => null, err => err);
assert.ok(err);
assert.ok(err.errors['name']);
```
Update Validators Only Run For Some Operations
One final detail worth noting: update validators only run on the following update operators:

$set
$unset
$push
$addToSet
$pull
$pullAll

For instance, the below update will succeed, regardless of the value of number, because update validators ignore $inc.

Also, $push, $addToSet, $pull, and $pullAll validation does not run any validation on the array itself, only individual elements of the array.
```js 
const testSchema = new Schema({
  number: { type: Number, max: 0 },
  arr: [{ message: { type: String, maxlength: 10 } }]
});

// Update validators won't check this, so you can still `$push` 2 elements
// onto the array, so long as they don't have a `message` that's too long.
testSchema.path('arr').validate(function(v) {
  return v.length < 2;
});

const Test = db.model('Test', testSchema);

let update = { $inc: { number: 1 } };
const opts = { runValidators: true };

// There will never be a validation error here
await Test.updateOne({}, update, opts);

// This will never error either even though the array will have at
// least 2 elements.
update = { $push: [{ message: 'hello' }, { message: 'world' }] };
await Test.updateOne({}, update, opts);
``` 


### Query Methods 
```js 
Query()
Query.prototype.$where()
Query.prototype.all()
Query.prototype.allowDiskUse()
Query.prototype.and()
Query.prototype.batchSize()
Query.prototype.box()
Query.prototype.cast()
Query.prototype.catch()
Query.prototype.center()
Query.prototype.centerSphere()
Query.prototype.circle()
Query.prototype.clone()
Query.prototype.collation()
Query.prototype.comment()
Query.prototype.count()
Query.prototype.countDocuments()
Query.prototype.cursor()
Query.prototype.deleteMany()
Query.prototype.deleteOne()
Query.prototype.distinct()
Query.prototype.elemMatch()
Query.prototype.equals()
Query.prototype.error()
Query.prototype.estimatedDocumentCount()
Query.prototype.exec()
Query.prototype.exists()
Query.prototype.explain()
Query.prototype.finally()
Query.prototype.find()
Query.prototype.findOne()
Query.prototype.findOneAndDelete()
Query.prototype.findOneAndRemove()
Query.prototype.findOneAndReplace()
Query.prototype.findOneAndUpdate()
Query.prototype.geometry()
Query.prototype.get()
Query.prototype.getFilter()
Query.prototype.getOptions()
Query.prototype.getPopulatedPaths()
Query.prototype.getQuery()
Query.prototype.getUpdate()
Query.prototype.gt()
Query.prototype.gte()
Query.prototype.hint()
Query.prototype.in()
Query.prototype.intersects()
Query.prototype.isPathSelectedInclusive()
Query.prototype.j()
Query.prototype.lean()
Query.prototype.limit()
Query.prototype.lt()
Query.prototype.lte()
Query.prototype.maxDistance()
Query.prototype.maxTimeMS()
Query.prototype.merge()
Query.prototype.mod()
Query.prototype.model
Query.prototype.mongooseOptions()
Query.prototype.ne()
Query.prototype.near()
Query.prototype.nearSphere()
Query.prototype.nin()
Query.prototype.nor()
Query.prototype.or()
Query.prototype.orFail()
Query.prototype.polygon()
Query.prototype.populate()
Query.prototype.post()
Query.prototype.pre()
Query.prototype.projection()
Query.prototype.read()
Query.prototype.readConcern()
Query.prototype.regex()
Query.prototype.replaceOne()
Query.prototype.select()
Query.prototype.selected()
Query.prototype.selectedExclusively()
Query.prototype.selectedInclusively()
Query.prototype.session()
Query.prototype.set()
Query.prototype.setOptions()
Query.prototype.setQuery()
Query.prototype.setUpdate()
Query.prototype.size()
Query.prototype.skip()
Query.prototype.slice()
Query.prototype.sort()
Query.prototype.tailable()
Query.prototype.then()
Query.prototype.toConstructor()
Query.prototype.transform()
Query.prototype.updateMany()
Query.prototype.updateOne()
Query.prototype.w()
Query.prototype.where()
Query.prototype.within()
Query.prototype.writeConcern()
Query.prototype.wtimeout()
Query.prototype[Symbol.asyncIterator]()
Query.prototype[Symbol.toStringTag]()
Query.use$geoWithin
```