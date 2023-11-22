using System;

public class studentGradingApp
{
	public static void Main(String[] args)
	{

		// initialize variables - graded assignments 
		int currentAssignments = 5;

		int sophia1 = 90;
		int sophia2 = 86;
		int sophia3 = 87;
		int sophia4 = 98;
		int sophia5 = 100;

		int[] sophiaAssignmentsScore = {sophia1, sophia2, sophia3, sophia4, sophia5};

		int andrew1 = 92;
		int andrew2 = 89;
		int andrew3 = 81;
		int andrew4 = 96;
		int andrew5 = 90;
		
		int[] andrewAssignmentsScore = {andrew1, andrew2, andrew3, andrew4, andrew5};

		int emma1 = 90;
		int emma2 = 85;
		int emma3 = 87;
		int emma4 = 98;
		int emma5 = 68; 

		int[] emmaAssignmentsScore = {emma1, emma2, emma3, emma4, emma5};

		int logan1 = 90;
		int logan2 = 95;
		int logan3 = 87;
		int logan4 = 88;
		int logan5 = 96;

		int[] loganAssignmentsScore = {logan1, logan2, logan3, logan4, logan5};

		string[] students = {"Sophia", "Andrew", "Emma", "Logan"};

		Console.WriteLine("Student\t\tGrade\n");

		foreach (string student in students)
		{
			string grade;	
			int sumOfScores = 0;

			if(student == "Sophia")
			{
				foreach(int score in sophiaAssignmentsScore)
				{
					sumOfScores += score;
				}
			}
			else if(student == "Andrew")
			{
				foreach(int score in andrewAssignmentsScore)
				{
					sumOfScores += score;
				}
			}
			else if(student == "Emma")
			{
				foreach(int score in emmaAssignmentsScore)
				{
					sumOfScores += score;
				}

			}
			else
			{
				foreach(int score in loganAssignmentsScore)
				{
					sumOfScores += score;
				}
			    
			}


			decimal averageScore = (decimal) sumOfScores/currentAssignments;

			if(averageScore >= 97 && averageScore <= 100)
			{	
				grade = "A+";
			} 
			else if(averageScore >= 93 && averageScore < 97)
			{ 
				grade = "A";
			}
			else if(averageScore >= 90 && averageScore < 93)
			{
				grade = "A-"; 
			}
			else if(averageScore >= 87 && averageScore < 90)
			{
				grade = "B+";
			}
			else if(averageScore >= 83 && averageScore < 87)
			{
				grade = "B";
			}
			else if(averageScore >=	80 && averageScore < 83)
			{
				grade = "B-";
			}
			else if(averageScore >= 77 && averageScore < 80)
			{
				grade = "C+";
			}
			else if(averageScore >= 73 && averageScore < 77)
			{
				grade = "C";
			}
			else if(averageScore >= 70 && averageScore < 73)
			{
				grade = "C-";
			}
			else if(averageScore >= 67 && averageScore < 70)
			{
				grade = "D+";
			}
			else if(averageScore >= 63 && averageScore < 67)
			{
				grade = "D";
			}
			else if(averageScore >= 60 && averageScore < 63)
			{
				grade = "D-";
			}
			else
			{
			    grade = "F";
			}


			Console.WriteLine($"{student}:\t\t{averageScore}\t{grade}");

		}

		Console.WriteLine("Press the Enter key to continue");
		Console.ReadLine();
			
	}
}
