/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    nums1.splice(m, n);
    var index = 0, i;
    for (i = 0; nums1[i] !== undefined; i++) {
        if (nums2[index] < nums1[i]) {
            nums1.splice(i, 0, nums2[index++]);
            if (index === n) break;
        }
    }
    while (index < n) {
        nums1.splice(i, 0, nums2[index++]);
        i++;
    }
    return nums1;
};