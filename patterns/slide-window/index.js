
//Squared approach(WITHOUT SLIDE WINDOW!) => Complexity: O(n^2)
function maxSubArraySum(arr, n) {
    if (arr.length < n) return null;

    let max = -Infinity;

    for (let i = 0; i < arr.length - n + 1; i++) {
        let temp = 0;

        for (let j = 0; j < n; j++) {
            temp += arr[i + j];
        }

        if (temp > max) {
            max = temp;
        }
    }

    return max;
}

//Linear approach(WITH SLIDE WINDOW!) => Complexity: O(n^2)
function maxSubArraySum2(arr, num) {
    let maxSum = 0;
    let tempSum = 0;

    if (arr.length < num) return null;
    for (let i = 0; i < num; i++) {
        maxSum += arr[i];
    }

    tempSum = maxSum;

    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i];
        maxSum = Math.max(tempSum, maxSum);
    }

    return maxSum;
}

console.log(maxSubArraySum2([1, 2, 5, 2, 8, 1, 5], 2));
console.log(maxSubArraySum2([1, 2, 5, 2, 8, 1, 5], 4));

