function retry(times){

    let numofTries = 0;

    return new Promise((resolve,reject)=>{

        const interval = setInterval(()=>{
            numofTries++;
          if(Math.random()<0.5 && numofTries<times){
            resolve(`Promise resolved after ${numofTries} tries`);
            clearInterval(interval);
          }else if(numofTries<times){
            
            retry(times)
          }else{
            clearInterval(interval);
            reject(new Error(`Promise rejected after ${numofTries} tries`));
          }
        },2500)
    })
}

retry(3).then((data)=>console.log(data)).catch((err)=>console.log(err.message));
