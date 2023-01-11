let menu = {
    expresso: 2.8,
    Latte: 3.2,
    Capuchinno: 3.5,
    Americano: 3.2,
    HotChocolate: 3.5
}

let prices = Object.values(menu);

let total = 0;

console.log('The menu contains the following drinks: ', Object.keys(menu));

// objectname[key]
for(let key in menu){
    //console.log(menu[key]);
    total = total + menu[key]
}

// We loop through the values and add them to the total
// for (let i = 0; i < prices.length; i++) {
//     total += prices[i];

console.log('The total amount of all the drinks on the menu is: $' + total);