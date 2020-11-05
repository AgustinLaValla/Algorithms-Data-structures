/*Write a function called 'same', which accepts two arrays.
  The function should return true if every value in the array has it´s corresponding value squared
  in the second array. The frequency of the value must be the same
*/

function same(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    for (let item of arr1) {
        let index = arr2.indexOf(item ** 2);
        if (index === -1) return false;
        arr2.splice(index, 1);
    }
    return true;
}

//*Time Complexity: O(n)

// console.log(same([2, 4], [4, 16]));

function refactoredSame(arr1, arr2) {
    if(arr1.length !== arr2.length) {
        return false;
    }

    let frequencyCounter1 = {};
    let frequencyCounter2 = {};

    for(let value of arr1) {
        frequencyCounter1[value] = (frequencyCounter1[value] || 0) + 1;
    }

    for(let value of arr2) {
        frequencyCounter2[value] = (frequencyCounter2[value] || 0) + 1;
    }

    for(let key in frequencyCounter1) {
        if(!(key ** 2 in frequencyCounter2)) {
            return false;
        }

        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
            return false;
        }
    }

    return true
}

console.log(refactoredSame([2,4,4], [16, 4, 16]));

module.exports = { same, refactoredSame};