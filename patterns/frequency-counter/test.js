const { same, refactoredSame } = require('./index');

test("'same' function is defined", () => {
    expect(typeof same).toEqual('function');
});

test('second array has each squared values of first array', () => {
    expect(same([2, 4], [4, 16])).toBeTruthy();
});

test('The frequency is not the same', () => {
    expect(same([2, 4, 2], [4, 16, 16])).toBeFalsy();
});

test("'same' function is defined", () => {
    expect(typeof refactoredSame).toEqual('function');
});

test('second array has each squared values of first array', () => {
    expect(refactoredSame([2, 4], [4, 16])).toBeTruthy();
});

test('The frequency is not the same', () => {
    expect(refactoredSame([2, 4, 2], [4, 16, 16])).toBeFalsy();
});