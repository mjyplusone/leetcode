/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    digits.reverse();
    var carry = 1;
    for (let i = 0; i < digits.length; i++) {
        if (digits[i] + carry < 10) {
            digits[i] += carry;
            carry = 0;
            break;
        } else {
            digits[i] = (digits[i] + carry) % 10;
            carry = 1;
        }
    }
    if (carry === 1) digits[digits.length] = 1;
    
    return digits.reverse();
};