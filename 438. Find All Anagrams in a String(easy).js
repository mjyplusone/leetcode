/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    p = p.split('').sort().join('');
    var res = [];
    for (let i = 0; i <= s.length - p.length; i++) {
        let str = s.slice(i, i + p.length).split('').sort().join('');
        if (str === p) res.push(i);
    }
    return res;
};
