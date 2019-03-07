/**
 * @param {string} S
 * @return {string}
 */
var toGoatLatin = function(S) {
    var res = [];
    var vowel = ['a', 'e', 'i', 'o', 'u'];
    var sentence = S.split(' ');
    for (let i = 0; i < sentence.length; i++) {
        let word = sentence[i];
        if (vowel.indexOf(word[0].toLowerCase()) !== -1) {
            word += 'ma';
        } else {
            word = word.slice(1) + word[0] + 'ma';
        }
        res.push(word);
    }
    
    for (let i = 0; i < res.length; i++) {
        for (let j = 0; j < i + 1; j++) {
            res[i] += 'a';
        } 
    }
    
    return res.join(' ');
};