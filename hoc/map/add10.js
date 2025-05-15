import customMap from "./customMap.js";

let array = [1,2,3,4,5,6];



// const result = customMap(array,function(num){
//     return num + 10;
// })
 const result =  customMap(array,(num)=> num +10);



console.log(result);
