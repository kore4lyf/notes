using System; 

public class fraudulentOrder
{
	public static void Main(String[] args)
	{
		string[] orders = { "B123", "C234", "A345", "C15", "B177", "G3003", "C235", "B179" }; 

		// You need to evaluate each element of the array. Report the potentially fraudulent Order IDs by detecting the orders that start with the letter "B". 

		foreach(string order in orders) 
		{
			if(order.StartsWith("B"))
			{
				Console.WriteLine(order);
			}
		}
	}
}
