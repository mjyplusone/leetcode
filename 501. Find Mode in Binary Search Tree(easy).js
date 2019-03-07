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
var findMode = function(root) {
    if (root === null) return [];
    var obj = {}, max = 0;
    inorder(root);
    for (var key in obj) {
        max = Math.max(max, obj[key]);
    }
    var res = [];
    for (var key in obj) {
        if (obj[key] === max) {
            res.push(key);
        }
    }
    return res;
    
    function inorder(root) {
        if (root === null) return;
        inorder(root.left);
        if (obj[root.val]) obj[root.val]++;
        else obj[root.val] = 1;
        inorder(root.right);
        
    }
};

