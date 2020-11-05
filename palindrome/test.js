const palindrome = require('./index');
const palindrome2 = require('./solution2');

//I
test('palindrome function is defined', () => {
  expect(typeof palindrome).toEqual('function');
});

test('"aba" is a palindrome', () => {
  expect(palindrome('aba')).toBeTruthy();
});

test('" aba" is not a palindrome', () => {
  expect(palindrome(' aba')).toBeFalsy();
});

test('"aba " is not a palindrome', () => {
  expect(palindrome('aba ')).toBeFalsy();
});

test('"greetings" is not a palindrome', () => {
  expect(palindrome('greetings')).toBeFalsy();
});

test('"1000000001" a palindrome', () => {
  expect(palindrome('1000000001')).toBeTruthy();
});

test('"Fish hsif" is not a palindrome', () => {
  expect(palindrome('Fish hsif')).toBeFalsy();
});

test('"pennep" a palindrome', () => {
  expect(palindrome('pennep')).toBeTruthy();
});


//II

test('palindrome function is defined', () => {
  expect(typeof palindrome2).toEqual('function');
});

test('"aba" is a palindrome', () => {
  expect(palindrome2('aba')).toBeTruthy();
});

test('" aba" is not a palindrome', () => {
  expect(palindrome2(' aba')).toBeFalsy();
});

test('"aba " is not a palindrome', () => {
  expect(palindrome2('aba ')).toBeFalsy();
});

test('"greetings" is not a palindrome', () => {
  expect(palindrome2('greetings')).toBeFalsy();
});

test('"1000000001" a palindrome', () => {
  expect(palindrome2('1000000001')).toBeTruthy();
});

test('"Fish hsif" is not a palindrome', () => {
  expect(palindrome2('Fish hsif')).toBeFalsy();
});

test('"pennep" a palindrome', () => {
  expect(palindrome2('pennep')).toBeTruthy();
});