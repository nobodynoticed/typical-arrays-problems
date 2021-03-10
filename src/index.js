exports.min = function min(array) {
    if (!Array.isArray(array) || !array.length) {
        return 0;
    }

    return Math.min(...array);
};

exports.max = function max(array) {
    if (!Array.isArray(array) || !array.length) {
        return 0;
    }

    return Math.max(...array);
};

exports.avg = function avg(array) {
    if (!Array.isArray(array) || !array.length) {
        return 0;
    }

    const result = array.reduce((acc, num) => {
        const res = acc + num;
        return res;
    }, 0);
    return result / array.length;
};
