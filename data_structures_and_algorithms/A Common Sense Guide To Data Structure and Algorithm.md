# Data Structure and algorithm

Big O notation is used to express the time complexity of code.

Big O: For N values of data provided to an algorithm, how many steps would the algorithm take in a worst-case scenario?

## CHAPTER 1: Why Data Structures Matter

### Array

- It takes one step to READ data from an array.
- Linear SEARCH will take a maximum of N steps. Linear search involves searching the entire array (where N is the size of the array.)
- Appending a new data to the end of an array, only takes just one step.
- Inserting a new piece of data at the beginning or the middle of an array, however, is a different story. In these cases, we need to shift many pieces of data to make room for what we’re inserting, leading to additional steps.
- The worst-case scenario for insertion into an array—that is, the scenario in which insertion takes the most steps—is where we insert data at the beginning of the array.
We can say that insertion in a worst-case scenario can take up to N + 1 steps for an array containing N elements.
N shifts (every data element of the array) and one insertion.
- Deletion is a little bit similar to insertion. When it comes to deletion, the actual deletion itself is really just one step, but we need to follow up with additional steps of shifting data to the left to close the gap caused by the deletion.
- For an array containing N elements, the maximum number of steps that deletion would take is N steps.

### Set (How a Single Rule Can Affect Efficiency)

- set is an array with one additional constraint of
barring duplicates.
- Sets are useful when you need to ensure that you don’t have duplicate data.
For instance, if you’re creating an online phone book, you don’t want the same phone number appearing twice.
- READ: It takes just one step for the computer to look up what’s contained within a particular index.
- SEARCH: It takes up to N steps to search for a value within a set.
- INSERT: The computer first needs to determine that this value doesn’t already exist in the set (Which requires Searching).
Insertion into the end of a set will take up to N + 1 steps
for N elements.
In the worst-case scenario, where we’re inserting a value at the beginning of a set, the computer needs to search N cells to ensure that the set doesn’t already contain that value, another N steps to shift all the data to the right, and another final step to insert the new value. That’s a total of 2N + 1 steps.
- DELETE: Deletion itself takes one step. The maximum steps deletion takes is N steps.

### Exercises

1. For an array containing 100 elements, provide the number of steps the following operations would take:
    a. Reading
    answer = 1 step

    b. Searching for a value not contained within the array
    answer = 100 steps

    c. Insertion at the beginning of the array
    answer = 101 steps

    d. Insertion at the end of the array
    answer = 1 step

    e. Deletion at the beginning of the array
    answer = 100 steps

    f. Deletion at the end of the array
    answer = 1 step

2. For an array-based set containing 100 elements, provide the number of steps the following operations would take:
    a. Reading
    answer = 1 step

    b. Searching for a value not contained within the array
    answer = 100 steps

    c. Insertion of a new value at the beginning of the set
    answer = 101 steps

    d. Insertion of a new value at the end of the set
    answer = 101 steps

    e. Deletion at the beginning of the set
    answer = 100 steps

    f. Deletion at the end of the set
    answer = 1 step

3. Normally the search operation in an array looks for the first instance of a given value. But sometimes we may want to look for every instance of a given value.
For example, say we want to count how many times the value “apple” is found inside an array. How many steps would it take to find all the “apples”? Give your answer in terms of N.
answer = N steps

## CHAPTER 2: Why Algorithms Matter

As a software engineer you should be able to write quality code. There can be two snippets of code that both accomplish the same task, but one snippet may be better than the other.

There are numerous measures of code quality. One important measure is **code maintainability**.
Maintainability of code involves aspects such as the
**readability**, **organization**, and **modularity** of one’s code.
However, there’s another aspect of high-quality code, and that is **code efficiency**.
For example, you can have two code snippets that both achieve the same goal, but one runs faster than the other.

### ORDERED ARRAYS

The ordered array is almost identical to the “classic” array. The only difference is that ordered arrays require that the values are always kept in order.

- If our value ends up toward the beginning of the ordered array, we'd have fewer comparisons and more shifts.
- If our value ends up toward the end, we get more comparisons but fewer shifts. The fewest steps occur when the new value winds up at the very end, since no shifts are necessary.

> While insertion is less efficient for an ordered array than for a classic array, the ordered array has a secret superpower when it comes to searching.

#### Searching an Ordered Array

LINEAR SEARCH - Searching each cell from left to right until we find the value we are looking for.

- With an ordered array, however, we can stop a search early even if the value isn’t contained within the array (This is impossible in a classic array).
- The search stops as soon as the element it’s iterating over is greater than the search_value.
- The big advantage of an ordered array over a classic array is that an ordered array allows for an alternative searching algorithm. This algorithm is known as **binary search**, and it is a much, much faster algorithm than linear search.
- **With ordered arrays of a small size, the algorithm of binary search doesn’t have much of an advantage over linear search unless array is large.**
- With an array containing 100 values, here are the maximum number of steps each type of search would take:
• Linear search: 100 steps
• Binary search: 7 steps
If data was doubled in binary search, it would only cost one more step (i.e Array of 200 values will cost 8 steps, 400 values will cost 9 steps).

#### Code Implementation: Binary Search

Here’s an implementation of binary search in JavaScript:

```js
// Binary Search

const binarySearch = (array, searchValue) => {
  let lowerBound = 0
  let upperBound = array.length - 1

  while(lowerBound <= upperBound) { // using = here ensure that it will be able to search for the last element in the array.
    
    const midPoint = Math.floor((lowerBound + upperBound) / 2)

    const valueFound = array[midPoint]

    if(valueFound === searchValue) return midPoint

    if(searchValue > valueFound) lowerBound = midPoint + 1 // +1 shifts the lowBound away from the range that has been checked
    else if (searchValue < valueFound) upperBound = midPoint - 1
  }

  return null
}
```

0 + 9 = 9/2 = 4.5 = 4

5 + 9 = 14/2 = 7

## Chapter 3: Big O Notation

- we can’t simply label one algorithm a “22-step algorithm” and another a “400-step algorithm.” This is because the number of steps an algorithm takes cannot be pinned down to a single number.
- To help ease communication regarding time complexity, computer scientists have borrowed a concept from the world of mathematics to describe a concise and consistent language around the efficiency of data structures and algorithms. Known as Big O Notation, this formalized expression of these concepts allows us to easily categorize the efficiency of a given algorithm and convey it to others.
- In a worst-case scenario, linear search will take as many steps as there are elements in the array. As we’ve previously phrased it: for N elements in the array, linear search can take up to N steps. The appropriate way to express this in Big O Notation is: O(N)
Some pronounce this as “Big Oh of N.” Others call it “Order of N.” My personal preference, however, is “Oh of N.”
- Linear search will take N steps, we express this as O(N).

> An algorithm that is O(N) is also known as having linear time.

- Reading from an array takes just one step. So, we express this as O(1), which I pronounce “Oh of 1”.
Big O is an answer to that key question on your forehead: if there are N data elements, how many steps will the algorithm take?

