import { capitalize, reverseString } from './functions';

test('take a string and return it with the first character capitalized', () => {
  expect(capitalize('this is a test')).toBe('This is a test');
});

test('take a string and reverse it', () => {
  expect(reverseString('This should be reversed')).toBe(
    'desrever eb dluohs sihT'
  );
});
