/**
 * @param {number} x
 * @return {number}
 */
// 注意32位带符号整数的范围
var reverse = function(x) {
    var max = Math.pow(2, 31) -1;
    var min = -Math.pow(2, 31);
    
    if (x === 0) return 0;
    
    var flag = 0;
    if (x < 0) {
        flag = 1;
        x = -x;
    }
    
    var res = [];
    while (x) {
        res.push(x % 10);
        x = Math.floor(x / 10);
    }
    
    while (res[0] === 0) {
        res.shift();
    }
    
    var num = parseInt(res.join(''));
    
    if (num > max || num < min) return 0;
    
    return flag === 0 ? num : -num;
};