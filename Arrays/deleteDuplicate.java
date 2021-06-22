package Arrays;

import java.rmi.Remote;
import java.util.ArrayList;
import java.util.Arrays;

public class deleteDuplicate {
    static void removeDuplicates(int arr[]){
        int i   ;
        int nextI=1;
        ArrayList<Integer> unique= new ArrayList<>();
        unique.add(arr[0]);
        for(i=1;i<arr.length;i++){
            if(arr[i]!=arr[nextI-1]){
                unique.add(arr[i]);
                nextI++;
            }
        }
        System.out.println(unique);
    }
    public static void main(String[] args) {
        int arr[]={5,5,6,5};
        removeDuplicates(arr);
    }
}
