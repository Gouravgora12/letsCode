public class CountTheSetBits {
    static int getSetBits(int n){
        int count=0;
        while(n>0){
            // if(n%2!=0){
            //     count++;
            // }
            // n--;
            if((n&1)==1) {
               count++;
            }
            n=n>>1;
        }
        
        return count;
    }
    public static void main(String[] args) {
        System.out.println("Count the set bits :"+ getSetBits(21));
    }
}
