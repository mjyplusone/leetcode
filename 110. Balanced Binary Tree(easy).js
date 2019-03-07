/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
    if (root === null) return true;
    
    var left = dfs(root.left);
    var right = dfs(root.right);
    
    if (Math.abs(left - right) > 1) return false;
    else return isBalanced(root.left) && isBalanced(root.right);
};

function dfs(node) {
    if (node === null) return 0;
    
    var left = dfs(node.left) + 1;
    var right = dfs(node.right) + 1;
    
    return Math.max(left, right);
}