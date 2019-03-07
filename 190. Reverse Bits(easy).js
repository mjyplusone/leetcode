/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
// 不断对n求余
var reverseBits = function(n) {
    var res = [];
    while (n) {
        res.push(n % 2);
        n = Math.floor(n / 2);
    }
    for (let i = res.length; i < 32; i++) {
        res.push(0);
    }
    return parseInt(res.join(''), 2);
};