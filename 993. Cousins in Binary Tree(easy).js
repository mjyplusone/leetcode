/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function(root, x, y) {
    if (root === null) return false;
    
    var depthx = 0, depthy = 0;
    var parentx = new TreeNode();
    var parenty = new TreeNode();
    dfs(root, x, y, 0, null);
    
    return depthx === depthy && parentx !== parenty;
    
    function dfs(node, x, y, depth, parent) {
        if (node === null) return;
        
        if (node.val === x) {
            depthx = depth + 1;
            parentx = parent;
        }
        if (node.val === y) {
            depthy = depth + 1;
            parenty = parent;
        }
        
        dfs(node.left, x, y, depth + 1, node);
        dfs(node.right, x, y, depth + 1, node);
    }    
};
