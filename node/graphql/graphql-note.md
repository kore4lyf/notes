# GraphQL

For example, how an object is displayed in a mobile application and the same is displayed in a desktop browser can be quite different, and therefore, a more granular control as well as aggregation of different resources may work better.
GraphQL was developed to address just these concerns. As a result, GraphQL is a far more elaborate specification, with the following salient features.

**Field Specification**:
Unlike REST APIs, where you have little control on what the server returns as part of an object, in GraphQL, the properties of an object that need to be returned must be specified. Specifying no fields of an object would, in a REST API, return the entire object.
This lets the client control the amount of data that is transferred over the network, making it more efficient, especially for lighter front-ends such as mobile applications.

**Graph Based**:
REST APIs were resource based, whereas GraphQL is graph based. This means that relationships between objects are naturally handled in GraphQL APIs.
In the Issue Tracker application, you could think of Issues and Users having a relation: An issue is assigned to a user, and a user has one or more issues assigned to them. When querying for a user’s properties, GraphQL makes it natural to query for some properties associated with all the issues assigned to them as well.

**Single Endpoint**:
GraphQL API servers have a single endpoint in contrast to one endpoint per resource in REST. The name of the resource(s) or field(s) being accessed is supplied as part of the query itself.

**Strongly Typed**:
GraphQL is a strongly typed query language. All fields and arguments have a type against which both queries and results can be validated and give descriptive
error messages. In addition to types, it is also possible to specify which fields and arguments are required and which others are optional. All this is done using the GraphQL schema language.
The advantage of a strongly typed system is that it prevents errors.

## Installation

For JavaScript on the back-end, there is a reference implementation of GraphQL called GraphQL.js. To tie this to Express and enable HTTP requests to be the transport mechanism for the API calls, there is a package called express-graphql.

But these are very basic tools that lack some advanced support such as modularized schemas and seamless handling of custom scalar types. The
package graphql-tools and the related apollo-server are built on top of GraphQL.js to add these advanced features

```js
npm install graphql apollo-server-express

// npm i express-graphql // for express server

```