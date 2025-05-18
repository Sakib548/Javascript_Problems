
//  const fetchPosts(id){
//     const response = 
//  }
 
 
 fetch(`https://jsonplaceholder.typicode.com/users`)
 .then((response)=> response.json())
 .then((data)=>fetch(`https://jsonplaceholder.typicode.com/posts?userId=${data[0].id}`))
 .then((response)=>response.json())
 .then((data)=>fetch(`https://jsonplaceholder.typicode.com/comments?postId=${data[0].id}`))
 .then((response)=> response.json())
 .then((data)=>console.log(data));

 

