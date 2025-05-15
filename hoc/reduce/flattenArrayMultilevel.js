import customReduce from "./customReduce.js";

let numbers = [[1,2,4],10,[6,7,8],[8,[4],1]];

//console.log(...[1,2,4]);


const isArray = (arr)=>{

    while(Array.isArray(arr)){
        
       //console.log(...arr);
       
        isArray(...arr)
    }
   // console.log(arr);
    
    return arr;
}

// function result(array){
//     return customReduce(array,(acc,num)=>Array.isArray(num)?acc.concat(result(num)):acc.concat(num),[])
// } 

const result = (array)=>{

    return customReduce((array),(acc,num)=>Array.isArray(num)?acc.concat(result(num)):acc.concat(num),[]);
}
// const result = customReduce(numbers,(acc,num)=>{


    
//     return Array.isArray(num)?acc.concat(result(num)):acc.concat(num);
// },[])

console.log(result(numbers));
