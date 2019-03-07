/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
    if (nums.length === 0) return 0;
    var max = 0, len = 1;
    var val = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > val) {
            len++;
            val = nums[i];
        } else {
            max = Math.max(max, len);
            len = 1;
            val = nums[i];
        }
    }
    max = Math.max(max, len);
    return max;
};