/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    var obj = {};
    for (let i = 0; i < s.length; i++) {
        if (obj[s[i]]) {
            obj[s[i]]++;
        } else {
            obj[s[i]] = 1;
        }
    }
    
    var sum = 0, flag = false;
    for (var key in obj) {
        if (obj[key] % 2 === 0) sum += obj[key];
        else {
            flag = true;
            sum += obj[key] - 1;
        }
    }
    return flag ? sum + 1 : sum;
};