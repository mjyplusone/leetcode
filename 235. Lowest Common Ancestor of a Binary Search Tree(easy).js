/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    var parentval = root.val;
    
    if (p.val > parentval && q.val > parentval) {
        return lowestCommonAncestor(root.right, p, q);
    } else if (p.val < parentval && q.val < parentval) {
        return lowestCommonAncestor(root.left, p, q);
    } else {
        return root;
    }
};