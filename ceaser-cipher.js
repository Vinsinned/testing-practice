function encrypt(string) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let splitAlphabet = alphabet.split('');
    //will be shown with %
    let lowercaseString = string.toLowerCase();
    let encryptedWord = [];
    let i;
    for (i = 0; i < string.length; i++) {
        if (string[i].match(".*[a-zA-Z].*")) {
            //%
            let currentLetter = splitAlphabet.indexOf(lowercaseString[i]);
            let newLetter = currentLetter + 1;
            if (newLetter > 25) {
                newLetter = 0;
            }
            //check if string contains any uppercase
            if (string[i] == splitAlphabet[currentLetter].toUpperCase()) {
                let getNewLetter = splitAlphabet[newLetter];
                let capitalize = getNewLetter.toUpperCase();
                encryptedWord.push(capitalize);
            } else {
                let getNewLetter = splitAlphabet[newLetter];
                encryptedWord.push(getNewLetter);
            }
        } else {
            //Even pushes spaces!
            encryptedWord.push(string[i])
        }
    }
    let joined = encryptedWord.join('');
    console.log(joined)
    return joined;
}

module.exports = encrypt;