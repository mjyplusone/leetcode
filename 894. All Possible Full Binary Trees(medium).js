/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number} N
 * @return {TreeNode[]}
 */
var allPossibleFBT = function(N) {
    var res = [];
    if (N === 0) return res;
    if (N === 1) {
        res.push(new TreeNode(0));
        return res;
    }
    
    for (let leftnum = 1; leftnum < N - 1; leftnum += 2) {
        let rightnum = N - 1 - leftnum;
        let left = allPossibleFBT(leftnum);
        let right = allPossibleFBT(rightnum);
        for (let i = 0; i < left.length; i++) {
            for (let j = 0; j < right.length; j++) {
                let root = new TreeNode(0);
                root.left = left[i];
                root.right = right[j];
                res.push(root);
            }
        }
    }
    
    return res;
};

