/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    if (s.length < 2) return false;
    
    for (let i = 1; i <= Math.floor(s.length / 2); i++) {
        let len = i, val = s.slice(0, i);
        if (s.length % len !== 0) continue;
        let str = '';
        for (let i = 0; i < s.length / len; i++) {
            str += val;
        }
        if (str === s) return true;
    }
    
    return false;
};