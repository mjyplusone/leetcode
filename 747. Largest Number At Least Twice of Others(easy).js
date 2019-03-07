/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
    var max = -Infinity, index = -1;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > max) {
            max = nums[i];
            index = i;
        }
    }
    
    for (let i = 0; i < nums.length; i++) {
        if (i === index) continue;
        if (max < nums[i] * 2) return -1;
    }
    
    return index;
};