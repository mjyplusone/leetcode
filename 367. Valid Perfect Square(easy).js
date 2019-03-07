/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    if (num === 1) return true;
    var num1 = 1, num2 = num;
    while (num1 <= num2) {
        num1++;
        num2 = num / num1;
        if (num2 === num1) return true;
    }
    return false;
};