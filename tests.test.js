const capitalize = require('./capitalize.js');
const reverse = require('./reverse.js');
const calculator = require('./calculator.js');
const calculatorFunction = new calculator('1', 2);
const cipher = require('./ceaser-cipher.js');
const analyze = require('./array-analysis.js');
const analyzeFunction = new analyze([5, -12, 26, 2, 13])

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

test('Caesar cipher test wrapping from z to a', () => {
  expect(cipher('z')).toMatch(/a/);
})

test('Caesar cipher to keep the same case', () => {
  expect(cipher('VinsoN')).toMatch(/WjotpO/);
})

test('Caesar cipher check for punctuation and pushes immediately', () => {
  expect(cipher('VH\'Hehe')).toMatch(/WI'Ifif/);
})

test('Caesar cipher a random word', () => {
  expect(cipher('aasdz')).toMatch(/bbtea/);
  expect(cipher('VH\'Hehe!!')).toMatch(/WI'Ifif!!/);
})

test('Check average of an array', () => {
  expect(analyzeFunction.average()).toBe(6.8);
})

test('Check the smallest number of an array', () => {
  expect(analyzeFunction.min()).toBe(-12);
})

test('Check the largest number of an array', () => {
  expect(analyzeFunction.max()).toBe(26);
})

test('Check the length of an array', () => {
  expect(analyzeFunction.length()).toBe(5);
})