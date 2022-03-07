const title = document.getElementById('title')
const content = document.querySelector(".content")
const allPTag = document.querySelectorAll("p")

const box = document.querySelector('.light')

function displayText() {
    title.style.color = 'red'
    title.style.backgroundColor = 'orange'
    title.style.fontSize = '48px'

    content.setAttribute('class', 'kuay')
    box.setAttribute('class','dark')
}

