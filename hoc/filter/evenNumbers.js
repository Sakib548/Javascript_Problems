const numbers = [1,2,3,4,5,6,7,8,9,10];

const customFilter = (numbers,callback)=>{
    
    let result = [];
    for(let i =0,n=numbers.length;i<n;i++){
        if(callback(numbers[i])){
            result.push(numbers[i]);
        }
    }

    return result;
    
}

const result = customFilter(numbers,function(number){
    return number % 2 === 0;
})


console.log(result);
