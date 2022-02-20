let scores = Array(22, 31, 54, 44, 69, 82, 91, 43, 25, 50, 71)

scores.forEach(score => {
    console.log(score + ((score >= 50) ? " Pass." : " Fail."))
});