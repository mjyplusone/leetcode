/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var fairCandySwap = function(A, B) {
    A.sort((num1, num2) => num1 - num2);
    B.sort((num1, num2) => num1 - num2);
    
    var sum1 = 0, sum2 = 0;
    for (let i = 0; i < A.length; i++) {
        sum1 += A[i];
    }
    for (let i = 0; i < B.length; i++) {
        sum2 += B[i];
    }
    var delta = (sum2 - sum1) / 2;
    
    var res = [];
    for (let i = 0; i < A.length; i++) {
        for (let j = 0; j < B.length; j++) {
            if (B[j] - A[i] === delta) {
                res[0] = A[i];
                res[1] = B[j];
                return res;
            } else if (B[j] - A[i] > delta) {
                break;
            }
        }
    }
};