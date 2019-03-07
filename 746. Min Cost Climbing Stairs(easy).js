/**
 * @param {number[]} cost
 * @return {number}
 */
// 递归写法
// var minCostClimbingStairs = function(cost) {
//     return mincost(cost.length, cost);
// };

// function mincost(n, cost) {
//     if (n === 0 || n === 1) return 0;

//     return Math.min(mincost(n - 1, cost) + cost[n - 1], mincost(n - 2, cost) + cost[n - 2]);
// }


// 非递归写法
/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    var f0 = 0, f1 = 0, f;
    for (let i = 2; i <= cost.length; i++) {
        f = Math.min(f1 + cost[i - 1], f0 + cost[i - 2]);
        f0 = f1;
        f1 = f;
    }   
    return f;
};

    