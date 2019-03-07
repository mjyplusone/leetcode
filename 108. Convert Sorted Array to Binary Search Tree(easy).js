/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    if (nums.length === 0) return null;
    
    var mid = Math.floor((nums.length - 1) / 2);
    var left = nums.slice(0, mid);
    var right = nums.slice(mid + 1);
    var tree = new TreeNode(nums[mid]);
    tree.left = sortedArrayToBST(left);
    tree.right = sortedArrayToBST(right);
    
    return tree;
};