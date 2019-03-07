/**
 * @param {string} S
 * @return {number[][]}
 */
var largeGroupPositions = function(S) {
    var count = [];
    var start = 0, end = 0;
    var value = S[0];
    for (let i = 1; i < S.length; i++) {
        if (S[i] !== value) {
            value = S[i]
            count.push(end - start + 1);
            start = i;
            end = i;
        } else {
            end++;
        }
    }
    count.push(end - start + 1);
    
    var res = [];
    start = 0, end = 0;
    for (let i = 0; i < count.length; i++) {
        end = start + count[i] - 1;
        if (count[i] >= 3) {
            var tmp = [];
            tmp.push(start);
            tmp.push(end);
            res.push(tmp);
        }
        start = end + 1;
    }
    
    return res;
};