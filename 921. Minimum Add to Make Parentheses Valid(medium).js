/**
 * @param {string} S
 * @return {number}
 */
var minAddToMakeValid = function(S) {
    var str = S.split('');
    var stack = [];
    for (let i = 0; i < str.length; i++) {
        if (stack.length === 0) stack.push(str[i]);
        else {
            let val = stack[stack.length - 1];
            if (val === '(' && str[i] === ')') {
                stack.pop();
            } else {
                stack.push(str[i]);
            }
        }
    }
    return stack.length;
};