
const utils = require('./modules/mymodule')
const getTime = require('./modules/mymodule').getCurrentTime()

console.log(utils.getCurrentTime()); 
console.log(utils.sum(1,2)); 

console.log(getTime);
