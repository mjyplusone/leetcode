/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    var sarr = s.split('');
    for (let i = 0; i < t.length; i++) {
        let index = sarr.indexOf(t[i]);
        if (index === -1) {
            return t[i];
        } else {
            sarr.splice(index, 1);
        }
    }
    return sarr[0];
};