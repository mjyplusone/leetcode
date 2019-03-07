/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    if (n === 0) return 0;
    
    for (let i = 1; i <= n; i++) {
        let sum = (1 + i) * i / 2;
        if (sum === n) return i;
        else if (sum > n) return i -1;
    }
};