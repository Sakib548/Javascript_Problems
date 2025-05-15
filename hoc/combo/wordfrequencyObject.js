import customReduce from "../reduce/customReduce.js";

let sentence = "The cat chased the mouse and the cat ran away";

const array = sentence.toLowerCase().split(' ');

//console.log(array);


const result = customReduce(array,(acc,word)=>{
    if(!acc[word]){
        acc[word] = 1;
    }else{
        acc[word] = acc[word] +1;
    }

    return acc;
},{})


console.log(result);
