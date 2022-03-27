let data = [1,2,3,4]

console.log(data.map(element => element ** 2));

console.log(data.map(e => {
    const number = e ** 2
    return number
}))

console.log(data.map(e => {
    return e ** 2
}))

console.log(data.map(e => e.toString()));

data = ['a','b','c','d','e']

data.forEach(element => {
    console.log(data.indexOf(element),element);
});

let result = data.map((element,index) => {
    return `index ${index} element : ${element}`
})

console.log(data.map((element,index) => {
    return `index ${index} element : ${element}`
}));

data = [
    {
        day:'24/12/2021',
        weather:'cool',
        temperature:22
    },
    {
        day:'25/12/2021',
        weather:'cool',
        temperature:24
    },
    {
        day:'26/12/2021',
        weather:'warm',
        temperature:28
    },
]

console.log(data.map(e => e.day));
