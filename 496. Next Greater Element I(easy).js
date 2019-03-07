/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    var res = [];
    for (let i = 0; i < nums1.length; i++) {
        let index = nums2.indexOf(nums1[i]);
        let val = -1;
        for (let j = index + 1; j < nums2.length; j++) {
            if (nums2[j] > nums1[i]) {
                val = nums2[j];
                break;
            }
        }
        res.push(val);
    }
    return res;
};