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
var increasingBST = function(root) {
    var vals = [];
    inorder(root, vals);
    var tree = new TreeNode(0);
    var t = tree;
    for (let i = 0; i < vals.length; i++) {
        t.right = new TreeNode(vals[i]);
        t = t.right;
    }
    return tree.right;
};

function inorder(node, vals) {
    if (node === null) return;
    inorder(node.left, vals);
    vals.push(node.val);
    inorder(node.right, vals);
}