package Arrays;

public class largest {
    public static int getLargest(int arr[]){
        int res=0;
        for(int i=1;i<arr.length;i++){
            if(arr[i]>arr[res]){
                res=i;
            }
        }
        return res;
    }
    public static void main(String[] args) {
        int arr[]={2,55,11,7,98};
        System.out.println(getLargest(arr));
    }
}
