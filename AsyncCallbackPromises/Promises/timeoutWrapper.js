function someAsyncTask(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
          resolve("Success")
        },3000)
    })
}


function timeout(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
          resolve("Timeout")
        },2000)
    })
}

Promise.race([timeout(),someAsyncTask()]).then((value)=>console.log(value)).catch((err)=>console.log(err));