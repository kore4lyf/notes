# C# 

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

