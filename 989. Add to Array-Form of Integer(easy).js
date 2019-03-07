/**
 * @param {number[]} A
 * @param {number} K
 * @return {number[]}
 */
var addToArrayForm = function(A, K) {
    var K = (K + '').split('');
    A.reverse(); K.reverse();
    var delta = Math.abs(A.length - K.length);
    if (A.length > K.length) {
        while (delta--) {
            K.push(0);
        }
    } else {
        while (delta--) {
            A.push(0);
        }
    }
    
    var res = [], carry = 0;
    for (let i = 0; i < A.length; i++) {
        if (A[i] + parseInt(K[i]) + carry < 10) {
            res[i] = A[i] + parseInt(K[i]) + carry;
            carry = 0;
        } else {
            res[i] = (A[i] + parseInt(K[i]) + carry) % 10;
            carry = 1;
        }
    }

    if (carry === 1) res.push(1);
    
    if (res[res.length - 1] === 0 && res.length > 1) return res.slice(0, res.length - 1).reverse();
    else return res.reverse()
};