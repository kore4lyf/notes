/* 
  write code that validates integer input
  - Your solution must include either a do-while or while iteration.

  - Before the iteration block: your solution must use a Console.WriteLine() statement to prompt the user for an integer value between 5 and 10.

  - Inside the iteration block:
    - Your solution must use a Console.ReadLine() statement to obtain input from the user.
    - Your solution must ensure that the input is a valid representation of an integer.
    - If the integer value isn't between 5 and 10, your code must use a Console.WriteLine() statement to prompt the user for an integer value between 5 and 10.
    - Your solution must ensure that the integer value is between 5 and 10 before exiting the iteration.
  - Below (after) the iteration code block: your solution must use a Console.WriteLine() statement to inform the user that their input value has been accepted.
*/ 

using System;

public class ValidateInteger
{
  public static void Main(String[] args)
  {
    int number = 0;
    string? userNumber;
    bool isValidEntry = false; 

    Console.WriteLine("Enter an integer value between 5 and 10"); 

    do {
      userNumber = Console.ReadLine();
      isValidEntry = int.TryParse(userNumber, out number);

      // Ensuring input is within the given range 
      if(isValidEntry)
        isValidEntry = number > 5 && number < 10;

      if(!isValidEntry) 
        Console.WriteLine("Sorry, you entered an invalid number, please try again");

    } while(!isValidEntry);

    Console.WriteLine($"Your input value ({number}) has been accepted.");
  }
}
