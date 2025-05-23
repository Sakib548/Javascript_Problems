
// async function someAsyncTask() {
//     let result;
//     setTimeout(()=>{
//        result = "Success";
//     },3000)

//     return result;
// }

// async function timeout() {
//     let result;
//     setTimeout(()=>{
//        result = "Timeout";
//     },1000)

//     return result;
// }

async function someAsyncTask(){
   let promise =  new Promise((resolve,reject)=>{
        setTimeout(()=>{
          resolve("Success")
        },3000)
    })
    let result = await promise;
    return result;
}


// async function timeout(){
//     let promise =  new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//           resolve("Timeout")
//         },2000)
//     })
//     let result = await promise;
//     return result;
// }



async function withTImeout(taskFn,delay) {
   let result =  taskFn();
   let timeout=  new Promise((_,reject)=>setTimeout(()=>{reject(new Error("Timeout"))},delay))
   return Promise.race([result,timeout]);

}

withTImeout(someAsyncTask,2000).then((data)=>console.log(data)).catch((err)=>console.log(err.message))
