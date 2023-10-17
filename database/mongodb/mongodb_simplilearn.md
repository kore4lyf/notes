# MongoDB

## Install MongoDB 
- Download and install **MongoDB** community server.
- Download and install **mongoshell**.
- Add mongodb's bin path to system variable.
- Add mongosh path to system variable.

## Create a new folder to store your database 
For window `cd /` to go to you c drive **C://**
for linux `cd ~`
```sh 
mkdir -p data/db 
```

### Commands
`mongod` is used to start the Mongodb server. 
`mongosh` is the client which will be connected to `mongod`

### Running mongo daemon
```sh 
mongod --dbpath /data/db
```

### Running mongo shell 
```sh 
mongosh
```

## Mongodb Facts 
| SQL | Mongodb (no sql) ]
| :--- | :--- | 
| Database | Database |
| Table | Collection |
| Row | Document | 



## Mongosh commands
### 1. Show Existing databases 
```sh
show dbs
```
> A database without a collection will not be listed.

### 2. Create database 
`use <dbName>`
Creates and enters the database. 

To create a database called simpledb. 
```sh
use simpledb
```


### 3. Check Current Database 
```sh
db
```

### 4. Creating a database colloection 
```sh 
db.createCollection('<dbCollectionName>')
```

#### Specifying constraints on the collection 
```sh 
db.createCollection('goals', {capped:true, size: 52428880, max:5})
```

- **capped**: enable data capping
- **size**: The total size of documents must not be more than 5mb
- **max**: Maximum number of documents can either be 5 or less than 5.


### 5. Show collections 
```sh 
show collections
```

### 6. Auto create collection and insert document/row 
```sh
db.todo.insert({task: "Watch Tom and Jerry", completed: false})
```
> Creating a collection a does not allow one to specify constraints on a collection.


### 7. Finding Records 
To list all the documents in the collection. 
```sh 
db.todo.find() 
```


### 8. How to insert a document 
Mongodb has two types of documents
1. Relational documents
2. Embedded documents

Embedded documents allows one to scale up ones application without any hurdle. 


```sh 
db.student.insert({
	regNo: "1234", 
	name: "student1",
	course: {
		courseName: "MCA",
		duration: "3 years"		
	},
	address: { 
		city: "bangalore",
		state: "KA", 
		country: "IN"
	}
})
```

course and address are embedded documents, they do not have their own id and they are dependent on the student database.

> By default mongodb generates an _id data in each document. One can overide the data in the _id but one cannot change the key. 

To override _id provide the key and the value in the object you want to insert in the database. 


#### Inserting multiple data to a collection
```sh 
var myemp = [
	{ 
		empid: 1,
		empname: "admin"
	},
	{ 
		empid: 2,
		empname: "manager"
	},
	{ 
		empid: 3,
		empname: "Secretary"
	},
]	

db.newemp.insert(myemp)
```


### Updating data 
```sh 
db.newemp.update(
	{ empname: "admin"}, 
	{$set: {"empname": "newadmin"}}
)
```

> The code above finds only the first data with empname => admin, and updates the new data. 

#### Updating multiple matching query 
```sh 
db.newemp.update(
	{ empname: "admin"}, 
	{$set: {"empname": "newadmin"}},
	{multi: true}
)
```

#### upsert (update data, but if query doesn't exist insert the data)
with the upsert option, if a record is found, it will update it, but if no record is found a new data will be created 
```sh 
db.newemp.update(
	{ empname: "admin"}, 
	{$set: {"empname": "newadmin"}},
	{upsert: true}
)
```

### Removing documents 
```sh 
db.newemp.remove(empname: "admin")
```
The code above deletes all the newemp 

> Collection.remove is deprecated. use **deleteOne**, **deleteMany**, **findOneAndDelete** or **bulkWrite**. 

Using deleteOne, which deletes only one of the matching data.
```sh 
db.newemp.deleteOne({empname: "secretary"})
```

Using deleteMany, which deletes all the result matching the query.
```sh 
db.newemp.deleteMany({empname: "secretary"})
```

Finds and deletes only the first matching result
```sh 
db.newemp.findOneAndDelete({empname: "secretary"})
```


### Fetching Data 
```sh
db.newemp.find({empname: "admin"})
```

#### Limit the number of records 
```sh 
db.newemp.find({empname: "admin"}).limit(2)
```

#### Sorting
- Ascending order
```sh 
db.newemp.find().sort({empname: 1})
```

