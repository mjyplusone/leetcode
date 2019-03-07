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
var findTilt = function(root) {
    var tilt = 0;
    dfs(root);
    return tilt;
    
    function dfs(node) {
        if (node === null) return 0;
        
        var left = dfs(node.left);
        var right = dfs(node.right);
        
        if (node.left && node.right) {
            tilt += Math.abs(left - right);
        } else if (node.left && !node.right) {
            tilt += Math.abs(left);
        } else if (!node.left && node.right) {
            tilt += Math.abs(right);
        }
        
        return node.val + left + right;
    }
};