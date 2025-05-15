const blogPosts = [
    { author: "Alice", content: "Writing is a skill that improves with practice." },
    { author: "Bob", content: "Always test your code thoroughly before deploying." },
    { author: "Alice", content: "Consistency beats intensity." },
    { author: "Charlie", content: "Debugging is twice as hard as writing the code in the first place." },
    { author: "Bob", content: "Keep your functions small and focused." },
    { author: "David", content: "Naming things is one of the hardest problems in programming." }
  ];
  
//console.log(blogPosts[0].content.split(" ").length);

const mappedPosts = blogPosts.map((blog)=>{
    return {
        author:blog.author,
        content:blog.content.split(" ").length
    }
  
})

// let mapped2 = [...mappedPosts];
// let result = [];
// for(let i =0,n=mapped2.length;i<n;i++){
//     for(let j =i+1;j<n;j++){

//         if(mapped2[i].author === mapped2[j].author){
           
//            mapped2[i].content+=mapped2[j].content;
           
//            result.push(mapped2[i]);

//         }
//     }
//     //result.push(mapped2[i])
// }

const reducedPosts = Object.values(mappedPosts.reduce((acc,post)=>{

    if(!acc[post.author]){
        acc[post.author] = post;
    }else{
        acc[post.author].content+=post.content

    }
    return acc;
},{}))

for (let index = 0; index < reducedPosts.length; index++) {
    console.log(reducedPosts[index].content);
    
    
}

let result = reducedPosts.sort((a,b)=>b.content-a.content)
result = result.slice(0,3);

console.log(result);
