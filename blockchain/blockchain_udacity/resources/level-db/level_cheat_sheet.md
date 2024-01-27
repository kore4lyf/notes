Here's an updated cheat sheet for the "level" npm library:

- **Installation**:
  ```sh
  npm install level
  ```

- **Importing**:
  ```javascript
  const { Level } = require('level');
  ```

- **Creating or Opening a Database**:
  ```javascript
  const db = new Level('./mydb');
  ```

- **Writing to the Database**:
  ```javascript
  db.put('key', 'value', (err) => {
    if (err) throw err;
  });
  ```

- **Reading from the Database**:
  ```javascript
  db.get('key', (err, value) => {
    if (err) throw err;
    console.log(value);
  });
  ```

- **Deleting from the Database**:
  ```javascript
  db.del('key', (err) => {
    if (err) throw err;
  });
  ```

- **Iterating Entries**:
  ```javascript
  db.createReadStream()
    .on('data', ({ key, value }) => {
      console.log(key, '=', value);
    })
    .on('error', (err) => {
      console.error(err);
    })
    .on('end', () => {
      console.log('Stream ended');
    });
    
    
    // OR 
    
  for await (const [key, value] of db.iterator()) {
    console.log('Key:', key, 'Value:', value)
    }
  ```

- **Closing the Database**:
  ```javascript
  db.close((err) => {
    if (err) throw err;
  });
  ```




```javascript
// Import level
const { Level } = require('level')

// Create or open a database
const db = new Level('example', {
  valueEncoding: 'json' // Use JSON encoding for values
})

// Define an async function to perform operations
async function run () {
  try {
    // Add an entry with key 'a' and value 1
    await db.put('a', 1)

    // Add multiple entries using batch
    await db.batch([
      { type: 'put', key: 'b', value: 2 },
      { type: 'put', key: 'c', value 3 }
    ])

    // Get the value of key 'a'
    const value = await db.get('a')
    console.log('Value of a:', value)

    // Iterate over the entries with keys that are greater than 'a'
    for await (const [key, value] of db.iterator({ gt: 'a' })) {
      console.log('Key:', key, 'Value:', value)
    }
  } catch (err) {
    // Handle errors
    console.error(err)
  }
}

// Run the function
run()
```