// indexOf(element) : search element in array and return index of elmement. if not search return -1
// find(element) : search element in array and return element. if not search return -1
// findIndex(element) : search element in array and return index of elmement. if not search return -1

const colors = ['red', 'green', 'blue', 'purple', 'white']

console.log(colors.indexOf('blue'))
console.log(colors.indexOf('yellow'))

console.log(colors.find(element => element==="purple"))
console.log(colors.find(element => element==="brown"))

console.log(colors.findIndex(element => element=='white'))
console.log(colors.findIndex(element => element=='grey'))