import customMap from "./customMap.js";


const vehicles = ['taxi','car','van','train','plane'];

const result = customMap(vehicles,(element)=>element.slice(0,1));



console.log(result);