# Cache API 
The Cache API provides a mechanism for storing network requests and retrieving their corresponding responses during run-time. It can be used in the absence of an internet connection (or presence of a flaky one) and this makes it integral to the building of progressive web applications (fully optimised web applications that work offline like native applications). 

Progressive web applications were created to ensure that web services work on all devices. On mobile devices, they are designed to deliver a user experience that is close to that of native applications. Under the hood, PWAs use service workers to achieve the ideal behavior, and they leverage the Cache API for extra control over network resources. 

## Detecting the Cache API
In modern browsers, each origin has a cache storage and we can inspect it by opening the browser developer tools:

- On Chrome: Application > Cache > Cache Storage
- On Firefox: Storage > Cache 

**Pro tip**: In Chrome, you can visit `chrome://inspect/#service-workers` and click on the “inspect” option (directly under the origin of any already opened tab) to view logging statements for the actions of the `service-worker.js` script. 

The Cache API is available in all modern browsers:
```
Edge >= 17
Opera >= 27
Safari >= 11.1
Firefox >= 39
Chrome >= 40
iOS Safari = 11.4 >
UC Browser 11.8 >=
Chrome for Android >= 67 
``` 

Because older browsers may not support the API, it is good practice to check for its availability before attempting to reference it. The caches property is available on the window object and we can check that it is implemented in the browser with this snippet:

```js
if ('caches' in window){
    // you can safely insert your snippet here
}
``` 



## Usage
The Cache API is a great choice for caching URL-addressable resources, that is, you should use the Cache API when you work with network resources that are necessary to load your application. If your application deals with lots of data, you may cache the data that the user will most likely need on page load. These resources may include file-based content, assets, API responses, and web pages.

For the storage of significant amounts of structured data (including files/blobs), you should ideally use the IndexedDB API. 


## Create a new cache 
We can create a new cache object using the `caches.open()` method: 
```js 
const newCache = await caches.open('new-cache');
``` 
Using a promise: 
```js caches.open('my-cache').then(function(cache) {
  // Cache opened successfully
}).catch(function(error) {
  // Failed to open cache
});

```
The caches.open() method first checks if a cache with that name already exists. If it doesn’t, it creates it and returns a Promise that resolves with the Cache object. 

 
## Adding items to a cache
There are three main ways to add items to the cache:

- add
- addAll
- put 

All of these methods return a Promise, now let’s go over each of these and see how they differ from one another.  

The first method, cache.add(), takes a single parameter that can either be a URL string literal or a Request object. A call to the `cache.add()` method will make a Fetch request to the network and store the response in the associated cache object:

```js
newCache.add('/cats.json') 
```

or to gain more control, we can use a request object:

```js
const options = {
    method: "GET",
    headers: new Headers({
        'Content-Type': 'text/html'
    }),
  }  
newCache.add(new Request('/cats.json', options))
```
Note: If the fetch is unsuccessful and an error response is returned, nothing is stored in the cache and the
Promise rejects. 


## Cache.addAll()
This method works similarly to the cache.add() method except that it takes in an array of request URL string literals or Request objects and returns a promise when all the resources have been cached:

```js 
const urls = ['pets/cats.json', 'pets/dogs.json'];
newCache.addAll(urls);
```



## Cache.put()
The Cache.put method works quite differently from the rest as it allows an extra layer of control. The put() method takes two parameters, the first can either be a URL string literal or a Request object, the second is a Response either from the network or generated within your code:

```js
// Retrieve cats.json and cache the response
newCache.put('./cats')

// Create a new entry for cats.json and store the generated response
newCache.put('/cats', new Response('{"james": "kitten", "daniel": "kitten"}'))

// Fetch a response from an external address and create a new entry for cats.json
newCache.put('https://pets/cats.json'); 
``` 

The put method allows an extra layer of control as it lets you store responses that do not depend on CORS or other responses that are dependent on a server response status code.

Pro tip: The first two methods — `add()` and `addAll()` — are dependent on the state of CORS on the server the data is being requested from. If a CORS check fails, nothing gets cached and the Promise rejects. Using `put()`, on the other hand, gives you extra confidence as you can set an in-house response. 


```js 
// Retrieve data.json from the server and store the response.
cache.put('/data.json');

// Create a new entry for test.json and store the newly created response.
cache.put('/test.json', new Response('{"foo": "bar"}'));

// Retrieve data.json from the 3rd party site and store the response.
cache.put('https://example.com/data.json');
```


