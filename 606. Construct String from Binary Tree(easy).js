/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t
 * @return {string}
 */
var tree2str = function(t) {
    if (t === null) return '';
    
    str = [];
    preOrder(t);
    return str.join('');
    
    function preOrder(t) {
        str.push(t.val);
        
        if (t.left) {
            str.push('(');
            preOrder(t.left);
            str.push(')');
        } else if (t.right) {
            str.push('()');
        }
        
        if (t.right) {
            str.push('(');
            preOrder(t.right);
            str.push(')');  
        }
        
    }
};


