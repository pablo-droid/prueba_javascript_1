//1
// convert name to an array of single characters
// introduce spaces
// convert it back to a string
// uppercase the string and retun
function separateAndUppercase(name) {
    return name.split('').join(' ').toUpperCase();
}

//console.log(separateAndUppercase("Ana"));

//2
// convert name to an array of words (words are separated by spaces)
// return the length of the array
function getNameWordNumber(name) {
    return name.split(' ').length;
}

//console.log(getNameWordNumber("Antonio Alberto Jesus"));

//3
// uppercase the phrase
// uppercase the char to compare (we work with uppercase only so that both lowercase and uppercase occurrences are counted)
// convert the phrase to an array of characters
// iterate the array of characters and accumulate when the char equals the current array item
function getOccurrencesInPhrase(phrase, char) {
    let charArray = phrase.toUpperCase().split('');
    let charToCompare = char.toUpperCase();
    return charArray.reduce((accumulator, currentChar)=>{
        return charToCompare === currentChar ? accumulator += 1 : accumulator;
    }, 0);
}

//console.log(getOccurrencesInPhrase("A ver si encuentro un trabajito ya o que", "a"));