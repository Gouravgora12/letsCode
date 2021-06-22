import java.lang.reflect.Array;
import java.util.Arrays;

public class findMissingNumber {
    static int getMissingNum(int[] arr,int n){
        int num=0;
        int ar[]=new int[5] ;
        Arrays.fill(ar,0);
        for(int i=0;i<n;i++){
            //;
            ar[arr[i]]=1;
            System.out.println("wd"+ar[i]);
        }
        for(int i=1;i<n+1;i++){
            if(ar[i]==0){
                return num;
            }
        }
        return num;
    }
    public static void main(String[] args) {
        int arr[]={1,3,4,5};
        System.out.println("Missing Number is :"+getMissingNum(arr,4));
    }
}
