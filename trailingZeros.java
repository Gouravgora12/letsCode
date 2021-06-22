public class trailingZeros {
    
    public static long fact(int n) {
        if(n==0){
            return 1;
        }
        return n*fact(n-1);   
    }
    public static int ZerosCount(long n){
        int count=0;
        while(n%10==0){
            n=n/10;
            count++;
        }
        return count;
    }
    public static void main(String[] args) {
        int n=20;
        long factOfNumber=fact(n);
        System.out.println("factOfNumber : "+ factOfNumber);
        System.out.println("Reversed : "+ ZerosCount(factOfNumber));

    }
}
