import * as myModule from "./module.js";

console.log(myModule.getModuleData());
console.log(myModule.age);
console.log(myModule.add(2, 2));
console.log(myModule.obj.name);

//or
import { getModuleData, age, add as addition, changeAge } from "./module.js";
console.log(getModuleData());
console.log(addition(2, 2));
console.log(age);
// age = 34; // error
changeAge(34);
console.log(age);
//or
import myDefault from "./module.js";
console.log(myDefault.getModuleData());
console.log(myDefault.value);
//but
console.log(myModule.value); //undefined
