/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    var res = [];
    var arr = s.split(' ');
    for (let i = 0; i < arr.length; i++) {
        var word = arr[i];
        res.push(word.split('').reverse().join(''));
    }
    return res.join(' ');
};