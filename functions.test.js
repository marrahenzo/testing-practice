import {
  capitalize,
  reverseString,
  Calculator,
  analyzeArray
} from './functions';

test('take a string and return it with the first character capitalized', () => {
  expect(capitalize('this is a test')).toBe('This is a test');
});

test('take a string and reverse it', () => {
  expect(reverseString('This should be reversed')).toBe(
    'desrever eb dluohs sihT'
  );
});

test('test calculator class functions', () => {
  let calculator = new Calculator();
  expect(calculator.add(1, 5)).toBe(6);
  expect(calculator.subtract(5, 1)).toBe(4);
  expect(calculator.divide(10, 2)).toBeCloseTo(5);
  expect(calculator.multiply(10, 5)).toBe(50);
});

test('take an array of numbers and return an object with the following properties: average, min, max, and length', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6
  });
});
