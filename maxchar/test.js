const maxChar = require('./index');
const maxChar2 = require('./solution2');

//I
test('maxChar function exists', () => {
  expect(typeof maxChar).toEqual('function');
});

test('Finds the most frequently used char', () => {
  expect(maxChar('a')).toEqual('a');
  expect(maxChar('abcdefghijklmnaaaaa')).toEqual('a');
});

test('Works with numbers in the string', () => {
  expect(maxChar('ab1c1d1e1f1g1')).toEqual('1');
});

//II
test('maxChar function exists', () => {
  expect(typeof maxChar2).toEqual('function');
});

test('Finds the most frequently used char', () => {
  expect(maxChar2('a')).toEqual('a');
  expect(maxChar2('abcdefghijklmnaaaaa')).toEqual('a');
});

test('Works with numbers in the string', () => {
  expect(maxChar2('ab1c1d1e1f1g1')).toEqual('1');
});