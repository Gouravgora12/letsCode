package Arrays;

public class maxCircularOptimises {
    static int cardainAlgo(int arr[]){
        int n=arr.length;
        int maxEnding=arr[0];
        int res=0;
        for(int i=1;i<n;i++){
             maxEnding=Math.max((maxEnding+arr[i]), arr[i]);
            if(maxEnding>res){
                res=maxEnding;
            }
        }
        return res;
    }
    static int  getMaxInCircular(int arr[]){
        int res= cardainAlgo(arr);
        int arrSum=0;
        if(res<0){
            return res;
        }
        for(int i=0;i<arr.length;i++){
            arrSum+=arr[i];
            arr[i]=-arr[i];
        }
        int res2= cardainAlgo(arr)+arrSum;
        return Math.max(res, res2);
    }

    public static void main(String[] args) {
        int arr[]={2,5,-1,4,7};
        System.out.println(getMaxInCircular(arr));
       
    }
}
