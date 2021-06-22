package Arrays;

public class maximumsubArray {
    static void getMaximumSum(int arr[]){
        int n= arr.length;
        int maxSum=0;
        for(int i=0; i<n;i++){
            int sum=0;
            for(int j=i;j<n;j++){
                sum = sum+arr[j];
                if(sum>maxSum){
                    maxSum=sum;
                }
            }
            
        }
        System.out.println("maxSum x:"+maxSum);
    }
    public static void main(String[] args) {
        int arr[]={1,2,3,-3,4,9};
        getMaximumSum(arr);
    }
}
