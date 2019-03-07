/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    for (let i = 0; i < s.length; i++) {
        let str = s.slice(0, i) + s.slice(i + 1);
        if (str.indexOf(s[i]) === -1) return i;
    }
    return -1;
};