
let fruit = ['mango', 'melon']
console.log(fruit);

let newFruit = [...fruit, 'lemon', 'grape']
console.log(newFruit);

let food = [...fruit, 'vodka', 'pizza']
console.log(food);

let allFood = [...newFruit, ...food]
console.log(allFood);


let product = {
    name: 'Durian',
    price: 200,
}
console.log(product);

let newProduct = {
    ...product,
    category: 'fruit'
}
console.log(newProduct);

let newPrice={
    ...newProduct,
    price: 320,
}
console.log(newPrice);

