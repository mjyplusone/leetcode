/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    var res = [];
    for (let i = 0; i < numRows; i++) {
        let level = [];
        level[0] = 1;
        level[i] = 1;
        var tmp = res[res.length - 1];
        for (let j = 1; j < i; j++) {
            level[j] = tmp[j - 1] + tmp[j];
        }
        res.push(level);
    }
    return res;
};