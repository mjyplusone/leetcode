/**
 * @param {number} num
 * @return {string}
 */
var convertToBase7 = function(num) {
    var flag = 0;
    if (num < 0) {
        flag = 1;
        num = -num;
    }
    var res = '';
    while (num >= 7) {
        let tmp = num % 7
        num = Math.floor(num / 7);
        res += tmp;
    }
    res += num;
    return (flag === 1 ? '-' : '') + res.split('').reverse().join('');
};