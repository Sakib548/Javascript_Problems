const reviews = [
    { reviewer: "Alice", rating: 4.5 },
    { reviewer: "Bob", rating: 3.8 },
    { reviewer: "Charlie", rating: 5.0 },
    { reviewer: "David", rating: 4.2 },
    { reviewer: "Eve", rating: 3.0 }
  ];

// let sum = 0;
//   for(let i=0,n=reviews.length;i<n;i++){
    
//     sum+=reviews[i].rating;
//   }
  
  const sum = reviews.reduce((acc,num)=> acc+num.rating,0);
  let average = 0;;;
   average = sum / reviews.length;
  console.log(sum,average);
  