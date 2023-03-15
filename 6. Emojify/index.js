/*  Emojify!

Popular services like Slack and Github allow for emoji shortscodes, meaning 
they will detect when a word in a sentence begins and ends with a colon (:)
and automatically replace that word with an emoji. 

These shortcodes allow users to add an emoji to their messages by typing a 
code rather than searching for an emoji from a list. 

For example, typing :smile: will replace that text with 😊 

*/

const emojis = {
    "smile": "😊",
    "angry": "😠",
    "party": "🎉",
    "heart": "💜",
    "cat":   "🐱",
    "dog":   "🐕",
    "flower": "🌹"
}

/* 1. Write a function that checks if a lowercase word starts and 
ends with a colon. If it does, remove the colons and
look up the word in the emoji object. If the word is in the 
emojis object, return the corresponding emoji.
If it isn't, return the original word.

Example input: ":party:"
Example output: 🎉

Example input: ":flower:"
Example output: "flower"

Example input: "elephant"
Example output: "elephant"
*/ 

function emojifyWord(word){    
    if(word.startsWith(":") && word.endsWith(":")){
        let newWord = word.slice(1, word.length - 1)
        return emojis[newWord] ? emojis[newWord] : newWord 
    }
    else if(word.startsWith(":") && !word.endsWith(":")){
        return emojis[word.slice(1)]
    }
    else if (word.endsWith(":")){
        let newWord = word.slice(0, word.length - 1)
        return emojis[newWord] ? emojis[newWord] : newWord
    }
    return word
}

/* 2. Write a function to find any emoji shortcodes in a phrase.
Your function should 
1. map over each word in the phrase
2. emojify any word that begins and ends with a colon
3. return the emojified phrase
 

Example input: "I :heart: my :cat:"
Example output: "I 💜 my 🐱"

Example input: "I :heart: my elephant"
Example output: "I 💜 my elephant"
*/ 

function emojifyPhrase(phrase){
    const phraseArr = phrase.split(" ")
    
    const emojifiedArr = phraseArr.map(item => emojifyWord(item)) 
    
    const emojifiedPhrase = emojifiedArr.join(" ")
    
    return emojifiedPhrase
}

// console.log(emojifyWord(":heart:"));
// console.log(emojifyWord("flower:"));
// console.log(emojifyWord("elephant"));

console.log(emojifyPhrase("I :heart: my :cat:"));
console.log(emojifyPhrase("I :heart: my :elephant:"));
