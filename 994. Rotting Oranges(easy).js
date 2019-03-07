/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    var queue = [];
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 2) {
                let tmp = [];
                tmp.push(i);
                tmp.push(j);
                queue.push(tmp);
            }
        }
    }
    
    if (queue.length === 0) return JSON.stringify(grid).indexOf(1) === -1 ? 0 : -1;
    
    var count = 0;
    while (queue.length > 0) {
        var len = queue.length;
        var flag = false;
        for (let i = 0; i < len; i++) {
            var cell = queue.shift();
            if (cell[0] - 1 >= 0 && grid[cell[0] - 1][cell[1]] === 1) {
                let tmp = [];
                tmp.push(cell[0] - 1);
                tmp.push(cell[1]);
                queue.push(tmp);
                grid[cell[0] - 1][cell[1]] = 2;
                flag = true;
            } 
            if (cell[0] + 1 < grid.length && grid[cell[0] + 1][cell[1]] === 1) {
                let tmp = [];
                tmp.push(cell[0] + 1);
                tmp.push(cell[1]);
                queue.push(tmp);
                grid[cell[0] + 1][cell[1]] = 2;
                flag = true;
            } 
            if (cell[1] - 1 >= 0 && grid[cell[0]][cell[1] - 1] === 1) {
                let tmp = [];
                tmp.push(cell[0]);
                tmp.push(cell[1] - 1);
                queue.push(tmp);
                grid[cell[0]][cell[1] - 1] = 2;
                flag = true;
            } 
            if (cell[1] + 1 < grid[0].length && grid[cell[0]][cell[1] + 1] === 1) {
                let tmp = [];
                tmp.push(cell[0]);
                tmp.push(cell[1] + 1);
                queue.push(tmp);
                grid[cell[0]][cell[1] + 1] = 2;
                flag = true;
            }
        }
        if (!flag) return JSON.stringify(grid).indexOf(1) === -1 ? count : -1;
        else count++;
    }
};