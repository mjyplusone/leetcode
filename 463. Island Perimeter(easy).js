/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    var row = grid.length;
    var col = grid[0].length;
    
    var g = [];
    for (let i = 0; i <= row + 1; i++) {
        g[i] = [];
        for (let j = 0; j <= col + 1; j++) {
            if (i === 0 || j === 0 || i === row + 1 || j === col + 1) {
                g[i][j] = 0;
            } else {
                g[i][j] = grid[i - 1][j - 1];
            }
        }
    }

    var len = 0;
    for (let i = 0; i <= row + 1; i++) {
        for (j = 0; j <= col + 1; j++) {
            if (g[i][j] === 1) {
                if (g[i][j - 1] === 0) len++;
                if (g[i][j + 1] === 0) len++;
                if (g[i - 1][j] === 0) len++;
                if (g[i + 1][j] === 0) len++;
            }
        }
    }

    return len;
};

console.log(islandPerimeter([[0,1,0,0],
    [1,1,1,0],
    [0,1,0,0],
    [1,1,0,0]]));