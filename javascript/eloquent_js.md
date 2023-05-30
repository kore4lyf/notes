# Eloquent JavaScript
It is not uncommon for code to look like this:
```js
if (x == "value1") action1();
else if (x == "value2") action2();
else if (x == "value3") action3();
else defaultAction();
```
There is a construct called switch that is intended to express such a “dispatch” in a more direct way.
Here is an example:
```js
switch (prompt("What is the weather like?")) {
  case "rainy":
    console.log("Remember to bring an umbrella.");
    break;
  case "sunny":
    console.log("Dress lightly.");
  case "cloudy":
    console.log("Go outside.");
    break;
  default:
    console.log("Unknown weather type!");
    break;
}
```



## Closure
A function that references bindings from local scopes around it is called a closure.
```js 
function multiplier(factor) {
  return number => number * factor;
}
let twice = multiplier(2);
console.log(twice(5));
```


## Recursion
But this implementation has one problem: in typical JavaScript implementations, it’s about three times slower than the looping version.
Running through a simple loop is generally cheaper than calling a function multiple times.

```js 
function findSolution(target) {
  function find(current, history) {
    if (current == target) {
      return history;
    } else if (current > target) {
      return null;
    } else {
      return find(current + 5, `(${history} + 5)`) ||
      find(current * 3, `(${history} * 3)`);
    }
  }
  return find(1, "1");
}
console.log(findSolution(24));
// → (((1 * 3) + 5) * 3)
```

!
find that are made when searching

for a solution for the number 13.

find(1, "1")
find(6, "(1 + 5)")
find(11, "((1 + 5) + 5)")
find(16, "(((1 + 5) + 5) + 5)")
too big
find(33, "(((1 + 5) + 5) * 3)")
too big
find(18, "((1 + 5) * 3)")
too big
find(3, "(1 * 3)")
find(8, "((1 * 3) + 5)")
find(13, "(((1 * 3) + 5) + 5)")
found!



## Function
- If you find yourself rewritting a protion of code twice or three, modularize it.
- It's mostly better to write a function the does a specific task than trying to combine another functionality in one function.


##