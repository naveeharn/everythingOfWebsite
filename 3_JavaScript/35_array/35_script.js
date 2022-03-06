let colors = ["red","white","blue","purple"]
console.log("before : ",colors)
let count = colors.length

let result = colors.sort()

console.log("after : ",result)
console.log(count)
 
result = colors.reverse()
console.log("reverse : ",result)

colors.push("green")
result = colors.sort()

console.log("push : ",result)

result.pop()
console.log("pop : ",result)


