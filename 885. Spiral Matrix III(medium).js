/**
 * @param {number} R
 * @param {number} C
 * @param {number} r0
 * @param {number} c0
 * @return {number[][]}
 */
var spiralMatrixIII = function(R, C, r0, c0) {
    var count = R * C;
    var res = [];
    var i = r0, j = c0, flag = 0;
    var top = r0, bottom = r0, left = c0, right = c0;
    
    var tmp = []; tmp.push(r0); tmp.push(c0);
    res.push(tmp);
    
    while (res.length < count) {
        if (flag === 0) {
            j++;
            if (j > right) {
                flag = 1;
                right = j;
            }
        } else if (flag === 1) {
            i++;
            if (i > bottom) {
                flag = 2;
                bottom = i;
            }
        } else if (flag === 2) {
            j--;
            if (j < left) {
                flag = 3;
                left = j;
            }
        } else if (flag === 3) {
            i--;
            if (i < top) {
                flag = 0;
                top = i;
            }
        }
        if (i >= 0 && i < R && j >= 0 && j < C) {
            let tmp = [];
            tmp.push(i); tmp.push(j);
            res.push(tmp);
        }
    }
    
    return res;
};