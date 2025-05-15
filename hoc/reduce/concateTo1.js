import customReduce from "./customReduce.js";

const greeting = ["Hello","","World"]



const result = customReduce(greeting,function(acc,word) {
   return acc.concat(word);
   //return acc+word;
},"")


console.log(result);