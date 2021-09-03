function capitalize(string) {
    let lowercase = string.toLowerCase();
    let capitalize = lowercase.charAt(0).toUpperCase() + lowercase.slice(1);
    return capitalize;
}

function reverseString(string) {
    let split = string.split(' ');
    let reverse = null;
    let i;
    for (i = 0; i < split.length; i++) {
        reverse.unshift(split[i]);
    }
    return reverse;
}


module.exports = reverseString;
module.exports = capitalize;