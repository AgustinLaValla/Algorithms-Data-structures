function vowels(str) {
    return str.toLowerCase().split('').filter(letter =>
        letter === 'a' ||
        letter === 'e' ||
        letter === 'i' ||
        letter === 'o' ||
        letter === 'u').length;
}
