/**
 * @param {number[]} piles
 * @return {boolean}
 */
// 解法1：直接返回true
// 解法2：dp[i][j] 为从piles[i]到piles[j]可以比对手多得的分数
// dp[i][j] = max(piles[i] - dp[i + 1][j], piles[j] - dp[i][j - 1])
// https://blog.csdn.net/Blurryface_/article/details/81538421
var stoneGame = function(piles) {
    var dp = [];
    for (let i = 0; i < piles.length; i++) {
        dp[i] = [];
        dp[i][i] = piles[i];
    }
    
    for (let d = 1; d < piles.length; d++) {
        for (let i = 0; i < piles.length - d; i++) {
            dp[i][i + d] = Math.max(piles[i] - dp[i + 1][i + d], piles[i + d] - dp[i][i + d - 1]);
        }
    }
    
    return dp[0][piles.length - 1] > 0;
};

