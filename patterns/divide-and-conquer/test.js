const { search } = require('./index');

test("should be a function", () => {
    expect(typeof search).toEqual('function');
});

test("should the index where the value passed is located", () => {
    expect(search([2,4,6,8,10,12,14,16,18,20,22,24,26], 6)).toEqual(2);
})