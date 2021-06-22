import java.io.*;
import java.util.*;
public class digitsInFactWithLog {

	static int findDigits(int n)
	{
	
        double fact=1;
		for (int i=2; i<=n; i++)
			{
                fact += Math.log10(i);
        }
            return (int)(Math.floor(fact));
	}
	
	// Driver code
	public static void main (String[] args)
	{
		System.out.println(findDigits(200));
	}
}