- Let’s say we have an algorithm that always takes three steps no matter how much data there is. That is, for N elements, the algorithm always takes three steps. How would you express that in terms of Big O?
Based on everything you’ve learned up to this point, you’d probably say that it’s O(3).

However, it’s actually O(1).

> what Big O is truly concerned about: how will an algorithm’s performance change as the data increases?

- Say we had an algorithm of constant time that always took 100 steps no matter how much data there was. Would you consider that to be more or less performant than an algorithm that is O(N)?

As long as the algorithm with 100 steps stops increasing at a certain point, it is considered to be an O(1) algorithm, which is considered to be better than an O(N) algorithm.
The same is true even for an O(1) algorithm that always takes one million steps. As the data increases, there will inevitably reach a point at which O(N) becomes less efficient than the O(1) algorithm, and will remain so up toward an infinite amount of data.

### Same Algorithm, Different Scenarios

- Linear search isn’t always O(N). If we were to describe the efficiency of linear search in its totality, we’d say that linear search is O(1) in a best-case scenario (when the item we’re searching for is found in the first cell of the array), and O(N) in a worst-case scenario (If the item we’re looking for is in the final cell of the array).
- While Big O effectively describes both the best- and worst-case scenarios of a given algorithm, Big O Notation generally refers to the worst-case scenario unless specified otherwise. This is why most references will describe linear search as being O(N) even though it can be O(1) in a best-case scenario. 

This is because a “pessimistic” approach can be a useful tool.

#### An Algorithm of the Third Kind

- Let’s now look at how to describe binary search in terms of Big O Notation. We can’t describe binary search as being O(1), because the number of steps increases as the data increases. It also doesn’t fit into the category of O(N).
- In Big O terms, we describe binary search as having a time complexity of: O(log N). 

> I pronounce this as “Oh of log N.” This type of algorithm is also known as having a time complexity of log time.

#### Logarithms
Logarithms are the inverse of exponents. 
log2 8 = 3.
Another way of explaining log2
 8 is: if we kept dividing 8 by 2 until we ended
up with 1, how many 2s would we have in our equation?
8 / 2 / 2 / 2 = 1

In other words, how many times do we need to halve 8 until we end up with 1? In this example, it takes us three times. Therefore, log2 8 = 3.


O(log N) means that for N data elements, the algorithm would take log2
 N steps. If there are 8 elements, the algorithm would take three steps, since log2 8 = 3.
| N Elements | O(N) | O(log N) |
| :--- | :--- | :--- |
| 8 | 8 | 3 |
| 16 | 16 | 4 |
| 32 | 32 | 5 |
| 64 | 64 | 6 |
| 128 | 128 | 7 |
| 256 | 256 | 8 |
| 512 | 512 | 9 |
| 1024 | 1024 | 10 |



## CHAPTER 4: Speeding Up Your Code with Big O

### Bubble Sort

#### Code Implementation: Bubble Sort
Here’s an implementation of Bubble Sort in Python:
```py
def bubble_sort(list):
    unsorted_until_index = len(list) - 1
    sorted = False
    
    while not sorted:
        sorted = True
        for i in range(unsorted_until_index):
            if list[i] > list[i+1]:
                list[i], list[i+1] = list[i+1], list[i]
                sorted = False
        unsorted_until_index -= 1
    return list
```


### The Efficiency of Bubble Sort
The Bubble Sort algorithm contains two significant kinds of steps:
• **Comparisons**: two numbers are compared with one another to determine
which is greater.
• **Swaps**: two numbers are swapped with one another in order to sort them.

To put it this in a way that would hold true for arrays of all sizes, we’d say that for N elements, we make
(N - 1) + (N - 2) + (N - 3) … + 1 comparisons.

With an array containing 20 values, we’d have:
19 + 18 + 17 + 16 + 15 + 14 + 13 + 12 + 11 + 10 + 9 + 8 + 7 + 6 + 5 + 4 + 3 + 2 + 1 = 190 comparisons, and approximately 190 swaps, for a total of 380 steps.

If you look at the growth of steps as N increases, you’ll see that it’s growing by approximately N^2
. Take a look at the following table:
| Data Elements | Steps | N^2 |
| :--- | :--- | :--- |
| 5 | 20 | 25 |
| 10 | 90 | 100 |
| 20 | 380 | 400 |
| 40 | 1560 | 1600 |
| 80 | 6320 | 6400 |

> O(N2) is also referred to as quadratic time.


### Big O of an embedded loop
```js 
function hasDuplicateValue(array) {
    let steps = 0; // count of steps

    for(let i = 0; i < array.length; i++) {
        for(let j = 0; j < array.length; j++) {
            steps++; // increment number of u
            if(i !== j && array[i] === array[j]) {
                return true;
            }
        }
    }
    console.log(steps); // print number of steps if no duplicates
    return false;
}
```
Based on this, we can conclude that for N values in the array, our function would perform N^2 comparisons. This is because we perform an outer loop that must iterate N times to get through the entire array, and for each iteration, we must iterate another N times with our inner loop. That’s N steps * N steps, which is N^2 steps, leaving us with an algorithm of O(N^2).
This added code will print the number of steps taken when there are no duplicates. If we run hasDuplicateValue([1, 4, 5, 2, 9]), for example, we’ll see an output of 25 in the JavaScript console, indicating that there were 25 comparisons for the 5 elements in the array.

> Very often (but not always), when an algorithm nests one loop inside another, the algorithm is O(N^2). So, whenever you see a nested loop, O(N^2) alarm bells should go off in your head.

> Now, the fact that our function is O(N^2) should give us pause. This is because O(N^2) is considered a relatively slow algorithm. Whenever you encounter a slow algorithm, it’s worth spending some time to consider whether there are any faster alternatives. There may not be any better alternatives, but let’s first make sure.


### A Linear Solution
Following is another implementation of the hasDuplicateValue function that doesn’t rely on nested loops. It’s a bit clever, so let’s first look at how it works and then we’ll see if it’s any more efficient than our first implementation.

```js
function hasDuplicateValue(array) {
    let existingNumbers = [];
    for(let i = 0; i < array.length; i++) {
        if(existingNumbers[array[i]] === 1) {
            return true;
        } else {
            existingNumbers[array[i]] = 1;
        }
    }
    return false;
}
```
This new algorithm appears to make N comparisons for N data elements. This is because there’s only one loop.
We know that O(N) is much faster than O(N^2), so by using this second approach, we’ve optimized our hasDuplicateValue function significantly. This is a huge speed boost.


## CHAPTER 5: Optimizing Code with and Without Big O
There may be times when two competing algorithms are described in the same way using Big O, yet one algorithm is faster than the other.
In this chapter, you’re going to learn how to discern between two algorithms that seem to have the same efficiency, and how to select the faster of the two.


### Selection Sort

