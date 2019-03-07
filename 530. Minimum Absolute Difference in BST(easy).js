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
var getMinimumDifference = function(root) {
    var value = [];
    var delta = [];
    dfs(root);
    value.sort((num1, num2) => num1 - num2);
    for (let i = 1; i < value.length; i++) {
        delta.push(value[i] - value[i - 1]);
    }
    return Math.min(...delta);
    
    function dfs(root) {
        if (root === null) return;
        value.push(root.val);
        dfs(root.left);
        dfs(root.right);
    }
};