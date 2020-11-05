function fib(n) {
    const array = [0,1];

    for(let i = 2; i <= n; i++) {
        const a = array[i - 1];
        const b = array[i - 2];

        array.push(a + b);
    };

    return array[n];
}

console.log(fib(4));

