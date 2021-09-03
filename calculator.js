function calculator(num1, num2) {
    let number1 = parseInt(num1);
    let number2 = parseInt(num2)
    this.add = () => {
        return (number1 + number2);
    }
    this.subtract = () => {
        return (number1 - number2);
    }
    this.multiply = () => {
        return (number1 * number2);
    }
    this.divide = () => {
        return (number1 / number2);
    }
}

module.exports = calculator;
