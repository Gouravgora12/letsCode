let arr=[1,2,3,4]
let sum= arr.reduce((acc,current,i,a)=>{
//a.splice(1,1)
return acc.push[current]
// console.log({acc,current,i,a});
},[])
console.log(sum);

// let max= [1,2,888].reduce((acc,ccc)=>{
// return Math.max(acc,ccc)
// },40)
//  console.log(max);
// const getMax = (a, b) => Math.max(a, b);
// let m=[1, 100].reduce(getMax, 50);

// console.log();
//let names = [2,2,3,3,4,4,4,5,1,33]

// let countedNames = names.reduce(function (allNames, name) {
//   if (name in allNames) {
//     allNames[name]++
//   }
//   else {
//     allNames[name] = 1
//   }
//   return allNames
// }, {})
// console.log(Object.keys(countedNames).map(Number));
// let orderedArray = Array.from(new Set(names))
// console.log(orderedArray);
// let myArray = ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd']
// let myOrderedArray = myArray.reduce(function (accumulator, currentValue) {
//   if (accumulator.indexOf(currentValue) === -1) {
//     accumulator.push(currentValue)
//   }
//   return accumulator
// }, [])
// let a=[]
// let array=[1,2,3,4].reduceRight((acc,ccc)=>{
//     a.push(ccc)
// },[])
// console.log(a);