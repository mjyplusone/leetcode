/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
    let result1  = [], result2 = [];
    for (let i = 0; i < A.length; i++) {
        if (A[i] % 2 === 0) result1.push(A[i]);
        else result2.push(A[i]);
    }
    return result1.concat(result2);
};