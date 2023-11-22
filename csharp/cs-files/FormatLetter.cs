using System; 

public class FormatLetter
{
  public static void Main(String[] args)
  {
    string customerName = "Ms. Barros";

    string currentProduct = "Magic Yield";
    int currentShares = 2975000;
    decimal currentReturn = 0.1275m;
    decimal currentProfit = 55000000.0m;

    string newProduct = "Glorious Future";
    decimal newReturn = 0.13125m;
    decimal newProfit = 63000000.0m;

    // Your logic here

    Console.WriteLine("Here's a quick comparison:\n");

    string comparisonMessage = $"Dear {customerName},\nAs a customer of our {currentProduct} offering we are excited to tell you about a new financial product that would dramatically increase your return.\nCurrently, you own {currentShares:C} shares at a return of {currentReturn:P2}.\nOur new product, {newProduct} offers a return of {newReturn:P2}.  Given your current volume, your potential profit would be {newProfit:C}.\n{currentProduct.PadRight(22)} {currentReturn:P2}     {currentProfit:C}\n{newProduct.PadRight(22)} {newReturn:P2}     {newProfit:C}";

    // Your logic here

    Console.WriteLine(comparisonMessage);
  }
}
