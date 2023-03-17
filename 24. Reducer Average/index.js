import postData from "./data.js";

/* Popularity Contest 

Iggy the Influencer and Toby the Tiktoker are dying to know
who's more popular on social media. 

Toby's TikToks get an average of 400 likes. On average, how many
likes do Iggy's Instagram posts get? 

In data.js you'll find a list of Iggy's recent posts. 
Use reduce() to write a function that returns the average number of likes.
To find the average, add up the total number of likes, then divide
by the total number of posts.
*/

function calcAverageLikes(data){
    
    //calculate the total num of likes in the array
    const totalLikes = data.reduce((acc, curr) => {
           return acc + curr.likes
            
    }, 0)
    //divide total likes by the length of array to find the average # of likes 
    const avgLikes = totalLikes / data.length
    return avgLikes.toFixed(0)
} 


console.log(calcAverageLikes(postData))
