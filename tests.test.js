const capitalize = require('./capitalize.js');
const reverse = require('./reverse.js');
const calculator = require('./calculator.js');
const calculatorFunction = new calculator('1', 2);

test('Capitalize first letter', () => {
  expect(capitalize('asd')).toMatch(/Asd/);
});


test('Reverse string', () => {
  expect(reverse('vinson')).toMatch(/nosniv/);
})

test('Add two numbers', () => {
  expect(calculatorFunction.add('1', 2)).toBe(3)
})

test('Subtract two numbers', () => {
  expect(calculatorFunction.subtract('1', 2)).toBe(-1)
})

test('Multiply two numbers', () => {
  expect(calculatorFunction.multiply('1', 2)).toBe(2)
})

test('Divide two numbers', () => {
  expect(calculatorFunction.divide('1', 2)).toBe(0.5)
})