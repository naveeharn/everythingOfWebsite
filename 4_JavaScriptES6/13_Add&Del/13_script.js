// push(add) pop(del)      : the last element in array.
// shift(del) unshift(add) : the first element in array.

const data = [1,2,3]
console.log(data)

data.push(2)
console.log(data)

data.push(4,5)
console.log(data)

data.push([6,7])
console.log(data)

data.push(...[8,9,10])
console.log(data)

data.pop()
console.log(data)

console.log(data.pop())

data.shift()
console.log(data)

data.unshift(9)
console.log(data)

console.log(data.join())
