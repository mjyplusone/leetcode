/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
    var num = s.split('').reverse();
    var sum = 0;
    for (let i = 0; i < num.length; i ++) {
        sum += (num[i].charCodeAt() - 65 + 1) * Math.pow(26, i);
    }
    return sum;
};