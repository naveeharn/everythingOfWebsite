
let food_1 = {
    name: 'Chocolate Cake',
    price: 179,
}

let food_2 = {
    name: 'Strawberry Cake',
    price: 219,
}

console.log(food_1)
console.log(food_2)



let user = {
    user1: 'Joey',
    user2: 'Kranuey',
}
console.log(user)

let userBracket = {
    ['user' + 1]: 'Joey',
    ['user' + 2]: 'Kranuey',
}
console.log(userBracket)

userBracket = {
    ['user' + 1 * 44]: 'Joey',
    ['user' + 2 * 56]: 'Kranuey',
}
console.log(userBracket)



let foodName = 'Cake'
let food = {
    [foodName + 1]: 'Coffee ' + foodName,
    [foodName + 2]: 'Cheese ' + foodName,
}
console.log(food)



foodName = 'cake'
let menu = {
    [foodName + 1]: 'Coffee ' + foodName,
    [foodName + 'Ingredients']: `Cheese, Powder, Eggs, Sugar, Yeast`,
}
console.log(menu)

let {cake1,cakeIngredients} = menu
console.log(cake1)
console.log(cakeIngredients)

