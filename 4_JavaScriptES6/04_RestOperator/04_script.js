
const addUser = (firstname, lastname, city) => {
    return firstname + ' ' + lastname + ' city : ' + city
}
console.log(addUser('Joey', 'Kranuey', 'SandBox'))


const addRestOperatorUser = (firstname, lastname, ...city) => {
    return firstname + ' ' + lastname + ' city : ' + city
}
console.log(addRestOperatorUser('Joey', 'Kranuey', 'bangkok', 'SandBox'))
console.log(addRestOperatorUser('Joey', 'Kranuey', 'bangkok', 'hatyai', 'SandBox'))


const addMessage = (first, ...message) => {
    return message.map(m => first + message)
}
console.log(addMessage('Hello','JSON','ES6'))

const addNumber=(...number)=>{
    return number.reduce((firstNumber,currentNumber)=>{
        console.log(firstNumber,currentNumber)
        return firstNumber+currentNumber
    })
}
console.log(addNumber(1,2,3,4,5,6))