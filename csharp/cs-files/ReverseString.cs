using System;

public class ReverseString
{
  public static void Main(String[] args)
  {
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
  }
}
