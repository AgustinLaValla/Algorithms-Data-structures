function reverse(str) {
    if (str === '') return '';

    return reverse(str.slice(1)) + str[0];
}

function palidrome(str) {
    if (str.length <= 1) return true;

    if (str[0] === str[str.length - 1]) {
        return palidrome(str.slice(1, str.length - 1));
    }

    return false;
}

function factorial(n) {
    if (n <= 1) return n;

    return n * factorial(n - 1);
}

function pow(x, n) {
    if (n <= 1) return x;

    return x * pow(x, n - 1);
}

function countVowels(str, count = 0) {
    if (str === '') return count;

    let search = str.match(/[aeiouáéíóú]/i);

    let index = 1;

    if (search) {
        index = str.indexOf(search[0]) + 1;
        count++;
    };

    return countVowels(str.slice(index), count);
}


function someRecursion(arr, callback) {
    if (!arr.length) return false;

    if (callback(arr[0])) return true;

    return someRecursion(arr.slice(1), callback);
}

function flatten(arr, newArray = []) {
    if (arr.length === 0) return newArray;

    if (Array.isArray(arr[0])) {
        newArray = [...newArray, ...arr[0]];
    } else {
        newArray.push(arr[0]);
    }

    return flatten(arr.slice(1), newArray);
}

function capitalizeFirst(str) {

    if (typeof str !== 'string' || str === '') return ''

    function helper(arr, newArray = []) {
        if (arr.length === 0) return newArray;

        if (arr[0][0]) {
            let word = arr[0][0].toUpperCase() + arr[0].slice(1);
            newArray.push(word);
        }

        return helper(arr.slice(1), newArray);
    }

    const array = helper(str.split(' '));

    return array.join(' ');
}

function evenSum(arr, count = 0) {

    if (!arr.length) return count;

    if (arr[0] % 2 === 0) {
        count += arr[0]
    }

    return evenSum(arr.slice(1), count);
}


function nestedEvenSum(obj, sum = 0) {
    for (var key in obj) {
        if (typeof obj[key] === 'object') {
            sum += nestedEvenSum(obj[key]);
        } else if (typeof obj[key] === 'number' && obj[key] % 2 === 0) {
            sum += obj[key];
        }
    }
    return sum;
}