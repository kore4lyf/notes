using System; 

public class DisplayEmail
{
  public static void Main(String[] args)
  {
    string[,] corporate = 
    {
        {"Robert", "Bavin"}, {"Simon", "Bright"},
        {"Kim", "Sinclair"}, {"Aashrita", "Kamath"},
        {"Sarah", "Delucchi"}, {"Sinan", "Ali"}
    };

    string[,] external = 
    {
        {"Vinnie", "Ashton"}, {"Cody", "Dysart"},
        {"Shay", "Lawrence"}, {"Daren", "Valdes"}
    };

    string externalDomain = "hayworth.com";

    for (int i = 0; i < corporate.GetLength(0); i++) 
    {
      // display internal email addresses
      string firstName = corporate[i,0].ToLower();
      string lastName = corporate[i,1].ToLower();

      Display(firstName: firstName, lastName: lastName);
    }

    for (int i = 0; i < external.GetLength(0); i++) 
    {
      // display external email addresses
      string firstName = external[i,0].ToLower();
      string lastName = external[i,1].ToLower();

      Display(firstName: firstName, lastName: lastName, domain: externalDomain);
    }
  }

  public static void Display(string firstName, string lastName, string domain = "contoso.com")
  {
    string email = $"{firstName.Substring(0,2)}{lastName}@{domain}";

    Console.WriteLine(email);
  }
}
