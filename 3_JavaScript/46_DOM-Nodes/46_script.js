/* 
DOM Nodes
    document.createElement(element)
    document.removeChild(element)
    document.appendChild(element)
    document.replaceChild(new,old)
*/

const textAll = document.querySelectorAll('p')

console.log(textAll)

textAll.forEach(text => {
    console.log(text, text.innerHTML, text.innerText)

})

let message = document.querySelectorAll('p').innerHTML

let menu = document.getElementById('menu')
let item = document.createElement('li')
let countItem = menu.childElementCount
item.innerText = "item-1"

// menu.appendChild(item)

function addListButton() {
    menu = document.getElementById('menu')
    item = document.createElement('li')
    countItem++
    item.id = 'item-' + countItem
    item.innerText = 'new Item ' + countItem
    menu.appendChild(item)

    // console.log(middleItemPosition, Math.floor(menu.childElementCount / 2) + (menu.childElementCount % 2))
}

function removeListButton() {
    menu = document.getElementById('menu')
    item = document.getElementById("item-" + menu.childElementCount)
    if (countItem > 0) {
        menu.removeChild(item)
        countItem--
    }
    // ()?:console.log('empty list');
    // console.log(menu.)
}

let middleItemPosition = Math.floor(menu.childElementCount / 2) + (menu.childElementCount % 2)
let beforeMidItem = document.getElementById("item-" + middleItemPosition)


function replaceListButton() {
    menu = document.getElementById('menu')
    // console.log(1,beforeMidItem.innerText)
    beforeMidItem.innerText = 'Item ' + middleItemPosition
    // console.log(2,beforeMidItem.innerText)

    middleItemPosition = Math.floor(menu.childElementCount / 2) + (menu.childElementCount % 2)
    beforeMidItem = document.getElementById("item-" + middleItemPosition)
    let afterMidItem = document.createElement('li')
    afterMidItem.id = "item-" + middleItemPosition
    // countItem++
    afterMidItem.innerText = 'item ' + middleItemPosition + ' is middle child of list'
    menu.replaceChild(afterMidItem, beforeMidItem)
    // console.log(beforeMidItem.innerText,afterMidItem.innerText)
}
