/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var transpose = function(A) {
    var result = [];
    for (let i = 0; i < A[0].length; i++) {
        result[i] = [];
        for (let j = 0; j < A.length; j++) {
            result[i][j] = A[j][i];
        }
    }
    return result;
};