
import customReduce from "./customReduce.js";

const greeting = ["Hello","r","World"]



// const result = customReduce(greeting,function(acc,word,i) {

   
//    if(!acc){
//     return acc+','+word
//    }else{
//       if(i===0){
//         return word+acc;
//       }else if(i!==greeting.length-1){
//         return acc+word+acc[acc.length-1];
//       }else{
//         return acc+word;
//       }
//    }
   
  
// },"?")

// const customJoin = (array, separator = ",") =>
//     customReduce(array, (acc, char, i) =>
       
        
//       i === 0 ? char : acc + separator + char, ""
//     );


const customJoin = (array,separator=",")=>

    customReduce(array,(acc,word,i)=> i === 0?word:acc+separator+word,"");

console.log(customJoin(greeting,"?"));