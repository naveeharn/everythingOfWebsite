
let firstname = 'Joey'
let lastname = 'Kranuey'

let user = {
    firstname: firstname,
    lastname: lastname,
}
console.log(user)

let userShorthand = {
    firstname,
    lastname,
}
console.log(userShorthand)


function userInfo(fname,lname,age) {
    return {
        fname:fname,
        lname:lname,
        age:age,
    }
}
console.log(userInfo('Joey','Kranuey',20))

function userInfoShorthad(fname,lname,age) {
    return {
        fname,
        lname,
        age,
    }
}
console.log(userInfoShorthad('Joey','Kranuey',20))
