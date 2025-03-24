## Mutation

Mutation in JavaScript refers to directly modifying an object or an array instead of creating a new copy. This means changing the original state, which can lead to unintended side effects.

Example of mutation:

```js
let obj = { name: "Korede" };
obj.name = "Faleye";  // Mutates the original object

console.log(obj);  // { name: "Faleye" }
```

Here, the obj is modified directly, affecting all references to it.


---

When you use the spread operator (...), you are creating a new object or array, which prevents direct mutation of the original data. This ensures that changes do not unintentionally affect other parts of your code that reference the same object.

### Why Does Spreading Work?

In JavaScript, objects and arrays are reference types. This means that when you assign an object or array to another variable, both variables point to the same memory location.

Direct Mutation (Bad)

```js
let obj1 = { name: "Korede" };
let obj2 = obj1;  // Both point to the same object

obj2.name = "Faleye"; // This modifies obj1 as well!

console.log(obj1.name); // "Faleye" (unexpected change)
```

Here, obj2 is not a new object; it’s just another reference to obj1. Any change to obj2 affects obj1.

---

Using the Spread Operator to Create a New Copy (Good)

```js
let obj1 = { name: "Korede" };
let obj2 = { ...obj1, name: "Faleye" }; // Creates a new object

console.log(obj1.name); // "Korede" (unchanged)
console.log(obj2.name); // "Faleye"
```

Now, obj2 is a completely separate object, preventing unintended mutations of obj1.


---

How It Helps in React and Redux

React’s state should be immutable, meaning we should not directly modify state. Instead, we create new copies.

Wrong (Mutating State)

```js 
const [user, setUser] = React.useState({ name: "Korede", age: 25 });

const updateAge = () => {
    user.age += 1;  // Direct mutation (BAD)
    setUser(user);  // React may not detect the change!
};
```

Since setUser(user); is passing the same object reference, React might not detect a state change, leading to UI inconsistencies.

Correct (Creating a New Object)

```js
const updateAge = () => {
    setUser(prev => ({ ...prev, age: prev.age + 1 })); // New object
};
```

Now, React sees that a new object is created and correctly triggers a re-render.


---

Handling Arrays

Mutation in arrays happens when you modify them directly. Instead, use methods like map(), filter(), or spread.

Wrong (Mutating Array)

```js
let arr = [1, 2, 3];
arr.push(4);  // Mutates the original array
```

Correct (Creating a New Array)

```js
let arr = [1, 2, 3];
let newArr = [...arr, 4];  // New array, original remains unchanged
```

---

### Deep Copy vs. Shallow Copy

The spread operator only performs a shallow copy, meaning nested objects are still referenced.

```js
let obj1 = { name: "Korede", details: { age: 25 } };
let obj2 = { ...obj1 };

obj2.details.age = 30;  // Affects obj1!

console.log(obj1.details.age); // 30 (unexpected)
```

For deeply nested structures, use structured cloning or libraries like Lodash.cloneDeep().

Would you like an example of handling deeply nested state immutably?



