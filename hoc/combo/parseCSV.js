const csvData = `
name,age,department
Alice,30,Engineering
Bob,25,Marketing
Charlie,35,HR
`.trim();



const csvArray = csvData.split("\n");



//const sarray = csvArray.map((element) =>element === "\n"?[[element])

//const sarray2 = csvArray.reduce((acc,num)=>!num==="\n"?acc.push(num):acc,[]);

let result = [];
for(let i =0;i<csvArray.length;i++){
    
    result.push(csvArray[i].split(','));
    

}

let acc = [];
for(let i =0;i<result.length-1;i++){
    acc.push({});
    for(let j =0;j<result[0].length;j++){
        acc[i][result[0][j]]=result[i+1][j];
    }
 
    

}
console.log(acc);
// for(let i =1;i<result.length;i++){
    
//     for(let j=0;j<result[i].length;j++){
        
//         acc[result[i][j]] = result[i][j];
//     }
// }
// console.log(csvArray);

// console.log(result);


//console.log(csvArray);
//console.log(csvArray);