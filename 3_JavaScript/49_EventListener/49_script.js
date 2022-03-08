
let x = 11+2+"Sand"+"Box"+11+2+"Sand"+"Box"
console.log(x)

// refer element
const menu = document.getElementById('menu')
const display = document.getElementById('display')
const btn = document.getElementById('btn')

// event
menu.addEventListener('change',getMenu)
btn.addEventListener('click',showMessage)

// create function
function getMenu() {
    console.log(menu.value)
    display.innerText = menu.value.toUpperCase()
}

function showMessage() {
    alert('Welcome to the Website')
}
