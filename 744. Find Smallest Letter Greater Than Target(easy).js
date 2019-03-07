/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    var ch;
    if (target.charCodeAt() >= letters[letters.length - 1].charCodeAt()) {
        ch = 0;
    } else {
        ch = target.charCodeAt();
    }
    
    for (let i = 0; i < letters.length; i++) {
        if (letters[i].charCodeAt() - ch > 0) {
            return letters[i];
        }
    }
};