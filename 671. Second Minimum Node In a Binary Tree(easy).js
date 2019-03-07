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
var findSecondMinimumValue = function(root) {
    var queue = [];
    order(root);
    queue.sort((num1, num2) => num1 - num2);
    var unique = Array.from(new Set(queue));
    return unique.length > 1 ? unique[1] : -1;
    
    function order(node) {
        if (node === null) return;
        queue.push(node.val);
        order(node.left);
        order(node.right);
    }
};