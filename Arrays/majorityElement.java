package Arrays;

public class majorityElement {
    static int getMajority(int arr[]){
        int res=0;
        int count =1;
        int n=arr.length;
        for(int i=1;i<n;i++){
            if(arr[res]==arr[i]){
                count++;
            }
            else{
                count--;
            }
            if(count==0){
                res=i;
                count=1;
            }
        }
        System.out.println( res+":"+count);
        count=0;
        for(int i=0;i<n;i++){
            if(arr[res]== arr[i]){
                count++;
            }
        }
       
       return count!=0 ? res:-1; 
    }
    public static void main(String[] args) {
        int arr[]={1,2,1,2,1,1};
      System.out.println(getMajority(arr));
    }
}
