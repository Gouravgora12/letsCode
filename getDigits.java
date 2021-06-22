public class getDigits{
    public static int getDigitCount(int n){
        int count=0;
        while(n>0){
            n= n/10;
            count ++;
        }
        return count; 
    }
    public static void main(String[] args) {
        int n=1234561;
        System.out.println("Numbers count is: "+getDigitCount(n));
    }
}