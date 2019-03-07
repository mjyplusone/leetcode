/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    var vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    var index = [];
    var letters = [];
    for (let i = 0; i < s.length; i++) {
        if (vowels.indexOf(s[i]) !== -1) {
            index.push(i);
            letters.push(s[i]);
        }
    }
    letters.reverse();
    
    var res = s.split('');
    for (let i = 0; i < index.length; i++) {
        let letter = letters.shift();
        res[index[i]] = letter;
    }
    
    return res.join('');
};