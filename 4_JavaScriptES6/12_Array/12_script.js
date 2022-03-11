// join concat
const data = [1,2,3]
const other_data = [2,3,4]

console.log(data)

const result = data.join()

console.log(data.join())
console.log(data.join(' '))
console.log(data.join(''))

console.log(data.concat(other_data))
console.log(other_data.concat(data))