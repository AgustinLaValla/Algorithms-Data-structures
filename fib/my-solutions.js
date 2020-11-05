function fib(n) {
    let predecessor = 0;
    let sucessor = 1;
    let result;

    if (predecessor >= n) {
        return;
    };

    for (let i = 0; i < n; i++) {
        result = predecessor + sucessor;
        predecessor = sucessor;
        sucessor = result;
    }

    return predecessor;
}



function recursiveFib(n, predecessor = 0, sucessor = 1, count = 0) {
    if(count < n) {
        return recursiveFib(n, sucessor, predecessor + sucessor, count + 1);
    };
    return predecessor;

}