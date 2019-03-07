/**
 * @param {number[]} nums
 * @return {boolean}
 */
// nums1 <= nums3 <= nums4 [1,3,2,3]|| nums1 <= nums2 < nums4 [1,3,2,4]
var checkPossibility = function(nums) {
    var index = -1;
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] > nums[i + 1]) {
            if (index !== -1) return false;
            else index = i;
        }
    }
    return index === -1 || index === 0 || index === nums.length - 2 ||
           nums[index - 1] <= nums[index + 1] || nums[index] <= nums[index + 2];
};