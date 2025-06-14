# Big O notation

Big O notation is a way to measure the time complexity of an algorithm.
It help us understand how the execution time of an algorithm grows as the size of the input increases in the worst, best or average case.

1. O(1) Constant - The algorithm execution time doesn't depend on the size of the input. e.g Accessing an element in an array, Checking if a number is even.

2. O(log n) Logarithmic - The algorithms execution time grow logarithmically as the input size increases, but it grow much slower than linear O(n) growth. e.g. Binary Search, Searching an AVL tree.

3. O(n) Linear - The algorithm execution time grow as the size of the input grows. The bigger the input the larger the execution time. e.g.  e.g. Traversing an Array or linked list.

4. O(n log n) Linear Logarithm - This often appears in efficient sorting algorithms. It's a combination Linear and Logarithmic time complexity. e.g. Quick Sort, Merge Sort.

5. O(n^2) Quadratic - This means of the execution time is proportional to the square fo the input size.
It's common in algorithms with nested loops. e.g. Bubble sort, Insertion sort.

6. O(n^3) Cubic - This means the execution time is proportional to the cube of the input size. It appears in algorithms with triple nested loops. e.g. Matrix multiplication, 3D array traversal.

7. O(2^n) Exponential - This means the execution time grows exponentially with the input size. It often appear in algorithms, where there is a need to explore all possible subset or combinations. e.g. Fibonacci Sequence (recursive solution), Generating all subset of a set.

8. O(n!) Factorial - This means the execution time grow in proportion to the factorial of the input size. It typically appear in permutation problems. e.g. Generating permutation of a set.

## Find the time complexity

**1.**:

```js
function printNumbers(n) {
  for (let i = 1; i <= n; i++) { // O(N)
    console.log(i)
  }
}
```

`for (let i = 1; i <= n; i++) {` i counts form 1 to n, where n is the size of the input. As n increase directly efficiency decreases.

`O(N)`

**2.**:

```js
function printAllPairs(n) {
  for (let i = 1; i <= n; i++) { // O(N)
    for (let j = 1; j <= n; j++) { // O(N)
      console.log(i, j)
    }
  }
```

`for (let i = 1; i <= n; i++) { // O(N)`
and `for (let j = 1; j <= n; j++) { // O(N)`

O(N * N) = `O(N^2)`

**3.**:

```js
function printAllTriplets(n) {
  for (let i = 1; i <= n; i++) { // O(N)
    for (let j = 1; j <= n; j++) { // O(N)
      for (let k = 1; k <= n; k++) { // O(N)
        console.log(i, j, k)
      }
    }
  }
```

`for (let i = 1; i <= n; i++) { // O(N)`
`for (let j = 1; j <= n; j++) { // O(N)`
and `for (let k = 1; k <= n; k++) { // O(N)`

O(N*N*N) = `O(N^3)`

**4.**:

```js
function repeatedDivision(n) {
  while(n > 1) {
    n = Math.floor(n/2) // O(log N)
    console.log(n)
  }
}
```

If N is being halved every step, then it's `O(log N)`

**5.**:

```js
function printFactors(n) {
  for (let i = 1; i * i <= n; i++) {
    if (n % i === 0) {
      console.log(i)
      if (i !== n/i) {
        console.log(n/i)
      }
    }
  }
}
```

`i * i <= n` determines when the loop ends

i.e. if i is twice the value of n, end the loop.

i * i = n
i^2 = n
i = Math.sqrt(n)
OR
i = n^1/2

if n = 100, then Math.sqrt(100) = 10.
then the loop will end on 10 iterations.

Therefore it's `O(N^1/2)`.

**6.**:

```js
function repeatedSquareRoot(n) {
  while (n > 1) {
    n = Math.sqrt(n);
    console.log(n)
  }
}
```

If N is being halved on every step then it's `O(log n)`.
If N is being square rooted on every step `O(log log n)`.

**7.**:

```js
function sumAllPairLogStep(n) {
  let sum = 0
  
  for (let i = 1; i <= n; i++) {
    for (let j = i; j <= n; j *= 2) {
      sum += i * j
    }
  }
  
  return sum
}
```

First for loop is O(N)
The second for loop is O(log N) because it is counter is being double on every step.

`O(N log N)`

**8.**:

```js
function printPairsSquareRootStep(n) {
  for (let i = 1; i <= n; i++) { // O(N)
    for (let j = 1; j * j <= n; j++) { // O(Math.sqrt(N))
      console.log(i, j)
    }
  }
}
```

O(N * N^1/2)
Oh of N root n

**9.**:

```js
function printFactors(n) {
  for (let i = 1; i * i <= n; i++) {
    if (n % i === 0) {
      console.log(i)

      if (i !== n/i) {
        console.log(n/i)
      }
    }
  }
}
```

`O(N^1/2)`

**10.**:

```js
function sumPairsWithLogLoop(n) {
  let sum = 0
  for (let i = 1; i <= n; i++) { // O(N)
    for (let j = 1; i <= n; j++) { // O(N)
      for (let k = j; k <= n; k *= 2) { // O(log N)
        sum += i + j + k
      }
    }
  }

  return sum
}
```

`O(N^2 log N)`

**11.**:

```js
function tripleNestedLoopSquareRootStep(n) {
  for (let i = 1; i <= n; i++) { // O(N)
    for (let j = 1; j <= n; j++) { // O(N)
      for (let k = 1; k * k <= n; k++) { // O(N^1/2)
        console.log(i, j, k)
      }
    }
  }
}
```

`O(N^2 N^1/2)` 
Oh of N square, root N

## Space Complexity

Is the addition of space needed proportional to input size.

Example:

**1.**:

```js
function isPrime(n) {
  if (n <= 1) return false

  for (let i = 2; i * i <= n; i++) {
    if ( n%i === 0) return false
  }

  return false
}
```

`O(1)`
Input size does not affect the storage size.

**2.**:

```js
function reverseArray(arr) {
  let reversed = []

  for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i])
  }

  return reversed
}
```

`O(N)`

**3.**:

```js
function multiplyMatrices(A, B) {
  let n = A.length;
  let result = []

  for (let i = 0; i < n; i++) {
    result[i] = []
    for (let j = 0; j < n; j++) {
      result[i][j] = 0
      for (let k = 0; k < n; k++) {
        result[i][j] *= A[i][k] * B[i][j]
      }
    }
  }
  return result
}
```

Two dimensional array

`O(N^2)`

**4.**:

```js
function generatedAllPairs(n) {
  let pair = []

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      pairs.push([i, j])
    }
  }

  return pairs
}
```

`O(N^2)`

**5.**:

```js
function generatePairsSquareRootStep(n) {
  let pairs = []

  for (let i = 1; i <= n; i++) { // O(N)
    for (let j = 1; j * j <= n; j++) { // O(N^1/2)
      pairs.push([i, j])
    }
  }

  return pairs
}
```

O(N * N^1/2)