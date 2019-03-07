/**
 * @param {number[][]} grid
 * @return {number}
 */
var surfaceArea = function(grid) {
    var row = grid.length;
    var col = grid[0].length;
    
    var sz = 0, sx =0 , sy = 0;
    for (let i = 0; i < row; i++) {
        let maxx = 0;
        for (let j = 0; j < col; j++) {
            if (grid[i][j] !== 0) sz++;
            maxx = Math.max(maxx, grid[i][j]);
        }
        sx += maxx;
    }
    console.log(sz);
    console.log(sx);
    
    for (let i = 0; i < col; i++) {
        let maxy = 0;
        for (let j = 0; j < row; j++) {
            maxy = Math.max(maxy, grid[j][i]);
        }
        sy += maxy;
    }
    console.log(sy);
    
    return (sx + sy + sz) * 2;
};

surfaceArea([[1,1,1],[1,0,1],[1,1,1]]);