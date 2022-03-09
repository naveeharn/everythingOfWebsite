
const addUser = (firstname, lastname, city) => {
    return firstname + ' ' + lastname + ' city = ' + city
}
console.log(addUser('joeykranuey','tongtong','sandbox'))

console.log(addUser('joeykranuey','bangkok'))

const addDefaultUser = (firstname, lastname, city='bangkok') => {
    return firstname + ' ' + lastname + ' city = ' + city
}

console.log(addDefaultUser('joeykranuey','tongtong'))
