let balance = 5000
let withdrow = 5100

if (withdrow <= balance) {
    console.log("Please wait")
    balance -= withdrow
    console.log("withdraw complete : " + withdrow)
    console.log("balance of your account : " + balance)
} else {
    console.log("withdraw is more than balance : Please Try Again")
}