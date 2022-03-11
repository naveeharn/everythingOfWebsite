
class Admin {
    constructor(){
        console.log('Call Constructor');
    }
    isPermission(){
        console.log('Read and Write data from Database.')
    }

}

class User extends Admin{
    constructor(name, age) {
        super()
        this.name = name
        this.age = age
    }
    SayHi(){
        console.log('Hello ' + this.name + " " + this.age)
    }
}
let user_1 = new User('Joeykranuey',20)
user_1.SayHi()
user_1.isPermission()
