import { log } from 'console';
import fs from 'fs';
import path from 'path';



function readFile(fileName,callback){

    setTimeout(()=>{
       
            fs.readFile(fileName,(err,data)=>{
                if(err) callback(err,null);
                callback(null, data.toString());
            
            })
        
    },1000)
}

readFile("/mnt/windows7/STUDY/Programming_Language/Javascript/AsyncCallbackPromises/Input.txt",(err,data)=>{

    if(err){
        console.log(err.message);
        
    }else{
        console.log(data);
        
    }
})