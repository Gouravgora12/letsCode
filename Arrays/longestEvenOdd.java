package Arrays;

public class longestEvenOdd {
    static void getLongestEvenOdd(int arr[]){
        int count=1;
        int res=1;
        int n=arr.length;
        for(int i=1;i<n;i++){
          if((arr[i-1]+arr[i])%2!=0){
              count++;
              if(count>res){
                res=count;
            }
          }
          else{
              count=1;
          }
         
        }
        System.out.println(res);
    }
    public static void main(String[] args) {
        int arr[]={5,10,20,6,3,8};
        getLongestEvenOdd(arr);
    }
}
