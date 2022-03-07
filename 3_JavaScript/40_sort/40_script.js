let points = [20, -5, -2, 40, 100, -500, 150]
console.log(points)

let sorted = points.sort()
let reversed = points.reverse()

console.log(sorted)
console.log(points)

console.log(points)

points = [20, -5, -2, 40, 100, -500, 150]

console.log(points)

points.sort(function (a, b) {
    console.log(a,"\t", b,"\t", a - b)
    return a - b
})  

console.log(points)

points = [20, -5, -2, 40, 100, -500, 150]

console.log(points)

points.sort(function (a, b) {
    console.log(b,"\t", a,"\t", b - a)
    return b - a
})

console.log(points)  