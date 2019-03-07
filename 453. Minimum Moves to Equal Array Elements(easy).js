/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function(nums) {
    var count = 0;
    nums.sort((num1, num2) => num1 - num2);
    for (let i = nums.length - 1; i > 0; i--) {
        count += nums[i] - nums[0]
    }
    return count;
};