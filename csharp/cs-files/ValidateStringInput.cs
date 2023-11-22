/* 
  Write code that validates string input
  
  - Your solution must include either a do-while or while iteration.

  - Before the iteration block: your solution must use a Console.WriteLine() statement to prompt the user for one of three role names: Administrator, Manager, or User.

  - Inside the iteration block:
    - Your solution must use a Console.ReadLine() statement to obtain input from the user.
    - Your solution must ensure that the value entered matches one of the three role options.
    - Your solution should use the Trim() method on the input value to ignore leading and training space characters.
    - Your solution should use the ToLower() method on the input value to ignore case.
    - If the value entered isn't a match for one of the role options, your code must use a Console.WriteLine() statement to prompt the user for a valid entry.

  - Below (after) the iteration code block: Your solution must use a Console.WriteLine() statement to inform the user that their input value has been accepted. 
*/ 

using System;

public class ValidateStringInput
{
  public static void Main(String[] args)
  {
    string? userRole;
    bool isValidRole = false;

    Console.WriteLine("Enter your role name (Administrator, Manager, or User)"); 

    do {
      userRole = Console.ReadLine();
      string transformedUserRole = userRole.Trim().ToLower();

      isValidRole = transformedUserRole == "administrator" || transformedUserRole == "manager" || transformedUserRole == "user";

      if(!isValidRole)
        Console.WriteLine($"The role name that you entered, \"{userRole}\" is not valid. Enter your role name (Administrator, Manager, or User)");
    } while(!isValidRole);

    Console.WriteLine($"Your input value ({userRole}) has been accepted.");
  }
}
