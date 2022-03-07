let user = {
    // key : value
    name: "kuy",
    age: 112,
    email: "kuy@kuy.kuy",
    getUser: function () {
        return this.name + " " + this.email
    }
}
console.log(user)
console.log(user.name, user.age, user.email)
console.log(user["name"], user["age"], user["email"])

let product = {
    // key : value,
    name: "mouse RGB",
    price: 150,
    color: "black",
    category: "computer",
    size: "M",
    displayProduct: function () {
        return "cargo name: " + this.name + "\nprice: " + this.price + "\ncolor: " + this.color + "\ncategory: " + this.category + "\nsize: " + this.size
    },
    discountProduct:function(){
        return this.price * 0.9
    },
}

console.log(product.name, product.price * 1.07)

// document.write(user.name)

console.log(user.getUser())

console.log(product.displayProduct())

console.log(product.discountProduct())

document.write(product.displayProduct())

console.log(price.discountProduct())