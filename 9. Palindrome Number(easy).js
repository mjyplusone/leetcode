/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    var x = x + '';
    return x === x.split('').reverse().join('');
};