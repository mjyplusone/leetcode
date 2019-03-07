/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    var delta = Math.abs(num1.length - num2.length);
    for (let i = 0; i < delta; i++) {
        num1.length > num2.length ? num2 = '0' + num2 : num1 = '0' + num1;
    }
    
    var sum = [], carry = 0;
    for (let i = num1.length - 1; i >= 0; i--) {
        let n1 = parseInt(num1[i]);
        let n2 = parseInt(num2[i]);
        if (n1 + n2 + carry < 10) {
            sum[i] = n1 + n2 + carry;
            carry = 0;
        } else {
            sum[i] = (n1 + n2 + carry) % 10;
            carry = 1;
        }
    }
    
    if (carry === 1) {
        return '1' + sum.join('');
    } else {
        return sum.join('');
    }
};