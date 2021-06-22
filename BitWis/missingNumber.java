package BitWis;

public class missingNumber {
    static int getMissing(int[] arr,int n){
        int x1=arr[0];
        int x2=0;
        for(int i=1; i<n;i++){
            x1 = x1 ^ arr[i];
            
        }
        for(int i=0; i<=n+1;i++){
            x2 = x2 ^ i;
            
        }
        return( x1^x2);
    }
    
    public static void main(String[] args) {
        int arr[]={5,2,4,3,6,7,1};
        int n=7;
        System.out.println("Missing Number is :" +getMissing(arr,n));
    }
}
