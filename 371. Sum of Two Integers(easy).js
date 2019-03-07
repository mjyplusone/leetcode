// 位运算实现加法
// https://www.cnblogs.com/dyzhao-blog/p/5662891.html
// 对应位相加 - 异或
// 进位 - 与

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
    while (b) {
        var c = a ^ b;
        b = (a & b) << 1;
        a = c;
    }
    return a;
};