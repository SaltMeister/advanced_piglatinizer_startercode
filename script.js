// quick fix for Cloud9 warning:
/* global $ */

// Pig Latin takes the first consonant (or consonant cluster) of an English 
// word, moves it to the end of the word and suffixes an "ay", or if a word
// begins with a vowel you just add "yay" to the end. For example, pig becomes
// igpay, banana becomes ananabay, and aadvark becomes aadvarkway.

$(document).ready(function() {

    // This function should return true if the input word starts with a vowel,
    // otherwise it should return false.
    function wordStartsWithVowel(word) {
        //checks for vowel
        if (word.charAt(0) === "a" || word.charAt(0) === "e" || word.charAt(0) === "i" ||
            word.charAt(0) === "o" || word.charAt(0) === "u" ) {
                return(true);
            } else {
                return(false);
            }
    }

    // Appends "yay" to the end of the word and returns the word.
    function appendYayToWord(word) {
        if(wordStartsWithVowel(word) === true) {
              //changes the result html with the result
              return word + "yay";
        } else {
            //nothing
        }
    }

    // Moves the first consonant to the end of the word, appends "ay" to the end of the word,
    // and returns the word.
    function convertWordWithConsonant(word) {
                if(wordStartsWithVowel(word) === false) {
                    //takes the first letter away and puts it at the end of the word and adds ay after it
                    return word.substring(1) + word.charAt(0) + "ay";
                } else {
                    //nothing
                }
    }
    //Function that pig lataninizes a sentence
    function convertSentenceToPigLatin(word) {
        var array = word.split(" ");
      
        for(var i = 0; i < array.length; i = i + 1) {
            convertWordToPigLatin(array[i]);
        return (convertWordToPigLatin(array[i]));
        }
    }
    // If the word starts with a vowel, return the result of appendYayToWord.
    // Otherwise, return the result of convertWordWithConsonant.
    function convertWordToPigLatin(word) {
                if(wordStartsWithVowel(word) === true){
                    return appendYayToWord(word);
                } else {
                    return convertWordWithConsonant(word);
                }
    }
    $("button").click(function() {
        var input = $("input").val();
        var testResult = convertSentenceToPigLatin(input);
        console.log(testResult);
    });
    // Create a click handler that takes is triggered when the user clicks the translate button.
        // Gets a word from the input box
        // Transforms the word to pig latin
        // Displays the result on the screen in the output element
});
