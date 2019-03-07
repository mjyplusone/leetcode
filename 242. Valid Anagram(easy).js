/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    var s1 = s.split('').sort().join('');
    var t1 = t.split('').sort().join('');
    return s1 === t1;
};