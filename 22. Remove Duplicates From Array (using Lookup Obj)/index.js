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
    const tags = data.map(podcast => podcast.tags).flat();
    
    //initialize an empty lookup object  
    const uniqueTags = {}
    
    //filter tags that don't yet exist in the lookup obj
    return tags.filter(tag => {
        //if the current tag doesn't exist in the lookup obj
        if(!uniqueTags[tag]){
            //add the tag to the obj and assign a value of true 
            uniqueTags[tag] = true
            //return this tag as an unique value to the filter function
            return true
        }
        //return false if the tag exists and exclude from filtered array
        return false
    })
}

console.log(getUniqueTags(mediaData));

