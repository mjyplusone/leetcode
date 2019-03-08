/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var rangeSumBST = function(root, L, R) {
    var sum = 0;
    dfs(root);
    return sum;
    
    function dfs (root) {
        if (root === null) return 0;
        if (root.val < L) {
            dfs(root.right);
        } else if (root.val > R) {
            dfs(root.left);
        } else {
            sum += root.val;
            dfs(root.left);
            dfs(root.right);
        }
    }
};

