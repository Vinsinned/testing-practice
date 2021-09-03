const capitalize = require('./tests');

test('Capitalize first letter', () => {
  expect(capitalize('asd')).toMatch(/Asd/);
});
