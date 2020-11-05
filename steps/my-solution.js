function steps(n) {
    let array = [];

    for (let i = 0; i < n; i++) {
        array.push(' ');
    };

    for (let i = 0; i < n; i++) {
        array.splice(i, 1, '#');
        console.log(array.join(''));
    };
}
