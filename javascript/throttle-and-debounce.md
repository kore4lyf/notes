# Throttle & Denounce 

Here's a simple example to illustrate the difference:// Throttle example
function throttleFunction() {
  console.log('Throttle function called.');
}

const throttled = throttle(throttleFunction, 1000); // Throttle to 1 second
```js 
// If called three times in quick succession:
throttled(); // Executes immediately
throttled(); // Ignores this call
throttled(); // Ignores this call

// Debounce example
function debounceFunction() {
  console.log('Debounce function called.');
}

const debounced = debounce(debounceFunction, 1000); // Debounce to 1 second

// If called three times in quick succession:
debounced(); // Waits for 1 second, then executes
debounced(); // Cancels previous timer and waits for 1 second again
debounced(); // Cancels previous timer and waits for 1 second again
```


## Throttle 
Throttle mechanism, if you keep firing the function multiple times within the specified time interval, the function calls will not pile up and execute at a constant time frame. Instead, the throttle mechanism ensures that the function is executed at a controlled, regular interval, and any excess function calls that occur within that interval are simply ignored.

Here's a simple example to illustrate this behavior:

Suppose you have a throttle mechanism with a 1-second interval, and you start calling the throttled function rapidly:

- First call: Executes immediately.
- Second call (within 1 second): Ignored.
- Third call (after 1 second): Executes.
- Fourth call (within 1 second): Ignored.
- Fifth call (after 1 second): Executes.

So, the function is executed at a constant rate, and if there are multiple rapid calls, only one call will be executed per interval, ensuring that the function is not overwhelmed with frequent invocations. 


```js 
function throttle(func, delay) {
  let previousCall = 0;
  return function() {
    const currentTime = new Date().getTime();
    if (currentTime - previousCall >= delay) {
      func.apply(null, arguments);
      previousCall = currentTime;
    }
  };
}

// Example usage:
function myFunction() {
  console.log('Function called.');
}

const throttledFunction = throttle(myFunction, 1000); // Throttle to 1 second

// Call the throttled function
throttledFunction(); 
``` 


In a basic throttle implementation, yes, you need to check the time to determine whether the function should be executed or not. Throttling involves checking the time since the last execution and allowing the function to execute only if a certain amount of time has passed since the previous execution.

Here's a simplified example of what a throttle function might look like:

```javascript
function throttle(func, delay) {
  let lastExecuted = 0;

  return function() {
    const currentTime = Date.now();

    if (currentTime - lastExecuted >= delay) {
      func.apply(null, arguments);
      lastExecuted = currentTime;
    }
  };
}
```

In this example, we're explicitly checking the time (`currentTime - lastExecuted`) to determine if the function should be executed or not.

There are more advanced implementations of throttle that use features like requestAnimationFrame for better timing precision, but at their core, they all involve some form of time checking to control the rate of function execution.



## Debounce 
- Debouncing ensures that a function is called only after a certain time has passed since the last function call.  

- If the debounced function is called multiple times within the specified time interval, it will restart the timer, and the function will only execute once that interval has elapsed without any further calls.

```js 
function debounce(func, delay) {
  let timer;
  return function() {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(null, arguments);
    }, delay);
  };
}

// Example usage:
function myFunction() {
  console.log('Debounced function called.');
}

const debouncedFunction = debounce(myFunction, 1000); // Debounce to 1 second

// Call the debounced function
debouncedFunction(); // This call will wait for 1 second of inactivity before executing 
``` 



