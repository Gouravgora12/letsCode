public class gp {
    static double getGpNthTerm(int a, int b, int n)
	{
        //float r= (b/a);
        double r= ((double)b/(double)a);
        return (a *getPowerVal(r, n));
	}
	static double getPowerVal(double r,int n){
        double result =1;
        while(n!=1){
            result *=r;
            n--;
        }
        return result;
    }
	// Driver code
	public static void main (String[] args)
	{
        int a=84; // starting term
        int b=87; //second term
        int n=3;
		System.out.println(getGpNthTerm(a,b,n));
	}
}
