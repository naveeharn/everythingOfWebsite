let scores = [91, 85, 77, 72, 68, 63, 59, 51, 49]

scores.forEach(score => {
    console.log(score)
    console.log("A ", score >= 80)
    console.log("B+", score >= 75 && score < 80)
    console.log("B ", score >= 70 && score < 75)
    console.log("C+", score >= 65 && score < 70)
    console.log("C ", score >= 60 && score < 65)
    console.log("D+", score >= 55 && score < 60)
    console.log("D ", score >= 50 && score < 55)
    console.log("E ", score < 50)
});