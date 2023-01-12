// let menu = {
//     drinks: [coffee, latte, HotChocolate, tea]
//     {
//         sizes: [small, medium, large];
//         milk: [none, cow, oat, almond]
//         isIced: true
//         withSugar:

//     }

//     }
// }
let sizeOption = ['large', 'small', 'medium']
let milk = ["none", "cow", "oat"]

let menu = {
    drinks:
        [{
            name: "espresso",
            price: 2.8,
            size: sizeOption,
            isIced: false,
            withSugar: true,
            milk: milk
        }, {
            name: "latte",
            price: 3.5,
            size: sizeOption,
            isIced: false,
            withSugar: true,
            milk: milk
        }, {
            name: "icedLatte",
            price: 3.5,
            size: sizeOption,
            isIced: true,
            withSugar: false
        }],
    food: [],
}

console.log(menu.drinks[1].price, menu.drinks[2].price)
console.log(menu.drinks[1].isIced)
let total = 0; // storage
// first time i = 0
for (let i = 0; i < menu.drinks.length; i++) {
    total += menu.drinks[i].price
}
console.log(total)

console.log(Object.keys(menu.drinks[0]))
console.table(Object.values(menu.drinks[0]))

for()