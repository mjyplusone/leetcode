/**
 * @param {string} S
 * @param {character} C
 * @return {number[]}
 */
var shortestToChar = function(S, C) {
    var index = [];
    for (let i = 0; i < S.length; i++) {
        if (S[i] === C) index.push(i);
    }
    var res = [];
    for (let i = 0; i < S.length; i++) {
        if (i <= index[0]) res[i] = index[0] - i;
        else if (i >= index[index.length - 1]) res[i] = i - index[index.length - 1];
        else {
            var sub = [];
            for (let j = 0; j < index.length; j++) {
                sub[j] = Math.abs(index[j] - i);
            }
            res[i] = Math.min(...sub);
        }
    }
    return res;
};