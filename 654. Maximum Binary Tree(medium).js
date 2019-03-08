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
var constructMaximumBinaryTree = function(nums) {
    var max = Math.max(...nums);
    var root = new TreeNode(max);
    var index = nums.indexOf(max);
    var left = nums.slice(0, index);
    var right = nums.slice(index + 1);
    
    if (left.length > 0) root.left = constructMaximumBinaryTree(left);
    if (right.length > 0) root.right = constructMaximumBinaryTree(right);
    
    return root;
};