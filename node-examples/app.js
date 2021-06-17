const rect = require('./rectangle')

function solveRect(l,w){
    console.log(`Solving for rectangle with length ${l} and width ${w}`)
    if(l <=0 || w<=0){
        console.log("Dimensions of rectangle must be greater than zero")
    }
    else{
        console.log(`Area of rectangle is ${rect.area(l,w)}`)
        console.log(`Perimeter of rectangle is ${rect.perimeter(l,w)}`)
    }
}

solveRect(3, 4)