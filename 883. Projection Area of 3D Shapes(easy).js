/**
 * @param {number[][]} grid
 * @return {number}
 */
var projectionArea = function(grid) {
    var sum1 = 0, sum2 = 0, sum3 = 0;
    for (let i = 0; i < grid.length; i++) {
        let max = 0;
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] != 0) sum1++;
            if (grid[i][j] > max) max = grid[i][j];
        }
        sum2 += max;
    }
    
    for (let j = 0; j < grid[0].length; j++) {
        let max = 0;
        for (let i = 0; i < grid.length; i++) {
            if (grid[i][j] > max) max = grid[i][j];
        }
        sum3 += max;
    }
    
    return sum1 + sum2 + sum3;
};