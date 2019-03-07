/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
    var table = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
    var trans = [];
    var str = [];
    for (let i = 0; i < words.length; i++) {
        trans[i] = [];
        for (let j = 0; j < words[i].length; j++) {
            trans[i][j] = table[words[i][j].charCodeAt() - 97];
        }
        str[i] = trans[i].join('');
    }
    return Array.from(new Set(str)).length;
};