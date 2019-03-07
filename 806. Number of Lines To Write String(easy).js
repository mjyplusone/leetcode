/**
 * @param {number[]} widths
 * @param {string} S
 * @return {number[]}
 */
var numberOfLines = function(widths, S) {
    var len = 0;
    var line = 1;
    for (let i = 0; i < S.length; i++) {
        if (len + widths[S[i].charCodeAt() - 97] > 100) {
            len = widths[S[i].charCodeAt() - 97];
            line++;
        } else {
            len += widths[S[i].charCodeAt() - 97];
        }
    }
    var result = [];
    result.push(line);
    result.push(len);
    
    return result;
};