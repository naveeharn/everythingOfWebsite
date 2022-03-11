
var user = {
    name: 'Joeykranuey',
    age: 20,
    SayHi: function () {
        return "Hello " + this.name
    }
}
console.log(user.SayHi())



function UserFunction(name, age) {
    this.name = name
    this.age = age
}
UserFunction.prototype.SayHi = function () {
    console.log('Hello ' + this.name + " " + this.age)
}
var user_function = new UserFunction('JoeyKranuey', 20)
user_function.SayHi()



class UserClass {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    SayHi(){
        console.log('Hello ' + this.name + " " + this.age)
    }
}
let user_class = new UserClass('Joeykranuey',20)
user_class.SayHi()