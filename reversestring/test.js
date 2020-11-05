const reverse = require('./index');
const { reverse2 } = require('./solution2');
const { reverse3 } = require('./solution3');

//I
test('Reverse function exists', () => {
  expect(reverse).toBeDefined();
});

test('Reverse reverses a string', () => {
  expect(reverse('abcd')).toEqual('dcba');
});

test('Reverse reverses a string', () => {
  expect(reverse('  abcd')).toEqual('dcba  ');
});


//II

test('Reverse function exists', () => {
  expect(reverse2).toBeDefined();
});

test('Reverse reverses a string', () => {
  expect(reverse2('abcd')).toEqual('dcba');
});

test('Reverse reverses a string', () => {
  expect(reverse2('  abcd')).toEqual('dcba  ');
});


//III
test('Reverse function exists', () => {
  expect(reverse3).toBeDefined();
});

test('Reverse reverses a string', () => {
  expect(reverse3('abcd')).toEqual('dcba');
});

test('Reverse reverses a string', () => {
  expect(reverse3('  abcd')).toEqual('dcba  ');
});
