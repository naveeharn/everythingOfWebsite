let scores = new Array(91, 87, 83, 79, 70, 67, 62, 58, 52, 47,-3,112)

scores.forEach(score => {
    if (score <= 100 && score >= 80) {
        console.log(score + " Grade A")
    } else if (score < 80 && score >= 75) {
        console.log(score + " Grade B+")
    } else if (score < 75 && score >= 70) {
        console.log(score + " Grade B")
    } else if (score < 70 && score >= 65) {
        console.log(score + " Grade C+")
    } else if (score < 65 && score >= 60) {
        console.log(score + " Grade C")
    } else if (score < 60 && score >= 55) {
        console.log(score + " Grade D+")
    } else if (score < 55 && score >= 50) {
        console.log(score + " Grade D")
    } else if (score < 50 && score >= 0) {
        console.log(score + " Grade F")
    } else {
        console.log(score + " Error : Please check this score.")
    }
});