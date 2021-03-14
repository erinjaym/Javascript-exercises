
const palindromes = function(words) {
    
// Easy route is .split .join and .reverse and .replace

    //Setup filter for to grab only necessary information
    let filter = /\w/g;
    const wordsFilter = words.match(filter);  
    let wordsFiltered = "";

    //reconstruct into a string with only necessary information
    for (x = 0; x < wordsFilter.length; x++){
        wordsFiltered += wordsFilter[x]; 

    }

    // reverse the word or words after being filtered and test if palindrome
    let wordReverse = ""; 
    for (x = wordsFilter.length -1; x >= 0; x--)
        {
        wordReverse += wordsFilter[x]; 
        }
        return wordReverse.toLowerCase() === wordsFiltered.toLowerCase();
}
module.exports = palindromes
