/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows === 1) return s;
    
    var row = 0, col = 0, dir = 0;
    var colcount = 0, colflag = false;
    var zarr = [];
    for (let i = 0; i < numRows; i++) {
        zarr[i] = [];
    }
    for (let i = 0; i < s.length; i++) {
        zarr[row][col] = s[i];
        if (row === 0) {
            colflag = false;
        }
        if (row === numRows - 1) {
            colflag = true;
        }
        if (colflag) col++;
        if (dir === 0) {
            if (row === numRows - 1) {
                row--;
                dir = 1;
            } else {
                row++;
            }
        } else {
            if (row === 0) {
                row++;
                dir = 0;
            } else {
                row --;
            }
        }
    }

    var res = '';
    for (let i = 0; i < zarr.length; i++) {
        for (let j = 0; j < zarr[i].length; j++) {
            if (zarr[i][j]) res += zarr[i][j]
        }
    }

    return res;
};
