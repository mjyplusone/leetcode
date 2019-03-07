/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    var count = 0;
    
    while (n > 0) {
        if (n % 2 === 1) {
            n -= 1;
            count++;
        } else {
            n /= 2;
        }
    }
    
    return count;
};