import podcasts from "./data.js";

/* Night at the Scrimbies 

It's time for the Scrimbies, a prestigious award show for podcast hosts.
We need to assemble a list of podcast hosts so we can start handing out awards. 

Write a function that takes in the podcast data and
returns a flat array of podcast hosts. There are quite a few ways to approach
this, but try solving the problem using reduce(). 

Once you have a flat array of hosts, write a second function to randomly assign each host a prize
from the awards array. 

Example output: ["🏆 Alex Booker", "⭐ Bob Smith", "💎 Camilla Lambert" ...] 

*/ 
const awards = ["🏆", "⭐", "💎", "🥇", "👑"];

function getHosts(data){
   //returns a flat array of podcast hosts
   
   return data.reduce((acc, curr) => {
            //loop through nested hosts array and push data into accumulator array
            curr.hosts.map(host => acc.push(host))
            return acc
   }, [])
   
}

function assignAwards(data){
    //loop through the array
    return data.map(host => {
        //generate a random num representing the total index of awards
        const randomNum = Math.floor(Math.random()*awards.length) 
        //choose a random award from array
        let award = awards[randomNum]
        //output award with name
        return `${award} ${host}` 
    })
}


console.log(assignAwards(getHosts(podcasts)));
