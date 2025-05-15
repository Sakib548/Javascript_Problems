const reviews = [
    { reviewer: "Alice", rating: 4.5 },
    { reviewer: "Bob" },                         // no rating
    { reviewer: "Charlie", rating: 5.0 },
    { reviewer: "David", rating: null },         // invalid rating
    { reviewer: "Eve", rating: 3.0 },
    { reviewer: "Frank", rating: "4.2" },        // string, not number
  ];
  
console.log(typeof reviews[0].rating);

  
//it excludes 0 because 0 is falsy in JavaScript.

 // const sum = reviews.reduce((acc,num)=> num.rating && typeof num.rating!=='string'?acc+num.rating:acc,0);
 const sum = reviews.reduce((acc,num)=> Number.isFinite(num.rating)?acc+num.rating:acc,0);
  const validRatings = reviews.filter((review)=>review.rating&&typeof review.rating!=='string')

  const average = sum / validRatings.length;
  console.log(sum,average.toFixed(2));
  