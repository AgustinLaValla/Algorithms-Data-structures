function myChunkSolution(array, size) {
    let result = [];
    let index = 0;

    array.forEach((number) => {
        if (result[index] && result[index].length >= size) {
            result.push([number]);
        } else {
            if (!result[index] || result[index] === undefined) {
                result[index] = [number];
            } else {
                result[index].push(number);
                index = result[index].length >= size ? index + 1 : index;
            };
        };
    })

    return result;
};
module.exports = myChunkSolution;