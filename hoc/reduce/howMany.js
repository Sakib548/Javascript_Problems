import customReduce from "./customReduce.js";

const numbers = [1,2,3,4,5,6,7,8];

const result = customReduce(numbers,(acc,num)=> {
   if(num %2 ===0){
    acc+=1;
   }
   return acc;
},0)


//const result = customReduce(numbers, (acc, num) => acc + (num % 2 === 0 ? 1 : 0), 0);


console.log(result);