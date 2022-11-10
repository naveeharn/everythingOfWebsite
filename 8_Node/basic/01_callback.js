
function calculate(x, y) {
    return x + y
}

function display(result) {
    console.log(`sum = ${result}`);
}

let s = calculate(1, 2)
display(s)

console.log("- - - - - - - - - - -");

function calculate_delay(x, y, callback) {
    console.log('Calculating...');
    setTimeout(() => {
        const sum = x + y
        callback(sum)
    }, 1500);
}

// calculate_delay(1, 3, display)

calculate_delay(1, 4, function(response) {
    console.log(`sum = ${response}`);
})

console.log("- - - - - - - - - - -");

