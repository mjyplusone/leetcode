/**
 * @param {number[][]} M
 * @return {number[][]}
 */
var imageSmoother = function(M) {
    var res = [];
    for (let i = 0; i < M.length; i++) {
        var tmp = [];
        for (let j = 0; j < M[i].length; j++) {
            var sum = 0, count = 0;
            if (i - 1 >= 0 && j - 1 >= 0) { sum += M[i - 1][j - 1]; count++; }
            if (j - 1 >= 0) { sum += M[i][j - 1]; count++; }
            if (i + 1 < M.length && j - 1 >= 0) { sum += M[i + 1][j - 1]; count++; }
            if (i - 1 >= 0) { sum += M[i - 1][j]; count++; }
            if (i + 1 < M.length) { sum += M[i + 1][j]; count++; }
            if (i - 1 >= 0 && j + 1 < M[0].length) { sum += M[i - 1][j + 1]; count++; }
            if (j + 1 < M[0].length) { sum += M[i][j + 1]; count++; }
            if (i + 1 < M.length && j + 1 < M[0].length) { sum += M[i + 1][j + 1]; count++; }
            tmp.push(Math.floor((sum + M[i][j]) / (count + 1)));
        }
        res.push(tmp);
    }
    return res;
};