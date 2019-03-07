/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    var res = [];
    var queue = [];
    if (root === null) return res;
    queue.push(root);
    while (queue.length > 0) {
        var level = [];
        // !!!
        var len = queue.length;
        for (let i = 0; i < len; i++) {
            var node = queue.shift();
            level.push(node.val);
            for (let j = 0; j < node.children.length; j++) {
                queue.push(node.children[j]);
            }
        }
        res.push(level);
    } 
    return res;
};