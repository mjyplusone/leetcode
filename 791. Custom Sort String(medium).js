/**
 * @param {string} S
 * @param {string} T
 * @return {string}
 */
var customSortString = function(S, T) {
    S = S.split('');
    T = T.split('');
    var unique = [];
    for (let i = 0; i < T.length; i++) {
        if (S.indexOf(T[i]) === -1) {
            unique.push(T[i])
        }
    }
    T = S.concat(unique);
    return T.join('');
};

customSortString("cba",
"abcd")