import shoppingCart from "./data.js";

/*
Use reduce() and only reduce() to calculate and return 
the total cost of only the savory
items in the shopping cart.

Expected output: 9.97  
*/

function totalSavory(arr){
    
    const sum = arr.reduce((acc, curr) => {
        if(curr.type === "savory"){
            return acc + curr.price
        }
        
        // must return acc when desired condition is not met
        return acc
    }, 0)
    
    return sum
}

console.log(totalSavory(shoppingCart));

