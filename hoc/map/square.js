import customMap from "./customMap.js"
let array = [1,2,3,4,5,6];




// const result =  square(array,function(num){

//     return num *  num;
// })

const result =  customMap(array,(num)=> num *  num);

console.log(result);
