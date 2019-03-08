/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
var findAndReplacePattern = function(words, pattern) {
    var res = [];
    pattern = pattern.split('');
    for (let i = 0; i < words.length; i++) {
        let word = words[i].split('');
        if (word.length !== pattern.length) continue;
        let obj = {}, letter = [];
        for (let j = 0; j < word.length; j++) {
            if (!obj[pattern[j]] && letter.indexOf(word[j]) === -1) {
                obj[pattern[j]] = word[j]; 
                letter.push(word[j]);
            } else {
                word[j] = obj[pattern[j]];
            }
        }
        if (word.join('') === words[i]) res.push(words[i]);
    }
    return res;
};