/**
 * @param {number[]} A
 * @return {number[]}
 */
var pancakeSort = function(A) {
    var res = [];
    while (A.length > 1) {
        let max = Math.max(...A);
        let index = A.indexOf(max);
        res.push(index + 1);
        res.push(A.length);
        
        A = A.slice(0, index + 1).reverse().concat(A.slice(index + 1));
        A = A.reverse().slice(0, -1);
    }
    
    return res;
};