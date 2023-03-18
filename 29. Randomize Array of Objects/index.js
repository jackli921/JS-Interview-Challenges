/*
   Let's create an emoji slot machine! Replace the hardcoded 
   data with random fruit emojis from an emojis API. 
   
   - Request emoji food data from the API resource below. Log it and look at it!
        - Write a function that takes in the data and returns a new array of only
        fruit emoji objects
        - Write a function to get 9 random fruits from your new array of fruit 
        
   - Load nine random fruits into the slot machine
*/ 

const slotMachine = document.querySelector('.emoji-slots-game'); 
const food = 'https://apis.scrimba.com/emojihub/api/all/category/food-and-drink';

function makeFruitArray(arr){
    // arr.forEach(item => console.log(`${item.name} ${item.category} ${item.group}`))
    const fruitArr = arr.filter(item => {
        if(item.group === "food fruit"){
            return item.htmlCode
        }
    })
    
    getRandomFruits(fruitArr)

}

function getRandomFruits(arr){
    
    arr.sort(()=> Math.random() - 0.5 )
    let randomFruitHTML = arr.map(item => {
        return `
            <li>${item.htmlCode}</li>
        `
    }).join("")
    
    slotMachine.innerHTML = randomFruitHTML
}

fetch(food)
    .then(res => res.json())
    .then(data => makeFruitArray(data))
// write your fetch request here 