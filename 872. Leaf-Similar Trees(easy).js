/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
    var res1 = bfs(root1);
    var res2 = bfs(root2);
    
    if (res1.length !== res2.length) return false;
    for (let i = 0; i < res1.length; i++) {
        if (res1[i] !== res2[i]) return false;
    }
    return true;
};

function bfs(root) {
    var res = [];
    var queue = [];
    queue.push(root);
    while (queue.length > 0) {
        var node = queue.shift();
        if (node.left === null && node.right === null) res.push(node.val);
        else if (node.left !== null) queue.push(node.left);
        else if (node.right !== null) queue.push(node.right);
    }
    return res;
} 

