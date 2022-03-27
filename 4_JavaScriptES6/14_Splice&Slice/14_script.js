// splice   deleted element by specify start index and number of delete count element
// slice    get element by specify start index and last index - 1

const data = [1,2,3,4]

console.log(data)

console.log(data.splice(1,2))

console.log(data)

data.push(...[2,5,6])

console.log(data)

console.log(data.slice(1,3))

console.log(data[1])

console.log(data.splice(1,1,7))

console.log(data)
