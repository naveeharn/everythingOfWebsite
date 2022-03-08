function welcome() {
    alert('Welcome to the Website')
}

function highlight(obj) {
    obj.style.background = 'yellow'
}

function unhighlight(obj) {
    obj.style.background = 'lightsalmon'
}

function getMenu() {
    const menu = document.getElementById('menu')
    const display = document.getElementById('display') 
    console.log(menu.value,menu.value.toUpperCase())
    display.innerText = menu.value.toUpperCase()
}

function onMouseOver(obj) {
    obj.style.background = 'lightpink'
}

function onMouseOut(obj) {
    obj.style.background = 'white'
}