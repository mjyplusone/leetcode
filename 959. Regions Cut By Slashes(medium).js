/**
 * @param {string[]} grid
 * @return {number}
 */
// 并查集 https://zxi.mytechroad.com/blog/graph/leetcode-959-regions-cut-by-slashes/
var regionsBySlashes = function(grid) {
    var n = grid.length;
    var parent = [];
    for (let i = 0; i < n * n * 4; i++) {
        parent[i] = i;
    }
    
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (i > 0) union(getIndex(i - 1, j, 2), getIndex(i, j, 0));
            if (j > 0) union(getIndex(i, j - 1, 1), getIndex(i, j, 3));
            if (grid[i][j] !== '/') {
                union(getIndex(i, j, 0), getIndex(i, j, 1));
                union(getIndex(i, j, 3), getIndex(i, j, 2));
            }
            if (grid[i][j] !== '\\') {
                union(getIndex(i, j, 0), getIndex(i, j, 3));
                union(getIndex(i, j, 1), getIndex(i, j, 2));
            }
        }
    }

    var res = 0;
    for (let i = 0; i < n * n * 4; i++) {
        if (find(i) === i) res++;
    }
    return res;
    
    function find (x) {
        if (parent[x] !== x) {
            parent[x] = find(parent[x]);
        }
        return parent[x];
    }
    
    function union(x, y) {
        parent[find(y)] = find(x);
    }
    
    function getIndex (i, j, k) {
        return (i * n + j) * 4 + k;
    }
};