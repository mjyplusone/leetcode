/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
    var result = [];
    for (let num = left; num <= right; num++) {
        var divide = (num + '').split('');
        var flag = 0;
        for (let i = 0; i < divide.length; i++) {
            if (num % parseInt(divide[i]) != 0) {
                flag = 1;
                break;
            }
        }
        if (flag == 0) {
            result.push(num);
        }
    }
    return result;
};