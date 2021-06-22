function removeDuplicate(a) {
    let l=(a.length-1)
    let obj={ }
    for (let i = 0; i < a.length; i++) {
        if(obj.hasOwnProperty(a[i])){
            obj[a[i]]=obj[a[i]]+1
        }
        else{
            obj[a[i]]=1
        }
    }
    
   console.table(obj);

    return Object.keys(obj).map(Number)
}
var arr = [6, 6, 5,6, 11,12,13,12]
console.log(removeDuplicate(arr))
