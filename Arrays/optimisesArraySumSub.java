package Arrays;

public class optimisesArraySumSub {
    static void getSubSum(int arr[]){
        int n=arr.length;
        int maxEnding=arr[0];
        int res=0;
        for(int i=1;i<n;i++){
             maxEnding=Math.max((maxEnding+arr[i]), arr[i]);
            if(maxEnding>res){
                res=maxEnding;
            }
        }
        System.out.println(res);
    }
    public static void main(String[] args) {
        int arr[]={-1,-2,-3,3,-4,-9};
        getSubSum(arr);
    }
}
