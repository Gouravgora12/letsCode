import java.util.function.Function;

public class optimisedLCM {
    public static int getHCF(int n, int m) {
        if(m==0){
            return n;
        }
        return getHCF(m, n%m);
    }
    public static int getLCM(int m, int n) {
        return (n*m)/getHCF(n, m);
    }
    public static void main(String[] args) {
        int n=10;
        int m=15;
        System.out.println("LCM : "+ getLCM(n,m));
    }
}
