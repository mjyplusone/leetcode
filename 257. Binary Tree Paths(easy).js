/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    if (root === null) return [];
    
    var res = [];
    dfs(root, []);
    return res;
    
    function dfs(node, path) {
        path.push(node.val);    
        
        if (node.left === null && node.right === null) {
            res.push(path.join('->'));
            return;
        }
        
        if (node.left) {
            var pathl = path.slice(0);
            dfs(node.left, pathl);
        }
        if (node.right) {
            var pathr = path.slice(0);
            dfs(node.right, pathr);
        }
    }
};