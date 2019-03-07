/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if (prices.length === 0) return 0;
    var sum = 0;
    var buy = prices[0], sell = prices[0];
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] > sell) sell = prices[i];
        else {
            sum += sell - buy;
            buy = prices[i];
            sell = prices[i];
        }
    }
    sum += sell - buy;
    return sum;
};