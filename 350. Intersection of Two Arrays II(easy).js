/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    var res = [];
    var len = Math.min(nums1.length, nums2.length);
    if (nums1.length <= nums2.length) {
        for (let i = 0; i < len; i++) {
            let index = nums2.indexOf(nums1[i])
            if (index !== -1) {
                res.push(nums1[i]);
                nums2.splice(index, 1);
            }
        }
    } else {
        for (let i = 0; i < len; i++) {
            let index = nums1.indexOf(nums2[i]);
            if (index !== -1) {
                res.push(nums2[i]);
                nums1.splice(index, 1);
            }
        }
    }
    return res;
};