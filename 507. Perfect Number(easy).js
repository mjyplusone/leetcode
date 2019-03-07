/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function(num) {
    if (num === 0 || num === 1) return false;
    
    var sum = 0;
    for (let i = 1; i <= Math.floor(Math.sqrt(num)); i++) {
        if (num % i === 0) {
            sum += i;
            sum += num / i;
        }
    }
    return sum === num * 2;
};