import customMap from "../map/customMap.js"
import{customFilter2} from "../filter/customFilter.js"

const users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 32 },
    { name: "Charlie", age: 29 },
    { name: "David", age: 35 },
    { name: "Eve", age: 41 },
    { name: "Frank", age: 27 },
  ];
  
  //console.log(customMap(users));
  

const result =  customMap(customFilter2((users),(user)=>user.age>30),(user)=>user.name.toUpperCase());

console.log(result);
