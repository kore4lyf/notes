/* 
 Rules

 1. Output values from 1 to 100, one number per line.

 2. When the current value is divisible by 3, print "Fizz" next to the number.

 3. When the current value is divisible by 5, print "Buzz" next to the number.
 
 4. When the current value is divisible by both 3 and 5, print "FizzBuzz" next to the number.
*/

using System; 

public class fizzBuzz
{
  public static void Main(String[] args)
  {
    for(int counter = 1; counter <= 100; counter++) {
      Console.Write($"{counter} ");

      if(counter % 3 == 0) Console.Write("- Fizz");
      
      if(counter % 5 == 0) Console.Write("- Buzz");

      Console.WriteLine();
    }
  }
}