#### Code Implementation: Selection Sort
Here’s a JavaScript implementation of Selection Sort:
```js
function selectionSort(array) {
    for(let i = 0; i < array.length - 1; i++) {
        let lowestNumberIndex = i;
        for(let j = i + 1; j < array.length; j++) {
            if(array[j] < array[lowestNumberIndex]) {
                lowestNumberIndex = j;
            }
        }
        if (lowestNumberIndex != i) {
            let temp = array[i];
            array[i] = array[lowestNumberIndex];
            array[lowestNumberIndex] = temp;
        }
    }
    return array;
}
```

#### The Efficiency of Selection Sort 

| N Elements | Max # of Steps in Bubble Sort | Max # of Steps in Selection Sort |
| 5 | 20 | 14 (10 comparisons + 4 swaps) |
| 10 | 90 | 54 (45 comparisons + 9 swaps) |
| 20 | 380 | 199 (180 comparisons + 19 swaps) |
| 40 | 1560 | 819 (780 comparisons + 39 swaps) |
| 80 | 6320 | 3239 (3160 comparisons + 79 swaps) |

From this comparison, it’s clear Selection Sort takes about half the number of steps Bubble Sort does, indicating that Selection Sort is twice as fast.

> To know which is algorithm (With the same Big O)  is more efficient, calculate their steps.


### Big O Ignores constants
Selection Sort and Bubble Sort are described in exactly the same way.
Again, Big O Notation answers the key question: if there are N data elements, how many steps will the algorithm take? Because Selection Sort takes roughly half of N2 steps O(N2 / 2).
In reality, however, Selection Sort is described in Big O as O(N2), because **Big O Notation ignores constants**.
Even though the algorithm takes N2 / 2 steps, we drop the “/ 2” because it’s a regular number, and express the efficiency as O(N2).

- An algorithm that takes N2 + 10 steps would be expressed as O(N2), since we drop the 10, which is a regular number.
- With an algorithm that takes 2N steps (meaning N * 2), we drop the regular number and call it O(N).
- Even O(100N), which is 100 times slower than O(N), is also referred to as O(N).

> Both are described in Big O as O(N), but Selection Sort is actually twice as fast a Bubble Sort.

> Big O Notation only concerns itself with general categories of algorithm speeds. O(1), O(log N), O(N), O(N2) e.t.c are the are general categories of Big O. 


## CHAPTER 6: Optimizing for Optimistic Scenarios
Worst-case scenario isn’t the only situation worth considering. Being able to consider all scenarios is an imqportant skill that can help you choose the appropriate algorithm for every situation.

### Insertion Sort
Bubble Sort and Selection Sort, Both have efficiencies of O(N2), but Selection Sort is actually twice as fast. Insertion Sort that will reveal the power of analyzing scenarios beyond the worst case.

> Insertion Sort in a worst-case scenario is where the array is sorted in descending order. 

Best- and worst-case scenarios happen relatively infrequently. In the real world, average scenarios are what occur most of the time.
Take a randomly sorted array, for example. What are the odds that the values will occur in perfect ascending or descending order? It’s much more likely that the values will be all over the place.

In the best-case scenario, where the data is already sorted in ascending order, we end up making just one comparison per pass-through and not a single shift, since each value is already in its correct place.



#### Code Implementation: Insertion Sort
Here is a Python implementation of Insertion Sort:
```py
def insertion_sort(array):
    for index in range(1, len(array)):
        temp_value = array[index]
        position = index - 1
        while position >= 0:
        if array[position] > temp_value:
            array[position + 1] = array[position]
            position = position - 1
        else:
            break
        array[position + 1] = temp_value
    return array
```

- N^2 comparisons and shifts combined
- N - 1 removals
- + N - 1 insertions

`N^2 + 2N - 2 steps`

- Since Big O ignores constants we'd hace N^2 + N2
- Big O Notation only takes into account the highest order of N when we have multiple orders added together.

That is, if we have an algorithm that takes N4 + N3 + N2 + N steps, we only consider N4 to be significant—and just call it O(N4). 

We can simplify the expression further by throwing out the lower order, reducing it to O(N2).

| Sorting algorithm| Best Case | Average Case | Worst Case |
| :-- | :-- | :-- | :-- |
| Selection Sort | N^2 / 2 | N^2 / 2 | N^2 / 2 |
| Insertion | N | N^2 / 2 | N^2 |


#### Example 
```
function intersection(firstArray, secondArray){
    let result = [];
    for (let i = 0; i < firstArray.length; i++) {
        for (let j = 0; j < secondArray.length; j++) {
            if (firstArray[i] == secondArray[j]) {
                result.push(firstArray[i]);
            }
        }
    }
    return result;
}
```
Insertions, at most, would take N steps (if the two arrays happened to be identical). This is a lower order compared to N^2, so we’d still consider the algorithm to be O(N^2). If the arrays are of different sizes say N and M we’d say that the efficiency of this function is O(N * M). 

The code above need to be optimized, because it keeps searching after finding an intercept.
To fix this, we can add a single word to our implementation:
``` js
function intersection(firstArray, secondArray){
    let result = [];
    for (let i = 0; i < firstArray.length; i++) {
        for (let j = 0; j < secondArray.length; j++) {
            if (firstArray[i] == secondArray[j]) {
                result.push(firstArray[i]);
                break;
            }
        }
    }
    return result;
}
```
where the two elements do not contain a single shared value, we have no choice but to perform N^2 comparisons. But now, in the best-case scenario, where the two arrays are identical, we only have to perform N comparisons. In an average case, where the two arrays are different but share some values, the performance will be somewhere between N and N^2.


## CHAPTER 7: Big O in Everyday Code
> Determining the efficiency of our code is the first step in optimizing it.

#### Mean Average of Even Numbers
The following Ruby method accepts an array of numbers and returns the mean average of all its even numbers. How would we express its efficiency in terms of Big O?