## Retrieving items from a cache
After we’ve added some items to the cache, we need to be able to retrieve them during run-time. We can use the match() method to retrieve our cached responses:

```js 
// retrieve a new response
const request = '/cats.json';
const response = await newCache.match(request);
``` 

In the code above, we passed in a request variable to the match method, if the request variable is a URL string, it is converted to a Request object and used as an argument. The match method will return a Promise that resolves to a Response object if a matching entry is found.  

In a case where more than one cache item matches, the oldest one is returned. If we intend to retrieve all matching responses, we can use the matchAll() method.

When using the match method, we can also pass an options object as the second parameter. This object has key value pairs that tell match to ignore specific factors when matching a request:

```js
// create an options object
const options = {
        ignoreVary: true, // ignore differences in Headers
        ignoreMethod: true, // ignore differences in HTTP methods
        ignoreSearch: true // ignore differences in query strings
    }

// then we pass it in here
const response = await newCache.match(request, options);
``` 


```js 
caches.open("my-cache").then(function (cache) {
  cache.matchAll("/path/to/*").then(function (responses) {
    if (responses.length > 0) {
      // Resources found in cache
      console.log(responses);
    } else {
      // No resources found in cache
    }
  });
```

In this example, you use the `matchAll()` method to retrieve all the resources that match the pattern /path/to/* in the cache. The method returns an array of response objects that can be used to access the resources. If no resources are found in the cache, the `matchAll()` method returns an empty array.

## Removing items from a cache
We might not need a cache entry anymore and want it deleted. We can delete a cache entry using the delete() method:

```js 
// delete a cache entry
const request = '/cats.json';
newCache.delete(request);
```

## Deleting a cache
Finally, we can delete a cache by calling the delete() method on the caches property of the window object. Let’s delete our cache in the snippet below:
```js 
// delete an existing cache
caches.delete('new-cache');
``` 


## Creating Request objects
Create the Request object using a URL for the thing being stored:
```js 
const request = new Request('/my-data-store/item-id');
``` 

## Working with Response objects
The Response object constructor accepts many types of data, including Blobs, ArrayBuffers, FormData objects, and strings.

```js
const imageBlob = new Blob([data], {type: 'image/jpeg'});
const imageResponse = new Response(imageBlob);
const stringResponse = new Response('Hello world');
``` 

You can set the MIME type of a Response by setting the appropriate header.

```js 
const options = {
  headers: {
    'Content-Type': 'application/json'
  }
}
const jsonResponse = new Response('{}', options);
``` 

If you have retrieved a Response and wish to access its body, there are several helper methods you can use. Each returns a Promise that resolves with a value of a different type.

- Method -	Description
- arrayBuffer	- Returns an ArrayBuffer containing the body, serialized to bytes.
- blob -	Returns a Blob. If the Response was created with a Blob then this new Blob has the same type. Otherwise, the Content-Type of the Response is used.
text	Interprets the bytes of the body as a UTF-8 encoded string.
- json -	Interprets the bytes of the body as a UTF-8 encoded string, then tries to parse it as JSON. Returns the resulting object, or throws a TypeError if the string cannot be parsed as JSON.
- formData -	Interprets the bytes of the body as an HTML form, encoded either as multipart/form-data or application/x-www-form-urlencoded. Returns a FormData object, or throws a TypeError if the data cannot be parsed.
- body - Returns a ReadableStream for the body data.

For example
```js
const response = new Response('Hello world');
const buffer = await response.arrayBuffer();
console.log(new Uint8Array(buffer));
// Uint8Array(11) [72, 101, 108, 108, 111, 32, 119, 111, 114, 108, 100]
```


## Searching
The Cache API does not provide a way to search for requests or responses except for matching entries against a Response object. However, you can implement your own search using filtering or by creating an index.

### Filtering
One way to implement your own search is to iterate over all entries and filter down to the ones that you want. Let's say that you want to find all items that have URLs ending with .png.

```js
async function findImages() {
  // Get a list of all of the caches for this origin
  const cacheNames = await caches.keys();
  const result = [];

  for (const name of cacheNames) {
    // Open the cache
    const cache = await caches.open(name);

    // Get a list of entries. Each item is a Request object
    for (const request of await cache.keys()) {
      // If the request URL matches, add the response to the result
      if (request.url.endsWith('.png')) {
        result.push(await cache.match(request));
      }
    }
  }

  return result;
} 
```  
