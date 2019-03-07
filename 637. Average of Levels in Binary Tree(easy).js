/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var averageOfLevels = function(root) {
    var res = [];
    var queue = [];
    if (root === null) return res;
    queue.push(root);
    while (queue.length > 0) {
        var level = 0;
        var len = queue.length;
        for (let i = 0; i < len; i++) {
            var node = queue.shift();
            level += node.val;
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        res.push(level / len);
    }
    return res;
};