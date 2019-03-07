/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    var delta = Math.abs(a.length - b.length);
    for (let i = 0; i < delta; i++) {
        a.length > b.length ? b = '0' + b : a = '0' + a;
    }
    
    a = a.split('').reverse();
    b = b.split('').reverse();
    
    var res = [], carry = 0;
    for (let i = 0; i < a.length; i++) {
        let num1 = parseInt(a[i]);
        let num2 = parseInt(b[i]);
        if (num1 + num2 + carry < 2) {
            res[i] = num1 + num2 + carry;
            carry = 0;
        } else {
            res[i] = (num1 + num2 + carry) % 2;
            carry = 1;
        }
    }
    if (carry === 1) res.push(1);
    
    return res.reverse().join('');
};