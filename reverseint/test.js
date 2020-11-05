const reverseInt = require('./index');
const reverseInt2 = require('./solution2');

//I
test('ReverseInt function exists', () => {
  expect(reverseInt).toBeDefined();
});

test('ReverseInt handles 0 as an input', () => {
  expect(reverseInt(0)).toEqual(0);
});

test('ReverseInt flips a positive number', () => {
  expect(reverseInt(5)).toEqual(5);
  expect(reverseInt(15)).toEqual(51);
  expect(reverseInt(90)).toEqual(9);
  expect(reverseInt(2359)).toEqual(9532);
});

test('ReverseInt flips a negative number', () => {
  expect(reverseInt(-5)).toEqual(-5);
  expect(reverseInt(-15)).toEqual(-51);
  expect(reverseInt(-90)).toEqual(-9);
  expect(reverseInt(-2359)).toEqual(-9532);
});

//II
test('ReverseInt function exists', () => {
  expect(reverseInt2).toBeDefined();
});

test('ReverseInt handles 0 as an input', () => {
  expect(reverseInt2(0)).toEqual(0);
});

test('ReverseInt flips a positive number', () => {
  expect(reverseInt2(5)).toEqual(5);
  expect(reverseInt2(15)).toEqual(51);
  expect(reverseInt2(90)).toEqual(9);
  expect(reverseInt2(2359)).toEqual(9532);
});

test('ReverseInt flips a negative number', () => {
  expect(reverseInt2(-5)).toEqual(-5);
  expect(reverseInt2(-15)).toEqual(-51);
  expect(reverseInt2(-90)).toEqual(-9);
  expect(reverseInt2(-2359)).toEqual(-9532);
});