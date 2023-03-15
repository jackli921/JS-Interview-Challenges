/* Whispering function 
Write a function `whisper` that takes in a sentence 
and returns a new sentence in 
1. all lowercase letters 
2. with "shh..." at the beginning. 
3. remove an exclamation pointat the end of the sentence, if there is one. 

Example 
input: "The KITTENS are SLEEPING!"
output: "shh... the kittens are sleeping"

Hint: endsWith and slice
*/

function whisper(input){
    
    const lowerCasedInput = "shh..." + input.toLowerCase()
    
    if(lowerCasedInput.endsWith("!")){
        return lowerCasedInput.slice(0, lowerCasedInput.length - 1)
    }
    else{
        return lowerCasedInput
    }
}

console.log(whisper("PLEASE STOP SHOUTING."));
console.log(whisper("MA'AM, this is a Wendy's!"));