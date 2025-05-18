
function createtask(name,delay){

   return new Promise((resolve,reject)=>{
      
      setTimeout(()=>{
         if(delay === 2000){
            reject(new Error(`${name} failed`));
         }
         resolve(`${name} finished`);
         
      },delay)
   })
}



const first = ()=>createtask("Task 1",1000);

const second = ()=> createtask("Task 2",2000);

const third = ()=> createtask("Task 3",3000);

   Promise.all([first(),second(),third()]).then((data)=>console.log(data))
   .catch((err)=>console.error("Error",err.message))
  ;
   
   Promise.race([first(),second(),third()]).then((data)=>console.log(data))
   .catch((err)=>console.error("Error",err.message))