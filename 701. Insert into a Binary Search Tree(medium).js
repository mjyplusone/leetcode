/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function(root, val) {
    dfs(root, val);
    return root;
};

function dfs (root, val) {
    if (root.val < val) {
        if (root.right) dfs(root.right, val);
        else root.right = new TreeNode(val);
    } else if (root.val > val) {
        if (root.left) dfs(root.left, val);
        else root.left = new TreeNode(val);
    }
}