/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var pruneTree = function(root) {
    if (allZero(root)) return null;
    return root;
        
    function allZero (root) {
        if (root === null) return true;

        var left = allZero(root.left);
        var right = allZero(root.right);

        if (left) root.left = null;
        if (right) root.right = null;

        if (root.val === 1) return false;
        else return left && right;
    }
};

