public class allDiviser {
   
    public static String getAllDiviser(int x){
        String s1=" ";
        int i;
        for( i =1; i*i<x;i++){
            if(x%i==0){
              s1 = s1+i+" ";
            }
        }
        for( ;i>=1;i--){
           if(x%i==0){
            s1 = s1+x/i+" ";
           } 
        }
        return s1;
    }
    public static void main(String[] args) {
        int x=4;
        System.out.println("All Divisers"+ getAllDiviser(x));
    }
}
