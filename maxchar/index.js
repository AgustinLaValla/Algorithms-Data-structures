// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const chars = {};
    let max = 0;
    let maxchar = '';

    for (let char of str) {
        if (chars[char]) {
            chars[char]++;
        } else {
            chars[char] = 1;
        }
    }

    for (let char in chars) {
        if (chars[char] > max) {
            max = chars[char];
            maxchar = char;
        }
    }

    return maxchar;

}
console.log(maxChar('ab1c1d1e1f1g1'));
console.log(maxChar('bcdefghijklmnaaaaa'));


module.exports = maxChar;
