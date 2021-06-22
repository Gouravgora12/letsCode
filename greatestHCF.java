public class greatestHCF {
    public static int getHCF(int n, int m) {
        int divider= Math.min(n,m);
        while(divider!=0){
           if(n%divider==0 && m%divider==0){
               break;
           }
           divider--;
        }
        return divider;
    }
    public static void main(String[] args) {
        int n=200;
        int m=300;
        System.out.println("HCF : "+ getHCF(n,m));
        } 
}
