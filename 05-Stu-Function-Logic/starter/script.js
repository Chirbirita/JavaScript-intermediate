// Write Your Code Below
//TODO Function declaration that checks if two parameters are equal in value and type, just value, or not queal in any way and prints it to the console.

// let x {
//     type: silver
//     value: 100
// }

// let y {
//     type: gold
//     value: 100
// }

// function compare (x, y){
//     console.log ()
// }

// var x = 10;
// var y = 10;

//Wrap if in a function

function isEqual(x,y){
    if (x === y) {
        console.log(`They are equal in type and value`)
    } else if (x == y) {
        console.log(`They are equal in value `)
    } else {
        console.log(`They are not equal at all`)
    }
}

isEqual(10, 10);
isEqual(10, "10");
isEqual(10, true);



//TODO Function expression that iterates through an array and checks if each index is less than 10 and prints if it is or isn't.

let numbers = [1, 2, 4, 5, 11, 16, 19]

let lessThanTen = function (arr) {
    for (let i = 0; i < arr.length; i++){
        if (numbers[i] < 10) {
            console.log(`${arr[1]} is less than 10`)
        } else {
            console.log(`${arr[i]} is NOT less than 10`)
        }
    }
}

lessThanTen([1,2,3])
lessThanTen(numbers)
lessThanTen(1,2,3,4,5,6,7,8,9)

