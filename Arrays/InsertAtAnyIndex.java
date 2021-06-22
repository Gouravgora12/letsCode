package Arrays;

public class InsertAtAnyIndex {
    static void insertAtIndex(int[] arr,int size,int cap,int index,int val){
        index= index-1;
        for(int i=size-1;i>=index;i--){
            arr[i+1]=arr[i];
        }
        arr[index]=val;
        for(int i=0;i<6;i++){
            System.out.print(arr[i]+" ");
        }
    }
    public static void main(String[] args) {
        int index=2;
        int val=43;
        int []arr= new int[6];
        arr[0]=1;
        arr[1]=5;
        arr[2]=11;
        int size=3;
        int cap=6;
       
        insertAtIndex(arr,size,cap,index,val);
    }
}
