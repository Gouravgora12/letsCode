let user1={name:'gourav', email:'g@v.com'}
let user2={name:'vipin', email:'v@g.com'}
let users=[user1,user2]

// let deepclone = function(o){
//     let clone =JSON.parse(JSON.stringify(o))
//     console.log("dd",clone);
//     return clone
// }
let swapUsers=function(u){
    let temp = u[0];
    if(u==users){
        console.log('true');
    }
    u[0]=u[1];
    u[1]=temp
    return u;
}

let setcredit= function(users,index,credit){
    users[index].credit = credit
    return users
}
//console.table(setcredit([...users],0,10))
 console.table(swapUsers([...users]))
// console.table(deepclone(setcredit(users,0,10)))
console.table(users);