/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    nums.sort((num1, num2) => num1 - num2);
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== nums[i + 1]) {
            nums.splice(i, 1);
            i--;
        }
    }
    return nums;
};