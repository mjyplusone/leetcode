/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    var delta = [];
    for (let i = 1; i < prices.length; i++) {
        delta.push(prices[i] - prices[i - 1]);
    }
    
    var profit = 0, max = 0;
    for (let i = 0; i < delta.length; i++) {
        if (profit + delta[i] > 0) {
            profit += delta[i];
            max = Math.max(max, profit);
        } else {
            profit = 0;
        }
    }
    return max;
};