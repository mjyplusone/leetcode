/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    nums.sort((num1, num2) => num1 - num2);
    for (let i = 0; i < nums.length + 1; i++) {
        if (nums[i] !== i) return i;
    }
};