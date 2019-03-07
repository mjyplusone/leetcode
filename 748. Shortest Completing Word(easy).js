/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
var shortestCompletingWord = function(licensePlate, words) {
    var letters = [];
    for (let i = 0; i < licensePlate.length; i++) {
        if (/[a-zA-Z]/.test(licensePlate[i])) {
            letters.push(licensePlate[i].toLowerCase());
        }
    }
    
    var res = [];
    for (let i = 0; i < words.length; i++) {
        let flag = true;
        let word = words[i].split('');
        for (let j = 0; j < letters.length; j++) {
            let index = word.indexOf(letters[j]);
            if (index !== -1) {
                word.splice(index, 1).join('');
            } else {
                flag = false;
                break;
            }
        }
        if (flag) res.push(words[i]);
    }

    
    var len = 16;
    for (let i = 0; i < res.length; i++) {
        len =  Math.min(len, res[i].length);
    }
    for (let i = 0; i < res.length; i++) {
        if (res[i].length === len) return res[i];
    }
};