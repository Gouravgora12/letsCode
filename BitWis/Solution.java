package BitWis;

class Solution
{
    //Function to find the first position with different bits.
    public static int posOfRightMostDiffBit(int m, int n)
   {
        // Your code here
        if(m==0&&n==0) return 0;
        int a=(m)^(n);
        int b=0;
        while(b<=a){
            if(getSetBit(a,b)==true) return b+1;
            else{
                b++;
            }
        }
        return b;
    }
    static Boolean getSetBit(int a,int i){
        if((a & (1 << (i)))!=0){
            return true;
        }
        return false;
    }
    public static void main(String[] args) {
        System.out.println("Right most set bit :"+posOfRightMostDiffBit(384, 887));
    }
}
