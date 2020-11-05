/*
  Implement a function called countUniqueValues, 
  which accepts a sorted array, and counts the unique values in the array
  There can be negative negative values in the array, but it will be always sorted
*/

//My Solution
function countUniqueValues(arr) {
    let valueSet = new Set();

    for (let value of arr) {
        valueSet.add(value);
    }

    return valueSet.size

}
//Complexity: 0(n)

//Profesor Solution
function countUniqueValues2(arr) {
    if (arr.length === 0) return 0;

    let i = 0;

    for (let j = 0; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j];
        }
    }

    return i + 1;
}
//Complexity: 0(n)

module.exports = { countUniqueValues,  countUniqueValues2};

console.log(countUniqueValues([1, 1, 1, 1, 1, 1, 1, 2])); //2
console.log(countUniqueValues([1, 2, 3, 3, 4, 4, 4, 7, 7, 12, 12, 13])); //7
console.log(countUniqueValues([]));
console.log(countUniqueValues([-2, -1, -1, 0, 1]));

console.log(countUniqueValues2([1, 1, 1, 1, 1, 1, 1, 2])); //2
console.log(countUniqueValues2([1, 2, 3, 3, 4, 4, 4, 7, 7, 12, 12, 13])); //7
console.log(countUniqueValues2([]));
console.log(countUniqueValues2([-2, -1, -1, 0, 1]));