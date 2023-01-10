let customerOrder = {
    name: "Hot Chocolate",
    sugars: 3,
    isReady: true
};

// dot notation
// console.log(customerOrder["name"]["sugars"])

// bracket notation
//console.log(customerOrder.name, customerOrder.sugars")

console.log(customerOrder)

// if(customerOrder.isReady) {
//     console.log("Ready for pick up: " + customerOrder.name + "with" + customerOrder.sugars + "spoons of sugar.")
// }

// else{
//     console.log("Still in order queue: " + customerOrder[name] + "with" + customerOrder[sugars] + "spoons of sugar.")
// }

if (customerOrder.isReady) {
    console.log(`Ready for pick up: ${customerOrder.name} with ${customerOrder.sugars} spoons of sugar.`)
}

else {
    console.log(`Still in order queue: ${customerOrder.name} with ${customerOrder.sugars} spoons of sugar.`)
}

