/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    var len1 = nums.length;
    var len2 = Array.from(new Set(nums)).length;
    return len1 !== len2;
};