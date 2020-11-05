function linearSearch(arr, n) {
    let index = 0;

    for (let value of arr) {
        if (value === n) return index;
        index++;
    }

    return -1;
}

function binarySearch(arr, n) {
    if (arr.length === 0 || !n) return - 1;

    let min = 0;
    let max = arr.length - 1;

    arr = arr.sort((x, y) => x - y);

    while (min <= max) {
        let middle = Math.floor((min + max) / 2);

        if (arr[middle] < n) {
            min = middle + 1;
        } else if (arr[middle] > n) {
            max = middle - 1;
        } else {
            return middle
        }
    }

    return -1;
}

function naiveSearch(long, short) {
    let count = 0;
    for (let i = 0; i < long.length; i++) {
        for (let j = 0; j < short.length; j++) {
            if (short[j] !== long[i + j]) {
                break;
            }
            if (j === short.length - 1) {
                count++;
            }
        }
    }

    return count;
}
