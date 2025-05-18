

function retry(fn,times){

    function attempt(currentTry){
        return fn().then((result)=>{
             console.log("Success after "+currentTry+" tries");
             return result;
        }).catch((err)=>{
           if(currentTry < times){
            return attempt(currentTry+1);
           }else{
            return Promise.reject(err)
           }
        })
    }
    return attempt(1);
}

function flaky(){
    return new Promise((resolve,reject)=>{
        if(Math.random()<0.5) resolve("Success");
        else reject(new Error("Failed"));
    })
}

retry(flaky,3).then((data)=>console.log(data)).catch((err)=>console.log(err.message));
