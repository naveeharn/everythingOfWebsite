let data = [1,2,3,4]

console.log(data.filter(element => {
    return element > 2
}));

console.log(data.filter(element => element>1));

data = [
    {
        name:'brandon',
        salary:22000,
        department:'FrontEnd'
    },
    {
        name:'henson',
        salary:25000,
        department:'Backend'
    },
    {
        name:'dine',
        salary:21000,
        department:'UI-Design'
    },
    {
        name:'roger',
        salary:24000,
        department:'Backend'
    },
]
console.log(data.filter(element => {
    return element.salary > 22000
}));
console.log(data.filter(element => element.salary > 21000));
console.log(data.filter(element => element.department == 'Backend'));
console.log(data.filter(element => element.department == 'Backend').filter(element => element.salary > 24000));
