import customMap from "./customMap.js";


const vehicles = ['taxi','car','van','train','plane'];

const result = customMap(vehicles,(element)=>`item ${element}`);



console.log(result);