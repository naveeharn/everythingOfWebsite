function infoUser(firstname, lastname, province) {
    console.log("Welcome " + firstname + " " + lastname + ", " + province)
}

function setSalary(salary) {
    let bonus = 2500
    return salary + bonus
}

function summation(x, y) {
    return x + y
}

function getName(name, city) {
    return name + " " + city
}

let a = setSalary(7000)
a -= 650
console.log("total salary of a : ", a)

let b = setSalary(16000)
console.log("total salary of b : ", b)

let result = summation(112, 44)
console.log("result : ", result)
console.log(getName("qwert",112))