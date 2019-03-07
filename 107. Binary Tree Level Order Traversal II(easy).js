/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
    if (root === null) return [];
    
    var res = [], queue = [];
    queue.push(root);
    
    while (queue.length > 0) {
        let len = queue.length;
        var tmp = [];
        for (let i = 0; i < len; i++) {
            let node = queue.shift();
            tmp.push(node.val);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        res.push(tmp);
    }
    
    return res.reverse();
};