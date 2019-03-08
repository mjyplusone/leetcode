/**
 * @param {string} S
 * @return {number[]}
 */
var partitionLabels = function(S) {
    var last = {};
    for (let i = 0; i < S.length; i++) {
        last[S[i]] = i;
    }
    
    var res = [];
    var max = 0, pos = 0;
    for (let i = 0; i < S.length; i++) {
        max = Math.max(max, last[S[i]]);
        if (i === max) {
            res.push(i - pos + 1);
            pos = i + 1;
        }
    }
    
    return res;
};