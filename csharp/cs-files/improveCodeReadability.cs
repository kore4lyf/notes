/* 
string str = "The quick brown fox jumps over the lazy dog.";
// convert the message into a char array
char[] charMessage = str.ToCharArray();
// Reverse the chars
Array.Reverse(charMessage);
int x = 0;
// count the o's
foreach (char i in charMessage) { if (i == 'o') { x++; } }
// convert it back to a string
string new_message = new String(charMessage);
// print it out
Console.WriteLine(new_message);
Console.WriteLine($"'o' appears {x} times.");
*/

using System; 

public class improveCodeReadability
{
	public static void Main(String[] args)
	{
		/* The code below 
		 * converts a message to an arrayof characters. 
		 * Reversing the characters
		 * Uses a couter to count the occurance of letter o
		 * Converts it back to a string 
		 * Prints result (the total occurance of letter o in the message)
		 */
		string message = "The quick brown fox jumps over the lazy dog.";
		
		char[] messageLetters = message.ToCharArray();
		Array.Reverse(messageLetters);

		int counter = 0;

		foreach (char i in messageLetters) 
		{ 
			if (i == 'o') 
			{ 
				counter++; 
			} 
		}

		string newMessage = new String(messageLetters);

		Console.WriteLine(newMessage);
		Console.WriteLine($"'o' appears {counter} times.");
	}
}
