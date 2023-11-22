/* 
Student: Sophia Johnson

Course          Grade   Credit Hours	
English 101         4       3
Algebra 101         3       3
Biology 101         3       4
Computer Science I  3       4
Psychology 101      4       3

Final GPA:          3.35 
*/


using System; 

public class calculateFinalGPA 
{
	public static void Main(String[] args) 
	{
		string studentName = "Sophia Johnson";
		string course1Name = "English 101";
		string course2Name = "Algebra 101";
		string course3Name = "Biology 101";
		string course4Name = "Computer Science I";
		string course5Name = "Psychology 101";

		int course1Credit = 3;
		int course2Credit = 3;
		int course3Credit = 4;
		int course4Credit = 4;
		int course5Credit = 3;

		int course1Grade = 4;
		int course2Grade = 3;
		int course3Grade = 3;
		int course4Grade = 3;
		int course5Grade = 4;

		int sumOfCredit = course1Credit + course2Credit + course3Credit + course4Credit + course5Credit;


		float studentGPA = (float) (course1Credit * course1Grade) + (course2Credit * course2Grade) + (course3Credit * course3Grade) + (course4Credit * course4Grade) + (course4Credit * course4Grade) / sumOfCredit; 


		Console.WriteLine($"Student: {studentName}");
		Console.WriteLine();
		Console.WriteLine("Course \t Grade \t Credit Hours");
		Console.WriteLine($"{course1Name} \t {course1Grade} \t {course1Credit}");
		Console.WriteLine($"{course2Name} \t {course2Grade} \t {course2Credit}");
		Console.WriteLine($"{course3Name} \t {course3Grade} \t {course3Credit}");
		Console.WriteLine($"{course4Name} \t {course4Grade} \t {course4Credit}");
		Console.WriteLine($"{course5Name} \t {course5Grade} \t {course5Credit}");
		Console.WriteLine();
		Console.WriteLine($"Final GPA: {studentGPA}");

	}
}
