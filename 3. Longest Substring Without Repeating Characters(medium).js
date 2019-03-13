/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if (!s) return 0;
    
    var len = Array.from(new Set(s)).length;
    if (len === 1) return 1;
    
    for (let i = len; i >= 1; i--) {
        for (let j = 0; j < s.length - i + 1; j++) {
            let sub = s.slice(j, j + i);
            if (Array.from(new Set(sub)).length === i) {
                return i;
            }
        }
    }
};