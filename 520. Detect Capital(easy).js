/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    if (!/[a-z]/.test(word)) return true;
    if (!/[A-Z]/.test(word)) return true;
    if (!/[a-z]/.test(word[0]) && !/[A-Z]/.test(word.slice(1))) return true;
    return false;
};