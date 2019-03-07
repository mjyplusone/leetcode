/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
var maxCount = function(m, n, ops) {    
    if (ops.length === 0) return m * n;
    
    var minx = 40001, miny = 40001;
    for (let i = 0; i < ops.length; i++) {
        let op = ops[i];
        minx = Math.min(minx, op[0]);
        miny = Math.min(miny, op[1]);
    }
    
    return minx * miny;
    
};