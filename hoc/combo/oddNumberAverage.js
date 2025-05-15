const data = [[1, 2], [3, 4, 5], [6], 7, [8, 9]];


const flattenArray = (data) => data.reduce((acc,num)=>acc.concat(num),[]); //single level

//const flattenArray = (data) => data.reduce((acc,num)=>Array.isArray(num)?acc.concat(flattenArray(num)):acc.concat(num),[]); //deep level

const oddNumbers = flattenArray(data).filter((num)=>num%2!==0);

const sum = oddNumbers.reduce((acc,num)=>acc+num);
const average = sum / oddNumbers.length;

console.log(average);
