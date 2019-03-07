/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
    var countA = 0, countL = 0, flag = false;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'A') {
            countA++;
            if (countA > 1) return false;
        }
        
        if (s[i] === 'L') {
            countL++;
        } else {
            if (countL > 2) return false;
            countL = 0;
        }
    }
    
    if (countA > 1) return false;
    if (countL > 2) return false;
    return true;
};