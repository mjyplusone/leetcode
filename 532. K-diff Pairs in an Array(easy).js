/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function(nums, k) {
    var count = 0;
    
    if (k === 0) {
        var obj = {};
        for (let i = 0; i < nums.length; i++) {
            if (obj[nums[i]]) {
                obj[nums[i]]++;
            } else {
                obj[nums[i]] = 1;
            }
        }
        for (var key in obj) {
            if (obj[key] !== 1) count++;
        }
        return count;
    }
    
    nums.sort((num1, num2) => num1 - num2);
    nums = Array.from(new Set(nums));
    
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] - nums[i] === k) {
                count++;
                break;
            } else if (nums[j] - nums[i] > k) {
                break;
            }
        }
    }
    
    return count;
};