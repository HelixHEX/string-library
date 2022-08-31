const capitalize = require('../src');
const allCaps = require('../src');
const capitalizeWords = require('../src');
const removeExtraSpaces = require('../src');
const kebobCase = require('../src');
const snakeCase = require('../src');
const camelCase = require('../src');
const shift = require('../src');
const makeHashTag = require('../src');
const isEmpty = require('../src');

// test all functions

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
  expect(removeExtraSpaces('hello')).toBe('hello');
});

test('kebobCase', () => {
  expect(kebobCase('hello')).toBe('hello');
});

test('snakeCase', () => {
  expect(snakeCase('hello')).toBe('hello');
});

test('camelCase', () => {
  expect(camelCase('hello')).toBe('hello');
});

test('shift', () => {
  expect(shift('hello')).toBe('hello');
});

test('makeHashTag', () => {
  expect(makeHashTag('hello')).toBe('hello');
})

test('isEmpty', () => {
  expect(isEmpty('hello')).toBe(false);
});