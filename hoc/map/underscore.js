import customMap from "./customMap.js";


const texts = ["hello world", "foo bar", "no_space_here", "multiple   spaces"];

const result = customMap(texts,(text)=>text.replaceAll(" ","_"));

console.log(result);

