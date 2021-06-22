//find a element in sorted rotated array
package SelfPractice;

public class findEle {
    public static int findElement(int arr[], int n){
       int low=0;
       int high=(arr.length-1);
       while(low<=high){
           int mid=(arr.length/2);
           if(arr[mid]==n){
               return mid;
           }
           else if(arr[low]!=n){
               low++;
           }


       }

   public static void main(String[] args) {
       int element=2;
       int arr[]= {4,5,6,7,0,1,2};

       System.out.println(" Element"+ findElement(arr, element));
   } 
}
//1,2,3,4,5,6
//2,3,4,5,6,1
//3,4,5,6,1,2


0,1,2,4,5,6,7=7/2=3
4,5,6,7,0,1,2


1,2,3,4,5,6
2,3,4,5,6,1
3,4,5,6,1,2
4,5,6,1,2,3
5,6,1,2,3,4
6,


//[4,5,6,7,0,1,2]
// 0
