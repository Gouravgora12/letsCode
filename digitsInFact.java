import java.math.BigInteger;
public class digitsInFact {
    static int myFunction(int N){
      BigInteger a= getfact(N);
      System.out.println(a);
        int count=0;
        while(a.compareTo(BigInteger.valueOf(0))>0){
            a= a.divide(BigInteger.valueOf(10));
            count ++;
        }
        return count; 
    }
    static BigInteger  getfact(int n){
        BigInteger factorial = BigInteger.ONE; 
        for (int i = n; i > 0; i--) 
        { 
            factorial = factorial.multiply(BigInteger.valueOf(i)); 
        } 
            return factorial;
    }
    public static void main(String[] args) {
        System.out.println(" Factorial :"+ myFunction(42));
        
    }
}
