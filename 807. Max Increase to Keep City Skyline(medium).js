/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxIncreaseKeepingSkyline = function(grid) {
    var rl = [], tb = [];
    
    for (let i = 0; i < grid.length; i++) {
        let max = 0;
        for (let j = 0; j < grid[0].length; j++) {
            max = Math.max(max, grid[i][j]);
        }
        rl.push(max);
    }
    
    for (let j = 0; j < grid[0].length; j++) {
        let max = 0;
        for (let i = 0; i < grid.length; i++) {
            max = Math.max(max, grid[i][j]);
        }
        tb.push(max);
    }
    
    var height = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            height += Math.min(rl[i], tb[j]) - grid[i][j]; 
        }
    }
    
    return height;
};