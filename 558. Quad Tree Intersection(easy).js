/**
 * // Definition for a QuadTree node.
 * function Node(val,isLeaf,topLeft,topRight,bottomLeft,bottomRight) {
 *    this.val = val;
 *    this.isLeaf = isLeaf;
 *    this.topLeft = topLeft;
 *    this.topRight = topRight;
 *    this.bottomLeft = bottomLeft;
 *    this.bottomRight = bottomRight;
 * };
 */
/**
 * @param {Node} quadTree1
 * @param {Node} quadTree2
 * @return {Node}
 */
var intersect = function(quadTree1, quadTree2) {
    if (quadTree1.isLeaf && quadTree1.val) return quadTree1;
    if (quadTree2.isLeaf && quadTree2.val) return quadTree2;
    if (quadTree1.isLeaf && !quadTree1.val) return quadTree2;
    if (quadTree2.isLeaf && !quadTree2.val) return quadTree1;
    
    var tl = intersect(quadTree1.topLeft, quadTree2.topLeft);
    var tr = intersect(quadTree1.topRight, quadTree2.topRight);
    var bl = intersect(quadTree1.bottomLeft, quadTree2.bottomLeft);
    var br = intersect(quadTree1.bottomRight, quadTree2.bottomRight);
    
    if(tl.val === tr.val && 
       tl.val === bl.val && 
       tl.val === br.val && 
       tl.isLeaf && tr.isLeaf && bl.isLeaf && br.isLeaf) 
        return new Node(tl.val, true, null, null, null, null); 
    else return new Node(false, false, tl, tr, bl, br);
};