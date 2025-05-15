import customReduce from "./customReduce.js";

let numbers = [[1,2,4],10,[6,7,8],[8,4,1]];




const result = customReduce(numbers,(acc,num)=>{
   
   
    if(Array.isArray(num)){
       
        
       acc.push(...num)
        
       //  return [...acc];
    }else{
       // console.log("H");
       
       acc.push(num)

    }
    return acc;
    
},[])

console.log(result);


