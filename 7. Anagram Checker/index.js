/* 

Anagrams are groups of words that can be spelled with the same letters. 
For example, the letters in "pea" can be rearrange to spell "ape", and 
the letters in "allergy" can be rearranged to spell "gallery."

Write a function to check if two strings of lowercase letters are anagrams. 
Return true if the word is an anagram. Return false if it isn't. 

Example input: "allergy", "gallery"
Example output: true

Example input: "rainbow", "crossbow"
Example output: false

*/ 

function isAnagram(str1, str2){
    //get array of all existing letters in both strings
    let str1Arr = str1.split("").sort()
    let str2Arr = str2.split("").sort()

    if (str1Arr.length != str2Arr.length) return "not anagram"
    
    console.log(str1Arr)
    console.log(str2Arr)
    
    for (let i = 0 ; i <= str1Arr.length ; i++){
        if(str1Arr[i] != str2Arr[i]){
            return "not anagram"
        }
        else {
            return "It's an anagram"
        }
    }
}

console.log(isAnagram("allergy", "gallery"));
console.log(isAnagram("treasure", "measure"));



