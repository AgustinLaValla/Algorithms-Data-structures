// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 1; j < arr.length; j++) {
            if (arr[j - 1] > arr[j]) {
                const auxiliar = arr[j];
                [arr[j], arr[j - 1]] = [arr[j - 1], auxiliar];
            }
        }
    }
    return arr;
}

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let min = i;

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }

        if (i !== min) {
            let auxiliar = arr[i];
            arr[i] = arr[min];
            arr[min] = auxiliar;
        }
    }

    return arr;
}

function mergeSort(arr) {

    if(arr.length <= 1) return arr; 

    let middlePoint = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, middlePoint));
    let right = mergeSort(arr.slice(middlePoint));

    return merge(left, right);
}

function merge(left, right) {
    let sorted = [];

    while (left.length && right.length) {
        if(left[0] < right[0]) {
            sorted.push(left.shift());
        } else {
            sorted.push(right.shift());
        }
    }

    return sorted.concat(left.slice().concat(right.slice()));
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
