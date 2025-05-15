


const array = [[1,2,3],[4,[5],6],[7,8,9]];


function flatten(array){
   return  array.reduce((acc,num)=> Array.isArray(num)?acc.concat(flatten(num)):acc.concat(num),[])
}



const flattenArray = flatten(array);

const doubledArray  =   flattenArray.map((num)=>num*2);

console.log(doubledArray);


