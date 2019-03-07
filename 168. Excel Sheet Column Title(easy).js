/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
    var res = [];
    var charcode = 'A'.charCodeAt();
    while (n) {
        var remain = n % 26;
        if (remain === 0) remain = 26;
        res.push(String.fromCharCode(charcode - 1 + remain));
        n = Math.floor((n - remain) / 26);
    }
    return res.reverse().join('');
};