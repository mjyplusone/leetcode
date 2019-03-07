/**
 * @param {string} S
 * @return {string[]}
 */
var letterCasePermutation = function(S) {
    var res = [];    
    res.push(S);
    for (let i = 0; i < S.length; i++) {
        let len = res.length;
        if (/[a-z]/.test(S[i])) {
            for (let j = 0; j < len; j++) {
                var arr = res[j].split('');
                arr[i] = arr[i].toUpperCase();
                res.push(arr.join(''));
            }
        }
        if (/[A-Z]/.test(S[i])) {
            for (let j = 0; j < len; j++) {
                var arr = res[j].split('');
                arr[i] = arr[i].toLowerCase();
                res.push(arr.join(''));
            }
        }
    }
    return res;
};