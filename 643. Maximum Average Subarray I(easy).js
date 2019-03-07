/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    var sum = [], max = -Infinity;
    sum[0] = 0;
    for (let i = 1; i <= nums.length; i++) {
        sum[i] = sum[i - 1] + nums[i - 1];
        if (i >= k) {
            max = Math.max(max, sum[i] - sum[i - k]);
        }
    }
    return max / k;
};