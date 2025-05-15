import customReduce from "./customReduce.js";

const numbers = [1,2,3,4,5,6,7,8];

const result = customReduce(numbers,(acc,num)=> acc > num?acc:num,0)


console.log(result);