- Descending order
```sh 
db.newemp.find().sort({empname: 1})
```

#### FInd matching embedded document 
```sh 
db.student.find({"address.city": "bangalore"})
```

#### Find matching number rule 
- Greater than 
```sh 
db.newemp.find({empid: {$gt: 3}})
```

- Less than 
```sh 
db.newemp.find({empid: {$lt: 3}})
```

- Exact
```sh 
db.newemp.find({empid: 4})
```

- Multiple Exact 
```sh 
db.newemp.find({empid: {$in: [4, 5, 6]}})
```


## Indexing 
Without indexing quering the database can be very costly and slow, depending on the size of the databases. When a collection is queried, by default the entire collection document is scanned. 
- By indexing you improve query performance.

> MongoDB support multi column indexes.

Get a collection's indexes.
```sh
db.newemp.getIndexes()
```

To add another collumn as an index 
1 - Ascending order
-1 - Descending order
```sh 
db.newemp.createIndex({empname: 1})
```

Droping an index
```sh 
db.empname.dropIndex("empname_1")
```
> Use getIndexes() get the name of the index you want to remove



## Aggregation
- $project - selects specific field 
- $match  
- $group  
- $sort

 
### Using `$match`
Example
```sh 
db.newemp.aggregate([{$match: {empname: "secretary"}}])
``

```sh 
simpledb> db.newemp.aggregate([{$match: {$and: [{empname: "secretary"}, {empid: {$gt: 1}}]}}])
```


### Suggesting Colomns to display with $project
The code below return a collection's (empname) documents, organised in _id, empname and empid
1 - show 
Ommiting Columns name - Don't show
```sh
db.newemp.aggregate([{$project: {empname: 1, empid: 1}}])
```

Get empname column only where empid = 3 
```sh 
db.empname.aggregate([{$match: {empid: 3}}, {$project: {empname: 1}}])
```

### Grouping 

```sh 
db.newemp.aggregate([{ $group: {"_id": {"Employee Name" : "$empname"}, "Total Jobs": {$sum: "$empJobs"}}}])
``` 
Result: 
[
  { _id: { 'Employee Name': 'Adeola' }, 'Total Jobs': 5 },
  { _id: { 'Employee Name': 'Titilope' }, 'Total Jobs': 4 },
  { _id: { 'Employee Name': 'secretary' }, 'Total Jobs': 6 },
  { _id: { 'Employee Name': 'Dozie' }, 'Total Jobs': 6 },
  { _id: { 'Employee Name': 'korede' }, 'Total Jobs': 8 },
  { _id: { 'Employee Name': 'Ayodeji' }, 'Total Jobs': 7 },
  { _id: { 'Employee Name': 'manager' }, 'Total Jobs': 4 }
]


```sh 
db.newemp.aggregate([{$match: {empname: "korede"}}, { $group: {"_id": {"Employee Name" : "$empname"}, "Total Jobs": {$sum: "$empJobs"}}}])
``` 
Result: 
[
  { _id: { 'Employee Name': 'korede' }, 'Total Jobs': 8 }
]

count, average and sum
```sh 
db.newemp.aggregate([{ $group: {"_id": {"Employee Name" : "$empname"}, "Total Jobs": {$sum: "$empJobs"}, "Count": {$sum: 1}, "Average": {$avg: "$empjobs"}}}])
``` 
Result: 
[
  {
    _id: { 'Employee Name': 'Adeola' },
    'Total Jobs': 5,
    Count: 1,
    Average: 5
  },
  {
    _id: { 'Employee Name': 'Titilope' },
    'Total Jobs': 4,
    Count: 1,
    Average: 4
  },
  {
    _id: { 'Employee Name': 'secretary' },
    'Total Jobs': 6,
    Count: 2,
    Average: 3
  },
  {
    _id: { 'Employee Name': 'Dozie' },
    'Total Jobs': 6,
    Count: 1,
    Average: 6
  },
  {
    _id: { 'Employee Name': 'korede' },
    'Total Jobs': 8,
    Count: 1,
    Average: 8
  },
  {
    _id: { 'Employee Name': 'Ayodeji' },
    'Total Jobs': 7,
    Count: 1,
    Average: 7
  },
  {
    _id: { 'Employee Name': 'manager' },
    'Total Jobs': 4,
    Count: 2,
    Average: 2
  }
] 



## Clear terminal 
`ctrl` + `l`
or 
```sh 
cls
```



























