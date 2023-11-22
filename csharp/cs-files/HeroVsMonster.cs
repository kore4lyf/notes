/* 
  Task
  1.  Write code that implements a simple role-playing game battle using either the do-while or while statement as an outer game loop.
  2. The hero and the monster should start with 10 health points.
  3. All attacks should be a value between 1 and 10.
  4. The hero should attack first.
  5. Print the amount of health the monster lost and their remaining health.
  6. If the monster's health is greater than 0, it should attack the hero.
  7. Print the amount of health the hero lost and their remaining health.
  8. Continue this sequence of attacking until either the monster's health or hero's health is zero or less.
  9. Print the winner.
*/

using System; 

public class heroVsMonster 
{
  public static void Main(String[] args) 
  {
    int herosHealth = 10;
    int monstersHealth = 10; 

    Random attack = new Random();
    int heroAttackRandom = 0; 
    int monsterAttackRandom = 0; 

    while (herosHealth > 0 && monstersHealth > 0) {
      heroAttackRandom = attack.Next(1, 11);
      monstersHealth -= heroAttackRandom;

      Console.WriteLine($"Monster was damaged and lost {heroAttackRandom} health and now has {monstersHealth} health.");

      if(monstersHealth > 0) {
        monsterAttackRandom = attack.Next(1, 11);
        herosHealth -= monsterAttackRandom; 
        Console.WriteLine($"Hero was damaged and lost {monsterAttackRandom} health and now has {herosHealth} health.");
      }
    }
    if(herosHealth > 0)
      Console.WriteLine("Hero Wins");
    else 
      Console.WriteLine("Monster Wins");
  }
}
