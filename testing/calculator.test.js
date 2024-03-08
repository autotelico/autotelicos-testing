const { sum, subtract, multiply, divide } = require('./calculator');

it('Sums two values', () => {
  expect(sum(1, 2)).toBe(3);
});

it('Subtracts two values', () => {
  expect(subtract(14, 3)).toBe(11);
});

it('Subtracts two value such that the result is negative', () => {
  expect(subtract(-133, 5)).toBe(-138);
});

it('Multiplies two values', () => {
  expect(multiply(2, 3)).toBe(6);
});

it('Multiplies by a non-number', () => {
  expect(multiply(10, 'cool')).toBeNaN();
});

it('Divides two numbers', () => {
  expect(divide(2, 3)).toBeLessThan(1);
});

it('Divides a number by zero', () => {
  expect(() => {
    divide(14, 0);
  }).toThrow('Cannot divide by zero');
});
