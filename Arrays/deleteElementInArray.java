package Arrays;

public class deleteElementInArray {
public static void deleteElement(int[] arr,int size, int x)
{
    int i;
    int j;
    int k;
for(i=0;i<size-1;i++){
    if(arr[i]==x) break;
}
if(i==size){
    System.out.println("Unable to delete");
}
else{
    for(j=i;j<size-1;j++)
   {
      
    arr[j]=arr[j+1];
   }
   for(k=0;k<size-1;k++)
   {
    System.out.print(arr[k]+" ");
   }
}
}    public static void main(String[] args) {
    int arr[]={1,4,5,7,11};
    int size=5;
    int element=5;
        deleteElement(arr,size,element);
    }
}
