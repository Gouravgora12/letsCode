import java.util.ArrayList;

public class findOutOccuring {
   public static ArrayList<Integer> findOutNumbers(int[] arr,int size){
        int xOR=0;
        ArrayList<Integer> list = new ArrayList<Integer>();
        int n=0;
        int xORofSetBit=0;
        int xORofNotSetBit=0;
        while(n!=size){
            if((arr[n]&1)==1){
                xORofSetBit ^=arr[n];
            }
            else{
                xORofNotSetBit ^=arr[n];
            }
            xOR ^=arr[n];
            n++;
        }
        System.out.println("xOR of set bits :"+xORofSetBit);
        System.out.println("xOR of  not set bits :"+xORofNotSetBit);

        list.add(xOR); 
        return list;
       }
    public static void main(String[] args) {
        int[] arr={1,1,2,2,3,3,3,3,4,5};
        int size= arr.length;
        System.out.println("Odd occuring numbers are"+findOutNumbers(arr,size));
    }
}
// 101
// 011
