/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function(words, order) {
    var origin = words.slice(0);
    words.sort((val1, val2) => {
        var len1 = val1.length;
        var len2 = val2.length;
        var len = len1 > len2 ? len2 : len1;
        
        for (let i = 0; i < len; i++) {
            var index1 = order.indexOf(val1[i]);
            var index2 = order.indexOf(val2[i]);
            if (index1 > index2) return 1;
            else if (index1 < index2) return -1;
        }
        
        if (len1 > len2) return 1;
        else if (len1 < len2) return -1;
        else return 0;
    });
    
    for (let i = 0; i < words.length; i++) {
        if (origin[i] !== words[i])  return false;
    }
    return true;
};