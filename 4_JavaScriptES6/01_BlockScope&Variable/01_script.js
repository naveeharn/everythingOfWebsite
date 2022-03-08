
var price_1 = 20
var fruit_1 = 'mango'

if (price_1 === 20) {
    var fruit_1 = 'som-o'
    console.log('in block', fruit_1)
}
console.log('out block', fruit_1, '\n')

let price_2 = 20
let fruit_2 = 'mango'

if (price_2 === 20) {
    let fruit_2 = 'som-o'
    console.log('in block', fruit_2)
}
console.log('out block', fruit_2)

const person = { firstname: 'naveeharn', lastname: 'marker' }
console.log(person)
person.firstname = 'alone'
console.log(person)
