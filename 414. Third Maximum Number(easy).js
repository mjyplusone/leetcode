/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    nums.sort((num1, num2) => num2 - num1);
    nums = Array.from(new Set(nums));
    
    return nums[2] !== undefined ? nums[2] : nums[0];
};