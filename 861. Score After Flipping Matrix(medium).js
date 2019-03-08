/**
 * @param {number[][]} A
 * @return {number}
 */
var matrixScore = function(A) {
    for (let i = 0; i < A.length; i++) {
        if (A[i][0] !== 1) {
            for (let j = 0; j < A[i].length; j++) {
                A[i][j] === 1 ? A[i][j] = 0 : A[i][j] = 1;
            }
        }
    }
    
    for (let j = 1; j < A[0].length; j++) {
        let count0 = 0, count1 = 0;
        for (let i = 0; i < A.length; i++) {
            if (A[i][j] === 0) count0++;
            else count1++;
        }
        if (count0 > count1) {
            for (let i = 0; i < A.length; i++) {
                A[i][j] === 1 ? A[i][j] = 0 : A[i][j] = 1;
            }
        }
    }
    
    var sum = 0;
    for (let i = 0; i < A.length; i++) {
        let line = A[i].reverse();
        for (let j = 0; j < line.length; j++) {
            if (line[j] === 1) sum += Math.pow(2, j);
        }
    }
    return sum;
};