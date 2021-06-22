function reverse(a) {
    let l=(a.length-1)
    for (let i = 0; i < a.length; i++) {
        if (i< parseInt((a.length)/2)) {
            a[i] = a[i] + a[l-i]
            a[l-i] = a[i] - a[l-i]
            a[i]= a[i]-a[l-i]  
        }
    }
    return a;
}
// function reverse(a){
//     const al=arr.length-1
//     for(let i=0;i<=al;i++){
//         let temp = a[i];
//         a[i]=a[al]
//         a[al]=temp
//         al--
//     }
//     return a
// }
var arr = [1,2,3]
//Ist i=0
// al=2
//[1,2,3]
//[3,2,1]

//2nd i =1
//al=1
//[3,2,1]


console.log(reverse(arr))
