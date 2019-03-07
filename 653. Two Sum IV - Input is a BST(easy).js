/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {
    var flag = false;
    if (root === null) return flag;
    var num = [];
    dfs(root, k);
    return flag;
    
    function dfs(node, k) {
        if (num.indexOf(k - node.val) !== -1) {
            flag = true;
            return;
        }
        num.push(node.val);
        if (node.left) dfs(node.left, k);
        if (node.right) dfs(node.right, k);
    }
};

