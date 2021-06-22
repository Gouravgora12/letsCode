public class BitISSetORNot {
    public static Boolean IsSet(int a, int b){
        if((a & (1 << (b - 1)))!=0){
            return true;
        }
        return false;
    }
    public static void main(String[] args) {
        System.out.println(IsSet(5,3));
    }
}
