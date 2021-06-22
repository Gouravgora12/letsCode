package Arrays;

public class leader {
    static void getleader(int arr[]){
        int n= arr.length;

        int currentLedr= arr[n-1];
        System.out.println(currentLedr);
        for(int i=n-2;i>=0;i--){
           if(arr[i]>currentLedr){
            currentLedr=arr[i];
            System.out.println(currentLedr);
           }
         }
    }
   
    public static void main(String[] args) {
        int arr[]={11,1,5,4,7,4,2};
        getleader(arr);

    }
}
