function dltDlicateInSorted(a) {
    let res=0
    let arr=[]
    for (let i = 1; i <=a.length; i++) {
        if(a[res]!=a[i]){
            arr.push(a[res])
        }
        {
            res++
        }

    }
    return arr;
}
var arr = [10,12,12,12,13,14,15,15]
console.log(dltDlicateInSorted(arr))
