const customMap = (arr,callback)=>{
  
    let result = [];

    for(let i =0,n=arr.length;i<n;i++){
        result.push(callback(arr[i]));
    }

    return result;

}

export default customMap;