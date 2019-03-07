/**
 * @param {number} N
 * @return {number}
 */
var binaryGap = function(N) {
    var binary = N.toString(2);
    
    var one = [];
    for (let i = 0; i < binary.length; i++) {
        if (binary[i] === '1') {
            one.push(i);
        }
    }
    
    if (one.length < 2) return 0;
    
    var sub = [];
    for (let i = 1; i < one.length; i++) {
        sub.push(one[i] - one[i - 1]);
    }
    
    return Math.max(...sub);
};