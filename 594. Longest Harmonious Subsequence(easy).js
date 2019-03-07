/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
    var obj = {};
    for (let i = 0; i < nums.length; i++) {
        if (obj[nums[i]]) {
            obj[nums[i]]++;
        } else {
            obj[nums[i]] = 1;
        }
    }
    
    nums = Array.from(new Set(nums)).sort((num1, num2) => num1 - num2);
    
    var len = 0, max = 0;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] - nums[i - 1] === 1) {
            len = obj[nums[i]] + obj[nums[i - 1]];
            max = Math.max(max, len);
        }
    }
    
    return max;
};