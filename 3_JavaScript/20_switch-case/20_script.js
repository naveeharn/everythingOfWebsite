let months = [3, 1, 7, 13, 11, 0, -2]

months.forEach(month => {
    let monthName
    switch (month) {
        case 1:
            monthName = "JAN"
            break;
        case 2:
            monthName = "FEB"
            break;
        case 3:
            monthName = "MAR"
            break;
        case 4:
            monthName = "APL"
            break;
        case 5:
            monthName = "MAY"
            break;
        case 6:
            monthName = "JUN"
            break;
        case 7:
            monthName = "JUL"
            break;
        case 8:
            monthName = "AUG"
            break;
        case 9:
            monthName = "SEP"
            break;
        case 10:
            monthName = "OCT"
            break;
        case 11:
            monthName = "NOV"
            break;
        case 12:
            monthName = "DEC"
            break;
        default:
            break;
    }

    console.log((month <= 12 && month >= 1) ? month + " " + monthName : month + " Error")

})