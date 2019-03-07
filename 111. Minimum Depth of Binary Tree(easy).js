/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
    if (root === null) return 0;
    if (root.right === null && root.left === null) return 1;
    if (root.right === null) return 1 + minDepth(root.left);
    if (root.left === null) return 1 + minDepth(root.right);
    return 1 + Math.min(minDepth(root.left), minDepth(root.right));    
};