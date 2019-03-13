/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} pre
 * @param {number[]} post
 * @return {TreeNode}
 */
var constructFromPrePost = function(pre, post) {
    var root = new TreeNode(pre[0]);
    
    if (pre.length === 0) return null;
    if (pre.length === 1) return root;
    
    var preremain = pre.slice(1);
    var postremain = post.slice(0, -1);
    var index = 0;
    for (let i = 0; i < postremain.length; i++) {
        if (postremain[i] === preremain[0]) {
            index = i;
        }
    }
    var preleft = preremain.slice(0, index + 1);
    var preright = preremain.slice(index + 1);
    var postleft = postremain.slice(0, index + 1);
    var postright = postremain.slice(index + 1);
    
    root.left = constructFromPrePost(preleft, postleft);
    root.right = constructFromPrePost(preright, postright);
    
    return root;
};