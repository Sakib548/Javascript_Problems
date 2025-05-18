// function logAfterDelay(msg, delay, callback) {

//     setTimeout(()=>callback(msg),delay);
// }


// logAfterDelay("Hello",3000,(msg)=>{
//     console.log(msg);
    
// })

function logAfterDelay(msg, delay, callback) {

    setTimeout(()=>{
        if(Math.random()<0.5){
            callback(null,msg);
        }else{
            callback(new Error("Random Error"),null);
        }
    },delay)
    
    
}


logAfterDelay("Hello",3000,(err,msg)=>{
    if(err) console.error("Error",err.message);
    else console.log(msg);
    
})