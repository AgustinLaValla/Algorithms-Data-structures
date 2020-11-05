function vowels(str) {
    let vowelsArray = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;

    for (let char of str.toLowerCase()) {
        if (vowelsArray.includes(char)) {
            count++;
        }
    };

    return count;
}