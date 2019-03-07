/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    nums1 = Array.from(new Set(nums1));
    nums2 = Array.from(new Set(nums2));
    
    var res = [];
    for (let i = 0; i < nums1.length; i++) {
        if (nums2.indexOf(nums1[i]) !== -1) {
            res.push(nums1[i]);
        }
    }
    
    return res;
};