/**
 * @param {string} A
 * @param {string} B
 * @return {number}
 */
var repeatedStringMatch = function(A, B) {
    var n = 1, str = '';
    while (1) {
        str += A;
        if (str.indexOf(B) !== -1) return n;
        if (str.length - B.length >= A.length) return -1;
        n++;
    }
};