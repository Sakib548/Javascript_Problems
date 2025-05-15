import customReduce from "./customMap.js";

const celsius = ["33","35"];

const fahrenhite = customReduce(celsius,(temp) => (9 *temp)/5+32);

console.log(fahrenhite);



