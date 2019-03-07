/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    var word = s.split(' ');
    for (let i = word.length - 1; i >= 0; i--) {
        if (word[i] !== '') return word[i].length;
    }
    return 0;
};