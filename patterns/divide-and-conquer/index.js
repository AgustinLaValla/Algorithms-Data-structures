/*
  Given a sorted array of integers, write a function called search,
  that accepts a value and returns the index where the value passed to the function 
  is located. if the value is not found return - 1;
*/

function search(arr, value) {
    let min = 0;
    let max = arr.length - 1;

    while(min <= max) {
        let middle = Math.floor((min + max) / 2);

        if(arr[middle] < value) {
            min = middle - 1;
        } else if(arr[middle] > value) {
            max = middle + 1;
        } else {
            return middle
        }
    }
    return -1;
}

console.log(search([1,2,3,4,5,6,7], 5));

module.exports = { search };