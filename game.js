window.onload = function() {
    const translateButton = document.getElementById("translateButton");
    translateButton.addEventListener("click", translateToPigLatin);
};

function translateToPigLatin() {
    const inputText = document.getElementById("inputText").value;
    const resultElement = document.getElementById("result");

    if (!inputText) {
        resultElement.textContent = "Please enter a phrase.";
        return;
    }

    const words = inputText.split(" ");
    const pigLatinWords = words.map(word => convertToPigLatin(word));
    const pigLatinText = pigLatinWords.join(" ");
    
    resultElement.textContent = pigLatinText;
}

function convertToPigLatin(word) {
    const firstLetter = word.charAt(0);
    const firstTwoLetters = word.slice(0, 2).toLowerCase();
    
    if ("aeiou".includes(firstLetter.toLowerCase())) {
        return word + "way"; 
    } else if ("bcdfghjklmnpqrstvwxyz".includes(firstLetter.toLowerCase())) {
        if ("bcdfghjklmnpqrstvwxyz".includes(firstTwoLetters)) {
            return word.slice(2) + firstTwoLetters + "ay";
        }
        return word.slice(1) + firstLetter + "ay";
    }
    return word; 
}