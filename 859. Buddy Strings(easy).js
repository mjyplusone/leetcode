/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var buddyStrings = function(A, B) {
    if (A.length !== B.length) return false;
    
    if (A === B) {
        var obj = {};
        for (let i = 0; i < A.length; i++) {
            if (obj[A[i]]) obj[A[i]]++;
            else obj[A[i]] = 1;
        }
        for (var key in obj) {
            if (obj[key] > 1) return true;
        }
        return false;
    } else {
        index = [];
        for (let i = 0; i < A.length; i++) {
            if (A[i] !== B[i]) {
                if (index.length < 2) {
                    index.push(i);
                } else {
                    return  false;
                }
            }
        }
        
        return index.length === 2 && A[index[0]] === B[index[1]] && A[index[1]] === B[index[0]];
    }
};