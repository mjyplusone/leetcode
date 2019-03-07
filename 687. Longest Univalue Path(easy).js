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
var longestUnivaluePath = function(root) {
    var sum = 0;
    dfs(root);
    return sum;
    
    function dfs(root) {
        if (root === null) return 0;
        var l = dfs(root.left);
        var r = dfs(root.right);
        var left = 0, right = 0;
        if (root.left && root.left.val === root.val) {
            left = l + 1;
        }
        if (root.right && root.right.val === root.val) {
            right = r + 1;
        }
        sum = Math.max(sum, left + right);
        return Math.max(left, right);
    }
};