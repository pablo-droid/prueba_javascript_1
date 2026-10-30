//1
function separateAndUppercase(name) {
    return name.split('').join(' ').toUpperCase();
}

//console.log(separateAndUppercase("Ana"));

//2
function getNameWordNumber(name) {
    return name.split(' ').length;
}

//console.log(getNameWordNumber("Antonio Alberto Jesus"));

//3
function getOccurrencesInPhrase(phrase, char) {
    let charArray = phrase.toUpperCase().split('');
    let charToCompare = char.toUpperCase();
    return charArray.reduce((accumulator, currentChar)=>{
        return charToCompare === currentChar ? accumulator += 1 : accumulator;
    }, 0);
}

//console.log(getOccurrencesInPhrase("A ver si encuentro un trabajito ya o que", "a"));