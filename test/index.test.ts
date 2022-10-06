import {
  capitalize,
  capitalizeWords,
  removeExtraSpaces,
  allCaps,
  kebobCase,
  snakeCase,
  camelCase,
  shift,
  makeHashTag,
  isEmpty,
} from '../src';

test('capitalize', () => {
  expect(capitalize('hello')).toBe('Hello');
  expect(capitalize('hello world')).toBe('Hello world');
});

test('allCaps', () => {
  expect(allCaps('hello')).toBe('HELLO');
});

test('capitalizeWords', () => {
  expect(capitalizeWords('hello')).toBe('Hello');
});

test('removeExtraSpaces', () => {
  expect(removeExtraSpaces('hello fdsf sdf    sdf')).toBe('hello fdsf sdf sdf');
});

test('kebobCase', () => {
  expect(kebobCase('hello', '-')).toBe('hello');
});

test('snakeCase', () => {
  expect(snakeCase('hello')).toBe('hello');
});

test('camelCase', () => {
  expect(camelCase('hello')).toBe('hello');
});

test('shift', () => {
  expect(shift('hello')).toBe('elloh');
});

test('makeHashTag', () => {
  expect(makeHashTag('hello')).toStrictEqual(['#Hello']);
});

test('isEmpty', () => {
  expect(isEmpty('hello')).toBe(false);
});
