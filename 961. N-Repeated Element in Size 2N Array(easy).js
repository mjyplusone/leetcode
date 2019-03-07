/**
 * @param {number[]} A
 * @return {number}
 */
var repeatedNTimes = function(A) {
    A.sort();
    return A[A.length / 2 - 2] === A[A.length / 2 - 1] ? A[A.length / 2 - 1] : A[A.length / 2]; 
};