```ruby
def average_of_even_numbers(array)
    sum = 0.0
    count_of_even_numbers = 0
    
    array.each do |number|
        if number.even?
            sum += number
            count_of_even_numbers += 1
        end
    end
    return sum / count_of_even_numbers
end
```
Our algorithm takes three extra steps in addition to the 3N steps, so the total number of steps is 3N + 3 (i.e. O(N).

#### Word Builder
This is an algorithm that collects every combination of two-character strings built from an array of single characters. For example, given the array: ["a", "b", "c", "d"], we’d return a new array containing the following
string combinations:
[
'ab', 'ac', 'ad', 'ba', 'bc', 'bd',
'ca', 'cb', 'cd', 'da', 'db', 'dc'
]
Following is a JavaScript implementation of this algorithm. Let’s see if we can figure out its Big O efficiency:

```js
function wordBuilder(array) {
    let collection = [];
    for(let i = 0; i < array.length; i++) {
        for(let j = 0; j < array.length; j++) {
            if (i !== j) {
                collection.push(array[i] + array[j]);
            }
        }
    }
    return collection;
}
```
Time Complexity: O(N^2)


Now, what would happen if we modified our algorithm to compute each combination of three-character strings? That is, for our example array of ["a", "b", "c", "d"], our function would return the array:
[
'abc', 'abd', 'acb',
'acd', 'adb', 'adc',
'bac', 'bad', 'bca',
'bcd', 'bda', 'bdc',
'cab', 'cad', 'cba',
'cbd', 'cda', 'cdb',
'dab', 'dac', 'dba',
'dbc', 'dca', 'dcb'
]

Here’s an implementation that uses three nested loops. What is its time complexity?
```js
function wordBuilder(array) {
    let collection = [];
    for(let i = 0; i < array.length; i++) {
        for(let j = 0; j < array.length; j++) {
            for(let k = 0; k < array.length; k++) {
                if (i !== j && j !== k && i !== k) {
                    collection.push(array[i] + array[j] + array[k]);
                }
            }
        }
    }
    return collection;
}
```

Time Complexity: O(N^3)

#### Array Sample
In the next example, we create a function that takes a small sample of an array. We expect to have very large arrays, so our sample is just the first, middlemost, and last value from the array.

```py
def sample(array):
    first = array[0]
    middle = array[int(len(array) / 2)]
    last = array[-1]
    return [first, middle, last]
```
Time Complexity: O(1)


#### Average Celsius Reading 
Here’s another example that involves mean averages. Let’s say we’re building weather-forecasting software. To determine the temperature of a city, we take temperature readings from across many thermometers across the city, and we calculate the mean average of those temperatures.

Following is some Ruby code that accomplishes this. What is its Big O?
```ruby
def average_celsius(fahrenheit_readings)
    # Collect Celsius numbers here:
    celsius_numbers = []
    # Convert each reading to Celsius and add to array:
    fahrenheit_readings.each do |fahrenheit_reading|
        celsius_conversion = (fahrenheit_reading - 32) / 1.8
        celsius_numbers.push(celsius_conversion)
    end
    # Get sum of all Celsius numbers:
    sum = 0.0
    celsius_numbers.each do |celsius_number|
        sum += celsius_number
    end
    # Return mean average:
    return sum / celsius_numbers.length
end
```
Inside the method, we run two loops. The first converts the readings to Celsius, and the second sums all the Celsius numbers. Since we have two loops that each iterate over all N elements, we have N + N, which is 2N (plus a few constant steps). Because Big O Notation drops the constants, this gets reduced to O(N).


#### Clothing Labels

Suppose we’re writing software for a clothing manufacturer. Our code accepts an array of newly produced clothing items (stored as strings), and creates text for every possible label we’ll need.
Specifically, our labels should contain the item name plus its size, ranging from 1 to 5. For example, if we have the array, ["Purple Shirt", "Green Shirt"], we want to produce label text for those shirts like this:
[
"Purple Shirt Size: 1",
"Purple Shirt Size: 2",
"Purple Shirt Size: 3",
"Purple Shirt Size: 4",
"Purple Shirt Size: 5",
"Green Shirt Size: 1",
"Green Shirt Size: 2",
"Green Shirt Size: 3",
"Green Shirt Size: 4",
"Green Shirt Size: 5"
]
Here is Python code that will create this text for an entire array of clothing items:
```js
def mark_inventory(clothing_items):
    clothing_options = []
    for item in clothing_items:
        # For sizes 1 through 5 (Python ranges go UP TO second
        # number, but do not include it):
        for size in range(1, 6):
            clothing_options.append(item + " Size: " + str(size))
return clothing_options
``` 
Nested loops that result in O(N^2) occur when each loop revolves around N. In our case, however, while our outer loop runs N times, our inner loop runs a constant five times. That is, this inner loop will always run five times no matter what N is.


#### Count the Ones
Here’s another algorithm where the Big O is different from what it seems at first glance. This function accepts an array of arrays, where the inner arrays contain 1’s and 0’s. The function then returns how many 1’s there are.
So, for this example input:
[
[0, 1, 1, 1, 0],
[0, 1, 0, 1, 0, 1],
[1, 0]
]
our function will return 7, since there are seven 1’s. Here’s the function in Python:

```py
def count_ones(outer_array):
    count = 0
    for inner_array in outer_array:
        for number in inner_array:
            if number == 1:
                count += 1
    return count
```
We can say that N represents how many numbers there are. And since our algorithm simply processes each number, the function’s time complexity is O(N).


#### Palindrome Checker
A palindrome is a word or phrase that reads the same both forward and backward. Some examples include “racecar,” “kayak,” and “deified.”

Here’s a JavaScript function that determines whether a string is a palindrome:

```js
function isPalindrome(string) {
    // Start the leftIndex at index 0:
    let leftIndex = 0;
    // Start rightIndex at last index of array:
    let rightIndex = string.length - 1;
    // Iterate until leftIndex reaches the middle of the array:
    while (leftIndex  < string.length / 2) {
        // If the character on the left doesn't equal the character
        // on the right, the string is not a palindrome:
        if (string[leftIndex] !== string[rightIndex]) {
        return false;
        }
        // Move leftIndex one to the right:
        leftIndex++;
        // Move rightIndex one to the left: 
        rightIndex--;
    }
    // If we got through the entire loop without finding any
    // mismatches, the string must be a palindrome:
    return true;
}
```
The loop runs N / 2 steps. However, Big O ignores constants. Because of this, we drop the division by 2, and our algorithm is O(N).

#### Get All the Products
Our next example is an algorithm that accepts an array of numbers and returns the product of every combination of two numbers.
For example, if we passed in the array, [1, 2, 3, 4, 5], the function returns:
[2, 3, 4, 5, 6, 8, 10, 12, 15, 20]
This is because we first multiply the 1 by the 2, 3, 4, and 5. Then we multiply the 2 by the 3, 4, and 5. Next, we multiply the 3 by the 4 and the 5. And finally, we multiply the 4 by the 5.

Here’s a JavaScript implementation of this algorithm:
```js
function twoNumberProducts(array) {
    let products = [];
    // Outer array:
    for(let i = 0; i < array.length - 1; i++) {
        // Inner array, in which j always begins one index
        // to the right of i:
        for(let j = i + 1; j < array.length; j++) {
        products.push(array[i] * array[j]);
        }
    }
    return products;
}
```
That would mean that the loop runs N / 2 steps. However, Big O ignores constants. Because of this, we drop the division by 2, and our algorithm is O(N).


#### Get All the Products

Our next example is an algorithm that accepts an array of numbers and returns the product of every combination of two numbers. 
For example, if we passed in the array, [1, 2, 3, 4, 5], the function returns:
[2, 3, 4, 5, 6, 8, 10, 12, 15, 20]
This is because we first multiply the 1 by the 2, 3, 4, and 5. Then we multiply the 2 by the 3, 4, and 5. Next, we multiply the 3 by the 4 and the 5. And
finally, we multiply the 4 by the 5.

```js
function twoNumberProducts(array) {
    let products = [];
    // Outer array:
    for(let i = 0; i < array.length - 1; i++) {
        // Inner array, in which j always begins one index
        // to the right of i:
        for(let j = i + 1; j < array.length; j++) {
            products.push(array[i] * array[j]);
        }
    }
    return products;
}
```
- N^2 / 2 steps
- 0(N^2)


#### Dealing with Multiple Datasets
Now, what happens if instead of computing the product of every two numbers from a single array, we instead compute the product of every number from one array by every number of a second array?

For example, if we had the array, [1, 2, 3] and the array, [10, 100, 1000], we’d compute the products as:
[10, 100, 1000, 20, 200, 2000, 30, 300, 3000]

Our code would be similar to the previous snippet, with some slight modifications:

```js
function twoNumberProducts(array1, array2) {
    let products = [];
    for(let i = 0; i < array1.length; i++) {
        for(let j = 0; j < array2.length; j++) {
            products.push(array1[i] * array2[j]);
        }
    }
    return products;
} 
```
- In a sense then, O(N * M) can be construed as a range between O(N) and O(N^2).


#### Password Cracker
You’re a hacker (an ethical one, of course) who’s trying to figure out someone’s password. You decide on a brute-force approach, and write some code that produces every possible string of a given length. Here’s the code you whipped up:

```ruby
def every_password(n)
    (("a" * n)..("z" * n)).each do |str|
        puts str
    end
end
```
The way this works is you pass in a number to the function, which becomes
the variable n.
If n is 3, for example, the code "a" * n produces the string "aaa". The code then sets a loop between all possible strings within the range of "aaa" and "zzz".
Running this code will print:
```
aaa
aab
aac
aad
aae
...
zzx
zzy
zzz
```
- O(2^N)
- In a certain sense, O(2^N) is the opposite of O(log N). With an algorithm of O(log N) (like binary search), each time the data is doubled, the algorithm takes one additional step. With an algorithm of O(2^N), each time we add one element of data, the algorithm doubles in steps!.
 - As you can see, O(2^N) gets even slower than O(N^3) at a point.


## CHAPTER 8: Blazing Fast Lookup with Hash Tables
If this array were unordered, searching for the price of a given food would take O(N) steps since the computer would have to perform a linear search. If it’s an ordered array, the computer could do a binary search, which would take O(log N).
While O(log N) isn’t bad, we can do better. In fact, we can do much better. By the end of this chapter, you’ll learn how to use a special data structure called a hash table, which can be used to look up data in just O(1) time. 

### Hash Tables
Most programming languages include a data structure called a hash table, and it has an amazing superpower: fast reading. 

> Note that hash tables are called by different names in various programming languages. Other names include hashes, maps, hash maps, dictionaries, and associative arrays.

Here’s an example of the menu as implemented with a hash table using Ruby:
```
menu = { "french fries" => 0.75, "hamburger" => 2.5,
"hot dog" => 1.5, "soda" => 0.6 }
```

> Looking up a value in a hash table has an efficiency of O(1) on average, as it usually takes just one step. Let’s see why.

The process of taking characters and converting them to numbers is known as **hashing**. 

The code that is used to convert those letters into particular numbers is called a **hash function**.

```
For example, here’s a simple way to map letters to numbers:

A = 1

B = 2
C = 3
D = 4
E = 5
and so on.
According to this code,
ACE converts to 135,
CAB converts to 312,
DAB converts to 412,
and
BAD converts to 214.
```

> The truth is that a hash function needs to meet only one criterion to be valid: a hash function must convert the same string to the same number every single time it’s applied. If the hash function can return inconsistent results for a given string, it’s not valid.

- Under the hood, a hash table stores its data in a bunch of cells in a row, similar to an array. 
- In a hash table, the placement of each value is determined by its key. That is, by hashing the key itself, we compute the index number where the key’s associated value should
be placed.


#### One-Directional Lookups
It’s important to point out that the ability to find any value within the hash table in a single step only works if we know the value’s key. 
-  If we tried to find a particular value without knowing its key, we’d still have to resort to searching each and every key-value pair within the hash table, which is O(N).
- We want to use a value to find its associated key, we cannot take advantage of the hash table’s fast lookup ability. This is because the whole premise of the hash table is that the key determines the value’s location. But this premise only works in one direction: 


#### Dealing with Collisions
Hash tables are awesome, but are not without complications.
- Some languages store the keys next to the values themselves. This is useful in case of collisions, which I’ll discuss in the next section.
- Trying to add data to a cell that is already filled is known as a collision. Fortunately, there are ways around it.
- One classic approach for handling collisions is known as separate chaining. When a collision occurs, instead of placing a single value in the cell, it places in it a reference to an array.
- In a scenario where the computer hits upon a cell that references an array, its search can take some extra steps, as it needs to conduct a linear search  within an array of multiple values. 
- So, it actually turns out that the worst-case performance for a hash table lookup is O(N).


#### Making an Efficient Hash Table
Ultimately, a hash table’s efficiency depends on three factors:

- How much data we’re storing in the hash table
- How many cells are available in the hash table
- Which hash function we’re using

It makes sense why the first two factors are important. If you have a lot of data and only a few cells, there will be many collisions and the hash table will lose its efficiency. Let’s explore, however, why the hash function itself is important for efficiency.

Let’s say we’re using a hash function that always produces a value that falls in the range from 1 to 9. An example of this is a hash function that converts letters into their corresponding numbers and keeps adding the resulting digits together until it ends up with a single digit.

```
For example:
PUT = 16 + 21 + 20 = 57
Because 57 contains more than one digit, the hash function breaks up the 57 into 5 + 7:
5 + 7 = 12
12 also contains more than one digit, so it breaks up the 12 into 1 + 2:
1 + 2 = 3
In the end, PUT hashes into 3.
This hash function by its very nature will always return a number 1 through 9.
```
With this hash function, the computer would never even use cells 10 through 16 even though they exist. All data would be stuffed into cells 1 through 9.

> A good hash function, therefore, is one that distributes its data across all available cells. The more we can spread out our data, the fewer collisions we will have.


#### The Great Balancing Act
- Hash table’s efficiency goes up as its number of collisions goes down. In theory, then, the best way to avoid collisions would be to have a hash table with a large number of cells.

- A hash table with 1,000 cells would seem to be wonderful for our case, since odds are there would be no collisions.
However, while avoiding collisions is important, we have to balance that with avoiding memory hogging as well.

- Although a hash table with 1,000 cells for our five pieces of data is great for avoiding collisions, we’d be using up 1,000 cells just to store just five pieces of data, and that’s a poor use of memory

- This is the balancing act that a hash table must perform. A good hash table strikes a balance of avoiding collisions while not consuming lots of memory.
To accomplish this, computer scientists have developed the following rule of thumb: for every 7 data elements stored in a hash table, it should have 10 cells.
So, if you’re planning on storing 14 elements, you’d want to have 20 available cells, and so on.

> This ratio of data to cells is called the load factor. Using this terminology, we’d say that the ideal load factor is 0.7 (7 elements / 10 cells).

- Again, most of the internals of a hash table are managed by the computer language you’re using. It decides how big the hash table needs to be, what hash function to use, and when it’s time to expand the hash table. You have the right to assume that your programming language has implemented its hash table to allow for peak performance.


#### Hash Tables for Organization
Because hash tables keep data in pairs, they are useful in many scenarios for organizing data. Some data exists naturally in paired form.
- The fast-food menu and thesaurus scenarios from this chapter are classic examples of this. 
- In Python, hash tables are known as dictionaries since a dictionary is a common form of paired data: it’s a list of words with their respective definitions.

- Other examples of naturally paired data can include tallies, such as political candidates and the number of votes each received:
`{"Candidate A" => 1402021, "Candidate B" => 2321443, "Candidate C" => 432}`

An inventory tracking system, which keeps track of how much of each item is in supply, is another tally example:
`{"Yellow Shirt" => 1203, "Blue Jeans" => 598, "Green Felt Hat" => 65}``


Say we encounter a function that returns the meaning of common HTTP status code numbers:
```ruby
def status_code_meaning(number)
    if number == 200
        return "OK"
    elsif number == 301
        return "Moved Permanently"
    elsif number == 401
        return "Unauthorized"
    elsif number == 404
        return "Not Found"
    elsif number == 500
        return "Internal Server Error"
    end
end
```

By using a hash table, we can completely eliminate the conditional logic:
```ruby
STATUS_CODES = {200 => "OK", 301 => "Moved Permanently",
401 => "Unauthorized", 404 => "Not Found",
500 => "Internal Server Error"}
def status_code_meaning(number)W
return STATUS_CODES[number]
end
```

We can create an entire list of dogs if we place multiple hash tables inside an array:
```ruby
[
{"Name" => "Fido", "Breed" => "Pug", "Age" => 3, "Gender" => "Male"},
{"Name" => "Lady", "Breed" => "Poodle", "Age" => 6, "Gender" => "Female"},
{"Name" => "Spot", "Breed" => "Dalmatian", "Age" => 2, "Gender" => "Male"}
]
```

#### Hash Tables for Speed
While hash tables are a perfect fit for paired data, they can also be used to make your code faster—even if your data doesn’t exist as pairs. And this is where things really get exciting.

Here’s a simple array:
array = [61, 30, 91, 11, 54, 38, 72]

However, what would happen if we ran some code that would convert these numbers into a hash table that looked like this?
```
hash_table = {61 => true, 30 => true, 91 => true,
11 => true, 54 => true, 38 => true, 72 => true}
```

##### Array Subset
Here’s a JavaScript implementation of this approach:
```js
function isSubset(array1, array2) {
    let largerArray;
    let smallerArray;
    // Determine which array is smaller:
    if(array1.length > array2.length) {
        largerArray = array1;
        smallerArray = array2;
    } else {
        largerArray = array2;
        smallerArray = array1;
    }
    // Iterate through smaller array:
    for(let i = 0; i < smallerArray.length; i++) {
        // Assume temporarily that the current value from
        // smaller array is not found in larger array:
        let foundMatch = false;
        // For each value in smaller array, iterate through
        // larger array:

        for(let j = 0; j < largerArray.length; j++) {
            // If the two values are equal, it means  the current
            // value in smaller array is present in the larger array:
            if(smallerArray[i] === largerArray[j]) {
                foundMatch = true;
                break;
            }
        }
        // If the current value in smaller array doesn't exist
        // in larger array, return false:
        if(foundMatch === false) { return false; }
    }
    // If we get to the end of the loops, it means that all
    // values from smaller array are present in larger array:
    return true;
}
```

- When we analyze the efficiency of this algorithm, we find that it’s O(N * M).

In our new approach, after we’ve determined which array is larger and which is smaller, we’re going to run a single loop through the larger array, and store each value inside of a hash table:
```js
let hashTable = {};
for(const value of largerArray) {
hashTable[value] = true;
}
```

For the earlier example, ["a", "b", "c", "d", "e", "f"], once we’ve run it through this loop, we end up with a hash table that looks like this:
```
{"a": true, "b": true, "c": true, "d": true, "e": true, "f": true}
```

Now, here’s the brilliant part. Once the first loop is complete and we now have this hash table to work with, we can then begin a second (non-nested) loop that iterates through the smaller array:
```js
for(const value of smallerArray) {
    if(!hashTable[value]) { return false; }
}
```


Exercises: 
1. Write a function that returns the intersection of two arrays. The intersection is a third array that contains all values contained within the first two arrays. For example, the intersection of [1, 2, 3, 4, 5] and [0, 2, 4, 6, 8] is [2, 4].
Your function should have a complexity of O(N). (If your programming language has a built-in way of doing this, don’t use it. The idea is to build the algorithm yourself.)
```js 
// Find Intersection 
let array1 = [1, 2, 3, 4, 5];
let array2 = [0, 2, 4, 6, 8];

// Finds the intersection of two arrays
findIntersection = (array1, array2) => {
    let inArray1 = {};
    let intercepts = [];
    for (item of array1) {
        inArray1[item] = true;
    }
    
    for (item of array2) {
         if (inArray1[item]) {
             intercepts.push(item);
         }   
    }
    return intercepts;
}
console.log(findIntersection(array1, array2));
```


2. Write a function that accepts an array of strings and returns the first duplicate value it finds. For example, if the array is ["a", "b", "c", "d", "c", "e", "f"], the function should return "c", since it’s duplicated within the array. (You can assume that there’s one pair of duplicates within the array.) Make sure the function has an efficiency of O(N).

```js
// Find the First Duplicate Value in an array
const list = ["a", "b", "c", "d", "c", "e", "f"];

let findFirstDuplicate = (array) => {
    let inList = {};
    // Checking array for Duplicate
    for (item of array) {
        if (inList[item]) {
            return item;
        } else {
            // Hashing the array
            inList[item] = true;
        }
    }
    return false;
}

console.log(findFirstDuplicate(list));
```


4. Write a function that returns the first non-duplicated character in a string.
For example, the string, "minimum" has two characters that only exist once—the "n" and the "u", so your function should return the "n", since it occurs first. The function should have an efficiency of O(N).

```js
// Find the first Non-duplicate character of a string
const str = "minimum";

let findFirstNonDupChar = (str) => {
    let inStr = {};
    let dupChar = {};
    
    // Find Duplicate Character
    for (char of str) {
        if (inStr[char]) {
            dupChar[char] = true;
        } else {
            inStr[char] = true;       
        }
    }
    
    // return the first Non-Duplicate char
    for (char of str) {
        if (!dupChar[char]) {
            return char;
        }
    }
    return false;
}

console.log(findFirstNonDupChar(str));
```

## CHAPTER 9: Crafting Elegant Code with Stacks and Queues
These are two data structures that can help improve code elegance and maintainability.

### Stacks
A stack stores data in the same way arrays do—it’s simply a list of elements. The one catch is that stacks have the following three constraints:
- Data can be inserted only at the end of a stack.
- Data can be deleted only from the end of a stack.
- Only the last element of a stack can be read.

### Abstract Data Types
Most programming languages don’t actually come with the stack as a built- in data type or class. Instead, it’s up to you to implement it yourself. This is a stark contrast with arrays, which are available in most languages.
To create a stack, then, you generally have to use one of the built-in data structures to actually hold the data. Here is one way to implement a stack using Ruby, which uses an array under the hood:

```ruby 
class Stack
    def initialize
        @data = []
    end
    def push(element)
        @data << element
    end
    def pop
        @data.pop
    end
    def read
        @data.last
    end
end
```

The stack data structure, then, isn’t the same kind of data structure that an array is. The array is built into most programming languages and interacts directly with the computer’s memory. The stack, on the other hand, is really a set of rules and processes around how we should interact with an array so that we can achieve a particular result.
In fact, a stack doesn’t even care about what data structure is under the hood. All it cares about is that there’s a list of data elements that act in a LIFO way. Whether we accomplish this with an array or some other type of built-in data structure doesn’t actually matter. Because of this, **the stack is an example of what is known as an abstract data type**.

> ADT (Abstract Data Type) - It’s a kind of data structure that is a set of theoretical rules that revolve around some other built-in data structure.

- Set is an ADT (Abstract Data Type).
- It should be noted that even a built-in data structure can be an abstract data type. Even if a programming language does implement its own Stack class, it doesn’t change the fact that the stack data structure is still a concept that allows for various data structures to be used under the hood.


#### Stacks in Action
Although a stack is not typically used to store data on a long-term basis, it can be a great tool to handle temporary data. 

##### Code Implementation: Stack-Based Code Linter
Here’s a Ruby implementation of the preceding algorithm. Note that we are using our earlier Ruby implementation of the Stack class:
```ruby 
class Linter
    def initialize
        # We use a simple arrayh  to serve as our stack:
        @stack = Stack.new
    end
    def lint(text)
        # We start a loop which reads each character in our text:
        text.each_char do |char|
        # If the character is an opening brace:
        if is_opening_brace?(char)
            # We push it onto the stack:
            @stack.push(char)
            # If the character is a closing brace:
        elsif is_closing_brace?(char)
            # Pop from stack:
            popped_opening_brace = @stack.pop
            # If the stack was empty, so what we popped was nil,
            # it means that an opening brace is missing:
            if !popped_opening_brace
                return "#{char} doesn't have opening brace"
            end
            # If the popped opening brace doesn't match the
            # current closing brace, we produce an error:
            if is_not_a_match(popped_opening_brace, char)
                return "#{char} has mismatched opening brace"
            end
        end
    end
    # If we get to the end of line, and the stack isn't empty:
    if @stack.read
        # It means we have an opening brace without a
        # corresponding closing brace, so we produce an error:
        return "#{@stack.read} does not have closing brace"
    end
    # Return true if line has no errors:
    return true
end
private
def is_opening_brace?(char)
["(", "[", "{"].include?(char)
end
def is_closing_brace?(char)
[")", "]", "}"].include?(char)
end
def is_not_a_match(opening_brace, closing_brace)
closing_brace != {"(" => ")", "[" => "]", "{" => "}"}[opening_brace]
end
end
```


#### The Importance of Constrained Data Structures
By definition, if a stack is just a constrained version of an array, that means an array can do anything a stack can do. If so, what advantage does a stack provide?

- First, when we work with a constrained data structure, we can prevent potential bugs. The linting algorithm, for example, only works if we exclusively remove items from the top of the stack. If a programmer inadvertently writes code that removes items from the middle of the array, the algorithm will break down. By using a stack, we’re forced into only removing items from the top, as it’s impossible to get the stack to remove any other item.

- Second, data structures like stacks give us a new mental model for tackling problems. (LIFO).

- As soon as someone sees a stack being used within an algorithm, they immediately know that the algorithm is working with a LIFO-based process

- The “undo” function in a word processor, for example, is a great use case for a stack. 


#### Queues
Like stacks, queues are arrays with three restrictions (it’s just a different set of restrictions):

 - Data can be inserted only at the end of a queue. (This is identical behavior to the stack.)
- Data can be deleted only from the front of a queue. (This is the opposite behavior of the stack.)
- Only the element at the front of a queue can be read. (This, too, is the opposite of behavior of the stack.)


##### Queue Implementation

I mentioned that the queue is an abstract data type. Like many other abstract data types, it doesn’t come implemented in many programming languages.
Here is a Ruby implementation of a queue:
```ruby 
class Queue
    def initialize
        @data = []
    end
    def enqueue(element)
        @data << element
    end
    def dequeue
        # The Ruby shift method removes and returns the
        # first element of an array:
        @data.shift
    end
    def read
        @data.first
    end
end
```

 
 #### Queue in Action
 Queues are common in many applications, ranging from printing jobs to background workers in web applications.


## CHAPTER 10: Recursively Recurse with Recursion
What happens when the blah() function defined here is called?
```js 
function blah() {
blah();
}
```
As you probably guessed, it will call itself infinitely, since blah() calls itself, which in turn calls itself, and so on. Recursion is the term for a function calling itself. Indeed, infinite recursion, as in the above example, is utterly useless. When harnessed correctly, though, recursion can be a powerful tool.

Let’s say you work at NASA and need to program a countdown function for launching spacecraft. The particular function that you’re asked to write should accept a number—such as 10—and display the numbers from 10 down to 0.
Take a moment and implement this function in the language of your choice. When you’re done, read on.
Odds are that you wrote a simple loop, along the lines of this JavaScript implementation
```js
Function countdown(number) {
    for(let i = number; i >= 0; i--) {
        console.log(i);
    }
}
countdown(10);
```
There’s nothing wrong with this implementation, but it may have never occurred to you that you don’t have to use a loop.
How? Let’s try recursion instead. Here’s a first attempt at using recursion to implement our countdown function:
```js 
function countdown(number) {
    console.log(number);
    countdown(number - 1);
}
```

Now, just because you can use recursion doesn’t mean that you should use recursion. Recursion is a tool that allows for writing elegant code. In the preceding example, the recursive approach is not necessarily any more beautiful or efficient than using a classic for loop. However, we will soon encounter examples in which recursion shines.
In almost any case in which you can use a loop, you can also use recursion.

To perfect our solution, we need a way to end our countdown at 0 and prevent the recursion from continuing on forever.
We can solve this problem by adding a conditional statement that ensures that if number is currently 0, we don’t call countdown() again:
We can solve this problem by adding a conditional statement that ensures that if number is currently 0, we don’t call countdown() again:
```js 
function countdown(number) {
console.log(number);
if(number === 0) {
return;
} else {
countdown(number - 1);
}
}
```
> In recursion terminology, the case in which our function will not recurse is known as the base case. So, 0 is the base case for our countdown() function.

Again, every recursive function needs at least one base case to prevent it from
calling itself indefinitely.
FACTORIAL 
```ruby 
def factorial(number)
if number == 1
return 1
else
return number * factorial(number - 1)
end
end
```

### Applications
1. Filesystem Traversal - 
One type of problem in which recursion is a natural fit is when we need to delve into multiple layers of a problem without knowing how many layers there are.
Take the example of traversing through a filesystem. Let’s say you have a script that does something with all the contents inside a directory, such as printing all the subdirectory names. However, you don’t want the script to
only handle the immediate subdirectories you want it to act on all the sub-directories within the subdirectories of the directory and all of their subdirectories, and so on.
Let’s create a simple Ruby script that prints the names of all subdirectories within a given directory:
```ruby 
def find_directories(directory)
# Inspect each file within the directory. Some of these "files" may
# actually be subdirectories.
Dir.foreach(directory) do |filename|
# If the current file is itself a subdirectory:
if File.directory?("#{directory}/#{filename}") &&
filename != "." && filename != ".."
# Print out the full path name:
puts "#{directory}/#{filename}"
end
end
end
```
We can call this function by passing in a directory name. If we want to call it on the current directory, we could write: find_directories(".")
While this works well, it only prints the names of the subdirectories immediately within the current directory. It does not print the names of the subdirectories within those subdirectories.
Let’s update our script so that it can search one level deeper:
```ruby
def find_directories(directory)
# Loop through first-level directory:
Dir.foreach(directory) do |filename|
if File.directory?("#{directory}/#{filename}") &&
filename != "." && filename != ".."
puts "#{directory}/#{filename}

# Loop through second-level subdirectory:
Dir.foreach("#{directory}/#{filename}") do |inner_filename|

if File.directory?("#{directory}/#{filename}/#{inner_filename}") &&
inner_filename != "." && inner_filename != ".."
puts "#{directory}/#{filename}/#{inner_filename}"
end
end
end
end
end
```
Now, every time our script discovers a directory, it then conducts an identical loop through the subdirectories of that directory and prints the names of the subdirectories. But this script also has its limitations because it’s only searching two levels deep. What if we want to search three, four, or five levels deep? We would need five levels of nested loops.
And what if we want to search as deep as our subdirectories go? That would seem to be impossible, as we don’t even know how many levels there are. And this is where recursion really shines. With recursion, we can write a script that goes arbitrarily deep—and is also simple!
```ruby 
def find_directories(directory)
Dir.foreach(directory) do |filename|
if File.directory?("#{directory}/#{filename}") &&
filename != "." && filename != ".."
puts "#{directory}/#{filename}"
# Recursively call this function on the subdirectory:
find_directories("#{directory}/#{filename}")
end
end
end
```

As this script encounters files that are themselves subdirectories, it calls the find_directories method upon that very subdirectory. The script can therefore dig as deep as it needs to, leaving no subdirectory unturned.

As you’ve seen with the filesystem example, recursion is often a great choice for an algorithm in which the algorithm needs to dig into an arbitrary number of levels deep into something.


## CHAPTER 11:Learning to Write in Recursive
### The Staircase Problem 
Here’s one of my favorite examples. There’s a famous question—known as the “Staircase Problem”—that goes like this:

Let’s say we have a staircase of N steps, and a person has the ability to climb one, two, or three steps at a time. How many different possible “paths” can someone take to reach the top? Write a function that will calculate this for N steps.

For an 11-step staircase, the first subproblem that comes to mind is a 10-step staircase. Let’s go with that for now. If we knew how many possible paths there are to climb a 10-step staircase, can we use that as a base for calculating the paths for an 11-step staircase?
For starters, we do know that climbing an 11-step staircase will take at least as many steps as climbing a 10-step staircase. That is, we have all the paths to get to stair number 10, and from there, one can climb one more step to get to the top.
We’ve determined, then, that the number of steps to the top is at least the sum of all the paths to stairs 10, 9, and 8. 

However, in thinking about it even further, it’s evident there aren’t any other possible paths to the top beyond these. After all, one cannot jump from stair 7 to stair 11. So, we can conclude that for N steps, the number of paths is:
```ruby
number_of_paths(n - 1) + number_of_paths(n - 2) + number_of_paths(n - 3)
```
Other than the base case, this will be the code for our function!
```ruby 
def number_of_paths(n)
number_of_paths(n - 1) + number_of_paths(n - 2) + number_of_paths(n - 3)
end
```

It’s seems too good to be true that this is almost all the code we need. But it is true. All that’s left to deal with is the base case.

#### Staircase Problem Base Case
Determining the base case for this problem is slightly tricky. That’s because when this function gets to an n of 3, 2, or 1, the function will call itself on n of 0 or below. For example, number_of_paths(2) calls itself for number_of_paths(1), number_of_paths(0), and number_of_paths(-1).
One way we can deal with this is by “hardcoding” all the bottom cases:
```ruby
def number_of_paths(n)
return 0 if n <= 0
return 1 if n == 1
return 2 if n == 2
return 4 if n == 3
return number_of_paths(n - 1) + number_of_paths(n - 2) +
number_of_paths(n - 3)
end
```

### Anagram Generation
We’re going to write a function that returns an array of all anagrams of a
given string. An anagram is a reordering of all the characters within a string.
For example, the anagrams of "abc" are:
["abc",
"acb",
"bac",
"bca",
"cab",
"cba"]

#### The Efficiency of Anagram Generation
For a string containing three characters, we create permutations that start with each of the three characters. Each permutation then picks its middle character from one of the two remaining characters, and its last character from the last character that’s left. This is 3 * 2 * 1, which is six permutations.

Looking at this for other string lengths, we get:
4 characters: 4 * 3 * 2 * 1 anagrams
5 characters: 5 * 4 * 3 * 2 * 1 anagrams
6 characters: 6 * 5 * 4 * 3 * 2 * 1 anagrams

Do you recognize this pattern? It’s a factorial!
That is, if the string has six characters, the number of anagrams is whatever the factorial of 6 is. This is 6 * 5 * 4 * 3 * 2 * 1, which computes to 720.
The mathematical symbol for factorial is the exclamation point. So, factorial 6 is expressed as 6!, and the factorial of 10 is expressed as 10.

For a string of length N, we produce N! anagrams. In Big O Notation then, this is expressed as O(N!). This is also known as factorial time. O(N!) is the slowest category of Big O we’ll encounter in this book. 


### Exercises 
1. 
```js 
/*
 * Use recursion to write a function that accepts 
 * an array of strings and returns the total number 
 * of characters across all the strings. For example,
 * if the input array is ["ab", "c", "def", "ghij"], 
 * the output should be 10 since there are 10 
 * characters in total.
 */

let countStrOfArr = (array) => {
	if(array){
		let arrayLen = array.length;
		let strLen = 0;

		if(arrayLen >= 1) {
			strLen = array[arrayLen - 1].length;
			console.log(` Poped Array: ${array.pop()}`);
			return strLen + countStrOfArr(array);
		} else {
			return 0;
		}
	}
}

const arrayOfStr = ["ab", "c", "def", "ghij"];
console.log(countStrOfArr(arrayOfStr));
```





