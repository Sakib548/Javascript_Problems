
const getEvenUsers = (array,callback)=>{
   
    let evenUsers = [];
    console.log(typeof evenUsers);
    
    for(let i = 0;i<array.length;i++){
        
        
        if(callback(array[i].id)){
           
            evenUsers.push(array[i]);
        }
    }
    console.log(evenUsers);
    
    return evenUsers;
}

const fetchUsers = async()=>{
    try{
     const response = await fetch("https://jsonplaceholder.typicode.com/users")
     const data = await response.json();
     const evenUsers = getEvenUsers(data,function(id){
        return id %2 === 0;
     })
     console.log(evenUsers);
     
     
    }catch(error){
      console.log(error);

    }
}
fetchUsers();