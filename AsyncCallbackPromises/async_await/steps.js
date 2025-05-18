async function delayLogs(msg,delay){

    return new Promise((resolve,reject)=>{
        setTimeout(()=>{


            console.log(msg);
            
            resolve()
            
          },delay)
    })
    
}



async function steps(){
    await delayLogs("Step 1",1000);
    await delayLogs("Step 2",1000);
    await delayLogs("Step 3",1000);

}

steps()