package Arrays;

public class minAndMax {
    public static void getMinMax(int arr[]){
        int min=0;
        int max=0;
        for(int i=0;i<arr.length;i++){
            if(arr[i]>arr[max]){
                max=i;
            }
            if(arr[i]<arr[min]){
                min=i;
            }
        }
        System.out.println("Min : "+min+ ":"+"Max :"+max);
    }
    public static void getSecondLargest(int arr[]){
        int minL=-1;
        int max=0;
        for(int i=0;i<arr.length;i++){
            if(arr[i]>arr[max]){
                minL=max;
                max=i;
            }
            if(arr[i]!=arr[max]){
                if(minL==-1 ||arr[i]>arr[minL]){
                    minL=i;
                }
            }
           
        }
        System.out.println("SecondLargest : "+minL+ ":"+"IstLargest :"+max);

    }
    public static void main(String[] args) {
        int arr[]={12,7,12,9};
       // getMinMax(arr);
        getSecondLargest(arr);
    }
}
