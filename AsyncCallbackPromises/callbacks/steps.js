function steps(){
    setTimeout(()=>{
         console.log("Step1");
         setTimeout(()=>{
            console.log("Step2");
            setTimeout(()=>{
                console.log("Step3");
            },1000)
         },1000)
         
    },1000)

}


steps()