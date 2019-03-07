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
var convertBST = function(root) {
    var sum = 0;
    order(root);
    return root;
    
    function order(root) {
        if (root === null) return;
        order(root.right);
        sum += root.val;
        root.val = sum;
        order(root.left);
    }
};