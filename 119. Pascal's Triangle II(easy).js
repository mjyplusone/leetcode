/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    var res = [];
    for (let i = 0; i <= rowIndex; i++) {
        let tmp = [];
        let last = res[res.length - 1];
        tmp[0] = 1; tmp[i] = 1;
        for (let j = 1; j < i; j++) {
            tmp[j] = last[j] + last[j - 1];
        }
        res.push(tmp);
    }
    
    return res.pop();
};