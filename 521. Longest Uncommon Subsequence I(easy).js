// 只需要判断两字符串是否相等，如果相等就返回-1，不相等就返回较长的字符串长度！
/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
var findLUSlength = function(a, b) {
    if (a === b) {
        return -1;
    } else {
        return Math.max(a.length, b.length);
    }
};