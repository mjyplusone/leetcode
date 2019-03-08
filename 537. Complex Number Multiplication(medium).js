/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var complexNumberMultiply = function(a, b) {
    var a1 = parseInt(a.split('+')[0]);
    var a2 = parseInt(a.split('+')[1].slice(0, -1));
    var b1 = parseInt(b.split('+')[0]);
    var b2 = parseInt(b.split('+')[1].slice(0, -1));
    
    var sum = '';
    sum += a1 * b1 - a2 * b2;
    sum += '+';
    sum += a1 * b2 + a2 * b1 + 'i';
    
    return sum;
};