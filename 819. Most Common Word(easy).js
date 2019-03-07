/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
    var obj = {};
    var words = paragraph.split(/[^a-zA-Z]+/);
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].toLowerCase();
        if (banned.indexOf(words[i]) !== -1) continue;
        if (obj[words[i]]) {
            obj[words[i]]++;
        } else {
            obj[words[i]] = 1;
        }
    }
    
    var max = 0, val = '';
    for (key in obj) {
        if (obj[key] > max) {
            max = obj[key];
            val = key;
        }
    }
    
    return val;
};