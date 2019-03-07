/**
 * @param {number[]} A
 * @return {boolean}
 */
var isMonotonic = function(A) {
    if (A.length <= 1) return true;
    var delta = [];
    for (let i = 1; i < A.length; i++) {
        delta.push(A[i] - A[i - 1]);
    }
    
    return Math.max(...delta) * Math.min(...delta) >= 0;
};