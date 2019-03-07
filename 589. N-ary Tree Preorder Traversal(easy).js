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

var preorder = function(root) {
    var res = [];
    dfs(root, res);
    return res;
};

function dfs (root, res) {
    if (root !== null) {
        res.push(root.val);
        for (let i = 0; i < root.children.length; i++) {
            dfs(root.children[i], res);
        }
    }
}