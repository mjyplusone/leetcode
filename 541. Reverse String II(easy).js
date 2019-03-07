/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    var res = '';
    for (let i = 0; i < s.length; i += 2 * k) {
        var str = s.slice(i, i + 2 * k);
        var left = s.slice(i, i + k);
        var right = s.slice(i + k, i + 2 * k);
        
        if (str.length < k) {
            res += str.split('').reverse().join('');
        } else {
            res += left.split('').reverse().join('') + right;
        }
    }
    return res;
};