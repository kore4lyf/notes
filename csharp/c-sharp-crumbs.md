# C# 

## Verbatim Strung 
```cs 
// Preserves White Space 
// Escape Characters don't work in ~
string[] x = @"    Hey ";
``` 

## Interpolation String 
```cs 
int number = 1; 
string talk = $" I am {x} years old";


## Arrays 
**One Dimensional**
```cs 
int[] myNumber = new int[9];

myNumber[0] = 12
```  

**Declare and Initialise**
```cs 
int[] myNumber = {1, 2, 3, 4, 5}; 
``` 
or 
```cs 
int[] myNumber = new int[5] {1, 2, 3, 4, 5}; 
``` 

**Multidimensional -  Two dimensional array**
Known array size 
```cs 
int[,] students = new int[5]; 
``` 


Unknown array size 
```cs 
string[][] jaggedArray = new string[][]
{
    new string[] { "one1", "two1", "three1", "four1", "five1", "six1" },
    new string[] { "one2", "two2", "three2", "four2", "five2", "six2" },
    new string[] { "one3", "two3", "three3", "four3", "five3", "six3" },
    new string[] { "one4", "two4", "three4", "four4", "five4", "six4" },
    new string[] { "one5", "two5", "three5", "four5", "five5", "six5" },
    new string[] { "one6", "two6", "three6", "four6", "five6", "six6" },
    new string[] { "one7", "two7", "three7", "four7", "five7", "six7" },
    new string[] { "one8", "two8", "three8", "four8", "five8", "six8" }
};

foreach (string[] array in jaggedArray)
{
    foreach (string value in array)
    {
        Console.WriteLine(value);
    }
    Console.WriteLine();
} 
``` 



## Console 
**Clear Console** 
```cs 
Console.Clear();
``` 

**Print on current line only**
```cs 
Console.Write("Ayo");
Console.Write("-Howdy");
``` 
Result:
Ayo-Howdy 

**Print on current line and move cursor to the next line**
```cs 
Console.WriteLine("Ayo");
Console.WriteLine("-Howdy");
``` 
Result: 
Ayo 
-Howdy 

**Reading Data** 
```cs 
string? name; // nullable string 
name = Console.ReadLine(); 
```

## Int Type casting 
**Robust** 
int.TryParse(input, out intVariable);  
```cs 
// capture user input in a string variable named readResult

int numericValue = 0;
bool validNumber = false;

validNumber = int.TryParse(readResult, out numericValue);  
``` 

**Returns an Exception**
int.Parse(stringVar);  
```cs 
// capture user input in a string variable named readResult

int numericValue = 0;
bool validNumber = false;

validNumber = int.Parse(readResult, out numericValue);  
```  



## What is a null value in C#?
In C#, a null value represents the absence of a value. It is a special value that can be assigned to reference-type variables to indicate that the variable does not refer to any object. The default value of reference-type variables is null.

For example, consider the following code snippet:
```cs 
string name = null;
``` 
Both null values and empty strings represent the absence of a value. However, there are some important differences between the two.

- A null value is a special value that can be assigned to reference-type variables, while an empty string is a value that can be assigned to string variables.

- A null value indicates that the variable does not refer to any object, while an empty string indicates that the string variable contains no characters. 

- Null values can cause exceptions, such as NullReferenceException, if they are not handled properly. Empty strings do not typically cause exceptions.

- Null values can make code more difficult to read and understand, while empty strings are typically easier to read and understand.



## DateTime & TimeSpan
```cs 
//Creating a DateTime instance
DateTime now = DateTime.Now;
Console.WriteLine("Current date and time: " + now);


// Example 2: Creating a DateTime instance from a specific date and time
DateTime specificDate = new DateTime(2023, 11, 18, 10, 40, 0);
Console.WriteLine("Specific date and time: " + specificDate);

//This code creates a DateTime instance representing a specific date and time (November 18, 2023, 10:40:00 AM) by specifying the year, month, day, hour, minute, and second components using the DateTime constructor.  



// Example 3: Calculating a time span between two DateTime instances

DateTime startTime = new DateTime(2023, 11, 18, 8, 0, 0);
DateTime endTime = new DateTime(2023, 11, 18, 12, 0, 0);
TimeSpan elapsedTime = endTime - startTime;
Console.WriteLine("Elapsed time: " + elapsedTime); 


// Example 4: Adding a time span to a DateTime instance

DateTime originalDate = new DateTime(2023, 11, 18, 10, 40, 0);
TimeSpan timeToAdd = new TimeSpan(1, 0, 0, 0); // 1 hour
DateTime newDate = originalDate + timeToAdd;
Console.WriteLine("New date: " + newDate);
```



## Reversing aa String 
```cs 
string pangram = "The quick brown fox jumps over the lazy dog"; 

// Using ToCharArray() 
    char[] toCharPangram = pangram.ToCharArray();
    Array.Reverse(toCharPangram);
    string reversedToCharPangram = new String(toCharPangram);

    Console.WriteLine(reversedToCharPangram);

// Using Split 
    string[] splitPangram = pangram.Split(""); 
    Array.Reverse(splitPangram); 
    string reversedSplitPangram = String.Join("", splitPangram);
    Console.WriteLine(reversedToCharPangram);
``` 


## Some String Method 
- str.Contains("char/word") 
- var x = String.Join(",", strArray) 
- char[] x = str.toCharArray()
- string[] x = str.split(",") 
- str.StartsWith("char/word")
- str.EndsWith("char/word")


## Some Array Methods 
- Array.Sort(arr) // Ascending order 
- Array.Reverse(arr) // Descending order
- Array.Resize(arr, newSize) // Resize an array
- str.Remove(index, length) // Remove Characters from a string 
- str.Substring(startIndex [, endIndex])  
- 