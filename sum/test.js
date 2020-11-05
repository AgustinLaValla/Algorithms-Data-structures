const sum = require('./index');

test('Sum function is defined', () => {
    expect(typeof sum).toEqual('function');
})

test('Sum calculates the sum of all numbers from 1 to 5', () => {
    expect(sum(5)).toEqual(15);
});

test('Sum calculates the of all numbers from 1 to 1000', () => {
    expect(sum(1000)).toEqual(500500);
})

