import java.util.*;

public class findOnly3Divisors {
    public static int getDivisorsCount(int n){
        int primeNumbers[] = new int[n+1];
        Arrays.fill(primeNumbers, 1);
        int count=0;
        for (int p = 2; p * p <= n; p++)
		{
            primeNumbers[p]=1;
			if (primeNumbers[p] == 1)
			{
                count++;
				for (int i = p * p; i <= n; i += p)
					primeNumbers[i] = 0;
			}
		}

        // for( int i=2;i*i<=n;i++){
        //     if(primeNumbers[i]==1){
        //         count +=1;
        //     }
        // }
        return count;
    }
    public static void main(String[] args) {
       // String stringArr = Arrays.toString(getDivisorsCount(3));
        System.out.println("Count :"+getDivisorsCount(10));
    }
}
