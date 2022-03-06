let a = 44

function display() {
    let b =112
    console.log("local variable b in function: ",b)
    console.log("global variable a out function: ", a)
}

console.log("global variable a out function: ", a)
display()
// console.log("local variable b in function: ",b)