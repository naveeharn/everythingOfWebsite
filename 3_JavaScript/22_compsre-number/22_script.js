let list_1 = [12, 78, 9, 58, 12], list_2 = [12, 70, 14, 58, 19]

for (let index = 0; index < list_1.length; index++) {
    console.log((index + 1) + ((list_1[index] == list_2[index]) ? " are same number" : " are not same number"))
}