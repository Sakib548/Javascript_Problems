import customReduce from "./customReduce.js";

const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"]



const result = customReduce(fruits,function(acc,word) {
  
    console.log(word);
    
    // if(!result.hasOwnProperty(`${word}`)){
    //     result[`${word}`] = 1;
    // }else if(result.hasOwnProperty(`${word}`)){
    //     result[`${word}`] = result[`${word}`] +1;
    // }

    if (!acc.hasOwnProperty(word)) {
        acc[word] = 1;
        console.log(acc);
        
      } else {
        acc[word] += 1;
        console.log(acc);
      }
      //acc[word] = (acc[word] || 0) + 1;

      return acc;
},{})


console.log(result);