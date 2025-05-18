function nestedLogSequence(){
    setTimeout(()=>{
       console.log("First");
       setTimeout(()=>{
        console.log("Second");
        setTimeout(()=>{
            console.log("Third");

        },3000)
       },2000);      
    },1000)
}

nestedLogSequence();