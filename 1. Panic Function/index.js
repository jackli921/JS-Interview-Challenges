/* Panic function 
Write a PANIC! function. The function should 
1. take in a sentence
2. return the samesentence in all caps with an exclamation point (!) at the end. Use JavaScript's
built in string methods. 

If the string is a phrase or sentence, add a 😱 emoji in between each word. 

Example input: "Hello"
Example output: "HELLO!"

Example input: "I'm almost out of coffee"
Example output: "I'M 😱 ALMOST 😱 OUT 😱 OF 😱 COFFEE!"

.split() .join()
*/

function panic(input){
    const uppercasedInput = input.toUpperCase() + "!"
    const outputWithEmoji = uppercasedInput.split(" ").join(" 😱 ")
    console.log(outputWithEmoji)
}

// Test your function
panic("I'm almost out of coffee") 
panic("winter is coming")

