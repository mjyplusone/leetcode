/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function(A) {
    let result = [];
    for (let i = 0; i < A.length; i++) {
        result[i] = A[i] * A[i];
    }
    return result.sort((num1, num2) => num1 - num2);
};