import customMap from "../map/customMap.js"
import{customFilter2} from "../filter/customFilter.js"

const string = ["Hello","Hi","Oh","Alaska",'Boredome'];

const result = customMap(customFilter2(string,(item)=>item.length>3),(item)=>item.length);

console.log(result);

