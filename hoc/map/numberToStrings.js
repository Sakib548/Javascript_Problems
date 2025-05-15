import customMap from "./customMap.js"

let array = [1,2,3,4,5,6];

const convertedStrings = customMap(array,(num) => num.toString());

console.log(convertedStrings);
