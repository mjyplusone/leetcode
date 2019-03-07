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
var diameterOfBinaryTree = function(root) {
    var sum = 0;
    dfs(root);
    return sum;
    
    function dfs(node) {
        if (node === null) return 0;
        var left = dfs(node.left);
        var right = dfs(node.right);
        if (!node.left && !node.right) {
            return 0;
        } else {
            if (node.left && node.right) sum = Math.max(sum, left + right + 2);
            else sum = Math.max(sum, left + right + 1);
            return Math.max(left, right) + 1;
        }
    }
};