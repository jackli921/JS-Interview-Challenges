/* Pizza Night? 
It's the weekend and you and your friends can't agree on 
what to order for dinner, so you put it to a vote. 

Write a function to find the food with the highest number of votes. 

Your function should take in a food object and find the food
with the most votes. It should log the winner, along with 
how many votes it received.  

Example input: {"🐈 cats": 19, "🐕 dogs": 17} 
Example output: The winner is 🐈 cats with 19 votes!
*/ 

const gameNightFood = {
    "🍕 pizza": 3, 
    "🌮 tacos": 10, 
    "🥗 salads": 7,
    "🍝 pasta": 5
}

function findTheWinner(obj){
    let maxValue = 0
    let maxValueKey = ""
    //use for...in loop to iterate through the keys of an object
    for (let key in gameNightFood){
        //if the value is greater than the initial value of 0, update max value & max value key
        if(gameNightFood[key] > maxValue){
            maxValue = gameNightFood[key]
            maxValueKey = key
        }
    }
    
    return "the winner is " + maxValueKey + " with " + gameNightFood[maxValueKey] + " votes"
    //convert object to array
    //loop through the array
    //compare values and keep track of highest value
    //log out highest value  

    
}

console.log(findTheWinner(gameNightFood));