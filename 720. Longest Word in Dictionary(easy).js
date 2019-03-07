/**
 * @param {string[]} words
 * @return {string}
 */
var longestWord = function(words) {
    words.sort();
    var dic = [];
    var len = 1;
    for (let i = 0; i < words.length; i++) {
        if (words[i].length === 1) {
            dic.push(words[i]);
        } else {
            let index = dic.indexOf(words[i].slice(0, words[i].length - 1));
            if (index !== -1) {
                dic.push(words[i]);
                len = Math.max(len, words[i].length);
            }
        }
    }
    
    for (let i = 0; i < dic.length; i++) {
        if (dic[i].length === len) return dic[i];
    }
};