async function retry(fn,times) {
    
    for(let i =0;i<times;i++){
        try{
             let result = await fn();
            console.log( `Success after ${i+1} times`);
           
            return result;
        }
        catch(err){
          if(i===times-1){
            continue;
          }else{
            console.log("Failed after",err);
                throw err; // or return error.message
          }
        }
    }
}


async function flaky() {
    
    if(Math.random()<0.5) throw new Error("Random Error");
    return "Success";
}

retry(flaky,3);