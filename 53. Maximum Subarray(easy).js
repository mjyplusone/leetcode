/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    if (nums.length === 0) return 0;
    
    var sum = 0, max = -Infinity;
    for (let i = 0; i < nums.length; i++) {
        sum = Math.max(nums[i], sum + nums[i]);
        max = Math.max(max, sum); 
    }
    return max;
};

