/**
 * @param {number} x
 * @param {number} y
 * @param {number} bound
 * @return {number[]}
 */
var powerfulIntegers = function(x, y, bound) {
    var sum, res = [];
    for (let i = 0; i < 18 && Math.pow(x, i) < bound; i++) {
        for (let j = 0; j < 18 && Math.pow(y, j) < bound; j++) {
            sum = Math.pow(x, i) + Math.pow(y, j);
            if (sum <= bound) res.push(sum);
            else break;
        }
    }
    return Array.from(new Set(res));
};