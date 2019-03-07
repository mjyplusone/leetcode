/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    var str = '';
    for (let i = 0; i < s.length; i++) {
        if (/[a-zA-Z0-9]/.test(s[i])) {
            str += s[i].toLowerCase();
        }
    }
    return str === str.split('').reverse().join('');
};