/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var vals = [];

var isUnivalTree = function(root) {
    // 因为要多次测试，记得清空
    vals = [];
    dfs(root);
    if (Array.from(new Set(vals)).length === 1) return true;
    else return false;
};

function dfs(node) {
    if (node !== null) {
        vals.push(node.val);
        dfs(node.left);
        dfs(node.right);
    }
}