/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function(num) {
    if (num < 1) return false;
    
    while (num > 1) {
        if (num % 4 !== 0) return false;
        else num /= 4;
    }
    
    return true;
};