function analyze(array) {
    this.average = () => {
        let sum = 0;
        let numbers = 0;
        for (const number of array) {
            let integer = number;
            sum += integer;
            numbers += 1;
        }
        let average = sum / numbers;
        return average;
    }
    this.min = () => {
        let smallestNumber = array[0];
        for (const numbers of array) {
            if (numbers < smallestNumber) {
                smallestNumber = numbers;
            }
        }
        return smallestNumber;
    }
    this.max = () => {
        let biggestNumber = array[0];
        for (const number of array) {
            if (number > biggestNumber) {
                biggestNumber = number;
            }
        }
        return biggestNumber;
    }
    this.length = () => {
        let length = 0;
        for (const i in array) {
            length += 1;
        }
        console.log(length);
        return length;
    }
}

module.exports = analyze;