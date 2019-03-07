/**
 * @param {number[]} A
 * @param {number[][]} queries
 * @return {number[]}
 */
var sumEvenAfterQueries = function(A, queries) {
    let res = [];
    for (let i = 0; i < A.length; i++) res[i] = 0;
    for (let i = 0; i < A.length; i++) {
        let val = queries[i][0];
        let index = queries[i][1];
        A[index] += val;
        for (let j = 0; j < A.length; j++) {
            if (A[j] % 2 === 0) res[i] += A[j];
        }
    }
    return res;
};