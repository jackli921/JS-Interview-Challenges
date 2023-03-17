import podcasts from "./data.js";

/* 🌴 Save the Weekend 🌴

Your best friend is a copywriter who writes product descriptions 
for a living. You want to use your hacking skills to help them 
automate their job so you both can spend the weekend on a 
tropical island. 

Use array methods and the existing podcast data to write a function that
can generate a description for each podcast. 

Add the description as a new property on each podcast object, and return
a new podcast array where each podcast has a description. 

Each description should look like this: 
[
    {
        id: 1,
        title: "Scrimba Podcast", 
        ...
        description: "Scrimba Podcast is a 50 minute education podcast hosted 
        by Alex Booker."
    }
    ...
]

If the podcast has more than one host, you can display only the first host.

Stretch goal: Display all three podcassts.hosts in the description, seperated with commas: 

Example description: "Coding Corner is a 55 minute education podcast hosted by Treasure Porth, Guil Hernandez, and Tom Chant."
*/ 

function createDescriptionsFor(data){
    //modify existing array and return a new array with new description property
    
    return data.map(podcast => {

        
        let hostlist = ""
        if(podcast.hosts.length === 1){
            hostlist = podcast.hosts[0]
        }
        else if(podcast.hosts.length === 2){
            hostlist = podcast.hosts.join(' and ')
        }
        else{
            hostlist = podcast.hosts.slice(0, -1).join(', ') + `, and ` + podcast.hosts.slice(-1)
        }
           
        return {
            ...podcast,
            description: `${podcast.title} is a ${podcast.genre} ${podcast.duration} podcast hosted by ${hostlist}`
        }
    })
    

}

console.log(createDescriptionsFor(podcasts))
