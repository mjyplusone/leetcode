/**
 * @param {number} n
 * @return {number}
 */
// 思路：https://www.jianshu.com/p/211618afc695
var trailingZeroes = function(n) {
    if (n === 0) return 0;
    return Math.floor(n / 5) + trailingZeroes(Math.floor(n / 5));
};