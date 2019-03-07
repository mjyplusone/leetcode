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
var sumOfLeftLeaves = function(root) {
    var sum = 0;
    if (root === null) return sum;
    dfs(root);
    return sum;
    
    function dfs(root) {
        if (root === null) return;
        if (root.left && root.left.left === null && root.left.right === null) {
            sum += root.left.val; 
        }
        dfs(root.left);
        dfs(root.right);
    }
};