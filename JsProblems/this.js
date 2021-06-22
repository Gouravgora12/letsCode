function print(){
    this.name='k'
   
}
 let a=new print()
console.log(a);
// let x={name:'grv'}
// obj={
//     a:'youth',
//     f:print,
//     d:function(){
//         //this.f.bind(x)()
//         this.k=this.f.bind(x)
//         this.k()
//         //this.f()
//         //console.log(this.f==print);
//         //print()
//     }
// }
//  obj.d()
// obj.k()
// console.log(obj.x==obj.f);
// let x= obj.f()
// x()
// console.log(x==print);
//obj.d()

var print2= ()=>{
    this.name='j'
    console.log(this);
}
print2()