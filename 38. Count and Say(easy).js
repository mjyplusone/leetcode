/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    var seq = [];
    seq[0] = '1'
    
    for (let i = 1; i < n; i++) {
        var term = seq[seq.length - 1];
        var val = term[0], count = 1;
        var res = [];
        for (let j = 1; j < term.length; j++) {
            if (term[j] === val) {
                count++;
            } else {
                res.push(count);
                res.push(val);
                val = term[j];
                count = 1;
            }
        }
        res.push(count);
        res.push(val);
        seq.push(res.join(''));
    }
    
    return seq.pop();
};