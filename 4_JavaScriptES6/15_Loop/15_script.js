// for loop : can use continue, break
// for each : can not use continue, break
// for of   : can use continue, break
const data = [1,2,3,4]

for (let index = 0; index < data.length; index++) {
    const element = data[index];
    console.log(element)
}
console.log('')

data.forEach(element => {
    console.log(element*2)
});
console.log('')

for (const iterator of data) {
    console.log(iterator*3)
}
console.log('')

let sum = 0
data.forEach(element => {
    sum += element
});

console.log(sum)
