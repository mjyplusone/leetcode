/**
 * @param {number[]} A
 * @return {number}
 */
var peakIndexInMountainArray = function(A) {
    var max = 0, index = 0;
    for (let i = 0; i < A.length; i++) {
        if (A[i] > max) {
            max = A[i];
            index = i;
        }
    }
    return index;
};