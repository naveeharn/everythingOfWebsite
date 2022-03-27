let data = [1,2,3,4,5,6]

console.log(data.reduce((previous, current) => {
    console.log(previous, current);
    return previous+current
}));
console.log();

console.log(data.reduce((previous, current) => previous+current));
console.log();

console.log(data.reduce((previous, current) => {
    console.log(previous, current);
    return previous+current
},100));
console.log();

let cart = [
    {
        name:'UNIQLO T-Shirt',
        price:99,
    },
    {
        name:'UNIQLO Hood',
        price:129,
    },
    {
        name:'UNIQLO Jeans',
        price:119,
    },
]

console.log(cart.reduce((prev,curr) => prev + curr.price,0));