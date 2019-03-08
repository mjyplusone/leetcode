/**
 * @param {number} num
 * @return {number[]}
 */
// dp[i] = dp[i / 2] + i % 2
var countBits = function(num) {
    var dp = [];
    dp[0] = 0;
    for (let i = 1; i <= num; i++) {
        if (i % 2 === 0) {
            dp[i] = dp[i / 2];
        } else {
            dp[i] = dp[Math.floor(i / 2)] + 1;
        }
    }
    
    return dp;
};