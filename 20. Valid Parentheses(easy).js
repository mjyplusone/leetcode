/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if (s === null) return true;
    
    var stack = [];
    for (let i = 0; i < s.length; i++) {
        let ch = s[i];
        if ((stack[stack.length - 1] === '(' && ch === ')') ||
            (stack[stack.length - 1] === '{' && ch === '}') ||
            (stack[stack.length - 1] === '[' && ch === ']')) stack.pop();
        else stack.push(ch);
    }
    
    return stack.length === 0;
};