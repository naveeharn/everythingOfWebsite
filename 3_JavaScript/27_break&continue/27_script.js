
for (let index = 0; index <= 10; index++) {
    if (index == 7){
        break
    }
    console.log(index)
}

console.log("= = = = = = = = = = = = =")

for (let index = 0; index <= 10; index++) {
    if (index % 3 == 0){
        continue
    }
    console.log(index)
}