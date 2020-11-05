const { sumZero2, sumZero, refactoredSumZero } = require('./index');
const { countUniqueValues, countUniqueValues2 } = require('./exercise2');

//My Solution
test('"sumZero2" is a function', () => {
    expect(typeof sumZero2).toEqual('function');
});

test('Return first value pair that sum 0', () => {
    expect(sumZero2([-3, -2, -1, 0, 1, 2, 3])).toEqual([-3, 3]);
});

test('No value pair sum 0', () => {
    expect(sumZero2([-2, 0, 1, 3])).toEqual(undefined);
});


//Professor Solution
test('"sumZero" is a function', () => {
    expect(typeof sumZero).toEqual('function');
});

test('Return first value pair that sum 0', () => {
    expect(sumZero([-3, -2, -1, 0, 1, 2, 3])).toEqual([-3, 3]);
});

test('No value pair sum 0', () => {
    expect(sumZero([-2, 0, 1, 3])).toEqual(undefined);
});


//Professor Solution refactored
test('"refactoredSumZero" is a function', () => {
    expect(typeof refactoredSumZero).toEqual('function');
});

test('Return first value pair that sum 0', () => {
    expect(refactoredSumZero([-3, -2, -1, 0, 1, 2, 3])).toEqual([-3, 3]);
});

test('No value pair sum 0', () => {
    expect(refactoredSumZero([-2, 0, 1, 3])).toEqual(undefined);
});


//Exercise 2: My Solution
test('"refactoredSumZero" is a function', () => {
    expect(typeof countUniqueValues).toEqual('function');
});

test('Count the uniques values in the array', () => {
    expect(countUniqueValues([1, 1, 1, 1, 1, 1, 1, 2])).toEqual(2);
});

test('Count the uniques values in the array', () => {
    expect(countUniqueValues([1, 2, 3, 3, 4, 4, 4, 7, 7, 12, 12, 13])).toEqual(7);
});

test('Count the uniques values in the array', () => {
    expect(countUniqueValues([])).toEqual(0);
});


test('Count the uniques values in the array', () => {
    expect(countUniqueValues([-2, -1, -1, 0, 1])).toEqual(4);
});

//Exercise 2: Professor Solution
test('"refactoredSumZero" is a function', () => {
    expect(typeof countUniqueValues2).toEqual('function');
});

test('Count the uniques values in the array', () => {
    expect(countUniqueValues2([1, 1, 1, 1, 1, 1, 1, 2])).toEqual(2);
});

test('Count the uniques values in the array', () => {
    expect(countUniqueValues2([1, 2, 3, 3, 4, 4, 4, 7, 7, 12, 12, 13])).toEqual(7);
});

test('Count the uniques values in the array', () => {
    expect(countUniqueValues2([])).toEqual(0);
});


test('Count the uniques values in the array', () => {
    expect(countUniqueValues2([-2, -1, -1, 0, 1])).toEqual(4);
});


