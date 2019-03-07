/**
 * @param {number} num
 * @return {boolean}
 */
var isUgly = function(num) {
    if (num <= 0) return false;
    
    var factors = [2, 3, 5];
    while (num > 1) {
        var flag = false;
        for (let i = 0; i < factors.length; i++) {
           if (num % factors[i] === 0) {
               flag = true;
               num /= factors[i];
               break;
           }
        } 
        if (!flag) return false;
    }
    
    return true;
};