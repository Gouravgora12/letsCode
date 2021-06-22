import java.util.Arrays;
public class getAllThePrimeFinalOptimisation {
   public static void getPrimeNumber(int x){
       boolean isPrime[] = new boolean[x+1];
       Arrays.fill(isPrime, true);
       for(int i=2;i<=x;i++){
           if(isPrime[i]){
            System.out.println("Prime Number is :"+i);
            for(int j=i*i;j<=x;j=j+i){
                isPrime[j]=false;
                }
           }
       }
   }
    public static void main(String[] args) {
        int x=30;
       getPrimeNumber(x);

    }
}
