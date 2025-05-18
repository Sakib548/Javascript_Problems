


// const logAfterDelay = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
       
//             resolve("resolved")
       
//     },3000)
// })

// logAfterDelay.then((data)=>console.log(data));


function logAfterDelay(msg,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
           if(Math.random()<0.5){
            resolve(msg)
             
           }else{
            reject(new Error("Random Error"))
           }
        },delay)
    })
}

logAfterDelay("Hello",1500).
   then((data)=>console.log(data))
.catch((err)=>console.log("Caught",err.message)
)



// logAfterDelay("Hello!", 3000)
//     .then(console.log)
//     .catch((err) => console.error("Caught:", err.message));