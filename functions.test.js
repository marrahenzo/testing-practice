import { capitalize } from './functions';

test('take a string and return it with the first character capitalized', () => {
  expect(capitalize('this is a test')).toBe('This is a test');
});
