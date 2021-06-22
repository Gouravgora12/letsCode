public class optimisedHCF {
    public static int getHCF(int n, int m) {
        if(m==0){
            return n;
        }
        return getHCF(m, n%m);
    }  
    public static void main(String[] args) {
    int n=10;
    int m=15;
    System.out.println("HCF : "+ getHCF(n,m));
    System.out.println("Test : "+ 15%10);

  }  
}
