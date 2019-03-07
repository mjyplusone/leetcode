/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(nums, r, c) {
    var row = nums.length;
    var col = nums[0].length;
    
    if (row * col !== r * c) return nums;
    
    var number = [];
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            number.push(nums[i][j]);
        }
    }
    
    var res = [];
    var index = 0;
    for (let i = 0; i < r; i++) {
        res[i] = [];
        for (let j = 0; j < c; j++) {
            res[i][j] = number[index];
            index++;
        }
    }
    return res;
};