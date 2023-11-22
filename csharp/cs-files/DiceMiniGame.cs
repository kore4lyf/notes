using System; 

public class DiceMiniGame
{
  public static void Main(String[] args)
  {
    Random random = new Random();

    Console.WriteLine("Would you like to play? (Y/N)");
    if (ShouldPlay()) 
    {
        PlayGame();
    }

    bool ShouldPlay()
    {
      string? play;
      bool valid = false;
      do
      {
        play = Console.ReadLine().Trim().ToLower(); 
        Console.WriteLine(play);

        if(play == "y")
          valid = true;

        if(play == "n")
          valid = true;

      } while (!valid);

      return play == "y" ? true : false; 
    }


    void PlayGame() 
    {
        bool play = true;
        int target;
        int roll;

        while (play) 
        {
            target = random.Next(1,6);
            roll = random.Next(1,7);

            Console.WriteLine($"Roll a number greater than {target} to win!");
            Console.WriteLine($"You rolled a {roll}");
            Console.WriteLine(WinOrLose(target, roll));
            Console.WriteLine("\nPlay again? (Y/N)");

            play = ShouldPlay();
        }
    }

    string WinOrLose(int target, int roll)
    {
      return roll >= target ? "You win!" : "You lose!";
    }
  }
}
