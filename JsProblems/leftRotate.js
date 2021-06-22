let arr=[1,2,3,4];
function leftRotate(a){
    let temp=a[0];
    let n=a.length;
    for(let i=1;i<a.length;i++){
       a[i-1]=a[i];
    }
    a[n-1]=temp;
    return a;
}
console.log(leftRotate(arr))