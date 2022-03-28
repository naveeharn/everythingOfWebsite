let count = 0
const value = document.querySelector('#value')
const btns = document.querySelectorAll('.btn')

// btns.forEach(function (btn) {
//     btn.addEventListener('click', function (e) {
//         const styles = e.currentTarget.classList
//         if (styles.contains('decrease')) {
//             count--
//         }else if (styles.contains('increase')) {
//             count++
//         }else{
//             count = 0
//         }

//         if (count > 0) {
//             value.style.color = 'green'
//         }
//         if (count < 0) {
//             value.style.color = 'red'
//         }
//         if (count === 0) {
//             value.style.color = '#222'
//         }
//         value.textContent = count
//     })
// });

const btn_decrease = document.querySelector('.decrease')
const btn_reset = document.querySelector('.reset')
const btn_increase = document.querySelector('.increase')

btn_decrease.addEventListener('click', decrease)
function decrease() {
    count--
    value.innerHTML = count
    updateColor()
}
btn_reset.addEventListener('click', reset)
function reset() {
    count = 0
    value.innerHTML = 0
    updateColor()
}
btn_increase.addEventListener('click', increase)
function increase() {
    count++
    value.innerHTML = count
    updateColor()
}

function updateColor() {
    if (count > 0) {
        value.style.color = 'green'
    }
    if (count < 0) {
        value.style.color = 'red'
    }
    if (count === 0) {
        value.style.color = '#222'
    }
}