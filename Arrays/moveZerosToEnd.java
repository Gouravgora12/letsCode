package Arrays;

import java.sql.Array;
import java.util.Arrays;

public class moveZerosToEnd {
    static void moveElements(int arr[]){
        int i=0;
        int count=0;
        for(i=0;i<arr.length;i++){
            if(arr[i]!=0){
               int temp=arr[count];
               arr[count]=arr[i];
               arr[i]=temp;     
               count++;
            }
        }
        System.out.println(Arrays.toString(arr));
    }
    public static void main(String[] args) {
        int arr[]={0,0,0,1,0,2,5};
        moveElements(arr);
    }
}
