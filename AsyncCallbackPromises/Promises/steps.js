// function step1(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//               console.log("Step 1");
//               resolve()
              
//         },1000)
//     })
// }

// function step2(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//               console.log("Step 2");
//               resolve()
              
//         },1000)
//     })
// }


// function step3(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//               console.log("Step 3");
//               resolve()
              
//         },1000)
//     })
// }

//step1().then(()=>step2()).then(()=>step3())
 function delayLogs(msg,delay){

    return new Promise((resolve,reject)=>{
        setTimeout(()=>{


            console.log(msg);
            
            resolve()
            
          },delay)
    })
    
}



delayLogs("Step 1",1000).
then(()=>delayLogs("Step 2",1000))
.then(()=>delayLogs("Step 3",1000))