/**
 * @param {number[]} A
 * @return {number}
 */
var largestPerimeter = function(A) {
    A.sort((num1, num2) => num1 - num2);
    for (let i = A.length - 3; i >=0; i--) {
        if (A[i] + A[i + 1] > A[i + 2]) {
            return A[i] + A[i + 1] + A[i + 2];
        }
    }
    return 0;
};