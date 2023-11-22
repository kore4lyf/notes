using System;

public class ParseOrders
{
  public static void Main(String[] args)
  {
    string orderStream = "B123,C234,A345,C15,B177,G3003,C235,B179";

    string[] orderIdList = orderStream.Split(",");

    foreach(string orderId in orderIdList)
    {
      if(orderId.Length == 4)
        Console.WriteLine(orderId);
      else
        Console.WriteLine($"{orderId} \t\t - Error");
    }
  }
}
