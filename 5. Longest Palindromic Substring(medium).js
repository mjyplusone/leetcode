/**
 * @param {string} s
 * @return {string}
 */

var longestPalindrome = function(s) {
    var max = 0, maxstr = '';
    for (let i = 0; i < s.length; i++) {
        let len1 = expandAroundCenter(s, i, i);
        let len2 = expandAroundCenter(s, i, i + 1);
        if (len1 >= len2) {
            if (len1 > max) {
                max = len1;
                maxstr = s.slice(i - (len1 - 1) / 2, i + (len1 - 1) / 2 + 1);
            }
        } else {
            if (len2 > max) {
                max = len2;
                maxstr = s.slice(i - len2 / 2 + 1, i + len2 / 2 + 1);
            }
        }
    }
    return maxstr;
};

function expandAroundCenter (s, left, right) {
    if (s[left] !== s[right]) return 0;
    
    while (left >= 0 && right < s.length && s[left] === s[right]) {
        left--;
        right++;
    }
    
    return (right - 1) - (left + 1) + 1;
}