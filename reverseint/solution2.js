function reverseInt2(n) {
    const reversed = n.toString().split('').reverse().join('');
    return parseInt(reversed) * Math.sign(n);
};

module.exports = reverseInt2;