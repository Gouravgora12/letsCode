package Arrays;

public class MaxContinus1 {
    static void getMax(int arr[]){
        int res=0;
        int n=arr.length;
        int count=0;
        for(int i=0;i<n;i++){
            if(arr[i]==0){
                count=0;
            }
            else{
                count++;
                res= Math.max(res, count);
            }
        }
        System.out.println(res);
    }
    public static void main(String[] args) {
        int arr[]={1,1,1,1,0,1,0,1};
        getMax(arr);
    }
}
