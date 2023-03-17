import mediaData from "./data.js";

/* Find All Unique Tags 

As a software dev at ScrimFlix, you're working on a feature 
to let users browse TV shows by tag. The first step is to collect all 
the tags from our data into a new array. Then we'll need 
to filter out the duplicate tags. 

Write a function that takes in the media data and returns
a flat array of unique tags.

Expected output: 
["supernatural", "horror", "drama",
"fantasy", "reality", "home improvement", "comedy", "sci-fi", "adventure"]
*/ 

function getUniqueTags(data){
    
    //initialize variable to store genre
    let genreList = []
    //loop through arr and collect all genres
    data.forEach(({tags}) => genreList.push(tags))
    
    //flatten the array
    genreList = genreList.flat()
    
    //initialize new array to store unique tags
    const uniqueTagArr = [] 
    
    //loop through array to perform comparison to identify if a tag already exists in the arr
    genreList.forEach(tag => {
        if(!uniqueTagArr.includes(tag)){
            uniqueTagArr.push(tag)
        }
        
    })
    console.log(uniqueTagArr)
}

getUniqueTags(mediaData);

