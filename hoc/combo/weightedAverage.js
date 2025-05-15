const reviews = [
    { rating: 4.5, votes: 10 },
    { rating: 5.0, votes: 4 },
    { rating: 3.0, votes: 8 },
    { rating: 4.0, votes: 0 },       // should count as 0 weight
    { rating: "4.2", votes: 3 },     // invalid rating
    { rating: null, votes: 2 },      // invalid rating
  ];
  
  
//console.log(typeof reviews[0].rating);

  
//it excludes 0 because 0 is falsy in JavaScript.

 // const sum = reviews.reduce((acc,num)=> num.rating && typeof num.rating!=='string'?acc+num.rating:acc,0);
 const sumOfRatingsVotes = reviews.reduce((acc,num)=> Number.isFinite(num.rating)?acc+num.rating*num.votes:acc,0);
 const sumOfVotes = reviews.reduce((acc,num)=> Number.isFinite(num.rating)&&num.votes>0?acc+num.votes:acc,0);


  
  const weighted_average  = sumOfRatingsVotes  / sumOfVotes;
  console.log(weighted_average.toFixed(2));
  