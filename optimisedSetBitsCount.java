public class optimisedSetBitsCount {
    static int getSetBits(int n){
        int count=0;
        while(n>0){ // complexity is O(setBits)
            n=(n&(n-1));
            count++;
        }
        return count;
    }
    public static void main(String[] args) {
        System.out.println("SetBits are : "+getSetBits(11));
    }
}
// |, &,^,not


// OR 0 1 1 0
//    1 0 1 0
//    1 1 1 0
// And 0 1 1 0
//     1 0 1 0
//     0 0 1 0
// XOR 0 1 1 0
//     1 0 1 0
//     1 1 0 0
// Xor of 5
//     0101
//     0001
//     0100
// n^0=n;
// n^m= m^n;
// (n^m)^z= (n^y)^z

//logic behind it
//Ist itration
// the binary value for 11 is : 1011
// n-1=                     : 1001
//result=                   : 1001
// 2nd itration
//                           :1001
// n-1                       :1000
// result                    :1000

// 3rd Itration              :1000
// n-1                       :0110
//result                     :0000

