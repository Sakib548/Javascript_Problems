// export const customFilter = (array, callback) => {
//   let  result = [];
//   for (element of array) {
//     if (callback(element)) {
//       result.push(element);
//     }
//   }

//   return result;
// };

// export const customFilter2 = (arr, callback) => {
//   const result = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (callback(arr[i], i)) {
//       result.push(arr[i]);
//     }
//   }
//   return result;
// };

export const customFilter2 = (numbers,callback)=>{

  let result = [];
  for(let i =0,n=numbers.length;i<n;i++){
    if(callback(numbers[i])){
      result.push(numbers[i]);
    }
  }

  return result;

}


///even numbers/////////
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const even = customFilter(numbers, (number) => number % 2 === 0);

// console.log(even);

///////filter string shorter than 4//////////////

// const strings = ["Hello World", "Bye", "Rocket", "Bottle"];

// const result = customFilter(strings, (element) => element.length < 4);

// console.log(result);
//////////////////////////////////////////////////////////////////////////////////

//////////////positive values////////////////////////////

// const numbers = [1, -2, 3, -4, -5, 6, 7, 8, 9, 10];
// const result = customFilter(numbers, (element) => element > 0);

//////////////////check if the first word is capital//////////////////
// const strings = ["hello World", "Bye", "rocket", "Bottle"];
// const result = customFilter(
//   strings,
//   (element) => element[0] === element[0].toUpperCase()
// );

/////////////////////////Keep objects with a certain property (isActive === true).///////////////////
// const object = [
//   {
//     id: 1,
//     name: "A",
//     isActive: true,
//   },
//   {
//     id: 2,
//     name: "B",
//     isActive: false,
//   },
//   {
//     id: 3,
//     name: "C",
//     isActive: false,
//   },
// ];

// const result = customFilter(object, (element) => element.isActive === true);

//////////divisivle by 3

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const result = customFilter(numbers, (element) => element % 3 === 0);

///////////////////////////////Remove falsy values ///////////////////////

// const numbers = [1, 2, 0, undefined, 5, null, 7, "", 9, false];
// const result = customFilter(numbers, (element) => element);

//keep strings that are palindrome

// const strings = ["Madam", "racecar", "leg"];
// const result = customFilter(strings, (element) => {
//   element = element.toLowerCase();
//   return element === element.split("").reverse().join("");
// });

///duplicate entries/////////////////

// const fruits = ["apple", "banana", "apple", "orange", "banana", "grape"];

// const result = customFilter2(fruits,(item,index)=>{
//   return fruits.indexOf(item) === index;
// })


////////////specific substring///////

// const strings = ["apple", "banana", "appleerror", "orange", "banana", "grape","lichierror"];

// const result = customFilter(strings,(item)=>{
//   // return item.indexOf("error")>-1;
//   return item.includes("error");
// })
// console.log(result);
