// Write Your Code Below
// Create three functions

//TODO function that adds 1 and 2 together using Function Declaration.

function addOneAndTwo(){
    console.log(1+2);
    return
}

//TODO function that subtracs 10 from 20 using Function Expression.

let subtracTenFromTwenty = function(){
    console.log(20-10);
    return
}

//TODO A function that calculates the area of a square using an outside variable.

let sideSquare = 25

let areaOfSquare = function(){
    let area = sideSquare * sideSquare
    console.log('area: ', area)
    return
}


addOneAndTwo()
subtracTenFromTwenty()
areaOfSquare()

//TWO WAYS TO CREATE A FUNCTION
// Function Declaration
function func(one, two){

}

//Funntion Expression
let funcTwo = function(one, two){

}