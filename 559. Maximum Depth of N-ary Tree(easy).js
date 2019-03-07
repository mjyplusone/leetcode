/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number}
 */
var maxDepth = function(root) {
    if (root === null) return 0;
    return dfs(root);
};

function dfs(node) {
    let depth = 0;
    for (let i = 0; i < node.children.length; i++) {
        depth = Math.max(depth, dfs(node.children[i]));
    }
    return depth + 1;
}