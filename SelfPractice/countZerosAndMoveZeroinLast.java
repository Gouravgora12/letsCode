public class countZerosAndMoveZeroinLast{
    static void shiftZeros(int arr[]){
        int count=0;
        int n= arr.length;
        for(int i=0;i<n;i++){
            if(arr[i]!=0){
                arr[count]=arr[i];
                count++;
            }
        }
        System.out.println(arr.toString());
    }
    public static void main(String[] args) {
        int arr[]={1,0,2,0,3,04};
        shiftZeros(arr);
    }
}