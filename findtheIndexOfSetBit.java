public class findtheIndexOfSetBit {
    public static int getFirstSetBit(int n){
            
        // Your code here
          if(n==0)
        return 0;
        int k=1;
    while(true){
        if((n&(1<<k-1))==0)
            k++;
        else
            return k;
    }
    }
    public static void main(String[] args) {
        System.out.println("index of first set bit :"+getFirstSetBit(18));
    }
}
100
011
011