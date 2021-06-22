//left rotate by D poistions
let arr=[1,2,3,4];
function leftRotate(a){
    let n=a.length;
    for(let i=2;i<n;i++){
      int temp=a[i-2]
      a[i]=a[i+2]
    }

    
    return a;
}
console.log(leftRotate(arr))