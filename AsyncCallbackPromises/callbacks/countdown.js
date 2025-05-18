// function countdown(i){    
//         setTimeout(()=>{
//             console.log(i);
//         },(4-i)*1000)
   
// }

// let i = 3;
// while(i>0){
//     countdown(i);
//     i--;
//    // if(i===0){countdown("Go!")}
//    // if(i===0){console.log("Go!")} //wht this prints Go first
// }


function countdown(){
    let steps = [3,2,1,"GO!"];
    steps.forEach((item,index)=>{
        setTimeout(()=>console.log(item),index*1000)
    })
}

countdown()