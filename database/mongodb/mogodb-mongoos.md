# Mongodb & Mongoose 
- NoSQL, Non Relational Database 
- Store JSON 
- Easy to get started 
- Free cloud Hosting - Atlas 

- We can simply store everything as JSON
- It doesn't care how each data related to each other. 
- Instead of tables we have collections which represents a group of items.
- Instead of rows we have document which represents a single item. 
- A document is a set if key value pairs. 

```
mongodb+srv://kore4lyf:<password>@nodejstest.xdcuxj1.mongodb.net/?retryWrites=true&w=majority
```

MongoDB is a popular NoSQL database that stores data in a flexible, JSON-like format called BSON (Binary JSON). It's known for its scalability, high performance, and ease of use. Let's go over the basics of MongoDB:

1. **Installation**: To get started, you'll need to install MongoDB on your system. MongoDB provides official installation instructions for various platforms on their website.

2. **Starting MongoDB**: After installation, you can start MongoDB by running the `mongod` command. This starts the MongoDB server.

3. **Accessing MongoDB**: You can interact with MongoDB through the MongoDB shell by running the `mongo` command in your terminal.

4. **Databases**: MongoDB stores data in databases, similar to SQL databases. You can create a new database using the `use` command, like `use mydatabase`. MongoDB will create the database if it doesn't already exist.

5. **Collections**: Inside a database, data is organized into collections. Collections are similar to tables in SQL databases. You can create collections implicitly by inserting documents.

6. **Documents**: MongoDB stores data in documents, which are similar to JSON objects. Documents can have different structures within the same collection. For example:

   ```json
   {
     "_id": 1,
     "name": "John Doe",
     "age": 30
   }
   ```

   Here, `_id` is a unique identifier for the document.

7. **CRUD Operations**:
   - **Create**: You can insert documents into a collection using the `insertOne()` or `insertMany()` methods.
   - **Read**: Use the `find()` method to retrieve documents. You can specify conditions for filtering data.
   - **Update**: Update documents using the `updateOne()` or `updateMany()` methods.
   - **Delete**: Remove documents with the `deleteOne()` or `deleteMany()` methods.

8. **Querying**: MongoDB provides a flexible query language to retrieve data. You can use operators like `$eq`, `$gt`, `$lt`, and many others to filter and manipulate data.

9. **Indexes**: To improve query performance, you can create indexes on fields that are frequently used in queries.

10. **Aggregation**: MongoDB offers an aggregation framework for performing complex data transformations and analysis.

11. **Replication and Sharding**: MongoDB supports data replication for fault tolerance and sharding for horizontal scaling.

12. **Security**: Ensure your MongoDB deployment is secure by setting up authentication and access control.

13. **Drivers**: MongoDB has official drivers for various programming languages like Python, JavaScript, Java, and more. These drivers make it easy to interact with MongoDB from your application.

14. **Community and Documentation**: MongoDB has an active community and extensive documentation. You can find tutorials, guides, and examples on their website.

15. **Best Practices**: Following best practices like schema design, index optimization, and proper security measures is crucial for efficient and secure MongoDB deployments.

Remember that MongoDB is a versatile database with a wide range of use cases. Learning it thoroughly will depend on your specific project requirements. You can practice by creating databases and collections, inserting data, and performing various CRUD operations to get a hands-on understanding of MongoDB. 



