/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[]}
 */
var postorder = function(root) {
    var res = [];
    if (root === null) return res;
    order(root, res);
    return res;
};

function order(node, res) {
    for (let i = 0; i < node.children.length; i++) {
        order(node.children[i], res);
    }
    res.push(node.val);
}
