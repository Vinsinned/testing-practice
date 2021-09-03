function reverseString(string) {
    let split = string.split('');
    let reverse = [];
    let i;
    for (i = 0; i < split.length; i++) {
        reverse.unshift(split[i]);
    }
    let finishedProduct = reverse.join('');
    return finishedProduct;
}
reverseString('test')

module.exports = reverseString;
