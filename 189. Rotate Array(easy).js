/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    while (k--) {
        let num = nums.pop();
        nums.unshift(num);
    }
    return nums;
};