/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number}
 */
var pathSum = function(root, sum) {
    if (root === null) return 0;
    
    var count = 0;
    return dfs(root, 0) + pathSum(root.left, sum) + pathSum(root.right, sum);
    
    function dfs(node, cursum) {
        if (node === null) return 0;
        cursum += node.val;
        return (cursum === sum) + dfs(node.left, cursum) + dfs(node.right, cursum);
    }
};