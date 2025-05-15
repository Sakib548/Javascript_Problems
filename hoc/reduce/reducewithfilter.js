import customReduce from "./customReduce.js";
//import { customFilter2 } from "../filter/customFilter.js";


const numbers = [1,2,3,4,5,6,7,8];

// const result = customFilter2(numbers,function(number){
//     return number % 2 === 0;
// })

// const sum = customReduce(result,(acc,num)=>acc+num);
// console.log(sum);



// const result = customFilter(numbers,(num)=> num % 2 ===0)

// const sum = customReduce(result,(acc,num)=> acc+num)
// console.log(result);
// console.log(sum);


const sum = customReduce(numbers,(acc,num)=> num%2===0?acc+num:acc,0);

console.log(sum);
