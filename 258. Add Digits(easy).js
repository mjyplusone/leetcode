/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    var digit = (num + '').split('');
    if (digit.length === 1) return parseInt(digit[0]);
    else {
        var sum = 0;
        for (let i = 0; i < digit.length; i++) {
            sum += parseInt(digit[i]);
        }
        return addDigits(sum);
    }
};