let ages = [17, 14, 18, 15, 16, 13]

ages.forEach(age => {
    if (age <= 15) {
        console.log("Ordinary")
        if (age == 15) {
            console.log(age +" Grade 9")
        } else if (age == 14) {
            console.log(age +" Grade 8")
        } else if (age == 13) {
            console.log(age +" Grade 7")
        } else {
            consol.log("Grade 1 - 6")
        }
    } else {
        console.log("Secondary")
        if (age == 18) {
            console.log(age +" Grade 12")
        } else if (age == 17) {
            console.log(age +" Grade 11")
        } else if (age == 16) {
            console.log(age +" Grade 10")
        } else{
            consol.log("University")
        }
    }
});
