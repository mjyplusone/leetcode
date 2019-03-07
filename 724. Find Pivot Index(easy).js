/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    var sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
    }
    
    for (let i = 0; i < nums.length; i++) {
        let left = 0, right = 0;
        for (let j = 0; j < i; j++) {
            left += nums[j];
        }
        right = sum - left - nums[i];
        if (left === right) return i;
    }
    
    return -1;
};