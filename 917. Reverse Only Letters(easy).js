/**
 * @param {string} S
 * @return {string}
 */
var reverseOnlyLetters = function(S) {
    var res = [];
    var str = [];
    for (let i = 0; i < S.length; i++) {
        if (/[a-zA-Z]/.test(S[i])) {
            res[i] = '';
            str.push(S[i]);
        } else {
            res[i] = S[i];
        }
    }
    
    for (let i = 0; i < res.length; i++) {
        if (res[i] === '') {
            res[i] = str.pop();
        }
    }
    return res.join('');
};