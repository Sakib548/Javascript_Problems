function logAfterDelay(msg,delay){
   
    setTimeout(()=>{
        console.log(msg);
        
    },delay)
}

logAfterDelay("Hello",3000);