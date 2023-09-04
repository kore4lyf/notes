# Async Patterns 

## Promise 
The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value. 

```js 
// syntax 

const myFunc = () => {
  return new Promise ((resolve, reject) => {
    const data = fetch(',/abc.json')
    if(data) resolve(data)
    else reject(()=> console.log('ERROR'))
  })
}

  myfunc()
    .then((val)=> return xbxbxv)
    .then((val)=> return xbxbxv)
    .catch(() => console.log('Trouble')
    .finally(() => console.log('Finished')
```






