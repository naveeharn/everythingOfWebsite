let result

function sum(a, b) {
    return a + b
}
result = sum(250, 50)
console.log('sum', result)

const sum_arrow = (a, b) => {
    return a + b
}
result = sum_arrow(250, 50)
console.log('sum arrow', result)

const sum_short = (a, b) => a + b
result = sum_short(250, 50)
console.log('sum short', result)

const sum_one_parameter = a => a + 50
result = sum_one_parameter(250)
console.log('sum one parameter', result)



let user

function student(name) {
    user = {
        name: name,
        year: 2020
    }
    return user
}
user = student('mamacita')
console.log('student',user)

const student_arrow = name => ({
    name: name,
    year: 2020
})
user = student_arrow('mamacita')
console.log('student_arrow',user);
