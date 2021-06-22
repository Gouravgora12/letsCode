package Arrays;

public class difference {
    static void getMaxDif(int arr[]){
        int res=arr[1]-arr[0];
        int min=arr[0];
        for(int i=1;i<arr.length;i++){
            if(arr[i]-min>res){
                res=arr[i]-min;
            }
        }
    }
    public static void main(String[] args) {
        int arr[]={1,2,6,11,13};

        getMaxDif();
    }
}
