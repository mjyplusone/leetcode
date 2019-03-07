/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    g.sort((num1, num2) => num1 - num2);
    s.sort((num1, num2) => num1 - num2);
    
    var count = 0;
    var index = 0;
    for (let i = 0; i < g.length; i++) {
        for (let j = index; j < s.length; j++) {
            if (s[j] >= g[i]) {
                count++;
                index = j + 1;
                break;
            }
        }
    }
    
    return count;
};