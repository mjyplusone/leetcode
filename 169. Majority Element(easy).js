/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    nums.sort((num1, num2) => num1 - num2);
    
    return nums[Math.floor(nums.length / 2)];
};