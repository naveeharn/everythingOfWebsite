function infoUser(firstname, lastname, province) {
    console.log("Welcome " , firstname , " " , lastname , ", " , province)
}

infoUser("qwert","asdfg","walking-street")
infoUser("qwert","asdfg")
infoUser("asdfg","walking-street")

function infoUserDeclared(firstname, lastname, province="Bangkok") {
    console.log("Welcome " , firstname , " " , lastname , ", " , province)
}

infoUserDeclared("qwert","asdfg","walking-street")
infoUserDeclared("qwert","asdfg")
infoUserDeclared("asdfg","walking-street")