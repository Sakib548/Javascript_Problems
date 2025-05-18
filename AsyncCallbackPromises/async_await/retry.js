

async function retry(fn,times) {
    for (let i = 0; i < times; i++) {
        try {
            let result = await fn();
            console.log(`Success after ${i+1} tries`);
            return  result;
            
        } catch (error) {
            if(i ===times-1){
                console.log("Failed after",error);
                throw error; // or return error.message
            }
        }
        
    }
}



async function flaky() {
    
    if(Math.random()<0.5) throw new Error("Failed");
    return "Success!";
}          

retry(flaky,3);