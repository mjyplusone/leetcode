/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function(S, T) {
    var queue1 = [], queue2 = [];
    for (let i = 0; i < S.length; i++) {
        if (S[i] !== '#') queue1.push(S[i]);
        else queue1.pop();
    }
    
    for (let i = 0; i < T.length; i++) {
        if (T[i] !== '#') queue2.push(T[i]);
        else queue2.pop();
    }
    
    return queue1.join('') === queue2.join('');
};