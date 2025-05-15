
////////////version 1 without accounting for not giving initialValue//////////////////////////
// const customReduce = (array,callback,initialValue)=>{
//     let accumulator = initialValue;
//     for(let i =0,n=array.length;i<n;i++){
       
//         accumulator =  callback(accumulator,array[i],i,array);
//     }
//     console.log(accumulator);
    

//     return accumulator;
// }

////////////version 2  accounting for not giving initialValue//////////////////////////
// const customReduce = (array,callback,initialValue)=>{
//     let hasInitialValue = arguments.length === 3;
//     let accumulator = hasInitialValue?initialValue:array[0];
//     let startIndex = hasInitialValue?0:1;
//     for(let i =startIndex,n=array.length;i<n;i++){
       
//         accumulator =  callback(accumulator,array[i],i,array);
//     }
    
    

//     return accumulator;
// }


// const customReduce = function(array,callback,initialValue){
//     let hasInitialValue = arguments.length === 3;
//     let accumulator = hasInitialValue?initialValue:array[0];
//     let startIndex = hasInitialValue?0:1;
//     for(let i =startIndex,n=array.length;i<n;i++){
       
//         accumulator =  callback(accumulator,array[i],i,array);
//     }
    
    

//     return accumulator;
// }

const customReduce = function (array, callback, initialValue) {
    let hasInitialValue = arguments.length === 3;
    let accumulator = hasInitialValue ? initialValue : array[0];
    let startIndex = hasInitialValue ? 0 : 1;
  
    for (let i = startIndex; i < array.length; i++) {
     // console.log(`acc=${accumulator},i=${i},array[i]=${array[i]}`);
       
      accumulator = callback(accumulator, array[i], i, array);
      
      
    }
  
    return accumulator;
  };
  

export default customReduce;
