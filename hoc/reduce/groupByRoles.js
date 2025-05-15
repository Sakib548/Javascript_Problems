import customReduce from "./customReduce.js";


const users = [
    { name: "Alice", role: "admin" },
    { name: "Bob", role: "user" },
    { name: "Charlie", role: "admin" },
    { name: "David", role: "user" },
    { name: "Eve", role: "moderator" },
  ];
  

  const result = customReduce(users,(acc,user,i)=>{
   //   if(Object.keys(acc).length ===0){
   //      let index = users[i].role;
   //      acc[index] = [{name:users[i].name,role:users[i].role}]
   //   }
    // return acc;
    let role = user.role;
    
    if(!acc[role]){
    
      acc[role] = [user];
    }
     else{
     // console.log(acc);
      
      acc[role].push(user);
     }
    return acc;
  },{})

  console.log(result);
  