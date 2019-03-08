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
// dfs(node) return 当前node超出的coins个数(可能为负数)
var distributeCoins = function(root) {
    var moves = 0;
    dfs(root);
    return moves;
    
    function dfs(node) {
        if (node === null) return 0;
        
        var left = dfs(node.left);
        var right = dfs(node.right);
        
        moves += Math.abs(left) + Math.abs(right);
        
        return node.val + left + right - 1;
    }
};