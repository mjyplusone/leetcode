/**
 * @param {number} num
 * @return {string}
 */
var toHex = function(num) {
    var hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
    if (num === 0) return '0';
    
    // 无符号右移得到负数的补码表示
    if (num < 0) {
        num = num >>> 0;
    }
    
    var res = [];
    while (num) {
        res.push(hex[num % 16]);
        num = Math.floor(num / 16);
    }
    
    return res.reverse().join('');
};