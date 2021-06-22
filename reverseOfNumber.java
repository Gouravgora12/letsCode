public class reverseOfNumber {
    public static boolean getReverse(int n) {
        int reverse=0;
        int temp=n;
        while(n!=0){
           int reminder = n%10;
            reverse= reverse* 10+reminder;
            n=n/10;
        }
        return (temp==reverse);
    }
 public static void main(String[] args) {
    int n=1021;
    System.out.println("Reversed : "+ getReverse((n)));
 
    } 
}
