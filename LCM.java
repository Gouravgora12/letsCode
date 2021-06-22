public class LCM {
    public static int getLCM(int n, int m) {
        int minVal= Math.max(n,m);
        while(true){
           if(minVal%n==0 && minVal%m==0){
               break;
           }
           minVal++;
        }
        return minVal;
    }
    public static void main(String[] args) {
        int n=15;
        int m=25;
        System.out.println("LCM : "+ getLCM(n,m));
        } 
}
