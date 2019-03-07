/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    var num1 = x.toString(2);
    var num2 = y.toString(2);
    
    if (num1.length > num2.length) {
        var len = num1.length - num2.length;
        for (let i = 0; i < len; i++) {
            num2 = '0' + num2;
        }
    } else if (num2.length > num1.length) {
        var len = num2.length - num1.length;
        for (let i = 0; i < len; i++) {
            num1 = '0' + num1;
        }
    }
    
    var count = 0;
    for (let i = 0; i < num1.length; i++) {
        if (num1[i] != num2[i]) {
            count++;
        }
    }
    
    return count;
};
