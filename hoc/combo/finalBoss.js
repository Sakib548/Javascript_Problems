const data = [
    [1, 2, "skip", [15, 6, [22, "x", [30]]]],
    4,
    null,
    [8, 12, [18, "hello", [42, undefined]]],
    "text",
    7,
    [11, [3, [100]]]
  ];
  
const flattenArray = (data) =>  data.reduce((acc,num)=>Array.isArray(num)?acc.concat(flattenArray(num)):acc.concat(num),[]);

const invalidNumbers = flattenArray(data).reduce((acc,num)=>!Number.isInteger(num)?acc+1:acc,0)

console.log(invalidNumbers);



const evennumbers = flattenArray(data).filter((data)=>Number.isInteger(data)&&data%2===0);

const sum = evennumbers.reduce((acc,num)=>acc+num,0)

console.log(sum);


//flattenArray(data)

//const numbers = ()=> flattenArray.filter((element)=>element%2==0)

//console.log(numbers());
