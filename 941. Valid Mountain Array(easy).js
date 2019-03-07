/**
 * @param {number[]} A
 * @return {boolean}
 */
var validMountainArray = function(A) {
    if (A.length < 3) return false;
    
    var max = -Infinity, index = 0;
    for (let i = 0; i < A.length; i++) {
        if (A[i] > max) {
            max = A[i];
            index = i;
        }
    }
    
    if (index === 0 || index === A.length - 1) return false;
    
    for (let i = 0; i < index; i++) {
        if (A[i] >= A[i + 1]) return false;
    }
    for (let i = index; i < A.length - 1; i++) {
        if (A[i] <= A[i + 1]) return false;
    }
    
    return true;
};