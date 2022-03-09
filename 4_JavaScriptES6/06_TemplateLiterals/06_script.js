
const firstname = 'Joey'
const lastname = 'Kranuey'
const city = 'SandBox'

const all = 'Firstname : ' + firstname + ' Lastname : ' + lastname + ' City : ' + city
console.log(all + '\n')

const allBackSlash = 'Firstname : ' + firstname + ' \
\nLastname : '+ lastname + ' \
\nCity : ' + city
console.log(allBackSlash + '\n')

const allLiterals = `Firstame : ${firstname} Lastname : ${lastname} City : ${city}`
console.log(allLiterals+'\n')

const allEnterLiteral = `Firstame : ${firstname} 
Lastname : ${lastname} 
City : ${city}`
console.log(allEnterLiteral+'\n')