/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function(A) {
    let even = 0, odd = 1;
    let res = [];
    for (let i = 0; i < A.length; i++) {
        if (A[i] % 2 === 0) {
            res[even] = A[i];
            even += 2;
        } else {
            res[odd] = A[i];
            odd += 2;
        }
    }
    return res;
};