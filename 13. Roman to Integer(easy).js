/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    var map = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    var num = [];
    for (let i = 0; i < s.length; i++) {
        num.push(map[s[i]]);
    }
    
    var sum = 0;
    for (let i = 0; i < num.length; i++) {
        if (i !== num.length - 1 && num[i] < num[i + 1]) {
            sum += num[i + 1] - num[i];
            i++;
        } else {
            sum += num[i];
        } 
    }
    
    return sum;
};