using System; 

public class ExtractData
{
  public static void Main(String[] args)
  {
    const string input = "<div><h2>Widgets &trade;</h2><span>5000</span></div>";

    string quantity = "";
    string output = "";

    // Your work here 
    int startDivIndex = input.IndexOf(">") + 1;
    int endDivIndex = input.LastIndexOf("<");
    int divContentLength = endDivIndex - startDivIndex;

    string withInDiv = input.Substring(startDivIndex, divContentLength);

    int quantityStartIndex = input.IndexOf("<span>") + "<span>".Length; 
    int quantityEndIndex = input.IndexOf("</span>");
    int quantityLength = quantityEndIndex - quantityStartIndex;
    quantity = input.Substring(quantityStartIndex, quantityLength);

    output = withInDiv.Replace("&trade;", "&reg;");

    Console.WriteLine("quantity: " + quantity);
    Console.WriteLine("output: " +output);
    // Quantity: 5000
    // Output: <h2>Widgets &reg;</h2><span>5000</span>
  }
}
