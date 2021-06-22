package Arrays;

public class maxInCircularArray {
    static void getMaxInCircular(int arr[]){
        int n= arr.length;
        int max=0;
        int res= arr[0];
        for (int i=0;i<n;i++){
            int sum =0;
            for(int j=1;j<n;j++){
                int index= (i+j)%n;
                sum+= arr[index];
                if(sum>max){
                    max= sum;
                }
            }
            res= Math.max(max, res);

        }
        System.out.println(res);
    }
    public static void main(String[] args) {
        int arr[]={2,5,-1,4,7};
        getMaxInCircular(arr);
    }
}
