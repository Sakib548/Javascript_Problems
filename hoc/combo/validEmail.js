import customMap from "../map/customMap.js"
import{customFilter2} from "../filter/customFilter.js"


const data =[
    "alice@example.com",
    "bob@company.org",
    "not-an-email",
    "charlie@gmail.com",
    "david#nope.com"
  ]
  
const validEmails = customFilter2(data,(data)=>data.includes("@"));
const result = customMap(validEmails,(item)=>item.substring(item.indexOf('@')+1,item.length))
  

console.log(result);
