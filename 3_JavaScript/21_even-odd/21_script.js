let numbers = [12, 9, 13, 91, 32, 65, 87, 11, 109]

numbers.forEach(number => {
    if (number % 2 == 0) {
        console.log(number + " EVEN")
    } else {
        console.log(number + " ODD")
    }
})