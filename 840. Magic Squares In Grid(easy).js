/**
 * @param {number[][]} grid
 * @return {number}
 */
var numMagicSquaresInside = function(grid) {
    var count = 0;
    for (let i = 0; i < grid.length - 2; i++) {
        for (let j = 0; j < grid[0].length - 2; j++) {
            if (grid[i + 1][j + 1] !== 5) continue;
            if (isMagic(grid[i][j], grid[i][j + 1], grid[i][j + 2],
                        grid[i + 1][j], grid[i + 1][j + 1], grid[i + 1][j + 2],
                        grid[i + 2][j], grid[i + 2][j + 1], grid[i + 2][j + 2])) {
                count++;
            }
        }
    }
    return count;
};

function isMagic() {
    var count = [];
    for (let i = 0; i < arguments.length; i++) {
        count[arguments[i]] = 1;
    }
    for (let i = 1; i <= 9; i++) {
        if (count[i] != 1) return false;
    }
    
    return arguments[0] + arguments[1] + arguments[2] === 15 &&
           arguments[3] + arguments[4] + arguments[5] === 15 &&
           arguments[6] + arguments[7] + arguments[8] === 15 &&
           arguments[0] + arguments[3] + arguments[6] === 15 &&
           arguments[1] + arguments[4] + arguments[7] === 15 &&
           arguments[2] + arguments[5] + arguments[8] === 15 &&
           arguments[0] + arguments[4] + arguments[8] === 15 &&
           arguments[2] + arguments[4] + arguments[6] === 15
}