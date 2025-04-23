# Big O notation

Big O notation is a way to measure the time complexity of an algorithm.
It help us understand how the execution time of an algorithm grows as the size fo the input increases in the worst, best or average case.

1. O(1) Constant - The algorithm execution time doesn't depend on the size of the input. e.g Accessing an element in an array, Checking if a number is even.

2. O(log n) Logarithmic - The algorithms execution time grow logarithmically as the input size increases, but it grow much slower than linear O(n) growth. e.g. Binary Search, Searching an AVL tree.

3. O(n) Linear - The algorithm execution time grow as the size of the input grows. The bigger the input the larger the execution time. e.g.  e.g. Traversing an Array or linked list.

4. O(n log n) Linear Logarithm - This often appears in efficient sorting algorithms. It's a combination Linear and Logarithmic time complexity. e.g. Quick Sort, Merge Sort.

5. O(n^2) Quadratic - This means of the execution time is proportional to the square fo the input size.
It's common in algorithms with nested loops. e.g. Bubble sort, Insertion sort.

6. O(n^3) Cubic - This means the execution time is proportional to the cube of the input size. It appears in algorithms with triple nested loops. e.g. Matrix multiplication, 3D array traversal.

7. O(2^n) Exponential - This means the execution time grows exponentially with the input size. It often appear in algorithms, where there is a need to explore all possible subset or combinations. e.g. Fibonacci Sequence (recursive solution), Generating all subset of a set.

8. O(n!) Factorial - This means the execution time grow in proportion to the factorial of the input size. It typically appear in permutation problems. e.g. Generating permutation of a set.
