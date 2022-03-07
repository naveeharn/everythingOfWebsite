let pTag = document.getElementsByTagName("p")
console.log(pTag)
console.log(pTag.length)
console.log(pTag.namedItem)

let item_1 = document.getElementById("item_1")

// console.log(item_1)

item_1.innerText = "learn basic javascript"

let myJSClass = document.querySelectorAll('.myJS')
console.log(myJSClass)

let myID = document.querySelector('#item_2')
console.log(myID)

let isHide = true

function displayText() {
    isHide = !isHide
    if (isHide) {
        let button_1 = document.getElementById("button_1")
        let item_2 = document.getElementById("item_2")
        button_1.innerText = "hide data"
        item_2.innerText = "Chalongkrung Lardkrabung Bangkok"
        item_3.innerHTML = "<h2>h2 tag by innerHTML</h2>"
    }else{
        let button_1 = document.getElementById("button_1")
        let item_2 = document.getElementById("item_2")
        button_1.innerText = "show data"
        item_2.innerText = ""
        item_3.innerHTML = ""
    }

}

let number_click = 0
let number_decrease = 10

function pushNumber() {
    let number = document.getElementById("pushButton")
    number_click++
    number.innerText = "clicked : " + number_click
    number_decrease--
    let item_4 = document.getElementById("item_4")
    item_4.innerText = `status : ${number_decrease}`
}
