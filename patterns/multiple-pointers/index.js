/*
  Write a function called sumZero which accepts a sorted integer array.
  The function should find the first pair where sum is 0.
  return an array that includes both values that sum to zero or undefined if a pair does not exists
*/

//MY SOLUTION
function sumZero2(arr, result) {
    if (arr.length <= 1 || (result && result.length)) return result;

    if (arr[0] + arr[arr.length - 1] === 0) {
        result = [arr[0], arr[arr.length - 1]];
    }

    return sumZero2(arr.slice(1, arr.length - 1), result);
}
//Complexity: O(n)


//Professor solution
function sumZero(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === 0) {
                return [arr[i], arr[j]];
            }
        }
    }
}
//Complexity: 0(n^2);


function refactoredSumZero(arr) {
    let left = 0;
    let right = arr.length - 1;

    while(left < right) {
        let sum = arr[left] + arr[right];
        if(sum === 0) {
            return [arr[left], arr[right]];
        } else if(sum > 0) {
            right--;
        } else {
            left++;
        }
    }

    return undefined;
}
//Complexity: 0(n);

console.log(sumZero2([-3, -2, -1, 0, 1, 2, 3]));

console.log(sumZero([-3, -2, -1, 0, 1, 2, 3]));

console.log(refactoredSumZero([-3, -2, -1, 0, 1, 2, 3]));

module.exports = { sumZero2, sumZero, refactoredSumZero };