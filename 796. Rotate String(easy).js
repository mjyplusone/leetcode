/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var rotateString = function(A, B) {
    if (A === '' && B === '') return true;
    for (let i = 0; i < A.length; i++) {
        var rotate = A.slice(i) + A.slice(0, i);
        if (rotate === B) return true;
    }
    return false;
};