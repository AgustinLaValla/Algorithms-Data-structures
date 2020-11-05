function solution2(str) {
    const array = str.split('');
    let count = 0;
    let maxChar;
    array.forEach(char => {
        let charCounter = 0;
        array.forEach(char2 => char2 === char ? charCounter += 1 : null);
        if (charCounter > count) {
            maxChar = char;
        }
    });

    return maxChar;
};

module.exports = solution2;