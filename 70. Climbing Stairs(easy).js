/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (n === 1) return 1;
    if (n === 2) return 2;
    
    var first = 1, second = 2;
    var sum = 0;
    for (let i = 3; i <= n; i++) {
        sum = first + second;
        first = second;
        second = sum;
    }
    return sum;
};