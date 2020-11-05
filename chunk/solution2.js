function chunk2(array, size) {
    let chunked = [];
    let index = 0;

    while(index < array.length) {
        chunked.push(array.slice(index, index + size));
        index += size
    };

    return chunked;
}

console.log(chunk2([1, 2, 3, 4], 2));
console.log(chunk2([1, 2, 3, 4, 5], 2));
console.log(chunk2([1, 2, 3, 4, 5, 6, 7, 8], 3));
console.log(chunk2([1, 2, 3, 4, 5], 4));
console.log(chunk2([1, 2, 3, 4, 5], 10));