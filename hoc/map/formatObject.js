import customReduce from "./customMap.js";


const people = [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 },
    { name: "Charlie", age: 40 }
  ];

  const formattedArray = customReduce(people,(people)=> `${people.name}(${people.age})`);

  console.log(formattedArray);
  