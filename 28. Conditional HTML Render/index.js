/*
   Oh no, our emoji flower bed is infested with mammals, trees and leaves!
   Without changing the API url, write a function to transform your 
   data before it's displayed. The function should eliminate
   everything but bugs and flowers. Use your function in the API call.  
   
   Hint: Be sure to console the data to see what properties can help you do this!
*/ 

const api = 'https://apis.scrimba.com/emojihub/api/all/category/animals-and-nature';
const flowerBed = document.querySelector('.emoji-flower-bed');

function clearTheGarden(arr){
    
}


fetch(api) 
    .then(response => response.json())
    .then((data) => {
        data.forEach(emoji => {
            //print data to identify what separates the groups
            console.log(emoji.group)
            //if the item is within a valid category, add to innerHTML
            if(emoji.group === "plant other" || emoji.group === "plant flower" || emoji.group === "animal bug"){
                flowerBed.innerHTML += `<li>${emoji.htmlCode}</li>`;                
            }

        });    
    })
    .catch(err => console.log(err));



