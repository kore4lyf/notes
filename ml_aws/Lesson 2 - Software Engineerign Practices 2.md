# Software Engineering Practices Part 2
<!-- title: Software Engineering Practices Part 2 -->

In this part of Software Engineering Practices, you will learn the following.
 - Testing
 - Logging
 - Code reviews
These practices help you ensure reliability and easier maintainance of your code. 

## Testing 
Before you can deploy your code it will need to be tested. 
Writting tests is standard practice in software engineering. 
Without testing one might run into execution error, affect products based on faulty conclusions. 

Its pretty obvious when a computer program crashes, you get an error and the program stops running. How ever there are many problems that could occur in the data science processes that aren't as easily detectable as a functional error that crashes your program.
All your code can run smoothly without you unaware that certain values were being encoded incorrectly, features are being used inappropriately, unexpected data were breaking assumptions that your statistical models are based on. These errors are more difficult to find.

Testing is so important that there is an entire development process based on it called **Test Driven Development**

## Test Driven Development
Is a development process where test is written for tasks before the code to implement those tasks is written (i.e Writing tests before developing code to implement those tasks). 

## Unit Test
Is a test that covers a small unit of code, usually a function (independently from the rest of the program).

We will learn how to write unit tests in python and how to use additional tools to improve units tests. And finally, you will see examples of types of tests you will see in data science.

For Example:
Lets say you want to create a functiont that generates the neartest perfect square less than or equal to a certain number.
During testing, we should be able to automatically know if the result of a test is correct or not.

CODE
```py
#nearest.py
def nearest_square(num):
    """Return the nearest perfect square that is less
    less than or equal to num"""
    root = 0
    while (root + 1) ** 2 <= num:
        root += 1
    return root ** 2
```


Bad TEST 2
```py
from nearest import nearest_square

nearest_5 = nearest_square(5)
print("Nearest square <= 5: returned {}, correct answer is 4.".format(nearest_5))
assert(nearest_5 == 4)

nearest_n12 = nearest_square(-12)
print("Nearest square <= -12: returned {}, correct answer is 0.".format(nearest_n12))
assert(nearest_n12 == 0)

nearest_9 = nearest_square(9)
print("Nearest square <= 9: returned {}, correct answer is 9.".format(nearest_9_))
assert(nearest_9 == 9)

nearest_23 = nearest_square(23)
print("Nearest square <= 23: returned {}, correct answer is 16.".format(nearest_23))
assert(nearest_23 == 16)
```
> Using assert allows the test to check result automatically. However one of the assert() fails, the program will stop. A true Test should be able to show which ones failed and which ones succeeded and this can't happen if the program stops when ever there is a failure.
> Fortunatly there are great tools in python that can be used to create effective unit tests.

## Unit testing tools
Pytest is a great tool that lets you start testing quickly without any boilerplate code.
```sh
pip install -U pytest
```
##### TEST FILE
test_nearest.py
```py
from nearest import nearest_square

def test_nearest_square_5():
    assert(nearest_square(5) == 4)

def test_nearest_square_n12():
    assert(nearest_square(-12) == 0)

def test_nearest_square_9():
    assert(nearest_square(9) == 9)

def test_nearest_square_23():
    assert(nearest_square(23) == 16)
```

After installing pytest all you have to do is to create a test file for your program and write a function in the test file (Use assert just like **TEST FILE**) for your unit test.
Then cd into the directory of your unit test file and in your terminal type in **pytest**
Each dots next to the name of the test file represents a successful test. If you made a mistake in your program, the dot will be replaced by an F for asssertions that failed.
By using pytest you test won't be stoped by failed assert statements. It will only stop if you have syntax errors.
Its better to have one assert statement per function otherwise you won't know exactly how many test failed and which test failed.

> You have to start your test file name and test functions with **test_** for pytest to reconize and run them. This is the default configuration of pytest and can be changed.


## Test Driven Development
This is when you write test before you write the code that's being tested. This way of developing code has a number of benefits that's made it a standard practice in software engineering. 

For example:
lets say you have to write a function that checks if a string is a valid address.

TEST
```py
def email_validator(email):
if email.count('@') == 1 and email.count('.') == 1:
    return True
else:
    return False

def test_email_validator():
    assert email_validator('juno@email.com') == True
    assert email_validator('juno@email@.com') == False
```

If your test passes you know your implementation is done. In the future when you refactor this function or you make changes to other parts of your program, you can keep running this test to ensure your function still behaves as expected.
> Don't be tempted to write implementation code be for test code. By practicing you will get faster in writting test and eventually you will be able to write all kinds of tests in very little time.

## Logging 
Imagine you wrote a program that runs fine and suddenly it crashed. Its important to print out descriptive log messages to help you trace back your issue and understand what's happening in your code.


## Code Review 
##### Benefits
- Catch errors
- Ensure readablity
- Check standards are met
- Share knowledge among teams


##### QUESTION 1 OF 2 clean code
Imagine you are writing a program that executes a number of tasks and categorizes each task based on its execution time. Below is a small snippet of this program. Which of the following naming changes could make this code cleaner? There may be more than one correct answer.

t = end_time - start 
# compute execution time 
c = category(t) 
# get category of task 
print('Task Duration: {} seconds, Category: {}'.format(t, c) 

[ ] None
[x] Rename the variable start to start_time to make it consistent with end_time.
[x] Rename the variable t to execution_time to make it more descriptive.
[x] Rename the function category to categorize_task to match the part of speech.
[x] Rename the variable c to category to make it more descriptive.

 
##### Quiz: Buying stocks
Imagine you analyzed several stocks and calculated the ideal price, or limit price, at which you'd want to buy each stock. You write a program to iterate through your stocks and buy it if the current price is below or equal to the limit price you computed. Otherwise, you put it on a watchlist. Below are three ways of writing this code. Which of the following is the most clean?
```py
# Choice A 
stock_limit_prices = {'LUX': 62.48, 'AAPL': 127.67, 'NVDA': 161.24}
for stock_ticker, stock_limit_price in buy_prices.items():
    if stock_limit_price <= get_current_stock_price(ticker):     buy_stock(ticker) 
    else: 
        watchlist_stock(ticker) 

# Choice B 
prices = {'LUX': 62.48, 'AAPL': 127.67, 'NVDA': 161.24} 
for ticker, price in prices.items(): 
    if price <= current_price(ticker): 
      buy(ticker) 
    else: 
        watchlist(ticker) 

# Choice C 
limit_prices = {'LUX': 62.48, 'AAPL': 127.67, 'NVDA': 161.24} 
for ticker, limit in limit_prices.items(): 
    if limit <= get_current_price(ticker): 
        buy(ticker) 
    else:
        watchlist(ticker) 
```

QUESTION 2 OF 2
Which code is most clean?
Choice A
Choice B
Choice C

## some terms
- Production code: Software running on production servers to handle live users and data of the intended audience. 
Note that this is different from production-quality code, which describes code that meets expectations for production in reliability, efficiency, and other aspects. Ideally, all code in production meets these expectations, but this is not always the case. 

- Clean code: Code that is readable, simple, and concise. Clean production-quality code is crucial for collaboration and maintainability in software development.

- Modular code: Code that is logically broken up into functions and modules. Modular production-quality code that makes your code more organized, efficient, and reusable.

- Module: A file. Modules allow code to be reused by encapsulating them into files that can be imported into other files.

- Refactoring: Restructuring your code to improve its internal structure without changing its external functionality. This gives you a chance to clean and modularize your program after you've got it working.

- 

