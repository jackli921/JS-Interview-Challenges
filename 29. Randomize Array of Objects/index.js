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

    return arr.filter(item => item.group.includes("fruit"))
    

}

function getRandomFruits(arr){
    
    //initialize a new arr to hold 9 random fruit
    let randomFruitArr = []
    for(let i = 0; i < 9 ; i++){
        
        let randomNum = Math.floor(Math.random()* 9)
        randomFruitArr.push(arr[randomNum])
    }
    return randomFruitArr

}

function render(arr){
    arr.forEach(item => {
        slotMachine.innerHTML += `
        <li>
        ${item.htmlCode}
        </li>
        `
    })
}

fetch(food)
    .then(res => res.json())
    .then(data => makeFruitArray(data))
    .then(fruits => getRandomFruits(fruits))
    .then(fruit => render(fruit))
    .catch(err => console.log(err))
// write your fetch request here 