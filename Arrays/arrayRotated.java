package Arrays;
//find the number of times array is roated
public class arrayRotated {
    static int getRotations(int arr[]){
        int low=0;
        int high=arr.length-1;
        int mid=lo
        return 0;
    }
    public static void main(String[] args) {
        int arr[]={4,5,6,1,2,3};
        System.out.println("Number of times array is roated is :"+getRotations(arr));
    }
}

//1,2,3,4,5,6
//2,3,4,5,6,1=1
//3.4,5,6,1,2=2
//4,5,6,1,2,3=3
