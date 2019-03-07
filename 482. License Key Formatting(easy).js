/**
 * @param {string} S
 * @param {number} K
 * @return {string}
 */
var licenseKeyFormatting = function(S, K) {
    var str = [];
    S = S.split('');
    for (let i = 0; i < S.length; i++) {
        if (/[a-z]/.test(S[i])) S[i] = S[i].toUpperCase();
        if (S[i] !== '-') str.push(S[i]);
    }
    
    var res = [];
    var count = 0;
    for (let i = str.length - 1; i >= 0; i--) {
        if (count === K) {
            res.push('-');
            count = 0;
        }
        res.push(str[i]);
        count++;
    }
    
    return res.reverse().join('');
};