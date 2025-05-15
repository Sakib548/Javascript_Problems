import customReduce from "./customReduce.js";

const greeting = "apple";



const result = customReduce(greeting,function(acc,word) {
   
    
    
 
    if (!acc.hasOwnProperty(word)) {
        acc[word] = 1;
    }else{
        acc[word]+=1;
    }
    return acc;
},{})


console.log(result);