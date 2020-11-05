const palindrome = require(".");

function palindrome2(str) {
   return str.split('').every((char,idx) => char === str[(str.length - 1) - idx]);
};

module.exports = palindrome2;