function capitalize(string) {
    let lowercase = string.toLowerCase();
    let capitalize = lowercase.charAt(0).toUpperCase() + lowercase.slice(1);
    return capitalize;
}

module.exports = capitalize;