 let obj1= {a:1,b:2,c:{e:1}}
// let obj2 = Object.create(obj1)
// console.log(obj2);
// console.log(obj2.a);
// obj2.a++
// obj2.a=44
// console.log(obj1.a);
// console.log(obj2.a);

// //let obj3= {n:1,...obj1}
// //obj3.b=99
// //obj3.y=004
// console.log(obj3);
// console.log(obj1);

let account={...obj1}
account.c.e='eee'
console.log(account);
console.log(obj1);
