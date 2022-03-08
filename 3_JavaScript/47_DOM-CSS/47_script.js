const box = document.getElementById('box-1')

/* 
DOM CSS Add & Remove Class
    element.classList.add("class")      //add class style
    element.classList.remove("class")   //delete class style
    element.classList.toggle("class")   //swap class style
    element.classList.contain("class")  //status class style: true, flase
*/

function addDarkTheme() {
    box.classList.add('darkTheme')
}

function removeDarkTheme() {
    box.classList.remove('darkTheme')
}

let status

function switchTheme() {
    box.classList.toggle('darkTheme')
    status = box.classList.contains('darkTheme')
    console.log(status)
    if (box.classList.contains('darkTheme')) {
        box.style.color = 'orange'
    } else {
        box.style.color = 'black'
    }
}

