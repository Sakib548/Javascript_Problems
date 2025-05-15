import customReduce from "../reduce/customReduce.js";

const transactions = [
    { category: "food", amount: 25 },
    { category: "transport", amount: 10 },
    { category: "food", amount: 15 },
    { category: "entertainment", amount: 40 },
    { category: "transport", amount: 5 },
    { category: "food", amount: 30 }
  ];

  //const result = transactions.map((element)=> )
  
//   const result = transactions.reduce((acc,cat)=>{
    
//     let category = cat.category;
//     let amount = cat.amount;
    
//     if(!acc[category]){
//         acc[category] = amount ;
//     }else{
//         acc[category] =amount +acc[category];
//     }
//     return acc;
//   },{})

const result = transactions.reduce((acc,cat)=> {
    const {category,amount} = cat;
    acc[category] = (acc[category] || 0)+amount; 
    return acc;
},{})

  console.log(result);
  