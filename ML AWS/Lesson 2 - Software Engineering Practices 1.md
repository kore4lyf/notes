# Software Engineering Practices Part 1
<!-- title: Software Engineering Practicess Part 1 -->
In this chapter you will learn
- How to write clean and modular code
- Improve code efficiency
- Add effective documentation
- Use version control
  
## Clean and Modular Code (Refactoring)
It could be difficult to know exactly what functions would best modularize the steps in your code if you haven't experimented enough with your code to understand what these steps are.
The best solution to this is **Refactoring** code to improve internal structure without changing external functionality.
Refactoring gives you an oppourtunity to clean and modularize your code after you have produced a working code.

##### Why Refactor?
- Reduce workload in long run
- Easier to maintain code
- Reuse more of your code
- Become a better developer

## Writting Clean Code
**Tip 1: Use meaningful names** 
Use meaningful descriptive names for your variables and function. This can help you explain most of your codes without writting comments.

For example:
CODE 1
```py
s = [88, 92, 79, 93, 85] # student test scores
print(sum(s)/len(s)) # print mean of test scores

s1 = [x ** 0.5 * 10 for x in s] # cure scores with square root method and store in new list
print(sum(s1/len(s1))) # print mean of curved test scores
```

CODE 2
```py
import math
import numpy as np

test_scores = [88, 92, 79, 93, 85]
print(np.mean(test_scores))

curved_test_scores = [math.sqrt(score) * 10 for score in test_scores]
print(np.mean(curved_test_scores))
```

> CODE 1 and CODE 2, solve the same problem or perform the same task.
CODE 2 is a cleaner code. It conveys the same purpose without the comments. It contains functions with a descriptive name.
CODE 2 is **READABLE** and it follows the **DRY** principle or **Don't Repeat Yourself Principle** which is important in writting modularized codes.

##### Guide to writing clean codes
- Be descriptive and imply type
 Try implying the type of what ever you are naming.
 e.g
 ```py
 ages = [47, 12 28, 52, 35] # NO DESCRIPTIVE ENOUGH
 age_list = [47, 12 28, 52, 35] # BETTER
 ```
 For boolean it's helpful to prefix the name with words like is or as to make it clear that its a condition.
 e.g
 ```py
 is_minor = True
 ```
 You can use **verbs for functions** and **nouns for variables**.

- Be consistent but clearly differentiate 
- Avoid abbreviations and especially single letters (Exception: counters and common math variables)
- Long name(Verbose) != descriptive names
- **Use whitespace properly** - the standard for python is to use for spaces for indent
- Try to limit your line to atleast 79 characters (pep8)

## Writing Modular Code
This requires spliting your program into logical functions and modules. We modularize to simplify our code and make it more effient to work with.
- DRY (Don't Reapeat Yourself)
Modularization allow you to resue parts of your code.'

##### CODE 1
```py
s = [88, 92, 79, 93, 85] # s rep the student score
print(sum(s)/len(s))

# Lets say your trying to boost your students scores
# sn represents a method that can be used to boost student scores

# In s1 we add a flat curve of 5 points to each score 
s1 = []
for x in s:
    s1.append(x + 5)

print(sum(s1)/len(s1))

# In s2 we add a flat curve of 10 points to each score 
s2 = []
for x in s:
    s2.append(x + 10)

print(sum(s2)/len(s2))

# We apply a square root curve to each curve
s3 = []
for x in s:
    s3.append(x ** 0.5 * 10)

print(sum(s3)/len(s3))
```

> CODE 1 is an example of spaghetti code

##### CODE 2
Code 2 is a more descriptive version of CODE 1
```py
import math
import numpy as np

test_scores = [88, 92, 79, 93, 85]
print(np.mean(test_scores))

curved_5 = [score + 5 for score in test_scores]
print(np.mean(curved_5))

curved_10 = [score + 10 for score in test_scores]
print(np.mean(curved_10))

curved_sqrt = [math.sqrt(score) * 10 for score in test_scores]
print(np.mean(curved_sqrt))

```
Our code is clearer now but still needs more refactoring.


##### CODE 3
Code 3 is a better version of both code 1 and 2.
```py
import math 
import numpy as np

def flat_curve(arr, n):
    return [i + n for i in arr]

def square_root_curve(arr):
    return [math.sqrt(i) * 10 for i in arr]

test_scores = [88, 92, 79, 93, 85]
curved_5 = flat_curve(test_scores, 5)
curved_10 = flat_curve(test_scores, 10)
curved_sqrt = square_root_curve(test_scores)

for score_list in test_scores, curved_5, curved_10, curved_sqrt:
    print(np.mean(score_list))
```
- Abstract out logic to improve readability
- Minimize the number of entities (funtions, classes, modules, etc.)
  Creating more module doesn't necessarily result in effective modularization.
- Functions should do one thing.
  Make sure that each function you write is focused on doing one single thing.
  If there is an and in your function name consider refactoring.
- Arbitrary varible name can be more effective in certain functions
  for example in CODE 3 the variable name **arr** was used in each function parameter to show that an array or a list is expected to be passed as an argument.
- Try to use fewer than three arguments per function


## Efficient code
There are two parts in making code efficient:
- Reducing the time it takes to run.
- Reducing the amount of space it takes in memory.
  
How important it is to improve efficency is context dependent. Slow code might be possible in one case and not another. 
e.g. Some batch data preparation processes might not need to be optimize right away, if it runs once every 3 days, for a few minutes.
On the other hand code used to generate posts to show a social media feed needs to be relatively fast since update happen instanteneously.

 - Use vector operations over loops when possible
   You can use Numpy and Pandas
 - Know your data structures and which methods are faster 

## Documentation 
Additional text or illustrations that comes with or is embedded in software code.
- clarify complex parts of code
- Navigate code easily
- Describe use and purpose of components

##### Types of Documentation
 - Line level 
 - Function or module level e.g. docstrings
 - Project level e.g README.md
  
## Inline Comments
They are used to explain parts of a code and helps future contributors understand your work.

Different ways comments are used:
- Great comments 
- Okay comments
- User's comments
  
One way comments are used is to documents the major steps of complex code to help readers follow. With this type of comment you don't need to understand the code to understatd what is going on because every part or section of the code is commented. 

Comments are valuable for explaining where code cannot. e.g. the history behind why a certain method was implemented in a specific way. 

## Docstrings
Docstrings or documentation strings are valuable pieces of doucmentation that explain the funtionality of any function or module in your code.  
> All your functions should have docstrings

e.g.
```py
def population_density(population, land_area):
    """Calculate the population density of an area.""" 
    return population / land_area
```
If you need to explain better your can span your description across multiple lines.
```py
def population_density(population, land_area):
    """Calculate the population density of an area.
    
    Args:
    population: int. The population of the area
    land_area: int or float. This function is unit-agnostic, if you pass in values in terms of square km or square miles the function will return a density in those units.

    Returns:
    population_density: population/land_area. The population density of a particular area.
    """ 
    return population / land_area
```


