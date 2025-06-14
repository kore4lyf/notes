# LeetCode

## Common LeetCode questions

1. Blind 75
2. NeetCode 150
3. High frequency company list - A lot of commonly asked questions on leet code, categorized by companies.

Common LeetCode Question type:

- Arrays and Hashing
- Two Pointers
- Sliding Window
- Binary Search
- Linked List
- Trees
- Heap / Priority Queue
- Graphs

The question that comes out the most are related to topics above.

Spend a medium amount of time on a problem before giving up on the problem or looking for the answers (30 mins - 40 mins).

Optimum strategy used for solving leet code problems:
PBOI Method:
**P - Pen and Paper** - Always use pen and paper.

**B - Bruteforce** - See if you can loop through to get the answer.
**O - Optimize** - See how can you can optimize you code.
**I - Implement** - Code up the optimal solution.

**Principle of essential complexity**: Good code minimizes edge cases.

After completing a question:

SAND Method:

- **S - Spread sheet technique**: NeetCode has a spreadsheet that includes a one line solution that can be used to solve the Blind 75 problem. It's important to memorize one or two line solutions in an interview, if you can recall that in the an interview it will make a difference.
- **A - ANKI approach** - is a mobile flashcard app that can be ued to practice some of the questions. Which will in turn allow you retain information.
- **N - Notion approach**
- **D - Do more damn problems**

## Guide to solving LeetCode problems

1. **Simplify the problem**: All leet code problems are the same in nature, you are given an input and you must change it to the expected output.
After you have been given a question readout the question to yourself. "The inputs are this (x,x,x), we do this to the inputs and we'd get this (y,y,y). Ask lots of questions (You get a bonus mark for asking questions). Make sure you catch the edge cases.

Example:
No. 127 Word Ladder

A transfromation sequence from `beginWord` to word `endWord` using a dictionary `wordList` is a sequence of words `beginWord -> S1 -> S2 -> ... -> Sk` such that:

- Every adjacent pair of words differs by a single letter.
- Every `S1 for 1 <= K` is in `wordList`. Note that `beginWord` does not need to be in wordList.
- Sk == endWord

Given two words, `beginWord` and `endWord`, and a dictionary `wordList`, return the number of words in the shortest transformation sequence from `beginWord` to `endWord`, or `0` if no such sequence exists.

Solution:

beginWord: string
endWord: string
wordString: List[str]

e.g.

beginWord = "hit"
endWord = "cog"

wordList = ["hot", "dot", "dog", "lot", "log", "cog"]

Questions:

You can ask your interviewer, 
is endWord guranteed to be in the wordList?
are the words case sensitive?
if beginWord equals endWord, is the length 1, or do we return 0?
if wordList is empty do we return 0?

2 Pattern Recognition

LeetCode is just pattern recognition, you can solve most of these problems using common data structures.

Step 1: Start with a straight foward solution.
then whats the Big O Notation of the solution.

Step 2: Find Optimal Solution

## Exercises

Converting O(N^2) to O(N)

```js 
function hasDuplicateValue(array) {

  for(let i = 0; i < array.length; i++) {
    for(let j = 0; j < array.length; j++) {
        if(i !== j && array[i] === array[j]) {
            return true;
        }
    }
  }

console.log(steps); // print number of steps if no duplicates
return false;
}
```

Above is function that find if an array has a duplicate value. For example, the array [1, 5, 3, 9, 1, 4] has two instances of the number 1, so we’d return true to indicate that the array has a case of duplicate numbers.

```js
function hasDuplicateValue(array) {
  let existingIndexNumbers = [];

  for(let i = 0; i < array.length; i++) {
    if(existingNumbers[array[i]]) {
      return true;
    } else {
      existingNumbers[array[i]] = true;
    }
  }
}
```

Since the array is an array of numbers, by looping through their values in the original array and using the value as an index in existingIndexNumber, it becomes easy to find an existing value in the array.

### Hash Tables

- Write a function that returns the intersection of two arrays. The intersection is a third array that contains all values contained within the first two arrays. For example, the intersection of [1, 2, 3, 4, 5] and [0, 2, 4, 6, 8] is [2, 4].
Your  function  should  have  a complexity of O(N).
(If  your  programming language has a built-in way of doing this, don’t use it. The idea is to build the algorithm yourself.)

Solution:

```js
const findIntersection = (firstArr, secondeArr) => {
  // Edge case check
  if(!firstArr instanceof Array || !secondeArr instanceof Array) {
    console.log("Provide array as input")
    throw new Error("Invalid input, expected array first Arg: array, second Arg: array")
  }

  let intersection = []
  const firstArrMap = new Map()

  // convert first array to map
  for(let item of firstArr) {
    firstArrMap.set(item, true)
  }

  for(let item of secondeArr) {
    if(firstArrMap.get(item)) intersection = [...intersection, item]
  }

  return intersection
}

const firstArr = [1, 2, 3, 4, 5]

const secondeArr = [0, 2, 4, 6, 8]

console.log(findIntersection(firstArr, secondeArr)) // [ 2, 4 ]
```

- Write a function that accepts an array of strings and returns the first duplicate value it finds. For example, if the array is ["a", "b", "c", "d", "c", "e", "f"], the function should return "c", since it’s duplicated within the array.
(You can assume that there’s one pair of duplicates within the array.)
Make sure the function has an efficiency of O(N).

Solution:

```js
const findDuplicate = arr => {
  if(!Array.isArray(arr)) throw new Error("Provide array as input")
  const arrMap = new Map()

  for(item of arr) {
    if(arrMap.get(item)) return item
    arrMap.set(item, true)
  }
}

const data = ["a", "b", "c", "d", "c", "e", "f"]

console.log(findDuplicate(data)) // c
```

- Write a function that accepts a string that contains all the letters of the alphabet except one and returns the missing letter. For example, the string, "the quick brown box jumps over a lazy dog" contains all the letters of the alphabet except the letter, "f". The function should have a time complexity of O(N).

Solution:

```js
const findMissingAlphabetChar = text => {
  if(typeof text != "string") throw new Error("input must be of type string")

  const aCharCode = "a".charCodeAt(0)
  const zCharCode = "z".charCodeAt(0)
  const alphabetsMap = new Map()

  for(char of text){
    if(alphabetsMap.get(char)) continue
    alphabetsMap.set(char, true)
  }

  for(let pointer = aCharCode; pointer <= zCharCode; pointer++) {
    if(!alphabetsMap.get(String.fromCharCode(pointer))) return String.fromCharCode(pointer)
  }
}

const text = "the quick brown box jumps over a lazy dog"

console.log(findMissingAlphabetChar(text)) // f
```

- Write a function that returns the first non-duplicated character in a string.
For example, the string, "minimum" has two characters that only exist once—the "n" and the "u", so your function should return the "n", since it occurs first. The function should have an efficiency of O(N).

```js

```