/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    var zeros = [], unzero = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            zeros.push(0);
        } else {
            unzero.push(nums[i]);
        }
    }
    var res = unzero.concat(zeros).slice(0);
    for (let i = 0; i < nums.length; i++) {
        nums[i] = res[i];
    }
};