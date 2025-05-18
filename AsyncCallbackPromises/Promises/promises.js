
const first = new Promise((resolve,reject)=>{
    setTimeout(()=>{
       resolve("First");
       
    },1000)
})

const second = new Promise((resolve,reject)=>{
    setTimeout(()=>{
       resolve("Second");
       
    },2000)
})

const third = new Promise((resolve,reject)=>{
    setTimeout(()=>{
       resolve("Third");
       
    },3000)
})
   Promise.all([first,second,third]).then((data)=>console.log(data))
   Promise.race([first,second,third]).then((data)=>console.log(data))